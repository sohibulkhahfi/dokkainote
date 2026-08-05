
    let activeQuizIndex = -1;
    let isChecked = false; // Status penanda apakah jawaban sudah diperiksa

function renderGrid() {
    const homeView = document.getElementById('homeView');
    homeView.innerHTML = "";

    // 1. AMBIL DATABASE MASTER (Jika belum ada, buat objek kosong {})
    const masterDB = JSON.parse(localStorage.getItem('jft_quiz_master_db')) || {};

    jftDatabase.slice().reverse().forEach((data, index) => {
        // Membuat sub-kunci unik berdasarkan tanggal kuis (contoh: "22_Juni_2026")
        const quizKey = data.date.replace(/ /g, "_");
        
        // 2. AMBIL DATA KUIS SPESIFIK dari dalam objek master
        const quizData = masterDB[quizKey] || {
            count: 0,
            bestScore: 0,
            lastScore: 0,
            lastDate: null
        };

        let statusText = "Belum dikerjakan";
        let cardClass = "";
        let stars = "☆☆☆☆☆";

        // Logika Penentuan Status & Bintang berdasarkan Jumlah Percobaan (count)
        if (quizData.count === 0) {
            statusText = "Belum dikerjakan";
            stars = "☆☆☆☆☆";
        } else if (quizData.count >= 1 && quizData.count <= 2) {
            statusText = "Sedang dipelajari";
            cardClass = "sedang-dipelajari";
            stars = "★★★☆☆";
        } else if (quizData.count >= 3 && quizData.count <= 5) {
            statusText = "Perlu review";
            cardClass = "perlu-review";
            stars = "★★★★☆";
        } else if (quizData.count > 5) {
            statusText = "Sudah sering dilatih";
            cardClass = "gold";
            stars = "★★★★★";
        }

        // Logika Hitung "Berapa hari lalu" & Peringatan Seminggu
        let waktuLaluText = "-";
        let peringatanTambahan = "";

        if (quizData.lastDate) {
            const tglTerakhir = new Date(quizData.lastDate);
            const tglSekarang = new Date();
            const selisihWaktu = tglSekarang.getTime() - tglTerakhir.getTime();
            const selisihHari = Math.floor(selisihWaktu / (1000 * 3600 * 24));

            if (selisihHari === 0) {
                waktuLaluText = "Hari ini";
            } else {
                waktuLaluText = `${selisihHari} hari lalu`;
            }

            if (selisihHari >= 7) {
                peringatanTambahan = `<div style="color: #e71d36; font-weight: bold; font-size: 0.8rem; margin-top: 5px;">⚠️ Perlu dilatih kembali</div>`;
            }
        }

        let card = document.createElement('div');
        card.className = `grid-card ${cardClass}`;

        const tanggalRingkas = data.date.split(" ").slice(0, 2).join(" ");

        card.innerHTML = `
            <!--<div style="font-size: 0.9rem; color: #666; font-weight: bold;">${tanggalRingkas}</div>-->
            <div class="grid-card-title">${data.title}</div>
            <div style="font-size: 1.4rem; color: #f1c40f; margin: 5px 0;">${stars}</div>
            
            ${quizData.count > 0 ? `
                <div style="font-size: 1.2rem; font-weight: bold; color: #2c3e50;">${quizData.lastScore}%</div>
                <div style="font-size: 0.85rem; color: #555; margin-bottom: 8px;">Review ${quizData.count}x</div>
                
                <div style="border-top: 1px dashed #ddd; padding-top: 5px; width: 100%; text-align: left; font-size: 0.75rem; color: #666;">
                    <div>Percobaan: <b>${quizData.count}</b></div>
                    <div>Nilai Terbaik: <b style="color: #2ec4b6;">${quizData.bestScore}%</b></div>
                    <div>Terakhir: <b>${waktuLaluText}</b></div>
                </div>
            ` : `
                <div style="font-size: 0.9rem; color: #999; margin: 10px 0;">${statusText}</div>
            `}
            ${peringatanTambahan}
        `;
        
        card.onclick = () => openQuiz(index);
        homeView.appendChild(card);
    });
}

function wrapTextForSpeech(htmlString) {
    // Memecah teks berdasarkan "。" atau "、", dan tetap menyimpan tanda baca tersebut di dalam array
    const segments = htmlString.split(/([。、])/);
    let wrappedText = "";
    let currentChunk = "";
    let spanIndex = 0;

    for (let i = 0; i < segments.length; i++) {
        currentChunk += segments[i];
        // Jika elemen saat ini adalah tanda baca, tutup span dan simpan
        if (segments[i] === "。" || segments[i] === "、") {
            wrappedText += `<span class="speech-segment" id="speech-${spanIndex}">${currentChunk}</span>`;
            currentChunk = "";
            spanIndex++;
        }
    }
    
    // Masukkan sisa teks jika ada kalimat di akhir yang tidak memiliki tanda baca
    if (currentChunk.trim() !== "") {
        wrappedText += `<span class="speech-segment" id="speech-${spanIndex}">${currentChunk}</span>`;
    }

    return wrappedText;
}

    function openQuiz(index) {
        window.speechSynthesis.cancel();
        activeQuizIndex = index;
        isChecked = false; // Reset status setiap kali membuka kuis baru

        // Memaksa browser melakukan scroll otomatis ke posisi paling atas layar (koordinat X=0, Y=0)
        window.scrollTo({ top: 0, behavior: 'instant' });
        // ----------------------------
        
        document.getElementById('homeView').classList.add('hidden');
        document.getElementById('quizView').classList.remove('hidden');
        document.getElementById('headerSubtitle').style.display = 'none';

        // Mengembalikan tombol ke keadaan awal
        const actionBtn = document.getElementById('actionBtn');
        actionBtn.innerText = "Periksa Jawaban";
        actionBtn.classList.remove('btn-reset');

        // RESET TOGGLE FURIGANA KE ON SETIAP BUKA KUIS BARU
        const toggleInput = document.getElementById('furiganaToggle');
        if (toggleInput) {
            toggleInput.checked = true;
        }
        const readingContent = document.getElementById('readingContent');
        if (readingContent) {
            readingContent.classList.remove('hide-furigana');
        }

        const currentData = jftDatabase[index];
        document.getElementById('quizMainTitle').innerHTML = currentData.title;
        // Teks dilewatkan ke wrapTextForSpeech sebelum dicetak ke layar
        const wrappedReadingText = wrapTextForSpeech(currentData.readingText);
        document.getElementById('readingContent').innerHTML = wrappedReadingText;

        // === SEMBUNYIKAN/MUNCULKAN TOMBOL AUDIO BERDASARKAN STATUS ===
        // =================================================================
            const masterDB = JSON.parse(localStorage.getItem('jft_quiz_master_db')) || {};
        const quizKey = currentData.date.replace(/ /g, "_");
        const quizData = masterDB[quizKey] || { count: 0 };
        const audioContainer = document.getElementById('audioBtnContainer');

        if (quizData.count > 0) {
        // Jika sudah pernah dikerjakan minimal 1 kali, tampilkan tombol audio
        audioContainer.style.display = "block";
        } else {
        // Jika belum pernah dikerjakan, sembunyikan tombol audio
        audioContainer.style.display = "none";
        }
        //

        const quizContent = document.getElementById('quizContent');
        quizContent.innerHTML = "";
        document.getElementById('scoreDisplay').style.display = "none";

        currentData.questions.forEach((quiz, qIdx) => {
            let qBlock = document.createElement('div');
            qBlock.className = 'question-block';
            qBlock.innerHTML = `<p><strong>Q${qIdx + 1}. ${quiz.q}</strong></p>`;

            let oList = document.createElement('ul');
            oList.className = 'options-list';

            quiz.options.forEach((opt, oIdx) => {
                let li = document.createElement('li');
                li.className = 'option-item';
                li.innerHTML = `
                    <input type="radio" name="q${qIdx}" value="${oIdx}" id="q${qIdx}_o${oIdx}">
                    <label for="q${qIdx}_o${oIdx}">${opt}</label>
                `;
                oList.appendChild(li);
            });

            qBlock.appendChild(oList);
            quizContent.appendChild(qBlock);
        });

        // Load Esai
        const essaySection = document.getElementById('essaySection');
        const essayContent = document.getElementById('essayContent');
        if(currentData.essayQuestions && currentData.essayQuestions.length > 0) {
            essaySection.style.display = "block";
            essayContent.innerHTML = "";
            currentData.essayQuestions.forEach((eq, eqIdx) => {
                let eqBlock = document.createElement('div');
                eqBlock.className = 'essay-block';
                eqBlock.innerHTML = `
                    <p><strong>問${eqIdx + 1}: ${eq.q}</strong></p>
                    <button class="essay-btn" onclick="toggleEssayAnswer(${eqIdx})">Lihat Jawaban</button>
                    <p id="essayAns_${eqIdx}" class="essay-answer">Kunci Jawaban: ${eq.a}</p>
                `;
                essayContent.appendChild(eqBlock);
            });
        } else {
            essaySection.style.display = "none";
        }

        // Load Kosakata
        const vocabSection = document.getElementById('vocabSection');
        const vocabContent = document.getElementById('vocabContent');
        if (currentData.vocabulary && currentData.vocabulary.length > 0) {
            vocabSection.style.display = "block";
            vocabContent.innerHTML = "";
            currentData.vocabulary.forEach(v => {
                let row = document.createElement('tr');
                row.innerHTML = `<td><strong>${v.word}</strong></td><td>${v.meaning}</td>`;
                vocabContent.appendChild(row);
            });
        } else {
            vocabSection.style.display = "none";
        }
    }

    function goHome() {
        window.speechSynthesis.cancel(); 
        resetAudioButton();

        document.getElementById('quizView').classList.add('hidden');
        document.getElementById('homeView').classList.remove('hidden');
        document.getElementById('headerSubtitle').style.display = 'block';
        activeQuizIndex = -1;
        renderGrid();
    }

    // Fungsi Pengendali Aksi Tombol Utama
    function handleQuizAction() {
        if (!isChecked) {
            checkAnswers();
        } else {
            resetQuiz();
        }
    }

    // Mengubah fungsi checkAnswers() sesuai keinginan Anda
function checkAnswers() {
    if (activeQuizIndex === -1) return;
    
    const currentData = jftDatabase[activeQuizIndex];
    let totalQuestions = currentData.questions.length;

    // Validasi Jawaban Belum Selesai
    const answeredCount = document.querySelectorAll('#quizContent input[type="radio"]:checked').length;
    if (answeredCount < totalQuestions) {
        showCustomAlert("Ada soal yang belum diselesaikan. Mohon isi semua jawaban terlebih dahulu sebelum memeriksa!");
        return; 
    }

    let score = 0;

    currentData.questions.forEach((quiz, qIdx) => {
        const selectedOpt = document.querySelector(`input[name="q${qIdx}"]:checked`);
        const optionsItems = document.querySelectorAll(`input[name="q${qIdx}"]`);

        optionsItems.forEach((input, oIdx) => {
            let parentLi = input.parentElement;
            parentLi.classList.remove('correct', 'wrong');

            if (oIdx === quiz.correct) {
                parentLi.classList.add('correct');
            }
            if (selectedOpt && parseInt(selectedOpt.value) === oIdx && oIdx !== quiz.correct) {
                parentLi.classList.add('wrong');
            }

            input.disabled = true;
        });

        if (selectedOpt && parseInt(selectedOpt.value) === quiz.correct) {
            score++;
        }
    });

    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.style.display = "block";
    scoreDisplay.innerHTML = `Skor Anda: ${score} / ${totalQuestions} (${Math.round((score/totalQuestions)*100)}%)`;

    // =================================================================
    // === BAGIAN UPDATE BARU: LOGIKA 1 OBJECT MASTER DI LOCAL STORAGE ===
    // =================================================================
    
    // 1. Ambil database master seluruh kuis
    let masterDB = JSON.parse(localStorage.getItem('jft_quiz_master_db')) || {};
    
    // Buat sub-key berdasarkan tanggal (contoh: "22_Juni_2026")
    const quizKey = currentData.date.replace(/ /g, "_");
    
    // 2. Ambil data spesifik kuis ini (jika belum ada, buat struktur default)
    let quizData = masterDB[quizKey] || {
        count: 0,
        bestScore: 0,
        lastScore: 0,
        lastDate: null
    };

    const skorPersen = Math.round((score / totalQuestions) * 100);

    // 3. Perbarui isi data kuis spesifik tersebut
    quizData.count += 1;
    quizData.lastScore = skorPersen;
    quizData.lastDate = new Date().toISOString();

    if (skorPersen > quizData.bestScore) {
        quizData.bestScore = skorPersen;
    }

    // 4. Masukkan kembali data kuis yang diperbarui ke dalam objek master
    masterDB[quizKey] = quizData;

    // 5. Simpan seluruh objek master ke localStorage dengan satu nama key saja
    localStorage.setItem('jft_quiz_master_db', JSON.stringify(masterDB));
    
    // =================================================================

    isChecked = true;
    const actionBtn = document.getElementById('actionBtn');
    actionBtn.innerText = "Mulai Lagi";
    actionBtn.classList.add('btn-reset');
}

    // Fungsi untuk mengulang kuis kembali ke keadaan bersih semula
    function resetQuiz() {
        if (activeQuizIndex === -1) return;

        isChecked = false;
        
        // Kembalikan tombol ke setelan awal
        const actionBtn = document.getElementById('actionBtn');
        actionBtn.innerText = "Periksa Jawaban";
        actionBtn.classList.remove('btn-reset');

        // Sembunyikan kembali skor tampilan
        document.getElementById('scoreDisplay').style.display = "none";

        // Bersihkan warna lis jawaban dan hidupkan kembali input radio
        const allRadioInputs = document.querySelectorAll('#quizContent input[type="radio"]');
        allRadioInputs.forEach(input => {
            input.disabled = false;
            input.checked = false; // Hapus centang pilihan lama
            input.parentElement.classList.remove('correct', 'wrong');
        });
        
        // Sembunyikan kembali esai bila sempat dibuka
        const currentData = jftDatabase[activeQuizIndex];
        if(currentData.essayQuestions) {
            currentData.essayQuestions.forEach((_, idx) => {
                const ans = document.getElementById(`essayAns_${idx}`);
                if(ans) ans.style.display = "none";
            });
        }
    }

    function toggleEssayAnswer(idx) {
        const ans = document.getElementById(`essayAns_${idx}`);
        ans.style.display = (ans.style.display === "block") ? "none" : "block";
    }

    function showCustomAlert(message) {
    document.getElementById('customAlertMessage').innerText = message;
    document.getElementById('customAlert').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

let currentVocabList = [];
let currentVocabIdx = 0;
let selectedCorrectMeaning = "";

function startVocabQuiz() {
    const currentData = jftDatabase[activeQuizIndex];
    if (!currentData || !currentData.vocabulary || currentData.vocabulary.length < 2) {
        alert("Kosakata tidak cukup untuk membuat kuis (minimal harus ada 2 kata).");
        return;
    }

    // Copy list kosakata dari database aktif dan acak urutan soalnya
    currentVocabList = [...currentData.vocabulary].sort(() => Math.random() - 0.5);
    // Batasi kuis maksimal 5 soal saja agar tidak terlalu panjang, atau sesuaikan dengan total kata yang ada
    if(currentVocabList.length > 10) currentVocabList = currentVocabList.slice(0, 10);
    
    currentVocabIdx = 0;
    document.getElementById('vocabQuizModal').style.display = 'flex';
    showVocabQuestion();
}

function showVocabQuestion() {
    document.getElementById('vocabNextBtn').style.display = 'none';

    document.getElementById('vocabSentenceContainer').style.display = 'none';
    
    const totalQuestions = currentVocabList.length;
    document.getElementById('vocabProgress').innerText = `Soal ${currentVocabIdx + 1} dari ${totalQuestions}`;
    
    const currentQuiz = currentVocabList[currentVocabIdx];
    document.getElementById('vocabQuestionWord').innerText = currentQuiz.word;
    selectedCorrectMeaning = currentQuiz.meaning;

    // Ambil semua arti kata lain dari database aktif untuk dijadikan opsi pengecoh (distractor)
    const allMeanings = jftDatabase[activeQuizIndex].vocabulary.map(v => v.meaning);
    let wrongMeanings = allMeanings.filter(m => m !== selectedCorrectMeaning);
    
    // Acak pilihan pengecoh dan ambil maksimal 3
    wrongMeanings = wrongMeanings.sort(() => Math.random() - 0.5).slice(0, 3);
    
    // Gabungkan jawaban benar dengan pilihan pengecoh, lalu acak posisinya (A, B, C, D)
    const finalOptions = [selectedCorrectMeaning, ...wrongMeanings].sort(() => Math.random() - 0.5);

    // Render tombol pilihan jawaban ke dalam modal
    const container = document.getElementById('vocabOptionsContainer');
    container.innerHTML = "";

    finalOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        // Styling dasar tombol pilihan kuis
        Object.assign(btn.style, {
            backgroundColor: "white",
            color: "#333",
            border: "2px solid #eef2f7",
            padding: "12px 15px",
            borderRadius: "8px",
            cursor: "pointer",
            textAlign: "left",
            fontSize: "0.95rem",
            fontWeight: "500",
            transition: "all 0.2s"
        });
        
        btn.onclick = () => checkVocabAnswer(btn, opt);
        container.appendChild(btn);
    });
}

function checkVocabAnswer(clickedBtn, selectedOpt) {
    const container = document.getElementById('vocabOptionsContainer');
    const allButtons = container.querySelectorAll('button');

    // Kunci semua tombol agar pengguna tidak bisa mengganti jawaban
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedOpt === selectedCorrectMeaning) {
        // Jika Benar: Hijau
        clickedBtn.style.backgroundColor = "#2ec4b6";
        clickedBtn.style.color = "white";
        clickedBtn.style.borderColor = "#2ec4b6";
    } else {
        // Jika Salah: Merah dan tunjukkan yang benar
        clickedBtn.style.backgroundColor = "#e71d36";
        clickedBtn.style.color = "white";
        clickedBtn.style.borderColor = "#e71d36";

        allButtons.forEach(btn => {
            if (btn.innerText === selectedCorrectMeaning) {
                btn.style.backgroundColor = "#2ec4b6";
                btn.style.color = "white";
                btn.style.borderColor = "#2ec4b6";
            }
        });
    }

    // === LOGIKA BARU: MENAMPILKAN CONTOH KALIMAT DAN ARTINYA ===
    const currentQuiz = currentVocabList[currentVocabIdx];
    
    // Pastikan data sentence tersedia di dalam objek vocab tersebut
    if (currentQuiz.sentence && currentQuiz.meaningSentence) {
        document.getElementById('vocabExampleSentence').innerText = currentQuiz.sentence;
        document.getElementById('vocabExampleMeaning').innerText = currentQuiz.meaningSentence;
        
        // Munculkan container kotak kalimat dengan efek display block
        document.getElementById('vocabSentenceContainer').style.display = 'block';
    }
    // ===========================================================

    // Munculkan tombol Lanjut
    document.getElementById('vocabNextBtn').style.display = 'block';
}

function nextVocabQuestion() {
    currentVocabIdx++;
    if (currentVocabIdx < currentVocabList.length) {
        showVocabQuestion();
    } else {
        alert("Hebat! Anda telah menyelesaikan mini kuis kosakata untuk materi hari ini. 🎉");
        closeVocabQuiz();
    }
}

function closeVocabQuiz() {
    document.getElementById('vocabQuizModal').style.display = 'none';
}

let currentUtterance = null; // Menyimpan status audio yang sedang berjalan

// Variabel global untuk mengatur antrean suara
let speechQueue = [];
let currentSpeechIndex = 0;
let isReading = false;

function toggleReadingSpeech() {
    const playBtn = document.getElementById('playAudioBtn');
    
    // 1. Jika audio sedang berjalan, Stop
    if (isReading || window.speechSynthesis.speaking) {
        stopReading();
        return;
    }

    // 2. Ambil semua elemen segmen (span) yang sudah kita bungkus sebelumnya
    const segments = document.querySelectorAll('.speech-segment');
    if (segments.length === 0) {
        alert("Tidak ada teks yang bisa dibaca.");
        return;
    }

    // 3. Persiapan membaca
    isReading = true;
    playBtn.innerHTML = "🛑 Hentikan Suara";
    playBtn.style.backgroundColor = "#e71d36"; 

    const readingBox = document.getElementById("ReadingBox");
    if(readingBox) readingBox.scrollIntoView({ behavior: 'smooth', block: 'start' });

    speechQueue = Array.from(segments);
    currentSpeechIndex = 0;

    // Mulai membaca setelah jeda 0.5 detik
    setTimeout(() => {
        playNextSegment();
    }, 500);
}

function playNextSegment() {
    if (!isReading) return; // Berhenti jika user menekan tombol Hentikan

    if (currentSpeechIndex >= speechQueue.length) {
        // Jika sudah mencapai segmen terakhir, selesaikan
        stopReading();
        return;
    }

    const segmentEl = speechQueue[currentSpeechIndex];
    
    // -- EKSTRAKSI TEKS (Hapus furigana <rt> seperti fungsi lama) --
    const clone = segmentEl.cloneNode(true);
    const rts = clone.querySelectorAll('rt');
    rts.forEach(rt => rt.remove());
    let cleanText = clone.textContent || clone.innerText;
    cleanText = cleanText.trim();

    // Jika segmen hanya berisi spasi kosong atau enter, lewati ke segmen berikutnya
    if (!cleanText) {
        currentSpeechIndex++;
        playNextSegment();
        return;
    }

    // -- HIGHLIGHT BACKGROUND --
    removeHighlights();
    segmentEl.classList.add('highlight-speech');

    // -- JALANKAN SUARA --
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.7;

    utterance.onend = () => {
        // Setelah satu kalimat/potongan selesai, lanjut ke potongan berikutnya
        currentSpeechIndex++;
        playNextSegment();
    };

    utterance.onerror = (e) => {
        console.error("Terjadi kesalahan pada SpeechSynthesis", e);
        stopReading();
    };

    window.speechSynthesis.speak(utterance);
}

function stopReading() {
    isReading = false;
    window.speechSynthesis.cancel(); // Menghentikan mesin suara
    removeHighlights(); // Menghapus warna kuning dari teks
    
    // Kembalikan tombol ke kondisi semula
    const playBtn = document.getElementById('playAudioBtn');
    if(playBtn) {
        playBtn.innerHTML = "🔊 Putar Suara";
        playBtn.style.backgroundColor = "";
    }
}

function removeHighlights() {
    document.querySelectorAll('.speech-segment').forEach(el => {
        el.classList.remove('highlight-speech');
    });
}

function resetAudioButton() {
    const playBtn = document.getElementById('playAudioBtn');
    if (playBtn) {
        playBtn.innerHTML = "🔊 Dengarkan Bacaan";
        playBtn.style.backgroundColor = "#2ec4b6"; // Kembali ke warna hijau toska
    }
}

function toggleFurigana() {
    const isChecked = document.getElementById('furiganaToggle').checked;
    const readingContent = document.getElementById('readingContent');
    
    if (isChecked) {
        // Jika centang ON, hapus class penyembunyi (Furigana muncul)
        readingContent.classList.remove('hide-furigana');
    } else {
        // Jika centang OFF, tambah class penyembunyi (Furigana hilang)
        readingContent.classList.add('hide-furigana');
    }
}

    window.onload = renderGrid;
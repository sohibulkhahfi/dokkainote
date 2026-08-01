    const jftDatabase = [
        {
            date: "22 Juni 2026",
            title: "ダイエットの始まり<br>(Awal Diet)",
            readingText: `<ruby>私<rt>わたし</rt></ruby>は<ruby>最近<rt>さいきん</rt></ruby>、ダイエットを<ruby>始<rt>はじ</rt></ruby>めました。  
<ruby>毎日<rt>まいにち</rt></ruby>ダイエットメニューを<ruby>見<rt>み</rt></ruby>る<ruby>予定<rt>よてい</rt></ruby>です。<ruby>体<rt>からだ</rt></ruby>にいいレシピを<ruby>探<rt>さが</rt></ruby>しています。<ruby>野菜<rt>やさい</rt></ruby>をできるだけたくさん<ruby>食<rt>た</rt></ruby>べましょう。野菜を食べないのはよくないです。  

<ruby>私<rt>わたし</rt></ruby>はできるだけ<ruby>魚<rt>さかな</rt></ruby>を<ruby>選<rt>えら</rt></ruby>びます。ダイエット<ruby>中<rt>ちゅう</rt></ruby>は魚を食べましょう。魚は体にいいと<ruby>思<rt>おも</rt></ruby>います。お<ruby>茶<rt>ちゃ</rt></ruby>は<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>の<ruby>一種<rt>いっしゅ</rt></ruby>ですので、よく飲みます。  

<ruby>昨日<rt>きのう</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>とレストランへ<ruby>行<rt>い</rt></ruby>きました。そのレストランはちょっと<ruby>高<rt>たか</rt></ruby>いです。高い<ruby>ご飯<rt>ごはん</rt></ruby>より<ruby>安<rt>やす</rt></ruby>いサンドウィッチを選びました。  

友達はハンバーガーを<ruby>注文<rt>ちゅうもん</rt></ruby>しました。私は「このハンバーガーは体に<ruby>悪<rt>わる</rt></ruby>いと思います」と言いました。友達は「ハンバーガーは体に悪いよ。でも、おいしいよ」と言いました。そのハンバーガーはカロリーが<ruby>高<rt>たか</rt></ruby>いです。  

<ruby>今日<rt>きょう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>ご飯は<ruby>焼肉<rt>やきにく</rt></ruby>です。焼肉は野菜と<ruby>一緒<rt>いっしょ</rt></ruby>に食べます。ケーキもありましたが、そのケーキはカロリーが高いと思います。体に悪いと<ruby>聞<rt>き</rt></ruby>いたので、私はサラダにしました。  

<ruby>先週<rt>せんしゅう</rt></ruby>、おすすめのサラダを<ruby>作<rt>つく</rt></ruby>りました。<ruby>今週<rt>こんしゅう</rt></ruby>はおすすめのスープを<ruby>作<rt>つく</rt></ruby>る予定です。できるだけ魚も食べますよ。  

<ruby>私<rt>わたし</rt></ruby>は毎日アイスクリームを食べません。これからも<ruby>健康<rt>けんこう</rt></ruby>のために、野菜や魚をたくさん食べたいです。`,
            questions: [
                { q: "私は何を始めましたか。", options: ["A. 勉強", "B. ダイエット", "C. 仕事"], correct: 1 },
                { q: "私はできるだけ何を選びますか。", options: ["A. 肉", "B. ケーキ", "C. 魚"], correct: 2 },
                { q: "レストランはどうでしたか。", options: ["A. ちょっと高い", "B. とても安い", "C. 小さい"], correct: 0 },
                { q: "今日の夜ご飯は何ですか。", options: ["A. サラダ", "B. 焼肉", "C. ハンバーガー"], correct: 1 },
                { q: "私は毎日何を食べませんか。", options: ["A. 魚", "B. 野菜", "C. アイスクリーム"], correct: 2 }
            ],
            essayQuestions: [
                { q: "なぜ私はサラダにしましたか。", a: "体に悪いと聞いたからです。" },
                { q: "今週は何を作る予定ですか。", a: "おすすめのスープを作る予定です。" },
                { q: "私はよく何を飲みますか。", a: "お茶をよく便利に飲みます。" }
            ],
            vocabulary: [
                { word: "最近 (さいきん)", meaning: "Baru-baru ini / Akhir-akhir ini", sentence: "私は最近、ダイエットを始めました。", meaningSentence: "Saya baru-baru ini memulai diet." },
                { word: "ダイエット", meaning: "Diet", sentence: "私は最近、ダイエットを始めました。", meaningSentence: "Saya baru-baru ini memulai diet." },
                { word: "始める (はじめる)", meaning: "Memulai", sentence: "私は最近、ダイエットを始めました。", meaningSentence: "Saya baru-baru ini memulai diet." },
                { word: "予定 (よてい)", meaning: "Rencana / Jadwal", sentence: "毎日ダイエットメニューを見る予定です。", meaningSentence: "Saya berencana untuk melihat menu diet setiap hari." },
                { word: "体 (からだ)", meaning: "Tubuh / Badan", sentence: "体にいいレシピを探しています。", meaningSentence: "Saya sedang mencari resep yang bagus untuk tubuh." },
                { word: "探す (さがす)", meaning: "Mencari", sentence: "体にいいレシピを探しています。", meaningSentence: "Saya sedang mencari resep yang bagus untuk tubuh." },
                { word: "野菜 (やさい)", meaning: "Sayuran", sentence: "野菜をできるだけたくさん食べましょう。", meaningSentence: "Mari kita makan sayuran sebanyak mungkin." },
                { word: "魚 (さかな)", meaning: "Ikan", sentence: "私はできるだけ魚を選びます。", meaningSentence: "Saya memilih ikan sebanyak mungkin." },
                { word: "選ぶ (えらぶ)", meaning: "Memilih", sentence: "私はできるだけ魚を選びます。", meaningSentence: "Saya memilih ikan sebanyak mungkin." },
                { word: "〜中 (〜ちゅう)", meaning: "Sedang dalam proses / Selama", sentence: "ダイエット中は魚を食べましょう。", meaningSentence: "Mari kita makan ikan selama masa diet." },
                { word: "お茶 (おちゃ)", meaning: "Teh", sentence: "お茶は飲み物の一種ですので、よく飲みます。", meaningSentence: "Karena teh adalah salah satu jenis minuman, saya sering meminumnya." },
                { word: "飲み物 (のみもの)", meaning: "Minuman", sentence: "お茶は飲み物の一種ですので、よく飲みます。", meaningSentence: "Karena teh adalah salah satu jenis minuman, saya sering meminumnya." },
                { word: "一種 (いっしゅ)", meaning: "Jenis / Macam", sentence: "お茶は飲み物の一種ですので、よく飲みます。", meaningSentence: "Karena teh adalah salah satu jenis minuman, saya sering meminumnya." },
                { word: "高い (たかい)", meaning: "Mahal / Tinggi", sentence: "そのレストランはちょっと高いです。", meaningSentence: "Restoran itu sedikit mahal." },
                { word: "安い (やすい)", meaning: "Murah", sentence: "高いご飯より安いサンドウィッチを選びました。", meaningSentence: "Saya memilih sandwich yang murah daripada makanan yang mahal." },
                { word: "注文する (ちゅうもんする)", meaning: "Memesan", sentence: "友達はハンバーガーを注文しました。", meaningSentence: "Teman saya memesan hamburger." },
                { word: "悪い (わるい)", meaning: "Buruk / Jelek", sentence: "私は「このハンバーガーは体に悪いと思います」と言いました。", meaningSentence: "Saya berkata, Saya pikir hamburger ini buruk untuk tubuh." },
                { word: "夜ご飯 (よるごはん)", meaning: "Makan malam", sentence: "今日の夜ご飯は焼肉です。", meaningSentence: "Makan malam hari ini adalah daging panggang (yakiniku)." },
                { word: "焼肉 (やきにく)", meaning: "Daging panggang / Yakiniku", sentence: "今日の夜ご飯は焼肉です。", meaningSentence: "Makan malam hari ini adalah daging panggang (yakiniku)." },
                { word: "一緒 (いっしゅ)", meaning: "Bersama", sentence: "焼肉は野菜と一緒に食べます。", meaningSentence: "Daging panggang dimakan bersama dengan sayuran." },
                { word: "先週 (せんしゅう)", meaning: "Minggu lalu", sentence: "先週、おすすめのサラダを作りました。", meaningSentence: "Minggu lalu, saya membuat salad rekomendasi." },
                { word: "今週 (こんしゅう)", meaning: "Minggu ini", sentence: "今週はおすすめのスープを作る予定です。", meaningSentence: "Minggu ini, saya berencana membuat sup rekomendasi." },
                { word: "健康 (けんこう)", meaning: "Kesehatan", sentence: "これからも健康のために、野菜や魚をたくさん食べたいです。", meaningSentence: "Mulai sekarang pun demi kesehatan, saya ingin makan banyak sayur dan ikan." },
                { word: "作る (つくる)", meaning: "Membuat", sentence: "先週、おすすめ of サラダを作りました。", meaningSentence: "Minggu lalu, saya membuat salad rekomendasi." }
            ]
        },
        {
            date: "23 Juni 2026",
            title: "暖かい日と予定<br>(Hari yang Hangat & Rencana)",
            readingText: `今日は<ruby>暖<rt>あたた</rt></ruby>かい<ruby>日<rt>ひ</rt></ruby>です。
<ruby>今朝<rt>けさ</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>はニュースを<ruby>読<rt>よ</rt></ruby>んでテレビを<ruby>見<rt>み</rt></ruby>ました。そして<ruby>正<rt>ただ</rt></ruby>しい<ruby>情報<rt>じょうほう</rt></ruby>について<ruby>考<rt>かんが</rt></ruby>えました。
<ruby>午後<rt>ごご</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>と<ruby>新<rt>あたら</rt></ruby>しいレストランについて<ruby>調<rt>しら</rt></ruby>べました。ネットでレストランのレビューを調べました。そのレストランは<ruby>有名<rt>ゆうめい</rt></ruby>で、<ruby>予約<rt>よやく</rt></ruby>が<ruby>難<rt>むずか</rt></ruby>しいです。スタッフが<ruby>親切<rt>しんせつ</rt></ruby>で、また<ruby>泊<rt>と</rt></ruby>まりたいというレビューもありました。
<ruby>友達<rt>ともだち</rt></ruby>は「<ruby>後<rt>あと</rt></ruby>で<ruby>注文<rt>ちゅうもん</rt></ruby>します」と<ruby>言<rt>い</rt></ruby>いました。<ruby>私<rt>わたし</rt></ruby>は「<ruby>昨日<rt>きのう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>も注文しませんでした」と<ruby>答<rt>こた</rt></ruby>えました。
そのあと、<ruby>公園<rt>こうえん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。<ruby>子供達<rt>こどもたち</rt></ruby>は公園で<ruby>遊<rt>あそ</rt></ruby>んでいました。<ruby>私<rt>わたし</rt></ruby>たちも<ruby>少<rt>すこ</rt></ruby>し<ruby>外<rt>そと</rt></ruby>で遊びました。
<ruby>夕方<rt>ゆうがた</rt></ruby>、<ruby>母<rt>はは</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>家<rt>いえ</rt></ruby>を<ruby>飾<rt>かざ</rt></ruby>りました。<ruby>入<rt>い</rt></ruby>り<ruby>口<rt>ぐち</rt></ruby>も飾りました。母は「お<ruby>正月<rt>しょうがつ</rt></ruby>の飾りも<ruby>出<rt>だ</rt></ruby>しましょう」と言いました。
<ruby>夜<rt>よる</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>と一緒に<ruby>過<rt>す</rt></ruby>ごす<ruby>時間<rt>じかん</rt></ruby>を<ruby>待<rt>ま</rt></ruby>ちました。<ruby>両親<rt>りょうしん</rt></ruby>は私のことを<ruby>心配<rt>しんぱい</rt></ruby>していますが、いつも<ruby>応援<rt>おうえん</rt></ruby>してくれます。
そのとき、友達からメッセージが<ruby>来<rt>き</rt></ruby>ました。
「<ruby>午前<rt>ごぜん</rt></ruby>9<ruby>時<rt>じ</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いましょう。」
私は「はい、会いましょう」と<ruby>返事<rt>へんじ</rt></ruby>をしました。
<ruby>明日<rt>あした</rt></ruby>は<ruby>会議<rt>かいぎ</rt></ruby>があります。ノートパソコンを<ruby>充電<rt>じゅうでん</rt></ruby>して、会議に<ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby>です。`,
            questions: [
                { q: "今朝、私は何をしましたか。", options: ["A. 公園で遊びました", "B. ニュースを読んでテレビを見ました", "C. 銀行へ行きました"], correct: 1 },
                { q: "レストランはどうですか。", options: ["A. 有名ではありません", "B. スタッフが不親切です", "C. 有名で予約が難しいです"], correct: 2 },
                { q: "子供達はどこで遊びましたか。", options: ["A. スーパー", "B. 公園", "C. スタジオ"], correct: 1 },
                { q: "誰と一緒に家を飾りましたか。", options: ["A. 父", "B. 友達", "C. 母"], correct: 2 },
                { q: "明日は何がありますか。", options: ["A. 試験", "B. 会議", "C. 結婚式"], correct: 1 }
            ],
            essayQuestions: [],
            vocabulary: [
                { word: "心配する (しんぱいする)", meaning: "Khawatir", sentence: "両親は私のことを心配していますが、いつも応援してくれます。", meaningSentence: "Orang tua saya mengkhawatirkan saya, tetapi mereka selalu mendukung saya." },
                { word: "飾る (かざる)", meaning: "Menghias", sentence: "夕方、母と一緒に家を飾りました。", meaningSentence: "Di sore hari, saya menghias rumah bersama ibu saya." },
                { word: "調べる (しらべる)", meaning: "Mencari / Memeriksa", sentence: "午後は友達と新しいレストランについて調べました。", meaningSentence: "Siang harinya, saya mencari tahu tentang restoran baru bersama teman." },
                { word: "注文する (ちゅうもんする)", meaning: "Memesan", sentence: "友達は「後で注文します」と言いました。", meaningSentence: "Teman saya berkata, Saya akan memesan nanti." },
                { word: "情報 (じょうほう)", meaning: "Informasi", sentence: "そして正しい情報について考えました。", meaningSentence: "Kemudian, saya memikirkan tentang informasi yang benar." },
                { word: "親切 (しんせつ)", meaning: "Ramah", sentence: "スタッフが親切で、また泊まりたいというレビューもありました。", meaningSentence: "Ada juga ulasan yang mengatakan bahwa stafnya ramah dan ingin menginap lagi." },
                { word: "予約 (よやく)", meaning: "Reservasi", sentence: "そのレストランは有名で、予約が難しいです。", meaningSentence: "Restoran itu terkenal dan reservasinya sulit." },
                { word: "入り口 (いりぐち)", meaning: "Pintu masuk", sentence: "入り口も飾りました。", meaningSentence: "Kami juga menghias pintu masuk." },
                { word: "充電する (じゅうでんする)", meaning: "Mengisi daya", sentence: "ノートパソコンを充電して、会議に持って行く予定です。", meaningSentence: "Saya berencana mengisi daya laptop dan membawanya ke rapat." },
                { word: "持って行く (もっていく)", meaning: "Membawa", sentence: "ノートパソコンを充電して、会議に持って行く予定です。", meaningSentence: "Saya berencana mengisi daya laptop dan membawanya ke rapat." }
            ]
        },
        {
            date: "24 Juni 2026",
            title: "学校の昼休み<br>(Istirahat Siang di Sekolah)",
            readingText: `<ruby>私<rt>わたし</rt></ruby>は<ruby>高校生<rt>こうこうせい</rt></ruby>です。
<ruby>大抵<rt>たいてい</rt></ruby>は<ruby>白<rt>しろ</rt></ruby>いスニーカーを<ruby>履<rt>は</rt></ruby>くと<ruby>思<rt>おも</rt></ruby>いますが、<ruby>時々<rt>ときどき</rt></ruby>サンダルも<ruby>好<rt>す</rt></ruby>きです。<ruby>学校<rt>がっこう</rt></ruby>にはピンクの<ruby>体操服<rt>たいそうふく</rt></ruby>があります。<ruby>私<rt>わたし</rt></ruby>の体操服は<ruby>少<rt>すこ</rt></ruby>し<ruby>古<rt>ふる</rt></ruby>いですが、まだ<ruby>着<rt>き</rt></ruby>ています。
<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>先生<rt>せんせい</rt></ruby>に<ruby>聞<rt>き</rt></ruby>きました。
「<ruby>大工<rt>だいく</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>はスニーカーで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。」
先生は、
「はい、スニーカーで大丈夫ですよ。みんな体操服を<ruby>着<rt>き</rt></ruby>ていますよ。」
と<ruby>言<rt>い</rt></ruby>いました。
<ruby>今日<rt>きょう</rt></ruby>は学校の<ruby>屋上<rt>おくじょう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。<ruby>友達<rt>ともだち</rt></ruby>が、「屋上でみんなと<ruby>会<rt>あ</rt></ruby>うのはどうですか。」と<ruby>言<rt>い</rt></ruby>いました。<ruby>私<rt>わたし</rt></ruby>は、「いいですね。」と<ruby>答<rt>こた</rt></ruby>えました。
もうすぐチャイムが<ruby>鳴<rt>な</rt></ruby>ると<ruby>思<rt>おも</rt></ruby>いました。友達が、「もうすぐチャイムがなりますか。」と<ruby>聞<rt>き</rt></ruby>くと、先生は、「はい。もうすぐ<ruby>昼休<rt>ひるやす</rt></ruby>みですよ。」と<ruby>言<rt>い</rt></ruby>いました。
<ruby>昼休<rt>ひるやす</rt></ruby>みは<ruby>短<rt>みじか</rt></ruby>いです。友達が、「昼休みに<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>ご飯<rt>ごはん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べませんか。」と<ruby>言<rt>い</rt></ruby>いました。<ruby>私<rt>わたし</rt></ruby>は、「はい、ぜひ。」と答えました。
<ruby>昼<rt>ひる</rt></ruby>ご飯の<ruby>時<rt>とき</rt></ruby>、友達が聞きました。「いつも<ruby>何<rt>なに</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みますか。」私は、「いつもスポーツドリンクを飲みます。」と答えました。
<ruby>午後<rt>ごご</rt></ruby>の授業の<ruby>後<rt>あと</rt></ruby>、<ruby>図書館<rt>としょかん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。私はマンガを<ruby>読<rt>よ</rt></ruby>みました。<ruby>本<rt>ほん</rt></ruby>はあまり読まないけど、ゲームをします。
<ruby>放課後<rt>ほうかご</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい<ruby>部活<rt>ぶかつ</rt></ruby>の<ruby>説明会<rt>せつめいかい</rt></ruby>がありました。私は部活が好きです。でも、<ruby>疲<rt>つか</rt></ruby>れているとあまり<ruby>遊<rt>あそ</rt></ruby>びません。
友達は、「放課後に<ruby>多分<rt>たぶん</rt></ruby>カフェへ<ruby>行<rt>い</rt></ruby>きます。」と<ruby>言<rt>い</rt></ruby>いました。私は<ruby>宿題<rt>しゅくだい</rt></ruby>があったので、一緒に行きませんでした。
<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ってから、<ruby>動画<rt>どうが</rt></ruby>を少し<ruby>見<rt>み</rt></ruby>ました。そして放課後の宿題をしました。
<ruby>分<rt>わ</rt></ruby>からない<ruby>問題<rt>もんだい</rt></ruby>があったので<ruby>調<rt>しら</rt></ruby>べましたが、分かりませんでした。
今日は少し疲れていました。よく<ruby>休<rt>やす</rt></ruby>まないので、ちょっと<ruby>眠<rt>ねむ</rt></ruby>いです。テレビを見ないで<ruby>寝<rt>ね</rt></ruby>ました。`,
            questions: [
                { q: "私は大抵何を履きますか。", options: ["A. サンダル", "B. スニーカー", "C. ブーツ"], correct: 1 },
                { q: "昼休みはどうでしたか。", options: ["A. 長い", "B. 楽しくない", "C. 短い"], correct: 2 },
                { q: "私はいつも何を飲みますか。", options: ["A. お茶", "B. ジュース", "C. スポーツドリンク"], correct: 2 },
                { q: "放課後に何がありましたか。", options: ["A. 試験", "B. 部活の説明会", "C. お祭り"], correct: 1 },
                { q: "なぜ友達とカフェへ行きませんでしたか。", options: ["A. 宿題があったから", "B. お金なかったから", "C. 雨だったから"], correct: 0 }
            ],
            essayQuestions: [], 
            vocabulary: [
                { word: "大抵 (たいてい)", meaning: "Biasanya / Umumnya", sentence: "大抵は白いスニーカーを履くと思います。", meaningSentence: "Saya pikir biasanya orang memakai sneaker putih." },
                { word: "履く (はく)", meaning: "Memakai (sepatu/sandal/bawahan)", sentence: "大抵は白いスニーカーを履くと思います。", meaningSentence: "Saya pikir biasanya orang memakai sneaker putih." },
                { word: "体操服 (たいそうふく)", meaning: "Seragam olahraga", sentence: "学校にはピンクの体操服があります。", meaningSentence: "Di sekolah ada seragam olahraga berwarna merah muda." },
                { word: "授業 (じゅぎょう)", meaning: "Pelajaran / Kelas", sentence: "「大工の授業はスニーカーで大丈夫ですか。」", meaningSentence: "「Apakah kelas pertukangan kayu tidak apa-apa menggunakan sneaker?」" },
                { word: "屋上 (おくじょう)", meaning: "Atap gedung / Rooftop", sentence: "今日は学校の屋上へ行きました。", meaningSentence: "Hari ini saya pergi ke atap gedung sekolah." },
                { word: "チャイム", meaning: "Bel sekolah", sentence: "もうすぐチャイムが鳴ると思いました。", meaningSentence: "Saya pikir sebentar lagi bel sekolah akan berbunyi." },
                { word: "昼休み (ひるやすみ)", meaning: "Istirahat siang", sentence: "昼休みは短いです。", meaningSentence: "Istirahat siang itu singkat." },
                { word: "図書館 (としょかん)", meaning: "Perpustakaan", sentence: "午後の授業の後、図書館へ行きました。", meaningSentence: "Setelah kelas sore, saya pergi ke perpustakaan." },
                { word: "放課後 (ほうかご)", meaning: "Sepulang sekolah", sentence: "放課後、新しい部活の説明会がありました。", meaningSentence: "Sepulang sekolah, ada sesi penjelasan untuk klub sekolah yang baru." },
                { word: "部活 (ぶかつ)", meaning: "Klub sekolah / Ekstrakurikuler", sentence: "放課後、新しい部活の説明会がありました。", meaningSentence: "Sepulang sekolah, ada sesi penjelasan untuk klub sekolah yang baru." },
                { word: "説明会 (せつめいかい)", meaning: "Sesi penjelasan / Sosialisasi", sentence: "放課後、新しい部活の説明会がありました。", meaningSentence: "Sepulang sekolah, ada sesi penjelasan untuk klub sekolah yang baru." },
                { word: "多分 (たぶん)", meaning: "Mungkin", sentence: "友達は、「放課後に多分カフェへ行きます。」と言いました。", meaningSentence: "Teman saya berkata, 「Sepulang sekolah mungkin saya akan pergi ke kafe.」" },
                { word: "宿題 (しゅくだい)", meaning: "Pekerjaan rumah / PR", sentence: "私は宿題があったので、一緒に行きませんでした。", meaningSentence: "Karena saya ada PR, saya tidak pergi bersama." },
                { word: "動画 (どうが)", meaning: "Video", sentence: "家に帰ってから、動画を少し見ました。", meaningSentence: "Setelah pulang ke rumah, saya menonton video sebentar." },
                { word: "調べる (しらべる)", meaning: "Memeriksa / Mencari tahu", sentence: "分からない問題があったので調べましたが、分かりませんでした。", meaningSentence: "Karena ada soal yang tidak saya mengerti, saya mencarinya, tetapi tetap tidak mengerti." },
                { word: "眠い (ねむい)", meaning: "Ngantuk", sentence: "よく休まないので、ちょっと眠いです。", meaningSentence: "Karena tidak beristirahat dengan baik, saya sedikit mengantuk." }
            ]
        },
        {
            date: "25 Juni 2026",
            title: "昼休みと部活<br>(Istirahat Siang & Ekskul)",
            readingText: `<ruby>私<rt>わたし</rt></ruby>は<ruby>高校生<rt>こうこうせい</rt></ruby>です。<ruby>昼休<rt>ひるやす</rt></ruby>みが<ruby>好<rt>す</rt></ruby>きです。でも、昼休みは<ruby>短<rt>みじか</rt></ruby>いです。
<ruby>今日<rt>きょう</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>に「<ruby>屋上<rt>おくじょう</rt></ruby>で<ruby>ご飯<rt>ごはん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べませんか。」と<ruby>聞<rt>き</rt></ruby>きました。友達は「いいですね。」と<ruby>言<rt>い</rt></ruby>いました。
チャイムがもうすぐなので、「<ruby>少<rt>すこ</rt></ruby>し<ruby>待<rt>ま</rt></ruby>ちませんか。」と<ruby>言<rt>い</rt></ruby>いました。そして、私は「私はまず<ruby>並<rt>なら</rt></ruby>びますので、みんなは<ruby>後<rt>あと</rt></ruby>で<ruby>来<rt>き</rt></ruby>てもいいですよ。」と言いました。
昼休みのあと、友達は「今日は<ruby>公園<rt>こうえん</rt></ruby>で<ruby>犬<rt>いぬ</rt></ruby>と<ruby>遊<rt>あそ</rt></ruby>びます。」と<ruby>言<rt>い</rt></ruby>いました。でも、私は「今日は<ruby>行<rt>い</rt></ruby>かないと<ruby>思<rt>おも</rt></ruby>います。」と<ruby>答<rt>こた</rt></ruby>えました。まだ<ruby>新<rt>あたら</rt></ruby>しい友達とはあまり遊びません。また<ruby>今度<rt>こんど</rt></ruby><ruby>話<rt>はな</rt></ruby>したいと思います。
<ruby>午後<rt>ごご</rt></ruby>は<ruby>部活<rt>ぶかつ</rt></ruby>がありました。私は部活が<ruby>好<rt>す</rt></ruby>きです。友達が「部活では<ruby>何<rt>なに</rt></ruby>をしますか。」と聞くと、先生は今日の<ruby>予定<rt>よてい</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>しました。
部活のあと、私は<ruby>少<rt>すこ</rt></ruby>し<ruby>疲<rt>つか</rt></ruby>れていました。疲れているとあまり遊びません。<ruby>学校<rt>がっこう</rt></ruby>の<ruby>後<rt>あと</rt></ruby>もあまり遊びません。
<ruby>家<rt>いえ</rt></ruby>へ<ruby>帰<rt>かえ</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に、<ruby>店<rt>みせ</rt></ruby>で少し並びました。<ruby>冷<rt>つめ</rt></ruby>たいスポーツドリンクを<ruby>選<rt>えら</rt></ruby>んで<ruby>飲<rt>の</rt></ruby>みました。私はスポーツドリンクをよく飲みます。
家では<ruby>動画<rt>どうが</rt></ruby>のアプリで少し動画を<ruby>見<rt>み</rt></ruby>ました。でも、テレビは見ませんでした。そのあと、ご飯を食べて<ruby>宿題<rt>しゅくだい</rt></ruby>をしました。
私は<ruby>新<rt>あたら</rt></ruby>しい部活を<ruby>始<rt>はじ</rt></ruby>めたいと<ruby>思<rt>おも</rt></ruby>っています。<ruby>来週<rt>らいしゅう</rt></ruby>は新しい<ruby>塾<rt>じゅく</rt></ruby>も始まります。<ruby>忙<rt>いそが</rt></ruby>しいですが、<ruby>毎日<rt>まいにち</rt></ruby>が<ruby>楽<rt>たの</rt></ruby>しみです。`,
            questions: [
                { q: "私はどこでご飯を食べたいですか。", options: ["A. 教室", "B. 屋上", "C. 公園"], correct: 1 },
                { q: "私は何をよく飲みますか。", options: ["A. 牛乳", "B. お茶", "C. スポーツドリンク"], correct: 2 },
                { q: "疲れていると私はどうしますか。", options: ["A. たくさん遊びます。", "B. あまり遊びません。", "C. プールへ行きます。"], correct: 1 },
                { q: "家で何をしましたか。", options: ["A. テレビを見ました。", "B. 宿題をしました。", "C. 映画を見ました。"], correct: 1 },
                { q: "来週何が始まりますか。", options: ["A. 新しい仕事", "B. 新しい塾", "C. 新しいアルバイト"], correct: 1 }
            ],
            essayQuestions: [], 
            vocabulary: [
                { word: "屋上 (おくじょう)", meaning: "Atap sekolah", sentence: "今日は友達に「屋上でご飯を食べませんか。」と聞きました。", meaningSentence: "Hari ini saya bertanya kepada teman, Maukah kamu makan siang di atap sekolah?" },
                { word: "短かい (みじかい)", meaning: "Singkat / Pendek", sentence: "でも、昼休みは短いです。", meaningSentence: "Namun, istirahat siang itu singkat." },
                { word: "並ぶ (ならぶ)", meaning: "Mengantre / Berbaris", sentence: "そして、私は「私はまず並びますので、みんなは後で来てもいいですよ。」と言いました。", meaningSentence: "Lalu, saya berkata, Karena saya akan mengantre duluan, kalian boleh datang belakangan." },
                { word: "今度 (こんど)", meaning: "Lain kali / Berikutnya", sentence: "また今度話したいと思います。", meaningSentence: "Saya ingin berbicara lagi lain kali." },
                { word: "部活 (ぶかつ)", meaning: "Klub sekolah / Ekskul", sentence: "午後は部活がありました。", meaningSentence: "Siang harinya ada kegiatan klub sekolah." },
                { word: "予定 (よてい)", meaning: "Rencana / Jadwal", sentence: "友達が「部活では何をしますか。」と聞くと、先生は今日の予定を説明しました。", meaningSentence: "Ketika teman bertanya, Apa yang akan dilakukan di klub?, guru menjelaskan rencana hari ini." },
                { word: "説明する (せつめいする)", meaning: "Menjelaskan", sentence: "友達が「部活では何をしますか。」と聞くと、先生は今日の予定を説明しました。", meaningSentence: "Ketika teman bertanya, Apa yang akan dilakukan di klub?, guru menjelaskan rencana hari ini." },
                { word: "疲れる (つかれる)", meaning: "Lelah / Capek", sentence: "部活のあと、私は少し疲れていました。", meaningSentence: "Setelah kegiatan klub, saya sedikit lelah." },
                { word: "冷たい (つめたい)", meaning: "Dingin (untuk benda)", sentence: "冷たいスポーツドリンクを選んで降みました。", meaningSentence: "Saya memilih dan meminum minuman olahraga yang dingin." },
                { word: "選ぶ (えらぶ)", meaning: "Memilih", sentence: "冷たいスポーツドリンクを選んで降みました。", meaningSentence: "Saya memilih dan meminum minuman olahraga yang dingin." },
                { word: "動画 (どうが)", meaning: "Video", sentence: "家では動画のアプリで少し動画を見ました。", meaningSentence: "Di rumah, saya menonton video sebentar di aplikasi video." },
                { word: "宿題 (しゅくだい)", meaning: "Pekerjaan rumah / PR", sentence: "そのあと、ご飯を食べて宿題をしました。", meaningSentence: "Setelah itu, saya makan dan mengerjakan PR." },
                { word: "塾 (じゅく)", meaning: "Tempat les / Bimbel", sentence: "来週は新しい塾も始まります。", meaningSentence: "Minggu depan tempat les yang baru juga akan dimulai." },
                { word: "忙しい (いそがしい)", meaning: "Sibuk", sentence: "忙しいですが、毎日が楽しみです。", meaningSentence: "Meskipun sibuk, setiap hari terasa menyenangkan." }
            ]
        },
        {
            date: "26 Juni 2026",
            title: "塾と放課後の予定<br>(Bimbel & Rencana Sore)",
            readingText: `<ruby>私<rt>わたし</rt></ruby>は<ruby>高校生<rt>こうこうせい</rt></ruby>です。<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>塾<rt>じゅく</rt></ruby>に<ruby>行<rt>い</rt></ruby>っています。塾で<ruby>英語<rt>えいご</rt></ruby>をちょっと<ruby>勉強<rt>べんきょう</rt></ruby>しています。
<ruby>学校<rt>がっこう</rt></ruby>では<ruby>放課後<rt>ほうかご</rt></ruby>の<ruby>部活<rt>ぶかつ</rt></ruby>があります。<ruby>私<rt>わたし</rt></ruby>は部活もやってみたいですが、<ruby>忙<rt>いそが</rt></ruby>しいです。<ruby>今日<rt>きょう</rt></ruby>の部活の<ruby>後<rt>あと</rt></ruby>、<ruby>多分<rt>たぶん</rt></ruby><ruby>友達<rt>ともだち</rt></ruby>とカフェに<ruby>行<rt>い</rt></ruby>きます。
<ruby>昼休<rt>ひるやす</rt></ruby>みにはスポーツドリンクを<ruby>飲<rt>の</rt></ruby>みながら<ruby>動画<rt>どうが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。<ruby>私<rt>わたし</rt></ruby>は放課後によく<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聴<rt>き</rt></ruby>きます。でも、<ruby>家<rt>いえ</rt></ruby>ではテレビを見ません。
<ruby>友達<rt>ともだち</rt></ruby>は今日、「プールで<ruby>泳<rt>およ</rt></ruby>がない」と<ruby>言<rt>い</rt></ruby>っていました。 death でも、<ruby>私<rt>わたし</rt></ruby>はプールで泳ぎます。<ruby>青<rt>あお</rt></ruby>い<ruby>水着<rt>みずぎ</rt></ruby>が<ruby>欲<rt>ほ</rt></ruby>しいです。泳がない友達は「ここで<ruby>待<rt>ま</rt></ruby>っています」と<ruby>言<rt>い</rt></ruby>いました。
<ruby>先月<rt>せんげつ</rt></ruby>、ホームステイをしました。ホームステイで<ruby>新<rt>あたら</rt></ruby>しい<ruby>文化<rt>ぶんか</rt></ruby>を<ruby>学<rt>まな</rt></ruby>びました。<ruby>少<rt>すこ</rt></ruby>しびっくりしましたが、とても<ruby>楽<rt>たの</rt></ruby>しかったです。友達の<ruby>家<rt>いえ</rt></ruby>では<ruby>靴<rt>くつ</rt></ruby>を<ruby>脱<rt>ぬ</rt></ruby>ぎます。学校でも靴を脱ぎます。
<ruby>今日<rt>きょう</rt></ruby>は学校の<ruby>屋上<rt>おくじょう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を食べた<ruby>後<rt>あと</rt></ruby>、少し<ruby>休<rt>やす</rt></ruby>みました。<ruby>疲<rt>つか</rt></ruby>れていると、あまり<ruby>遊<rt>あそ</rt></ruby>びません。<ruby>公園<rt>こうえん</rt></ruby>で遊ばないと<ruby>思<rt>おも</rt></ruby>います。
<ruby>今日<rt>きょう</rt></ruby>は<ruby>早<rt>はや</rt></ruby>く<ruby>帰<rt>かえ</rt></ruby>らないと<ruby>思<rt>おも</rt></ruby>います。<ruby>午後<rt>ごご</rt></ruby>は帰らない<ruby>予定<rt>よてい</rt></ruby>です。放課後の<ruby>宿題<rt>しゅくだい</rt></ruby>をしてから<ruby>駅<rt>えき</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。
駅では<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えます。
「電車は<ruby>何番<rt>なんばん</rt></ruby>ホームですか。」
「４番ホームですよ。」
「まだ<ruby>間<rt>ま</rt></ruby>に合いますか。」
「はい、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。まだ間に合いますよ。」`,
            questions: [
                { q: "私はどこで英語を勉強していますか。", options: ["A. 学校", "B. 塾", "C.  図書館"], correct: 1 },
                { q: "私は放課後によく何をしますか。", options: ["A. 音楽を聴きます。", "B. プールで泳ぎます。", "C. テレビを見ます。"], correct: 0 },
                { q: "ホームステイで何を学びましたか。", options: ["A. 英語", "B. 新しい文化", "C. サッカー"], correct: 1 },
                { q: "友達は今日プールでどうしますか。", options: ["A. 泳ぎます。", "B. 泳ぎません。", "C. サッカーをします。"], correct: 1 },
                { q: "電車は何番ホームですか。", options: ["A. ２番ホーム", "B. ４番ホーム", "C. ６番ホーム"], correct: 1 }
            ],
            essayQuestions: [
                { q: "なぜ私はあまり遊びませんか。", a: "疲れているからです。" },
                { q: "私は家でテレビを見ますか。", a: "いいえ、見ません。" },
                { q: "午後は帰りますか。", a: "いいえ、午後は帰らない予定です。" },
                { q: "私は何色の水着が欲しいですか。", a: "青い水着です。" }
            ],
            vocabulary: [
                { word: "塾 (じゅく)", meaning: "Tempat les / Bimbel", sentence: "毎日、塾に行っています。", meaningSentence: "Setiap hari, saya pergi ke tempat les." },
                { word: "高校生 (こうこうせい)", meaning: "Siswa SMA", sentence: "私は高校生です。", meaningSentence: "Saya adalah seorang siswa SMA." },
                { word: "放課後 (ほうかご)", meaning: "Sepulang sekolah", sentence: "学校では放課後の部活があります。", meaningSentence: "Di sekolah ada kegiatan klub sepulang sekolah." },
                { word: "部活 (ぶかつ)", meaning: "Klub sekolah / Ekstrakurikuler", sentence: "学校では放課後の部活があります。", meaningSentence: "Di sekolah ada kegiatan klub sepulang sekolah." },
                { word: "忙しい (いそがしい)", meaning: "Sibuk", sentence: "私は部活もやってみたいですが、忙しいです。", meaningSentence: "Saya juga ingin mencoba ikut kegiatan klub, tetapi sibuk." },
                { word: "多分 (たぶん)", meaning: "Mungkin", sentence: "今日の部活の後、多分友達とカフェに行きます。", meaningSentence: "Setelah kegiatan klub hari ini, mungkin saya akan pergi ke kafe bersama teman." },
                { word: "昼休み (ひるやすみ)", meaning: "Istirahat siang", sentence: "昼休みにはスポーツドリンクを飲みながら動画を見ます。", meaningSentence: "Pada waktu istirahat siang, saya menonton video sambil meminum minuman olahraga." },
                { word: "動画 (どうが)", meaning: "Video", sentence: "昼休みにはスポーツドリンクを飲みながら動画を見ます。", meaningSentence: "Pada waktu istirahat siang, saya menonton video sambil meminum minuman olahraga." },
                { word: "泳ぐ (およぐ)", meaning: "Berenang", sentence: "でも、私はプールで泳ぎます。", meaningSentence: "Namun, saya berenang di kolam renang." },
                { word: "水着 (みずぎ)", meaning: "Baju renang", sentence: "青い水着が欲しいです。", meaningSentence: "Saya ingin baju renang berwarna biru." },
                { word: "欲しい (ほしい)", meaning: "Ingin / Mau (benda)", sentence: "青い水着が欲しいです。", meaningSentence: "Saya ingin baju renang berwarna biru." },
                { word: "待つ (まつ)", meaning: "Menunggu", sentence: "泳がない友達は「ここで待っています」と言いました。", meaningSentence: "Teman yang tidak berenang berkata, Saya akan menunggu di sini." },
                { word: "先月 (せんげつ)", meaning: "Bulan lalu", sentence: "先月、ホームステイをしました。", meaningSentence: "Bulan lalu, saya melakukan home-stay." },
                { word: "文化 (ぶんか)", meaning: "Budaya", sentence: "ホームステイで新しい文化を学びました。", meaningSentence: "Saya mempelajari budaya baru saat home-stay." },
                { word: "脱ぐ (ぬぐ)", meaning: "Melepas (pakaian/sepatu)", sentence: "友達の家では靴を脱ぎます。", meaningSentence: "Di rumah teman, kami melepas sepatu." },
                { word: "屋上 (おくじょう)", meaning: "Atap gedung / Rooftop", sentence: "今日は学校の屋上へ行きました。", meaningSentence: "Hari ini saya pergi ke atap sekolah." },
                { word: "疲れる (つかれる)", meaning: "Lelah / Capek", sentence: "疲れていると、あまり遊びません。", meaningSentence: "Kalau sedang lelah, saya tidak begitu banyak bermain." },
                { word: "予定 (よてい)", meaning: "Rencana / Jadwal", sentence: "午後は帰らない予定です。", meaningSentence: "Siang harinya, rencananya saya tidak akan pulang." },
                { word: "宿題 (しゅくだい)", meaning: "Pekerjaan rumah / PR", sentence: "放課後の宿題をしてから駅へ行きます。", meaningSentence: "Setelah mengerjakan PR sepulang sekolah, saya akan pergi ke stasiun." },
                { word: "乗り換える (のりかえる)", meaning: "Transit / Mengganti kendaraan", sentence: "駅では電車に乗り換えます。", meaningSentence: "Di stasiun, saya akan berganti kereta." },
                { word: "何番 (なんばん)", meaning: "Nomor berapa", sentence: "「電車は何番ホームですか。」", meaningSentence: "Keretanya di peron nomor berapa?" },
                { word: "ホーム", meaning: "Peron stasiun", sentence: "「４番ホームですよ。」", meaningSentence: "Di peron nomor 4 lho." },
                { word: "間に合う (まにあう)", meaning: "Sempat / Tepat waktu", sentence: "「まだ間に合いますか。」", meaningSentence: "Apakah masih sempat?" }
            ]
        },
        {
            date: "27 Juni 2026",
            title: "遊園地への約束<br>(Janji ke Taman Bermain)",
            readingText: `<ruby>今日<rt>きょう</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>と<ruby>遊園地<rt>ゆうえんち</rt></ruby>へ<ruby>行<rt>い</rt></ruby>く<ruby>約束<rt>やくそく</rt></ruby>があります。
<ruby>朝<rt>あさ</rt></ruby>、<ruby>駅<rt>えき</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。<ruby>友達<rt>ともだち</rt></ruby>からメッセージが<ruby>来<rt>き</rt></ruby>ました。
「<ruby>私<rt>わたし</rt></ruby>たちは<ruby>何番<rt>なんばん</rt></ruby>ホームで<ruby>集<rt>あつ</rt></ruby>まりますか。」
<ruby>私<rt>わたし</rt></ruby>は、
「４番ホームです。」
と<ruby>返事<rt>へんじ</rt></ruby>をしました。
<ruby>駅<rt>えき</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いてから、<ruby>切符売<rt>きっぷう</rt></ruby>り<ruby>場<rt>ば</rt></ruby>を<ruby>探<rt>さが</rt></ruby>しました。そのあと、<ruby>快速<rt>かいそく</rt></ruby>に<ruby>乗<rt>の</rt></ruby>りました。<ruby>友達<rt>ともだち</rt></ruby>が、
「どの<ruby>電車<rt>でんしゃ</rt></ruby>に乗りますか。」
と<ruby>聞<rt>き</rt></ruby>いたので、
「快速が<ruby>便利<rt>べんり</rt></ruby>ですよ。」
と<ruby>答<rt>こた</rt></ruby>えました。
<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>２回<rt>にかい</rt></ruby><ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えました。でも、<ruby>終電<rt>しゅうでん</rt></ruby>までまだ<ruby>時間<rt>じかん</rt></ruby>があったので、<ruby>急<rt>いそ</rt></ruby>ぎませんでした。
<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>では<ruby>優先席<rt>ゆうせんせき</rt></ruby>が<ruby>空<rt>あ</rt></ruby>いていました。でも、<ruby>座<rt>すわ</rt></ruby>りませんでした。<ruby>静<rt>しず</rt></ruby>かに<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みながら友達を<ruby>待<rt>ま</rt></ruby>ちました。
<ruby>遊園地<rt>ゆうえんち</rt></ruby>で友達と会ってから、<ruby>近<rt>ちか</rt></ruby>くの<ruby>展示<rt>てんじ</rt></ruby>を見に行きました。その展示はとても<ruby>面白<rt>おもしろ</rt></ruby>かったです。
そのあと、おなかが<ruby>空<rt>す</rt></ruby>いたのでレストランへ行きました。そのレストランはピザで<ruby>有名<rt>ゆうめい</rt></ruby>ですが、パスタも<ruby>人気<rt>にんき</rt></ruby>です。
<ruby>友達<rt>ともだち</rt></ruby>が、
「<ruby>今夜<rt>こんや</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を食べたいですか。」
と聞きました。
<ruby>私<rt>わたし</rt></ruby>は、
「<ruby>牛肉<rt>ぎゅうにく</rt></ruby><ruby>料理<rt>りょうり</rt></ruby>が食べたいです。」
と答えました。
<ruby>帰<rt>かえ</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に<ruby>商店街<rt>しょうてんがい</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>きました。
<ruby>友達<rt>ともだち</rt></ruby>が、
「商店街に行きませんか。」
と<ruby>言<rt>い</rt></ruby>いました。
<ruby>私<rt>わたし</rt></ruby>は、
「いいですね。ぜひ行きましょう。」
と答えました。
<ruby>今日<rt>きょう</rt></ruby>はとても<ruby>楽<rt>たの</rt></ruby>しい<ruby>一日<rt>いちにち</rt></ruby>でした。`,
            questions: [
                { q: "私たちは何番ホームで集まりますか。", options: ["A. ２番ホーム", "B. ４番ホーム", "C. ６番ホーム"], correct: 1 },
                { q: "私たちはどんな電車に乗りましたか。", options: ["A. 普通電車", "B. 新幹線", "C. 快速"], correct: 2 },
                { q: "電車の中で私は何をしましたか。", options: ["A. 寝ました。", "B. 本を読みました。", "C. 音楽を歌いました。"], correct: 1 },
                { q: "レストランは何で有名ですか。", options: ["A. ハンバーガー", "B. ピザ", "C. ラーメン"], correct: 1 },
                { q: "最後にどこへ行きましたか。", options: ["A. 公園", "B. 学校", "C. 商店街"], correct: 2 }
            ],
            essayQuestions: [
                { q: "電車は何回乗り換えましたか。", a: "２回乗り換えました。" },
                { q: "展示はどうでしたか。", a: "とても面白かったです。" },
                { q: "私は今夜何を食べたいですか。", a: "牛肉料理が食べたいです。" },
                { q: "優先席が空いていましたか。", a: "はい、空いていました。" }
            ],
            vocabulary: [
                { word: "遊園地 (ゆうえんち)", meaning: "Taman bermain", sentence: "今日は友達と遊園地へ行く約束があります。", meaningSentence: "Hari ini saya ada janji pergi ke taman bermain bersama teman." },
                { word: "約束 (やくそく)", meaning: "Janji", sentence: "今日は友達と遊園地へ行く約束があります。", meaningSentence: "Hari ini saya ada janji pergi ke taman bermain bersama teman." },
                { word: "集まる (あつまる)", meaning: "Berkumpul", sentence: "「私たちは何番ホームで集まりますか。」", meaningSentence: "Kita berkumpul di peron nomor berapa?" },
                { word: "切符売り場 (きっぷうりば)", meaning: "Tempat penjualan tiket", sentence: "駅に着いてから、切符売り場を探しました。", meaningSentence: "Setelah tiba di stasiun, saya mencari tempat penjualan tiket." },
                { word: "探す (さがす)", meaning: "Mencari", sentence: "駅に着いてから、切符売り場を探しました。", meaningSentence: "Setelah tiba di stasiun, saya mencari tempat penjualan tiket." },
                { word: "快速 (かいそく)", meaning: "Kereta cepat (Rapid train)", sentence: "そのあと、快速に乗りました。", meaningSentence: "Setelah itu, saya naik kereta cepat." },
                { word: "便利 (べんり)", meaning: "Praktis / Praktis", sentence: "「快速が便利ですよ。」", meaningSentence: "Kereta cepat praktis lho." },
                { word: "途中 (とちゅう)", meaning: "Di tengah jalan / Di perjalanan", sentence: "途中で２回乗り換えました。", meaningSentence: "Di tengah perjalanan, kami transit/berganti kereta sebanyak dua kali." },
                { word: "乗り換える (のりかえる)", meaning: "Transit / Pindah kendaraan", sentence: "途中で２回乗り換えました。", meaningSentence: "Di tengah perjalanan, kami transit/berganti kereta sebanyak dua kali." },
                { word: "終電 (しゅうでん)", meaning: "Kereta terakhir", sentence: "でも、終電までまだ時間があったので、急ぎませんでした。", meaningSentence: "Namun, karena masih ada waktu sampai kereta terakhir, kami tidak terburu-buru." },
                { word: "急ぐ (いそぐ)", meaning: "Terburu-buru / Bergegas", sentence: "でも、終電までまだ時間があったので、急ぎませんでした。", meaningSentence: "Namun, karena masih ada waktu sampai kereta terakhir, kami tidak terburu-buru." },
                { word: "優先席 (ゆうせんせき)", meaning: "Kursi prioritas", sentence: "電車の中では優先席が空いていました。", meaningSentence: "Di dalam kereta, kursi prioritasnya kosong." },
                { word: "空く (あく)", meaning: "Kosong", sentence: "電車の中では優先席が空いていました。", meaningSentence: "Di dalam kereta, kursi prioritasnya kosong." },
                { word: "展示 (てんじ)", meaning: "Pameran / Display", sentence: "遊園地で友達と会ってから、近くの展示を見に行きました。", meaningSentence: "Setelah bertemu dengan teman di taman bermain, kami pergi melihat pameran di dekat sana." },
                { word: "今夜 (こんや)", meaning: "Malam ini", sentence: "「今夜は何を食べたいですか。」", meaningSentence: "Malam ini kamu ingin makan apa?" },
                { word: "牛肉 (ぎゅうにく)", meaning: "Daging sapi", sentence: "「牛肉料理が食べたいです。」", meaningSentence: "Saya ingin makan hidangan daging sapi." },
                { word: "商店街 (しょうてんがい)", meaning: "Kawasan perbelanjaan / Pertokoan", sentence: "帰る前に商店街を歩きました。", meaningSentence: "Sebelum pulang, kami berjalan kaki menyusuri kawasan pertokoan." }
            ]
        },
        {
    date: "28 Juni 2026",
    title: "テストとお正月<br>(Ujian & Tahun Baru)",
    readingText: `もうレポートを<ruby>書<rt>か</rt></ruby>きました。まだ<ruby>練習<rt>れんしゅう</rt></ruby>をしていませんが、もうノートをまとめました。
<ruby>来週<rt>らいしゅう</rt></ruby>はテストがあります。やっと<ruby>明日<rt>あした</rt></ruby>テストですね。私は<ruby>英語<rt>えいご</rt></ruby>を<ruby>復習<rt>ふくしゅう</rt></ruby>して、<ruby>外国語<rt>がいこくご</rt></ruby>の<ruby>単語<rt>たんご</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えます。<ruby>漢字<rt>かんじ</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しいですが、<ruby>頑張<rt>がんば</rt></ruby>ります。

<ruby>友達<rt>ともだち</rt></ruby>が「この<ruby>問題<rt>もんだい</rt></ruby>の<ruby>答<rt>こた</rt></ruby>えは何ですか。この答えは<ruby>正<rt>ただ</rt></ruby>しいですか。」と聞きました。でも、先生は「まず<ruby>自分<rt>じぶん</rt></ruby>で<ruby>考<rt>かんが</rt></ruby>えてください。」と言いました。

オンライン<ruby>授業<rt>じゅぎょう</rt></ruby>のとき、先生が「<ruby>画面<rt>がめん</rt></ruby>が見えますか。」と聞きました。私は「はい、見えます。でも、マイクが<ruby>遠<rt>とお</rt></ruby>いので<ruby>聞<rt>き</rt></ruby>こえません。<ruby>音<rt>おと</rt></ruby>が<ruby>小<rt>ちい</rt></ruby>さいです。」と答えました。そのあと、先生は「<ruby>今<rt>いま</rt></ruby>、ミュートにしますね。」と言いました。

授業の<ruby>後<rt>あと</rt></ruby>、ジムへ行きました。ジムで<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聴<rt>き</rt></ruby>きながら<ruby>運動<rt>うんどう</rt></ruby>しました。たくさん<ruby>汗<rt>あせ</rt></ruby>をかきました。でも、<ruby>肩<rt>かた</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>し<ruby>痛<rt>いた</rt></ruby>かったので、あまり運動をしませんでした。今日は<ruby>自転車<rt>じてんしゃ</rt></ruby>にも<ruby>乗<rt>の</rt></ruby>りました。

もうすぐお<ruby>正月<rt>しょうがつ</rt></ruby>です。<ruby>家<rt>いえ</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>して、リビングを<ruby>飾<rt>かざ</rt></ruby>りました。お正月にはおせち<ruby>料理<rt>りょうり</rt></ruby>を食べます。そして<ruby>神社<rt>じんじゃ</rt></ruby>で<ruby>願<rt>ねが</rt></ruby>い<ruby>事<rt>ごと</rt></ruby>をして、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ります。

<ruby>夜<rt>よる</rt></ruby>は<ruby>家族<rt>かぞく</rt></ruby>とカウントダウンを<ruby>待<rt>ま</rt></ruby>ちました。みんなでおせち料理を<ruby>楽<rt>たの</rt></ruby>しみ、<ruby>新年<rt>しんねん</rt></ruby>のあいさつをしました。
「あけましておめでとうございます。<ruby>今年<rt>ことし</rt></ruby>もよろしくお願いします。」`,
    questions: [
        { q: "私は何をまとめましたか。", options: ["A. 宿題", "B. ノート", "C. 本"], correct: 1 },
        { q: "私は何を復習しますか。", options: ["A. 数学", "B. 英語", "C. 理科"], correct: 1 },
        { q: "ジムで何をしましたか。", options: ["A. サッカーをしました。", "B. 音楽を聴きながら運動しました。", "C. 映画を見ました。"], correct: 1 },
        { q: "お正月に何を食べますか。", options: ["A. ラーメン", "B. ピザ", "C. おせち料理"], correct: 2 },
        { q: "お正月にどこで願い事をしますか。", options: ["A. 学校", "B. 神社", "C. 駅"], correct: 1 }
    ],
    essayQuestions: [
        { q: "なぜ先生の声が聞こえませんでしたか。", a: "マイクが遠いので聞こえませんでした。" },
        { q: "私はジムでどうなりましたか。", a: "たくさん汗をかきました。" },
        { q: "家族と何を待ちましたか。", a: "カウントダウンを待ちました。" },
        { q: "新年のあいさつは何と言いましたか。", a: "「あけましておめでとうございます。今年もよろしくお願いします。」と言いました。" }
    ],
    vocabulary: [
        { word: "練習 (れんしゅう)", meaning: "Latihan", sentence: "まだ練習をしていませんが、もうノートをまとめました。", meaningSentence: "Saya belum berlatih, tetapi saya sudah merangkum catatan." },
        { word: "復習する (ふくしゅうする)", meaning: "Mengulang pelajaran (Review)", sentence: "私は英語を復習して、外国語の単語を覚えます。", meaningSentence: "Saya mengulas kembali bahasa Inggris dan menghafal kosakata bahasa asing." },
        { word: "単語 (たんご)", meaning: "Kosakata (Vocabulary)", sentence: "私は英語を復習して、外国語の単語を覚えます。", meaningSentence: "Saya mengulas kembali bahasa Inggris dan menghafal kosakata bahasa asing." },
        { word: "覚える (おぼえる)", meaning: "Mengingat / Menghafal", sentence: "私は英語を復習して、外国語の単語を覚えます。", meaningSentence: "Saya mengulas kembali bahasa Inggris dan menghafal kosakata bahasa asing." },
        { word: "問題 (もんだい)", meaning: "Masalah / Soal", sentence: "友達が「この問題の答えは何ですか。この答えは正しいですか。」と聞きました。", meaningSentence: "Teman saya bertanya, Apa jawaban untuk soal ini? Apakah jawaban ini benar?" },
        { word: "自分 (じぶん)", meaning: "Diri sendiri", sentence: "でも、先生は「まず自分で考えてください。」と言いました。", meaningSentence: "Namun, guru berkata, Pertama-tama, silakan pikirkan sendiri." },
        { word: "画面 (がめん)", meaning: "Layar (Screen)", sentence: "オンライン授業のとき、先生が「画面が見えますか。」と聞きました。", meaningSentence: "Saat kelas online, guru bertanya, Apakah layarnya terlihat?" },
        { word: "授業 (じゅぎょう)", meaning: "Pelajaran / Kelas", sentence: "オンライン授業のとき、先生が「画面が見えますか。」と聞きました。", meaningSentence: "Saat kelas online, guru bertanya, Apakah layarnya terlihat?" },
        { word: "遠い (とおい)", meaning: "Jauh", sentence: "私は「はい、見えます。でも、マイクが遠いので聞こえません。音が小さいです。」と答えました。", meaningSentence: "Saya menjawab, Ya, terlihat. Namun, karena mikrofonnya jauh, tidak terdengar. Suaranya kecil." },
        { word: "運動する (うんどうする)", meaning: "Berolahraga / Beraktivitas fisik", sentence: "ジムで音楽を聴きながら運動しました。", meaningSentence: "Saya berolahraga di gym sambil mendengarkan musik." },
        { word: "汗をかく (あせをかく)", meaning: "Berkeringat", sentence: "たくさん汗をかきました。", meaningSentence: "Saya sudah mengeluarkan banyak keringat." },
        { word: "肩 (かた)", meaning: "Bahu / Pundak", sentence: "でも、肩が少し痛かったので、あまり運動をしませんでした。", meaningSentence: "Namun, karena bahu saya agak sakit, saya tidak begitu banyak berolahraga." },
        { word: "お正月 (おしょうがつ)", meaning: "Tahun Baru", sentence: "もうすぐお正月です。", meaningSentence: "Sebentar lagi Tahun Baru." },
        { word: "掃除する (そうじする)", meaning: "Membersihkan", sentence: "家を掃除して、リビングを飾りました。", meaningSentence: "Saya membersihkan rumah dan menghias ruang tamu." },
        { word: "おせち料理 (おせちりょうり)", meaning: "Makanan khas tahun baru Jepang", sentence: "お正月にはおせち料理を食べます。", meaningSentence: "Pada hari Tahun Baru, kami makan hidangan Osechi." },
        { word: "神社 (じんじゃ)", meaning: "Kuil Shinto", sentence: "そして神社で願い事をして、写真を撮ります。", meaningSentence: "Kemudian kami berdoa di kuil Shinto dan mengambil foto." },
        { word: "願い事 (ねがいごと)", meaning: "Keinginan / Doa", sentence: "そして神社で願い事をして、写真を撮ります。", meaningSentence: "Kemudian kami berdoa di kuil Shinto dan mengambil foto." }
    ]
},
        {
    date: "29 Juni 2026",
    title: "学生会館のイベントとクリスマス<br>(Event di Gedung Mahasiswa & Natal)",
    readingText: `私は<ruby>大学生<rt>だいがくせい</rt></ruby>です。私のいとこは<ruby>看護師<rt>かんごし</rt></ruby>です。
<ruby>今日<rt>きょう</rt></ruby>の<ruby>昼休<rt>ひるやす</rt></ruby>みに<ruby>動画<rt>どうが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました。そのあと、<ruby>学生会館<rt>がくせいかいかん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。私は学生会館のイベントがとても<ruby>好<rt>す</rt></ruby>きです。

<ruby>入口<rt>いりぐち</rt></ruby>で<ruby>友達<rt>ともだち</rt></ruby>が「どうしましたか。」と<ruby>聞<rt>き</rt></ruby>きました。
私は「ちょっとお<ruby>腹<rt>なか</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いです。」と<ruby>答<rt>こた</rt></ruby>えました。
友達は「<ruby>必<rt>かなら</rt></ruby>ず<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んでください。」と言いました。私はいつもスポーツドリンクもよく飲みます。

イベントで<ruby>新<rt>あたら</rt></ruby>しいお<ruby>知<rt>し</rt></ruby>らせをもらいました。友達が「もう見ましたか。」と聞いたので、「はい、見ました。」と答えました。

昼ご飯は<ruby>家<rt>いえ</rt></ruby>で<ruby>作<rt>つく</rt></ruby>ったおにぎりとオムレツを食べて、かわいい<ruby>弁当箱<rt>べんとうばこ</rt></ruby>を<ruby>持<rt>も</rt></ruby>って行きました。オムレツはいろいろな<ruby>国<rt>くに</rt></ruby>で<ruby>人気<rt>にんき</rt></ruby>があります。<ruby>日本<rt>にほん</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>ご飯では<ruby>漬物<rt>つけもの</rt></ruby>も食べます。漬物はしょっぱいですが、おいしいです。食べ<ruby>終<rt>お</rt></ruby>わったあと、パンを<ruby>紙袋<rt>かみぶくろ</rt></ruby>に入れました。この紙袋もかわいいと思います。

<ruby>午後<rt>ごご</rt></ruby>、みんなはあそこで集まりました。明日もまた集まる<ruby>予定<rt>よてい</rt></ruby>です。

もうすぐ<ruby>冬<rt>ふゆ</rt></ruby>になります。クリスマスは<ruby>特別<rt>とくべつ</rt></ruby>な<ruby>日<rt>ひ</rt></ruby>です。家でクリスマスツリーを<ruby>飾<rt>かざ</rt></ruby>ります。クリスマスは<ruby>音楽<rt>おんがく</rt></ruby>がにぎやかで、<ruby>夜<rt>よる</rt></ruby>にイベントがあります。みんなで<ruby>祝<rt>いわ</rt></ruby>います。
友達が「日本のクリスマスツリーも<ruby>海外<rt>かいがい</rt></ruby>と<ruby>同<rt>おなじ</rt></ruby>ですか。」と聞きました。
先生は「はい、ほとんど同じですよ。」と答えました。

<ruby>春<rt>はる</rt></ruby>は<ruby>桜<rt>さくら</rt></ruby>がとても<ruby>美<rt>うつく</rt></ruby>しいです。<ruby>秋<rt>あき</rt></ruby>はもみじが<ruby>赤<rt>あか</rt></ruby>くなります。<ruby>去年<rt>きょねん</rt></ruby>、私はもみじの<ruby>下<rt>した</rt></ruby>で<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>りました。`,
    questions: [
        { q: "私のいとこの仕事は何ですか。", options: ["A. 先生", "B. 看護師", "C. 運転手"], correct: 1 },
        { q: "私は昼ご飯に何を食べましたか。", options: ["A. パンとサラダ", "B. おおにぎりとオムレツ", "C. ラーメン"], correct: 1 },
        { q: "私は何を持って行きましたか。", options: ["A. 水筒", "B. 弁当箱", "C. ノート"], correct: 1 },
        { q: "クリスマスはいつイベントがありますか。", options: ["A. 朝", "B. 昼", "C. 夜"], correct: 2 },
        { q: "秋は何が赤くなりますか。", options: ["A. 桜", "B. ハート", "C. もみじ"], correct: 2 }
    ],
    essayQuestions: [
        { q: "友達は私に何を飲んでくださいと言いましたか。", a: "必ず水を飲んでくださいと言いました。" },
        { q: "パンを何に入れましたか。", a: "紙袋に入れました。" },
        { q: "明日もみんなは何をしますか。", a: "また集まります。" },
        { q: "去年、私はどこで写真を撮りましたか。", a: "もみじの下で写真を撮りました。" }
    ],
    vocabulary: [
        { word: "看護師 (かんごし)", meaning: "Perawat", sentence: "私のいとこは看護師です。", meaningSentence: "Sepupu saya adalah seorang perawat." },
        { word: "学生会館 (がくせいかいかん)", meaning: "Gedung / Aula Mahasiswa", sentence: "そのあと、学生会館へ行きました。", meaningSentence: "Setelah itu, saya pergi ke gedung mahasiswa." },
        { word: "お腹が痛い (おなかがいたい)", meaning: "Sakit perut", sentence: "私は「ちょっとお腹が痛いです。」と答えました。", meaningSentence: "Saya menjawab, Perut saya agak sakit." },
        { word: "必ず (かならず)", meaning: "Pasti / Harus", sentence: "友達は「必ず水を飲んでください。」と言いました。", meaningSentence: "Teman saya berkata, Kamu harus minum air." },
        { word: "お祝いらせ (おしらせ)", meaning: "Pengumuman / Pemberitahuan", sentence: "イベントで新しいお知らせをもらいました。", meaningSentence: "Saya mendapatkan pengumuman baru di acara tersebut." },
        { word: "弁当箱 (べんとうばこ)", meaning: "Kotak bekal (Bento)", sentence: "昼ご飯は家で作ったおにぎりとオムレツを食べて、かわいい弁当箱を持って行きました。", meaningSentence: "Untuk makan siang, saya makan onigiri dan omelet buatan rumah, dan membawa kotak bekal yang lucu." },
        { word: "漬物 (つけもの)", meaning: "Acar khas Jepang", sentence: "日本の朝ご飯では漬物も食べます。", meaningSentence: "Pada sarapan ala Jepang, kami juga makan acar." },
        { word: "紙袋 (かみぶくろ)", meaning: "Kantong kertas", sentence: "食べ終わったあと、パンを紙袋に入れました。", meaningSentence: "Setelah selesai makan, saya memasukkan roti ke dalam kantong kertas." },
        { word: "集まる (あつまる)", meaning: "Berkumpul", sentence: "午後、みんなはあそこで集まりました。", meaningSentence: "Siang harinya, semua orang berkumpul di sana." },
        { word: "特別 (とくべつ)", meaning: "Spesial / Istimewa", sentence: "クリスマスは特別な日です。", meaningSentence: "Hari Natal adalah hari yang spesial." },
        { word: "祝う (いわう)", meaning: "Merayakan", sentence: "みんなで祝います。", meaningSentence: "Kami merayakannya bersama-sama." },
        { word: "海外 (かいがい)", meaning: "Luar negeri", sentence: "友達が「日本のクリスマスツリーも海外と同じですか。」と聞きました。", meaningSentence: "Teman saya bertanya, Apakah pohon Natal di Jepang juga sama dengan yang di luar negeri?" },
        { word: "秋 (あき)", meaning: "Musim gugur", sentence: "秋のもみじが赤くなります。", meaningSentence: "Di musim gugur, daun momiji berubah menjadi merah." },
        { word: "去年 (きょねん)", meaning: "Tahun lalu", sentence: "去年、私はもみじの下で写真を撮りました。", meaningSentence: "Tahun lalu, saya mengambil foto di bawah pohon momiji." }
    ]
},
        {
            date: "30 Juni 2026",
            title: "学園祭の準備<br>(Persiapan Festival Sekolah)",
            readingText: `<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>学校<rt>がっこう</rt></ruby>で<ruby>学園祭<rt>がくえんさい</rt></ruby>があります。私たちのクラスはケーキとメロンジュースの<ruby>店<rt>みせ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>します。
<ruby>今日<rt>きょう</rt></ruby>はクラスのみんなで<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>いました。クラスのリーダーが「みんな<ruby>準備<rt>じゅんび</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めましょう。」と言いました。
みんなは「はい、すぐに始めます。」と<ruby>答<rt>こた</rt></ruby>えました。

<ruby>私<rt>わたし</rt></ruby>は<ruby>壁<rt>かべ</rt></ruby>を<ruby>塗<rt>ぬ</rt></ruby>りました。<ruby>田中<rt>たなか</rt></ruby>さんはポスターを<ruby>描<rt>か</rt></ruby>きました。ほかの<ruby>友達<rt>ともだち</rt></ruby>は<ruby>紙<rt>かみ</rt></ruby>をたくさん<ruby>切<rt>き</rt></ruby>ったり、<ruby>看板<rt>かんばん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ったりしました。
「この看板はとてもカラフルですね。」
「ありがとうございます。」

<ruby>来週<rt>らいしゅう</rt></ruby>はみんなでのりや<ruby>新<rt>あたら</rt></ruby>しいはさみを<ruby>使<rt>つか</rt></ruby>います。<ruby>私<rt>わたし</rt></ruby>は<ruby>絵<rt>え</rt></ruby>の<ruby>具<rt>ぐ</rt></ruby>を<ruby>選<rt>えら</rt></ruby>びました。<ruby>花<rt>はな</rt></ruby>も<ruby>飾<rt>かざ</rt></ruby>る<ruby>予定<rt>よてい</rt></ruby>です。

そのあと、メニューについて話し合いました。
「<ruby>飲み物<rt>のみもの</rt></ruby>はどこで<ruby>売<rt>う</rt></ruby>りますか。」
「<ruby>会計<rt>かいけい</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くで売りましょう。」
「<ruby>食べ物<rt>たべもの</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>が<ruby>持<rt>も</rt></ruby>ってきますか。」
「私が持ってきます。」

私はケーキを作ります。友達はシロップを使ったいちご<ruby>味<rt>あじ</rt></ruby>の飲み物を作ります。

学園祭の<ruby>前<rt>まえ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>、リーダーが言いました。
「そろそろリハーサルを始めますか。」
みんなは「じゃあ、そうしましょう。」と答えました。

学園祭の日、お<ruby>客<rt>きゃく</rt></ruby>さんがたくさん<ruby>来<rt>き</rt></ruby>ました。
「<ruby>焼きそば<rt>やきそば</rt></ruby>は<ruby>売り切れ<rt>うりきれ</rt></ruby>ですか。」
「はい、もう売り切れです。」
「田中さん、1000<ruby>円<rt>えん</rt></ruby>のおつりがありますか。」
「はい、ありますよ。」

お店はとても<ruby>人気<rt>にんき</rt></ruby>がありました。みんなで作ったので、きっとうまくいきました。

学園祭が<ruby>終<rt>お</rt></ruby>わったあと、<ruby>先生<rt>せんせい</rt></ruby>が言いました。
「みなさん、お<ruby>疲れ<rt>つかれ</rt></ruby>さまでした。イベントは<ruby>大成功<rt>だいせいこう</rt></ruby>でした。」
みんなはとてもうれしかったです。`,
            questions: [
                { q: "クラスは学園祭で何の店を出しますか。", options: ["A. ラーメンの店", "B. ケーキとメロンジュースの店", "C. 花屋"], correct: 1 },
                { q: "ポスターを描いたのは誰ですか。", options: ["A. 私", "B. 先生", "C. 田中さん"], correct: 2 },
                { q: "私は何をしましたか。", options: ["A. 壁を塗りました。", "B. ゲームを作りました。", "C. 花火を見ました。"], correct: 0 },
                { q: "学園祭の日、何が売り切れになりましたか。", options: ["A. ケーキ", "B. 焼きそば", "C. ジュース"], correct: 1 },
                { q: "イベントは最後にどうなりましたか。", options: ["A. 失敗しました。", "B. 中止になりました。", "C. 大成功でした。"], correct: 2 }
            ],
            essayQuestions: [
                { q: "来週は何を使いますか。", a: "のりと新しいはさみを使います。" },
                { q: "飲み物はどこで売りますか。", a: "会計の近くで売ります。" },
                { q: "誰がお客さんにおつりを渡しましたか。", a: "田中さんです。" },
                { q: "みんなはどうしてイベントはうまくいったと思いましたか。", a: "みんなで作ったからです。" }
            ],
            vocabulary: [
                { word: "学園祭 (がくえんさい)", meaning: "Festival sekolah / kampus", sentence: "来月、学校で学園祭があります。", meaningSentence: "Bulan depan, ada festival sekolah di sekolah." },
                { word: "店を出す (みせをだす)", meaning: "Membuka kedai / stan", sentence: "私たちのクラスはケーキとメロンジュースの店を出します。", meaningSentence: "Kelas kami akan membuka kedai kue dan jus melon." },
                { word: "話し合う (はなしあう)", meaning: "Berdiskusi / Saling berbicara", sentence: "今日はクラスのみんなで話し合いました。", meaningSentence: "Hari ini kami semua sekelas berdiskusi bersama." },
                { word: "準備 (じゅんび)", meaning: "Persiapan", sentence: "クラスのリーダーが「みんな準備を始めましょう。」と言いました。", meaningSentence: "Ketua kelas berkata, Semuanya, mari kita mulai persiapannya." },
                { word: "壁を塗る (かべをぬる)", meaning: "Mengecat dinding", sentence: "私は壁を塗りました。", meaningSentence: "Saya mengecat dinding." },
                { word: "看板 (かんばん)", meaning: "Papan nama / Papan iklan", sentence: "ほかの友達は紙をたくさん切ったり、看板を作ったりしました。", meaningSentence: "Teman-teman yang lain memotong banyak kertas dan membuat papan nama." },
                { word: "のり", meaning: "Lem", sentence: "来週はみんなでのりや新しいはさみを使います。", meaningSentence: "Minggu depan semua orang akan menggunakan lem dan gunting baru." },
                { word: "絵の具 (えのぐ)", meaning: "Cat air / Alat lukis", sentence: "私は絵の具を選びました。", meaningSentence: "Saya memilih cat air." },
                { word: "予定 (よてい)", meaning: "Rencana / Jadwal", sentence: "花も飾る予定です。", meaningSentence: "Rencananya kami juga akan menghias dengan bunga." },
                { word: "会計 (かいけい)", meaning: "Kasir / Pembayaran", sentence: "「会計の近くで売りましょう。」", meaningSentence: "Mari kita menjualnya di dekat kasir." },
                { word: "売り切れ (うりきれ)", meaning: "Habis terjual", sentence: "「焼きそばは売り切れですか。」「はい、もう売り切れです。」", meaningSentence: "Apakah yakisoba sudah habis terjual? Ya, sudah habis terjual." },
                { word: "おつり", meaning: "Uang kembalian", sentence: "「田中さん、1000円のおつりがありますか。」", meaningSentence: "Tanaka-san, apakah ada uang kembalian 1000 yen?" },
                { word: "大成功 (だいせいこう)", meaning: "Sukses besar", sentence: "「イベントは大成功でした。」", meaningSentence: "Acaranya sukses besar." }
            ]
        },
        {
            date: "1 Juli 2026",
            title: "卒業式の後のピクニック<br>(Piknik Setelah Upacara Kelulusan)",
            readingText: `<ruby>今日<rt>きょう</rt></ruby>は<ruby>卒業式<rt>そつぎょうしき</rt></ruby>でした。<ruby>今年<rt>ことし</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>と<ruby>参加<rt>さんか</rt></ruby>しました。
卒業式が<ruby>終<rt>お</rt></ruby>わったあと、友達が<ruby>言<rt>い</rt></ruby>いました。
「ピクニックをしませんか。」
<ruby>私<rt>わたし</rt></ruby>は、
「いいですね。どこにしましょうか。」
と<ruby>答<rt>こた</rt></ruby>えました。
みんなで<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>って、<ruby>桜<rt>さくら</rt></ruby>のある<ruby>公園<rt>こうえん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くことにしました。

<ruby>朝<rt>あさ</rt></ruby>、私は<ruby>天気予報<rt>てんきよほう</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました。今日は天気がよくて、とてもうれしかったです。友達も「ピクニックの天気予報を見ましたか。」と<ruby>聞<rt>き</rt></ruby>きました。
「はい、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>そうですよ。」と私は答えました。

公園へ行く<ruby>前<rt>まえ</rt></ruby>に、<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>車<rt>くるま</rt></ruby>にのせました。
「荷物はどうしましょうか。」
「私の車にのせましょう。」
みんなでかごやレジャーシート、<ruby>水筒<rt>すいとう</rt></ruby>を持って行きました。

公園に<ruby>着<rt>つ</rt></ruby>くと、<ruby>風<rt>かぜ</rt></ruby>が<ruby>気持<rt>きも</rt></ruby>ちよかったです。
「この<ruby>場所<rt>ばしょ</rt></ruby>はとても気持ちいいですね。」
「そうですね。」
みんなでレジャーシートを<ruby>広<rt>ひろ</rt></ruby>げて、お<ruby>茶<rt>ちゃ</rt></ruby>やジュース、サンドウィッチを<ruby>食<rt>た</rt></ruby>べました。

食べ終わったあと、私はお<ruby>皿<rt>さら</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>いました。友達はテーブルを<ruby>拭<rt>ふ</rt></ruby>いて、おしぼりを<ruby>集<rt>あつ</rt></ruby>めました。
「テーブルを拭きましょうか。」
「はい、お<ruby>願い<rt>ねが</rt></ruby>いします。」
そのあと、プラスチックのカップやゴミを<ruby>全部<rt>ぜんぶ</rt></ruby>集めました。
「プラスチックのゴミは全部集めましたか。」
「はい、全部集めました。」

<ruby>帰<rt>かえ</rt></ruby>る前に、友達が言いました。
「レジャーシートを<ruby>畳<rt>たた</rt></ruby>んでくれませんか。」
「はい、私が畳みます。」
私は<ruby>傘<rt>かさ</rt></ruby>を拭いてから帰りました。

今日は天気もよくて、友達と<ruby>楽しい<rt>たのしい</rt></ruby><ruby>時間<rt>じかん</rt></ruby>を<ruby>過<rt>すご</rt></ruby>しました。また<ruby>来年<rt>らいねん</rt></ruby>もみんなでピクニックをしたいと<ruby>思<rt>おも</rt></ruby>います。`,
            questions: [
                { q: "卒業式の後で何をしましたか。", options: ["A. 映画を見ました。", "B. ピクニックをしました。", "C. 買い物をしました。"], correct: 1 },
                { q: "公園へ行く前に荷物をどこにのせましたか。", options: ["A. バス", "B. 電車", "C. 車"], correct: 2 },
                { q: "公園で何を食べましたか。", options: ["A. ラーメン", "B. サンドウィッチ", "C. カレー"], correct: 1 },
                { q: "食事の後、私は何をしましたか。", options: ["A. 写真を撮りました。", "B. お皿を洗いました。", "C. 花を見ました。"], correct: 1 },
                { q: "最後にみんなは何を集めましたか。", options: ["A. 花", "B. 本", "C. ゴミ"], correct: 2 }
            ],
            essayQuestions: [
                { q: "ピクニックへ行く前に何を見ましたか。", a: "天気予報を見ました。" },
                { q: "公園の風はどうでしたか。", a: "気持ちよかったです。" },
                { q: "誰がレジャーシートを畳みましたか。", a: "私が畳みました。" },
                { q: "また来年、何をしたいですか。", a: "みんなでピクニックをしたいです。" }
            ],
            vocabulary: [
                { word: "卒業式 (そつぎょうしき)", meaning: "Upacara kelulusan", sentence: "今日は卒業式でした。", meaningSentence: "Hari ini adalah upacara kelulusan." },
                { word: "参加する (さんかする)", meaning: "Mengikuti / Berpartisipasi", sentence: "今年は友達と参加しました。", meaningSentence: "Tahun ini saya mengikutinya bersama teman." },
                { word: "天気予報 (てんきよほう)", meaning: "Prakiraan cuaca", sentence: "朝、私は天気予報を見ました。", meaningSentence: "Di pagi hari, saya melihat prakiraan cuaca." },
                { word: "荷物 (にもつ)", meaning: "Barang bawaan", sentence: "公園へ行く前に、荷物を車にのせました。", meaningSentence: "Sebelum pergi ke taman, kami memuat barang-barang ke dalam mobil." },
                { word: "のせる", meaning: "Meletakkan ke atas / Memuat", sentence: "公園へ行く前に、荷物を車にのせました。", meaningSentence: "Sebelum pergi ke taman, kami memuat barang-barang ke dalam mobil." },
                { word: "かご", meaning: "Keranjang", sentence: "みんながかごやレジャーシート、水筒を持って行きました。", meaningSentence: "Semua orang membawa keranjang, tikar piknik, dan botol minum." },
                { word: "レジャーシート", meaning: "Tikar piknik", sentence: "みんなでレジャーシートを広げて、お茶やジュース、サンドウィッチを食べました。", meaningSentence: "Kami semua menggelar tikar piknik, lalu menikmati teh, jus, dan roti lapis." },
                { word: "水筒 (すいとう)", meaning: "Botol minum", sentence: "みんながかごやレジャーシート、水筒を持って行きました。", meaningSentence: "Semua orang membawa keranjang, tikar piknik, dan botol minum." },
                { word: "気持ちいい (きもちいい)", meaning: "Terasa nyaman / Enak (suasana/udara)", sentence: "公園に着くと、風が気持ちよかったです。", meaningSentence: "Setibanya di taman, anginnya terasa sangat nyaman." },
                { word: "広げる (ひろげる)", meaning: "Menggelar / Membuka lebar", sentence: "みんなでレジャーシートを広げて、お茶やジュース、サンドウィッチを食べました。", meaningSentence: "Kami semua menggelar tikar piknik, lalu menikmati teh, jus, dan roti lapis." },
                { word: "お皿を洗う (おさらをあらう)", meaning: "Mencuci piring", sentence: "食べ終わったあと、私はお皿を洗いました。", meaningSentence: "Setelah selesai makan, saya mencuci piring." },
                { word: "拭く (ふく)", meaning: "Mengelap", sentence: "友達はテーブルを拭いて、おしぼりを集めました。", meaningSentence: "Teman saya mengelap meja dan mengumpulkan handuk basah." },
                { word: "おしぼり", meaning: "Handuk basah pembersih tangan", sentence: "友達はテーブルを拭いて、おしぼりを集めました。", meaningSentence: "Teman saya mengelap meja dan mengumpulkan handuk basah." },
                { word: "集める (あつめる)", meaning: "Mengumpulkan", sentence: "そのあと、プラスチックのカップやゴミを全部集めました。", meaningSentence: "Setelah itu, kami mengumpulkan semua gelas plastik dan sampah." },
                { word: "畳む (たたむ)", meaning: "Melipat", sentence: "「レジャーシートを畳んでくれませんか。」「はい、私が畳みます。」", meaningSentence: "Bisa tolong lipat tikar pikniknya? Ya, saya yang akan melipatnya." },
                { word: "時間を過ごす (じかんをすごす)", meaning: "Menghabiskan waktu", sentence: "今日は天気もよくて、友達と楽しい時間を過ごしました。", meaningSentence: "Hari ini cuacanya bagus, dan saya menghabiskan waktu yang menyenangkan bersama teman." }
            ]
        },
        {
            date: "2 Juni 2026",
            title: "カンファレンスの日<br>(Hari Konferensi)",
            readingText: `<ruby>昨日<rt>きのう</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>会社<rt>かいしゃ</rt></ruby>のカンファレンスに<ruby>参加<rt>さんか</rt></ruby>しました。<ruby>東京地域<rt>とうきょうちいき</rt></ruby>や<ruby>中央<rt>ちゅうおう</rt></ruby>アメリカ、<ruby>東<rt>ひがし</rt></ruby>ヨーロッパなど、いろいろな<ruby>地域<rt>ちいき</rt></ruby>からたくさんの<ruby>人<rt>ひと</rt></ruby>が<ruby>来<rt>き</rt></ruby>ていました。

<ruby>朝<rt>あさ</rt></ruby>、<ruby>山田<rt>やまだ</rt></ruby>さんがミーティングを<ruby>開催<rt>かいさい</rt></ruby>しました。そのあと、リーダーが<ruby>発表<rt>はっぴょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めました。<ruby>新商品<rt>しんしょうひん</rt></ruby>や<ruby>新<rt>あたら</rt></ruby>しいプロジェクトについて<ruby>説明<rt>せつめい</rt></ruby>しました。
私はカタログを<ruby>見<rt>み</rt></ruby>ながら<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きました。

<ruby>休憩<rt>きゅうけい</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>に、<ruby>社長<rt>しゃちょう</rt></ruby>と<ruby>少<rt>すこ</rt></ruby>し話しました。
「あちらにもコーヒーがありますね。」
「はい、ありがとうございます。」

そのあと、新商品のブースへ<ruby>行<rt>い</rt></ruby>きました。
「あのブースに新しい商品がありますよ。」
「そうですか。見に行きましょう。」
東ヨーロッパのブースや中央アメリカの<ruby>料理<rt>りょうり</rt></ruby>のブースも見ました。どのブースもとても<ruby>面白<rt>おもしろ</rt></ruby>かったです。

<ruby>午後<rt>ごご</rt></ruby>、<ruby>田中<rt>たなか</rt></ruby>さんが新商品を<ruby>紹介<rt>しょうかい</rt></ruby>していました。<ruby>部長<rt>ぶちょう</rt></ruby>は新しいプロジェクトを始めて、とても<ruby>忙<rt>いそが</rt></ruby>しそうでした。
私は<ruby>来月<rt>らいげつ</rt></ruby>のイベントを<ruby>担当<rt>たんとう</rt></ruby>するので、部長にいろいろ<ruby>質問<rt>しつもん</rt></ruby>しました。

<ruby>夕方<rt>ゆうがた</rt></ruby>になると、みんなは<ruby>帰<rt>かえ</rt></ruby>り始めました。
「山田さんはまだここに<ruby>残<rt>のこ</rt></ruby>りますか。」
「はい、もう少し残ります。」
私も少し残って、新しい人と話しました。微、この人の<ruby>名前<rt>なまえ</rt></ruby>は<ruby>覚<rt>おぼ</rt></ruby>えていません。

帰る前に、友達が言いました。
「<ruby>再来年<rt>さらいねん</rt></ruby>もこのカンファレンスに来ますか。」
私は<ruby>笑<rt>わら</rt></ruby>って答えました。
「はい。また来たいです。」`,
            questions: [
                { q: "カンファレンスにはどこから人が来ましたか。", options: ["A. 東京地域だけ", "B. 日本だけ", "C. いろいろな地域"], correct: 2 },
                { q: "リーダーは何を始めましたか。", options: ["A. 食事", "B. 発表", "C. 会議"], correct: 1 },
                { q: "私は誰と少し話しましたか。", options: ["A. 社長", "B. 学生", "C. お客さん"], correct: 0 },
                { q: "私は来月何を担当しますか。", options: ["A. 旅行", "B. イベント", "C. 会議"], correct: 1 },
                { q: "山田さんはどうしましたか。", options: ["A. すぐ帰りました。", "B. もう少し残りました。", "C. 旅行へ行きました。"], correct: 1 }
            ],
            essayQuestions: [
                { q: "私は何を見ながら話を聞きましたか。", a: "カタログを見ながら話を聞きました。" },
                { q: "午後、田中さんは何を紹介していましたか。", a: "新商品を紹介していました。" },
                { q: "私は覚えていないものは何ですか。", a: "新しい人の名前です。" },
                { q: "再来年も私はカンファレンスに来たいですか。", a: "はい、来たいです。" }
            ],
            vocabulary: [
                { word: "開催する (かいさいする)", meaning: "Menyelenggarakan / Mengadakan", sentence: "朝、山田さんがミーティングを開催しました。", meaningSentence: "Di pagi hari, sdr. Yamada menyelenggarakan pertemuan." },
                { word: "発表 (はっぴょう)", meaning: "Presentasi / Pengumuman", sentence: "そのあと、リーダーが発表を始めました。", meaningSentence: "Setelah itu, ketua memulai presentasi." },
                { word: "説明する (せつめいする)", meaning: "Menjelaskan", sentence: "新商品や新しいプロジェクトについて説明しました。", meaningSentence: "Dia menjelaskan tentang produk baru dan proyek baru." },
                { word: "地域 (ちいき)", meaning: "Wilayah / Daerah", sentence: "東京地域や中央アメリカ、東ヨーロッパなど、いろいろな地域からたくさんの人が来ていました。", meaningSentence: "Banyak orang datang dari berbagai wilayah seperti wilayah Tokyo, Amerika Tengah, dan Eropa Timur." },
                { word: "社長 (しゃちょう)", meaning: "Direktur / Presiden perusahaan", sentence: "休憩の時間に、社長と少し話しました。", meaningSentence: "Pada saat waktu istirahat, saya berbicara sebentar dengan direktur." },
                { word: "ブース", meaning: "Stan / Booth", sentence: "そのあと、新商品のブースへ行きました。", meaningSentence: "Setelah itu, kami pergi ke stan produk baru." },
                { word: "紹介する (しょうかいする)", meaning: "Memperkenalkan", sentence: "午後、田中さんが新商品を紹介していました。", meaningSentence: "Di siang hari, sdr. Tanaka sedang memperkenalkan produk baru." },
                { word: "部長 (ぶちょう)", meaning: "Kepala divisi / Manajer", sentence: "部長は新しいプロジェクトを始めて、とても忙しそうでした。", meaningSentence: "Kepala divisi memulai proyek baru dan terlihat sangat sibuk." },
                { word: "担当する (たんとうする)", meaning: "Bertanggung jawab atas / Memegang kendali", sentence: "私は来月のイベントを担当するので、部長にいろいろ質問しました。", meaningSentence: "Karena saya bertanggung jawab atas acara bulan depan, saya mengajukan berbagai pertanyaan kepada kepala divisi." },
                { word: "残る (のこる)", meaning: "Tetap tinggal / Menetap", sentence: "「山田さんはまだここに残りますか。」「はい、もう少し残ります。」", meaningSentence: "Apakah sdr. Yamada masih akan tinggal di sini? Ya, saya akan tinggal sebentar lagi." },
                { word: "覚える (おぼえる)", meaning: "Meningat", sentence: "でも、この人の名前は覚えていません。", meaningSentence: "Namun, saya tidak mengingat nama orang ini." },
                { word: "再来年 (さらいねん)", meaning: "Dua tahun lagi", sentence: "「再来年もこのカンファレンスに来ますか。」", meaningSentence: "Apakah dua tahun lagi kamu akan datang juga ke konferensi ini?" }
            ]
},
        {
            date: "3 Juli 2026",
            title: "デートの日<br>(Hari Kencan)",
            readingText: `<ruby>昨日<rt>きのう</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>とデートに<ruby>行<rt>い</rt></ruby>きました。
<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ると、お<ruby>母<rt>かあ</rt></ruby>さんが<ruby>聞<rt>き</rt></ruby>きました。
「ただいま。デートはどうだった？」
<ruby>私<rt>わたし</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>考<rt>かんが</rt></ruby>いて、
「うん、<ruby>正直<rt>しょうじき</rt></ruby>、あまりよくなかったな。」
と<ruby>答<rt>こた</rt></ruby>えました。

お母さんはびっくりして、
「<ruby>何<rt>なに</rt></ruby>があったの。」
と聞きました。
私は<ruby>話<rt>はな</rt></ruby>し<ruby>始<rt>はじ</rt></ruby>めました。
「<ruby>天気<rt>てんき</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>だったし、<ruby>公園<rt>こうえん</rt></ruby>は<ruby>近<rt>ちか</rt></ruby>くなかったです。それに、レストランの<ruby>雰囲気<rt>ふんいき</rt></ruby>も<ruby>悪<rt>わる</rt></ruby>かったです。<ruby>静<rt>しず</rt></ruby>かじゃなかったし、<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>もまあまあでした。デザートのアイスクリームはまずかったです。」

お母さんは、
「それはひどいね。」
と<ruby>言<rt>い</rt></ruby>いました。
私は<ruby>つづ<rt>続</rt></ruby>けました。
「<ruby>映画<rt>えいが</rt></ruby>も<ruby>見<rt>み</rt></ruby>ました。でも、映画は<ruby>長<rt>なが</rt></ruby>くて、<ruby>変<rt>へん</rt></ruby>でした。<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>面白<rt>おもしろ</rt></ruby>くなかったです。」
「それはひどい映画だったね。」
「そうだね。」
私は少し<ruby>笑<rt>わら</rt></ruby>いました。

「プレゼントも<ruby>高<rt>たか</rt></ruby>くなかったし、その<ruby>人<rt>ひと</rt></ruby>は<ruby>遅<rt>おそ</rt></ruby>かったです。<ruby>彼女<rt>かのじょ</rt></ruby>は私にあまり<ruby>親切<rt>しんせつ</rt></ruby>じゃありませんでした。」

お母さんは少し<ruby>心配<rt>しんぱい</rt></ruby>そうに言いました。
「じゃあ、また<ruby>会<rt>あ</rt></ruby>いたくないの。」
私はすぐに答えました。
「うん、もう会わないと<ruby>思<rt>おも</rt></ruby>う。」

その<ruby>日<rt>ひ</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>い日でした。でも、家に帰って<ruby>家族<rt>かぞく</rt></ruby>と話したので、少し<ruby>元気<rt>げんき</rt></ruby>になりました。`,
            questions: [
                { q: "昨日、私は何をしましたか。", options: ["A. 映画館で仕事をしました。", "B. デートに行きました。", "C. 公園で運動しました。"], correct: 1 },
                { q: "天気はどうでしたか。", options: ["A. 晴れでした。", "B. 雪でした。", "C. 雨でした。"], correct: 2 },
                { q: "レストランはどうでしたか。", options: ["A. 雰囲気がよかったです。", "B. 雰囲気が悪かったです。", "C. とても静かでした。"], correct: 1 },
                { q: "映画はどうでしたか。", options: ["A. 面白かったです。", "B. 短かったです。", "C. 長くて、変でした。"], correct: 2 },
                { q: "最後に私はどう思いましたか。", options: ["A. また会いたいです。", "B. もう会わないと思います。", "C. 来週またデートします。"], correct: 1 }
            ],
            essayQuestions: [
                { q: "デザートはどうでしたか。", a: "まずいアイスクリームでした。" },
                { q: "彼女は親切でしたか。", a: "いいえ、あまり親切ではありませんでした。" },
                { q: "お母さんは何と聞きましたか。", a: "「デートはどうだった。」と聞きました。" },
                { q: "家に帰ってから私はどうなりましたか。", a: "少し元気になりました。" }
            ],
            vocabulary: [
                { word: "ただいま", meaning: "Saya pulang / Aku kembali", sentence: "「ただいま。デートはどうだった？」", meaningSentence: "Aku pulang. Bagaimana kencannya?" },
                { word: "正直 (しょうじき)", meaning: "Sejujurnya / Jujur", sentence: "「うん、正直、あまりよくなかったな。」", meaningSentence: "Ya, sejujurnya tidak terlalu bagus." },
                { word: "話し始める (はなしはじめる)", meaning: "Mulai bercerita / Bicara", sentence: "私は話し始めました。", meaningSentence: "Saya pun mulai bercerita." },
                { word: "雰囲気 (ふんいき)", meaning: "Suasana / Atmosfer", sentence: "それに、レストランの雰囲気も悪かったです。", meaningSentence: "Selain itu, suasana restorannya juga buruk." },
                { word: "まあまあ", meaning: "Biasa saja / Lumayan", sentence: "静かじゃなかったし、食べ物もまあまあでした。", meaningSentence: "Suasananya tidak tenang, dan makanannya pun biasa saja." },
                { word: "まずい", meaning: "Tidak enak", sentence: "デザートのアイスクリームはまずかったです。", meaningSentence: "Es krim pencuci mulutnya tidak enak." },
                { word: "ひどい", meaning: "Buruk / Parah", sentence: "お母さんは、「それはひどいね。」と言いました。", meaningSentence: "Ibu berkata, Itu buruk sekali ya." },
                { word: "続ける (つづける)", meaning: "Melanjutkan", sentence: "私は続けました。", meaningSentence: "Saya melanjutkan cerita." },
                { word: "変 (へん)", meaning: "Aneh", sentence: "でも、映画は長くて、変でした。", meaningSentence: "Tapi, filmnya panjang dan aneh." },
                { word: "全然 (ぜんぜん)", meaning: "Sama sekali (diikuti bentuk negatif)", sentence: "全然面白くなかったです。", meaningSentence: "Sama sekali tidak menarik." },
                { word: "親切 (しんせつ)", meaning: "Baik hati / Ramah", sentence: "彼女は私にあまり親切じゃありませんでした。", meaningSentence: "Dia tidak begitu ramah kepada saya." },
                { word: "心配 (しんぱい)", meaning: "Khawatir", sentence: "お母さんは少し心配そうに言いました。", meaningSentence: "Ibu berkata dengan wajah yang sedikit khawatir." },
                { word: "会う (あう)", meaning: "Bertemu", sentence: "「じゃあ、また会いたくないの。」「うん、もう会わないと思う。」", meaningSentence: "Kalau begitu, kamu tidak ingin bertemu dengannya lagi? Ya, aku pikir tidak akan bertemu lagi." },
                { word: "元気 (げんき)", meaning: "Sehat / Bersemangat / Ceria", sentence: "でも、家に帰って家族と話したので、少し元気になりました。", meaningSentence: "Tapi, karena pulang ke rumah dan mengobrol dengan keluarga, saya menjadi sedikit lebih ceria." }
            ]
        },
        {
            date: "4 Juli 2026",
            title: "新しいゲームセンター<br>(Pusat Permainan yang Baru)",
            readingText: `<ruby>週末<rt>しゅうまつ</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>新<rt>あたら</rt></ruby>しいゲームセンターに<ruby>行<rt>い</rt></ruby>くことになりました。
<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>言<rt>い</rt></ruby>いました。
「<ruby>何時<rt>なんじ</rt></ruby>に<ruby>集<rt>あつ</rt></ruby>まりますか。」
<ruby>私<rt>わたし</rt></ruby>は「<ruby>午後<rt>ごご</rt></ruby>2<ruby>時<rt>じ</rt></ruby>に集まりましょう。」と<ruby>答<rt>こた</rt></ruby>えました。

みんなで<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>地図<rt>ちず</rt></ruby>で<ruby>確認<rt>かくん</rt></ruby>しました。新しいゲームセンターは<ruby>駅<rt>えき</rt></ruby>から<ruby>近<rt>ちか</rt></ruby>くて、とても<ruby>便利<rt>べんり</rt></ruby>です。
「このゲームセンターは新しいですね。」
「はい、とてもきれいで<ruby>楽<rt>たの</rt></ruby>しみです。」

<ruby>当日<rt>とうじつ</rt></ruby>、ゲームセンターはとても<ruby>賑<rt>にぎ</rt></ruby>やかでした。<ruby>音楽<rt>おんがく</rt></ruby>も<ruby>大<rt>おお</rt></ruby>きくて、<ruby>明<rt>あか</rt></ruby>るい<ruby>雰囲気<rt>ふんいき</rt></ruby>でした。

私たちはまずクレーンゲームをしました。<ruby>人気<rt>にんき</rt></ruby>のキャラクターのぬいぐるみがありました。
「このキャラクターを<ruby>見<rt>み</rt></ruby>に行きませんか。」
「いいね、ぜひ行きましょう。」
クレーンゲームは<ruby>少<rt>すこ</rt></ruby>し<ruby>難<rt>むずか</rt></ruby>しかったですが、1<ruby>時間<rt>じかん</rt></ruby>100<ruby>円<rt>えん</rt></ruby>のゲームもありました。とても<ruby>安<rt>やす</rt></ruby>くて楽しかったです。

ボーリングもしました。ボーリングの<ruby>後<rt>あと</rt></ruby>、みんなで<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>りました。
「すごいね、いい<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>で</rt></ruby>だね。」

ゲームセンターのスタッフはとても<ruby>親切<rt>しんせつ</rt></ruby>でした。わからないことがあったときも<ruby>教<rt>おし</rt></ruby>えてくれました。

<ruby>最後<rt>さいご</rt></ruby>に、ガチャポンを見ました。<ruby>面白<rt>おもしろ</rt></ruby>いキャラクターがたくさんありました。
「新しいゲームセンター、楽しかったね。」
「はい、<ruby>次<rt>つぎ</rt></ruby>の<ruby>休<rt>やす</rt></ruby>みも楽しみですね。」
みんなはとても<ruby>満足<rt>まんぞく</rt></ruby>して<ruby>帰<rt>かえ</rt></ruby>りました。`,
            questions: [
                { q: "どこへ行きましたか。", options: ["A. 映画館", "B. ゲームセンター", "C. 学校"], correct: 1 },
                { q: "何で遊びましたか。", options: ["A. サッカー", "B. クレーンゲームとボーリング", "C. 勉強"], correct: 1 },
                { q: "ゲームセンターはどうでしたか。", options: ["A. 静かでした", "B. 古かったです", "C. 賑やかで楽しかったです"], correct: 2 },
                { q: "ボーリングの後、何をしましたか。", options: ["A. 食事をしました", "B. 写真を撮りました", "C. 帰りました"], correct: 1 },
                { q: "スタッフはどうでしたか。", options: ["A. 親切ではなかった", "B. 親切でした", "C. 怖かった"], correct: 1 }
            ],
            essayQuestions: [
                { q: "私たちはどこで場所を確認しましたか。", a: "地図で確認しました。" },
                { q: "クレーンゲームはいくらでしたか。", a: "1時間100円でした。" },
                { q: "最後に何を見ましたか。", a: "ガチャポンを見ました。" },
                { q: "次の休みはどう思いましたか。", a: "楽しみだと思いました。" }
            ],
            vocabulary: [
                { word: "集まる (あつまる)", meaning: "Berkumpul", sentence: "「何時に集まりますか。」私は「午後2時に集まりましょう。」と答えました。", meaningSentence: "Jam berapa kita akan berkumpul? Saya menjawab, Mari kita berkumpul jam 2 siang." },
                { word: "確認する (かくにんする)", meaning: "Memastikan / Memeriksa", sentence: "みんなで場所を地図で確認しました。", meaningSentence: "Kami semua memastikan tempatnya menggunakan peta." },
                { word: "便利 (べんり)", meaning: "Praktis / Strategis", sentence: "新しいゲームセンターは駅から近くて、とても便利です。", meaningSentence: "Pusat permainan yang baru itu dekat dari stasiun dan sangat strategis." },
                { word: "楽しみ (たのしみ)", meaning: "Nantikan / Menantikan", sentence: "はい、とてもきれいで楽しみです。", meaningSentence: "Ya, tempatnya sangat bersih dan saya tidak sabar menantikannya." },
                { word: "賑やか (にぎやか)", meaning: "Ramai / Meriah", sentence: "当日、ゲームセンターはとても賑やかでした。", meaningSentence: "Pada hari H, pusat permainan tersebut sangat ramai." },
                { word: "雰囲気 (ふんいき)", meaning: "Suasana / Atmosfer", sentence: "音楽も大きくて、明るい雰囲気でした。", meaningSentence: "Musik dan suaranya keras, serta suasananya pun ceria." },
                { word: "人気 (にんき)", meaning: "Populer / Terkenal", sentence: "人気のキャラクターのぬいぐるみがありました。", meaningSentence: "Di sana ada boneka karakter yang populer." },
                { word: "難しい (むずかしい)", meaning: "Sulit", sentence: "クレーンゲームは少し難しかったです", meaningSentence: "Permainan capit bonekanya sedikit sulit." },
                { word: "安い (やすい)", meaning: "Murah", sentence: "とても安くて楽しかったです。", meaningSentence: "Sangat murah dan menyenangkan." },
                { word: "写真を撮る (しゃしんをとる)", meaning: "Mengambil foto / Berfoto", sentence: "ボーリングの後、みんなで写真を撮りました。", meaningSentence: "Setelah bowling, kami semua mengambil foto bersama." },
                { word: "思い出 (おもいで)", meaning: "Kenangan", sentence: "「すごいね、いい思い出だね。」", meaningSentence: "Hebat ya, ini kenangan yang indah." },
                { word: "親切 (しんせつ)", meaning: "Ramah / Baik hati", sentence: "ゲームセンターのスタッフはとても親切でした。", meaningSentence: "Staf pusat permainan tersebut sangat ramah." },
                { word: "教える (おしえる)", meaning: "Memberitahu / Mengajarkan", sentence: "わからないことがあったときも教えてくれました。", meaningSentence: "Saat ada hal yang tidak dimengerti, mereka memberitahu kami." },
                { word: "満足する (まんぞくする)", meaning: "Puas", sentence: "みんなはとても満足して帰りました。", meaningSentence: "Semua orang pulang dengan perasaan sangat puas." }
            ]
        },
        {
            date: "5 Juli 2026",
            title: "留学の準備<br>(Persiapan Belajar di Luar Negeri)",
            readingText: `<ruby>私<rt>わたし</rt></ruby>は<ruby>大学<rt>だいがく</rt></ruby>の<ruby>冬学期<rt>ふゆがっき</rt></ruby>に<ruby>留学<rt>りゅうがく</rt></ruby>したいと<ruby>思<rt>おも</rt></ruby>っています。
<ruby>今日<rt>きょう</rt></ruby>、<ruby>学校<rt>がっこう</rt></ruby>の<ruby>掲示板<rt>けいじばん</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました。そこには<ruby>新<rt>あたら</rt></ruby>しい留学プログラムのお<ruby>知<rt>し</rt></ruby>らせがありました。
「このプログラムは<ruby>人気<rt>にんき</rt></ruby>があります。」
「1<ruby>年間<rt>ねんかん</rt></ruby>のプログラムと6<ruby>週間<rt>しゅうかん</rt></ruby>のプログラムがあります。」
私は<ruby>内容<rt>ないよう</rt></ruby>をよく<ruby>読<rt>よ</rt></ruby>みました。
「このプログラムに<ruby>申し込<rt>もうしこ</rt></ruby>みたいです。」

でも、留学にはビザやお金が<ruby>必要<rt>ひつよう</rt></ruby>です。そのため、<ruby>今<rt>いま</rt></ruby>は<ruby>資料<rt>しりょう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めています。
<ruby>先生<rt>せんせい</rt></ruby>が<ruby>言<rt>い</rt></ruby>いました。
「内容をよく読んでください。わからないことがあったら<ruby>聞<rt>き</rt></ruby>いてください。」

私は<ruby>去年<rt>きょねん</rt></ruby>から<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しています。1<ruby>年前<rt>ねんまえ</rt></ruby>から<ruby>毎日<rt>まいにち</rt></ruby>勉強していて、アルバイトも1年間<ruby>続<rt>つづ</rt></ruby>けています。

<ruby>留学生センター<rt>りゅうがくせいセンター</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くと、スタッフはとても<ruby>親切<rt>しんせつ</rt></ruby>でした。
「<ruby>海外<rt>かいがい</rt></ruby>での<ruby>生活<rt>せいかつ</rt></ruby>はどうでしたか。」
私はフランスへ留学した<ruby>先輩<rt>せんぱい</rt></ruby>に聞きました。

先輩は<ruby>笑<rt>わら</rt></ruby>って<ruby>答<rt>こた</rt></ruby>えました。
「<ruby>大変<rt>たいへん</rt></ruby>だったけど、とても楽しかったよ。<ruby>ホームステイ<rt>ほーむすてい</rt></ruby>でいろいろな<ruby>国<rt>くに</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>交流<rt>こうりゅう</rt></ruby>したよ。大学では<ruby>国際関係<rt>こくさいかんけい</rt></ruby>を勉強していた。<ruby>インターンシップ<rt>いんたーんしっぷ</rt></ruby>は少し大変だったけど、とてもいい<ruby>経験<rt>けいけん</rt></ruby>になったよ。」

その話を聞いて、私はもっと留学したくなりました。
私は<ruby>将来<rt>しょうらい</rt></ruby>、海外で<ruby>働<rt>はたら</rt></ruby>きたいと思っています。そのため、日本語や<ruby>英語<rt>えいご</rt></ruby>の勉強を続けて、<ruby>スキル<rt>すきる</rt></ruby>を<ruby>身<rt>み</rt></ruby>につけたいです。

先生は<ruby>最後<rt>さいご</rt></ruby>に言いました。
「この経験はきっと将来<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>ちますよ。」
私は「はい、<ruby>頑張<rt>がんば</rt></ruby>ります。」と答えました。`,
            questions: [
                { q: "私は何を見ましたか。", options: ["A. 新聞", "B. 掲示板", "C. 地図"], correct: 1 },
                { q: "今、私は何を集めていますか。", options: ["A. 写真", "B. 資料", "C. お金"], correct: 1 },
                { q: "私はいつから日本語を勉強していますか。", options: ["A. 1週間前から", "B. 去年・1年前から", "C. 今日から"], correct: 1 },
                { q: "先輩はどこへ留学しましたか。", options: ["A. 日本", "B. フランス", "C. 韓国"], correct: 1 },
                { q: "私は将来どうしたいですか。", options: ["A. 海外で働きたいです。", "B. 日本で店を開きたいです。", "C. 毎日旅行したいです。"], correct: 0 }
            ],
            essayQuestions: [
                { q: "留学には何が必要ですか。", a: "ビザとお金が必要です。" },
                { q: "留学生センターのスタッフはどうでしたか。", a: "とても親切でした。" },
                { q: "先輩はホームステイで何をしましたか。", a: "いろいろな国の人と交流しました。" },
                { q: "この経験は何に役に立ちますか。", a: "将来に役に立ちます。" }
            ],
            vocabulary: [
                { word: "留学 (りゅうがく)", meaning: "Belajar di luar negeri / Kuliah di luar negeri", sentence: "私は大学の冬学期に留学したいと思っています。", meaningSentence: "Saya bermaksud untuk kuliah di luar negeri pada semester musim dingin universitas." },
                { word: "掲示板 (けいじばん)", meaning: "Papan pengumuman", sentence: "今日、学校の掲示板を見ました。", meaningSentence: "Hari ini, saya melihat papan pengumuman sekolah." },
                { word: "申し込む (もうしこむ)", meaning: "Mendaftar", sentence: "「このプログラムに申し込みたいです。」", meaningSentence: "Saya ingin mendaftar ke program ini." },
                { word: "必要 (ひつよう)", meaning: "Diperlukan / Butuh", sentence: "でも、留学にはビザやお金が必要です。", meaningSentence: "Namun, untuk kuliah di luar negeri memerlukan visa dan uang." },
                { word: "資料 (しりょう)", meaning: "Dokumen / Data / Materi", sentence: "そのため、今は資料を集めています。", meaningSentence: "Oleh karena itu, saat ini saya sedang mengumpulkan dokumen." },
                { word: "続ける (つづける)", meaning: "Melanjutkan / Meneruskan", sentence: "アルバイトも1年間続けています。", meaningSentence: "Saya juga sudah meneruskan kerja paruh waktu selama satu tahun." },
                { word: "生活 (せいかつ)", meaning: "Kehidupan / Hidup", sentence: "「海外での生活はどうでしたか。」", meaningSentence: "Bagaimana kehidupan di luar negeri?" },
                { word: "先輩 (せんぱい)", meaning: "Senior", sentence: "私はフランスへ留学した先輩に聞きました。", meaningSentence: "Saya bertanya kepada senior yang pernah kuliah di luar negeri ke Prancis." },
                { word: "交流する (こうりゅうする)", meaning: "Berinteraksi / Bertukar budaya", sentence: "ホームステイでいろいろな国の人と交流したよ。", meaningSentence: "Di homestay, saya berinteraksi dengan orang-orang dari berbagai negara." },
                { word: "国際関係 (こくさいかんけい)", meaning: "Hubungan internasional", sentence: "大学では国際関係を勉強していた。", meaningSentence: "Di universitas, saya belajar hubungan internasional." },
                { word: "経験 (けいけん)", meaning: "Pengalaman", sentence: "インターンシップは少し大変だったけど、とてもいい経験になったよ。", meaningSentence: "Magangnya sedikit berat, tetapi menjadi pengalaman yang sangat berharga." },
                { word: "将来 (しょうらい)", meaning: "Masa depan", sentence: "私は将来、海外で働きたいと思っています。", meaningSentence: "Saya bermaksud untuk bekerja di luar negeri di masa depan." },
                { word: "身につける (みにつける)", meaning: "Menguasai / Memperoleh (kemampuan)", sentence: "日本語や英語の勉強を続けて、スキルを身につけたいです。", meaningSentence: "Saya ingin melanjutkan belajar bahasa Jepang dan bahasa Inggris untuk menguasai keterampilan." },
                { word: "役に立つ (やくにたつ)", meaning: "Bermanfaat / Berguna", sentence: "「この経験はきっと将来役に立ちますよ。」", meaningSentence: "Pengalaman ini pasti akan berguna di masa depan." }
            ]
        },
        {
            date: "6 Juli 2026",
            title: "タコスパーティー<br>(Pesta Tacos)",
            readingText: `<ruby>今度<rt>こんど</rt></ruby>の<ruby>週末<rt>しゅうまつ</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>でタコスパーティーをすることになりました。
「みんなでタコスを<ruby>作<rt>つく</rt></ruby>りましょう。」
「いいですね。タコスのレシピを<ruby>持<rt>も</rt></ruby>ってきます。」
<ruby>私<rt>わたし</rt></ruby>はとても<ruby>楽<rt>たの</rt></ruby>しみにしていました。

でも、<ruby>前日<rt>ぜんじつ</rt></ruby>に友達から<ruby>電話<rt>でんわ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。
「スケジュールが<ruby>変<rt>か</rt></ruby>わったんです。」
「どうして変わったんですか。」
「<ruby>会議<rt>かいぎ</rt></ruby>があるんです。」
「そうなんですか。」
<ruby>場所<rt>ばしょ</rt></ruby>は変わりませんが、<ruby>時間<rt>じかん</rt></ruby>が変わりました。

<ruby>当日<rt>とうじつ</rt></ruby>、<ruby>冷<rt>つめ</rt></ruby>たい<ruby>風<rt>かぜ</rt></ruby>が<ruby>吹<rt>ふ</rt></ruby>いていました。<ruby>少し<rt>すこし</rt></ruby><ruby>寒<rt>さむ</rt></ruby>かったので、私は<ruby>温<rt>あたた</rt></ruby>かい<ruby>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>て<ruby>行<rt>い</rt></ruby>きました。

家に<ruby>着<rt>つ</rt></ruby>くと、友達の<ruby>妹<rt>いもうと</rt></ruby>さんと<ruby>弟<rt>おとうと</rt></ruby>さんも来ていました。
「弟さんも来ますか。」
「はい。弟がゲームを持ってきます。」

みんなでタコスを作りながら<ruby>話<rt>はな</rt></ruby>しました。
「<ruby>飲み物<rt>のみもの</rt></ruby>は冷たいものがいいですか。」
「はい、冷たいのがいいです。」
冷たいお<ruby>茶<rt>ちゃ</rt></ruby>やコーヒーも<ruby>用意<rt>ようい</rt></ruby>しました。

<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>後<rt>あと</rt></ruby>、みんなでダーツをしました。
「ダーツは<ruby>難<rt>むずか</rt></ruby>しいですね。」
「でも、今日はダーツで<ruby>遊<rt>あそ</rt></ruby>べてよかったです。」

そのあと、テレビでサッカーを<ruby>観戦<rt>かんせん</rt></ruby>しました。
友達がポーカーに<ruby>誘<rt>さそ</rt></ruby>いました。
「ポーカー、<ruby>一緒<rt>いっしょ</rt></ruby>にどうですか。」
私は<ruby>笑<rt>わら</rt></ruby>って<ruby>答<rt>こた</rt></ruby>えました。
「すみません。ポーカーはあまり<ruby>得意<rt>とくい</rt></ruby>じゃないんです。きっと<ruby>負<rt>ま</rt></ruby>けます。」
すると、みんなが笑いました。

<ruby>最後<rt>さいご</rt></ruby>に、友達が言いました。
「今日は<ruby>本当<rt>ほんとう</rt></ruby>に楽しかったですね。」
私は、
「はい。またみんなでタコスパーティーをしましょう。」
と答えました。`,
            questions: [
                { q: "何のパーティーをしましたか。", options: ["A. カレーパーティー", "B. タコスパーティー", "C. ケーキパーティー"], correct: 1 },
                { q: "何が変わりましたか。", options: ["A. 場所", "B. メニュー", "C. 時間"], correct: 2 },
                { q: "弟さんは何を持ってきましたか。", options: ["A. サッカー", "B. ゲーム", "C. ダーツ"], correct: 1 },
                { q: "食事の後、何をしましたか。", options: ["A. 映画を見ました。", "B. ダーツをしました。", "C. 勉強しました。"], correct: 1 },
                { q: "私はポーカーをしましたか。", options: ["A. はい、しました。", "B. いいえ、しませんでした。", "C. 少しだけしました。"], correct: 1 }
            ],
            essayQuestions: [
                { q: "どうしてスケジュールが変わりましたか。", a: "会議があるからです。" },
                { q: "どんな飲み物を用意しましたか。", a: "冷たいお茶やコーヒーを用意しました。" },
                { q: "私はどうしてポーカーをしませんでしたか。", a: "ポーカーがあまり得意ではないからです。" },
                { q: "最後に私は何と言いましたか。", a: "「またみんなでタコスパーティーをしましょう。」と言いました。" }
            ],
            vocabulary: [
                { word: "冷たい (つめたい)", meaning: "Dingin (untuk benda/minuman/angin)", sentence: "当日、冷たい風が吹いていました。", meaningSentence: "Pada hari H, angin dingin bertiup." },
                { word: "風 (かぜ)", meaning: "Angin", sentence: "当日、冷たい風が吹いていました。", meaningSentence: "Pada hari H, angin dingin bertiup." },
                { word: "タコス", meaning: "Tacos", sentence: "「みんなでタコスを作りましょう。」", meaningSentence: "Mari kita buat tacos bersama-sama." },
                { word: "レシピ", meaning: "Resep", sentence: "「いいですね。タコスのレシピを持ってきます。」", meaningSentence: "Bagus ya. Saya akan membawa resep tacos." },
                { word: "パーティー", meaning: "Pesta", sentence: "友達の家でタコスパーティーをすることになりました。", meaningSentence: "Jadilah diadakan pesta tacos di rumah teman." },
                { word: "弟 (おとうと)", meaning: "Adik laki-laki", sentence: "「はい。弟がゲームを持ってきます。」", meaningSentence: "Ya. Adik laki-laki saya akan membawa game." },
                { word: "妹 (いもうと)", meaning: "Adik perempuan", sentence: "家に着くと、友達の妹さんと弟さんも来ていました。", meaningSentence: "Saat tiba di rumah, adik perempuan dan adik laki-laki teman saya juga sudah datang." },
                { word: "ダーツ", meaning: "Darts (permainan lempar panah)", sentence: "食事の後、みんなでダーツをしました。", meaningSentence: "Setelah makan, kami semua bermain darts." },
                { word: "観戦する (かんせんする)", meaning: "Menonton pertandingan", sentence: "そのあと、テレビでサッカーを観戦しました。", meaningSentence: "Setelah itu, kami menonton pertandingan sepak bola di televisi." },
                { word: "飲み物 (のみもの)", meaning: "Minuman", sentence: "「飲み物は冷たいものがいいですか。」", meaningSentence: "Apakah minumannya lebih baik yang dingin?" },
                { word: "会議 (かいぎ)", meaning: "Rapat / Pertemuan", sentence: "「会議があるんです。」", meaningSentence: "Karena ada rapat." },
                { word: "スケジュール", meaning: "Jadwal", sentence: "「スケジュールが変わったんです。」", meaningSentence: "Jadwalnya berubah." },
                { word: "変わる (かわる)", meaning: "Berubah", sentence: "場所は変わりませんが、時間が変わりました。", meaningSentence: "Tempatnya tidak berubah, tetapi waktunya berubah." },
                { word: "得意 (とくい)", meaning: "Pandai / Mahir", sentence: "「すみません。ポーカーはあまり得意じゃないんです。」", meaningSentence: "Maaf. Saya tidak terlalu jago bermain poker." },
                { word: "負ける (まける)", meaning: "Kalah", sentence: "「きっと負けます。」", meaningSentence: "Saya pasti kalah." },
                { word: "誘う (さそう)", meaning: "Mengajak", sentence: "友達がポーカーに誘いました。", meaningSentence: "Teman saya mengajak bermain poker." },
                { word: "用意する (よういする)", meaning: "Menyiapkan", sentence: "冷たいお茶やコーヒーも用意しました。", meaningSentence: "Kami juga menyiapkan teh dingin dan kopi." },
                { word: "吹く (ふく)", meaning: "Bertiup", sentence: "当日、冷たい風が吹いていました。", meaningSentence: "Pada hari H, angin dingin bertiup." },
                { word: "温かい (あたたかい)", meaning: "Hangat", sentence: "少し寒かったので、私は温かい服を着て行きました。", meaningSentence: "Karena sedikit dingin, saya pergi memakai pakaian yang hangat." },
                { word: "服 (ふく)", meaning: "Pakaian / Baju", sentence: "少し寒かったので、私は温かい服を着て行きました。", meaningSentence: "Karena sedikit dingin, saya pergi memakai pakaian yang hangat." },
                { word: "一緒に (いっしょに)", meaning: "Bersama-sama", sentence: "「ポーカー、一緒にどうですか。」", meaningSentence: "Bagaimana kalau main poker bersama-sama?" },
                { word: "きっと", meaning: "Pasti", sentence: "「きっと負けます。」", meaningSentence: "Saya pasti kalah." },
                { word: "本当に (ほんとうに)", meaning: "Benar-benar", sentence: "「今日は本当に楽しかったですね。」", meaningSentence: "Hari ini benar-benar menyenangkan ya." }
            ]
        },
        {
            date: "7 Juli 2026",
            title: "パソコンの修理<br>(Perbaikan Laptop)",
            readingText: `<ruby>昨日<rt>きのう</rt></ruby>、<ruby>仕事<rt>しごと</rt></ruby>で<ruby>使<rt>つか</rt></ruby>っているパソコンに<ruby>問題<rt>もんだい</rt></ruby>がありました。
<ruby>朝<rt>あさ</rt></ruby>、パソコンの<ruby>電源<rt>でんげん</rt></ruby>を<ruby>入<rt>い</rt></ruby>れましたが、<ruby>動<rt>うご</rt></ruby>きませんでした。
「どうしたらいいですか。」
<ruby>私<rt>わたし</rt></ruby>は少し<ruby>困<rt>こま</rt></ruby>りました。

ファイルも<ruby>開<rt>ひら</rt></ruby>けませんでした。<ruby>大切<rt>たいせつ</rt></ruby>なデータや<ruby>写真<rt>しゃしん</rt></ruby>が<ruby>消<rt>き</rt></ruby>えたようでした。
「うっかり何かダウンロードしましたか。」
<ruby>同僚<rt>どうりょう</rt></ruby>に聞かれました。
「はい。昨日、<ruby>無料<rt>むりょう</rt></ruby>のアプリをダウンロードしてインストールしました。」
そのあと、<ruby>画面<rt>がめん</rt></ruby>が<ruby>暗<rt>くら</rt></ruby>くなって、メールも<ruby>送<rt>おく</rt></ruby>れなくなりました。

私は<ruby>駅前<rt>えきまえ</rt></ruby>の<ruby>修理屋<rt>しゅうりや</rt></ruby>へ行きました。
<ruby>店員<rt>てんいん</rt></ruby>さんが言いました。
「どうしましたか。」
私は<ruby>説明<rt>せつめい</rt></ruby>しました。
「このパソコンが動きません。ファイルも開けません。<ruby>接続<rt>せつぞく</rt></ruby>もうまくいかないんです。」

店員さんはパソコンを<ruby>確認<rt>かくにん</rt></ruby>しながら言いました。
「システムに問題がありますね。アップデートをして、接続テストもしてみます。」
私は<ruby>急<rt>いそ</rt></ruby>いでいたので言いました。
「明日仕事があるんです。<ruby>今日中<rt>きょうじゅう</rt></ruby>に<ruby>直<rt>なお</rt></ruby>りますか。」
店員さんは少し考えて、
「少し<ruby>時間<rt>じかん</rt></ruby>がかかりますが、できるだけ今日中に修理します。」
と言いました。

私は近くのカフェで待ちました。
しばらくすると、修理屋から電話がありました。
「お待たせしました。修理が終わりました。」
私はすぐに店へ行きました。

店員さんがパソコンを見せながら言いました。
「システムはもう大丈夫です。問題ありません。アップデートも終わりました。」
私はパソコンを確認しました。
「ファイルも開けます。メールも送れます。それで仕事ができます。」
私は<ruby>安心<rt>あんしん</rt></ruby>しました。
「ありがとうございました。」

店員さんは<ruby>笑顔<rt>えがお</rt></ruby>で答えました。
「また何かありましたら、いつでも来てください。」`,
            questions: [
                { q: "パソコンはどうなりましたか。", options: ["A. とても速くなりました。", "B. 動きませんでした。", "C. 新しくなりました。"], correct: 1 },
                { q: "私は最近何をしましたか。", options: ["A. 新しいゲームを買いました。", "B. 無料のアプリをダウンロードしてインストールしました。", "C. 新しいパソコンを買いました。"], correct: 1 },
                { q: "修理屋はどこにありますか。", options: ["A. 学校の中", "B. 駅前", "C. 家の近く"], correct: 1 },
                { q: "店員さんは何をしましたか。", options: ["A. 新しいパソコンを売りました。", "B. システムをアップデートして接続を確認しました。", "C. パソコンを捨てました。"], correct: 1 },
                { q: "修理の後、パソコンはどうなりましたか。", options: ["A. まだ動きませんでした。", "B. 問題がなくなりました。", "C. 電池が切れました。"], correct: 1 }
            ],
            essayQuestions: [
                { q: "どうして私は急いでいましたか。", a: "明日仕事があるからです。" },
                { q: "修理が終わるまで私はどこで待ちましたか。", a: "近くのカフェで待ちました。" },
                { q: "修理が終わったあと、何ができるようになりましたか。", a: "ファイルを開いたり、メールを送ったり、仕事ができるようになりました。" },
                { q: "店員さんは最後に何と言いましたか。", a: "「また何かありましたら、いつでも来てください。」と言いました。" }
            ],
            vocabulary: [
                { word: "問題 (もんだい)", meaning: "Masalah", sentence: "昨日、仕事で使っているパソコンに問題がありました。", meaningSentence: "Kemarin, ada masalah pada laptop yang saya gunakan untuk bekerja." },
                { word: "ファイル", meaning: "File", sentence: "ファイルも開けませんでした。", meaningSentence: "File pun tidak dapat dibuka." },
                { word: "開ける (ひらける)", meaning: "Dapat dibuka", sentence: "ファイルも開けませんでした。", meaningSentence: "File pun tidak dapat dibuka." },
                { word: "修理屋 (しゅうりや)", meaning: "Tempat servis / Toko reparasi", sentence: "私は駅前の修理屋へ行きました。", meaningSentence: "Saya pergi ke toko reparasi di depan stasiun." },
                { word: "動く (うごく)", meaning: "Berfungsi / Bergerak", sentence: "朝、パソコンの電源を入れましたが、動きませんでした。", meaningSentence: "Di pagi hari, saya menyalakan laptop, tetapi tidak berfungsi." },
                { word: "データ", meaning: "Data", sentence: "大切なデータや写真が消えたようでした。", meaningSentence: "Tampaknya data penting dan foto-foto telah hilang." },
                { word: "消える (きえる)", meaning: "Hilang", sentence: "大切なデータや写真が消えたようでした。", meaningSentence: "Tampaknya data penting dan foto-foto telah hilang." },
                { word: "接続 (せつぞく)", meaning: "Koneksi", sentence: "「接続もうまくいかないんです。」", meaningSentence: "Koneksinya juga tidak berjalan dengan baik." },
                { word: "うっかり", meaning: "Tanpa sengaja / Lalai", sentence: "「うっかり何かダウンロードしましたか。」", meaningSentence: "Apakah kamu tanpa sengaja mengunduh sesuatu?" },
                { word: "画面 (がめん)", meaning: "Layar", sentence: "そのあと、画面が暗くなって、メールも送れなくなりました。", meaningSentence: "Setelah itu, layarnya menjadi gelap dan tidak bisa mengirim email juga." },
                { word: "ダウンロードする", meaning: "Mengunduh (Download)", sentence: "「昨日、無料のアプリをダウンロードしてインストールしました。」", meaningSentence: "Kemarin, saya mengunduh dan menginstal aplikasi gratis." },
                { word: "インストールする", meaning: "Menginstal (Install)", sentence: "「昨日、無料のアプリをダウンロードしてインストールしました。」", meaningSentence: "Kemarin, saya mengunduh dan menginstal aplikasi gratis." },
                { word: "修理 (しゅうり)", meaning: "Perbaikan / Reparasi", sentence: "「少し時間がかかりますが、できるだけ今日中に修理します。」", meaningSentence: "Meskipun memerlukan sedikit waktu, saya akan memperbaikinya hari ini sedapat mungkin." },
                { word: "直る (なおる)", meaning: "Selesai diperbaiki / Menjadi baik", sentence: "「今日中に直りますか。」", meaningSentence: "Apakah akan selesai diperbaiki hari ini juga?" },
                { word: "システム", meaning: "Sistem", sentence: "「システムに問題がありますね。」", meaningSentence: "Ada masalah pada sistemnya ya." },
                { word: "お待たせしました", meaning: "Maaf sudah menunggu", sentence: "「お待たせしました。修理が終わりました。」", meaningSentence: "Maaf sudah menunggu. Perbaikannya sudah selesai." },
                { word: "時間がかかる", meaning: "Memerlukan waktu", sentence: "「少し時間がかかりますが、できるだけ今日中に修理します。」", meaningSentence: "Meskipun memerlukan sedikit waktu, saya akan memperbaikinya hari ini sedapat mungkin." },
                { word: "アップデートする", meaning: "Memperbarui (Update)", sentence: "「アップデートをして、接続テストもしてみます。」", meaningSentence: "Saya akan memperbarui dan mencoba tes koneksi juga." },
                { word: "確認する (かくにんする)", meaning: "Memeriksa / Memastikan", sentence: "店員さんはパソコンを確認しながら言いました。", meaningSentence: "Pegawai toko berkata sambil memeriksa laptop." },
                { word: "今日中 (きょうじゅう)", meaning: "Hari ini juga (sebelum berganti hari)", sentence: "「今日中に直りますか。」", meaningSentence: "Apakah akan selesai diperbaiki hari ini juga?" },
                { word: "メールを送る", meaning: "Mengirim email", sentence: "「ファイルも開けます。メールも送れます。」", meaningSentence: "File bisa dibuka. Email juga bisa dikirim." },
                { word: "店員 (てんいん)", meaning: "Pegawai toko", sentence: "店員さんが言いました。「どうしましたか。」", meaningSentence: "Pegawai toko berkata, Ada yang bisa dibantu?" },
                { word: "同僚 (どうりょう)", meaning: "Rekan kerja", sentence: "同僚に聞かれました。", meaningSentence: "Saya ditanya oleh rekan kerja." },
                { word: "安心する (あんしんする)", meaning: "Merasa lega", sentence: "私は安心しました。", meaningSentence: "Saya pun merasa lega." },
                { word: "笑顔 (えがお)", meaning: "Senyuman", sentence: "店員さんは笑顔で答えました。", meaningSentence: "Pegawai toko menjawab dengan senyuman." }
            ]
        },
        {
            date: "8 Juli 2026",
            title: "病院での診察<br>(Pemeriksaan Medis di Rumah Sakit)",
            readingText: `<ruby>昨日<rt>きのう</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>階段<rt>かいだん</rt></ruby>で<ruby>転<rt>ころ</rt></ruby>んでしまいました。<ruby>左足<rt>ひだりあし</rt></ruby>がとても<ruby>痛<rt>いた</rt></ruby>かったので、<ruby>今日<rt>きょう</rt></ruby><ruby>病院<rt>びょういん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。

<ruby>受付<rt>うけつけ</rt></ruby>でスタッフが<ruby>聞<rt>き</rt></ruby>きました。
「お<ruby>名前<rt>なまえ</rt></ruby>と<ruby>名字<rt>みょうじ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。」
私は名前を書いて、<ruby>保険<rt>ほけん</rt></ruby>のカードを出しました。
「保険を使いたいです。」
「はい、分かりました。<ruby>診察<rt>しんさつ</rt></ruby>の<ruby>予約<rt>よやく</rt></ruby>を作りますね。」

少し待つと、<ruby>先生<rt>せんせい</rt></ruby>が来ました。
「<ruby>患者<rt>かんじゃ</rt></ruby>さん、こちらへどうぞ。」
私は<ruby>診察室<rt>しんさつしつ</rt></ruby>に入りました。

先生は優しく聞きました。
「どこが痛いですか。」
「左足が痛いんです。」
「そうですか。新しい<ruby>症状<rt>しょうじょう</rt></ruby>はありますか。」
「いいえ。でも、あまり歩けません。」

先生は私の話を聞いてから言いました。
「では、レントゲンを取りましょうか。」
「はい、お願いします。」

レントゲンを取った<ruby>後<rt>あと</rt></ruby>、先生は言いました。
「もうすぐ<ruby>結果<rt>けっか</rt></ruby>が出ますから、ちょっと待ってください。」
私は<ruby>待合室<rt>まちあいしつ</rt></ruby>で待ちました。

しばらくして、先生に呼ばれました。
「レントゲンの結果が出ました。足の<ruby>骨<rt>ほね</rt></ruby>が少し<ruby>折<rt>お</rt></ruby>れています。」
「えっ、本当ですか。」
「はい。でも、<ruby>手術<rt>しゅづつ</rt></ruby>は<ruby>必要<rt>ひつよう</rt></ruby>ありません。<ruby>リハビリ<rt>りはびり</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けてください。」

先生は続けて言いました。
「ゆっくり手を動かしてみてきださい。」
「はい、動かせます。」
「足はどうですか。立てますか。」
私はゆっくり立ちました。
「痛いですが、少し立てます。」

先生は安心したように言いました。
「それなら大丈夫です。今日はゆっくり休んでください。そして、<ruby>薬<rt>くすり</rt></ruby>を飲んでください。」

私は質問しました。
「いつ家に帰れますか。」
「明日は家に帰れますよ。」
私は安心しました。

帰る前に先生は言いました。
「来週からリハビリを始めましょうか。」
「はい、お願いします。」

病院を出る前に家族へ電話しました。
「骨が少し折れたんですが、大丈夫です。明日は家に帰れます。」
家族は、
「よかったですね。<ruby>無理<rt>むり</rt></ruby>をしないでください。」
と言いました。
私は、
「はい。しばらくゆっくり休みます。」
と答えました。`,
            questions: [
                { q: "なぜ病院へ行きましたか。", options: ["A. 風邪をひいたから", "B. 左足が痛かったから", "C. 頭が痛かったから"], correct: 1 },
                { q: "先生は最初に何をしましたか。", options: ["A. 薬を出した", "B. レントゲンを見た", "C. 症状を聞いた"], correct: 2 },
                { q: "レントゲンの結果はどうでしたか。", options: ["A. 問題ありませんでした", "B. 骨が少し折れていました", "C. 手が折れていました"], correct: 1 },
                { q: "手術は必要でしたか。", options: ["A. はい", "B. いいえ", "C. まだ分かりません"], correct: 1 },
                { q: "来週から何を始めますか。", options: ["A. 水泳", "B. 仕事", "C. リハビリ"], correct: 2 }
            ],
            essayQuestions: [
                { q: "私はどこで転んでしまいましたか。", a: "階段で転んでしまいました。" },
                { q: "新しい症状はありましたか。", a: "いいえ、新しい症状はありませんでした。" },
                { q: "いつ家に帰れますか。", a: "明日は家に帰れます。" },
                { q: "病院を出る前に誰に電話しましたか。", a: "家族に電話しました。" }
            ],
            vocabulary: [
                { word: "先生 (せんせい)", meaning: "Dokter / Guru", sentence: "少し待つと、先生が来ました。", meaningSentence: "Setelah menunggu sebentar, dokter pun datang." },
                { word: "患者 (かんじゃ)", meaning: "Pasien", sentence: "「患者さん、こちらへどうぞ。」", meaningSentence: "\"Pasien, silakan lewat sini.\"" },
                { word: "症状 (しょうじょう)", meaning: "Gejala", sentence: "「新しい症状はありますか。」", meaningSentence: "\"Apakah ada gejala yang baru?\"" },
                { word: "診察 (しんさつ)", meaning: "Pemeriksaan medis", sentence: "「診察の予約を作りますね。」", meaningSentence: "\"Saya buatkan janji temu untuk pemeriksaan medis ya.\"" },
                { word: "予約 (よやく)", meaning: "Reservasi / Janji temu", sentence: "「診察の予約を作りますね。」", meaningSentence: "\"Saya buatkan janji temu untuk pemeriksaan medis ya.\"" },
                { word: "保険 (ほけん)", meaning: "Asuransi", sentence: "「保険を使いたいです。」", meaningSentence: "\"Saya ingin menggunakan asuransi.\"" },
                { word: "名字 (みょうじ)", meaning: "Nama keluarga / Nama belakang", sentence: "「お名前と名字を教えてください。」", meaningSentence: "\"Tolong beri tahu nama depan dan nama belakang Anda.\"" },
                { word: "レントゲン", meaning: "Foto rontgen / X-ray", sentence: "「では、レントゲンを取りましょうか。」", meaningSentence: "\"Kalau begitu, bagaimana jika kita foto rontgen?\"" },
                { word: "結果 (けっか)", meaning: "Hasil", sentence: "「もうすぐ結果が出ますから、ちょっと待ってください。」", meaningSentence: "\"Karena hasilnya akan segera keluar, tolong tunggu sebentar.\"" },
                { word: "骨 (ほね)", meaning: "Tulang", sentence: "「足の骨が少し折れています。」", meaningSentence: "\"Tulang kakinya sedikit patah.\"" },
                { word: "折れる (おれる)", meaning: "Patah", sentence: "「足の骨が少し折れています。」", meaningSentence: "\"Tulang kakinya sedikit patah.\"" },
                { word: "左足 (ひだりあし)", meaning: "Kaki kiri", sentence: "「左足が痛いんです。」", meaningSentence: "\"Kaki kiri saya sakit.\"" },
                { word: "動かす (うごかす)", meaning: "Menggerakkan", sentence: "「ゆっくり手を動かしてみてください。」", meaningSentence: "\"Cobalah gerakkan tangan Anda perlahan.\"" },
                { word: "立つ (たつ)", meaning: "Berdiri", sentence: "「足はどうですか。立てますか。」", meaningSentence: "\"Bagaimana dengan kakinya? Apakah bisa berdiri?\"" },
                { word: "薬 (くすり)", meaning: "Obat", sentence: "「そして、薬を飲んでください。」", meaningSentence: "\"Dan juga, tolong minum obatnya.\"" },
                { word: "リハビリ", meaning: "Rehabilitasi", sentence: "「リハビリを続けてください。」", meaningSentence: "\"Silakan lanjutkan rehabilitasinya.\"" },
                { word: "続ける (つづける)", meaning: "Melanjutkan", sentence: "「リハビリを続けてください。」", meaningSentence: "\"Silakan lanjutkan rehabilitasinya.\"" },
                { word: "痛い (いたい)", meaning: "Sakit / Nyeri", sentence: "「痛いですが、少し立てます。」", meaningSentence: "\"Meskipun sakit, saya bisa berdiri sedikit.\"" },
                { word: "休む (やすむ)", meaning: "Beristirahat", sentence: "「はい。しばらくゆっくり休みます。」", meaningSentence: "\"Ya. Saya akan beristirahat dengan tenang untuk sementara waktu.\"" },
                { word: "家族 (かぞく)", meaning: "Keluarga", sentence: "病院を出る前に家族へ電話しました。", meaningSentence: "Sebelum keluar dari rumah sakit, saya menelepon keluarga." },
                { word: "無理 (むり)", meaning: "Memaksakan diri / Mustahil", sentence: "「よかったですね。無理をしないでください。」", meaningSentence: "\"Syukurlah ya. Jangan memaksakan diri.\"" },
                { word: "安心する (あんしんする)", meaning: "Merasa lega", sentence: "私は安心しました。", meaningSentence: "Saya pun merasa lega." },
                { word: "待合室 (まちあいしつ)", meaning: "Ruang tunggu", sentence: "私は待合室で待ちました。", meaningSentence: "Saya menunggu di ruang tunggu." },
                { word: "受付 (うけつけ)", meaning: "Loket pendaftaran / Resepsionis", sentence: "受付でスタッフが聞きました。", meaningSentence: "Staf di loket pendaftaran bertanya." },
                { word: "手術 (しゅじゅつ)", meaning: "Operasi", sentence: "「でも、手術は必要ありません。」", meaningSentence: "\"Tetapi, tidak diperlukan operasi.\"" }
            ]
},
{
            date: "9 Juli 2026",
            title: "卒業パーティーと新しい仕事<br>(Pesta Kelulusan dan Pekerjaan Baru)",
            readingText: `<ruby>私<rt>わたし</rt></ruby>は<ruby>再来週<rt>さらいしゅう</rt></ruby>の<ruby>週末<rt>しゅうまつ</rt></ruby>、<ruby>中学校<rt>ちゅうがっこう</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>と<ruby>卒業<rt>そつぎょう</rt></ruby>のお<ruby>祝い<rt>いわい</rt></ruby>パーティーをする<ruby>予定<rt>よてい</rt></ruby>です。
その友達は<ruby>最近<rt>さいきん</rt></ruby><ruby>大学<rt>だいがく</rt></ruby>を卒業しました。

<ruby>山田<rt>やまだ</rt></ruby>さんが<ruby>言<rt>い</rt></ruby>いました。
「<ruby>田中<rt>たなか</rt></ruby>さんは最近どうしていますか。」
私は<ruby>答<rt>こた</rt></ruby>えました。
「大学を卒業して、<ruby>新<rt>あたら</rt></ruby>しい<ruby>仕事<rt>しごと</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めるそうです。」
「そうなんですね。仕事は<ruby>楽しそう<rt>たのしそう</rt></ruby>ですか。」
「はい。でも、そのプロジェクトは<ruby>大変<rt>たいへん</rt></ruby>だそうです。」

みんなはパーティーの<ruby>準備<rt>じゅんび</rt></ruby>を始めました。
「お<ruby>好み焼き<rt>このみやき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>りましょう。」
「いいですね。」
「<ruby>飲み物<rt>のみもの</rt></ruby>は私が<ruby>おご<rt>奢</rt></ruby>りますね。」
「ありがとうございます。」

その<ruby>時<rt>とき</rt></ruby>、田中さんからまだ<ruby>返事<rt>へんじ</rt></ruby>が来ていませんでした。
「パーティーの返事、もう<ruby>送<rt>おく</rt></ruby>りましたか。」
「いいえ、まだです。<ruby>今日中<rt>きょうじゅう</rt></ruby>に送りますね。」

私たちは返事を<ruby>待<rt>ま</rt></ruby>ちながら、<ruby>会場<rt>かいじょう</rt></ruby>について<ruby>話<rt>はな</rt></ruby>しました。
「新しいカフェだそうですよ。」
「<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>近く<rt>ちかく</rt></ruby>にあるそうです。」
「会場は<ruby>静か<rt>しずか</rt></ruby>だそうですから、ゆっくり話せますね。」

しばらくすると、田中さんからメッセージが来ました。
「<ruby>参加<rt>さんか</rt></ruby>します。スミスさんも<ruby>来<rt>く</rt></ruby>るそうです。」
みんなはとても<ruby>喜び<rt>よろこび</rt></ruby>ました。

パーティーの<ruby>日<rt>ひ</rt></ruby,> 大学の友達や中学校の友達、<ruby>年上<rt>としうえ</rt></ruby>のお<ruby>兄<rt>にい</rt></ruby>さんも来ました。
お兄さんは<ruby>今年<rt>ことし</rt></ruby>から新しい会社で<ruby>働<rt>はたら</rt></ruby>いています。
「仕事はどうですか。」
「<ruby>忙しい<rt>いそがしい</rt></ruby><ruby>毎日<rt>まいにち</rt></ruby>ですが、とても楽しいですよ。<ruby>同僚<rt>どうりょう</rt></ruby>は<ruby>親切<rt>しんせつ</rt></ruby>だそうだと思っていましたが、本当に親切でした。」

みんなでお好み焼きを作って<ruby>食べ<rt>たべ</rt></ruby>たり、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ったりしました。
田中さんは<ruby>花<rt>はな</rt></ruby>を持って来ました。
「この花はどうしたんですか。」
「友達に<ruby>もらった<rt>貰った</rt></ruby>んです。」

食事の後、<ruby>店員<rt>てんいん</rt></ruby>さんが来ました。
「お<ruby>会計<rt>かいけい</rt></ruby>はどうしますか。」
私はみんなに<ruby>聞き<rt>きき</rt></ruby>ました。
「パーティーのお金はどうしましょうか。」
「みんなで<ruby>割り勘<rt>わりかん</rt></ruby>しましょう。」
みんなで少しずつ<ruby>払い<rt>はらい</rt></ruby>ました。

<ruby>帰る<rt>かえる</rt></ruby>前に私は言いました。
「今日は本当に楽しかったですね。みんな、新しい仕事も<ruby>頑張<rt>がんば</rt></ruby>てください。」
みんなは<ruby>笑顔<rt>えがお</rt></ruby>で、
「ありがとうございます。また<ruby>会い<rt>あい</rt></ruby>ましょう。」
と答えました。`,
            questions: [
                { q: "パーティーはいつありますか。", options: ["A. 今週", "B. 来週", "C. 再来週の週末"], correct: 2 },
                { q: "田中さんは最近どうしましたか。", options: ["A. 高校を卒業しました。", "B. 大学を卒業して新しい仕事を始めます。", "C. 会社を辞めました。"], correct: 1 },
                { q: "パーティーで何を作りましたか。", options: ["A. カレー", "B. お好み焼き", "C. ラーメン"], correct: 1 },
                { q: "パーティーのお金はどうしましたか。", options: ["A. 私が全部払いました。", "B. 田中さんがおごりました。", "C. みんなで割り勘しました。"], correct: 2 },
                { q: "お兄さんの仕事はどうでしたか。", options: ["A. 暇でした。", "B. 楽しくて同僚も親切でした。", "C. 仕事を辞めました。"], correct: 1 }
            ],
            essayQuestions: [
                { q: "田中さんは新しい仕事を始めるそうですが、そのプロジェクトはどうだそうですか。", a: "大変だそうです。" },
                { q: "私たちは何を待ちながら、会場について話しましたか。", a: "返事を待ちながら、会場について話しました。" },
                { q: "田中さんは誰が来ると言いましたか。", a: "スミスさんも来るそうです。" },
                { q: "田中さんは花を誰にもらいましたか。", a: "友達にもらいました。" }
            ],
            vocabulary: [
                { word: "忙しい (いそがしい)", meaning: "Sibuk", sentence: "「忙しい毎日ですが、とても楽しいですよ。」", meaningSentence: "\"Meskipun setiap hari sibuk, rasanya sangat menyenangkan.\"" },
                { word: "再来週 (さらいしゅう)", meaning: "Dua minggu lagi", sentence: "私は再来週の週末、中学校の友達と卒業のお祝いパーティーをする予定です。", meaningSentence: "Saya berencana mengadakan pesta perayaan kelulusan dengan teman SMP pada akhir pekan dua minggu lagi." },
                { word: "週末 (しゅまつ)", meaning: "Akhir pekan", sentence: "私は再来週の週末、中学校の友達と卒業のお祝いパーティーをする予定です。", meaningSentence: "Saya berencana mengadakan pesta perayaan kelulusan dengan teman SMP pada akhir pekan dua minggu lagi." },
                { word: "卒業する (そつぎょうする)", meaning: "Lulus", sentence: "その友達は最近大学を卒業しました。", meaningSentence: "Teman tersebut baru-of-saja lulus dari universitas." },
                { word: "中学校 (ちゅうがっこう)", meaning: "SMP", sentence: "私は再来週の週末、中学校の友達と卒業のお祝いパーティーをする予定です。", meaningSentence: "Saya berencana mengadakan pesta perayaan kelulusan dengan teman SMP pada akhir pekan dua minggu lagi." },
                { word: "大学 (だいがく)", meaning: "Universitas / Perguruan tinggi", sentence: "その友達は最近大学を卒業しました。", meaningSentence: "Teman tersebut baru-of-saja lulus dari universitas." },
                { word: "仕事 (しごと)", meaning: "Pekerjaan", sentence: "「大学を卒業して、新しい仕事を始めるそうです。」", meaningSentence: "\"Katanya dia lulus universitas dan akan memulai pekerjaan baru.\"" },
                { word: "働く (はたらく)", meaning: "Bekerja", sentence: "お兄さんは今年から新しい会社で働いています。", meaningSentence: "Kakak laki-laki bekerja di perusahaan baru mulai tahun ini." },
                { word: "始める (はじめる)", meaning: "Memulai", sentence: "「大学を卒業して、新しい仕事を始めるそうです。」", meaningSentence: "\"Katanya dia lulus universitas dan akan memulai pekerjaan baru.\"" },
                { word: "会社 (かいしゃ)", meaning: "Perusahaan", sentence: "「会社の近くにあるそうです。」", meaningSentence: "\"Katanya ada di dekat perusahaan.\"" },
                { word: "同僚 (どうりょう)", meaning: "Rekan kerja", sentence: "「同僚は親切だそうだと思っていましたが、本当に親切でした。」", meaningSentence: "\"Saya pikir rekan kerjanya ramah, dan ternyata mereka benar-benar ramah.\"" },
                { word: "返事 (へんじ)", meaning: "Balasan / Jawaban", sentence: "その時、田中さんからまだ返事が来ていませんでした。", meaningSentence: "Pada saat itu, belum ada balasan dari Tanaka-san." },
                { word: "待つ (まつ)", meaning: "Menunggu", sentence: "私たちは返事を待ちながら、会場について話しました。", meaningSentence: "Kami berbicara tentang lokasi acara sambil menunggu balasan." },
                { word: "花 (はな)", meaning: "Bunga", sentence: "田中さんは花を持って来ました。", meaningSentence: "Tanaka-san membawa bunga." },
                { word: "送る (おくる)", meaning: "Mengirim", sentence: "「いいえ、まだです。今日中に送りますね。」", meaningSentence: "\"Belum. Saya akan mengirimkannya hari ini juga ya.\"" },
                { word: "もらう", meaning: "Menerima", sentence: "「友達にもらったんです。」", meaningSentence: "\"Saya menerimanya dari seorang teman.\"" },
                { word: "おごる", meaning: "Mentraktir", sentence: "「飲み物は私がおごりますね。」", meaningSentence: "\"Kalau minumannya, saya yang traktir ya.\"" },
                { word: "割り勘 (わりかん)", meaning: "Bayar patungan (dibagi rata)", sentence: "「みんなで割り勘しましょう。」", meaningSentence: "\"Mari kita bayar patungan bersama-sama.\"" },
                { word: "お会計 (おかいけい)", meaning: "Pembayaran / Tagihan", sentence: "「お会計はどうしますか。」", meaningSentence: "\"Bagaimana dengan pembayarannya?\"" },
                { word: "会場 (かいじょう)", meaning: "Lokasi acara / Tempat pertemuan", sentence: "私たちは返事を待ちながら、会場について話しました。", meaningSentence: "Kami berbicara tentang lokasi acara sambil menunggu balasan." },
                { word: "お好み焼き (おこのみやき)", meaning: "Okonomiyaki (martabak jepang)", sentence: "「お好み焼きを作りましょう。」", meaningSentence: "\"Mari kita membuat okonomiyaki.\"" },
                { word: "プロジェクト", meaning: "Proyek", sentence: "「はい。でも、そのプロジェクトは大変だそうです。」", meaningSentence: "\"Ya. Tetapi, katanya proyek itu berat.\"" },
                { word: "年上 (としうえ)", meaning: "Lebih tua", sentence: "パーティーの日、大学の友達や中学校の友達、年上のお兄さんも来ました。", meaningSentence: "Pada hari pesta, teman universitas, teman SMP, dan juga kakak laki-laki yang lebih tua datang." },
                { word: "楽しそう (たのしそう)", meaning: "Terlihat menyenangkan", sentence: "「仕事は楽しそうですか。」", meaningSentence: "\"Apakah pekerjaannya terlihat menyenangkan?\"" },
                { word: "笑顔 (えがお)", meaning: "Senyuman", sentence: "みんなは笑顔で、「ありがとうございます。また会いましょう。」と答えました。", meaningSentence: "Semua orang menjawab dengan senyuman, \"Terima kasih banyak. Sampai jumpa lagi.\"" }
            ]
},
{
            date: "10 Juli 2026",
            title: "カラオケで楽しい休日<br>(Hari Libur yang Menyenangkan di Karaoke)",
            readingText: `<ruby>今日<rt>きょう</rt></ruby>は<ruby>平日<rt>へいじつ</rt></ruby>ですが、<ruby>私<rt>わたし</rt></ruby>は<ruby>休み<rt>やすみ</rt></ruby>です。<ruby>友達<rt>ともだち</rt></ruby>と<ruby>新<rt>あたら</rt></ruby>しいカラオケ<ruby>店<rt>てん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>く<ruby>約束<rt>やくそく</rt></ruby>をしました。

友達が<ruby>言<rt>い</rt></ruby>いました。
「新しいカラオケ店は<ruby>広<rt>ひろ</rt></ruby>いので<ruby>人気<rt>にんき</rt></ruby>だそうですよ。」
私は、
「この店は<ruby>駅<rt>えき</rt></ruby>から<ruby>遠<rt>とお</rt></ruby>くなくて<ruby>便利<rt>べんり</rt></ruby>ですね。」
と<ruby>答<rt>こた</rt></ruby>えました。

店に<ruby>着<rt>つ</rt></ruby>くと、スタッフが<ruby>聞<rt>き</rt></ruby>きました。
「<ruby>禁煙<rt>きんえん</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>がいいですか。」
「はい、禁煙の部屋をお願いします。」
「コースはいくつありますか。」
「2つあります。一番<ruby>安<rt>やす</rt></ruby>いコースはこちらです。」
「では、一番安いコースにします。」

部屋は少し<ruby>狭<rt>せま</rt></ruby>いですが、<ruby>暑<rt>あつ</rt></ruby>くなくて<ruby>快適<rt>かいてき</rt></ruby>でした。

<ruby>歌<rt>うた</rt></ruby>を<ruby>選<rt>えら</rt></ruby>びながら、友達と話しました。
「どんな<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。」
「ロック音楽が一番好きです。でも、たまにジャズも聞きます。」
私はギターを少し<ruby>弾<rt>ひ</rt></ruby>けますが、<ruby>妹<rt>いもうと</rt></ruby>はピアノが<ruby>得意<rt>とくい</rt></ruby>です。
「ギターじゃなくて、ピアノがかっこいいですね。」
「そうですね。妹は音楽の<ruby>先生<rt>せんせい</rt></ruby>になりたいそうです。」

<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>最新<rt>さいしん</rt></ruby>の歌を歌いました。
そのあと、友達が<ruby>昔<rt>むかし</rt></ruby>の歌を入れました。
「この歌、<ruby>覚<rt>おぼ</rt></ruby>えていますか。」
「はい。<ruby>懐<rt>なつ</rt></ruby>かしいですね。」
私は<ruby>低<rt>ひく</rt></ruby>い<ruby>声<rt>こえ</rt></ruby>で歌いましたが、少し難しかったです。
「低い声は難しいですが、もっと<ruby>練習<rt>れんしゅう</rt></ruby>します。」

たくさん歌ったので、<ruby>喉<rt>のど</rt></ruby>が<ruby>渇<rt>かわ</rt></ruby>きました。
「すみません。ジュースをおかわりします。」
「私もお願いします。」

<ruby>休憩<rt>きゅうけい</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>に、友達が聞きました。
「どのアーティストのファンですか。」
「私はロックバンドのファンです。でも、友達はマイナーな歌をよく選びます。」

最後に、今<ruby>話題<rt>わだい</rt></ruby>の大ヒットの歌をみんなで歌いました。
<ruby>終了時間<rt>しゅうりょうじかん</rt></ruby>が<ruby>近づい<rt>ちかづい</rt></ruby>たので、店を出ました。

私は言いました。
「今日は本当に楽しかったですね。また来ましょう。」
友達も笑って、
「次の休みも一緒に来ましょう。」
と言いました。`,
            questions: [
                { q: "私たちはどこへ行きましたか。", options: ["A. 映画館", "B. カラオケ店", "C. 公園"], correct: 1 },
                { q: "どのコースを選びましたか。", options: ["A. 一番高いコース", "B. 二人コース", "C. 一番安いコース"], correct: 2 },
                { q: "妹は何が得意ですか。", options: ["A. ギター", "B. ピアノ", "C. ドラム"], correct: 1 },
                { q: "私は何をおかわりしましたか。", options: ["A. コーヒー", "B. お茶", "C. ジュース"], correct: 2 },
                { q: "最後にみんなで何を歌いましたか。", options: ["A. マイナーな歌", "B. 大ヒットの歌", "C. ジャズ"], correct: 1 }
            ],
            essayQuestions: [
                { q: "新しいカラオケ店はどうして人気だそうですか。", a: "新しいカラオケ店は広いので人気だそうです。" },
                { q: "妹は将来何になりたいですか。", a: "音楽の先生になりたいそうです。" },
                { q: "低い声で歌うのはどうでしたか。", a: "少し難しかったです。" },
                { q: "どうしてジュースをおかわりしましたか。", a: "たくさん歌ったので、喉が渇いたからです。" }
            ],
            vocabulary: [
                { word: "平日 (へいじつ)", meaning: "Hari kerja (Senin–Jumat)", sentence: "今日は平日ですが、私は休みです。", meaningSentence: "Hari ini adalah hari kerja, tetapi saya libur." },
                { word: "休日 (きゅうじつ)", meaning: "Hari libur", sentence: "カラオケで楽しい休日", meaningSentence: "Hari libur yang menyenangkan di karaoke." },
                { word: "音楽 (おんがく)", meaning: "Musik", sentence: "「どんな音楽が好きですか。」", meaningSentence: "\"Musik seperti apa yang kamu sukai?\"" },
                { word: "音楽 of 先生 (おんがく of せんせい)", meaning: "Guru musik", sentence: "「妹は音楽の先生になりたいそうです。」", meaningSentence: "\"Katanya adik perempuan saya ingin menjadi guru musik.\"" },
                { word: "ピアノ", meaning: "Piano", sentence: "「妹はピアノが得意です。」", meaningSentence: "\"Adik perempuan saya mahir bermain piano.\"" },
                { word: "ギター", meaning: "Gitar", sentence: "私はギターを少し弾けますが、妹はピアノが得意です。", meaningSentence: "Saya bisa sedikit bermain gitar, tetapi adik perempuan saya mahir bermain piano." },
                { word: "弾く (ひく)", meaning: "Memainkan (alat musik berdawai / piano)", sentence: "私はギターを少し弾けますが、妹はピアノが得意です。", meaningSentence: "Saya bisa sedikit bermain gitar, tetapi adik perempuan saya mahir bermain piano." },
                { word: "得意 (とくい)", meaning: "Mahir / Pandai", sentence: "「妹はピアノが得意です。」", meaningSentence: "\"Adik perempuan saya mahir bermain piano.\"" },
                { word: "声 (こえ)", meaning: "Suara", sentence: "私は低い声で歌いましたが、少し難しかったです。", meaningSentence: "Saya bernyanyi dengan suara rendah, tetapi sedikit sulit." },
                { word: "低い (ひくい)", meaning: "Rendah", sentence: "私は低い声で歌いましたが、少し難しかったです。", meaningSentence: "Saya bernyanyi dengan suara rendah, tetapi sedikit sulit." },
                { word: "ロック音楽 (ロックおんがく)", meaning: "Musik rock", sentence: "「ロック音楽が一番好きです。」", meaningSentence: "\"Saya paling suka musik rock.\"" },
                { word: "ジャズ", meaning: "Jazz", sentence: "「でも、たまにジャズも聞きます。」", meaningSentence: "\"Tetapi, kadang-kadang saya juga mendengarkan jazz.\"" },
                { word: "カラオケ店 (カラオケてん)", meaning: "Tempat karaoke", sentence: "友達と新しいカラオケ店へ行く約束をしました。", meaningSentence: "Saya membuat janji dengan teman untuk pergi ke tempat karaoke yang baru." },
                { word: "禁煙 (きんえん)", meaning: "Dilarang merokok / Bebas asap rokok", sentence: "「禁煙の部屋がいいですか。」", meaningSentence: "\"Apakah Anda ingin kamar yang bebas asap rokok?\"" },
                { word: "コース", meaning: "Paket / Kursus", sentence: "「コースはいくつありますか。」", meaningSentence: "\"Ada berapa banyak pilihan paketnya?\"" },
                { word: "終了時間 (しゅうりょうじかん)", meaning: "Waktu selesai", sentence: "終了時間が近づいたので、店を出ました。", meaningSentence: "Karena waktu selesai sudah mendekat, kami keluar dari toko." },
                { word: "最新 (さいしん)", meaning: "Terbaru", sentence: "最初に最新の歌を歌いました。", meaningSentence: "Pertama-tama, kami menyanyikan lagu terbaru." },
                { word: "懐かしい (なつかしい)", meaning: "Nostalgia / Merindukan masa lalu", sentence: "「はい。懐かしいですね。」", meaningSentence: "\"Ya. Bernostalgia sekali ya.\"" },
                { word: "喉 (のど)", meaning: "Tenggorokan", sentence: "たくさん歌ったので、喉が渇きました。", meaningSentence: "Karena banyak bernyanyi, tenggorokan saya menjadi kering." },
                { word: "喉が渇く (のどがかわく)", meaning: "Haus / Tenggorokan kering", sentence: "たくさん歌ったので、喉が渇きました。", meaningSentence: "Karena banyak bernyanyi, tenggorokan saya menjadi kering." },
                { word: "おかわり", meaning: "Tambah lagi (makanan/minuman)", sentence: "「すみません。ジュースをおかわりします。」", meaningSentence: "\"Permisi. Saya mau tambah jus lagi.\"" },
                { word: "ファン", meaning: "Penggemar / Fan", sentence: "「どのアーティストのファンですか。」", meaningSentence: "\"Kamu penggemar dari musisi yang mana?\"" },
                { word: "大ヒット (だいヒット)", meaning: "Sangat populer / Hit besar", sentence: "最後に、今話題の大ヒットの歌をみんなで歌いました。", meaningSentence: "Terakhir, kami semua menyanyikan lagu yang saat ini sedang hit besar dan hangat dibicarakan." },
                { word: "マイナー", meaning: "Kurang populer / Niche", sentence: "「でも、友達はマイナーな歌をよく選びます。」", meaningSentence: "\"Tetapi, teman saya sering memilih lagu yang kurang populer.\"" },
                { word: "アーティスト", meaning: "Artis / Musisi", sentence: "「どのアーティストのファンですか。」", meaningSentence: "\"Kamu penggemar dari musisi yang mana?\"" },
                { word: "人気 (にんき)", meaning: "Populer", sentence: "「新しいカラオケ店は広いので人気だそうですよ。」", meaningSentence: "\"Katanya tempat karaoke yang baru itu populer karena luas.\"" },
                { word: "便利 (べんり)", meaning: "Praktis / Mudah dijangkau", sentence: "「この店は駅から遠くなくて便利ですね。」", meaningSentence: "\"Toko ini praktis ya karena tidak jauh dari stasiun.\"" },
                { word: "狭い (せまい)", meaning: "Sempit", sentence: "部屋は少し狭いですが、暑くなくて快適でした。", meaningSentence: "Kamarnya sedikit sempit, tetapi tidak panas dan nyaman." },
                { word: "広い (ひろい)", meaning: "Luas", sentence: "「新しいカラオケ店は広いので人気だそうですよ。」", meaningSentence: "\"Katanya tempat karaoke yang baru itu populer karena luas.\"" },
                { word: "快適 (かいてき)", meaning: "Nyaman", sentence: "部屋は少し狭いですが、暑くなくて快適でした。", meaningSentence: "Kamarnya sedikit sempit, tetapi tidak panas dan nyaman." },
                { word: "休憩 (きゅうけい)", meaning: "Istirahat", sentence: "休憩の時間に、友達が聞きました。", meaningSentence: "Pada waktu istirahat, teman saya bertanya." },
                { word: "話題 (わだい)", meaning: "Topik pembicaraan / Sedang hangat dibicarakan", sentence: "最後に、今話題の大ヒットの歌をみんなで歌いました。", meaningSentence: "Terakhir, kami semua menyanyikan lagu yang saat ini sedang hit besar dan hangat dibicarakan." },
                { word: "練習する (れんしゅうする)", meaning: "Berlatih", sentence: "「低い声は難しいですが、もっと練習します。」", meaningSentence: "\"Suara rendah itu sulit, tetapi saya akan berlatih lebih giat lagi.\"" },
                { word: "選ぶ (えらぶ)", meaning: "Memilih", sentence: "歌を選びながら、友達と話しました。", meaningSentence: "Kami mengobrol dengan teman sambil memilih lagu." },
                { word: "覚える (おぼえる)", meaning: "Mengingat", sentence: "「この歌、覚えていますか。」", meaningSentence: "\"Apakah kamu mengingat lagu ini?\"" }
            ]
},
{
            date: "11 Juli 2026",
            title: "健康のために運動を始めました<br>(Mulai Berolahraga demi Kesehatan)",
            readingText: `<ruby>最近<rt>さいきん</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>健康<rt>けんこう</rt></ruby>のために<ruby>運動<rt>うんどう</rt></ruby>を始めました。<ruby>少し<rt>すこし</rt></ruby><ruby>太<rt>ふと</rt></ruby>ったので、運動して<ruby>痩<rt>や</rt></ruby>せたいと<ruby>思<rt>おも</rt></ruby>っています。

<ruby>子供<rt>こども</rt></ruby>の<ruby>時<rt>とき</rt></ruby>は、<ruby>毎日<rt>まいにち</rt></ruby><ruby>外<rt>そと</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>んでいました。よく<ruby>走<rt>はし</rt></ruby>ったり、<ruby>友達<rt>ともだち</rt></ruby>とバレーボールをしたりしていました。<ruby>学生<rt>がくせい</rt></ruby>の時は、よくプールで<ruby>泳<rt>およ</rt></ruby>ぎました。でも、<ruby>働く<rt>はたらく</rt></ruby>時になってからは<ruby>忙<rt>いそが</rt></ruby>しくなり、あまり運動しなくなりました。

最近、<ruby>腰<rt>こし</rt></ruby>が少し<ruby>痛<rt>いた</rt></ruby>いので、この<ruby>町<rt>まち</rt></ruby>の<ruby>大<rt>おお</rt></ruby>きな<ruby>病院<rt>びょういん</rt></ruby>へ行きました。
<ruby>先生<rt>せんせい</rt></ruby>が<ruby>聞<rt>き</rt></ruby>きました。
「最近、何か運動していますか。」
私は<ruby>答<rt>こた</rt></ruby>えました。
「いいえ。最近は何もできません。」
先生は言いました。
「それなら、運動はゆっくり始めましょう。<ruby>最初<rt>さいしょ</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>でもできますよ。<ruby>暇<rt>ひま</rt></ruby>な時はヨガやストレッチがおすすめです。」
「<ruby>筋肉<rt>きんにく</rt></ruby>をつけたいんですが、何をすればいいですか。」
「筋肉をつけたいのでしたら、<ruby>週<rt>しゅう</rt></ruby>に<ruby>何回<rt>なんかい</rt></ruby>かジムへ行くといいですよ。」

私は先生のアドバイスを聞いて、<ruby>今週<rt>こんしゅう</rt></ruby>からジムへ<ruby>通<rt>かよ</rt></ruby>い始めました。
ジムには<ruby>親切<rt>しんせつ</rt></ruby>なトレーナーがいます。
「このマシンを使ったことがありますか。」
「いいえ、ありません。」
「大丈夫です。<ruby>一緒<rt>いっしょ</rt></ruby>にやりましょう。」

今は1週間に3回ジムへ行っています。ジムへ行く時は、いつも<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞きながら<rt>ききながら</rt></ruby>運動しています。
運動が終わる時は、<ruby>必ず<rt>かならず</rt></ruby>ストレッチをします。<ruby>足<rt>あし</rt></ruby>のストレッチや腰の運動をすると、<ruby>体<rt>からだ</rt></ruby>がとても<ruby>楽<rt>らく</rt></ruby>になります。

<ruby>食事<rt>しょくじ</rt></ruby>も少し<ruby>変<rt>か</rt></ruby>えました。
ジュースはあまり飲みません。飲む時は少しだけ飲みます。
水を飲む時は、レモンを入れるようにしています。
<ruby>塩<rt>しお</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>も少なくして、少ない<ruby>油<rt>あぶら</rt></ruby>で<ruby>料理<rt>りょうり</rt></ruby>を作っています。<ruby>魚<rt>さかな</rt></ruby>や<ruby>野菜<rt>やさい</rt></ruby>もよく食べるようになりました。

<ruby>休日<rt>きゅうじつ</rt></ruby>は<ruby>仲間<rt>なかま</rt></ruby>と<ruby>公園<rt>こうえん</rt></ruby>でジョギングやストレッチをします。
<ruby>暖<rt>あたた</rt></ruby>かい<ruby>日<rt>ひ</rt></ruby>は<ruby>散歩<rt>さんぽ</rt></ruby>をして、<ruby>暑<rt>あつい</rt></ruby>日はプールで泳ぎます。

私はゆっくりですが、少しずつ痩せてきました。
これからも<ruby>熱心<rt>ねっしん</rt></ruby>に運動を<ruby>続<rt>つづ</rt></ruby>けて、健康な<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>りたいと思います。」`,
            questions: [
                { q: "私はなぜ運動を始めましたか。", options: ["A. サッカーが好きだから", "B. 痩せて健康になりたいから", "C. トレーナーに会いたいから"], correct: 1 },
                { q: "子供の時、私は何をよくしましたか。", options: ["A. ジムへ行きました。", "B. よく走って遊びました。", "C. スキーをしました。"], correct: 1 },
                { q: "先生は何をすすめましたか。", options: ["A. 毎日10時間走ること", "B. ヨガやストレッチ", "C. 甘い物をたくさん食べること"], correct: 1 },
                { q: "今、私は1週間に何回ジムへ行っていますか。", options: ["A. 1回", "B. 2回", "C. 3回"], correct: 2 },
                { q: "食事で気をつけていることは何ですか。", options: ["A. ジュースをたくさん飲むこと", "B. 塩を少なくして魚や野菜を食べること", "C. 毎日ケーキを食べること"], correct: 1 }
            ],
            essayQuestions: [
                { q: "どうして働くようになってから、あまり運動しなくなりましたか。", a: "忙しくなったからです。" },
                { q: "ジムへ行く時は、いつも何をしながら運動していますか。", a: "音楽を聞きながら運動しています。" },
                { q: "水を飲む時は、どうするようにしていますか。", a: "レモンを入れるようにしています。" },
                { q: "暖かい日と暑い日は、それぞれ何をしますか。", a: "暖かい日は散歩をして、暑い日はプールで泳ぎます。" }
            ],
            vocabulary: [
                { word: "働く (はたらく)", meaning: "Bekerja", sentence: "でも、働く時になってからは忙しくなり、あまり運動しなくなりました。", meaningSentence: "Namun, sejak saat mulai bekerja, saya menjadi sibuk dan tidak banyak berolahraga lagi." },
                { word: "子供 (こども)", meaning: "Anak-anak", sentence: "子供の時は、毎日外で遊んでいました。", meaningSentence: "Saat masih anak-anak, setiap hari saya bermain di luar." },
                { word: "学生 (がくせい)", meaning: "Pelajar / Mahasiswa", sentence: "学生の時は、よくプールで泳ぎました。", meaningSentence: "Saat masih berstatus pelajar, saya sering berenang di kolam renang." },
                { word: "腰 (こし)", meaning: "Pinggang", sentence: "最近、腰が少し痛いので、この町の大きな病院へ行きました。", meaningSentence: "Akhir-akhir ini pinggang saya sedikit sakit, jadi saya pergi ke rumah sakit besar di kota ini." },
                { word: "運動 (うんどう)", meaning: "Olahraga", sentence: "最近、私は健康のために運動を始めました。", meaningSentence: "Baru-baru ini, saya mulai berolahraga demi kesehatan." },
                { word: "筋肉 (きんにく)", meaning: "Otot", sentence: "「筋肉をつけたいんですが、何をすればいいですか。」", meaningSentence: "\"Saya ingin membentuk otot, apa yang sebaiknya saya lakukan?\"" },
                { word: "ストレッチ", meaning: "Peregangan (Stretch)", sentence: "「暇な時はヨガやストレッチがおすすめです。」", meaningSentence: "\"Saat waktu luang, yoga atau peregangan sangat direkomendasikan.\"" },
                { word: "痩せる (やせる)", meaning: "Menjadi kurus / Langsing", sentence: "少し太ったので、運動して痩せたいと思っています。", meaningSentence: "Karena agak gemuk, saya ingin berolahraga dan menjadi langsing." },
                { word: "太る (ふとる)", meaning: "Menjadi gemuk", sentence: "少し太ったので、運動して痩せたいと思っています。", meaningSentence: "Karena agak gemuk, saya ingin berolahraga dan menjadi langsing." },
                { word: "病院 (びょういん)", meaning: "Rumah sakit", sentence: "最近、腰が少し痛いので、この町の大きな病院へ行きました。", meaningSentence: "Akhir-akhir ini pinggang saya sedikit sakit, jadi saya pergi ke rumah sakit besar di kota ini." },
                { word: "健康 (けんこう)", meaning: "Kesehatan / Sehat", sentence: "最近、私は健康のために運動を始めました。", meaningSentence: "Baru-baru ini, saya mulai berolahraga demi kesehatan." },
                { word: "ジョギング", meaning: "Jogging", sentence: "休日は仲間と公園でジョギングやストレッチをします。", meaningSentence: "Pada hari libur, saya melakukan jogging dan peregangan di taman bersama teman-teman." },
                { word: "散歩 (さんぽ)", meaning: "Jalan-jalan santai", sentence: "暖かい日は散歩をして、暑い日はプールで泳ぎます。", meaningSentence: "Pada hari yang hangat saya jalan-jalan santai, dan pada hari yang panas saya berenang di kolam renang." },
                { word: "仲間 (なかま)", meaning: "Teman / Rekan / Kelompok", sentence: "休日は仲間と公園でジョギングやストレッチをします。", meaningSentence: "Pada hari libur, saya melakukan jogging dan peregangan di taman bersama teman-teman." },
                { word: "トレーナー", meaning: "Pelatih (Trainer)", sentence: "ジムには親切なトレーナーがいます。", meaningSentence: "Di pusat kebugaran ada pelatih yang ramah." },
                { word: "マシン", meaning: "Mesin (alat olahraga)", sentence: "「このマシンを使ったことがありますか。」", meaningSentence: "\"Apakah Anda pernah menggunakan mesin ini?\"" },
                { word: "ジム", meaning: "Pusat kebugaran (Gym)", sentence: "私は先生のアドバイスを聞いて、今週からジムへ通い始めました。", meaningSentence: "Mendengar saran dari dokter, saya mulai rutin pergi ke gym sejak minggu ini." },
                { word: "ヨガ", meaning: "Yoga", sentence: "「暇な時はヨガやストレッチがおすすめです。」", meaningSentence: "\"Saat waktu luang, yoga atau peregangan sangat direkomendasikan.\"" },
                { word: "熱心 (ねっしん)", meaning: "Tekun / Bersungguh-sungguh", sentence: "これからも熱心に運動を続けて、健康な生活を送りたいと思います。", meaningSentence: "Ke depannya pun saya ingin terus berolahraga dengan tekun dan menjalani pola hidup yang sehat." },
                { word: "塩 (しお)", meaning: "Garam", sentence: "塩の量も少なくして、少ない油で料理を作っています。", meaningSentence: "Saya juga mengurangi takaran garam dan memasak makanan dengan sedikit minyak." },
                { word: "量 (りょう)", meaning: "Jumlah / Takaran", sentence: "塩の量も少なくして、少ない油で料理を作っています。", meaningSentence: "Saya juga mengurangi takaran garam dan memasak makanan dengan sedikit minyak." },
                { word: "油 (あぶra)", meaning: "Minyak", sentence: "塩の量も少なくして、少ない油で料理を作っています。", meaningSentence: "Saya juga mengurangi takaran garam dan memasak makanan dengan sedikit minyak." },
                { word: "少ない (すくない)", meaning: "Sedikit", sentence: "塩の量も少なくして、少ない油で料理を作っています。", meaningSentence: "Saya juga mengurangi takaran garam dan memasak makanan dengan sedikit minyak." },
                { word: "魚 (さかな)", meaning: "Ikan", sentence: "魚や野菜もよく食べるようになりました。", meaningSentence: "Saya pun menjadi sering makan ikan dan sayuran." },
                { word: "野菜 (やさい)", meaning: "Sayuran", sentence: "魚や野菜もよく食べるようになりました。", meaningSentence: "Saya pun menjadi sering makan ikan dan sayuran." },
                { word: "レモン", meaning: "Lemon", sentence: "水を飲む時は、レモンを入れるようにしています。", meaningSentence: "Saat minum air, saya membiasakan diri untuk memasukkan lemon." },
                { word: "暖かい (あたたかい)", meaning: "Hangat", sentence: "暖かい日は散歩をして、暑い日はプールで泳ぎます。", meaningSentence: "Pada hari yang hangat saya jalan-jalan santai, dan pada hari yang panas saya berenang di kolam renang." },
                { word: "暑い (あつい)", meaning: "Panas", sentence: "暖かい日は散歩をして、暑い日はプールで泳ぎます。", meaningSentence: "Pada hari yang hangat saya jalan-jalan santai, dan pada hari yang panas saya berenang di kolam renang." },
                { word: "生活 (せいかつ)", meaning: "Kehidupan / Pola hidup", sentence: "これからも熱心に運動を続けて、健康な生活を送りたいと思います。", meaningSentence: "Ke depannya pun saya ingin terus berolahraga dengan tekun dan menjalani pola hidup yang sehat." },
                { word: "休日 (きゅうじつ)", meaning: "Hari libur", sentence: "休日は仲間と公園でジョギングやストレッチをします。", meaningSentence: "Pada hari libur, saya melakukan jogging dan peregangan di taman bersama teman-teman." },
                { word: "続ける (つづける)", meaning: "Melanjutkan", sentence: "これからも熱心に運動を続けて、健康な生活を送りたいと思います。", meaningSentence: "Ke depannya pun saya ingin terus berolahraga dengan tekun dan menjalani pola hidup yang sehat." },
                { word: "通う (かよう)", meaning: "Pergi pulang / Rutin pergi ke", sentence: "私は先生のアドバイスを聞いて、今週からジムへ通い始めました。", meaningSentence: "Mendengar saran dari dokter, saya mulai rutin pergi ke gym sejak minggu ini." },
                { word: "必ず (かならず)", meaning: "Pasti / Selalu", sentence: "運動が終わる時は、必ずストレッチをします。", meaningSentence: "Saat olahraga selesai, saya selalu melakukan peregangan." },
                { word: "楽 (らく)", meaning: "Nyaman / Ringan", sentence: "足のストレッチや腰の運動をすると、体がとても楽になります。", meaningSentence: "Saat melakukan peregangan kaki atau latihan pinggang, tubuh menjadi sangat ringan." }
            ]
},
{
            date: "12 Juli 2026",
            title: "道に迷った旅行者<br>(Wisatawan yang Tersesat)",
            readingText: `<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>週末<rt>しゅうまつ</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>姉<rt>あね</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。でも、その<ruby>町<rt>まち</rt></ruby>は<ruby>初<rt>はじ</rt></ruby>めてだったので、まだ<ruby>道<rt>みち</rt></ruby>をよく<ruby>知<rt>し</rt></ruby>りませんでした。

<ruby>駅<rt>えき</rt></ruby>を出たあと、スマホのナビを<ruby>使<rt>つか</rt></ruby>いました。でも、この<ruby>地図<rt>ちず</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かりませんでした。地図には<ruby>記号<rt>きごう</rt></ruby>がたくさんありました。私は「この記号は何ですか」と<ruby>思<rt>おも</rt></ruby>ました。

その<ruby>時<rt>とき</rt></ruby>、<ruby>近く<rt>ちかく</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>聞<rt>き</rt></ruby>きました。
「すみません、この地図が分かりますか。」
「はい、分かりますよ。」
「この<ruby>交差点<rt>こうさてん</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>は分かりますか。」
「はい。<ruby>まっすぐ<rt>真っ直ぐ</rt></ruby>行って、コンビニの<ruby>前<rt>まえ</rt></ruby>を<ruby>左<rt>ひだり</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がってください。」
私は「ありがとうございます」と言って<ruby>歩<rt>ある</rt></ruby>きました。

<ruby>途中<rt>とちゅう</rt></ruby>で、<ruby>古<rt>ふる</rt></ruby>い<ruby>信号<rt>しんごう</rt></ruby>や<ruby>大<rt>おお</rt></ruby>きい<ruby>踏切<rt>ふみきり</rt></ruby>を見ました。<ruby>歩行者<rt>ほこうしゃ</rt></ruby>の道もありましたが、<ruby>夕方<rt>ゆうがた</rt></ruby>だったので、少し<ruby>危<rt>あぶ</rt></ruby>ないかもしれませんでした。

少し歩くと、新しいホテルが見えました。私はもう<ruby>一度<rt>いちど</rt></ruby>人に聞きました。
「ホテルは道の<ruby>向<rt>む</rt></ruby>こうにありますか。」
「いいえ、ホテルはあそこです。<ruby>公園<rt>こうえん</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>に曲がるとありますよ。」

やっと姉の家の近くまで来ました。でも、まだ少し<ruby>不安<rt>ふあん</rt></ruby>だったので、姉に<ruby>電話<rt>でんわ</rt></ruby>しました。
「お姉ちゃん、この<ruby>場所<rt>ばしょ</rt></ruby>を知っていますか。」
「もちろん。今<ruby>迎<rt>むか</rt></ruby>えに行くね。」

しばらく<ruby>待<rt>ま</rt></ruby>つと、姉が来ました。
「この<ruby>辺<rt>あた</rt></ruby>りはよく知っていますか。」
「うん、<ruby>子供<rt>こども</rt></ruby>の時から住んでいるから、よく知っているよ。」
私は<ruby>安心<rt>あんしん</rt></ruby>しました。

<ruby>帰る<rt>かえる</rt></ruby>前に、姉が言いました。
「<ruby>次<rt>つぎ</rt></ruby>に来る時は、もう道が分かりますね。」
私は<ruby>笑<rt>わら</rt></ruby>って答えました。
「はい。今はこの町が少し分かるようになりました。」`,
            questions: [
                { q: "私はどこへ行きましたか。", options: ["A. 友達の家", "B. 姉の家", "C. ホテル"], correct: 1 },
                { q: "地図に何がたくさんありましたか。", options: ["A. 写真", "B. 文字", "C. 記号"], correct: 2 },
                { q: "コンビニの前をどちらに曲がりますか。", options: ["A. 左", "B. 右", "C. まっすぐ"], correct: 0 },
                { q: "ホテルはどこを曲がるとありますか。", options: ["A. 交差点を左", "B. 公園を右", "C. 駅を左"], correct: 1 },
                { q: "誰が私を迎えに来ましたか。", options: ["A. 知らない人", "B. コンビニの店員", "C. 姉"], correct: 2 }
            ],
            essayQuestions: [
                { q: "どうして最初は道をよく知りませんでしたか。", a: "その町は初めてだったからです。" },
                { q: "夕方の道はどうして歩行者にとって心配でしたか。", a: "少し危ないかもしれなかったからです。" },
                { q: "姉はどうしてこの辺りをよく知っていますか。", a: "子供の時から住んでいるからです。" },
                { q: "今はその町についてどうなりましたか。", a: "少し分かるようになりました。" }
            ],
            vocabulary: [
                { word: "道 (みち)", meaning: "Jalan", sentence: "その町は初めてだったので、まだ道をよく知りませんでした。", meaningSentence: "Karena itu pertama kalinya saya ke kota tersebut, saya belum mengetahui jalan dengan baik." },
                { word: "迷う (まよう)", meaning: "Tersesat", sentence: "道に迷った旅行者", meaningSentence: "Wisatawan yang Tersesat." },
                { word: "地図 (ちず)", meaning: "Peta", sentence: "でも、この地図が分かりませんでした。", meaningSentence: "Namun, saya tidak mengerti peta ini." },
                { word: "ナビ", meaning: "Navigasi (GPS)", sentence: "駅を出たあと、スマホのナビを使いました。", meaningSentence: "Setelah keluar dari stasiun, saya menggunakan navigasi di ponsel pintar." },
                { word: "記号 (きごう)", meaning: "Simbol / Tanda", sentence: "地図には記号がたくさんありました。", meaningSentence: "Di peta ada banyak sekali simbol." },
                { word: "表示 (ひょうじ)", meaning: "Tampilan / Indikasi", sentence: "スマホの画面にはたくさんの表示があります。", meaningSentence: "Ada banyak tampilan/indikasi di layar ponsel pintar." },
                { word: "案内 (あんない)", meaning: "Petunjuk / Panduan", sentence: "駅の案内を見ながら歩きました。", meaningSentence: "Saya berjalan sambil melihat petunjuk stasiun." },
                { word: "交差点 (こうさてん)", meaning: "Persimpangan", sentence: "「この交差点の名前は分かりますか。」", meaningSentence: "\"Apakah Anda tahu nama persimpangan ini?\"" },
                { word: "曲がる (まがる)", meaning: "Berbelok", sentence: "「コンビニの前を左に曲がってください。」", meaningSentence: "\"Silakan berbelok ke kiri di depan minimarket.\"" },
                { word: "まっすぐ", meaning: "Lurus", sentence: "「はい。まっすぐ行って、コンビニの前を左に曲がってください。」", meaningSentence: "\"Ya. Pergilah lurus, lalu silakan berbelok ke kiri di depan minimarket.\"" },
                { word: "左 (ひだり)", meaning: "Kiri", sentence: "「コンビニの前を左に曲がってください。」", meaningSentence: "\"Silakan berbelok ke kiri di depan minimarket.\"" },
                { word: "右 (みぎ)", meaning: "Kanan", sentence: "「公園を右に曲がるとありますよ。」", meaningSentence: "\"Kalau berbelok ke kanan di taman, akan ketemu kok.\"" },
                { word: "コンビニ", meaning: "Minimarket", sentence: "「まっすぐ行って、コンビニの前を左に曲がってください。」", meaningSentence: "\"Pergilah lurus, lalu silakan berbelok ke kiri di depan minimarket.\"" },
                { word: "スーパー", meaning: "Supermarket", sentence: "この町の新しいスーパーはとても大きいです。", meaningSentence: "Supermarket baru di kota ini sangat besar." },
                { word: "ホテル", meaning: "Hotel", sentence: "少し歩くと、新しいホテルが見えました。", meaningSentence: "Setelah berjalan sedikit, terlihat sebuah hotel baru." },
                { word: "公園 (こうえん)", meaning: "Taman", sentence: "「公園を右に曲がるとありますよ。」", meaningSentence: "\"Kalau berbelok ke kanan di taman, akan ketemu kok.\"" },
                { word: "建物 (たてもの)", meaning: "Bangunan / Gedung", sentence: "駅の近くには古い建物がたくさんあります。", meaningSentence: "Ada banyak bangunan tua di dekat stasiun." },
                { word: "信号 (しんごう)", meaning: "Lampu lalu lintas", sentence: "途中で、古い信号や大きい踏切を見ました。", meaningSentence: "Di tengah perjalanan, saya melihat lampu lalu lintas yang tua dan perlintasan kereta api yang besar." },
                { word: "歩行者 (ほこうしゃ)", meaning: "Pejalan kaki", sentence: "歩行者の道もありましたが、夕方だったので、少し危ないかもしれませんでした。", meaningSentence: "Ada juga jalan untuk pejalan kaki, tetapi karena sudah sore hari, mungkin agak sedikit berbahaya." },
                { word: "踏切 (ふみきり)", meaning: "Perlintasan kereta api", sentence: "途中で、古い信号や大きい踏切を見ました。", meaningSentence: "Di tengah perjalanan, saya melihat lampu lalu lintas yang tua dan perlintasan kereta api yang besar." },
                { word: "危ない (あぶない)", meaning: "Berbahaya", sentence: "夕方だったので、少し危ないかもしれませんでした。", meaningSentence: "Karena sudah sore hari, mungkin agak sedikit berbahaya." },
                { word: "向こう (むこう)", meaning: "Seberang", sentence: "「ホテルは道の向こうにありますか。」", meaningSentence: "\"Apakah hotelnya ada di seberang jalan?\"" },
                { word: "場所 (ばしょ)", meaning: "Tempat", sentence: "「お姉ちゃん、この場所を知っていますか。」", meaningSentence: "\"Kak, apakah kakak tahu tempat ini?\"" },
                { word: "町 (まち)", meaning: "Kota", sentence: "でも、その町は初めてだったので、まだ道をよく知りませんでした。", meaningSentence: "Namun, karena itu pertama kalinya saya ke kota tersebut, saya belum mengetahui jalan dengan baik." },
                { word: "駅 (えき)", meaning: "Stasiun", sentence: "駅を出たあと、スマホのナビを使いました。", meaningSentence: "Setelah keluar dari stasiun, saya menggunakan navigasi di ponsel pintar." },
                { word: "夕方 (ゆうたが)", meaning: "Sore hari", sentence: "歩行者の道もありましたが、夕方だったので、少し危ないかもしれませんでした。", meaningSentence: "Ada juga jalan untuk pejalan kaki, tetapi karena sudah sore hari, mungkin agak sedikit berbahaya." },
                { word: "知っている", meaning: "Mengetahui / Mengenal", sentence: "「お姉ちゃん、この場所を知っていますか。」", meaningSentence: "\"Kak, apakah kakak tahu tempat ini?\"" },
                { word: "分かる", meaning: "Mengerti / Paham", sentence: "「はい、分かりますよ。」", meaningSentence: "\"Ya, saya mengerti kok.\"" },
                { word: "迎える (むかえる)", meaning: "Menjemput", sentence: "「もちろん。今迎えに行くね。」", meaningSentence: "\"Tentu saja. Sekarang aku pergi menjemputmu ya.\"" },
                { word: "電話する (でんわする)", meaning: "Menelepon", sentence: "まだ少し不安だったので、姉に電話しました。", meaningSentence: "Karena masih agak sedikit cemas, saya menelepon kakak perempuan saya." },
                { word: "安心する (あんしんする)", meaning: "Merasa tenang / Lega", sentence: "私は安心しました。", meaningSentence: "Saya pun merasa lega." },
                { word: "初めて (はじめて)", meaning: "Pertama kali", sentence: "でも、その町は初めてだったので、まだ道をよく知りませんでした。", meaningSentence: "Namun, karena itu pertama kalinya saya ke kota tersebut, saya belum mengetahui jalan dengan baik." },
                { word: "近く (ちかく)", meaning: "Dekat", sentence: "その時、近くの人に聞きました。", meaningSentence: "Pada saat itu, saya bertanya kepada orang yang ada di dekat sana." }
            ]
},
{
            date: "13 Juli 2026",
            title: "初めての剣道<br>(Pertama Kali Belajar Kendo)",
            readingText: `<ruby>最近<rt>さいきん</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>新<rt>あたら</rt></ruby>しい<ruby>趣味<rt>しゅみ</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めたいと<ruby>おも<rt>思</rt></ruby>ました。<ruby>友達<rt>ともだち</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>すると、「<ruby>剣道<rt>けんどう</rt></ruby>はどうですか。<ruby>難<rt>むずか</rt></ruby>しいですが、とても<ruby>面白<rt>おもしろ</rt></ruby>いですよ」と言われました。

私は<ruby>興味<rt>きょうみ</rt></ruby>があったので、近くの<ruby>道場<rt>どうじょう</rt></ruby>へ行きました。道場はてとも<ruby>静か<rt>しずか</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>でした。<ruby>先生<rt>せんせい</rt></ruby>は<ruby>親切<rt>しんせつ</rt></ruby>な人で、私に「剣道の始め方を教えてもらえますか」と聞かれる前に、いろいろ<ruby>説明<rt>せつめい</rt></ruby>してくれました。

私はまだ<ruby>道着<rt>どうぎ</rt></ruby>を持っていなかったので、
「道着がないので<ruby>借<rt>か</rt></ruby>りてもいいですか。」
と聞きました。
先生は、
「もちろんです。剣道の道着を<ruby>貸<rt>か</rt></ruby>しましょう。」
と言いました。

最初に、みんなで<ruby>礼<rt>れい</rt></ruby>をしました。そして先生が、
「じゃあ、まずウォーミングアップから始めましょうか。」
と言いました。
私は、
「はい、お願いします。」
と答えました。

まず<ruby>深呼吸<rt>しんこきゅう</rt></ruby>をして、それから<ruby>体<rt>からだ</rt></ruby>を<ruby>動<rt>うご</rt></ruby>かしました。<ruby>短<rt>みじか</rt></ruby>いウォーミングアップの後、剣道の<ruby>基本<rt>きほん</rt></ruby>を学びました。

先生は、
「まず10回ゆっくり<ruby>振<rt>ふ</rt></ruby>りましょう。」
と言いました。
私は<ruby>竹刀<rt>しない</rt></ruby>を持って、<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>しました。
しかし、足の動かし方が少し難しかったです。
「足の動かし方がまだ分かりません。」
と言うと、先生は、
「大丈夫ですよ。足の動かし方は難しくないです。ゆっくり練習しましょう。」
と言ってくれました。

練習中は大きい<ruby>声<rt>こえ</rt></ruby>を出したり、体をたくさん動かしたりしました。少し<ruby>疲<rt>つか</rt></ruby>れましたが、とても楽しかったです。

<ruby>稽古<rt>けいこ</rt></ruby>の後、先生が聞きました。
「剣道の練習は<ruby>大変<rt>たいへん</rt></ruby>ですか。」
私は<ruby>笑<rt>わら</rt></ruby>って答えました。
「はい、少し大変ですが、とても面白いです。剣道の後、とてもスッキリしました。」

最近は<ruby>仕事<rt>しごと</rt></ruby>のストレスがたまっていましたが、剣道をして<ruby>気分<rt>きぶん</rt></ruby>が良くなりました。

帰る時、私は先生に言いました。
「これから剣道を一生懸命練習します。」
先生は笑って、
「<ruby>頑張<rt>がんば</rt></ruby>ってください。」
と言いました。
私は<ruby>次<rt>つぎ</rt></ruby>の稽古が今から楽しみです。`,
            questions: [
                { q: "友達は私に何をすすめましたか。", options: ["A. 空手", "B. 剣道", "C. 柔道"], correct: 1 },
                { q: "私は道着をどうしましたか。", options: ["A. 買いました。", "B. 友達にもらいました。", "C. 先生に借りました。"], correct: 2 },
                { q: "ウォーミングアップの前に何をしましたか。", options: ["A. 試合をしました。", "B. 礼と深呼吸をしました。", "C. 竹刀を買いました。"], correct: 1 },
                { q: "私は何を持て練習しましたか。", options: ["A. 竹刀", "B. 本", "C. ギター"], correct: 0 },
                { q: "剣道をした後、私はどうなりましたか。", options: ["A. 気分が悪くなりました。", "B. スッキリして気分が良くなりました。", "C. すぐに寝ました。"], correct: 1 }
            ],
            essayQuestions: [
                { q: "道場はどんな場所でしたか。", a: "とても静かな場所でした。" },
                { q: "私は練習中にどんなことをしましたか。", a: "大きい声を出したり、体をたくさん動かしたりしました。" },
                { q: "私は何がまだ分かりませんかと言いましたか。", a: "足の動かし方がまだ分かりませんと言いました。" },
                { q: "最近私は何がたまっていましたか。", a: "仕事のストレスがたまっていました。" }
            ],
            vocabulary: [
                { word: "難しい (むずかしい)", meaning: "Sulit / Sukar", sentence: "「難しいですが、とても面白いですよ」と言われました。", meaningSentence: "\"Meskipun sulit, rasanya sangat menarik lho,\" katanya." },
                { word: "剣道 (けんどう)", meaning: "Kendo (bela diri pedang bambu)", sentence: "「剣道はどうですか。」", meaningSentence: "\"Bagaimana kalau Kendo?\"" },
                { word: "道着 (どうぎ)", meaning: "Baju latihan bela diri", sentence: "私はまだ道着を持っていなかったので、「道着がないので借りてもいいですか」と聞きました。", meaningSentence: "Karena saya belum punya baju latihan, saya bertanya, \"Karena tidak ada baju latihan, bolehkah saya meminjamnya?\"" },
                { word: "道場 (どうじょう)", meaning: "Dojo (tempat latihan bela diri)", sentence: "私は興味があったので、近くの道場へ行きました。", meaningSentence: "Karena tertarik, saya pergi ke dojo terdekat." },
                { word: "礼 (れい)", meaning: "Hormat / Salam", sentence: "最初に、みんなで礼をしました。", meaningSentence: "Pertama-tama, kami semua melakukan hormat." },
                { word: "稽古 (けいこ)", meaning: "Latihan (bela diri / seni tradisional)", sentence: "稽古の後、先生が聞きました。", meaningSentence: "Setelah latihan selesai, guru bertanya." },
                { word: "基本 (きほん)", meaning: "Dasar / Basis", sentence: "短いウォーミングアップの後、剣道の基本を学びました。", meaningSentence: "Setelah pemasanan singkat, saya mempelajari dasar-dasar kendo." },
                { word: "始め方 (はじめかた)", meaning: "Cara memulai", sentence: "私に「剣道の始め方を教えてもらえますか」と聞かれる前に、いろいろ説明してくれました。", meaningSentence: "Sebelum saya bertanya \"Bisa tolong ajarkan cara memulai kendo?\", beliau sudah menjelaskan banyak hal." },
                { word: "練習 (れんしゅう)", meaning: "Latihan", sentence: "私は竹刀を持って、一生懸命練習しました。", meaningSentence: "Saya memegang pedang bambu dan berlatih dengan sungguh-sungguh." },
                { word: "深呼吸 (しんこきゅう)", meaning: "Napas dalam / Menarik napas dalam", sentence: "まず深呼吸をして、それから体を動かしました。", meaningSentence: "Pertama-tama menarik napas dalam, lalu setelah itu menggerakkan tubuh." },
                { word: "振る (ふる)", meaning: "Mengayunkan", sentence: "「まず10回ゆっくり振りましょう。」", meaningSentence: "\"Pertama-tama mari kita ayunkan 10 kali secara perlahan.\"" },
                { word: "足 (あし)", meaning: "Kaki", sentence: "しかし、足の動かし方が少し難しかったです。", meaningSentence: "Namun, cara menggerakkan kaki sedikit sulit." },
                { word: "動かし方 (うごかしかた)", meaning: "Cara menggerakkan", sentence: "「足の動かし方がまだ分かりません。」", meaningSentence: "\"Saya masih belum paham cara menggerakkan kakinya.\"" },
                { word: "ウォーミングアップ", meaning: "Pemanasan (Warming up)", sentence: "「じゃあ、まずウォーミングアップから始めましょうか。」", meaningSentence: "\"Kalau begitu, mari kita mulai dari pemanasan dahulu ya.\"" },
                { word: "体 (からだ)", meaning: "Tubuh / Badan", sentence: "練習中は大きい声を出したり、体をたくさん動かしたりしました。", meaningSentence: "Selama latihan, saya mengeluarkan suara lantang dan banyak menggerakkan tubuh." },
                { word: "声 (こえ)", meaning: "Suara", sentence: "練習中は大きい声を出したり、体をたくさん動かしたりしました。", meaningSentence: "Selama latihan, saya mengeluarkan suara lantang dan banyak menggerakkan tubuh." },
                { word: "親切 (しんせつ)", meaning: "Baik hati / Ramah", sentence: "先生は親切な人で、いろいろ説明してくれました。", meaningSentence: "Guru adalah orang yang ramah dan telah menjelaskan banyak hal kepada saya." },
                { word: "借ります (かります)", meaning: "Meminjam", sentence: "「道着がないので借りてもいいですか。」", meaningSentence: "\"Karena tidak ada baju latihan, bolehkah saya meminjamnya?\"" },
                { word: "貸します (かします)", meaning: "Meminjamkan", sentence: "「もちろんです。剣道の道着を貸しましょう。」", meaningSentence: "\"Tentu saja. Mari saya pinjamkan baju latihan kendo.\"" },
                { word: "一生懸命 (いっしょうけんめい)", meaning: "Dengan sungguh-sungguh / Sekuat tenaga", sentence: "「これから剣道を一生懸命練習します。」", meaningSentence: "\"Mulai sekarang saya akan berlatih kendo dengan sungguh-sungguh.\"" },
                { word: "ストレス", meaning: "Stres", sentence: "最近は仕事のストレスがたまっていましたが、剣道をして気分が良くなりました。", meaningSentence: "Akhir-akhir ini stres kerja menumpuk, tetapi setelah melakukan kendo perasaan saya menjadi lebih baik." },
                { word: "たまります", meaning: "Menumpuk / Terakumulasi", sentence: "最近は仕事のストレスがたまっていました。", meaningSentence: "Akhir-akhir ini stres kerja menumpuk." },
                { word: "スッキリします", meaning: "Merasa segar / Lega", sentence: "「剣道の後、とてもスッキリしました。」", meaningSentence: "\"Setelah kendo, rasanya menjadi sangat segar.\"" },
                { word: "疲れる (つかれる)", meaning: "Lelah / Letih", sentence: "少し疲れましたが、とても楽しかったです。", meaningSentence: "Saya sedikit lelah, tetapi rasanya sangat menyenangkan." },
                { word: "気分 (きぶん)", meaning: "Perasaan / Suasana hati", sentence: "剣道をして気分が良くなりました。", meaningSentence: "Setelah melakukan kendo perasaan saya menjadi lebih baik." },
                { word: "頑張る (がんばる)", meaning: "Berusaha keras / Berjuang", sentence: "先生は笑って、「頑張ってください」と言いました。", meaningSentence: "Guru tersenyum lalu berkata, \"Berjuanglah/Berusaha keraslah.\"" },
                { word: "竹刀 (しない)", meaning: "Pedang bambu (kendo)", sentence: "私は竹刀を持って、一生懸命練習しました。", meaningSentence: "Saya memegang pedang bambu dan berlatih dengan sungguh-sungguh." },
                { word: "興味 (きょうみ)", meaning: "Minat / Ketertarikan", sentence: "私は興味があったので、近くの道場へ行きました。", meaningSentence: "Karena saya tertarik, saya pergi ke dojo terdekat." },
                { word: "趣味 (しゅみ)", meaning: "Hobi", sentence: "最近、私は新しい趣味を始めたいと思いました。", meaningSentence: "Baru-baru ini, saya berpikir ingin memulai hobi baru." },
                { word: "静か (しずか)", meaning: "Tenang / Sunyi", sentence: "道場はとても静かな場所でした。", meaningSentence: "Dojo adalah tempat yang sangat tenang." },
                { word: "大変 (たいへん)", meaning: "Berat / Sulit", sentence: "「はい、少し大変ですが、とても面白いです。」", meaningSentence: "\"Ya, sedikit berat tetapi sangat menarik.\"" },
                { word: "面白い (おもしろい)", meaning: "Menarik / Menyenangkan", sentence: "「難しいですが、とても面白いですよ」と言われました。", meaningSentence: "\"Meskipun sulit, rasanya sangat menarik lho,\" katanya." }
            ]
},
{
            date: "14 Juli 2026",
            title: "シェアハウスの悩み<br>(Kekhawatiran di Share House)",
            readingText: `<ruby>私<rt>わたし</rt></ruby>は<ruby>今<rt>いま</rt></ruby>、<ruby>古<rt>ふる</rt></ruby>いシェアハウスに<ruby>住<rt>す</rt></ruby>んでいます。<ruby>家賃<rt>やちん</rt></ruby>は<ruby>安<rt>やす</rt></ruby>いですが、ルームメイトとの<ruby>生活<rt>せいかつ</rt></ruby>で<ruby>悩み<rt>なやみ</rt></ruby>があります。

私のルームメイトは私より<ruby>三歳<rt>さんさい</rt></ruby><ruby>年下<rt>としした</rt></ruby>です。<ruby>普段<rt>ふだん</rt></ruby>は<ruby>親切<rt>しんせつ</rt></ruby>ですが、<ruby>時々<rt>ときどき</rt></ruby><ruby>機嫌<rt>きげん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い<ruby>日<rt>ひ</rt></ruby>があります。機嫌が悪い日は、あまり<ruby>話<rt>はな</rt></ruby>しません。私は<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて、<ruby>気分<rt>きぶん</rt></ruby>を<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>かせます。

<ruby>一番<rt>いちばん</rt></ruby>の悩みは、<ruby>部屋<rt>へや</rt></ruby>が<ruby>汚<rt>きたな</rt></ruby>いことです。ルームメイトは<ruby>掃除<rt>そうじ</rt></ruby>をしないので、部屋が汚くて<ruby>困<rt>こま</rt></ruby>っています。ゴミも<ruby>毎日<rt>まいにち</rt></ruby>たまりますから、部屋が少し<ruby>臭<rt>くさ</rt></ruby>いです。

それだけではありません。ルームメイトは部屋の<ruby>窓<rt>まど</rt></ruby>を<ruby>閉<rt>し</rt></ruby>めません。私は毎日窓を閉めます。また、<ruby>夜<rt>よる</rt></ruby>は部屋の<ruby>鍵<rt>かぎ</rt></ruby>をかけない人がいるんです。私は<ruby>心配<rt>しんぱい</rt></ruby>なので、<ruby>寝<rt>ね</rt></ruby>る前に<ruby>必ず<rt>かならず</rt></ruby>三回ぐらい鍵を<ruby>確認<rt>かくにん</rt></ruby>します。

<ruby>最近<rt>さいきん</rt></ruby>は、<ruby>洗濯機<rt>せんたくき</rt></ruby>が<ruby>動<rt>うご</rt></ruby>かなくて<ruby>不便<rt>ふべん</rt></ruby>です。<ruby>洗濯<rt>せんたく</rt></ruby>ができないので、<ruby>洗濯物<rt>せんたくもの</rt></ruby>がすぐたまります。洗濯物をたたまないと<ruby>時間<rt>じかん</rt></ruby>がかかりますし、<ruby>服<rt>ふく</rt></ruby>も<ruby>足<rt>た</rt></ruby>りません。

もう一つ困っていることがあります。ルームメイトはよく<ruby>物<rt>もの</rt></ruby>をなくします。<ruby>先週<rt>せんしゅう</rt></ruby>は鍵をなくしました。<ruby>昨日<rt>きのう</rt></ruby>はリモコンをなくしました。
私は、
「どうしてお前にすぐ物をなくすんですか。」
と言いました。
でも、ルームメイトは<ruby>笑<rt>わら</rt></ruby>って、
「ごめん。また<ruby>探<rt>さが</rt></ruby>してみる。」
と言いました。

その時、私は少しイライラしました。しかし、<ruby>怒<rt>おこ</rt></ruby>るだけでは何も変わらないと思ったので、<ruby>静か<rt>しずか</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>しました。

最近は<ruby>電気代<rt>でんきだい</rt></ruby>も<ruby>高<rt>たか</rt></ruby>くなりました。ルームメイトが電気を消さなくて、電気代が高いです。

<ruby>先日<rt>せんじつ</rt></ruby>、<ruby>父<rt>ちち</rt></ruby>と<ruby>電話<rt>でんわ</rt></ruby>で話しました。
「ルームメイトとうまくいっていますか。」
私は、
「いいえ。最近、ちょっとイライラしています。でも、できるだけ<ruby>頑張<rt>がんば</rt></ruby>ります。」
と答えました。

<ruby>来年<rt>らいねん</rt></ruby>は新しいアパートを<ruby>借<rt>か</rt></ruby>りて、<ruby>一人暮らし<rt>ひとりぐらし</rt></ruby>をする<ruby>予定<rt>よてい</rt></ruby>です。今は新しい<ruby>契約<rt>けいやく</rt></ruby>について<ruby>調<rt>しら</rt></ruby>べています。
それまで、<ruby>節約<rt>せつやく</rt></ruby>をしながら、毎日少しずつ頑張ろうと思います。」`,
            questions: [
                { q: "ルームメイトは私より何歳年下ですか。", options: ["A. 二歳年下", "B. 三歳年下", "C. 五歳年下"], correct: 1 },
                { q: "一番の悩みは何ですか。", options: ["A. 部屋が汚いこと", "B. 家賃が高いこと", "C. 部屋が狭いこと"], correct: 0 },
                { q: "私は寝る前に何回ぐらい鍵を確認しますか。", options: ["A. 一回", "B. 二回", "C. 三回"], correct: 2 },
                { q: "ルームメイトは昨日何をなくしましたか。", options: ["A. 鍵", "B. リモコン", "C. スマホ"], correct: 1 },
                { q: "来年私は何をする予定ですか。", options: ["A. 旅行に行く", "B. 一人暮らしをする", "C. 国へ帰る"], correct: 1 }
            ],
            essayQuestions: [
                { q: "ルームメイトの機嫌が悪い日、私は何をしますか。", a: "音楽を聞いて、気分を落ち着かせます。" },
                { q: "どうして洗濯物がすぐたまりますか。", a: "洗濯機が動かなくて洗濯ができないからです。" },
                { q: "どうして電気代が高いですか。", a: "ルームメイトが電気を消さないからです。" },
                { q: "私はこれから新しいアパートのために何をしながら頑張りますか。", a: "節約をしながら頑張ります。" }
            ],
            vocabulary: [
                { word: "悩み (なやみ)", meaning: "Masalah / Kekhawatiran", sentence: "家賃は安いですが、ルームメイトとの生活で悩みがあります。", meaningSentence: "Meskipun uang sewanya murah, saya memiliki kekhawatiran dalam menjalani kehidupan bersama teman serumah." },
                { word: "シェアハウス", meaning: "Rumah bersama (Share house)", sentence: "私は今、古いシェアハウスに住んでいます。", meaningSentence: "Saat ini, saya tinggal di sebuah share house lama." },
                { word: "ルームメイト", meaning: "Teman serumah", sentence: "私のルームメイトは私より三歳年下です。", meaningSentence: "Teman serumah saya berusia tiga tahun lebih muda dari saya." },
                { word: "生活 (せいかつ)", meaning: "Kehidupan / Pola hidup", sentence: "家賃は安いですが、ルームメイトとの生活で悩みがあります。", meaningSentence: "Meskipun uang sewanya murah, saya memiliki kekhawatiran dalam menjalani kehidupan bersama teman serumah." },
                { word: "年下 (としした)", meaning: "Lebih muda", sentence: "私のルームメイトは私より三歳年下です。", meaningSentence: "Teman serumah saya berusia tiga tahun lebih muda dari saya." },
                { word: "機嫌 (きげん)", meaning: "Suasana hati / Mood", sentence: "普段は親切ですが、時々機嫌が悪い日があります。", meaningSentence: "Biasanya dia ramah, tetapi terkadang ada hari-hari di mana suasana hatinya sedang buruk." },
                { word: "困る (こまる)", meaning: "Kesulitan / Bingung", sentence: "ルームメイトは掃除をしないので、部屋が汚くて困っています。", meaningSentence: "Karena teman serumah tidak bersih-bersih, saya kesulitan karena kamarnya kotor." },
                { word: "汚い (きたない)", meaning: "Kotor", sentence: "一番の悩みは、部屋が汚いことです。", meaningSentence: "Kekhawatiran yang paling utama adalah kamarnya kotor." },
                { word: "窓 (まど)", meaning: "Jendela", sentence: "ルームメイトは部屋の窓を閉めません。", meaningSentence: "Teman serumah tidak menutup jendela kamar." },
                { word: "鍵 (かぎ)", meaning: "Kunci", sentence: "夜は部屋の鍵をかけない人がいるんです。", meaningSentence: "Pada malam hari, ada orang yang tidak mengunci pintu kamar." },
                { word: "鍵をかける", meaning: "Mengunci", sentence: "夜は部屋の鍵をかけない人がいるんです。", meaningSentence: "Pada malam hari, ada orang yang tidak mengunci pintu kamar." },
                { word: "閉める (しめる)", meaning: "Menutup", sentence: "私は毎日窓を閉めます。", meaningSentence: "Saya menutup jendela setiap hari." },
                { word: "注意する (ちゅういする)", meaning: "Menegur / Memperingatkan", sentence: "怒るだけでは何も変わらないと思ったので、静かに注意しました。", meaningSentence: "Karena saya pikir marah saja tidak akan mengubah apa pun, saya menegurnya dengan tenang." },
                { word: "イライラする", meaning: "Kesal / Jengkel / Gemas", sentence: "その時、私は少しイライラしました。", meaningSentence: "Pada saat itu, saya merasa sedikit jengkel." },
                { word: "なくす", meaning: "Kehilangan / Menghilangkan", sentence: "ルームメイトはよく物をなくします。", meaningSentence: "Teman serumah sering menghilangkan barang." },
                { word: "リモコン", meaning: "Remot (Remote control)", sentence: "昨日はリモコンをなくしました。", meaningSentence: "Kemarin dia menghilangkan remot." },
                { word: "ゴミ", meaning: "Sampah", sentence: "ゴミも毎日たまりますから、部屋が少し臭いです。", meaningSentence: "Karena sampah juga menumpuk setiap hari, kamarnya menjadi sedikit bau." },
                { word: "臭い (くさい)", meaning: "Bau / Berbau busuk", sentence: "ゴミも毎日たまりますから、部屋が少し臭いです。", meaningSentence: "Karena sampah juga menumpuk setiap hari, kamarnya menjadi sedikit bau." },
                { word: "洗濯機 (せんたくき)", meaning: "Mesin cuci", sentence: "最近は、洗濯機が動かなくて不便です。", meaningSentence: "Akhir-akhir ini tidak praktis karena mesin cucinya tidak menyala." },
                { word: "洗濯物 (せんたくもの)", meaning: "Cucian / Pakaian kotor", sentence: "洗濯ができないので、洗濯物がすぐたまります。", meaningSentence: "Karena tidak bisa mencuci, pakaian kotor langsung menumpuk." },
                { word: "たたむ", meaning: "Melipat", sentence: "洗濯物をたたまないと時間がかかりますし、服も足りません。", meaningSentence: "Jika tidak melipat pakaian kotor (setelah dicuci), itu akan memakan waktu, dan pakaian juga menjadi kurang." },
                { word: "掃除 (そうじ)", meaning: "Membersihkan", sentence: "ルームメイトは掃除をしないので、部屋が汚くて困っています。", meaningSentence: "Karena teman serumah tidak membersihkan kamar, saya kesulitan karena kamarnya kotor." },
                { word: "不便 (ふべん)", meaning: "Tidak praktis / Menyulitkan", sentence: "最近は、洗濯機が動かなくて不便です。", meaningSentence: "Akhir-akhir ini tidak praktis karena mesin cucinya tidak menyala." },
                { word: "節約 (せつやく)", meaning: "Berhemat", sentence: "それまで、節約をしながら、毎日少しずつ頑張ろうと思います。", meaningSentence: "Sampai saat itu tiba, saya berniat untuk terus berusaha setiap hari sambil berhemat." },
                { word: "電気 (でんき)", meaning: "Listrik", sentence: "ルームメイトが電気を消さなくて、電気代が高いです。", meaningSentence: "Teman serumah tidak mematikan lampu (listrik), sehingga tagihan listriknya mahal." },
                { word: "電気代 (でんきだい)", meaning: "Biaya listrik", sentence: "最近は電気代も高くなりました。", meaningSentence: "Akhir-akhir ini biaya listrik juga menjadi mahal." },
                { word: "契約 (けいやく)", meaning: "Kontrak / Perjanjian", sentence: "今は新しい契約について調べています。", meaningSentence: "Saat ini saya sedang mencari tahu tentang kontrak yang baru." },
                { word: "一人暮らし (ひとりぐらし)", meaning: "Tinggal sendiri", sentence: "来年は新しいアパートを借りて、一人暮らしをする予定です。", meaningSentence: "Tahun depan saya berencana menyewa apartemen baru dan tinggal sendiri." },
                { word: "予定 (よてい)", meaning: "Rencana", sentence: "来年は新しいアパートを借りて、一人暮らしをする予定です。", meaningSentence: "Tahun depan saya berencana menyewa apartemen baru dan tinggal sendiri." },
                { word: "確認 (かくにん)", meaning: "Memeriksa / Memastikan", sentence: "私は心配なので、寝る前に必ず三回ぐらい鍵を確認します。", meaningSentence: "Karena khawatir, saya selalu memastikan kuncinya sekitar tiga kali sebelum tidur." },
                { word: "心配 (しんぱい)", meaning: "Khawatir", sentence: "私は心配なので、寝る前に必ず三回ぐらい鍵を確認します。", meaningSentence: "Karena khawatir, saya selalu memastikan kuncinya sekitar tiga kali sebelum tidur." },
                { word: "探す (さがす)", meaning: "Mencari", sentence: "「ごめん。また探してみる。」", meaningSentence: "\"Maaf. Nanti aku coba cari lagi.\"" },
                { word: "借りる (かりる)", meaning: "Menyewa / Meminjam", sentence: "来年は新しいアパートを借りて、一人暮らしをする予定です。", meaningSentence: "Tahun depan saya berencana menyewa apartemen baru dan tinggal sendiri." },
                { word: "頑張る (がんばる)", meaning: "Berusaha keras", sentence: "「いいえ。最近、ちょっとイライラしています。でも、できるだけ頑張ります。」", meaningSentence: "\"Tidak. Akhir-akhir ini saya agak sedikit kesal. Tetapi, saya akan berusaha keras semampu saya.\"" }
            ]
},
{
            date: "17 Juli 2026",
            title: "喉の問題<br>(Masalah Tenggorokan)",
            readingText: `<ruby>ある日<rt>あるひ</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>喉<rt>のど</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くて、<ruby>鼻水<rt>はなみず</rt></ruby>も出ました。<ruby>咳<rt>せき</rt></ruby>もひどかったので、<ruby>病院<rt>びょういん</rt></ruby>へ行くことにしました。

病院の前に<ruby>車<rt>くるま</rt></ruby>を<ruby>止め<rt>とめ</rt></ruby>て、<ruby>受付<rt>うけつけ</rt></ruby>で<ruby>処方箋<rt>しょほうせん</rt></ruby>を見せました。受付の人が「<ruby>生年月日<rt>せいねんがっぴ</rt></ruby>を書いてください」と言ったので、すぐに書きました。

そのあと<ruby>看護師<rt>かんごし</rt></ruby>さんが、
「では、まず<ruby>体温<rt>たいおん</rt></ruby>を<ruby>測<rt>はか</rt></ruby>りましょう。」
と言いました。<ruby>検査<rt>けんさ</rt></ruby>の前に<ruby>血圧<rt>けつあつ</rt></ruby>も測りました。

<ruby>先生<rt>せんせい</rt></ruby>が来て、
「喉が痛いですか。まだ<ruby>痒<rt>かゆ</rt></ruby>いですか。」
と聞きました。
私は、
「はい。<ruby>昨日<rt>きのう</rt></ruby>から鼻水が出ます。喉が痛くて、ひどい咳も出ます。<ruby>薬<rt>くすり</rt></ruby>を飲んだけど、あまり<ruby>効<rt>き</rt></ruby>きませんでした。」
と答えました。

先生は、
「<ruby>花<rt>はな</rt></ruby>のアレルギーかもしれませんね。では、検査を受けましょう。<ruby>結果<rt>けっか</rt></ruby>を待ってください。」
と言いました。

少し待つと、検査の結果が出ました。先生は、
「大きな問題はありません。この新しい薬はよく効きます。<ruby>痛み止め<rt>いたみどめ</rt></ruby>も出しますので、毎日飲んでください。はちみつは喉にいいでしょう。」
と説明してくれました。

私は、
「薬を飲まなくても大丈夫ですか。」
と聞くと、先生は、
「いいえ、それでは良くなりません。薬を飲んでください。<ruby>来週<rt>らいしゅう</rt></ruby>もう一度検査を受けられますか。」
と言いました。

私は、
「はい、大丈夫です。受けます。<ruby>診察<rt>しんさつ</rt></ruby>の後に質問してもいいですか。」
と聞きました。
先生は、
「もちろんです。何でも聞いてください。」
と優しく答えてくれました。

診察が終わった後、<ruby>薬局<rt>やっきょく</rt></ruby>で薬をもらいました。<ruby>薬剤師<rt>やくざいし</rt></ruby>さんが、
「この薬は処方箋が必要です。<ruby>食後<rt>しょくご</rt></ruby>に飲んでください。」
と説明してくれました。

家に帰って薬を飲むと、少しずつ喉の痛みがよくなりました。来週の検査まで、ゆっくり休んで体を大切にしたいと思います。`,
            questions: [
                { q: "私はどうして病院へ行くことにしましたか。", options: ["A. 頭が痛くて熱があったから", "B. 喉が痛くて咳もひどかったから", "C. お腹が痛かったから"], correct: 1 },
                { q: "受付の人に何を書くように言われましたか。", options: ["A. 住所と電話番号", "B. 会社の名前", "C. 生年月日"], correct: 2 },
                { q: "看護師さんは最初に何を測りましたか。", options: ["A. 体温", "B. 身長", "C. 体重"], correct: 0 },
                { q: "先生は喉に何がいいと言いましたか。", options: ["A. 冷たいお茶", "B. はちみつ", "C. コーヒー"], correct: 1 },
                { q: "薬局で誰が薬について説明してくれましたか。", options: ["A. 看護師さん", "B. 先生", "C. 薬剤師さん"], correct: 2 }
            ],
            essayQuestions: [
                { q: "昨日からどんな症状が出ていましたか。", a: "鼻水が出て、喉が痛くて、ひどい咳も出ていました。" },
                { q: "先生は何のアレルギーかもしれないと言いましたか。", a: "花のアレルギーかもしれないと言いました。" },
                { q: "診察が終わった後、どこで薬をもらいましたか。", a: "薬局で薬をもらいました。" },
                { q: "薬剤師さんは薬をいつ飲むように言いましたか。", a: "食後に飲むように言いました。" }
            ],
            vocabulary: [
                { word: "喉 (のど)", meaning: "Tenggorokan", sentence: "ある日、私は喉が痛くて、鼻水も出ました。", meaningSentence: "Suatu hari, tenggorokan saya sakit dan ingus juga keluar." },
                { word: "問題 (もんだい)", meaning: "Masalah", sentence: "先生は、「大きな問題はありません」と説明してくれました。", meaningSentence: "Dokter menjelaskan, \"Tidak ada masalah besar.\"" },
                { word: "薬 (くすり)", meaning: "Obat", sentence: "薬を飲んだけど、あまり効きませんでした。", meaningSentence: "Saya sudah minum obat, tetapi tidak terlalu mempan." },
                { word: "処方箋 (しょほうせん)", meaning: "Resep dokter", sentence: "病院の前に車を止めて、受付で処方箋を見せました。", meaningSentence: "Saya memarkirkan mobil di depan rumah sakit, lalu menunjukkan resep dokter di resepsionis." },
                { word: "薬局 (やっきょく)", meaning: "Apotek", sentence: "診察が終わった後、薬局で薬をもらいました。", meaningSentence: "Setelah pemeriksaan selesai, saya menerima obat di apotek." },
                { word: "薬剤師 (やくざいし)", meaning: "Apoteker", sentence: "薬局で薬をもらうと、薬剤師さんが説明してくれました。", meaningSentence: "Saat menerima obat di apotek, apoteker memberikan penjelasan kepada saya." },
                { word: "鼻水 (はなみず)", meaning: "Ingus / Air hidung", sentence: "はい。昨日から鼻水が出ます。", meaningSentence: "Ya. Sejak kemarin ingus saya keluar." },
                { word: "咳 (せき)", meaning: "Batuk", sentence: "咳もひどかったので、病院へ行くことにしました。", meaningSentence: "Karena batuknya juga parah, saya memutuskan untuk pergi ke rumah sakit." },
                { word: "体温 (たいおん)", meaning: "Suhu tubuh", sentence: "「では、まず体温を測りましょう。」", meaningSentence: "\"Kalau begitu, mari kita ukur suhu tubuh terlebih dahulu.\"" },
                { word: "検査 (けんさ)", meaning: "Pemeriksaan / Tes medis", sentence: "「では、検査を受けましょう。結果を待ってください。」", meaningSentence: "\"Kalau begitu, mari kita lakukan pemeriksaan. Silakan tunggu hasilnya.\"" },
                { word: "結果 (けっか)", meaning: "Hasil", sentence: "少し待つと、検査の結果が出ました。", meaningSentence: "Setelah menunggu sebentar, hasil pemeriksaan pun keluar." },
                { word: "生年月日 (せいねんがっぴ)", meaning: "Tanggal lahir", sentence: "受付の人が「生年月日を書いてください」と言いました。", meaningSentence: "Petugas resepsionis berkata, \"Silakan tulis tanggal lahir Anda.\"" },
                { word: "止める (とめる)", meaning: "Memarkirkan / Menghentikan", sentence: "病院の前に車を止めて、受付で処方箋を見せました。", meaningSentence: "Saya memarkirkan mobil di depan rumah sakit, lalu menunjukkan resep dokter di resepsionis." },
                { word: "血圧 (けつあつ)", meaning: "Tekanan darah", sentence: "検査の前に血圧も測りました。", meaningSentence: "Sebelum pemeriksaan, tekanan darah juga diukur." },
                { word: "痛み止め (いたみどめ)", meaning: "Obat pereda nyeri / Painkiller", sentence: "「痛み止めも出しますので、毎日飲んでください。」", meaningSentence: "\"Saya juga akan memberikan obat pereda nyeri, jadi silakan diminum setiap hari.\"" },
                { word: "効く (きく)", meaning: "Manjur / Berkhasiat / Mempan", sentence: "この新しい薬はよく効きます。", meaningSentence: "Obat baru ini sangat manjur." },
                { word: "はちみつ", meaning: "Madu", sentence: "「はちみつは喉にいいでしょう。」", meaningSentence: "\"Madu sepertinya akan bagus untuk tenggorokan.\"" },
                { word: "型い (かゆい)", meaning: "Gatal", sentence: "「喉が痛いですか。まだ痒いですか。」", meaningSentence: "\"Apakah tenggorokan Anda sakit? Apakah masih gatal?\"" },
                { word: "診察 (しんさつ)", meaning: "Pemeriksaan dokter", sentence: "「診察の後に質問してもいいですか。」", meaningSentence: "\"Bolehkah saya bertanya setelah pemeriksaan dokter?\"" },
                { word: "病院 (びょういん)", meaning: "Rumah sakit", sentence: "咳もひどかったので、病院へ行くことにしました。", meaningSentence: "Karena batuknya juga parah, saya memutuskan untuk pergi ke rumah sakit." },
                { word: "受付 (うけつけ)", meaning: "Loket pendaftaran / Resepsionis", sentence: "病院の前に車を止めて、受付で処方箋を見せました。", meaningSentence: "Saya memarkirkan mobil di depan rumah sakit, lalu menunjukkan resep dokter di resepsionis." },
                { word: "測る (はかる)", meaning: "Mengukur", sentence: "検査の前に血圧も測りました。", meaningSentence: "Sebelum pemeriksaan, tekanan darah juga diukur." },
                { word: "昨日から (きのうから)", meaning: "Sejak kemarin", sentence: "はい。昨日から鼻水が出ます。", meaningSentence: "Ya. Sejak kemarin ingus saya keluar." },
                { word: "来週 (らいしゅう)", meaning: "Minggu depan", sentence: "「来週もう一度検査を受けられますか。」", meaningSentence: "\"Apakah Anda bisa menerima pemeriksaan sekali lagi minggu depan?\"" },
                { word: "大丈夫 (だいじょうぶ)", meaning: "Tidak apa-apa / Baik-baik saja", sentence: "「はい、大丈夫です。受けます。」", meaningSentence: "\"Ya, tidak apa-apa. Saya akan menerimanya.\"" },
                { word: "食後 (しょくご)", meaning: "Setelah makan", sentence: "「この薬は処方箋が必要です。食後に飲んでください。」", meaningSentence: "\"Obat ini memerlukan resep dokter. Silakan diminum setelah makan.\"" },
                { word: "良くなる (よくなる)", meaning: "Membaik / Menjadi sembuh", sentence: "家に帰って薬を飲むと、少しずつ喉の痛みがよくなりました。", meaningSentence: "Setelah pulang ke rumah dan minum obat, perlahan-lhes rasa sakit di tenggorokan membaik." },
                { word: "看護師 (かんごし)", meaning: "Perawat / Suster", sentence: "そのあと看護師さんが、「では、まず体温を測りましょう」と言いました。", meaningSentence: "Setelah itu perawat berkata, \"Kalau begitu, mari kita ukur suhu tubuh terlebih dahulu.\"" }
            ]
},
{
            date: "21 Juli 2026",
            title: "ゴールデンウィーク<br>(Golden Week)",
            readingText: `<ruby>春<rt>はる</rt></ruby>の<ruby>終<rt>お</rt></ruby>わりになると、<ruby>日本<rt>にほん</rt></ruby>では<ruby>一番<rt>いちばん</rt></ruby><ruby>長<rt>なが</rt></ruby>い<ruby>連休<rt>れんきゅう</rt></ruby>であるゴールデンウィークがあります。ゴールデンウィークは4<ruby>月<rt>がつ</rt></ruby>の終わりから5月の<ruby>初<rt>はじ</rt></ruby>めまでです。<ruby>祝日<rt>しゅくじつ</rt></ruby>がたくさんあるので、<ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>が<ruby>旅行<rt>りょこう</rt></ruby>をしたり、<ruby>家族<rt>かぞく</rt></ruby>と<ruby>過<rt>す</rt></ruby>ごしたりします。

<ruby>私<rt>わたし</rt></ruby>は<ruby>今年<rt>ことし</rt></ruby>のゴールデンウィークに<ruby>休<rt>やす</rt></ruby>みを<ruby>取<rt>と</rt></ruby>って、家族と旅行をしました。<ruby>父<rt>ちち</rt></ruby>が休みを取りますので、<ruby>一緒<rt>いっしょ</rt></ruby>に旅行しました。<ruby>久<rt>ひさ</rt></ruby>しぶりに<ruby>実家<rt>じっか</rt></ruby>へ<ruby>帰<rt>かえ</rt></ruby>って、父や<ruby>母<rt>はは</rt></ruby>、<ruby>兄<rt>あに</rt></ruby>、<ruby>妹<rt>いもうと</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いました。久しぶりに父に会えて、とても<ruby>嬉<rt>うれ</rt></ruby>しかったです。実家は<ruby>賑<rt>にぎ</rt></ruby>やかで<ruby>楽<rt>たの</rt></ruby>しく、家族と過ごす<ruby>時間<rt>じかん</rt></ruby>は<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>幸<rt>しあわ</rt></ruby>せでした。

5<ruby>月<rt>がつ</rt></ruby>5<ruby>日<rt>にち</rt></ruby>は<ruby>子供<rt>こども</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>です。<ruby>公園<rt>こうえん</rt></ruby>にはたくさんの<ruby>鯉<rt>こい</rt></ruby>のぼりが<ruby>空<rt>そら</rt></ruby>を<ruby>泳<rt>およ</rt></ruby>いでいました。私は<ruby>友達<rt>ともだち</rt></ruby>と公園へ行って、<ruby>大<rt>おお</rt></ruby>きな鯉のぼりを見ました。
友達が、
「どうして鯉のぼりを<ruby>飾<rt>かざ</rt></ruby>るのですか。」
と<ruby>聞<rt>き</rt></ruby>いたので、私は、
「子供の<ruby>健康<rt>けんこう</rt></ruby>と幸せを<ruby>祈<rt>いの</rt></ruby>るためです。」
と<ruby>答<rt>こた</rt></ruby>えました。

その後、子供たちと一緒に<ruby>折<rt>お</rt></ruby>り<ruby>紙<rt>がみ</rt></ruby>で<ruby>兜<rt>かぶと</rt></ruby>を<ruby>作<rt>つく</rt></ruby>りました。<ruby>侍<rt>さむらい</rt></ruby>の兜は<ruby>強<rt>つよ</rt></ruby>さのシンボルなので、子供の日にく飾られます。

<ruby>午後<rt>ごご</rt></ruby>は兄と一緒に<ruby>広島<rt>ひろしま</rt></ruby>へ行きました。私は広島の<ruby>お好<rt>この</rt></ruby>み<ruby>焼<rt>や</rt></ruby>きが<ruby>大好<rt>だいす</rt></ruby>きなので、とても楽しみにしていました。広島では<ruby>屋台<rt>やたい</rt></ruby>を歩いたり、<ruby>白<rt>しろ</rt></ruby>い<ruby>鳥居<rt>とりい</rt></ruby>を見たりしました。鳥居の<ruby>前<rt>まえ</rt></ruby>で<ruby>写真<rt>しゃしん</rt></ruby>もたくさん<ruby>撮<rt>と</rt></ruby>りました。

兄が、
「どの<ruby>県<rt>けん</rt></ruby>が一番好きですか。」
と聞いたので、
「私は広島が一番好きです。」
と答えました。

旅行はとても楽しくて、帰る時間になると、
「まだ帰りたくないなあ。」
と思いました。

連休の終わりは少し<ruby>寂<rt>さび</rt></ruby>しかったですが、久しぶりに家族と会って、たくさん話して、とても幸せな時間を過ごすことができました。`,
            questions: [
                { q: "ゴールデンウィークはいつからいつまでですか。", options: ["A. 1月の初めから終わりまで", "B. 4月の終わりから5月の初めまで", "C. 8月の終わりから"], correct: 1 },
                { q: "どうして鯉のぼりを飾りますか。", options: ["A. 魚が好きだから", "B. 子供の健康と幸せを祈るため", "C. 広島のお土産だから"], correct: 1 },
                { q: "折り紙で何を作りましたか。", options: ["A. 兜", "B. 鯉", "C. 鳥居"], correct: 0 },
                { q: "広島で何を食べましたか。", options: ["A. 寿司", "B. ラーメン", "C. お好み焼き"], correct: 2 },
                { q: "旅行の終わりに私はどう思いましたか。", options: ["A. 早く帰りたい", "B. まだ帰りたくない", "C. 旅行は嫌いだ"], correct: 1 }
            ],
            essayQuestions: [
                { q: "ゴールデンウィークに多くの人が旅行をするのはなぜですか。", a: "祝日がたくさんあるからです。" },
                { q: "実家で誰に会いましたか。", a: "父、母、兄、妹に会いました。" },
                { q: "侍の兜は何のシンボルですか。", a: "強さのシンボルです。" },
                { q: "広島ではどんなことをしましたか。", a: "屋台を歩いたり、白い鳥居を見たり、写真を撮ったりしました。" }
            ],
            vocabulary: [
                { word: "連休 (れんきゅう)", meaning: "Libur panjang / Libur berurutan", sentence: "春の終わりになると、日本では一番長い連休であるゴールデンウィークがあります。", meaningSentence: "Ketika musim semi berakhir, di Jepang ada libur panjang terpanjang yaitu Golden Week." },
                { word: "春 (はる)", meaning: "Musim semi", sentence: "春の終わりになると、日本では一番長い連休であるゴールデンウィークがあります。", meaningSentence: "Ketika musim semi berakhir, di Jepang ada libur panjang terpanjang yaitu Golden Week." },
                { word: "祝日 (しゅくじつ)", meaning: "Hari libur nasional", sentence: "祝日があるから、多くの人が旅行をしたり、家族と過ごしたりします。", meaningSentence: "Karena ada hari libur nasional, banyak orang melakukan perjalanan atau menghabiskan waktu bersama keluarga." },
                { word: "子供の日 (こどものひ)", meaning: "Hari Anak", sentence: "5月5日は子供の日です。", meaningSentence: "Tanggal 5 Mei adalah Hari Anak." },
                { word: "鯉のぼり (こいのぼり)", meaning: "Koinobori (bendera koi)", sentence: "公園にはたくさんの鯉のぼりが空を泳いでいました。", meaningSentence: "Di taman, ada banyak koinobori yang berkibar (seolah berenang) di langit." },
                { word: "健康 (けんこう)", meaning: "Kesehatan", sentence: "子供の健康と幸せを祈るためです。", meaningSentence: "Untuk mendoakan kesehatan dan kebahagiaan anak-anak." },
                { word: "幸せ (しあわせ)", meaning: "Kebahagiaan", sentence: "実家は賑やかで楽しく、家族と過ごす時間は本当に幸せでした。", meaningSentence: "Rumah orang tua ramah dan menyenangkan, waktu yang dihabiskan bersama keluarga sungguh sebuah kebahagiaan." },
                { word: "祈る (いのる)", meaning: "Berdoa", sentence: "子供の健康と幸せを祈るためです。", meaningSentence: "Untuk mendoakan kesehatan dan kebahagiaan anak-anak." },
                { word: "侍 (さむらい)", meaning: "Samurai", sentence: "侍の兜は強さのシンボルなので、子供の日によく飾られます。", meaningSentence: "Karena helm samurai adalah simbol kekuatan, barang ini sering dipajang pada Hari Anak." },
                { word: "兜 (かぶと)", meaning: "Helm samurai", sentence: "その後、子供たちと一緒に折り紙で兜を作りました。", meaningSentence: "Setelah itu, saya membuat helm samurai dari origami bersama anak-anak." },
                { word: "折り紙 (おりがみ)", meaning: "Origami", sentence: "その後、子供たちと一緒に折り紙で兜を作りました。", meaningSentence: "Setelah itu, saya membuat helm samurai dari origami bersama anak-anak." },
                { word: "実家 (じっか)", meaning: "Rumah orang tua (asal)", sentence: "久しぶりに実家へ帰って、父や母、兄、妹に会いました。", meaningSentence: "Setelah sekian lama, saya pulang ke rumah orang tua dan bertemu ayah, ibu, kakak laki-laki, serta adik perempuan." },
                { word: "久しぶり (ひさしぶり)", meaning: "Setelah sekian lama", sentence: "久しぶりに実家へ帰って、父や母、兄、妹に会いました。", meaningSentence: "Setelah sekian lama, saya pulang ke rumah orang tua dan bertemu ayah, ibu, kakak laki-laki, serta adik perempuan." },
                { word: "賑やか (にぎやか)", meaning: "Ramai / Meriah", sentence: "実家は賑やかで楽しく、家族と過ごす時間は本当に幸せでした。", meaningSentence: "Rumah orang tua ramai dan menyenangkan, waktu yang dihabiskan bersama keluarga sungguh sebuah kebahagiaan." },
                { word: "広島 (ひろしま)", meaning: "Hiroshima", sentence: "午後は兄と一緒に広島へ行きました。", meaningSentence: "Sore harinya saya pergi ke Hiroshima bersama kakak laki-laki." },
                { word: "屋台 (やたい)", meaning: "Kios makanan / Kaki lima", sentence: "広島では屋台を歩いたり、白い鳥居を見たりしました。", meaningSentence: "Di Hiroshima, kami berjalan-jalan di area kios makanan dan melihat gerbang torii berwarna putih." },
                { word: "お好み焼き (おこのみやき)", meaning: "Okonomiyaki", sentence: "私は広島のお好み焼きが大好きなので、とても楽しみにしていました。", meaningSentence: "Karena saya sangat menyukai okonomiyaki khas Hiroshima, saya sangat menantikannya." },
                { word: "鳥居 (とりい)", meaning: "Torii (gerbang kuil)", sentence: "広島では屋台を歩いたり、白い鳥居を見たりしました。", meaningSentence: "Di Hiroshima, kami berjalan-jalan di area kios makanan dan melihat gerbang torii berwarna putih." },
                { word: "撮る (とる)", meaning: "Mengambil (foto)", sentence: "鳥居の前で写真もたくさん撮りました。", meaningSentence: "Kami juga mengambil banyak foto di depan gerbang torii." },
                { word: "飾る (かざる)", meaning: "Menghias / Memajang", sentence: "「どうして鯉のぼりを飾るのですか。」", meaningSentence: "\"Mengapa memajang koinobori?\"" },
                { word: "寂しい (さびしい)", meaning: "Sedih / Sepi", sentence: "連休の終わりは少し寂しかったです。", meaningSentence: "Akhir libur panjang terasa sedikit sedih." },
                { word: "過ごす (すごす)", meaning: "Menghabiskan (waktu)", sentence: "久しぶりに家族と会って、たくさん話して、とても幸せな時間を過ごすことができました。", meaningSentence: "Setelah sekian lama, saya bisa bertemu keluarga, berbincang banyak hal, dan menghabiskan waktu yang sangat membahagiakan." }
            ]
},
{
            date: "23 Juli 2026",
            title: "ショッピングモールで楽しい一日<br>(Hari yang Menyenangkan di Pusat Perbelanjaan)",
            readingText: `<ruby>今日<rt>きょう</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>とショッピングモールへ<ruby>行<rt>い</rt></ruby>きました。まず、<ruby>映画館<rt>えいがかん</rt></ruby>に<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>に行きました。映画はとても<ruby>面白<rt>おもしろ</rt></ruby>かったので、<ruby>最後<rt>さいご</rt></ruby>までゆっくり見ました。

映画を見た後、お<ruby>腹<rt>なか</rt></ruby>が<ruby>空<rt>す</rt></ruby>いたのでフードコートに<ruby>昼<rt>ひる</rt></ruby>ご飯を食べに行きました。<ruby>私<rt>わたし</rt></ruby>はカレーを食べて、友達はハンバーガーを<ruby>注文<rt>ちゅうもん</rt></ruby>しました。

昼ご飯の後、私は<ruby>大好<rt>だいす</rt></ruby>かないちごのクレープを食べました。
友達が、
「どのクレープが<ruby>一番<rt>いちばん</rt></ruby><ruby>人気<rt>にんき</rt></ruby>ですか。」
と聞くと、<ruby>店員<rt>てんいん</rt></ruby>さんは、
「いちごのクレープが一番人気ですよ。」
と<ruby>答<rt>こた</rt></ruby>えました。
私は、
「クレープが大好きです。」
と言って、すぐに<ruby>買<rt>か</rt></ruby>いました。

そのあと、デパートへ<ruby>服<rt>ふく</rt></ruby>を見に行きました。
<ruby>店<rt>みせ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>には「<ruby>閉店<rt>へいてん</rt></ruby>のお<ruby>知<rt>し</rt></ruby>らせ」が<ruby>貼<rt>は</rt></ruby>ってありました。
友達が、
「へー、いいね。でも今日はまだ<ruby>開<rt>あ</rt></ruby>いていますね。」
と言いました。

私はかわいいジャケットを<ruby>見<rt>み</rt></ruby>つけましたが、
「すみません、<ruby>試着室<rt>しちゃくしつ</rt></ruby>はどこですか。」
と店員さんに<ruby>聞<rt>き</rt></ruby>きました。
店員さんは、
「あちらですよ。」
と<ruby>教<rt>おし</rt></ruby>えてくれました。
試着室はとてもきれいだったので、<ruby>気持<rt>きも</rt></ruby>ちよく服を<ruby>着<rt>き</rt></ruby>てみました。
私は、
「この服を着てみます。」
と言いました。
でも、サイズが少し<ruby>大<rt>おお</rt></ruby>きかったので、
「サイズがちょっと大きいので、もう少し<ruby>考<rt>かんが</rt></ruby>えます。」
と答えました。

その後、ユニセックスのアクセサリーを見に行きました。<ruby>デザイン<rt>でざいん</rt></ruby>はとてもおしゃれでしたが、<ruby>同<rt>おな</rt></ruby>じデザインの<ruby>商品<rt>しょうひん</rt></ruby>はもうありませんでした。

友達が、
「ついでにセールの<ruby>靴<rt>くつ</rt></ruby>も見ましょう。」
と言ったので、<ruby>一緒<rt>いっしょ</rt></ruby>に靴<ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>へ行きました。
セールでは、「50パーセント<ruby>引<rt>び</rt></ruby>き」や「5パーセント引き」の商品がたくさんありました。

私はズボンを一つ<ruby>選<rt>えら</rt></ruby>びました。
レジで店員さんが、
「<ruby>全<rt>ぜん</rt></ruby>ぶで<ruby>税込<rt>ぜいこ</rt></ruby>み3,500<ruby>円<rt>えん</rt></ruby>になります。」
と言いました。

私はATMへ行って、
「お<ruby>金<rt>かね</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しますから、ちょっと待ってください。」
と言いました。

<ruby>模<rt>も</rt></ruby>どってきて、
「<ruby>小銭<rt>こぜに</rt></ruby>で<ruby>払<rt>はら</rt></ruby>ってもいいですか。」
と聞くと、
「はい、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですよ。」
と言われました。

<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>が終わった後、友達が、
「今日はどうだった。」
と聞きました。
私は、
「映画も見られたし、クレープも食べられたし、服も買えたので、とても楽しかったです。」
と答えました。

<ruby>本当<rt>ほんとう</rt></ruby>に楽しい<ruby>一日<rt>いちにち</rt></ruby>でした。`,
            questions: [
                { q: "映画を見た後、どこへ昼ご飯を食べに行きましたか。", options: ["A. レストラン", "B. フードコート", "C. カフェ"], correct: 1 },
                { q: "一番人気のクレープは何ですか。", options: ["A. バナナのクレープ", "B. チョコのクレープ", "C. いちごのクレープ"], correct: 2 },
                { q: "ジャケットを購入するのをやめた理由は何ですか。", options: ["A. サイズが少し大きかったから", "B. 色が好きじゃなかったから", "C. 値段が高すぎたから"], correct: 0 },
                { q: "レジで全部でいくらになりましたか。", options: ["A. 2,500円", "B. 3,500円", "C. 5,000円"], correct: 1 },
                { q: "お金を払う時、何で払ってもいいか聞きましたか。", options: ["A. クレジットカード", "B. 小銭", "C. 電子マネー"], correct: 1 }
            ],
            essayQuestions: [
                { q: "フードコートで私と友達はそれぞれ何を注文しましたか。", a: "私はカレーを食べて、友達はハンバーガーを注文しました。" },
                { q: "デパートの店の前には何が貼ってありましたか。", a: "「閉店のお知らせ」が貼ってありました。" },
                { q: "お金を引き出すためにどこへ行きましたか。", a: "ATMへ行きました。" },
                { q: "どうして「とても楽しかった」と言いましたか。", a: "映画も見られたし、クレープも食べられたし、服も買えたからです。" }
            ],
            vocabulary: [
                { word: "クレープ", meaning: "Kue krep (Crepe)", sentence: "昼ご飯の後、私は大好きないちごのクレープを食べました。", meaningSentence: "Setelah makan siang, saya makan crepe stroberi kesukaan saya." },
                { word: "映画 (えいが)", meaning: "Film", sentence: "映画館に映画を見に行きました。", meaningSentence: "Saya pergi ke bioskop untuk menonton film." },
                { word: "映画館 (えいがかん)", meaning: "Bioskop", sentence: "まず、映画館に映画を見に行きました。", meaningSentence: "Pertama-tama, saya pergi ke bioskop untuk menonton film." },
                { word: "フードコート", meaning: "Pujasera (Food court)", sentence: "お腹が空いたのでフードコートに昼ご飯を食べに行きました。", meaningSentence: "Karena lapar, kami pergi ke food court untuk makan siang." },
                { word: "メニュー", meaning: "Menu", sentence: "フードコートでメニューを見て、何を食べるか決めました。", meaningSentence: "Kami melihat menu di food court lalu memutuskan apa yang akan dimakan." },
                { word: "昼ご飯 (ひるごはん)", meaning: "Makan siang", sentence: "お腹が空いたのでフードコートに昼ご飯を食べに行きました。", meaningSentence: "Karena lapar, kami pergi ke food court untuk makan siang." },
                { word: "店員 (てんいん)", meaning: "Pegawai toko / Pelayan", sentence: "店員さんは、「いちごのクレープが一番人気ですよ。」と答えました。", meaningSentence: "Pegawai toko menjawab, \"Crepe stroberi adalah yang paling populer.\"" },
                { word: "閉店 (へいてん)", meaning: "Tutup toko", sentence: "店の前には「閉店のお知らせ」が貼ってありました。", meaningSentence: "Di depan toko tertempel \"Pengumuman Penutupan Toko\"." },
                { word: "お知らせ (おしらせ)", meaning: "Pengumuman / Pemberitahuan", sentence: "店の前には「閉店のお知らせ」が貼ってありました。", meaningSentence: "Di depan toko tertempel \"Pengumuman Penutupan Toko\"." },
                { word: "ついでに", meaning: "Sekalian / Sambil menyelam minum air", sentence: "「ついでにセールの靴も見ましょう。」と言いました。", meaningSentence: "Dia berkata, \"Sekalian mari kita lihat sepatu yang diskon.\"" },
                { word: "質 (しつ)", meaning: "Kualitas", sentence: "このお店の服は質がとてもいいです。", meaningSentence: "Pakaian di toko ini kualitasnya sangat bagus." },
                { word: "お客さん (おきゃくさん)", meaning: "Pelanggan / Tamu", sentence: "週末のショッピングモールにはたくさんのお客さんがいます。", meaningSentence: "Di akhir pekan, ada banyak pelanggan di pusat perbelanjaan." },
                { word: "静か (しずか)", meaning: "Tenang / Sunyi", sentence: "平日のモールは人も少なくて静かです。", meaningSentence: "Mall di hari kerja sedikit pengunjung dan tenang." },
                { word: "帽子 (ぼうし)", meaning: "Topi", sentence: "服のほかに、かわいい帽子も探していました。", meaningSentence: "Selain pakaian, saya juga mencari topi yang lucu." },
                { word: "デザイン", meaning: "Desain / Rancangan", sentence: "デザインはとてもおしゃれでしたが、同じ商品の在庫はありませんでした。", meaningSentence: "Desainnya sangat modis, tetapi stok barang yang sama sudah tidak ada." },
                { word: "柔らかい (やわらかい)", meaning: "Empuk / Lembut", sentence: "この服の生地はとても柔らかいです。", meaningSentence: "Bahan pakaian ini sangat lembut." },
                { word: "ワンピース", meaning: "Gaun terusan (One-piece)", sentence: "友達は新しいワンピースを選びました。", meaningSentence: "Teman saya memilih gaun terusan baru." },
                { word: "試着室 (しちゃくしつ)", meaning: "Ruang pas / Kamar ganti", sentence: "「すみません、試着室はどこですか。」と店員さんに聞きました。", meaningSentence: "Saya bertanya kepada pegawai toko, \"Permisi, ruang pas ada di mana?\"" },
                { word: "着てみる (きてみる)", meaning: "Mencoba memakai (pakaian)", sentence: "試着室でこの服を着てみました。", meaningSentence: "Saya mencoba memakai pakaian ini di ruang pas." },
                { word: "時計 (とけい)", meaning: "Jam / Jam tangan", sentence: "アクセサリーの売り場で綺麗な時計も見ました。", meaningSentence: "Saya juga melihat jam tangan yang indah di area penjualan aksesori." },
                { word: "アクセサリー", meaning: "Aksesori / Perhiasan", sentence: "その後、ユニセックスのアクセサリーを見に行きました。", meaningSentence: "Setelah itu, kami pergi melihat aksesori uniseks." },
                { word: "靴 (くつ)", meaning: "Sepatu", sentence: "「ついでにセールの靴も見ましょう。」と言いました。", meaningSentence: "Dia berkata, \"Sekalian mari kita lihat sepatu yang diskon.\"" },
                { word: "デパート", meaning: "Toko serba ada (Department store)", sentence: "そのあと、デパートへ服を見に行きました。", meaningSentence: "Setelah itu, kami pergi ke department store untuk melihat-lihat pakaian." },
                { word: "商店街 (しょうてんがい)", meaning: "Kawasan pertokoan / Pasar", sentence: "モールの近くには賑やかな商店街もあります。", meaningSentence: "Di dekat mall juga ada kawasan pertokoan yang ramai." },
                { word: "見つける (みつける)", meaning: "Menemukan", sentence: "私はかわいいジャケットを見つけました。", meaningSentence: "Saya menemukan jaket yang lucu." },
                { word: "間違える (まちがえる)", meaning: "Salah / Keliru", sentence: "サイズを間違えないように気をつけて選びました。", meaningSentence: "Saya memilih dengan hati-hati agar tidak salah ukuran." },
                { word: "引き出す (ひきだす)", meaning: "Menarik (uang)", sentence: "ATMへ行って、お金を引き出します。", meaningSentence: "Saya pergi ke ATM untuk menarik uang." },
                { word: "同じ (おなじ)", meaning: "Sama", sentence: "同じデザインの商品はもうありませんでした。", meaningSentence: "Barang dengan desain yang sama sudah tidak ada lagi." },
                { word: "ユニセックス", meaning: "Uniseks (untuk pria & wanita)", sentence: "ユニセックスのアクセサリーを見に行きました。", meaningSentence: "Kami pergi melihat aksesori uniseks." },
                { word: "中古店 (ちゅうこてん)", meaning: "Toko barang bekas", sentence: "モールの中に古い本を売る中古店もありました。", meaningSentence: "Di dalam mall juga ada toko barang bekas yang menjual buku-buku lama." },
                { word: "探す (さがす)", meaning: "Mencari", sentence: "自分に合う服を探すのは楽しいです。", meaningSentence: "Mencari pakaian yang cocok untuk diri sendiri itu menyenangkan." },
                { word: "サイズ", meaning: "Ukuran", sentence: "サイズが少し大きかったので、購入を諦めました。", meaningSentence: "Karena ukurannya sedikit agak besar, saya batal membelinya." },
                { word: "色 (いろ)", meaning: "Warna", sentence: "このジャケットの色とデザインが好きです。", meaningSentence: "Saya suka warna dan desain jaket ini." },
                { word: "人気 (にんき)", meaning: "Populer / Dikenal luas", sentence: "いちごのクレープが一番人気ですよ。", meaningSentence: "Crepe stroberi adalah yang paling populer." },
                { word: "ジャケット", meaning: "Jaket", sentence: "私はかわいいジャケットを見つけました。", meaningSentence: "Saya menemukan jaket yang lucu." },
                { word: "試着 (しちゃく)", meaning: "Mencoba pakaian", sentence: "買う前に試着をしてサイズを確認します。", meaningSentence: "Sebelum membeli, saya mencoba pakaian untuk memastikan ukurannya." },
                { word: "レジ", meaning: "Kasir", sentence: "レジで店員さんが「全部で税込3,500円になります」と言いました。", meaningSentence: "Di kasir pegawai toko berkata, \"Totalnya menjadi 3.500 yen termasuk pajak.\"" },
                { word: "ATM", meaning: "Mesin ATM", sentence: "お金が足りなかったので、ATMへ行って引き出しました。", meaningSentence: "Karena uangnya kurang, saya pergi ke ATM dan menarik uang." },
                { word: "税込み (ぜいこみ)", meaning: "Termasuk pajak", sentence: "全部で税込み3,500円になります。", meaningSentence: "Totalnya menjadi 3.500 yen termasuk pajak." },
                { word: "小銭 (こぜに)", meaning: "Uang receh / Uang koin", sentence: "小銭で払ってもいいですか。", meaningSentence: "Apakah boleh membayar dengan uang koin?" },
                { word: "会計 (かいけい)", meaning: "Pembayaran / Kasir", sentence: "レジでお会計を済ませました。", meaningSentence: "Saya menyelesaikan pembayaran di kasir." },
                { word: "セール", meaning: "Obral / Diskon", sentence: "セールではたくさんの商品が安くなっていました。", meaningSentence: "Di acara diskon, banyak barang menjadi murah." },
                { word: "割引 (わりびき)", meaning: "Potongan harga", sentence: "セールで割引されている服を選びました。", meaningSentence: "Saya memilih pakaian yang mendapat potongan harga saat diskon." },
                { word: "50パーセント引き (ごじゅっぱーせんとびき)", meaning: "Diskon 50%", sentence: "セールでは「50パーセント引き」の商品がたくさんありました。", meaningSentence: "Saat diskon, ada banyak barang dengan diskon 50%." },
                { word: "選ぶ (えらぶ)", meaning: "Memilih", sentence: "私は気に入ったズボンを一つ選びました。", meaningSentence: "Saya memilih satu celana panjang yang saya sukai." },
                { word: "考える (かんがえる)", meaning: "Berpikir / Mempertimbangkan", sentence: "「サイズがちょっと大きいので、もう少し考えます。」と答えました。", meaningSentence: "Saya menjawab, \"Ukuran ini agak sedikit besar, jadi saya akan mempertimbangkannya sebentar lagi.\"" },
                { word: "払う (はらう)", meaning: "Membayar", sentence: "レジでお金を払って買い物を終えました。", meaningSentence: "Saya membayar uang di kasir dan menyelesaikan belanja." }
            ]
}
        
    ];

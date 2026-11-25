// 6. Sınıf 3. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "3. Öğrenme Alanı: Ortak Mirasımız",
    tabs: [
      { t: "Konular", html: `
        <div class="two">
          <div><b>Türkistan'da kurulan ilk Türk devletlerinin medeniyetimize katkıları</b>Asya Hun, Göktürk ve Uygur devletleri; kurultay, töre, onlu sistem, Orhun Kitabeleri.</div>
          <div><b>VII-XIII. yüzyıllarda İslam medeniyetinin ortak mirasa katkıları</b>Hz. Muhammed, Dört Halife, Emeviler ve Abbasiler dönemi; Beytülhikme, eğitim, bilim, hukuk, sanat ve mimari.</div>
          <div><b>İslamiyet'in kabulüyle Türklerin sosyal ve kültürel hayatındaki değişimler</b>Karahanlılar, Gazneliler, Büyük Selçuklular; Kutadgu Bilig ve Divanü Lügati't-Türk.</div>
          <div><b>XI-XIII. yüzyıllarda askerî mücadeleler ve Anadolu'nun Türkleşmesi</b>Pasinler, Malazgirt, Miryokefalon; ilk Türk beylikleri, Haçlı Saldırıları, Selçuklu eserleri.</div>
        </div>` },
      { t: "Bu alanda neler yapacağız?", html: `
        <ul>
          <li>Türkistan'da kurulan ilk Türk devletlerinin medeniyetimize katkılarını <b>sorgulayacağız</b>.</li>
          <li>İslam medeniyetinin eğitim, bilim, hukuk, kültür, sanat ve mimari alanlarındaki katkılarına dair <b>akıl yürüteceğiz</b>.</li>
          <li>İslamiyet'in kabulüyle Türklerin hayatındaki değişimi dönemin bakış açısıyla <b>değerlendireceğiz</b>.</li>
          <li>XI-XIII. yüzyıllardaki mücadelelerin Anadolu'nun Türkleşmesi ve İslamlaşmasına etkisini <b>özetleyeceğiz</b>.</li>
        </ul>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Balbal:</b> Ölen kişinin mezarına öldürdüğü düşman sayısınca dikilen taş.</li>
          <li><b>Dede Korkut:</b> Oğuz boylarının hikâyelerini anlatan bilge ozan.</li>
          <li><b>Destan:</b> Bir milletin hayatında iz bırakan olayların anlatıldığı uzun eser.</li>
          <li><b>Gök Tengri:</b> İslamiyet öncesi Türklerin inandığı tek yaratıcı.</li>
          <li><b>Haçlı Saldırıları:</b> Avrupalıların 1096-1270 arasında Doğu'ya düzenlediği seferler.</li>
          <li><b>Hicret:</b> Hz. Muhammed'in Mekke'den Medine'ye göçü (622).</li>
          <li><b>Konargöçer:</b> Hayvanlarına otlak bulmak için mevsimlik yer değiştiren yaşam biçimi.</li>
          <li><b>Orhun Kitabeleri:</b> Göktürklerden kalan, Türkçenin bilinen ilk yazılı belgeleri.</li>
          <li><b>Töre:</b> Yazısız hukuk kuralları.</li>
          <li><b>Veda Hutbesi:</b> Hz. Muhammed'in son haccında yaptığı, insan haklarını vurgulayan konuşma.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Türkçenin bilinen ilk yazılı belgeleri hangisidir?", o: ["Orhun Kitabeleri", "Kutadgu Bilig", "Divanü Lügati't-Türk"], a: 0 },
      { q: "Hz. Muhammed'in Mekke'den Medine'ye göçüne ne denir?", o: ["Hicret", "Hutbe", "Halife"], a: 0 },
      { q: "Anadolu'nun kapılarını Türklere açan savaş hangisidir?", o: ["Malazgirt", "Miryokefalon", "Pasinler"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "İlk Türk devletleri", html: `
        <div class="bars">
          <div><span>Asya Hun</span><i style="--w:21.6"></i><b>MÖ 220 – MS 216</b></div>
          <div><span>Göktürk</span><i style="--w:10"></i><b>552 – 745</b></div>
          <div><span>Uygur</span><i style="--w:5"></i><b>744 – 840</b></div>
        </div>
        <p>Kurultay, kut, töre, ordu-millet anlayışı, onlu sistem, ilk Türk alfabesi, Uygurlarda yerleşik hayat, matbaa ve minyatür.</p>` },
      { t: "İslam medeniyeti", html: `
        <ul>
          <li><b>Hz. Muhammed:</b> Medine Sözleşmesi, suffe, Tıbb-ı Nebevî, Veda Hutbesi.</li>
          <li><b>Dört Halife:</b> Kur'an'ın çoğaltılması, hicri takvim, beytülmal, yeni şehirler.</li>
          <li><b>Emeviler:</b> Arapça resmî dil, para basımı, Endülüs ve Kurtuba Ulu Camii.</li>
          <li><b>Abbasiler:</b> Beytülhikme, tercümeler, rasathaneler, kadılık teşkilatı.</li>
        </ul>` },
      { t: "Türk-İslam ve Anadolu", html: `
        <ul>
          <li><b>Karahanlılar:</b> İlk Müslüman Türk devleti; Kutadgu Bilig, Divanü Lügati't-Türk.</li>
          <li><b>Gazneliler ve Büyük Selçuklular:</b> İslamiyet'in yayılması, Nizamiye medreseleri.</li>
          <li><b>1048 Pasinler, 1071 Malazgirt, 1176 Miryokefalon:</b> Anadolu Türk yurdu oldu.</li>
          <li>Beylikler ve Türkiye Selçukluları: cami, medrese, kervansaray, darüşşifa, kümbet.</li>
        </ul>` }
    ]
  };

  P.turan = {
    title: "Turan Taktiği",
    tabs: [
      { t: "Nasıl uygulanır?", html: `
        <div class="bars">
          <div><span>I. Aşama</span><i style="--w:8"></i><b>Sahte geri çekilme</b></div>
          <div><span>II. Aşama</span><i style="--w:14"></i><b>Düşman takip eder, kanatlar açılır</b></div>
          <div><span>III. Aşama</span><i style="--w:21.6"></i><b>Kuşatma ve imha</b></div>
        </div>
        <p>Türk ordusunun merkezi düşmana saldırır gibi yapıp geri çekilir. Düşman ordusu peşinden gelince yanlarda bekleyen Türk birlikleri düşmanı çember içine alır. Hilal ya da kurt kapanı taktiği de denir.</p>` },
      { t: "Nerelerde kullanıldı?", html: `
        <ul>
          <li>Asya Hun Devleti'nden itibaren Türk ordularının temel savaş taktiği oldu.</li>
          <li><b>Dandanakan Savaşı (1040)</b> ve <b>Malazgirt Savaşı (1071)</b> bu taktikle kazanıldı.</li>
          <li>Osmanlılar da Mohaç gibi savaşlarda benzer taktikler kullandı.</li>
        </ul>
        <div class="fx"><b>Neden başarılı?</b>Atlı birliklerin hızı ve disiplini, düşmanı tuzağa çekmeyi mümkün kılıyordu.</div>` }
    ],
    quiz: [
      { q: "Turan taktiğinin ilk aşaması nedir?", o: ["Sahte geri çekilme", "Kale kuşatması", "Deniz savaşı"], a: 0 },
      { q: "Malazgirt Savaşı'nda Selçuklu ordusu hangi taktiği uyguladı?", o: ["Turan taktiği", "Siper savaşı", "Kale savunması"], a: 0 }
    ]
  };

  P.ilkdevletler = {
    title: "Türkistan'da Kurulan İlk Türk Devletleri",
    tabs: [
      { t: "Asya Hun", html: `
        <div class="stats"><div><span>MÖ 220</span>Teoman kurdu</div><div><span>Ötüken</span>merkez</div><div><span>Mete Han</span>en parlak dönem</div><div><span>MS 216</span>Çin hakimiyetine girdi</div></div>
        <p>Mete Han bütün Türk boylarını bir araya topladı, onlu sistemi kurdu. Kara Kuvvetleri'nin kuruluş yılı kabul edilen MÖ 209 Mete Han'ın tahta çıkış tarihidir.</p>` },
      { t: "Göktürkler", html: `
        <div class="stats"><div><span>552</span>Bumin Kağan kurdu</div><div><span>Türk</span>adını resmî olarak kullanan ilk devlet</div><div><span>682</span>II. Göktürk (Kutluk) Devleti</div><div><span>745</span>Uygurlar yıktı</div></div>
        <p>İlk Türk alfabesini kullandılar. Orhun Kitabeleri bu döneme aittir.</p>` },
      { t: "Uygurlar", html: `
        <div class="stats"><div><span>744</span>Kutlug Bilge Kül Kağan kurdu</div><div><span>Karabalgasun</span>merkez</div><div><span>Maniheizm</span>Bögü Kağan döneminde</div><div><span>840</span>Kırgızlar son verdi</div></div>
        <p>Yerleşik hayata geçen ilk Türk devletidir. Şehirler, tapınaklar, kütüphaneler kurdular; kâğıt ve matbaa kullandılar, minyatür sanatını geliştirdiler.</p>` }
    ],
    sort: {
      prompt: "Her bilgiyi doğru devlete yerleştir.",
      groups: ["Asya Hun", "Göktürkler", "Uygurlar"],
      items: [["Mete Han", 0], ["Onlu sistem", 0], ["Teoman", 0], ["Orhun Kitabeleri", 1], ["Bumin Kağan", 1], ["Türk adını resmî kullandı", 1], ["Maniheizm", 2], ["Yerleşik hayat", 2], ["Matbaa", 2]]
    }
  };

  P.kontrol1 = {
    title: "Sınıf Tartışması Kontrol Listesi",
    checklist: [
      "Tartışmaya etkin biçimde katıldı.",
      "Fikirlerini özgürce ve anlaşılır biçimde ifade etti.",
      "Görüşlerini incelediği kaynaklardan örneklerle destekledi.",
      "İlk Türk devletlerinin yönetim, hukuk ve askerî alandaki katkılarına değindi.",
      "Sanat, ekonomi ve sosyal hayat alanındaki katkılara değindi.",
      "Türkçeyi doğru, güzel ve etkili kullandı.",
      "Arkadaşlarını dinledi, farklı görüşlere saygı gösterdi.",
      "Çıkarımlarını tabloya yazdı ve afiş tasarımına katkı sağladı."
    ]
  };

  P.bulmaca1 = {
    title: "Bulmacanın Cevap Anahtarı",
    tabs: [{ t: "Cevaplar", html: `
      <div class="bars">
        <div><span>1</span><i style="--w:14"></i><b>TÜRKİSTAN</b></div>
        <div><span>2</span><i style="--w:21.6"></i><b>ORHUN KİTABELERİ</b></div>
        <div><span>3</span><i style="--w:15"></i><b>KONARGÖÇER</b></div>
        <div><span>4</span><i style="--w:12"></i><b>MİNYATÜR</b></div>
        <div><span>5</span><i style="--w:15"></i><b>ONLU SİSTEM</b></div>
        <div><span>6</span><i style="--w:12"></i><b>KURULTAY</b></div>
        <div><span>7</span><i style="--w:14"></i><b>MANİHEİZM</b></div>
      </div>` }]
  };

  P.abbasiler = {
    title: "Abbasiler",
    tabs: [
      { t: "Genel bilgi", html: `
        <div class="stats"><div><span>750–1258</span>hüküm sürdü</div><div><span>Bağdat</span>başkent</div><div><span>Beytülhikme</span>bilim merkezi</div><div><span>1258</span>Moğollar Bağdat'ı yıktı</div></div>` },
      { t: "Katkıları", html: `
        <ul>
          <li>Arap olan ve olmayan Müslümanlar arasında eşitlik politikası izlediler; Türkler İslamiyet'e daha hızlı girdi.</li>
          <li>Antik Yunan, Hint ve İran eserleri Arapçaya çevrildi.</li>
          <li>İlk rasathaneler Bağdat ve Şam'da kuruldu.</li>
          <li>Kadılkudatlık (başkadılık) ile adalet teşkilatı kuruldu.</li>
          <li>Samerra şehri ve Samerra Ulu Camii inşa edildi.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Abbasilerin başkenti neresidir?", o: ["Şam", "Bağdat", "Kurtuba"], a: 1 },
      { q: "Abbasi Dönemi'nde kurulan bilim akademisinin adı nedir?", o: ["Beytülhikme", "Nizamiye", "Suffe"], a: 0 }
    ]
  };

  P.endulus = {
    title: "Endülüs Emevileri",
    tabs: [
      { t: "Genel bilgi", html: `
        <p>Emevi Devleti yıkılınca Emevi ailesinin üyeleri İspanya'ya geçerek <b>Endülüs Emevi Devleti</b>'ni kurdu. Başkenti <b>Kurtuba</b>'dır (Cordoba).</p>
        <div class="fx"><b>Avrupa'ya köprü</b>Endülüs; bilim, sanat ve mimarideki birikimiyle Batı'nın aydınlanmasına katkı sağladı. Kâğıt kullanımı buradan Avrupa'ya yayıldı.</div>` },
      { t: "Eserler", html: `
        <ul>
          <li><b>Kurtuba Ulu Camii:</b> 1984'te UNESCO Dünya Mirası Listesi'ne girdi.</li>
          <li><b>El Hamra Sarayı</b> (Gırnata): İslam mimarisinin en güzel örneklerinden.</li>
          <li>Kurtuba'da yüz binlerce kitaplık kütüphaneler kuruldu.</li>
        </ul>` }
    ]
  };

  P.islambilim = {
    title: "İslamiyet ve Bilim",
    tabs: [
      { t: "Bilim insanları", html: `
        <div class="two">
          <div><b>İbn-i Sina</b>Tıp alanında "Tıp Kanunu" (el-Kânûn fi't-Tıbb) eseri yüzyıllarca Avrupa'da ders kitabı oldu.</div>
          <div><b>Harezmî</b>Cebirin kurucusu sayılır; "algoritma" kelimesi onun adından gelir.</div>
          <div><b>Bîrûnî</b>Dünyanın çevresini ölçtü, astronomi ve coğrafyada çalıştı.</div>
          <div><b>Farabi</b>Felsefe ve müzik alanında eserler verdi; "İkinci Öğretmen" olarak anılır.</div>
          <div><b>Uluğ Bey</b>Semerkant'ta rasathane kurdu, yıldız kataloğu hazırladı.</div>
          <div><b>Cezerî</b>Otomatik makineler tasarladı; sibernetiğin öncüsü sayılır.</div>
        </div>` }
    ],
    quiz: [
      { q: "\"Tıp Kanunu\" adlı eseri kim yazmıştır?", o: ["İbn-i Sina", "Harezmî", "Farabi"], a: 0 },
      { q: "\"Algoritma\" kelimesi hangi bilim insanının adından gelir?", o: ["Bîrûnî", "Harezmî", "Uluğ Bey"], a: 1 }
    ]
  };

  P.beytulhikme = {
    title: "Beytülhikme",
    tabs: [
      { t: "Nedir?", html: `
        <p>"Bilgelik Evi" anlamına gelen Beytülhikme, Abbasiler Dönemi'nde <b>Bağdat</b>'ta kurulan bir bilim akademisi ve kütüphanedir.</p>
        <ul>
          <li>Hint, Helen (Yunan) ve İran bilimine ait eserler Arapçaya tercüme edildi.</li>
          <li>Farklı din ve kökenlerden bilim insanları birlikte çalıştı.</li>
          <li>Matematik, felsefe, tıp, astronomi, geometri gibi alanlarda yeni bilgiler üretildi.</li>
        </ul>
        <div class="fx"><b>Sonu</b>1258'de Moğolların Bağdat'ı işgaliyle kütüphaneler yakıldı, eserlerin çoğu yok oldu.</div>` }
    ]
  };

  P.kontrol2 = {
    title: "Grup Çalışması ve Sunum Kontrol Listesi",
    checklist: [
      "Uzmanlık grubunda kendi konu alanını ayrıntılı araştırdı.",
      "İlk grubuna dönüp öğrendiklerini arkadaşlarına anlattı.",
      "İslam medeniyetinin ortak mirasa katkılarını doğru açıkladı.",
      "Eğitim, bilim, hukuk, kültür, sanat ve mimari alanlarıyla ilişkilendirdi.",
      "Ortak mirasın korunmasında duyarlı ve saygılı davranmanın önemine değindi.",
      "Grup içinde iş birliği yaptı ve görevini yerine getirdi.",
      "Türkçeyi doğru ve etkili kullandı.",
      "Sunumu verilen sürede tamamladı."
    ]
  };

  P.tarihsahnesi = {
    title: "Tarih Sahnesi",
    tabs: [{ t: "Dönemler", html: `
      <div class="bars">
        <div><span>Hz. Muhammed (sav) Dönemi</span><i style="--w:4"></i><b>622–632</b></div>
        <div><span>Dört Halife Dönemi</span><i style="--w:12"></i><b>632–661</b></div>
        <div><span>Emeviler</span><i style="--w:14"></i><b>661–750</b></div>
        <div><span>Abbasiler</span><i style="--w:21.6"></i><b>750–1258</b></div>
      </div>
      <p>Önce ifadeleri dönemlerine yerleştir, sonra kitaptaki sorulara dön.</p>` }],
    sort: {
      prompt: "Her gelişmeyi ait olduğu döneme yerleştir.",
      groups: ["Hz. Muhammed", "Dört Halife", "Emeviler", "Abbasiler"],
      items: [["Medine Sözleşmesi", 0], ["Tıbb-ı Nebevî", 0], ["Kur'an'ın çoğaltılması", 1], ["Devlet hazinesi (beytülmal)", 1], ["Mevali politikası", 2], ["Endülüs'ün fethi", 2], ["Tercüme çalışmaları", 3], ["Kadı tayini", 3], ["Samerra Ulu Camii", 3]]
    }
  };

  P.ergenekon = {
    title: "Ergenekon Destanı",
    tabs: [
      { t: "Destanın konusu", html: `
        <p>Göktürk Dönemi'ne ait bir destandır. Düşman saldırısına uğrayan Türkler, <b>Ergenekon</b> adı verilen, dağlarla çevrili bir vadiye sığınır. Burada çoğalarak dört yüz yıl yaşarlar.</p>
        <p>Vadiye sığmaz hâle gelince dışarı çıkmak isterler. Bir demirci, dağdaki demir madenini eritmeyi önerir. Dağın eteğine odun ve kömür yığıp körüklerle ateşlerler; eriyen demir dağı deler ve yol açılır. Türkleri dışarıya <b>bozkurt</b> yol göstererek çıkarır.</p>` },
      { t: "Destandaki değerler", html: `
        <ul>
          <li>Birlik ve beraberlik</li>
          <li>Bağımsızlık ve özgürlük tutkusu</li>
          <li>Demircilik ve emeğe verilen önem</li>
          <li>Bozkurt motifi: yol gösterici, kurtarıcı</li>
        </ul>
        <div class="fx"><b>Günümüzde</b>Ergenekon'dan çıkış Nevruz'da (21 Mart) demir dövülerek kutlanır.</div>` }
    ],
    quiz: [
      { q: "Ergenekon Destanı hangi döneme aittir?", o: ["Göktürkler", "Osmanlılar", "Selçuklular"], a: 0 },
      { q: "Destanda Türklere yol gösteren hayvan hangisidir?", o: ["Kartal", "Bozkurt", "Geyik"], a: 1 }
    ]
  };

  P.dedekorkut = {
    title: "Dede Korkut Hikâyeleri",
    tabs: [
      { t: "Hakkında", html: `
        <p>Oğuz Türklerinin yaşayışını, gelenek ve değerlerini anlatan 12 hikâyeden oluşur. Hikâyeleri anlatan bilge kişi <b>Dede Korkut</b>'tur; kopuz çalarak hikâyeler anlatır, dualar eder ve yeni doğanlara ad koyar.</p>
        <div class="fx"><b>UNESCO</b>Dede Korkut Mirası, Türkiye, Azerbaycan ve Kazakistan'ın ortak başvurusuyla 2018'de UNESCO Somut Olmayan Kültürel Miras listesine alındı.</div>` },
      { t: "Hikâyelerden örnekler", html: `
        <ul>
          <li><b>Dirse Han Oğlu Boğaç Han:</b> Bir boğayı yenen Boğaç'a Dede Korkut ad verir.</li>
          <li><b>Deli Dumrul:</b> Azrail'e meydan okuyan Dumrul, sonunda Allah'a yalvararak bağışlanır.</li>
          <li><b>Bamsı Beyrek:</b> Esir düşen Beyrek'in vefası ve dostluğu anlatılır.</li>
        </ul>
        <p>Değerler: misafirperverlik, cesaret, aileye bağlılık, büyüklere saygı, kadının toplumdaki yeri.</p>` }
    ]
  };

  P.divanu = {
    title: "Divanü Lügati't-Türk",
    tabs: [
      { t: "Eser hakkında", html: `
        <div class="stats"><div><span>1072–1074</span>yazıldı</div><div><span>Kaşgarlı Mahmud</span>yazarı</div><div><span>İlk sözlük</span>Türkçenin bilinen ilk sözlüğü</div></div>
        <p>Araplara Türkçe öğretmek ve Türkçenin Arapçadan zengin bir dil olduğunu göstermek için yazılmıştır. Türk boylarının lehçeleri, atasözleri, şiirleri ve yaşayışı hakkında bilgi verir.</p>
        <div class="fx"><b>İlk Türk dünya haritası</b>Eserde Türk boylarının yaşadığı yerleri gösteren daire biçiminde bir dünya haritası vardır. On İki Hayvanlı Türk Takvimi hakkında da bilgi verir.</div>` }
    ],
    quiz: [
      { q: "Divanü Lügati't-Türk'ün yazarı kimdir?", o: ["Yusuf Has Hâcib", "Kaşgarlı Mahmud", "Edip Ahmet"], a: 1 },
      { q: "Eser hangi amaçla yazılmıştır?", o: ["Araplara Türkçe öğretmek", "Savaşları anlatmak", "Tıp bilgisi vermek"], a: 0 }
    ]
  };

  P.eslestirme = {
    title: "Eşleştirme Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Her özelliği İslamiyet öncesine ya da İslamiyet'in kabulü sonrasına yerleştir.</p>` }],
    sort: {
      prompt: "Her özelliği doğru döneme yerleştir.",
      groups: ["İslamiyet öncesi", "İslamiyet sonrası"],
      items: [["Otağ (çadır)", 0], ["Balbal", 0], ["Kurgan mezar", 0], ["Göktürk alfabesi", 0], ["Türbe", 1], ["Medrese", 1], ["Hat ve tezhip", 1], ["Kervansaray", 1], ["Kutadgu Bilig", 1]]
    }
  };

  P.hikaye = {
    title: "Hikâye Tasarlama Derecelendirme Ölçeği",
    levels: RUBRIC,
    checklist: [
      "Hikâyesine konuya uygun, dikkat çekici bir ad verdi.",
      "Kendini dönemin koşullarında yaşayan biri olarak hayal etti (tarihsel empati).",
      "İslamiyet'in kabulüyle yaşam biçiminde meydana gelen değişimleri anlattı.",
      "Yazı, dil, edebiyat, sanat ve mimari alanlarındaki değişimlere değindi.",
      "Millî ve manevi değerlere yer verdi.",
      "Olay, yer, zaman ve kahramanları tutarlı biçimde kurguladı.",
      "Türkçeyi doğru, güzel ve etkili kullandı.",
      "Hikâyesini düzenli ve zamanında teslim etti."
    ]
  };

  P.malazgirt = {
    title: "Malazgirt Zaferi ve Anadolu",
    tabs: [
      { t: "Savaş", html: `
        <div class="stats"><div><span>26 Ağustos 1071</span>Cuma günü</div><div><span>Sultan Alp Arslan</span>Selçuklu ordusu</div><div><span>Romen Diyojen</span>Doğu Roma imparatoru</div></div>
        <p>Selçuklular turan taktiğini uyguladı; Doğu Roma ordusundaki Uz ve Peçenek Türkleri Selçuklu tarafına geçti. İmparator esir düştü, Alp Arslan ona merhametle davrandı.</p>` },
      { t: "Sonuçları", html: `
        <ul>
          <li>Anadolu'nun kapıları Türklere açıldı; "devlet ve vatan kuran zafer" olarak anılır.</li>
          <li>Saltuklu, Danişmentli, Mengücekli, Artuklu ve Çaka beylikleri kuruldu.</li>
          <li>Türkiye Selçuklu Devleti kuruldu (1075).</li>
          <li>Anadolu'nun Türkleşme ve İslamlaşma süreci hızlandı.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Malazgirt Savaşı hangi yıl yapıldı?", o: ["1048", "1071", "1176"], a: 1 },
      { q: "Savaşta Selçuklu ordusunun başında kim vardı?", o: ["Tuğrul Bey", "Sultan Alp Arslan", "Melikşah"], a: 1 }
    ]
  };

  P.beylikler = {
    title: "İlk Türk Beylikleri",
    tabs: [{ t: "Beylikler", html: `
      <div class="two">
        <div><b>Saltuklular (1072–1202)</b>Erzurum. Tepsi Minare, Üç Kümbetler, Mama Hatun Külliyesi.</div>
        <div><b>Danişmentliler (1080–1178)</b>Sivas, Tokat, Kayseri. Yağıbasan Medreseleri: Anadolu'nun ilk medreseleri.</div>
        <div><b>Mengücekliler (1080–1228)</b>Erzincan, Divriği. Divriği Ulu Camii ve Darüşşifası (UNESCO).</div>
        <div><b>Artuklular (1102–1409)</b>Hasankeyf, Mardin, Harput. Malabadi Köprüsü, Zinciriye Külliyesi.</div>
        <div><b>Çaka Beyliği (1081–1093)</b>İzmir. İlk Türk donanması; 1081 Deniz Kuvvetlerinin kuruluş yılı.</div>
      </div>` }],
    sort: {
      prompt: "Her eseri yaptıran beyliğe yerleştir.",
      groups: ["Saltuklular", "Mengücekliler", "Artuklular"],
      items: [["Tepsi Minare", 0], ["Üç Kümbetler", 0], ["Mama Hatun Külliyesi", 0], ["Divriği Ulu Camii", 1], ["Darüşşifa (Divriği)", 1], ["Malabadi Köprüsü", 2], ["Zinciriye Külliyesi", 2], ["Hatuniye Medresesi", 2]]
    }
  };

  P.miryokefalon = {
    title: "Miryokefalon Savaşı ve Zaferi",
    tabs: [
      { t: "Savaş", html: `
        <div class="stats"><div><span>17 Eylül 1176</span>savaş tarihi</div><div><span>II. Kılıç Arslan</span>Türkiye Selçuklu sultanı</div><div><span>I. Manuel Komnenos</span>Doğu Roma imparatoru</div></div>
        <p>Doğu Roma ordusu dar bir geçitte pusuya düşürülerek bozguna uğratıldı.</p>` },
      { t: "Sonuçları", html: `
        <ul>
          <li>Türklerin Anadolu'dan atılamayacağı kesinleşti; Anadolu'nun Türk yurdu olduğu tescillendi.</li>
          <li>Doğu Roma saldırıdan savunmaya geçti.</li>
          <li>Türkler Anadolu'da geniş imar faaliyetleri yapabildi.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Anadolu'nun Türk yurdu olduğunu kesinleştiren savaş hangisidir?", o: ["Pasinler", "Malazgirt", "Miryokefalon"], a: 2 }
    ]
  };

  P.tarihseridi = {
    title: "Tarih Şeridi",
    tabs: [{ t: "Doğru sıra", html: `
      <div class="bars">
        <div><span>1048 · Pasinler Savaşı</span><i style="--w:2"></i><b>E</b></div>
        <div><span>1071 · Malazgirt Savaşı</span><i style="--w:6"></i><b>C</b></div>
        <div><span>1096 · I. Haçlı Saldırısı</span><i style="--w:10"></i><b>A</b></div>
        <div><span>1147 · II. Haçlı Saldırısı</span><i style="--w:15"></i><b>Ç</b></div>
        <div><span>1176 · Miryokefalon Savaşı</span><i style="--w:18"></i><b>B</b></div>
        <div><span>1189 · III. Haçlı Saldırısı</span><i style="--w:21.6"></i><b>D</b></div>
      </div>` }],
    quiz: [
      { q: "Hangisi kronolojik olarak en önce gerçekleşmiştir?", o: ["Malazgirt Savaşı", "Pasinler Savaşı", "I. Haçlı Saldırısı"], a: 1 },
      { q: "II. Haçlı Saldırısı'na hangi olay sebep olmuştur?", o: ["Kudüs'ün fethi", "Urfa'nın geri alınması", "İznik'in fethi"], a: 1 }
    ]
  };

  P.kartoyunu = {
    title: "Kart Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Türkiye Selçuklu eserlerini türlerine göre grupla.</p>` }],
    sort: {
      prompt: "Her eseri doğru gruba yerleştir.",
      groups: ["Kervansaray", "Kümbet / türbe", "Darüşşifa / medrese"],
      items: [["Sultanhanı (Aksaray)", 0], ["Evdir Han (Antalya)", 0], ["Karatay Hanı (Kayseri)", 0], ["Döner Kümbet", 1], ["II. Kılıç Arslan Kümbeti", 1], ["Ulu Kümbet (Ahlat)", 1], ["Gevher Nesibe Darüşşifası", 2], ["Gök Medrese (Sivas)", 2], ["Cacabey Medresesi", 2]]
    }
  };

  P.selcukeser = {
    title: "Türkiye Selçuklu Eserleri",
    tabs: [
      { t: "Kervansaraylar", html: `<p>Ticaret yolları üzerinde, 30-40 km'de bir (bir günlük yürüyüş mesafesi) kuruldu. Yolcular üç gün ücretsiz konaklar; zarar gören tüccarın kaybını devlet karşılardı (bir tür sigorta). Örnekler: Aksaray Sultanhanı, Evdir Han, Karatay Hanı.</p>` },
      { t: "Kümbetler", html: `<p>Selçuklulara özgü anıt mezarlardır. Örnekler: Konya'daki II. Kılıç Arslan Kümbeti, Kayseri Döner Kümbet, Ahlat Ulu Kümbet.</p>` },
      { t: "Darüşşifalar", html: `<p>Hastanelerdir. Dâhiliye, göz, cilt ve ruh hastalıkları tedavi edilir, öğrencilere uygulamalı ders verilirdi. Kayseri'deki Gevher Nesibe Darüşşifası ve Tıp Medresesi Anadolu'nun ilk uygulamalı tıp medresesidir.</p>` },
      { t: "Külliyeler", html: `<p>Cami, medrese, hastane, aşhane, kervansaray, hamam gibi yapıların bir arada bulunduğu yapı topluluklarıdır. Örnek: Kayseri Hunad Hatun Külliyesi.</p>` }
    ]
  };

  P.anadolu = {
    title: "\"Anadolu'nun Türkleşme ve İslamlaşma Süreci\" Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "XI-XIII. yüzyıllardaki askerî faaliyetleri (savaşlar) doğru sıraladı.",
      "Siyasi faaliyetleri (devletler ve beylikler) doğru açıkladı.",
      "Bu faaliyetlerin Anadolu'nun Türkleşmesine etkisini yorumladı.",
      "Bu faaliyetlerin Anadolu'nun İslamlaşmasına etkisini yorumladı.",
      "Dönemin mimari eserlerine afiş ya da poster ile yer verdi.",
      "Metni özlü ve anlaşılır biçimde özetledi.",
      "Türkçeyi doğru, güzel ve etkili kullandı.",
      "Ürününü zamanında hazırladı ve sınıfla paylaştı."
    ]
  };

  P.sorular = {
    title: "Daha Fazla Örnek Soru",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "Türk adını resmî olarak kullanan ilk Türk devleti hangisidir?", o: ["Asya Hun", "Göktürk", "Uygur", "Karahanlı"], a: 1 },
      { q: "Yerleşik hayata geçen ilk Türk devleti hangisidir?", o: ["Uygurlar", "Asya Hun", "Göktürkler", "Avarlar"], a: 0 },
      { q: "İlk Türk devletlerinde önemli kararların alındığı meclise ne denir?", o: ["Divan", "Kurultay", "Senato", "Beytülmal"], a: 1 },
      { q: "Hicri takvim kimin döneminde kabul edilmiştir?", o: ["Hz. Ebu Bekir", "Hz. Ömer", "Hz. Osman", "Hz. Ali"], a: 1 },
      { q: "İlk Müslüman Türk devleti hangisidir?", o: ["Gazneliler", "Büyük Selçuklular", "Karahanlılar", "Danişmentliler"], a: 2 },
      { q: "Kutadgu Bilig'in yazarı kimdir?", o: ["Kaşgarlı Mahmud", "Yusuf Has Hâcib", "Edip Ahmet", "Ahmet Yesevi"], a: 1 },
      { q: "Türk Deniz Kuvvetlerinin kuruluş yılı kabul edilen 1081'de donanmayı kuran kimdir?", o: ["Çaka Bey", "Saltuk Bey", "Artuk Bey", "Danişment Gazi"], a: 0 },
      { q: "Divriği Ulu Camii ve Darüşşifası hangi beyliğe aittir?", o: ["Saltuklular", "Artuklular", "Mengücekliler", "Danişmentliler"], a: 2 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları öğrenme alanının üç konusuna göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["İlk Türk devletleri", "İslam medeniyeti", "Anadolu'nun Türkleşmesi"],
      items: [["Kurultay", 0], ["Balbal", 0], ["Onlu sistem", 0], ["Beytülhikme", 1], ["Medine Sözleşmesi", 1], ["Tıbb-ı Nebevî", 1], ["Malazgirt", 2], ["Kervansaray", 2], ["Haçlı Saldırıları", 2]]
    },
    quiz: [
      { q: "Yazılı olmayan hukuk kurallarına ne denir?", o: ["Töre", "Kut", "Otağ"], a: 0 },
      { q: "Selçuklulara özgü anıt mezarlara ne denir?", o: ["Kümbet", "Balbal", "Ribat"], a: 0 },
      { q: "Türklerde hükümdarlara yönetme yetkisinin Tanrı tarafından verildiği inancına ne denir?", o: ["Kut", "Töre", "Toy"], a: 0 }
    ]
  };
})();

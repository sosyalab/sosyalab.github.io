// 7. Sınıf 3. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "3. Öğrenme Alanı: Ortak Mirasımız",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Osmanlı Devleti'nin cihan devleti hâline gelmesini sağlayan politikalar</b>Fetih, iskân, istimalet, merkezî otorite; İstanbul'un Fethi, Mısır Seferi, Preveze.</div>
          <div class="c-a"><b>Osmanlı Devleti'nin uygulamaya koyduğu yenilikler</b>Coğrafi keşifler, Rönesans, Reform, Aydınlanma, Sanayi İnkılabı, Fransız İhtilali; Lale Devri'nden Tanzimat'a.</div>
          <div class="c-s"><b>Osmanlı kültür ve medeniyeti</b>Yönetim, eğitim, hukuk, sanat, günlük yaşam, vakıflar, ahilik ve lonca.</div>
        </div>` },
      { t: "Bu alanda neler yapacağız?", html: `
        <ul>
          <li>Osmanlı Devleti'nin cihan devleti hâline gelmesini sağlayan politikaları <b>sorgulayacağız</b>.</li>
          <li>Değişen dünya dengeleri karşısında Osmanlı Devleti'nin uyguladığı yenilikleri neden ve sonuçlarıyla <b>yorumlayacağız</b>.</li>
          <li>Osmanlı kültür ve medeniyet unsurlarına ilişkin oluşturduğumuz ürünü <b>paylaşacağız</b>.</li>
        </ul>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Cihan devleti:</b> Dünya çapında büyük güce ve etkiye sahip devlet.</li>
          <li><b>Fetih:</b> Bir yeri savaşarak alıp ülke topraklarına katma.</li>
          <li><b>Gaza:</b> İslam'ı yaymak amacıyla yapılan savaş.</li>
          <li><b>İskân:</b> Fethedilen yerlere Türkmenlerin yerleştirilmesi.</li>
          <li><b>İstimalet:</b> Fethedilen yerlerin halkına hoşgörülü davranarak gönüllerini kazanma.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Fethedilen yerlerin halkına hoşgörülü davranma politikasına ne denir?", o: ["İstimalet", "İskân", "Gaza"], a: 0 },
      { q: "İstanbul hangi yıl fethedildi?", o: ["1453", "1071", "1517"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Cihan devleti", html: `
        <div class="bars">
          <div><span>1299 · Osmanlı Beyliği kuruldu</span><i style="--w:3"></i><b></b></div>
          <div><span>1453 · İstanbul'un Fethi</span><i style="--w:8"></i><b></b></div>
          <div><span>1517 · Mısır Seferi, halifelik</span><i style="--w:12"></i><b></b></div>
          <div><span>1538 · Preveze Deniz Zaferi</span><i style="--w:16"></i><b></b></div>
          <div><span>1520–1566 · Kanuni Dönemi, en geniş sınırlar</span><i style="--w:21.6"></i><b></b></div>
        </div>
        <p>Başarının sırrı: fetih, iskân, istimalet ve güçlü merkezî otorite.</p>` },
      { t: "Yenilikler", html: `
        <div class="two">
          <div><b>Avrupa'da</b>Coğrafi keşifler ve sömürgecilik, Rönesans, Reform, Aydınlanma Çağı, Sanayi İnkılabı, Fransız İhtilali.</div>
          <div><b>Osmanlı'da</b>Lale Devri (1718–1730), III. Selim ve Nizâm-ı Cedîd, II. Mahmud Dönemi, Tanzimat (1839), Islahat (1856), I. Meşrutiyet (1876).</div>
        </div>` },
      { t: "Kültür ve medeniyet", html: `
        <ul>
          <li><b>Yönetim:</b> Padişah, Divan-ı Hümayun; merkez ve taşra yönetimi.</li>
          <li><b>Eğitim:</b> Sıbyan mektebi, medrese, Enderun; sonra rüştiye, idadi, Darülfünun.</li>
          <li><b>Hukuk:</b> Şer'i ve örfi hukuk; kadılar; Mecelle ve Kanun-ı Esasi.</li>
          <li><b>Sanat:</b> Mimar Sinan, hat, tezhip, çini, minyatür, ebru, Mehter.</li>
          <li><b>Toplum:</b> Vakıflar, ahilik ve lonca, mahalle kültürü, sadaka taşı.</li>
        </ul>` }
    ]
  };

  P.mimarlar = {
    title: "Cihan Devletinin Mimarları",
    tabs: [{ t: "Padişahlar", html: `
      <div class="stats">
        <div><span>Osman Bey</span>Beyliği kurdu, Bizans'a karşı fetihlere başladı (1299–1326).</div>
        <div><span>Orhan Bey</span>Bursa'yı başkent yaptı, Rumeli'ye geçildi (1326–1362).</div>
        <div><span>I. Murad</span>Edirne'yi aldı, Balkanlarda ilerledi (1362–1389).</div>
        <div><span>Fatih Sultan Mehmed</span>İstanbul'u fethetti, Orta Çağ'ı kapattı (1451–1481).</div>
        <div><span>Yavuz Sultan Selim</span>Çaldıran, Mercidabık, Ridaniye; halifelik (1512–1520).</div>
        <div><span>Kanuni Sultan Süleyman</span>En geniş sınırlar, Preveze Zaferi (1520–1566).</div>
      </div>` }],
    quiz: [
      { q: "Osmanlı Devleti'nin ilk başkenti olarak Bursa'yı alan padişah kimdir?", o: ["Orhan Bey", "Fatih Sultan Mehmed", "Yavuz Sultan Selim"], a: 0 },
      { q: "Halifeliğin Osmanlı'ya geçtiği sefer hangisidir?", o: ["Mısır Seferi", "Preveze", "Malazgirt"], a: 0 }
    ]
  };

  P.gemiler = {
    title: "Gemilerin Karadan Yürütülmesi",
    tabs: [{ t: "22 Nisan 1453", html: `
      <ol>
        <li>Haliç'in girişi Bizans tarafından büyük bir demir zincirle kapatılmıştı.</li>
        <li>II. Mehmed, Galata surlarının arkasından kızaklar hazırlattı.</li>
        <li>Kızaklar yağlandı; gemiler bir gecede Dolmabahçe'den Kasımpaşa'ya karadan yürütüldü.</li>
        <li>Sabah Bizanslılar Osmanlı donanmasını Haliç'te görünce büyük şaşkınlık yaşadı.</li>
      </ol>
      <div class="fx"><b>Sonuç</b>Bizans savunması iki cepheye bölündü, moral çöktü; 29 Mayıs'ta şehir fethedildi.</div>` }]
  };

  P.barbaros = {
    title: "Barbaros Hayreddin Paşa",
    tabs: [{ t: "Hayatı ve Preveze", html: `
      <ul>
        <li>Midilli'de doğdu; kardeşi Oruç Reis ile Akdeniz'de denizcilik yaptı.</li>
        <li>Cezayir'i Osmanlı'ya bağladı; 1534'te Kanuni tarafından Kaptanıderya yapıldı.</li>
        <li>1538'de Preveze'de Andrea Doria komutasındaki Haçlı donanmasını yendi.</li>
        <li>Donanmayı <b>hilal</b> şeklinde dizdi; hızlı kadırgalar ve uzun menzilli toplar kullandı.</li>
      </ul>
      <div class="fx"><b>Bugün</b>27 Eylül, Preveze Deniz Zaferi ve Deniz Kuvvetleri Günü olarak kutlanır.</div>` }]
  };

  P.harita = {
    title: "Etkileşimli Harita · Osmanlı'nın Genişlemesi",
    tabs: [{ t: "Dönemler", html: `
      <div class="bars">
        <div><span>Kuruluş · Söğüt ve çevresi (Osman Bey)</span><i style="--w:3"></i><b></b></div>
        <div><span>Bursa, İznik, İzmit (Orhan Bey)</span><i style="--w:6"></i><b></b></div>
        <div><span>Edirne ve Balkanlar (I. Murad)</span><i style="--w:9"></i><b></b></div>
        <div><span>İstanbul, Mora, Trabzon (Fatih)</span><i style="--w:13"></i><b></b></div>
        <div><span>Suriye, Mısır, Hicaz (Yavuz)</span><i style="--w:17"></i><b></b></div>
        <div><span>Macaristan, Bağdat, Kuzey Afrika (Kanuni)</span><i style="--w:21.6"></i><b></b></div>
      </div>` }],
    sort: {
      prompt: "Fethedilen yerleri padişahına göre yerleştir.",
      groups: ["Orhan Bey", "Fatih", "Yavuz", "Kanuni"],
      items: [["Bursa", 0], ["İznik", 0], ["İstanbul", 1], ["Trabzon", 1], ["Mısır", 2], ["Şam", 2], ["Belgrad", 3], ["Bağdat", 3]]
    }
  };

  P.sanayi = {
    title: "Osmanlı Devleti'nde Sanayileşme",
    tabs: [{ t: "Fabrikalar", html: `
      <div class="stats">
        <div><span>Feshane</span>Fes ve yünlü kumaş üretimi (İstanbul).</div>
        <div><span>Beykoz</span>Kâğıt, deri ve cam fabrikaları.</div>
        <div><span>Hereke</span>İpekli kumaş ve halı fabrikası.</div>
        <div><span>Zeytinburnu</span>Demir ve dökümhane.</div>
      </div>
      <div class="fx"><b>Neden başarılı olamadı?</b>Sermaye, teknoloji ve nitelikli iş gücü eksikliği; ulaşım ağının yetersizliği ve ucuz Avrupa malları.</div>` }]
  };

  P.yenilikler = {
    title: "Osmanlı Devleti'nde Yenilikler",
    tabs: [{ t: "Dönemler", html: `
      <ul>
        <li><b>Lale Devri:</b> Matbaa, Tulumbacı Ocağı, çiçek aşısı, Paris elçiliği.</li>
        <li><b>III. Selim:</b> Nizâm-ı Cedîd ordusu, Mühendishane, İrâd-ı Cedîd, daimî elçilikler.</li>
        <li><b>II. Mahmud:</b> Yeniçeri Ocağı'nın kaldırılması, nazırlıklar, Takvim-i Vekayi, nüfus sayımı.</li>
        <li><b>Tanzimat ve sonrası:</b> Kanun önünde eşitlik, Islahat Fermanı, Kanun-ı Esasi, Meclis-i Mebusan.</li>
      </ul>` }],
    sort: {
      prompt: "Yenilikleri dönemine yerleştir.",
      groups: ["Lale Devri", "III. Selim", "II. Mahmud", "Tanzimat"],
      items: [["İlk Türk matbaası", 0], ["Tulumbacı Ocağı", 0], ["Nizâm-ı Cedîd", 1], ["İrâd-ı Cedîd", 1], ["Vaka-i Hayriye", 2], ["Takvim-i Vekayi", 2], ["Eşitlik ilkesi", 3], ["Meclis-i Maârif", 3]]
    }
  };

  P.forum = {
    title: "Forum Tekniği",
    tabs: [{ t: "Nasıl uygulanır?", html: `
      <ol>
        <li>Sınıf gruplara ayrılır; her grup bir konu ya da soru alır.</li>
        <li>Gruplar konuyu tartışır, ortak görüşlerini not alır.</li>
        <li>Bir grup görüşlerini sunarken diğer gruplar dinleyici olur.</li>
        <li>Dinleyiciler görüş bildirebilir, soru sorabilir, katkıda bulunabilir.</li>
        <li>Öğretmen tartışmayı yönetir ve sonunda ulaşılan sonuçları özetler.</li>
      </ol>` }]
  };

  P.tartisma = {
    title: "Tartışma Kontrol Listesi",
    checklist: [
      "Tartışma konusuna uygun görüşler bildirdi.",
      "Görüşlerini kanıtlarla destekledi.",
      "Arkadaşlarını dikkatle dinledi, sözlerini kesmedi.",
      "Farklı görüşlere saygı gösterdi.",
      "Sorulara anlamlı cevaplar verdi.",
      "Grubunun ortak görüşüne katkı sağladı.",
      "Türkçeyi doğru ve etkili kullandı.",
      "Konuşma süresine uydu."
    ]
  };

  P.rubrik = {
    title: "Ben Devlet Yöneticisi Olsaydım · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Seçtiği dönemle uyumlu bir yenilik önerdi.",
      "Yeniliğin amacını devletin eksikliğiyle ilişkilendirdi.",
      "Halk için sağlayacağı faydayı açıkladı.",
      "Devlet adamı bakış açısıyla yeniliğin önemini değerlendirdi.",
      "Halkın olası tepkilerini öngördü.",
      "Tarihî bilgileri doğru kullandı.",
      "Grup içinde iş birliği yaptı."
    ]
  };

  P.fetihmarsi = {
    title: "Fetih Marşı",
    tabs: [{ t: "Şiir", html: `
      <p>Arif Nihat Asya'nın yazdığı Fetih Marşı, gençlere Fatih Sultan Mehmed'in İstanbul'u 21 yaşında fethettiğini hatırlatır ve onları azimle büyük işler başarmaya çağırır.</p>
      <div class="fx"><b>Mehter</b>Osmanlı ordusunun resmî müzik topluluğudur; kös, nakkare, zurna ve zil gibi çalgılar kullanır. Dünyanın en eski askerî bandosu kabul edilir.</div>` }]
  };

  P.gunluk = {
    title: "Osmanlıda Günlük Yaşam ve Toplum Hayatı",
    tabs: [
      { t: "Şehir", html: `<p>Şehir hayatı cami, çarşı ve mahalle etrafında örgütlenmiştir. Bedestenler ticaretin merkeziydi. Halk meddah, Karagöz ve orta oyunu gibi gösterilerle eğlenirdi.</p>` },
      { t: "Ev ve aile", html: `<p>Yemekler yer sofrasında yenir, sofraya önce büyükler otururdu. Çorba, pilav, et yemekleri ve şerbet sofraların vazgeçilmeziydi. Misafir güler yüzle ağırlanırdı.</p>` },
      { t: "Köy ve oba", html: `<p>Halkın büyük bölümü köylerde tarım ve hayvancılıkla geçinirdi. Konargöçerler yaylak ile kışlak arasında gidip gelirdi.</p>` }
    ]
  };

  P.ahi = {
    title: "Ahi Teşkilatı",
    tabs: [{ t: "Ahilik", html: `
      <ul>
        <li>XIII. yüzyılda Ahi Evran tarafından kuruldu.</li>
        <li>Esnaf ve zanaatkârlara meslek eğitimi ile birlikte ahlak eğitimi verdi.</li>
        <li>Çırak → kalfa → usta aşamalarıyla meslek öğretildi.</li>
        <li>Bacıyân-ı Rûm ile kadınlar da meslek sahibi oldu.</li>
      </ul>` }],
    sort: {
      prompt: "Kuralları anlamıyla eşleştir.",
      groups: ["Eli, sofrası, kapısı açık", "Gözü, dili kapalı"],
      items: [["Cömert olmak", 0], ["İkramı bol olmak", 0], ["Misafirperver olmak", 0], ["Kusur görmemek", 1], ["Gıybetten uzak durmak", 1]]
    }
  };

  P.etkilesimli = {
    title: "Osmanlı Kültür ve Medeniyeti · Etkileşimli Etkinlik",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kurumları ve eserleri ait oldukları alana yerleştir.</p>` }],
    sort: {
      prompt: "Her kurumu alanına yerleştir.",
      groups: ["Eğitim", "Hukuk", "Toplum ve yardımlaşma", "Sanat"],
      items: [["Sıbyan mektebi", 0], ["Enderun", 0], ["Kadı", 1], ["Mecelle", 1], ["Vakıf", 2], ["Sadaka taşı", 2], ["Hat", 3], ["Ebru", 3]]
    }
  };

  P.hikayerubrik = {
    title: "Osmanlı Dönemi'nde Bir Gün · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Hikâyesinde Osmanlı kültür ve medeniyetine ait unsurlara yer verdi.",
      "Bir ailenin günlük yaşamını gerçekçi biçimde anlattı.",
      "Hikâye yazım kurallarına (giriş, gelişme, sonuç) uydu.",
      "Özgün ve yaratıcı bir hikâye oluşturdu.",
      "Hikâyeyi sınıfta etkili biçimde canlandırdı.",
      "Yazım ve noktalama kurallarına dikkat etti."
    ]
  };

  P.sorular = {
    title: "Öğrenme Alanı Ek Sorular",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "Fethedilen yerlere Türkmenlerin yerleştirilmesine ne denir?", o: ["İskân", "İstimalet", "Devşirme", "Islahat"], a: 0 },
      { q: "İstanbul kuşatmasından önce Anadolu Hisarı'nın karşısına yaptırılan yapı hangisidir?", o: ["Rumeli Hisarı", "Galata Kulesi", "Yedikule", "Kız Kulesi"], a: 0 },
      { q: "Halifeliğin Osmanlı'ya geçmesini sağlayan sefer hangisidir?", o: ["Mısır Seferi", "Çaldıran Savaşı", "Preveze", "Mohaç"], a: 0 },
      { q: "Martin Luther öncülüğünde başlayan dinî yenilik hareketi hangisidir?", o: ["Reform", "Rönesans", "Aydınlanma", "Sanayi İnkılabı"], a: 0 },
      { q: "İlk Türk matbaası hangi dönemde açılmıştır?", o: ["Lale Devri", "Tanzimat", "II. Mahmud Dönemi", "Kuruluş Dönemi"], a: 0 },
      { q: "Yeniçeri Ocağı'nın kaldırılmasına ne ad verilir?", o: ["Vaka-i Hayriye", "Nizâm-ı Cedîd", "Kanun-ı Esasi", "Islahat"], a: 0 },
      { q: "Ahi teşkilatının kurucusu kimdir?", o: ["Ahi Evran", "Yunus Emre", "Mimar Sinan", "Hacı Bektaş-ı Veli"], a: 0 },
      { q: "Ahmet Cevdet Paşa öncülüğünde hazırlanan medeni kanun hangisidir?", o: ["Mecelle", "Kanun-ı Esasi", "Tanzimat Fermanı", "Kanunname"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları üç konuya göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["Cihan devleti", "Yenilikler", "Kültür ve medeniyet"],
      items: [["İstimalet", 0], ["İskân", 0], ["Preveze", 0], ["Nizâm-ı Cedîd", 1], ["Tanzimat", 1], ["Lale Devri", 1], ["Vakıf", 2], ["Ahilik", 2], ["Divan-ı Hümayun", 2]]
    },
    quiz: [
      { q: "Avrupa'da 14-16. yüzyıllarda bilim ve sanatın yeniden doğuşuna ne denir?", o: ["Rönesans", "Reform", "Sömürgecilik"], a: 0 },
      { q: "Divan'da alınan kararların İslam dinine uygunluğu konusunda fetva veren kimdir?", o: ["Şeyhülislam", "Defterdar", "Nişancı"], a: 0 }
    ]
  };
})();

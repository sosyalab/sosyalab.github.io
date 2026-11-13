// 5. Sınıf 4. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "4. Öğrenme Alanı: Yaşayan Demokrasimiz",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Demokrasi ve cumhuriyetin temel nitelikleri</b>Özgürlük, eşitlik, seçme ve seçilme, millî egemenlik, çoğulculuk, katılım, hukukun üstünlüğü.</div>
          <div class="c-a"><b>Etkin vatandaşın özellikleri</b>Hak ve sorumluluklarını bilen, sorunlara duyarlı vatandaş.</div>
          <div class="c-s"><b>Temel hak ve sorumluluklarımız</b>Anayasa, İnsan Hakları Evrensel Bildirgesi, Çocuk Hakları Sözleşmesi.</div>
          <div class="c-k"><b>Sorunlarımızın çözümünde kurumlar</b>Muhtarlık, belediye, kaymakamlık, CİMER, KDK, STK'lar.</div>
        </div>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Cumhuriyet:</b> Halkın egemenliği seçtiği temsilciler aracılığıyla kullandığı devlet şekli.</li>
          <li><b>Demokrasi:</b> Halkın kendi kendini yönettiği yönetim anlayışı.</li>
          <li><b>Hukukun üstünlüğü:</b> Herkesin yasalara ve bağımsız mahkeme kararlarına uyması.</li>
          <li><b>Millî egemenlik:</b> Yönetme gücünün millete ait olması.</li>
          <li><b>Çoğulculuk:</b> Farklı görüşlerin bir zenginlik olarak görülmesi.</li>
          <li><b>Katılım:</b> Bireylerin kararlarda söz sahibi olması.</li>
          <li><b>Etkin vatandaş:</b> Hak ve sorumluluklarını bilen, topluma katkı sağlayan vatandaş.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Cumhuriyet hangi tarihte ilan edildi?", o: ["29 Ekim 1923", "23 Nisan 1920", "30 Ağustos 1922"], a: 0 },
      { q: "Mahallenin yönetiminden sorumlu kişi kimdir?", o: ["Muhtar", "Vali", "Kaymakam"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Demokrasi ve cumhuriyet", html: `<p>Cumhuriyet bir devlet şeklidir; demokrasi ise bu yönetimin işleyiş biçimidir. Atatürk "Cumhuriyet rejimi demek, demokrasi sistemi ile devlet şekli demektir." demiştir. Cumhuriyetimiz demokratik, laik, sosyal bir hukuk devletidir.</p>` },
      { t: "Etkin vatandaş", html: `<p>Etkin vatandaş haklarını bilir ve korur, sorumluluklarını yerine getirir, kurallara uyar, toplumsal sorunların çözümüne katkı sağlar ve farklılıklara saygı duyar.</p>` },
      { t: "Kurumlar", html: `
        <div class="stats">
          <div><span>Muhtarlık</span>Mahalle ve köy ihtiyaçları</div>
          <div><span>Belediye</span>Su, yol, çöp, park · ALO 153</div>
          <div><span>Kaymakamlık</span>İlçedeki kurumların denetimi</div>
          <div><span>CİMER</span>ALO 150 · Dilekçe ve şikâyet</div>
        </div>` }
    ]
  };

  P.nitelikler = {
    title: "Demokrasinin Nitelikleri",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Örnekleri demokrasinin ilgili niteliğine yerleştir.</p>` }],
    sort: {
      prompt: "Her örneği niteliğine yerleştir.",
      groups: ["Çoğulculuk", "Katılım", "Hukukun üstünlüğü", "Millî egemenlik"],
      items: [["Mecliste farklı partilerin olması", 0], ["Farklı fikirlere saygı", 0], ["Sınıf başkanı seçimine oy vermek", 1], ["Belediyeye dilekçe vermek", 1], ["Mahkeme kararlarına uymak", 2], ["Kanun önünde eşitlik", 2], ["TBMM'nin açılması", 3], ["Egemenlik kayıtsız şartsız milletindir", 3]]
    }
  };

  P.iliski = {
    title: "Demokrasi ve Cumhuriyet Arasındaki İlişki",
    tabs: [{ t: "İlişki", html: `
      <div class="two">
        <div><b>Cumhuriyet</b>Devlet şeklidir. Egemenlik millete aittir, devlet başkanı seçimle gelir.</div>
        <div><b>Demokrasi</b>Yönetim anlayışıdır. Özgürlük, eşitlik, katılım ve çoğulculuğa dayanır.</div>
      </div>
      <div class="fx"><b>Atatürk</b>"Demokrasinin en çağdaş ve mantıklı uygulamasını sağlayan hükûmet şekli, cumhuriyettir."</div>` }]
  };

  P.bulmaca = {
    title: "Bulmacanın Cevap Anahtarı",
    tabs: [{ t: "Cevaplar", html: `<ol><li>TBMM</li><li>CUMHURİYET</li><li>ÇOĞULCULUK</li><li>DEMOKRASİ</li><li>KATILIM</li><li>PARTİ</li><li>MAHKEME</li></ol>` }]
  };

  P.oyun = {
    title: "Etkin Vatandaşlık Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Davranışları etkin vatandaşa uygun olup olmamasına göre grupla.</p>` }],
    sort: {
      prompt: "Her davranışı doğru gruba yerleştir.",
      groups: ["Etkin vatandaş", "Etkin vatandaşa uygun değil"],
      items: [["Fiş ve fatura almak", 0], ["Oy kullanmak", 0], ["Tarihî eserleri korumak", 0], ["STK'ya üye olmak", 0], ["Sorunları görmezden gelmek", 1], ["Kurallara uymamak", 1], ["Fikrini söylemekten çekinmek", 1]]
    }
  };

  P.kontrol30 = {
    title: "Siz Olsaydınız Ne Yapardınız? · Kontrol Listesi",
    checklist: [
      "Kartta verilen sorun örneğini dikkatle okudu.",
      "Etkin vatandaş olarak nasıl davranacağını açıkladı.",
      "Empati kurarak farklı bakış açılarını değerlendirdi.",
      "Vatandaşların sorumluluklarının toplum düzenine katkısını açıkladı.",
      "Arkadaşlarını saygıyla dinledi."
    ]
  };

  P.haklar = {
    title: "Temel İnsan Hak ve Özgürlükleri",
    tabs: [{ t: "Belgeler", html: `
      <div class="stats">
        <div><span>T.C. Anayasası</span>Yaşama (17), haberleşme (22), seyahat (23), düşünce (25), eğitim (42), sağlık (56)</div>
        <div><span>İnsan Hakları Evrensel Bildirgesi</span>10 Aralık 1948 · Yaşama, eğitim, çalışma, düşünce</div>
        <div><span>Çocuk Hakları Sözleşmesi</span>1989 · Yaşama, sağlık, eğitim, oyun, ifade özgürlüğü</div>
      </div>` }],
    sort: {
      prompt: "Örnekleri ilgili hakka yerleştir.",
      groups: ["Eğitim hakkı", "Sağlık hakkı", "Seyahat hürriyeti"],
      items: [["Ücretsiz ilkokul", 0], ["Evde eğitim", 0], ["Ambulans helikopter", 1], ["Aşı kampanyası", 1], ["Başka şehre yerleşmek", 2], ["Tatile gitmek", 2]]
    }
  };

  P.kontrol47 = {
    title: "Temel Hak ve Sorumluluklar · Kontrol Listesi",
    checklist: [
      "İstasyonlarda verilen görevleri yerine getirdi.",
      "Hikâye, şiir, slogan ya da afişte temel hak ve sorumlulukları doğru kullandı.",
      "Bilgileri güvenilir kaynaklardan topladı.",
      "Sunum sırasında arkadaşlarını dinledi.",
      "Çıkış kartını eksiksiz doldurdu."
    ]
  };

  P.kurumlar = {
    title: "Muhtarlık, Belediye ve Kaymakamlık",
    tabs: [{ t: "Görevler", html: `
      <div class="stats">
        <div><span>Muhtar</span>Mahalle ihtiyaçlarını belirler, ikamet ve kimlik belgeleri</div>
        <div><span>Belediye</span>Su, yol, çöp, park, itfaiye, toplu taşıma</div>
        <div><span>Kaymakam</span>İlçedeki kurumları denetler, güvenliği sağlar</div>
      </div>` }],
    sort: {
      prompt: "Her sorunu ilgili kuruma yerleştir.",
      groups: ["Muhtarlık", "Belediye", "Kaymakamlık"],
      items: [["İkametgâh belgesi", 0], ["Mahallenin ihtiyaç listesi", 0], ["Çöplerin toplanmaması", 1], ["Parktaki bozuk salıncak", 1], ["İlçedeki okulların denetimi", 2], ["İlçe güvenliği", 2]]
    }
  };

  P.kdk = {
    title: "KDK Çocuk",
    tabs: [{ t: "Kamu Denetçiliği Kurumu", html: `<p>Kamu Denetçiliği Kurumu (KDK), kamu kurumlarının hizmetleriyle ilgili şikâyetleri inceler ve çözüm önerir. <b>KDK Çocuk</b> birimi çocukların başvurularını alır; çocuklar sorunlarını kdkcocuk.gov.tr üzerinden, posta ile ya da şahsen iletebilir.</p>` }]
  };

  P.rubrik = {
    title: "İhtiyaçlar ve Sorunlar Karşısında Başvurulabilecek Kurumlar · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "İhtiyaç ve sorunları doğru belirledi.",
      "Başvurulabilecek kurum ve kuruluşları doğru eşleştirdi.",
      "Kurumların görev ve yetkilerini açıkladı.",
      "Başvuru yollarını doğru belirtti.",
      "Afiş veya posteri özenli ve görselle destekli hazırladı."
    ]
  };

  P.sorular = {
    title: "Daha Fazla Örnek Soru",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun.</p>` }],
    quiz: [
      { q: "\"Egemenlik kayıtsız şartsız milletindir.\" sözü hangi kavramla ilgilidir?", o: ["Millî egemenlik", "Çoğulculuk", "Katılım", "Hukukun üstünlüğü"], a: 0 },
      { q: "Mecliste farklı partilerin bulunması demokrasinin hangi niteliğidir?", o: ["Çoğulculuk", "Eşitlik", "Özgürlük", "Laiklik"], a: 0 },
      { q: "Ücretsiz ders kitabı dağıtılması cumhuriyetin hangi niteliğidir?", o: ["Sosyal devlet", "Laik devlet", "Hukuk devleti", "Çoğulculuk"], a: 0 },
      { q: "Belediyeye ulaşmak için hangi hat kullanılır?", o: ["ALO 153", "ALO 150", "ALO 112", "ALO 155"], a: 0 },
      { q: "İnsan Hakları Evrensel Bildirgesi hangi yıl kabul edildi?", o: ["1948", "1923", "1989", "1982"], a: 0 },
      { q: "Toprak kaybıyla mücadele eden sivil toplum kuruluşu hangisidir?", o: ["TEMA", "Darüşşafaka", "Türk Kalp Vakfı", "AFAD"], a: 0 },
      { q: "Hangisi bir sorumluluktur?", o: ["Kurallara uymak", "Eğitim almak", "Seyahat etmek", "Düşünceyi açıklamak"], a: 0 },
      { q: "Türk kadınına milletvekili seçme ve seçilme hakkı hangi yıl verildi?", o: ["1934", "1930", "1923", "1946"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları konulara göre grupla.</p>` }],
    sort: {
      prompt: "Her kavramı konusuna yerleştir.",
      groups: ["Demokrasi", "Haklar", "Kurumlar"],
      items: [["Çoğulculuk", 0], ["Katılım", 0], ["Seçim", 0], ["Yaşama hakkı", 1], ["Eğitim hakkı", 1], ["Seyahat hürriyeti", 1], ["Muhtarlık", 2], ["CİMER", 2], ["Belediye", 2]]
    },
    quiz: [
      { q: "Farklı görüşlerin bir zenginlik olarak görülmesine ne denir?", o: ["Çoğulculuk", "Katılım", "Laiklik"], a: 0 }
    ]
  };
})();

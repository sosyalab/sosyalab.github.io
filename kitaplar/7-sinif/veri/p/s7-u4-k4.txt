// 7. Sınıf 4. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "4. Öğrenme Alanı: Yaşayan Demokrasimiz",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Türkiye Cumhuriyeti'nin nitelikleri</b>Demokratik, lâik, sosyal hukuk devleti; Atatürk milliyetçiliği.</div>
          <div class="c-a"><b>Türkiye Cumhuriyeti'nin yönetim yapısı</b>Kuvvetler birliği ve ayrılığı; yasama, yürütme, yargı.</div>
          <div class="c-s"><b>Ülkemizde demokrasinin gelişimi</b>Demokrasinin temel nitelikleri; TBMM'den çok partili hayata.</div>
          <div class="c-k"><b>Demokrasinin uygulanma sürecinde karşılaşılan sorunlar</b>Darbeler, antidemokratik uygulamalar, hak ihlalleri.</div>
        </div>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Demokratik devlet:</b> Halkın yönetime katıldığı, egemenliğin millete ait olduğu devlet.</li>
          <li><b>Lâik devlet:</b> Din ve devlet işlerinin ayrı olduğu, din ve vicdan özgürlüğünün güvencede olduğu devlet.</li>
          <li><b>Sosyal devlet:</b> Vatandaşlarının refahını ve sosyal güvenliğini sağlayan devlet.</li>
          <li><b>Hukuk devleti:</b> Yöneticiler dâhil herkesin hukuka bağlı olduğu devlet.</li>
          <li><b>Kuvvetler ayrılığı:</b> Yasama, yürütme ve yargının ayrı organlara verilmesi.</li>
          <li><b>Genel oy ilkesi:</b> 18 yaşını dolduran her vatandaşın ayrım yapılmaksızın oy kullanması.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Kanun yapma yetkisine ne denir?", o: ["Yasama", "Yürütme", "Yargı"], a: 0 },
      { q: "Cumhuriyet hangi tarihte ilan edildi?", o: ["29 Ekim 1923", "23 Nisan 1920", "20 Nisan 1924"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Nitelikler ve yönetim", html: `
        <div class="two">
          <div><b>Anayasa 2. madde</b>Türkiye Cumhuriyeti; toplumun huzuru, millî dayanışma ve adalet anlayışı içinde, insan haklarına saygılı, Atatürk milliyetçiliğine bağlı, demokratik, lâik ve sosyal bir hukuk devletidir.</div>
          <div><b>Kuvvetler ayrılığı</b>Yasama: TBMM · Yürütme: Cumhurbaşkanı · Yargı: Bağımsız ve tarafsız mahkemeler.</div>
        </div>` },
      { t: "Demokrasinin gelişimi", html: `
        <div class="bars">
          <div><span>23 Nisan 1920 · TBMM açıldı</span><i style="--w:3"></i><b></b></div>
          <div><span>29 Ekim 1923 · Cumhuriyet ilan edildi</span><i style="--w:6"></i><b></b></div>
          <div><span>1924 · Terakkiperver Cumhuriyet Fırkası</span><i style="--w:8"></i><b></b></div>
          <div><span>1930 · Serbest Cumhuriyet Fırkası</span><i style="--w:10"></i><b></b></div>
          <div><span>1930–1934 · Kadınlara seçme ve seçilme hakkı</span><i style="--w:12"></i><b></b></div>
          <div><span>21 Temmuz 1946 · İlk çok partili seçim</span><i style="--w:16"></i><b></b></div>
          <div><span>2017–2018 · Cumhurbaşkanlığı Hükümet Sistemi</span><i style="--w:21.6"></i><b></b></div>
        </div>` },
      { t: "Sorunlar", html: `<p>27 Mayıs 1960 ve 12 Eylül 1980 askerî darbeleri, 15 Temmuz 2016 darbe girişimi demokrasiye yönelik tehditlerdir. Dünyada da darbeler, savaşlar, ayrımcılık ve basın özgürlüğünün engellenmesi gibi antidemokratik uygulamalar görülmektedir.</p>` }
    ]
  };

  P.kartopu = {
    title: "Kartopu Tekniği",
    tabs: [{ t: "Nasıl uygulanır?", html: `
      <ol>
        <li>Her öğrenci önce bireysel olarak fikirlerini listeler.</li>
        <li>İkili gruplar oluşturulur; iki liste birleştirilip ortak bir liste yapılır.</li>
        <li>İkili gruplar dörtlü, dörtlüler sekizli olur; her seferinde listeler birleştirilir.</li>
        <li>Sonunda tüm sınıfın ortak listesi oluşturulur.</li>
      </ol>
      <div class="fx"><b>Avantajı</b>Her öğrencinin fikri sürece katılır, tartışarak uzlaşma sağlanır.</div>` }]
  };

  P.dep = {
    title: "Düşün-Eşleş-Paylaş Tekniği",
    tabs: [{ t: "Nasıl uygulanır?", html: `
      <ol>
        <li><b>Düşün:</b> Soruyu bireysel olarak 1 dakika düşün.</li>
        <li><b>Eşleş:</b> Bir arkadaşınla eşleş, fikirlerinizi birleştir.</li>
        <li><b>Paylaş:</b> Ortak görüşünüzü sınıfla paylaş.</li>
      </ol>` }]
  };

  P.nitelikler = {
    title: "Türkiye Cumhuriyeti'nin Nitelikleri",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Örnekleri cumhuriyetin ilgili niteliğine yerleştir.</p>` }],
    sort: {
      prompt: "Her örneği ilgili niteliğe yerleştir.",
      groups: ["Demokratik devlet", "Lâik devlet", "Sosyal devlet", "Hukuk devleti"],
      items: [["Seçimlerde oy kullanmak", 0], ["Farklı partilerin olması", 0], ["İnanç özgürlüğü", 1], ["Cami ve kilisenin yan yana olması", 1], ["Ücretsiz ders kitabı", 2], ["Evde sağlık hizmeti", 2], ["Kanun önünde eşitlik", 3], ["Mahkemeye başvurma hakkı", 3]]
    }
  };

  P.mektup = {
    title: "Cumhuriyetin İzinde Temel Haklarımız · Mektup Kontrol Listesi",
    checklist: [
      "Mektup yazım kurallarına (hitap, giriş, gelişme, kapanış) uydu.",
      "Cumhuriyetin getirdiği temel hak ve özgürlüklere örnek verdi.",
      "Hakların korunmasında cumhuriyetin önemini açıkladı.",
      "Cumhuriyetin niteliklerini doğru ilişkilendirdi.",
      "Açık, anlaşılır ve etkili bir dil kullandı.",
      "Yazım ve noktalama kurallarına uydu."
    ]
  };

  P.yonetim = {
    title: "Ülkemizde Yönetim",
    tabs: [{ t: "Üç güç", html: `
      <div class="stats">
        <div><span>Yasama</span>TBMM · 600 milletvekili · Kanun yapar, bütçeyi kabul eder.</div>
        <div><span>Yürütme</span>Cumhurbaşkanı ve bakanlar · Kanunları uygular.</div>
        <div><span>Yargı</span>Bağımsız mahkemeler · Türk milleti adına karar verir.</div>
      </div>
      <p>Yüksek mahkemeler: Anayasa Mahkemesi, Yargıtay, Danıştay, Uyuşmazlık Mahkemesi.</p>` }],
    sort: {
      prompt: "Görevleri ilgili güce yerleştir.",
      groups: ["Yasama", "Yürütme", "Yargı"],
      items: [["Kanun çıkarmak", 0], ["Savaş ilanına karar vermek", 0], ["Bakanları atamak", 1], ["Kanunları yayımlamak", 1], ["Davalara bakmak", 2], ["Kanunların anayasaya uygunluğunu denetlemek", 2]]
    }
  };

  P.tastlari = {
    title: "Yönetimin Yapı Taşları",
    tabs: [{ t: "Karşılaştırma", html: `
      <div class="two">
        <div><b>Kuvvetler birliği</b>Yasama, yürütme ve yargı tek elde (Mecliste) toplanır. 1921 Anayasası, Millî Mücadele dönemi.</div>
        <div><b>Kuvvetler ayrılığı</b>Güçler ayrı organlara verilir ve birbirini denetler. Hak ve özgürlükler güvence altındadır.</div>
      </div>` }],
    quiz: [
      { q: "Cumhurbaşkanlığı Hükümet Sisteminde Cumhurbaşkanını kim seçer?", o: ["Halk", "TBMM", "Bakanlar"], a: 0 },
      { q: "Kanunların anayasaya uygunluğunu hangi mahkeme denetler?", o: ["Anayasa Mahkemesi", "Yargıtay", "Danıştay"], a: 0 },
      { q: "Devlet ile vatandaş arasındaki idari davalara bakan en üst mahkeme hangisidir?", o: ["Danıştay", "Yargıtay", "Uyuşmazlık Mahkemesi"], a: 0 }
    ]
  };

  P.anayasa = {
    title: "T.C. 1982 Anayasası",
    tabs: [
      { t: "Temel maddeler", html: `
        <ul>
          <li><b>Madde 1:</b> Türkiye Devleti bir Cumhuriyettir.</li>
          <li><b>Madde 2:</b> Cumhuriyetin nitelikleri.</li>
          <li><b>Madde 6:</b> Egemenlik kayıtsız şartsız Milletindir.</li>
          <li><b>Madde 7:</b> Yasama yetkisi TBMM'ye aittir.</li>
          <li><b>Madde 8:</b> Yürütme yetkisi ve görevi Cumhurbaşkanı tarafından kullanılır.</li>
          <li><b>Madde 9:</b> Yargı yetkisi bağımsız ve tarafsız mahkemelerce kullanılır.</li>
          <li><b>Madde 10:</b> Kanun önünde eşitlik.</li>
          <li><b>Madde 24:</b> Din ve vicdan hürriyeti.</li>
          <li><b>Madde 67:</b> Seçme, seçilme ve siyasi faaliyette bulunma hakları.</li>
        </ul>` }
    ]
  };

  P.nesivar = {
    title: "Nesi Var? Tekniği",
    tabs: [{ t: "Nasıl oynanır?", html: `
      <ol>
        <li>Bir gönüllü sınıf dışına çıkar.</li>
        <li>Sınıf; yasama, yürütme veya yargıdan birini seçer.</li>
        <li>Gönüllü içeri gelir ve "Nesi var?" diye sorar.</li>
        <li>Arkadaşları kavramın görevleri ve özellikleriyle ilgili ipuçları verir.</li>
        <li>Gönüllü belirlenen tahmin hakkı içinde kavramı bulmaya çalışır.</li>
      </ol>` }]
  };

  P.demokrasi = {
    title: "Ülkemizde Demokrasi",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Olayları ilgili demokrasi niteliğine yerleştir.</p>` }],
    sort: {
      prompt: "Her olayı ilgili niteliğe yerleştir.",
      groups: ["Millî egemenlik", "Eşitlik", "Çoğulculuk", "Hukukun üstünlüğü"],
      items: [["TBMM'nin açılması", 0], ["Cumhuriyetin ilanı", 0], ["Kadınlara seçme hakkı", 1], ["Kanun önünde eşitlik", 1], ["1946 çok partili seçim", 2], ["Serbest Cumhuriyet Fırkası", 2], ["1924 Anayasası", 3], ["Bağımsız mahkemeler", 3]]
    }
  };

  P.rubrik = {
    title: "Demokrasinin Renkleri: Özgün Ürünümüz · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Ürün demokrasinin temel nitelikleriyle demokrasi tarihi arasındaki ilişkiyi yansıtıyor.",
      "Tarihî olayları doğru ve kronolojik olarak kullandı.",
      "Ürün özgün ve yaratıcı.",
      "Görsel düzen ve estetik açıdan özenli.",
      "Grup üyeleri iş birliği içinde çalıştı.",
      "Ürünü sınıfa açık ve anlaşılır biçimde sundu."
    ]
  };

  P.sorunlar = {
    title: "Demokrasinin Uygulanma Sürecinde Sorunlar",
    tabs: [{ t: "Sorunlar ve çözümler", html: `
      <div class="two">
        <div><b>Sorunlar</b>• Askerî darbeler<br>• Seçimlere düşük katılım<br>• Ayrımcılık ve ön yargı<br>• Yanlış bilgi ve kutuplaşma<br>• İfade özgürlüğünün kısıtlanması</div>
        <div><b>Çözümler</b>• Hukukun üstünlüğü<br>• Demokrasi eğitimi<br>• Seçimlere katılım<br>• Medya okuryazarlığı<br>• Hoşgörü ve uzlaşma kültürü</div>
      </div>` }]
  };

  P.karsilasilan = {
    title: "Demokraside Karşılaşılan Sorunlar",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Durumları demokratik olup olmamasına göre grupla.</p>` }],
    sort: {
      prompt: "Durumları doğru gruba yerleştir.",
      groups: ["Demokratik", "Antidemokratik"],
      items: [["Sınıf başkanını seçimle belirlemek", 0], ["Farklı görüşleri dinlemek", 0], ["Kuralları birlikte belirlemek", 0], ["Seçilmiş yönetimi darbeyle devirmek", 1], ["Gazetecileri susturmak", 1], ["İnancından dolayı ayrımcılık", 1]]
    }
  };

  P.galeri = {
    title: "Öğrenme Galerisi Tekniği",
    tabs: [{ t: "Nasıl uygulanır?", html: `
      <ol>
        <li>Sınıf gruplara ayrılır, her grup farklı renkte kalem seçer.</li>
        <li>Gruplar konuyla ilgili bilgileri bir kâğıda maddeler hâlinde yazar.</li>
        <li>Kâğıtlar sınıfın farklı köşelerine asılır.</li>
        <li>Gruplar sırayla diğer listeleri dolaşır, eksik gördükleri bilgileri kendi renkleriyle ekler.</li>
        <li>Sonunda listeler birlikte değerlendirilir.</li>
      </ol>` }]
  };

  P.galerikontrol = {
    title: "Demokrasi Galerisi: Sorunlar ve Çözümler · Kontrol Listesi",
    checklist: [
      "Grubuyla birlikte sorunları maddeler hâlinde listeledi.",
      "Sorunlara uygun çözüm önerileri yazdı.",
      "Diğer grupların listelerini dikkatle inceledi.",
      "Eksik bilgileri kendi rengiyle ekledi.",
      "Grup içinde iş birliği yaptı.",
      "Farklı görüşlere saygı gösterdi.",
      "Ulaştığı sonuçları sınıfla paylaştı."
    ]
  };

  P.sorular = {
    title: "Öğrenme Alanı Ek Sorular",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "Anayasamızın hangi maddesi cumhuriyetin niteliklerini belirtir?", o: ["2. madde", "10. madde", "24. madde", "67. madde"], a: 0 },
      { q: "Ücretsiz ders kitabı dağıtılması hangi niteliğin örneğidir?", o: ["Sosyal devlet", "Lâik devlet", "Kuvvetler birliği", "Çoğulculuk"], a: 0 },
      { q: "1921 Anayasası hangi ilkeyi benimsemiştir?", o: ["Kuvvetler birliği", "Kuvvetler ayrılığı", "Parlamenter sistem", "Çok partili hayat"], a: 0 },
      { q: "Türk kadınına milletvekili seçme ve seçilme hakkı hangi yıl verildi?", o: ["1934", "1923", "1946", "1960"], a: 0 },
      { q: "Türkiye'de ilk çok partili genel seçim hangi yıl yapıldı?", o: ["1946", "1923", "1930", "1950"], a: 0 },
      { q: "\"Oyların sayım ve dökümünün herkese açık yapılması\" hangi seçim ilkesidir?", o: ["Açık sayım ve döküm", "Gizli oy", "Genel oy", "Eşit oy"], a: 0 },
      { q: "Farklı görüşlerin yönetimde temsil edilmesine ne denir?", o: ["Çoğulculuk", "Kuvvetler birliği", "Laiklik", "Sosyal devlet"], a: 0 },
      { q: "15 Temmuz 2016'da halkın darbe girişimine karşı durması neyi gösterir?", o: ["Millî iradeye sahip çıkmayı", "Kuvvetler birliğini", "Tek partili yönetimi", "Ayrımcılığı"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları konulara göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["Cumhuriyetin nitelikleri", "Yönetim yapısı", "Demokrasinin nitelikleri"],
      items: [["Lâik devlet", 0], ["Sosyal devlet", 0], ["Hukuk devleti", 0], ["Yasama", 1], ["Yürütme", 1], ["Yargı", 1], ["Çoğulculuk", 2], ["Katılımcılık", 2], ["Millî egemenlik", 2]]
    },
    quiz: [
      { q: "Halk oylamasının diğer adı nedir?", o: ["Referandum", "Meclis", "Kanun"], a: 0 },
      { q: "Bireyler arasındaki uyuşmazlıklara bakan en üst yargı organı hangisidir?", o: ["Yargıtay", "Danıştay", "TBMM"], a: 0 }
    ]
  };
})();

// 7. Sınıf 5. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "5. Öğrenme Alanı: Hayatımızdaki Ekonomi",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Millî kalkınma hamleleri</b>Türkiye İktisat Kongresi, yerli girişimciler, savunma sanayisi ve teknoloji hamleleri.</div>
          <div class="c-s"><b>Ekonomik gelişmişlik ile üretim, dağıtım ve tüketim arasındaki döngü</b>Mali, kültürel ve demografik unsurlar; tasarruf ve yatırım.</div>
        </div>` },
      { t: "Bu alanda neler yapacağız?", html: `
        <ul>
          <li>Millî kalkınma hamlelerini neden ve sonuçlarıyla <b>yorumlayacağız</b>.</li>
          <li>Ekonomik gelişmişlik ile üretim, dağıtım ve tüketim döngüsü arasındaki ilişkiyi <b>çözümleyeceğiz</b>.</li>
        </ul>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Ekonomi:</b> İnsanların ihtiyaçlarını karşılamak için sınırlı kaynakların nasıl kullanıldığını inceleyen bilim.</li>
          <li><b>Kalkınma:</b> Bir ülkenin ekonomik ve sosyal açıdan ilerlemesi.</li>
          <li><b>Üretim:</b> İhtiyaçları karşılamak için mal ve hizmet ortaya koymak.</li>
          <li><b>Dağıtım:</b> Üretilen malların tüketiciye ulaştırılması.</li>
          <li><b>Tüketim:</b> Ürünlerin ihtiyaçları karşılamak için kullanılması.</li>
          <li><b>Yatırım:</b> Gelecekte gelir elde etmek amacıyla kaynak ayırmak.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Türkiye İktisat Kongresi hangi yıl toplandı?", o: ["1923", "1938", "1946"], a: 0 },
      { q: "Ürünlerin fabrikadan markete taşınması hangi aşamadır?", o: ["Dağıtım", "Üretim", "Tüketim"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Kalkınma hamleleri", html: `
        <div class="stats">
          <div><span>Şakir Zümre</span>İlk özel silah ve cephane fabrikası (1925).</div>
          <div><span>Nuri Killigil</span>Silah, mühimmat ve demir fabrikaları.</div>
          <div><span>Mehmet Ali Kâğıtçı</span>İzmit kâğıt fabrikası (1934–1936).</div>
          <div><span>Nuri Demirağ</span>Demiryolları, ilk yerli uçak, Gök Okulu.</div>
          <div><span>Zihni Derin</span>Rize'de çay tarımı.</div>
          <div><span>Günümüz</span>İHA, SİHA, KAAN, MİLGEM, TCG Anadolu, TOGG, TURKOVAC.</div>
        </div>` },
      { t: "Ekonomik döngü", html: `
        <div class="bars">
          <div><span>Tasarruf</span><i style="--w:4"></i><b></b></div>
          <div><span>Yatırım</span><i style="--w:8"></i><b></b></div>
          <div><span>Üretim</span><i style="--w:12"></i><b></b></div>
          <div><span>Dağıtım</span><i style="--w:16"></i><b></b></div>
          <div><span>Tüketim → yeni tasarruf</span><i style="--w:21.6"></i><b></b></div>
        </div>
        <p>Ekonomik gelişmişlik; mali güç, kültürel birikim ve demografik yapıyla şekillenir.</p>` }
    ]
  };

  P.tua = {
    title: "Türkiye Uzay Ajansı",
    tabs: [{ t: "TUA", html: `
      <ul>
        <li>2018'de uzay ve havacılık faaliyetlerini yürütmek amacıyla kuruldu.</li>
        <li>Uydu sistemleri, fırlatma araçları ve test üniteleri geliştirir.</li>
        <li>Türkiye'nin ilk insanlı uzay görevinde astronot <b>Alper Gezeravcı</b> 2024'te Uluslararası Uzay İstasyonu'na gitti.</li>
        <li>Millî Uzay Programı ile Ay'a ulaşma ve yerli uydu hedefleri belirlenmiştir.</li>
      </ul>` }]
  };

  P.hamleler = {
    title: "Millî Kalkınma Hamlelerinin Neden ve Sonuçları",
    tabs: [{ t: "Neden – sonuç", html: `
      <div class="two">
        <div><b>Nedenler</b>• Savaşlardan sonra ekonominin zayıflaması<br>• Dışa bağımlılık<br>• Yetersiz sanayi tesisleri<br>• Ekonomik bağımsızlık isteği</div>
        <div><b>Sonuçlar</b>• Yerli üretim arttı<br>• Fabrikalar kuruldu, istihdam arttı<br>• Savunma sanayisi güçlendi<br>• Ülke ekonomisi ve güvenliği güçlendi</div>
      </div>` }],
    sort: {
      prompt: "İfadeleri neden ya da sonuç olarak grupla.",
      groups: ["Neden", "Sonuç"],
      items: [["Dışa bağımlılık", 0], ["Savaş yıllarında üretimin düşmesi", 0], ["Ham madde sıkıntısı", 0], ["Yerli üretimin artması", 1], ["Yeni iş alanlarının açılması", 1], ["Savunmada güçlenme", 1]]
    }
  };

  P.fikir = {
    title: "Fikir Fırtınası: Millî Kalkınma Hamlelerimiz · Kontrol Listesi",
    checklist: [
      "Beyin fırtınasına etkin biçimde katıldı.",
      "Millî kalkınma hamlelerinin toplumu etkilediği unsurlara örnek verdi.",
      "TEKNOFEST örneklerinden yola çıkarak çıkarım yaptı.",
      "Fikirlerini açık ve anlaşılır biçimde ifade etti.",
      "Arkadaşlarının fikirlerini dinledi ve saygı gösterdi.",
      "Grup çalışmasında görevini yerine getirdi.",
      "Çıkarımlarını sınıf tahtasına yazılmasına katkı sağladı."
    ]
  };

  P.rubrik = {
    title: "Üreten Türkiye, Güçlü Gelecek · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Metin millî kalkınma hamlelerinin neden ve sonuçlarını doğru yansıtıyor.",
      "Millî kalkınma bilinci, çalışkanlık, vatanseverlik, üretkenlik ve vefa değerlerine vurgu yaptı.",
      "Metin özgün ve anlamlı.",
      "Resim, poster veya afiş metinle uyumlu ve yaratıcı.",
      "Grup içinde iş birliği yaptı.",
      "Türkçeyi doğru ve etkili kullandı."
    ]
  };

  P.gelismislik = {
    title: "Ekonomik Gelişmişlik",
    tabs: [{ t: "Unsurlar", html: `
      <div class="stats">
        <div><span>Mali</span>Gelir, sermaye, yatırım, bütçe, vergi.</div>
        <div><span>Kültürel</span>Eğitim, bilim, çalışma anlayışı, gelenekler.</div>
        <div><span>Demografik</span>Nüfusun sayısı, yaş yapısı ve niteliği.</div>
      </div>` }],
    sort: {
      prompt: "Örnekleri ilgili unsura yerleştir.",
      groups: ["Mali", "Kültürel", "Demografik"],
      items: [["Vergi gelirleri", 0], ["Sermaye birikimi", 0], ["Eğitim düzeyi", 1], ["Yöresel el sanatları", 1], ["Genç nüfus oranı", 2], ["Göç", 2]]
    }
  };

  P.pazar = {
    title: "Pazar Yeri Tekniği",
    tabs: [{ t: "Nasıl uygulanır?", html: `
      <ol>
        <li>Sınıfta rahat dolaşılabilecek bir alan oluşturulur.</li>
        <li>Her öğrenci soruya ilişkin fikrini küçük bir kâğıda yazar ve yakasına takar.</li>
        <li>Öğrenciler dolaşarak birbirlerinin fikirlerini okur, soru sorar.</li>
        <li>Beğenilen fikirler kâğıt değişimiyle "satın alınır".</li>
        <li>Sonunda değiştirme nedenleri paylaşılır ve sonuçlar tartışılır.</li>
      </ol>` }]
  };

  P.dinamik = {
    title: "Ekonominin Dinamikleri",
    tabs: [{ t: "Ülkeler", html: `
      <div class="stats">
        <div><span>Türkiye</span>Genç nüfus, artan üretim, otomotiv, tekstil, turizm.</div>
        <div><span>Japonya</span>Yüksek teknoloji, güçlü sanayi, yaşlı nüfus.</div>
        <div><span>Almanya</span>Yüksek gelir, kaliteli üretim, güçlü lojistik.</div>
        <div><span>Hindistan</span>Genç nüfus, düşük gelir, gelişmekte olan altyapı.</div>
      </div>` }],
    sort: {
      prompt: "Özellikleri ülke grubuna yerleştir.",
      groups: ["Gelişmiş ülke", "Gelişmekte olan ülke"],
      items: [["Yüksek kişi başı gelir", 0], ["Gelişmiş lojistik", 0], ["Yüksek teknoloji kullanımı", 0], ["Temel ihtiyaçlara yönelik tüketim", 1], ["Yetersiz ulaşım altyapısı", 1], ["Emek yoğun üretim", 1]]
    }
  };

  P.sorular = {
    title: "Öğrenme Alanı Ek Sorular",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "Misak-ı İktisadi hangi kongrede kabul edildi?", o: ["Türkiye İktisat Kongresi", "Erzurum Kongresi", "Sivas Kongresi", "Lozan Konferansı"], a: 0 },
      { q: "Rize'de çay tarımını başlatan ziraat mühendisi kimdir?", o: ["Zihni Derin", "Nuri Demirağ", "Şakir Zümre", "Vecihi Hürkuş"], a: 0 },
      { q: "Türkiye'nin ilk yerli uçak fabrikasını kim kurdu?", o: ["Nuri Demirağ", "Mehmet Ali Kâğıtçı", "Nuri Killigil", "Zihni Derin"], a: 0 },
      { q: "Dünyanın ilk SİHA gemisi hangisidir?", o: ["TCG Anadolu", "TCG İstanbul", "MİLGEM", "KAAN"], a: 0 },
      { q: "Türkiye'nin yerli Covid-19 aşısının adı nedir?", o: ["TURKOVAC", "TOGG", "TUSAŞ", "TEKNOFEST"], a: 0 },
      { q: "Bir ülkede bir yılda üretilen tüm nihai mal ve hizmetlerin toplam değerine ne denir?", o: ["GSYH", "Bütçe", "Enflasyon", "İhracat"], a: 0 },
      { q: "Nüfusun yaş yapısı ve niteliği hangi ekonomik gelişmişlik unsurudur?", o: ["Demografik", "Mali", "Kültürel", "Coğrafi"], a: 0 },
      { q: "Tasarrufun artması öncelikle neyi artırır?", o: ["Yatırımları", "İthalatı", "İsrafı", "Dışa bağımlılığı"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları konulara göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["Millî kalkınma hamleleri", "Ekonomik döngü"],
      items: [["MİLGEM", 0], ["TEKNOFEST", 0], ["Bilişim Vadisi", 0], ["Misak-ı İktisadi", 0], ["Üretim", 1], ["Dağıtım", 1], ["Tüketim", 1], ["Tasarruf", 1]]
    },
    quiz: [
      { q: "Yeni fikirleri değer üreten çıktılara dönüştürmeye ne denir?", o: ["Yenilikçilik (inovasyon)", "Tasarruf", "Tüketim"], a: 0 },
      { q: "Eldeki kaynakları verimli kullanıp israftan kaçınmaya ne denir?", o: ["Tasarruf", "Pazarlama", "Dağıtım"], a: 0 }
    ]
  };
})();

// 6. Sınıf 6. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "6. Öğrenme Alanı: Teknoloji ve Sosyal Bilimler",
    tabs: [
      { t: "Konular", html: `
        <div class="two">
          <div><b>Ulaşım ve iletişim teknolojilerinin kültürel etkileşimdeki rolü</b>At arabasından jet uçaklarına, mektuptan sosyal medyaya; küreselleşme, popüler kültür ve millî kültürün korunması.</div>
          <div><b>Telif ve patent süreci</b>Fikrî mülkiyet, telif hakkı, patent hakkı, tescil, Fikir ve Sanat Eserleri Kanunu, Sınai Mülkiyet Kanunu, TÜRKPATENT.</div>
        </div>` },
      { t: "Bu alanda neler yapacağız?", html: `
        <ul>
          <li>Ulaşım ve iletişim teknolojilerindeki gelişmelerin kültürel etkileşimdeki rolünü <b>yapılandıracağız</b>.</li>
          <li>Bir ürün veya fikrin telif ve patent süreçleriyle ilgili <b>bilgi toplayacağız</b>.</li>
        </ul>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Emek:</b> Bir iş için harcanan beden ve zihin gücü.</li>
          <li><b>Fikir:</b> Bir konuda düşünülerek ulaşılan sonuç, düşünce.</li>
          <li><b>Fikrî mülkiyet:</b> İnsan zekâsıyla ortaya çıkan eser ve buluşlar üzerindeki haklar.</li>
          <li><b>İletişim:</b> Duygu, düşünce ve bilgilerin aktarılması.</li>
          <li><b>Marka:</b> Bir ürünü ya da hizmeti benzerlerinden ayıran isim, işaret veya logo.</li>
          <li><b>Patent:</b> Buluş sahibine buluşu üzerinde tanınan hak ve bunu gösteren belge.</li>
          <li><b>Telif:</b> Fikir ve sanat eseri sahibinin eseri üzerindeki hakları.</li>
          <li><b>Tescil:</b> Bir hakkın resmî olarak kayda geçirilmesi.</li>
          <li><b>Ulaşım:</b> İnsanların ve yüklerin bir yerden başka bir yere taşınması.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Bir buluş sahibine buluşu üzerinde tanınan hakka ne denir?", o: ["Telif", "Patent", "Marka"], a: 1 },
      { q: "Kitap, şarkı ve film gibi eserlerin sahiplerinin haklarına ne denir?", o: ["Telif hakkı", "Patent hakkı", "Vergi"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Ulaşım ve iletişim", html: `
        <div class="bars">
          <div><span>1500–1840 · At arabası, yelkenli</span><i style="--w:3"></i><b>16 km/sa</b></div>
          <div><span>1860–1930 · Buharlı tren ve gemi</span><i style="--w:8"></i><b>60–100 km/sa</b></div>
          <div><span>1950'ler · Pervaneli uçak</span><i style="--w:12"></i><b>140–160 km/sa</b></div>
          <div><span>1960'lar · Jet uçağı</span><i style="--w:21.6"></i><b>800–1100 km/sa</b></div>
        </div>
        <p>Ulaşım ve iletişim hızlandıkça dünya "küresel köy"e dönüştü; kültürel etkileşim arttı. Matbaa, telgraf, telefon, radyo, televizyon, genel ağ ve sosyal medya bilgiye ulaşmayı kolaylaştırdı.</p>` },
      { t: "Kültüre etkileri", html: `
        <div class="two">
          <div><b>Olumlu</b>Farklı kültürleri tanıma, hoşgörü, kültür turizmi, kültürümüzü dünyaya tanıtma (döner, diziler).</div>
          <div><b>Olumsuz</b>Popüler kültürün baskınlaşması, yabancı kelimelerin artması, yerel geleneklerin unutulması.</div>
        </div>
        <div class="fx"><b>Ne yapmalıyız?</b>Türkçeyi doğru kullanmalı, gelenek ve değerlerimizi yaşatmalı, kültürümüzü gelecek kuşaklara aktarmalıyız.</div>` },
      { t: "Telif ve patent", html: `
        <div class="two">
          <div><b>Telif hakkı ©</b>Fikir ve Sanat Eserleri Kanunu. Eserin oluşturulmasıyla başlar, sahibinin ölümünden sonra 70 yıl sürer. İsteğe bağlı tescil: Kültür ve Turizm Bakanlığı.</div>
          <div><b>Patent hakkı ®</b>Sınai Mülkiyet Kanunu. Başvuru tarihinden itibaren 20 yıl. Tek yetkili kurum: Türk Patent ve Marka Kurumu (turkpatent.gov.tr).</div>
        </div>` }
    ]
  };

  P.ulasim = {
    title: "Ulaşım Araçlarının Gelişimi",
    tabs: [{ t: "Zaman çizelgesi", html: `
      <div class="bars">
        <div><span>Tekerlek (MÖ 3500)</span><i style="--w:2"></i><b></b></div>
        <div><span>Yelkenli gemi</span><i style="--w:5"></i><b></b></div>
        <div><span>Buharlı tren (1825)</span><i style="--w:9"></i><b></b></div>
        <div><span>Otomobil (1886)</span><i style="--w:12"></i><b></b></div>
        <div><span>Uçak (1903)</span><i style="--w:15"></i><b></b></div>
        <div><span>Jet uçağı (1950'ler)</span><i style="--w:18"></i><b></b></div>
        <div><span>Hızlı tren, elektrikli araç</span><i style="--w:21.6"></i><b></b></div>
      </div>
      <div class="fx"><b>Örnek</b>1838'de İstanbul ile Adana arası atla yaklaşık 30 gün sürerken, 1926'da demiryoluyla 1 gün 11 saat 16 dakikaya düştü.</div>` }],
    quiz: [
      { q: "Hangi ulaşım aracı en hızlıdır?", o: ["Buharlı gemi", "Jet uçağı", "At arabası"], a: 1 },
      { q: "Ulaşımın hızlanması kültürü nasıl etkilemiştir?", o: ["Kültürel etkileşimi artırmıştır", "Hiç etkilememiştir", "Kültürleri birbirinden uzaklaştırmıştır"], a: 0 }
    ]
  };

  P.iletisim = {
    title: "İletişimin Hızı",
    tabs: [{ t: "İletişim araçları", html: `
      <div class="bars">
        <div><span>Mektup, ulak</span><i style="--w:2"></i><b>günler, haftalar</b></div>
        <div><span>Matbaa (Gutenberg, 1450)</span><i style="--w:5"></i><b></b></div>
        <div><span>Telgraf (1837)</span><i style="--w:8"></i><b>dakikalar</b></div>
        <div><span>Telefon (1876)</span><i style="--w:11"></i><b>anında ses</b></div>
        <div><span>Radyo ve televizyon</span><i style="--w:14"></i><b>kitlesel yayın</b></div>
        <div><span>Genel ağ ve e-posta</span><i style="--w:18"></i><b>saniyeler</b></div>
        <div><span>Akıllı telefon, 5G, sosyal medya</span><i style="--w:21.6"></i><b>anında görüntü</b></div>
      </div>` }],
    sort: {
      prompt: "Her iletişim aracını dönemine yerleştir.",
      groups: ["Geçmişte", "Günümüzde"],
      items: [["Mektup", 0], ["Telgraf", 0], ["Daktilo", 0], ["Güvercin", 0], ["Görüntülü arama", 1], ["Sosyal medya", 1], ["E-posta", 1], ["Akıllı saat", 1]]
    }
  };

  P.hayat = {
    title: "Hayatımız Teknoloji",
    tabs: [{ t: "Bir günde teknoloji", html: `
      <ul>
        <li><b>Sabah:</b> Akıllı telefonun alarmıyla uyanmak, hava durumuna bakmak.</li>
        <li><b>Yolda:</b> Harita uygulamasıyla güzergâh bulmak, taksi çağırmak.</li>
        <li><b>Okulda:</b> Akıllı tahta, EBA, e-Okul.</li>
        <li><b>Alışveriş:</b> Kartla ödeme, çevrim içi sipariş.</li>
        <li><b>Akşam:</b> Görüntülü görüşme, dizi ve müzik platformları.</li>
      </ul>
      <div class="fx"><b>Düşün</b>Teknoloji hayatı kolaylaştırırken yüz yüze iletişimi, sağlığımızı ve kültürümüzü nasıl etkiliyor?</div>` }]
  };

  P.milli = {
    title: "Ulaşım ve İletişim Teknolojilerinin Millî Kültürümüze Etkileri",
    tabs: [{ t: "Etkiler", html: `
      <div class="two">
        <div><b>Olumlu etkiler</b>Türk dizileri, döner, Türk kahvesi dünyada tanındı; kültür turizmi arttı; yurt dışındaki Türkler kültürleriyle bağ kurabiliyor.</div>
        <div><b>Olumsuz etkiler</b>Dükkân tabelalarında yabancı kelimeler, Türkçenin bozulması, geleneksel oyun ve el sanatlarının unutulması, yabancı bayramların benimsenmesi.</div>
      </div>
      <div class="fx"><b>Çözüm</b>Türkçeyi özenle kullanmak, Türkçe içerik üretmek, yerli uygulama ve ürünleri tercih etmek, gelenek ve göreneklerimizi aile içinde yaşatmak.</div>` }],
    sort: {
      prompt: "Her durumu olumlu ya da olumsuz etki olarak ayır.",
      groups: ["Olumlu", "Olumsuz"],
      items: [["Türk dizilerinin yurt dışında izlenmesi", 0], ["Dönerin dünyada sevilmesi", 0], ["Kültür turizminin artması", 0], ["Yabancı dilde tabelalar", 1], ["Türkçenin bozulması", 1], ["Geleneklerin unutulması", 1]]
    }
  };

  P.turkpatent = {
    title: "Türk Patent ve Marka Kurumunun Hizmetleri",
    tabs: [{ t: "Hizmetler", html: `
      <ul>
        <li>Patent, faydalı model, marka, tasarım ve coğrafi işaret başvurularını alır ve tescil eder.</li>
        <li>Buluşların kullanımını takip eder, teknoloji transferini yönlendirir.</li>
        <li>Uluslararası kuruluşlarla iş birliği yapar.</li>
        <li>Teknoloji ve AR-GE bilgi bankalarıyla doküman merkezleri kurar.</li>
        <li>Gençleri ve girişimcileri buluş yapmaya ve patent almaya teşvik eder (Üniversiteler Arası Patent Yarışması).</li>
      </ul>
      <p class="src">Ayrıntı için: <a href="https://www.turkpatent.gov.tr" target="_blank" rel="noopener">turkpatent.gov.tr ↗</a></p>` }]
  };

  P.telif = {
    title: "Telif Hakları Hakkında Daha Fazla Bilgi",
    tabs: [{ t: "Bilmen gerekenler", html: `
      <div class="stats">
        <div><span>©</span>Telif hakkı sembolü</div>
        <div><span>70 yıl</span>Eser sahibinin ölümünden sonra koruma süresi</div>
        <div><span>Bandrol</span>Kitap, müzik, film ve oyunlara verilen güvenlik etiketi</div>
      </div>
      <ul>
        <li>Telif hakkı eserin oluşturulmasıyla kendiliğinden başlar; tescil isteğe bağlıdır.</li>
        <li>Bandrolsüz ürünler korsandır; satın almak hem emeğe saygısızlık hem de suçtur.</li>
        <li>Hak ihlallerinde mahkemeye başvurulur; denetimden Emniyet Genel Müdürlüğü sorumludur.</li>
      </ul>
      <p class="src">Kaynak: <a href="https://www.ktb.gov.tr" target="_blank" rel="noopener">Kültür ve Turizm Bakanlığı ↗</a></p>` }]
  };

  P.patent = {
    title: "Patent Süreci Hakkında Daha Fazla Bilgi",
    tabs: [{ t: "Adım adım patent", html: `
      <ol>
        <li>Buluşunu gizli tut, kamuya açıklama.</li>
        <li>Benzer patent var mı, araştır.</li>
        <li>Tarifname, istemler, özet ve teknik resimleri hazırla.</li>
        <li>turkpatent.gov.tr üzerinden çevrim içi başvur, ücreti öde.</li>
        <li>Araştırma ve inceleme raporunu bekle.</li>
        <li>Uygun bulunursa patent belgesi alınır; 20 yıl boyunca yıllık ücret ödenir.</li>
      </ol>
      <div class="fx"><b>Patent şartları</b>Yeni olmalı, buluş basamağı içermeli, sanayiye uygulanabilir olmalı (Madde 82).</div>` }]
  };

  P.rapor = {
    title: "Rapor Hazırlama Derecelendirme Ölçeği",
    levels: RUBRIC,
    checklist: [
      "Grubuyla bir fikrî eser ya da buluş belirledi.",
      "Telif ya da patent sürecini adım adım ve doğru açıkladı.",
      "Güvenilir yazılı, görsel ya da dijital kaynaklardan bilgi topladı.",
      "Kaynaklarını raporunda belirtti.",
      "Hakların korunmasının önemini açıkladı.",
      "Raporunu düzenli ve anlaşılır yazdı.",
      "Türkçeyi doğru, güzel ve etkili kullandı.",
      "Raporunu zamanında teslim etti."
    ]
  };

  P.sunum = {
    title: "Rapor Sunumu Kontrol Listesi",
    checklist: [
      "Raporunu açık ve anlaşılır biçimde sundu.",
      "Telif ya da patent sürecini doğru sıraladı.",
      "Sunumunu görsellerle destekledi.",
      "Grup üyeleri sunuma katkı sağladı.",
      "Soruları doğru ve kibar biçimde yanıtladı.",
      "Sesini ve beden dilini etkili kullandı.",
      "Türkçeyi doğru ve etkili kullandı.",
      "Sunumu verilen sürede tamamladı."
    ]
  };

  P.sorular = {
    title: "Daha Fazla Örnek Soru",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "Modern matbaayı kim bulmuştur?", o: ["Gutenberg", "Edison", "Bell", "Newton"], a: 0 },
      { q: "Dünyanın \"küresel köy\"e dönüştüğünü söyleyen düşünür kimdir?", o: ["McLuhan", "Harvey", "Ainsworth", "Gutenberg"], a: 0 },
      { q: "Popüler kültür için hangisi söylenebilir?", o: ["Gelip geçici, gündelik bir kültürdür", "Hiç değişmez", "Yalnızca bir ülkede yaşanır", "Teknolojiyle ilgisi yoktur"], a: 0 },
      { q: "Telif hakkı eser sahibinin ölümünden sonra kaç yıl devam eder?", o: ["20", "50", "70", "100"], a: 2 },
      { q: "Patent koruma süresi kaç yıldır?", o: ["10", "20", "50", "70"], a: 1 },
      { q: "Türkiye'de patent vermeye yetkili tek kurum hangisidir?", o: ["Türk Patent ve Marka Kurumu", "Emniyet Genel Müdürlüğü", "TÜİK", "Kültür ve Turizm Bakanlığı"], a: 0 },
      { q: "Bandrolü olmayan kitap, film ya da müzik ürünlerine ne denir?", o: ["Korsan eser", "Derleme eser", "Özgün eser", "Patentli ürün"], a: 0 },
      { q: "Hangisi telif hakkı kapsamındadır?", o: ["Bir roman", "Yeni bir makine", "Bir ilaç formülü", "Bir motor parçası"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları öğrenme alanının iki konusuna göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["Ulaşım, iletişim ve kültür", "Telif ve patent"],
      items: [["Küresel köy", 0], ["Popüler kültür", 0], ["Sosyal medya", 0], ["Küreselleşme", 0], ["Bandrol", 1], ["Tescil", 1], ["Fikrî mülkiyet", 1], ["Buluş", 1]]
    },
    quiz: [
      { q: "Bir hakkın resmî olarak kayda geçirilmesine ne denir?", o: ["Tescil", "Bandrol", "İhlal"], a: 0 },
      { q: "Dünya milletlerinin ekonomi, siyaset ve iletişim bakımından birbirine yaklaşmasına ne denir?", o: ["Küreselleşme", "Yerelleşme", "Göç"], a: 0 }
    ]
  };
})();

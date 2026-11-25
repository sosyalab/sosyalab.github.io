// 5. Sınıf 1. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "1. Öğrenme Alanı: Birlikte Yaşamak",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Gruplar ve rollerimiz</b>Aile, akraba, arkadaş, okul ve sosyal sorumluluk grupları; rollerin getirdiği hak ve sorumluluklar.</div>
          <div class="c-a"><b>Kültürel zenginliklerin birlikte yaşamaya katkısı</b>Türk kültürü, KKTC ve farklı ülke kültürleri, misafirperverlik.</div>
          <div class="c-s"><b>Yardımlaşma ve dayanışmada beraberiz</b>Sadaka taşı, Millî Mücadele, Kızılay, sosyal sorumluluk projeleri.</div>
        </div>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Grup:</b> Ortak amaç ve değerleri olan insanların oluşturduğu topluluk.</li>
          <li><b>Rol:</b> Bir grupta üstlendiğimiz görev ve konum.</li>
          <li><b>Hak:</b> Kişinin yararlanabileceği yetkiler.</li>
          <li><b>Sorumluluk:</b> Kişinin yerine getirmesi gereken görevler.</li>
          <li><b>Kültür:</b> Bir milletin maddi ve manevi değerlerinin bütünü.</li>
          <li><b>STK:</b> Sivil toplum kuruluşu; gönüllülerin oluşturduğu dernek ve vakıflar.</li>
          <li><b>Yardımlaşma, dayanışma, birlik ve beraberlik, saygı</b></li>
        </ul>` }
    ],
    quiz: [
      { q: "İçinde yer aldığımız ilk grup hangisidir?", o: ["Aile", "Okul", "Arkadaş grubu"], a: 0 },
      { q: "Kızılay hangi tür bir kuruluştur?", o: ["Yardım kuruluşu", "Spor kulübü", "Okul"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Gruplar ve roller", html: `
        <div class="stats">
          <div><span>Aile</span>Çocuk, kardeş, torun</div>
          <div><span>Okul</span>Öğrenci, sınıf başkanı, nöbetçi</div>
          <div><span>Arkadaş</span>Arkadaş, takım oyuncusu</div>
          <div><span>Sosyal sorumluluk</span>Gönüllü, üye</div>
        </div>
        <p>Aynı anda birden fazla gruba ve role sahip oluruz. Her rol bize haklar ve sorumluluklar kazandırır.</p>` },
      { t: "Kültür", html: `<p>Kültür; dil, yemek, giyim-kuşam, müzik, gelenek ve görenekleri kapsar. Farklı kültürlere saygı duymak ön yargıları ortadan kaldırır, birlikte huzur içinde yaşamamızı sağlar. Türkiye ile KKTC ortak tarih ve kültüre sahiptir.</p>` },
      { t: "Yardımlaşma", html: `<p>Sadaka taşları, Millî Mücadele'de halkın ordusuna desteği, Kızılay, AFAD ve Ulusal Vefa Programı yardımlaşma ve dayanışmanın örnekleridir. Sosyal sorumluluk projeleriyle biz de topluma katkı sağlayabiliriz.</p>` }
    ]
  };

  P.rolkartlari = {
    title: "Rol Kartları · Kontrol Listesi",
    checklist: [
      "Rol kartındaki senaryoyu doğru anladı.",
      "Rolünü grup arkadaşlarıyla birlikte canlandırdı.",
      "Rolünün getirdiği hakları ifade etti.",
      "Rolünün getirdiği sorumlulukları ifade etti.",
      "Duygu ve düşüncelerini açıkça söyledi.",
      "Çalışmasını zamanında ve eksiksiz tamamladı.",
      "Arkadaşlarına saygılı davrandı."
    ]
  };

  P.gruplar = {
    title: "Gruplar ve Roller",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Rolleri ait oldukları gruba yerleştir.</p>` }],
    sort: {
      prompt: "Her rolü grubuna yerleştir.",
      groups: ["Aile", "Arkadaş", "Okul", "Sosyal sorumluluk"],
      items: [["Çocuk", 0], ["Kardeş", 0], ["Lider", 1], ["Oyun arkadaşı", 1], ["Öğrenci", 2], ["Sınıf başkanı", 2], ["Gönüllü", 3], ["Kampanya sorumlusu", 3]]
    }
  };

  P.mangala = {
    title: "Mangala Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `
      <ol>
        <li>İki oyuncu ile oynanır; tahtada her oyuncunun 6 kuyusu ve 1 hazinesi vardır.</li>
        <li>Her kuyuya 4 taş konur, toplam 48 taş kullanılır.</li>
        <li>Oyuncu kendi kuyusundaki taşları alır, aldığı kuyudan başlayarak saat yönünün tersine birer birer dağıtır.</li>
        <li>Son taş kendi hazinesine gelirse oyuncu tekrar oynar.</li>
        <li>Son taş rakibin kuyusundaki taşları çift sayı yaparsa, o taşlar alınıp hazineye konur.</li>
        <li>Taşları ilk biten oyuncu, rakibinin kuyularındaki taşları da kazanır. Hazinesinde en çok taş olan kazanır.</li>
      </ol>
      <div class="fx"><b>Biliyor musun?</b>Mangala, Türk kültürüne ait bir zekâ ve strateji oyunudur; 2020'de UNESCO Somut Olmayan Kültürel Miras listesine girmiştir.</div>` }]
  };

  P.nisan = {
    title: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı",
    tabs: [{ t: "Dünya çocuklarının bayramı", html: `
      <ul>
        <li>23 Nisan 1920'de Türkiye Büyük Millet Meclisi açıldı.</li>
        <li>Mustafa Kemal Atatürk bu günü Türk çocuklarına armağan etti.</li>
        <li>TRT 1979'dan bu yana Uluslararası 23 Nisan Çocuk Şenliği düzenliyor; dünyanın dört bir yanından çocuklar ülkemize misafir geliyor.</li>
        <li>Türkiye, çocuklara bayram hediye eden ve bunu dünyayla paylaşan ilk ve tek ülkedir.</li>
      </ul>` }]
  };

  P.ulkeler = {
    title: "Ülkelerin Kültürel Özellikleri",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kültürel ögeleri ait olduğu ülkeye yerleştir.</p>` }],
    sort: {
      prompt: "Her ögeyi ülkesine yerleştir.",
      groups: ["Türkiye", "Türkmenistan", "Rusya", "Bulgaristan"],
      items: [["Ebru", 0], ["Kayseri mantısı", 0], ["Telpek", 1], ["Halı Bayramı", 1], ["Kokoşnik", 2], ["Balalayka", 2], ["Martenitsa", 3], ["Gadulka", 3]]
    }
  };

  P.yabanci = {
    title: "Yabancıların Gözünden Türkiye",
    tabs: [{ t: "Neden Türkiye?", html: `
      <div class="stats">
        <div><span>Misafirperverlik</span>İnsanların sıcak, güler yüzlü ve yardımsever olması.</div>
        <div><span>Mutfak</span>Kebap, baklava, Türk kahvesi, lokum.</div>
        <div><span>Tarih</span>Ayasofya, Efes, Göbeklitepe, Kapadokya.</div>
        <div><span>Doğa</span>Denizler, yaylalar, şelaleler, mağaralar.</div>
      </div>` }]
  };

  P.bulmaca = {
    title: "Bulmacanın Cevap Anahtarı",
    tabs: [{ t: "Cevaplar", html: `
      <ol>
        <li>KÜLTÜR</li><li>MANGALA</li><li>CEPKEN</li><li>EBRU</li><li>HORON</li><li>ATATÜRK</li>
        <li>ZEYBEK</li><li>RAUF DENKTAŞ</li><li>TURİZM</li><li>BENZERLİK</li><li>DÖNER</li>
      </ol>` }]
  };

  P.yardim = {
    title: "Yardımlaşma ve Dayanışma Faaliyetleri",
    tabs: [{ t: "Geçmişten günümüze", html: `
      <div class="two">
        <div><b>Geçmişte</b>Sadaka taşları, imece, vakıflar, ahilik, Tekâlif-i Millîye Emirleri.</div>
        <div><b>Günümüzde</b>Kızılay, AFAD, Yeşilay, TEMA, kan bağışı, kermesler, askıda ekmek, Ulusal Vefa Programı.</div>
      </div>` }],
    sort: {
      prompt: "Örnekleri doğru gruba yerleştir.",
      groups: ["Geçmişte", "Günümüzde"],
      items: [["Sadaka taşı", 0], ["İmece", 0], ["Tekâlif-i Millîye", 0], ["Kızılay 2. El Tekstil", 1], ["AFAD", 1], ["Ulusal Vefa Programı", 1]]
    }
  };

  P.anekdot = {
    title: "Sosyal Sorumluluk Proje Fikirleri · Anekdot Kaydı",
    checklist: [
      "Proje fikri üretti.",
      "Fikrinin güçlü yönlerini belirledi.",
      "Fikrinin zayıf yönlerini belirledi.",
      "Zayıf yönler için alternatif çözüm önerdi.",
      "Grup arkadaşlarının fikirlerini dinledi.",
      "Ortak kararın alınmasına katkı sağladı."
    ]
  };

  P.projekontrol = {
    title: "Sosyal Sorumluluk Projesi · Kontrol Listesi",
    checklist: [
      "Grubunda kendisine verilen görevi üstlendi.",
      "Örnek projeleri inceledi.",
      "Proje fikri üretti.",
      "Fikirlerin güçlü ve zayıf yönlerini belirledi.",
      "Alternatif çözümler geliştirdi.",
      "Fikir alışverişinde arkadaşlarına saygı gösterdi.",
      "Tanıtım materyallerinin hazırlanmasına katkı sağladı."
    ]
  };

  P.projerubrik = {
    title: "Sosyal Sorumluluk Projesi · Analitik Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Proje fikri özgün ve ihtiyaca yönelik.",
      "Görev paylaşımı yapıldı ve görevler yerine getirildi.",
      "Proje planlı biçimde uygulandı.",
      "Tanıtım materyalleri (broşür, pano, video) etkili hazırlandı.",
      "Grup içinde iş birliği ve iletişim sağlandı.",
      "Proje sonuçları değerlendirildi ve paylaşıldı."
    ]
  };

  P.sorular = {
    title: "Daha Fazla Örnek Soru",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "Toplumun temelini oluşturan grup hangisidir?", o: ["Aile", "Okul", "Arkadaş grubu", "Kulüp"], a: 0 },
      { q: "Hangisi okul grubundaki rollerden biridir?", o: ["Sınıf başkanı", "Torun", "Kuzen", "Yeğen"], a: 0 },
      { q: "Hangisi bir sorumluluktur?", o: ["Kurallara uymak", "Eğitim almak", "Oyun oynamak", "Korunmak"], a: 0 },
      { q: "Kuzey Kıbrıs Türk Cumhuriyeti hangi yıl kuruldu?", o: ["1983", "1974", "1923", "1571"], a: 0 },
      { q: "KKTC'nin kurucusu ve ilk cumhurbaşkanı kimdir?", o: ["Rauf Denktaş", "Fazıl Küçük", "Ersin Tatar", "Derviş Eroğlu"], a: 0 },
      { q: "Karadeniz kültüründe kemençe ile oynanan halk oyunu hangisidir?", o: ["Horon", "Zeybek", "Halay", "Bar"], a: 0 },
      { q: "İhtiyaç sahiplerinin kimseye görünmeden para alabildiği geleneksel uygulama hangisidir?", o: ["Sadaka taşı", "Kermes", "Imece", "Lonca"], a: 0 },
      { q: "Yaşlı ve özel gereksinimli vatandaşlara yönelik program hangisidir?", o: ["Ulusal Vefa Programı", "TEKNOFEST", "2. El Tekstil", "Sıfır Atık"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları konulara göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["Gruplar ve roller", "Kültür", "Yardımlaşma"],
      items: [["Rol", 0], ["Hak", 0], ["Sorumluluk", 0], ["Gelenek", 1], ["Halk oyunu", 1], ["Misafirperverlik", 1], ["STK", 2], ["Sadaka taşı", 2], ["Dayanışma", 2]]
    },
    quiz: [
      { q: "Bir milletin tarih boyunca meydana getirdiği maddi ve manevi değerlerin bütününe ne denir?", o: ["Kültür", "Rol", "Grup"], a: 0 },
      { q: "Bir grupta üstlendiğimiz görev ve konuma ne denir?", o: ["Rol", "Hak", "Kültür"], a: 0 }
    ]
  };
})();

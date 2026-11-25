// 5. Sınıf 5. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "5. Öğrenme Alanı: Hayatımızdaki Ekonomi",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Kaynaklarımızın verimli kullanımı</b>Toprak, su, orman, maden; Sıfır Atık, 5D modeli.</div>
          <div class="c-a"><b>Bütçemi planlıyorum</b>İhtiyaç ve istek, aile bütçesi, tasarruf.</div>
          <div class="c-s"><b>İlimizdeki ekonomik faaliyetler</b>Birincil, ikincil, üçüncül, dördüncül ve beşincil ekonomik faaliyetler.</div>
        </div>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Bütçe:</b> Belli bir süre için gelir ve giderlerin planlanması.</li>
          <li><b>Gelir:</b> Kazanılan para. <b>Gider:</b> Harcanan para.</li>
          <li><b>Ekonomik faaliyet:</b> İhtiyaçları karşılamak için yapılan üretim, dağıtım, tüketim etkinlikleri.</li>
          <li><b>Sürdürülebilirlik:</b> Kaynakları gelecek nesillerin ihtiyacını tehlikeye atmadan kullanmak.</li>
          <li><b>Tasarruf:</b> Kaynakları ve parayı gereksiz harcamadan, dikkatli kullanmak.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Yaşamak için mutlaka karşılanması gerekenlere ne denir?", o: ["İhtiyaç", "İstek", "Gider"], a: 0 },
      { q: "Tarım hangi ekonomik faaliyet alanındadır?", o: ["Birincil", "İkincil", "Dördüncül"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Kaynaklar", html: `<p>Toprak, su, orman ve madenler hayatımızı sürdürmek ve ekonomik faaliyetler için gereklidir. Kaynakları verimli kullanmak için 5D modeli uygulanır: Düşün, Daha az tüket, Değerlendir, Değiştir, Dönüştür.</p>` },
      { t: "Bütçe", html: `<p>Bütçe yaparken önce ihtiyaçlar, sonra istekler karşılanır. Tasarruf; hem aile hem ülke ekonomisine katkı sağlar. "Ayağını yorganına göre uzat."</p>` },
      { t: "Ekonomik faaliyetler", html: `
        <div class="stats">
          <div><span>Birincil</span>Tarım, hayvancılık, ormancılık, madencilik</div>
          <div><span>İkincil</span>Sanayi, inşaat, enerji üretimi</div>
          <div><span>Üçüncül</span>Eğitim, sağlık, ticaret, ulaşım, turizm</div>
          <div><span>Dördüncül</span>Bilgi, AR-GE, yazılım, tasarım</div>
          <div><span>Beşincil</span>Karar verme ve yönetim</div>
        </div>` }
    ]
  };

  P.kontrol69 = {
    title: "Doğal Kaynakların Kullanımı · Kontrol Listesi",
    checklist: [
      "Grubuna verilen görevi yerine getirdi.",
      "Doğal kaynakların kullanım şekillerine örnek verdi.",
      "Kaynak kullanımının doğaya ve insanlara etkisini açıkladı.",
      "Örneklerini sınıf arkadaşlarıyla tartıştı.",
      "Tabloyu eksiksiz doldurdu."
    ]
  };

  P.yenilenebilir = {
    title: "Yenilenebilir ve Yenilenemeyen Doğal Kaynaklar",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kaynakları doğru gruba yerleştir.</p>` }],
    sort: {
      prompt: "Her kaynağı grubuna yerleştir.",
      groups: ["Yenilenebilir", "Yenilenemeyen"],
      items: [["Güneş", 0], ["Rüzgâr", 0], ["Su", 0], ["Orman", 0], ["Petrol", 1], ["Kömür", 1], ["Doğal gaz", 1], ["Madenler", 1]]
    }
  };

  P.gozlem73 = {
    title: "Münazara · Gözlem Formu",
    checklist: [
      "Grubunun görüşünü kanıtlarla savundu.",
      "Kaynakların verimli ve verimsiz kullanımına örnekler verdi.",
      "Karşı görüşü saygıyla dinledi.",
      "Söz hakkına ve süreye uydu.",
      "Türkçeyi doğru ve etkili kullandı."
    ]
  };

  P.surdurulebilir = {
    title: "Doğal Kaynakların Sürdürülebilir Kullanımı",
    tabs: [{ t: "Neler yapabiliriz?", html: `
      <div class="two">
        <div><b>Evde</b>Musluğu kapatmak, ışıkları söndürmek, A sınıfı cihaz kullanmak, atıkları ayrıştırmak.</div>
        <div><b>Okulda ve çevrede</b>Bez çanta kullanmak, kâğıdı iki yüzlü kullanmak, fidan dikmek, toplu taşıma kullanmak.</div>
      </div>` }]
  };

  P.sifiratik = {
    title: "Sıfır Atık",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Atıkları doğru kutuya yerleştir.</p>` }],
    sort: {
      prompt: "Her atığı doğru kutuya yerleştir.",
      groups: ["Kâğıt", "Plastik", "Cam", "Metal"],
      items: [["Gazete", 0], ["Karton kutu", 0], ["Pet şişe", 1], ["Deterjan kabı", 1], ["Kavanoz", 2], ["Cam şişe", 2], ["Konserve kutusu", 3], ["Alüminyum kutu", 3]]
    }
  };

  P.akran = {
    title: "Kaynakları Dikkatli Kullanıyorum · Akran Değerlendirme Formu",
    checklist: [
      "Grup çalışmasına etkin katıldı.",
      "Görevini zamanında tamamladı.",
      "Sıfır Atık ve 5D yaklaşımını ürününe yansıttı.",
      "Arkadaşlarının fikirlerine saygı gösterdi.",
      "Ürünün sunumuna katkı sağladı."
    ]
  };

  P.rubrik82 = {
    title: "Kaynakları Dikkatli Kullanıyorum · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Ürün kaynakların verimli kullanımının doğaya ve insana etkisini yansıtıyor.",
      "Sıfır Atık ve 5D yaklaşımına dikkat edildi.",
      "Vatanseverlik ve sorumluluk değerlerine yer verildi.",
      "Ürün özgün ve yaratıcı.",
      "Ürün sözlü veya yazılı olarak etkili sunuldu."
    ]
  };

  P.seyahat = {
    title: "Seyahat Bütçesi",
    tabs: [{ t: "Örnek", html: `
      <div class="stats">
        <div><span>Ulaşım</span>Otobüs, tren veya uçak bileti</div>
        <div><span>Konaklama</span>Otel, pansiyon, kamp</div>
        <div><span>Yeme-içme</span>Günlük öğün masrafları</div>
        <div><span>Gezi</span>Müze ve tur ücretleri</div>
      </div>
      <p>Seyahat öncesi tüm giderler toplanır, gelire göre plan yapılır ve beklenmedik masraflar için bir miktar ayrılır.</p>` }]
  };

  P.ozdeg = {
    title: "Bütçe Planımı Hazırlıyorum · Öz Değerlendirme Formu",
    checklist: [
      "Gelirlerimi doğru belirledim.",
      "Giderlerimi ihtiyaç ve isteklere göre sıraladım.",
      "Bütçe planımda israftan kaçındım.",
      "Planı bir hafta boyunca uyguladım.",
      "Harcamalarımdaki değişiklikleri raporladım."
    ]
  };

  P.butcerubrik = {
    title: "Bütçe Planımı Hazırlıyorum · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Gelir ve giderleri dengeli planladı.",
      "İhtiyaçlara öncelik verdi.",
      "Tasarruf payı ayırdı.",
      "Planı uyguladı ve raporladı.",
      "Bütçe planlamanın kazanımlarını açıkladı."
    ]
  };

  P.koruma = {
    title: "Ekonomik Faaliyetleri Koruma Bilinci",
    tabs: [{ t: "Neden korumalıyız?", html: `<p>Ekonomik faaliyetler insanların geçimini sağlar, ülke ekonomisini güçlendirir. Tarım alanlarını korumak, yerli ürünleri tercih etmek, el sanatlarını yaşatmak ve turizm alanlarını temiz tutmak ekonomik faaliyetlerin sürdürülebilirliği için önemlidir.</p>` }]
  };

  P.kontrol108 = {
    title: "Yaşadığım İldeki Ekonomik Faaliyetler · Kontrol Listesi",
    checklist: [
      "İldeki ekonomik faaliyetleri resmî kaynaklardan araştırdı.",
      "Faaliyetleri ekonomik alanlara göre doğru sınıflandırdı.",
      "Sınıflandırma tablosunu sunumla paylaştı.",
      "Ekonomik faaliyetlerin korunmasına yönelik fikir üretti.",
      "Arkadaşlarının görüşlerine saygı gösterdi."
    ]
  };

  P.faaliyet = {
    title: "Ekonomik Faaliyet Alanları",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Meslekleri ekonomik faaliyet alanına yerleştir.</p>` }],
    sort: {
      prompt: "Her mesleği alanına yerleştir.",
      groups: ["Birincil", "İkincil", "Üçüncül", "Dördüncül"],
      items: [["Çiftçi", 0], ["Balıkçı", 0], ["Fabrika işçisi", 1], ["İnşaat ustası", 1], ["Öğretmen", 2], ["Doktor", 2], ["Yazılımcı", 3], ["AR-GE uzmanı", 3]]
    }
  };

  P.sorular = {
    title: "Daha Fazla Örnek Soru",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun.</p>` }],
    quiz: [
      { q: "Hangisi yenilenebilir bir kaynaktır?", o: ["Güneş", "Petrol", "Kömür", "Doğal gaz"], a: 0 },
      { q: "Suyu doğrudan bitkinin köküne veren sulama yöntemi hangisidir?", o: ["Damla sulama", "Salma sulama", "Yağmurlama", "Kanal sulama"], a: 0 },
      { q: "Sıfır Atık projesi hangi yıl başlatıldı?", o: ["2017", "2010", "2023", "1999"], a: 0 },
      { q: "Hangisi bir ihtiyaçtır?", o: ["Barınma", "Konser bileti", "Yeni oyun", "Çikolata"], a: 0 },
      { q: "\"Sakla samanı, gelir zamanı.\" atasözü neyi öğütler?", o: ["Tasarruf", "Harcama", "Borçlanma", "İsraf"], a: 0 },
      { q: "Enerji etiketinde en verimli sınıf hangisidir?", o: ["A", "D", "E", "G"], a: 0 },
      { q: "Sanayi hangi ekonomik faaliyet alanındadır?", o: ["İkincil", "Birincil", "Üçüncül", "Beşincil"], a: 0 },
      { q: "Turizm hangi ekonomik faaliyet alanındadır?", o: ["Üçüncül", "Birincil", "İkincil", "Dördüncül"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları konulara göre grupla.</p>` }],
    sort: {
      prompt: "Her kavramı konusuna yerleştir.",
      groups: ["Kaynaklar", "Bütçe", "Ekonomik faaliyetler"],
      items: [["5D modeli", 0], ["Sıfır Atık", 0], ["Geri dönüşüm", 0], ["Gelir", 1], ["Gider", 1], ["İhtiyaç", 1], ["Tarım", 2], ["Sanayi", 2], ["Turizm", 2]]
    },
    quiz: [
      { q: "Belli bir süre için gelir ve giderlerin planlanmasına ne denir?", o: ["Bütçe", "Tasarruf", "Ticaret"], a: 0 }
    ]
  };
})();

// 5. Sınıf 6. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "6. Öğrenme Alanı: Teknoloji ve Sosyal Bilimler",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Teknolojik gelişmelerin toplum hayatına etkileri</b>Kültür, ekonomi, eğitim, sağlık, iletişim ve ulaşım.</div>
          <div class="c-s"><b>Teknolojik ürünlerin bilinçli kullanımı</b>Dijital vatandaşlık, dijital ayak izi, dijital okuryazarlık, enerji verimliliği.</div>
        </div>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Teknoloji:</b> İnsanın çevresini denetlemek ve değiştirmek için geliştirdiği araç gereçler ve bilgilerin tümü.</li>
          <li><b>Dijital ayak izi:</b> Genel ağda yaptığımız her işlemin bıraktığı iz.</li>
          <li><b>Genel ağ:</b> İnternet.</li>
          <li><b>E-ticaret:</b> Genel ağ üzerinden yapılan alışveriş.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Genel ağda yaptığımız işlemlerin bıraktığı ize ne denir?", o: ["Dijital ayak izi", "E-ticaret", "Şifre"], a: 0 },
      { q: "En az enerji tüketen enerji sınıfı hangisidir?", o: ["A", "D", "G"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Etkiler", html: `
        <div class="two">
          <div><b>Olumlu</b>Uzaktan eğitim, e-Nabız, hızlı ulaşım, görüntülü görüşme, sanal müze, tarımda drone.</div>
          <div><b>Olumsuz</b>Göz bozukluğu, boyun ağrısı, bağımlılık, yalnızlaşma, siber dolandırıcılık, hava kirliliği.</div>
        </div>` },
      { t: "Bilinçli kullanım", html: `<p>Ekran süresini sınırlamak, kişisel bilgileri paylaşmamak, güçlü şifre kullanmak, tanımadığımız bağlantılara tıklamamak, A sınıfı cihazlar ve led ampuller tercih etmek, kullanım kılavuzunu okumak teknolojiyi bilinçli kullanmaktır.</p>` }
    ]
  };

  P.kultur = {
    title: "Türkiye Kültür Portalı",
    tabs: [{ t: "Dijital kültür", html: `<p>T.C. Kültür ve Turizm Bakanlığı'nın Türkiye Kültür Portalı, ülkemizin tarihî, kültürel ve turistik değerlerini dijital ortamda tanıtır. "Sanal Müze" ve "Türkiye'nin Müzeleri" uygulamalarıyla müzeler evden gezilebilir, Müze Kart dijital olarak kullanılabilir.</p>` }]
  };

  P.etkiler = {
    title: "Teknolojik Gelişmelerin Hayatımıza Etkileri",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Teknolojik ürünleri ilgili alana yerleştir.</p>` }],
    sort: {
      prompt: "Her ürünü alanına yerleştir.",
      groups: ["Eğitim", "Sağlık", "İletişim", "Ulaşım"],
      items: [["EBA", 0], ["Akıllı tahta", 0], ["e-Nabız", 1], ["MR cihazı", 1], ["Görüntülü görüşme", 2], ["E-posta", 2], ["Hızlı tren", 3], ["Navigasyon", 3]]
    }
  };

  P.olumlu = {
    title: "Teknolojik Ürünlerin Olumlu ve Olumsuz Kullanım Örnekleri",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Davranışları bilinçli ya da bilinçsiz kullanım olarak grupla.</p>` }],
    sort: {
      prompt: "Her davranışı doğru gruba yerleştir.",
      groups: ["Bilinçli", "Bilinçsiz"],
      items: [["Led ampul kullanmak", 0], ["Ekran süresini sınırlamak", 0], ["Güçlü şifre seçmek", 0], ["Araç kullanırken telefonla uğraşmak", 1], ["Şifreyi arkadaşla paylaşmak", 1], ["Saatlerce oyun oynamak", 1]]
    }
  };

  P.guvenliweb = {
    title: "Güvenli Web",
    tabs: [{ t: "Güvenli genel ağ", html: `<p>Güvenli Web, Bilgi Teknolojileri ve İletişim Kurumu tarafından genel ağın güvenli, etkin ve bilinçli kullanımı için hazırlanmıştır. Aileler için güvenli genel ağ hizmeti, siber güvenlik ipuçları ve bilgilendirici içerikler sunar.</p>` }]
  };

  P.genelag = {
    title: "Genel Ağı Nasıl Kullanmalıyım?",
    tabs: [{ t: "İpuçları", html: `
      <ul>
        <li>Kişisel bilgilerini (adres, telefon, okul) paylaşma.</li>
        <li>Tanımadığın kişilerin arkadaşlık isteklerini kabul etme.</li>
        <li>Güçlü şifre kullan, kimseyle paylaşma.</li>
        <li>Rahatsız edici bir içerikle karşılaşırsan ailene söyle.</li>
        <li>Ekran süreni sınırla, mola ver.</li>
      </ul>` }]
  };

  P.tbm = {
    title: "Türkiye Bağımlılıkla Mücadele Eğitim Programı",
    tabs: [{ t: "TBM", html: `<p>TBM; teknoloji bağımlılığı başta olmak üzere bağımlılık türlerine karşı öğrencileri, aileleri ve öğretmenleri bilinçlendiren bir önleme programıdır. Sağlıklı yaşam, zaman yönetimi ve teknolojinin dengeli kullanımı konularında eğitimler verir.</p>` }]
  };

  P.akilli = {
    title: "Akıllı İşaretler",
    tabs: [{ t: "RTÜK sembolleri", html: `
      <div class="stats">
        <div><span>Genel izleyici</span>Her yaştan izleyiciye uygun</div>
        <div><span>7+</span>7 yaş ve üzeri</div>
        <div><span>13+</span>13 yaş ve üzeri</div>
        <div><span>18+</span>18 yaş ve üzeri</div>
      </div>
      <p>İçerik sembolleri: şiddet, korku, olumsuz örnek oluşturabilecek davranışlar.</p>` }]
  };

  P.rubrik = {
    title: "Teknolojinin Bilinçli Kullanımı · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Teknolojik ürünü ve hatalı kullanım örneklerini doğru belirledi.",
      "Hatalı kullanımın olumsuz sonuçlarını açıkladı.",
      "Bilinçli kullanım için dikkat edilmesi gerekenleri belirtti.",
      "Farkındalık ürünü özgün ve etkili.",
      "Ürünü sınıfta ve okul panosunda sergiledi."
    ]
  };

  P.sorular = {
    title: "Daha Fazla Örnek Soru",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun.</p>` }],
    quiz: [
      { q: "Hastane randevusu ve tahlil sonuçlarına ulaşılan uygulama hangisidir?", o: ["e-Nabız", "EBA", "AFAD Acil", "e-Devlet"], a: 0 },
      { q: "Hangisi teknolojinin olumsuz etkisidir?", o: ["Göz bozukluğu", "Uzaktan eğitim", "Hızlı ulaşım", "Sanal müze"], a: 0 },
      { q: "Hangisi güvenli bir şifredir?", o: ["Kd8!mR2#", "123456", "Doğum tarihi", "Adın"], a: 0 },
      { q: "Tarımda ilaçlama için kullanılan teknolojik araç hangisidir?", o: ["Drone", "Akıllı tahta", "Tablet", "Televizyon"], a: 0 },
      { q: "Eski ampullere göre daha az enerji harcayan ampul hangisidir?", o: ["Led ampul", "Akkor ampul", "Halojen ampul", "Floresan"], a: 0 },
      { q: "Afet anında tek tuşla yardım çağrılan uygulama hangisidir?", o: ["AFAD Acil", "EBA", "e-Nabız", "Kültür Portalı"], a: 0 },
      { q: "Hangisi dijital vatandaşın davranışıdır?", o: ["Başkasının özel bilgisini paylaşmamak", "Şifresini paylaşmak", "Sahte haberi yaymak", "Hakaret etmek"], a: 0 },
      { q: "Çocuklara yönelik medya okuryazarlığı dergisini hangi kurum çıkarır?", o: ["RTÜK", "AFAD", "TEMA", "Kızılay"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları konulara göre grupla.</p>` }],
    sort: {
      prompt: "Her kavramı konusuna yerleştir.",
      groups: ["Teknolojinin etkileri", "Bilinçli kullanım"],
      items: [["E-ticaret", 0], ["Uzaktan eğitim", 0], ["Sanal müze", 0], ["Dijital ayak izi", 1], ["Güçlü şifre", 1], ["Ekran süresi", 1], ["Enerji etiketi", 1]]
    },
    quiz: [
      { q: "Dijital ortamda hak ve sorumluluklarını bilerek güvenli davranan kişiye ne denir?", o: ["Dijital vatandaş", "E-ticaret", "Genel ağ"], a: 0 }
    ]
  };
})();

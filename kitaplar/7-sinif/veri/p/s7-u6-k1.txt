// 7. Sınıf 6. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "6. Öğrenme Alanı: Teknoloji ve Sosyal Bilimler",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Bilimsel ve teknolojik gelişmelerin gelecekteki hayata etkisi</b>İletişim, eğitim, sağlık ve ulaşımda yenilikler; yapay zekâ, nanobotlar, nesnelerin interneti.</div>
          <div class="c-a"><b>Sosyal bilimlerin çalışma alanları</b>Tarih, coğrafya, arkeoloji, ekonomi, felsefe, hukuk, sosyoloji.</div>
          <div class="c-s"><b>Toplumsal hayatta karşılaşılabilecek problemlere çözüm üretme</b>Problem çözme adımları, bilimsel etik, kaynakça.</div>
        </div>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Bilimsel etik:</b> Araştırmada dürüst, tarafsız ve sorumlu davranma.</li>
          <li><b>Gelecek:</b> Henüz yaşanmamış, ileride gerçekleşecek zaman.</li>
          <li><b>Önerme:</b> Doğru ya da yanlış olduğu söylenebilen ifade.</li>
          <li><b>Problem:</b> Çözüm gerektiren durum.</li>
          <li><b>Sosyal bilimler:</b> İnsanı ve toplumu inceleyen bilim dalları.</li>
          <li><b>Toplum:</b> Bir arada yaşayan, ortak kültürü paylaşan insanlar.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Hangisi bir sosyal bilim dalıdır?", o: ["Sosyoloji", "Fizik", "Kimya"], a: 0 },
      { q: "Başkasının emeğini kaynak göstermeden kullanmaya ne denir?", o: ["İntihal", "Kaynakça", "Dipnot"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Bilim ve teknoloji", html: `
        <div class="stats">
          <div><span>İletişim</span>Akıllı telefon, görüntülü görüşme, beyin-bilgisayar arayüzü.</div>
          <div><span>Eğitim</span>Etkileşimli tahta, yapay zekâ destekli kişisel öğrenme.</div>
          <div><span>Sağlık</span>Nanobotlar, robotik cerrahi, yeni ilaçlar.</div>
          <div><span>Ulaşım</span>Hızlı tren, sürücüsüz otobüs, ANKA 3.</div>
        </div>` },
      { t: "Problem çözme adımları", html: `
        <div class="bars">
          <div><span>1 · Problemi tanıma</span><i style="--w:3.6"></i><b></b></div>
          <div><span>2 · Model geliştirme</span><i style="--w:7.2"></i><b></b></div>
          <div><span>3 · Araştırma yapma</span><i style="--w:10.8"></i><b></b></div>
          <div><span>4 · Verilerin analizi ve yorumu</span><i style="--w:14.4"></i><b></b></div>
          <div><span>5 · Çözüm üretme</span><i style="--w:18"></i><b></b></div>
          <div><span>6 · Değerlendirme</span><i style="--w:21.6"></i><b></b></div>
        </div>` }
    ]
  };

  P.etkiler = {
    title: "Bilimsel ve Teknolojik Gelişmelerin Toplum Hayatına Etkileri",
    tabs: [{ t: "Olumlu ve olumsuz", html: `
      <div class="two">
        <div><b>Olumlu</b>• Bilgiye hızlı ulaşım<br>• Hastalıkların tedavisi<br>• Hızlı ve konforlu ulaşım<br>• Kültürler arası etkileşim</div>
        <div><b>Dikkat edilmesi gerekenler</b>• Teknoloji bağımlılığı<br>• Kişisel verilerin güvenliği<br>• Sahte bilgi<br>• Çevre kirliliği ve elektronik atık</div>
      </div>` }],
    sort: {
      prompt: "Teknolojik ürünleri alanına yerleştir.",
      groups: ["İletişim", "Eğitim", "Sağlık", "Ulaşım"],
      items: [["Akıllı telefon", 0], ["Görüntülü görüşme", 0], ["Etkileşimli tahta", 1], ["Uzaktan eğitim", 1], ["MR cihazı", 2], ["Nanobot", 2], ["Hızlı tren", 3], ["Elektrikli otobüs", 3]]
    }
  };

  P.kronovizor = {
    title: "Kronovizör",
    tabs: [{ t: "Geçmişi gören makine?", html: `
      <p>Kronovizör, geçmişte yaşanan olayları görüntüleyebildiği iddia edilen hayalî bir makinedir. Böyle bir cihazın varlığı bilimsel olarak kanıtlanmamıştır.</p>
      <div class="fx"><b>Düşün</b>Bir bilgiyi doğru kabul etmeden önce kaynağını sorgulamak, kanıt aramak ve bilimsel yöntemle değerlendirmek gerekir.</div>` }]
  };

  P.cember = {
    title: "Çember Tartışma Tekniği",
    tabs: [{ t: "Nasıl uygulanır?", html: `
      <ol>
        <li>Sınıfta bir çember oluşturulur.</li>
        <li>Görüşleri not etmek için bir yazıcı seçilir.</li>
        <li>Konu açıklanır ve sırayla herkes görüşünü söyler.</li>
        <li>Sözü kesilmeden herkes dinlenir, farklı görüşlere saygı gösterilir.</li>
        <li>Yazıcı tartışma sonunda notları okur, sonuçlar özetlenir.</li>
      </ol>` }]
  };

  P.cemberkontrol = {
    title: "Teknolojinin Toplumsal Ayak İzleri · Kontrol Listesi",
    checklist: [
      "Tartışmaya etkin biçimde katıldı.",
      "Bilimsel ve teknolojik gelişmelerin toplum hayatına etkilerine örnek verdi.",
      "Görüşlerini gerekçeleriyle açıkladı.",
      "Arkadaşlarını dikkatle dinledi, sözlerini kesmedi.",
      "Farklı görüşlere ve kişisel haklara saygı gösterdi.",
      "Nazik ve anlaşılır bir dil kullandı."
    ]
  };

  P.fikirtarama = {
    title: "Fikir Taraması Tekniği",
    tabs: [{ t: "Nasıl uygulanır?", html: `
      <ol>
        <li>Gruplar bir konu seçer (geleceğin iletişimi, eğitimi, sağlığı veya ulaşımı).</li>
        <li>Kaynaklar ve haberler okunur, önemli bilgiler not edilir.</li>
        <li>Herkes kısa sürede aklına gelen fikirleri yazar.</li>
        <li>Fikirler taranır, benzerleri birleştirilir, en güçlüleri seçilir.</li>
        <li>Çıkarımlar yazılı veya görsel olarak sunulur.</li>
      </ol>` }]
  };

  P.gozlemdusunce = {
    title: "Düşünce Sergimiz · Öğrenci Gözlem Formu",
    checklist: [
      "Grubunun ürününü sınıf duvarına özenle astı.",
      "Diğer grupların galerilerini dikkatle inceledi.",
      "Galerilere kendi öngörülerini ekledi.",
      "Öngörüleri bilimsel ve gerçekçiydi.",
      "Arkadaşlarının çalışmalarına saygı gösterdi.",
      "Grup içinde iş birliği yaptı."
    ]
  };

  P.mektuprubrik = {
    title: "Geleceğe Mektup · Analitik Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "İçerik: 2071 yılına dair bilimsel ve teknolojik öngörüler içeriyor.",
      "Öngörüler gerçekçi ve gerekçelendirilmiş.",
      "Mektup yazım kurallarına (hitap, giriş, gelişme, kapanış) uydu.",
      "Özgün ve yaratıcı fikirler kullandı.",
      "Türkçeyi doğru ve etkili kullandı; yazım ve noktalama kurallarına uydu."
    ]
  };

  P.kartlar = {
    title: "Sosyal Bilimlerin Çalışma Alanlarıyla İlgili Bilgi Kartları",
    tabs: [{ t: "Kartlar", html: `
      <div class="stats">
        <div><span>Tarih</span>Geçmişteki olaylar, yer ve zaman, neden-sonuç.</div>
        <div><span>Coğrafya</span>İnsan ile yeryüzü arasındaki ilişki.</div>
        <div><span>Arkeoloji</span>Geçmiş uygarlıkların kalıntıları, kazılar.</div>
        <div><span>Ekonomi</span>Üretim, dağıtım ve tüketim.</div>
        <div><span>Felsefe</span>Düşünme, sorgulama, "düşünce bilimi".</div>
        <div><span>Hukuk</span>İnsan, toplum ve devlet ilişkilerini düzenleyen kurallar.</div>
        <div><span>Sosyoloji</span>Toplum, sosyal kurumlar ve etkileşimler.</div>
      </div>` }]
  };

  P.gozlem = {
    title: "Sosyal Bilimlerin İzinde · Gözlem Formu",
    checklist: [
      "Sırası geldiğinde bilim dalının çalışma alanlarını söyledi.",
      "Verdiği cevaplar bilim dalıyla ilgiliydi.",
      "Arkadaşlarının cevaplarını dikkatle dinledi.",
      "Sosyal bilim dallarının tanımını yapmaya katkı sağladı.",
      "Etkinlik kurallarına uydu."
    ]
  };

  P.dallar = {
    title: "Sosyal Bilim Dalları",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Çalışma konularını ilgili sosyal bilim dalına yerleştir.</p>` }],
    sort: {
      prompt: "Her konuyu ilgili dala yerleştir.",
      groups: ["Tarih", "Coğrafya", "Arkeoloji", "Hukuk"],
      items: [["Millî Mücadele belgeleri", 0], ["Nüfus kayıtları", 0], ["Taraçalı fındık bahçeleri", 1], ["Kapadokya peri bacaları", 1], ["Göbeklitepe kazıları", 2], ["Eski çömlekler", 2], ["Trafik cezaları", 3], ["Tüketici Hakem Heyeti", 3]]
    }
  };

  P.servis = {
    title: "Servis Altlığı Tekniği",
    tabs: [{ t: "Nasıl uygulanır?", html: `
      <ol>
        <li>Dört kişilik gruplar oluşturulur.</li>
        <li>Kâğıt her üyenin yazacağı bir bölüm ve ortada ortak bir alan olacak şekilde bölünür.</li>
        <li>Herkes kendi bölümüne fikrini yazar veya çizer.</li>
        <li>Fikirler paylaşılır, tartışılır ve ortak iki-üç ana fikir ortadaki alana yazılır.</li>
      </ol>` }]
  };

  P.anekdot = {
    title: "Düşünce Masası Kuruyoruz · Anekdot Kaydı",
    checklist: [
      "Kendi bölümüne sosyal bilimlerin çalışma alanlarıyla ilgili öneri yazdı.",
      "Önerileri konuyla ilgili ve anlamlıydı.",
      "Fikirlerini grup arkadaşlarıyla paylaştı.",
      "Ortak ana fikirlerin belirlenmesine katkı sağladı.",
      "Sınıf tartışmasına katıldı."
    ]
  };

  P.oyun = {
    title: "Anlat Bakalım · Oyun Kartları",
    tabs: [
      { t: "Kart 1–4", html: `
        <div class="two">
          <div><b>TARİH</b>Yasak: geçmiş, olay, belge, zaman</div>
          <div><b>COĞRAFYA</b>Yasak: harita, yeryüzü, doğa, iklim</div>
          <div><b>ARKEOLOJİ</b>Yasak: kazı, kalıntı, antik, çömlek</div>
          <div><b>EKONOMİ</b>Yasak: para, üretim, tüketim, ticaret</div>
        </div>` },
      { t: "Kart 5–7", html: `
        <div class="two">
          <div><b>FELSEFE</b>Yasak: düşünce, soru, sorgulama, bilgi</div>
          <div><b>HUKUK</b>Yasak: kanun, hâkim, mahkeme, kural</div>
          <div><b>SOSYOLOJİ</b>Yasak: toplum, insan, kültür, ilişki</div>
        </div>` }
    ]
  };

  P.cozum = {
    title: "Çözüm Bende",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Problem çözme sürecinin adımlarını ve çözüm önerilerini doğru gruplara yerleştir.</p>` }],
    sort: {
      prompt: "Her çalışmayı ilgili problem çözme adımına yerleştir.",
      groups: ["Problemi tanıma", "Araştırma yapma", "Çözüm üretme", "Değerlendirme"],
      items: [["Sorunun nedenini belirlemek", 0], ["Kimleri etkilediğini sormak", 0], ["Anket ve görüşme yapmak", 1], ["Güvenilir kaynak incelemek", 1], ["Alternatif çözümler geliştirmek", 2], ["En uygun çözümü seçmek", 2], ["\"Problem çözüldü mü?\" diye sormak", 3], ["Süreci gözden geçirmek", 3]]
    }
  };

  P.posterrubrik = {
    title: "Sürdürülebilir Gelecek, Doğru Çözüm · Analitik Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Poster seçilen problemi ve verileri doğru yansıtıyor.",
      "Çözüm önerisi ekonomik, güvenilir, verimli, yararlı ve sürdürülebilir.",
      "Kaynaklar belirtilmiş, bilimsel etik kurallarına uyulmuş.",
      "Görsel düzen etkili ve dikkat çekici.",
      "Poster özgün ve yaratıcı."
    ]
  };

  P.sunumkontrol = {
    title: "Poster Sunumu · Kontrol Listesi",
    checklist: [
      "Posteri açık ve anlaşılır biçimde sundu.",
      "Problemi ve çözüm önerisini gerekçeleriyle açıkladı.",
      "Verilere dayalı bilgi verdi.",
      "Soruları anlamlı biçimde yanıtladı.",
      "Süreyi etkili kullandı.",
      "Grup üyeleri sunuma katkı sağladı."
    ]
  };

  P.sorular = {
    title: "Öğrenme Alanı Ek Sorular",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "Birbirine bağlı tüm akıllı cihazların oluşturduğu sisteme ne denir?", o: ["Nesnelerin interneti", "Yapay zekâ", "Nanoteknoloji", "Bilişim Vadisi"], a: 0 },
      { q: "Kanun fi't-Tıb adlı eserin yazarı kimdir?", o: ["İbn-i Sina", "Cezerî", "Harezmî", "Farabi"], a: 0 },
      { q: "Sibernetiğin öncülerinden sayılan bilim insanı kimdir?", o: ["Cezerî", "Biruni", "Ali Kuşçu", "İbn-i Sina"], a: 0 },
      { q: "İnsan ile yeryüzü arasındaki ilişkiyi inceleyen bilim dalı hangisidir?", o: ["Coğrafya", "Tarih", "Hukuk", "Felsefe"], a: 0 },
      { q: "Göbeklitepe kazıları hangi bilim dalının çalışma alanına girer?", o: ["Arkeoloji", "Ekonomi", "Sosyoloji", "Hukuk"], a: 0 },
      { q: "Problem çözme sürecinin ilk adımı hangisidir?", o: ["Problemi tanıma", "Çözüm üretme", "Değerlendirme", "Araştırma yapma"], a: 0 },
      { q: "Araştırmada kullanılan kaynakların listesine ne ad verilir?", o: ["Kaynakça", "Dipnot", "İntihal", "Önsöz"], a: 0 },
      { q: "Araştırma sonuçlarına gerçek dışı veri eklemeye ne denir?", o: ["Sahtecilik", "Tarafsızlık", "Atıf", "Kaynakça"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları konulara göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["Bilim ve teknoloji", "Sosyal bilimler", "Problem çözme"],
      items: [["Nanobot", 0], ["Yapay zekâ", 0], ["ANKA 3", 0], ["Sosyoloji", 1], ["Arkeoloji", 1], ["Felsefe", 1], ["Kaynakça", 2], ["Bilimsel etik", 2], ["Çözüm önerisi", 2]]
    },
    quiz: [
      { q: "Felsefeye hangi ad da verilir?", o: ["Düşünce bilimi", "Toplum bilimi", "Nüfus bilimi"], a: 0 },
      { q: "Bilimsel çalışmalarda dürüst, tarafsız ve sorumlu davranmaya ne denir?", o: ["Bilimsel etik", "İntihal", "Önerme"], a: 0 }
    ]
  };
})();

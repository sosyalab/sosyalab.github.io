// 5. Sınıf 2. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "2. Öğrenme Alanı: Evimiz Dünya",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>İlimizin göreceli konumu</b>Komşu iller, yeryüzü şekilleri, su kaynakları, ulaşım yolları, tarihî mekânlar.</div>
          <div class="c-a"><b>Doğal ve beşerî çevremizdeki değişim</b>Barajlar, sanayileşme, şehirleşme, nüfus ve göç.</div>
          <div class="c-s"><b>İlimizde yaşanabilecek afetler ve etkileri</b>Deprem, sel, heyelan, erozyon, çığ, orman yangını, obruk, hortum.</div>
          <div class="c-k"><b>Ülkemize komşu devletler</b>Kara sınırı komşularımız, başkentleri, bayrakları, para birimleri ve dilleri.</div>
        </div>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Göreceli konum:</b> Bir yerin çevresindeki yerlere göre konumu.</li>
          <li><b>Doğal çevre:</b> İnsan eli değmeden oluşan dağ, ova, akarsu, orman gibi unsurlar.</li>
          <li><b>Beşerî çevre:</b> İnsanların oluşturduğu ev, yol, köprü, okul gibi unsurlar.</li>
          <li><b>Afet:</b> İnsanlar için can ve mal kaybına yol açan doğa olayı.</li>
          <li><b>AFAD:</b> Afet ve Acil Durum Yönetimi Başkanlığı.</li>
          <li><b>Komşu devlet:</b> Ülkemizle sınırı olan devlet.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Bir yerin çevresindeki yerlere göre konumuna ne denir?", o: ["Göreceli konum", "Afet", "Beşerî çevre"], a: 0 },
      { q: "Hangisi beşerî çevre unsurudur?", o: ["Köprü", "Dağ", "Akarsu"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Konum ve değişim", html: `<p>Bir ilin göreceli konumu; komşu illeri, yeryüzü şekilleri, su kaynakları, ulaşım yolları ve tarihî mekânlarıyla tanımlanır. Nüfus artışı, göç, sanayileşme ve baraj yapımı doğal ve beşerî çevrede değişime yol açar.</p>` },
      { t: "Afetler", html: `
        <div class="stats">
          <div><span>Deprem</span>Dayanıklı bina, eşyaları sabitleme</div>
          <div><span>Sel</span>Dere yataklarına yapı yapmamak</div>
          <div><span>Heyelan</span>Yamaçları ağaçlandırmak</div>
          <div><span>Erozyon</span>Bitki örtüsünü korumak</div>
        </div>` },
      { t: "Komşularımız", html: `<p>Kara sınırı komşularımız: Yunanistan, Bulgaristan, Gürcistan, Ermenistan, Azerbaycan (Nahçıvan), İran, Irak ve Suriye.</p>` }
    ]
  };

  P.bursa = {
    title: "Bir İlin Göreceli Konumu: Bursa",
    tabs: [{ t: "Bursa", html: `
      <ul>
        <li><b>Komşuları:</b> Balıkesir, Kütahya, Bilecik, Sakarya, Kocaeli ve Yalova.</li>
        <li><b>Yeryüzü şekilleri:</b> Uludağ, Bursa Ovası, İnegöl Ovası.</li>
        <li><b>Su kaynakları:</b> Marmara Denizi kıyısı, Uluabat ve İznik gölleri, Nilüfer Çayı.</li>
        <li><b>Ulaşım:</b> Osmangazi Köprüsü ile İstanbul'a, Gemlik ve Mudanya limanlarıyla denize bağlıdır.</li>
        <li><b>Tarihî mekânlar:</b> Ulu Cami, Yeşil Türbe, Cumalıkızık Köyü, Koza Han.</li>
      </ul>` }]
  };

  P.tarihi = {
    title: "Tarihî Mekânların Korunması",
    tabs: [{ t: "Neler yapabiliriz?", html: `
      <ul>
        <li>Tarihî eserlerin üzerine yazı yazmamak, onlara zarar vermemek.</li>
        <li>Çevresini temiz tutmak, çöpleri çöp kutusuna atmak.</li>
        <li>Restorasyon çalışmalarını desteklemek.</li>
        <li>Müzeleri ve ören yerlerini ziyaret ederek tanıtmak.</li>
      </ul>` }]
  };

  P.haritalar = {
    title: "Konu ile İlgili Haritalar",
    tabs: [{ t: "Harita türleri", html: `
      <div class="two">
        <div><b>Siyasi (mülki idare) harita</b>İl ve ülke sınırlarını gösterir.</div>
        <div><b>Fiziki harita</b>Yeryüzü şekillerini renklerle gösterir: yeşil alçak yerler, sarı-turuncu orta yükseklikler, kahverengi yüksek yerler.</div>
      </div>` }]
  };

  P.kartrubrik = {
    title: "Yaşadığım İlin Göreceli Konumu · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Komşu illere göre göreceli konumu doğru açıkladı.",
      "Su kaynaklarına göre göreceli konumu doğru açıkladı.",
      "Yeryüzü şekillerine göre göreceli konumu doğru açıkladı.",
      "Tarihî mekânlar ve doğal güzelliklere göre konumu açıkladı.",
      "Bilgi kartlarını estetik ve görsellerle destekledi.",
      "Sunumunu açık ve anlaşılır yaptı."
    ]
  };

  P.illeribul = {
    title: "Göreceli Konuma Göre İlleri Buluyorum",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>İpuçlarını okuyup ili bul.</p>` }],
    quiz: [
      { q: "Pamukkale travertenleriyle ünlüyüm, Ege Bölgesi'ndeyim.", o: ["Denizli", "Muğla", "Aydın"], a: 0 },
      { q: "İstanbul Boğazı topraklarımı Asya ve Avrupa olarak ikiye ayırır.", o: ["İstanbul", "Çanakkale", "Kocaeli"], a: 0 },
      { q: "Türkiye'nin en büyük gölü Van Gölü'nün doğusundayım; adım göl ile aynı.", o: ["Van", "Bitlis", "Muş"], a: 0 },
      { q: "Peribacaları ve yer altı şehirleriyle tanınırım.", o: ["Nevşehir", "Kayseri", "Niğde"], a: 0 }
    ]
  };

  P.gozlem = {
    title: "İstasyon Etkinliği · Gözlem Formu",
    checklist: [
      "Her istasyonda verilen göreve katıldı.",
      "İlin göreceli konum özelliklerini doğru kullandı.",
      "Öykü, şiir, slogan ya da resimde özgün fikirler üretti.",
      "Grup arkadaşlarıyla iş birliği yaptı.",
      "Süreyi etkili kullandı."
    ]
  };

  P.degisim = {
    title: "Doğal ve Beşerî Çevrede Değişim",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Değişimleri doğal ya da beşerî çevreye göre grupla.</p>` }],
    sort: {
      prompt: "Değişimleri doğru gruba yerleştir.",
      groups: ["Doğal çevredeki değişim", "Beşerî çevredeki değişim"],
      items: [["Orman alanlarının azalması", 0], ["Göl suyunun çekilmesi", 0], ["Erozyonun artması", 0], ["Yeni yolların yapılması", 1], ["Katlı binaların artması", 1], ["Köylerin taşınması", 1]]
    }
  };

  P.baliktrubrik = {
    title: "Balık Kılçığı · Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Doğal çevrede yaşanan değişimin sebeplerini doğru yazdı.",
      "Doğal çevrede yaşanan değişimin sonuçlarını doğru yazdı.",
      "Beşerî çevrede yaşanan değişimin sebeplerini doğru yazdı.",
      "Beşerî çevrede yaşanan değişimin sonuçlarını doğru yazdı.",
      "Aile büyüklerinden ve görsellerden yararlandı."
    ]
  };

  P.riskharita = {
    title: "Türkiye'nin Afet Risk Haritası",
    tabs: [{ t: "Riskler", html: `
      <ul>
        <li><b>Deprem:</b> Kuzey Anadolu, Doğu Anadolu ve Batı Anadolu fay hatları boyunca risk yüksektir.</li>
        <li><b>Sel ve heyelan:</b> Yağışlı ve eğimli Karadeniz kıyılarında sık görülür.</li>
        <li><b>Çığ:</b> Doğu Anadolu ve Doğu Karadeniz'in yüksek dağlarında görülür.</li>
        <li><b>Erozyon ve çölleşme:</b> İç Anadolu ve Güneydoğu Anadolu'da risk yüksektir.</li>
        <li><b>Orman yangını:</b> Akdeniz ve Ege kıyılarında yaz aylarında görülür.</li>
      </ul>` }]
  };

  P.afad = {
    title: "AFAD İl Afet Risk Azaltma Planları",
    tabs: [{ t: "İRAP nedir?", html: `<p>İl Afet Risk Azaltma Planları (İRAP), her ilin karşılaşabileceği afet risklerini belirler ve bu riskleri azaltmak için yapılacak çalışmaları planlar. Planlar AFAD koordinasyonunda valilikler, belediyeler, üniversiteler ve diğer kurumlarla birlikte hazırlanır.</p>` }]
  };

  P.deney = {
    title: "Erozyon Deneyi",
    tabs: [{ t: "Deneyin adımları", html: `
      <ol>
        <li>Üç pet şişenin gövdesi yandan açılır, içlerine toprak konur.</li>
        <li>Birine kuru yaprak, birine çimen eklenir, biri yalnız toprak kalır.</li>
        <li>Şişeler eğimli masaya yerleştirilir, ağızlarının altına bardak konur.</li>
        <li>Üzerlerine eşit miktarda su dökülür.</li>
        <li><b>Sonuç:</b> Yalnız toprak olan şişeden çamurlu su akar; çimenli şişeden en berrak su akar. Bitki örtüsü erozyonu önler.</li>
      </ol>` }]
  };

  P.afetrubrik = {
    title: "Afetlere Hazır mıyız? · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "İlde yaşanabilecek afetleri doğru belirledi.",
      "Afet öncesi alınacak tedbirlere yönelik etkinlik hazırladı.",
      "Güvenilir kaynaklardan (AFAD, Kızılay) yararlandı.",
      "Etkinliği planlı biçimde uyguladı.",
      "Grup içinde görev paylaşımı yaptı.",
      "Etkinliği okul ve çevreyle paylaştı."
    ]
  };

  P.deprem = {
    title: "Deprem Etkinliği",
    tabs: [{ t: "Çök – Kapan – Tutun", html: `
      <ol>
        <li><b>Çök:</b> Olduğun yerde dizlerinin üzerine çök.</li>
        <li><b>Kapan:</b> Başını ve enseni kollarınla koru.</li>
        <li><b>Tutun:</b> Sağlam bir masa ya da sıra gibi eşyaya tutun.</li>
      </ol>` }],
    quiz: [
      { q: "Deprem anında sınıftaysan ne yapmalısın?", o: ["Sıranın yanına çöküp başını korumak", "Merdivenlerden koşmak", "Pencereye gitmek"], a: 0 },
      { q: "Afet çantasında hangisi bulunmalıdır?", o: ["Su ve el feneri", "Oyun konsolu", "Ağır kitaplar"], a: 0 }
    ]
  };

  P.bayrakvideo = {
    title: "Bayrağa Saygı",
    tabs: [{ t: "Örnek olay", html: `<p>Mustafa Kemal, İzmir'in kurtuluşunun ardından kendisi için yere serilen Yunan bayrağının üzerine basmamış ve "Bayrak bir milletin şerefidir" diyerek bayrağın kaldırılmasını istemiştir. Bu davranış, her milletin bayrağına saygı duyulması gerektiğini gösterir.</p>` }]
  };

  P.kaynak1 = {
    title: "Komşu Devletler · Kaynak 1",
    tabs: [{ t: "Bilgi kartları", html: `
      <div class="stats">
        <div><span>Yunanistan</span>Atina · Avro · Yunanca</div>
        <div><span>Bulgaristan</span>Sofya · Avro · Bulgarca</div>
        <div><span>Gürcistan</span>Tiflis · Lari · Gürcüce</div>
        <div><span>Ermenistan</span>Erivan · Dram · Ermenice</div>
      </div>` }]
  };

  P.kaynak2 = {
    title: "Komşu Devletler · Kaynak 2",
    tabs: [{ t: "Bilgi kartları", html: `
      <div class="stats">
        <div><span>Azerbaycan (Nahçıvan)</span>Bakü · Manat · Azerbaycan Türkçesi</div>
        <div><span>İran</span>Tahran · Riyal · Farsça</div>
        <div><span>Irak</span>Bağdat · Dinar · Arapça, Kürtçe</div>
        <div><span>Suriye</span>Şam · Lira · Arapça</div>
      </div>` }]
  };

  P.afisrubrik = {
    title: "Kara Sınırı Komşularımızı Tanıtıyorum · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Afişte başkent, bayrak, dil ve para birimi bilgilerine yer verdi.",
      "Ülkenin ülkemize göre konumunu gösterdi.",
      "Bilgileri güvenilir kaynaklardan topladı.",
      "Afişi görsellerle destekledi.",
      "Tanıtımı ülkenin millî marşı eşliğinde etkili biçimde sundu."
    ]
  };

  P.karasinir = {
    title: "Kara Sınırı Komşularımız",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Komşularımızı ülkemize göre konumlarına yerleştir.</p>` }],
    sort: {
      prompt: "Her ülkeyi konumuna göre yerleştir.",
      groups: ["Batı", "Doğu", "Güney"],
      items: [["Yunanistan", 0], ["Bulgaristan", 0], ["Gürcistan", 1], ["Ermenistan", 1], ["Nahçıvan", 1], ["İran", 1], ["Irak", 2], ["Suriye", 2]]
    }
  };

  P.sorular = {
    title: "Daha Fazla Örnek Soru",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun.</p>` }],
    quiz: [
      { q: "Hangisi bir yerin göreceli konumunu belirlerken kullanılmaz?", o: ["Matematik konum (enlem-boylam)", "Komşu iller", "Yeryüzü şekilleri", "Su kaynakları"], a: 0 },
      { q: "Hangisi doğal çevre unsurudur?", o: ["Göl", "Baraj", "Köprü", "Fabrika"], a: 0 },
      { q: "Dere yataklarına yapılaşma en çok hangi afetin etkisini artırır?", o: ["Sel", "Çığ", "Hortum", "Deprem"], a: 0 },
      { q: "Erozyonu önlemenin en etkili yolu hangisidir?", o: ["Ağaçlandırma", "Yol yapımı", "Fabrika kurmak", "Tarım alanlarını boş bırakmak"], a: 0 },
      { q: "Afet ve Acil Durum Yönetimi Başkanlığının kısa adı nedir?", o: ["AFAD", "AKUT", "TEMA", "TİKA"], a: 0 },
      { q: "Türkiye'nin kuzeybatıdaki kara sınırı komşusu hangisidir?", o: ["Bulgaristan", "Gürcistan", "Irak", "İran"], a: 0 },
      { q: "Para birimi Lari olan komşumuz hangisidir?", o: ["Gürcistan", "Ermenistan", "İran", "Suriye"], a: 0 },
      { q: "İstiklâl Marşı hangi tarihte kabul edildi?", o: ["12 Mart 1921", "29 Ekim 1923", "23 Nisan 1920", "30 Ağustos 1922"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları konulara göre grupla.</p>` }],
    sort: {
      prompt: "Her kavramı konusuna yerleştir.",
      groups: ["Göreceli konum", "Afetler", "Komşu devletler"],
      items: [["Komşu iller", 0], ["Yön", 0], ["Ulaşım yolları", 0], ["Heyelan", 1], ["Çığ", 1], ["AFAD", 1], ["Başkent", 2], ["Para birimi", 2], ["Bayrak", 2]]
    },
    quiz: [
      { q: "İnsanların oluşturduğu ev, yol, köprü gibi unsurların bütününe ne denir?", o: ["Beşerî çevre", "Doğal çevre", "Afet"], a: 0 }
    ]
  };
})();

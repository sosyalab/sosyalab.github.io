// 7. Sınıf 2. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "2. Öğrenme Alanı: Evimiz Dünya",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Küreselleşmenin insan ve toplum hayatına etkisi</b>Ekonomi, ulaşım, iletişim, kültür, sağlık ve çevre alanlarındaki değişimler.</div>
          <div class="c-s"><b>Bölgesel ve küresel sorunların çözümünde ülkemizin rolü</b>Kültürel iş birliği, barış, göç, mülteciler, iklim krizi ve insani yardım.</div>
        </div>` },
      { t: "Bu alanda neler yapacağız?", html: `
        <ul>
          <li>Küreselleşmenin insan ve toplum hayatında meydana getirdiği değişimi <b>yorumlayacağız</b>.</li>
          <li>Bölgesel ve küresel sorunların çözümünde ülkemizin rolünü <b>özetleyeceğiz</b>.</li>
        </ul>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Değişim:</b> Bir durumdan başka bir duruma geçiş.</li>
          <li><b>Dış politika:</b> Bir devletin diğer devletlerle ilişkilerini düzenleyen politika.</li>
          <li><b>Girişimcilik:</b> Fırsatları görüp harekete geçme, yeni çözümler üretme.</li>
          <li><b>Küreselleşme:</b> Dünyanın ekonomik, kültürel ve siyasi olarak birbirine daha bağlı hâle gelmesi.</li>
          <li><b>Küresel sorunlar:</b> İklim krizi, salgınlar, savaşlar, göç gibi tüm dünyayı etkileyen sorunlar.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Dünyanın ekonomik, kültürel ve siyasi olarak birbirine daha bağlı hâle gelmesine ne denir?", o: ["Küreselleşme", "Göç", "Girişimcilik"], a: 0 },
      { q: "Hangisi küresel bir sorundur?", o: ["İklim krizi", "Mahalle parkının bakımı", "Okul kantininin fiyatları"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Küreselleşme", html: `
        <div class="two">
          <div><b>Olumlu etkiler</b>Hızlı ulaşım ve iletişim, ticaretin ve e-ticaretin büyümesi, sağlıkta iş birliği, farklı kültürleri tanıma.</div>
          <div><b>Olumsuz etkiler</b>Yerel kültürlerin zayıflaması, salgınların hızla yayılması, çevre sorunları, gelir adaletsizliği.</div>
        </div>
        <div class="fx"><b>Yerelden evrensele</b>Küresel sorunların çözümü bireyin kendi yaşam alanında başlar: tasarruf, geri dönüşüm, bilinçli tüketim ve millî değerlere sahip çıkmak.</div>` },
      { t: "Türkiye'nin rolü", html: `
        <ul>
          <li><b>Kültürel iş birliği:</b> Komşularımız ve Türk dünyasıyla ortak alfabe, sanat, spor ve arkeoloji çalışmaları.</li>
          <li><b>Barış:</b> Ara buluculuk; Rusya–Ukrayna, Gazze, Somali, Sudan görüşmeleri; Karadeniz Tahıl Koridoru.</li>
          <li><b>Göç ve mülteciler:</b> Milyonlarca sığınmacıya kucak açmak, Ahıska Türklerine konut projeleri.</li>
          <li><b>İklim krizi:</b> Yeşil Dönüşüm Vizyonu, 2053 Sıfır Emisyon Hedefi, COP31.</li>
          <li><b>İnsani yardım:</b> AFAD, Türk Kızılay, TİKA; İyilik Gemileri ve beş kıtada yardımlar.</li>
        </ul>` }
    ]
  };

  P.kuresellesme = {
    title: "Küreselleşme",
    tabs: [
      { t: "Hangi alanlar?", html: `
        <div class="stats">
          <div><span>Ekonomi</span>Ticaret dünya çapına yayıldı, uluslararası şirketler arttı.</div>
          <div><span>Ulaşım</span>Aylar süren yolculuklar saatlere indi.</div>
          <div><span>İletişim</span>Genel ağ ve akıllı telefonlarla anında haberleşme.</div>
          <div><span>Kültür</span>Yemek, müzik, giyim gibi öğeler ülkeler arasında taşındı.</div>
          <div><span>Sağlık</span>Teşhis ve tedavi kolaylaştı, salgınlar da hızlı yayıldı.</div>
          <div><span>Çevre</span>Üretim ve tüketim arttı, çevre sorunları küreselleşti.</div>
        </div>` },
      { t: "Olumsuz etkiler ve çözümler", html: `
        <div class="two">
          <div><b>Olumsuz etkiler</b>• Yerel kültürlerin zayıflaması<br>• Dilimize yabancı sözcüklerin girmesi<br>• Salgınların hızla yayılması<br>• Aşırı tüketim ve çevre kirliliği<br>• Küçük işletmelerin zorlanması</div>
          <div><b>Neler yapılabilir?</b>• Millî ve manevi değerlere sahip çıkmak<br>• Türkçeyi doğru kullanmak<br>• Bilinçli tüketim<br>• Yerli üretimi desteklemek<br>• Ülkeler arası iş birliği</div>
        </div>` }
    ],
    sort: {
      prompt: "Küreselleşmenin etkilerini doğru gruba yerleştir.",
      groups: ["Olumlu etki", "Olumsuz etki"],
      items: [["Bilgiye hızlı ulaşım", 0], ["Uzaktan eğitim", 0], ["Ticaretin büyümesi", 0], ["Farklı kültürleri tanıma", 0], ["Salgınların hızla yayılması", 1], ["Yerel kültürlerin zayıflaması", 1], ["Çevre kirliliği", 1], ["Aşırı tüketim", 1]]
    }
  };

  P.kahve = {
    title: "Kahvenin Yolculuğu",
    tabs: [{ t: "Tarladan fincana", html: `
      <div class="bars">
        <div><span>1 · Kahve tarlası (Brezilya, Kolombiya, Etiyopya…)</span><i style="--w:4"></i><b></b></div>
        <div><span>2 · Çekirdekler gemiyle Türkiye'ye ithal edilir</span><i style="--w:8"></i><b></b></div>
        <div><span>3 · Türk üreticiler kavurur ve ince öğütür</span><i style="--w:12"></i><b></b></div>
        <div><span>4 · Paketlenir, markalaşır</span><i style="--w:16"></i><b></b></div>
        <div><span>5 · Türk kahvesi olarak dünyaya ihraç edilir</span><i style="--w:21.6"></i><b></b></div>
      </div>
      <div class="fx"><b>Biliyor musun?</b>Türk kahvesi kültürü ve geleneği 2013'te UNESCO Somut Olmayan Kültürel Miras Listesi'ne alınmıştır.</div>` }]
  };

  P.yesilvatan = {
    title: "Yeşil Vatan İçin Sorumluluk Alıyoruz · Kontrol Listesi",
    checklist: [
      "Grup çalışmasına etkin biçimde katıldı.",
      "\"Yeşil Vatan\" metnini dikkatle okudu.",
      "Metinle ilgili anlamlı bir soru hazırladı.",
      "Sorusunun cevabı üzerine düşünerek fikir üretti.",
      "Cevaplarını grup arkadaşlarıyla paylaştı.",
      "Arkadaşlarının fikirlerini saygıyla dinledi.",
      "Ortak metnin oluşturulmasına katkı sağladı.",
      "Çevreyi korumaya yönelik sorumluluk bilinci gösterdi."
    ]
  };

  P.kavramharitasi = {
    title: "Kavram Haritası Hazırlıyorum · Kontrol Listesi",
    checklist: [
      "Etkilenen unsurları doğru belirledi.",
      "Küreselleşmenin insan üzerindeki etkisine doğru örnekler yazdı.",
      "Küreselleşmenin toplum üzerindeki etkisine doğru örnekler yazdı.",
      "Kutuların tamamını doldurdu.",
      "Örnekleri kısa ve anlaşılır biçimde ifade etti.",
      "Yazım ve noktalama kurallarına uydu.",
      "Kavram haritasını düzenli ve okunaklı hazırladı."
    ]
  };

  P.jeopolitik = {
    title: "Türkiye'nin Jeopolitik Konumu ve Dış Politikası",
    tabs: [
      { t: "Konum", html: `
        <div class="two">
          <div><b>Köprü ülke</b>Asya ile Avrupa'yı birbirine bağlar; üç tarafı denizlerle çevrilidir.</div>
          <div><b>Boğazlar</b>İstanbul ve Çanakkale boğazları Karadeniz'i dünya denizlerine bağlar.</div>
          <div><b>Enerji ve ticaret yolları</b>Doğal gaz ve petrol boru hatları ile Orta Koridor ülkemizden geçer.</div>
        </div>` },
      { t: "Dış politika", html: `
        <ul>
          <li>"Yurtta sulh, cihanda sulh" ilkesi dış politikamızın temelidir.</li>
          <li>Türkiye sorunların barışçıl yollarla çözülmesini savunur ve ara buluculuk yapar.</li>
          <li>Girişimci ve insani dış politika anlayışıyla mazlumlara yardım eder.</li>
          <li>Birleşmiş Milletler, NATO, Türk Devletleri Teşkilatı gibi kuruluşlarda etkin rol alır.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Türkiye'yi Asya ile Avrupa arasında köprü yapan özelliği nedir?", o: ["Coğrafi konumu", "Nüfusu", "İklimi"], a: 0 },
      { q: "Dış politikamızın temel ilkesi hangisidir?", o: ["Yurtta sulh, cihanda sulh", "Bekle ve gör", "Tek başına hareket"], a: 0 }
    ]
  };

  P.insaniyardim = {
    title: "Ülkemizin Girişimci ve İnsani Dış Politikası",
    tabs: [{ t: "Yardım kuruluşlarımız", html: `
      <div class="stats">
        <div><span>AFAD</span>Afet ve acil durumlarda yurt içinde ve dışında arama kurtarma ve yardım.</div>
        <div><span>Türk Kızılay</span>Gıda, çadır, kıyafet, kan bağışı ve İyilik Gemileri.</div>
        <div><span>TİKA</span>Okul, hastane, su kuyusu, tarım projeleri.</div>
        <div><span>Maarif Vakfı</span>Yurt dışında okullar ve eğitim desteği.</div>
      </div>
      <div class="fx"><b>Ulaşılan bölgeler</b>Gazze, Suriye, Yemen, Arakan, Afrika ülkeleri ve daha birçok bölge… Türkiye beş kıtada insani yardım ulaştırmaktadır.</div>` }],
    sort: {
      prompt: "Yardım örneklerini alanına yerleştir.",
      groups: ["Sağlık", "Eğitim", "Temel ihtiyaç"],
      items: [["Somali'de hastane", 0], ["Karabağ'da prefabrik hastane", 0], ["Üsküp'te Maarif okulu", 1], ["Kolombiya'da mobil kütüphane", 1], ["Gazze'ye gıda kolisi", 2], ["Çadır ve battaniye", 2]]
    }
  };

  P.gazze = {
    title: "Türkiye Gazze'ye Yardımda İlk Sırada",
    tabs: [{ t: "İyilik Gemileri", html: `
      <div class="stats">
        <div><span>21.</span>İyilik Gemisi Mısır'ın El Ariş Limanı'na ulaştı.</div>
        <div><span>3.000 ton</span>insani yardım malzemesi taşındı.</div>
        <div><span>175.000</span>gıda kolisi gönderildi.</div>
        <div><span>110.000 ton</span>toplam yardım miktarı.</div>
      </div>
      <p>Yardımlar; gıda, hijyen, giyim, barınma, su ve temel yaşam malzemelerinden oluşmaktadır. Kamu, özel sektör ve sivil toplum kuruluşları birlikte çalışmaktadır.</p>` }]
  };

  P.sunum = {
    title: "Sorunların Çözümünde Türkiye'nin Rolü · Sunum Kontrol Listesi",
    checklist: [
      "Sunumuna konuyla uyumlu bir başlık koydu.",
      "Türkiye'nin bölgesel sorunlardaki rolüne örnek verdi.",
      "Türkiye'nin küresel sorunlardaki rolüne örnek verdi.",
      "İnsani yardım, göç, mülteciler veya iklim krizi konularından yararlandı.",
      "Güvenilir kaynaklardan bilgi topladı.",
      "Görsel, harita veya grafik kullandı.",
      "Sunumunu açık ve anlaşılır bir dille yaptı.",
      "Süreyi etkili kullandı ve soruları yanıtladı."
    ]
  };

  P.sorular = {
    title: "Öğrenme Alanı Ek Sorular",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "COVID-19 salgınının kısa sürede tüm dünyaya yayılmasının temel nedeni nedir?", o: ["Ulaşımın hızlı olması", "İklimin değişmesi", "Nüfusun azalması", "Tarımın gelişmesi"], a: 0 },
      { q: "Orta Koridor hangi alanda Türkiye'ye katkı sağlar?", o: ["Ticaret ve ulaşım", "Sadece turizm", "Sadece tarım", "Spor"], a: 0 },
      { q: "Hangisi küreselleşmenin kültür üzerindeki olumsuz etkilerinden biridir?", o: ["Dilde yabancı sözcüklerin artması", "Bilgiye hızlı ulaşım", "Uzaktan eğitim", "E-ticaret"], a: 0 },
      { q: "\"Yeşil Vatan\" projesi hangi soruna yöneliktir?", o: ["Çevre sorunları", "Trafik", "İşsizlik", "Göç"], a: 0 },
      { q: "34 harften oluşan \"Ortak Türk Alfabesi\" hangi kuruluş bünyesinde kabul edildi?", o: ["Türk Devletleri Teşkilatı", "Birleşmiş Milletler", "NATO", "Avrupa Birliği"], a: 0 },
      { q: "Savaş, çatışma veya baskı nedeniyle ülkesini terk etmek zorunda kalan kişilere ne denir?", o: ["Mülteci", "Turist", "Diplomat", "Göçmen işçi"], a: 0 },
      { q: "Karadeniz'de tahıl trafiğini düzenleyen anlaşma hangi şehirde imzalanmıştır?", o: ["İstanbul", "Ankara", "Kiev", "Moskova"], a: 0 },
      { q: "\"Yurtta sulh, cihanda sulh.\" sözü hangi değeri vurgular?", o: ["Barış", "Rekabet", "Tasarruf", "Bağımsız yaşam"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları iki konuya göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["Küreselleşme", "Türkiye'nin rolü"],
      items: [["E-ticaret", 0], ["Kültürel etkileşim", 0], ["Uluslararası ticaret", 0], ["İletişim sistemleri", 0], ["Ara buluculuk", 1], ["İnsani yardım", 1], ["Mültecilere destek", 1], ["Kültürel iş birliği", 1]]
    },
    quiz: [
      { q: "Afet veya kriz zamanında insanlara temel ihtiyaç desteği sağlayan yardım türü hangisidir?", o: ["İnsani yardım", "Dış ticaret", "Turizm"], a: 0 },
      { q: "Dünya genelinde hava düzeninin bozulması ve aşırı iklim olaylarına ne denir?", o: ["İklim krizi", "Göç", "Küreselleşme"], a: 0 }
    ]
  };
})();

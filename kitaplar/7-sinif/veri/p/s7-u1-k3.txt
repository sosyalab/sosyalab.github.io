// 7. Sınıf 1. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "1. Öğrenme Alanı: Birlikte Yaşamak",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Gruplarda ve sosyal hayatta iletişimin önemi</b>Etkili iletişim, empati, ben dili, sen dili, etkin dinleme, beden dili, iletişim engelleri.</div>
          <div class="c-a"><b>Özel gereksinimli bireyler için fırsat eşitliği</b>Temel insan hakları, erişilebilirlik, engelleri aşan başarı hikâyeleri, devletin destekleri.</div>
          <div class="c-s"><b>Millî meseleler karşısında Türk toplumunun tutum ve davranışları</b>Millî Mücadele, 15 Temmuz, 6 Şubat depremleri, millî başarılar ve millî kimlik.</div>
        </div>` },
      { t: "Bu alanda neler yapacağız?", html: `
        <ul>
          <li>Dâhil olduğumuz gruplarda ve sosyal hayatta etkili iletişimin önemini <b>sorgulayacağız</b>.</li>
          <li>Özel gereksinimli bireyler için fırsat eşitliğini sürdürmeye yönelik <b>fikir üreteceğiz</b>.</li>
          <li>Türk toplumunun millî meseleler karşısındaki tutum ve davranışlarına ilişkin <b>çıkarım yapacağız</b>.</li>
        </ul>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>İletişim:</b> Duygu, düşünce ve bilgilerin karşılıklı paylaşılması.</li>
          <li><b>Kitle iletişim araçları:</b> Bilgiyi geniş kitlelere ulaştıran gazete, radyo, televizyon, genel ağ.</li>
          <li><b>Davranış:</b> Kişinin dışarıdan gözlemlenebilen hareketleri.</li>
          <li><b>Tutum:</b> Bir konuya karşı olumlu ya da olumsuz duygu ve düşünce eğilimi.</li>
          <li><b>Fırsat eşitliği:</b> Herkesin aynı haklardan yararlanabilmesi için gerekli koşulların sağlanması.</li>
          <li><b>Özel gereksinim:</b> Yaşıtlarından farklı olarak ek destek ve eğitime ihtiyaç duyma.</li>
          <li><b>Grup, toplum, sosyal hayat:</b> Bir arada yaşayan insanların oluşturduğu birliktelikler.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Kişinin karşısındakinin yerine kendini koyarak olaylara bakmasına ne denir?", o: ["Empati", "Sen dili", "Ön yargı"], a: 0 },
      { q: "\"Odanın dağınık olmasından rahatsız oluyorum.\" cümlesi hangisine örnektir?", o: ["Sen dili", "Ben dili", "Beden dili"], a: 1 },
      { q: "Hangisi fırsat eşitliğini destekleyen bir uygulamadır?", o: ["Kaldırımlarda hissedilebilir şerit", "Merdivensiz giriş yapmamak", "Ayrı sınıflar"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "İletişim", html: `
        <div class="two">
          <div><b>Etkili iletişim</b>Empati, ben dili, farklılıklara saygı, etkin dinleme, olumlu beden dili.</div>
          <div><b>İletişim engelleri</b>Sen dili, sözü kesmek, telefonla ilgilenmek, alaycı üslup, ön yargı, dikkatsizlik.</div>
        </div>
        <p>İletişim üçe ayrılır: <b>sözlü</b>, <b>yazılı</b> ve <b>sözsüz</b> (jest, mimik, beden dili).</p>` },
      { t: "Fırsat eşitliği", html: `
        <ul>
          <li>Özel gereksinimli bireyler toplumun eşit ve değerli üyeleridir; Anayasa'nın 10. maddesi herkesin kanun önünde eşit olduğunu belirtir.</li>
          <li>Rampa, asansör, sarı şerit, Braille alfabesi, işaret dili, kaynaştırma eğitimi, evde bakım hizmetleri fırsat eşitliğini destekler.</li>
          <li>Batuhan Eruçar, Sare Aydın, Yusuf Akgün gibi örnekler azim ve destekle engellerin aşılabileceğini gösterir.</li>
        </ul>` },
      { t: "Millî meseleler", html: `
        <p>Türk milleti; Millî Mücadele, 15 Temmuz ve 6 Şubat depremleri gibi zor zamanlarda birlik ve dayanışma içinde hareket etmiş, spor, sanat ve bilimdeki millî başarılarla birlikte gurur duymuştur.</p>
        <div class="fx"><b>Millî kimlik</b>Soy, dil, din, tarih, vatan ve kültür gibi ortak unsurlardan oluşur; Orhun Yazıtları millî kimlik bilincinin en güzel örneklerindendir.</div>` }
    ]
  };

  P.video = {
    title: "İletişim ile İlgili Video",
    tabs: [{ t: "Sık yapılan iletişim hataları", html: `
      <div class="two">
        <div><b>Hatalar</b>• Sözünü kesmek<br>• Göz teması kurmamak<br>• Telefonla ilgilenmek<br>• Bağırmak, suçlamak<br>• Alay etmek<br>• Önemsememek</div>
        <div><b>Doğrusu</b>• Sözün bitmesini beklemek<br>• Göz teması kurmak<br>• Telefonu bırakmak<br>• Sakin bir ses tonu<br>• Ben dili kullanmak<br>• Empati kurmak</div>
      </div>` }],
    sort: {
      prompt: "Davranışları doğru gruba yerleştir.",
      groups: ["Etkili iletişim", "İletişim engeli"],
      items: [["Göz teması kurmak", 0], ["Ben dili kullanmak", 0], ["Etkin dinlemek", 0], ["Gülümsemek", 0], ["Sözünü kesmek", 1], ["Sen dili kullanmak", 1], ["Telefonla ilgilenmek", 1], ["Alaycı konuşmak", 1]]
    }
  };

  P.beyin = {
    title: "Dijital Dünyada Doğru İletişim Kontrol Listesi",
    checklist: [
      "Beyin fırtınasına etkin biçimde katıldı.",
      "Günlük hayatta etkili iletişime engel olan durumlara örnek verdi.",
      "Dijital ortamlardaki iletişim engellerine örnek verdi.",
      "Örneklerini nedenleriyle açıkladı.",
      "Arkadaşlarının fikirlerini dinledi, sözlerini kesmedi.",
      "Farklı görüşlere saygı gösterdi.",
      "Türkçeyi doğru ve etkili kullandı.",
      "Grup çalışmasında görevini yerine getirdi."
    ]
  };

  P.yollar = {
    title: "Olumlu ve Olumsuz İletişim Yolları",
    tabs: [{ t: "Karşılaştır", html: `
      <div class="two">
        <div><b>Olumlu</b>\"Bir dahaki sefere daha dikkatli ol, olur mu?\"<br>\"İstersen birlikte tekrar bakalım.\"<br>\"Seni anlıyorum.\"</div>
        <div><b>Olumsuz</b>\"Hep sen bozuyorsun!\"<br>\"Senin yüzünden oldu!\"<br>\"Hiç dinlemiyorsun!\"</div>
      </div>
      <div class="fx"><b>Unutma</b>Bakışlar, ses tonu ve beden dili de iletişimin bir parçasıdır. Sevgi, saygı ve anlayış temelli iletişim ilişkileri güçlendirir.</div>` }]
  };

  P.uzlasma = {
    title: "Uzlaşmanın Gücü · Hikâyenin Devamı",
    tabs: [{ t: "Hikâye", html: `
      <p>Tartışma büyümek üzereyken Ahmet bir an durdu ve derin bir nefes aldı. \"Merve, haklı olabilirsin. Afişlerin gerçekten dikkat çekici.\" dedi. Merve de gülümsedi: \"Senin dijital sunumun da çok etkileyici olur.\"</p>
      <p>İkisi birlikte düşündüler ve fikirlerini birleştirmeye karar verdiler. Merve çevre kirliliğini anlatan resimler çizdi, Ahmet bu resimleri dijital sunumun içine yerleştirdi. Sunumun sonunda da sınıfın duvarına Merve'nin afişlerini astılar.</p>
      <p>Proje sınıfın en beğenilen çalışması oldu. Öğretmenleri ikisini tebrik ederek \"Farklı yetenekler bir araya gelince daha güçlü bir sonuç ortaya çıkıyor.\" dedi.</p>
      <div class="fx"><b>Uzlaşmayı sağlayan davranışlar</b>Sakinleşmek, dinlemek, karşıdakinin güçlü yönünü görmek, ortak çözüm bulmak, görev paylaşmak.</div>` }]
  };

  P.iletisimrubrik = {
    title: "Olumlu İletişimin Önemi · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Çalışması olumlu iletişimin önemini doğru yansıtıyor.",
      "Daha önce yapılmış örnekleri inceledi.",
      "Bir çalışma planı hazırladı.",
      "Slogan ya da özlü söz yazdıysa en az ikişer tane yazdı.",
      "Çalışması özgün ve yaratıcı.",
      "Türkçeyi doğru, güzel ve etkili kullandı.",
      "Çalışmasını düzenli ve zamanında teslim etti."
    ]
  };

  P.ucgenc = {
    title: "Engelleri Aşan Üç Genç",
    tabs: [{ t: "Başarı hikâyeleri", html: `
      <div class="two">
        <div><b>Batuhan Eruçar</b>Serebral palsi ile doğdu, doktor tavsiyesiyle yüzmeye başladı. 120'den fazla madalya kazandı; Çanakkale Anzak Koyu Yüzme Yarışı'nı özel gereksinimli sporcu olarak ilk kez tamamladı.</div>
        <div><b>Sare Aydın</b>Paraplejik olarak doğdu, 11 yaşına kadar okula gidemedi. Sınıf atladı, liseyi ve tıp fakültesini birincilikle bitirdi; psikiyatri uzmanı oldu.</div>
        <div><b>Yusuf Akgün</b>Altı yaşında iki kolunu kaybetti. Ağzıyla resim yapmayı öğrendi; yüzme, atletizm ve tiyatroda da başarılı oldu, birçok sergi açtı.</div>
      </div>` }]
  };

  P.paralimpik = {
    title: "Paralimpik Kahramanlar",
    tabs: [{ t: "Millî sporcularımız", html: `
      <ul>
        <li><b>Sümeyye Boyacı:</b> Paralimpik yüzmede dünya ve Avrupa şampiyonlukları kazandı.</li>
        <li><b>Defne Kurt:</b> 2025 Dünya Para Yüzme Şampiyonası'nda 5 altın madalya kazandı.</li>
        <li><b>Erkek Ampute Futbol Millî Takımı:</b> Avrupa şampiyonluğu ve dünya ikinciliği kazandı.</li>
        <li><b>Abdullah Öztürk:</b> Para masa tenisinde paralimpik şampiyonu.</li>
      </ul>
      <div class="fx"><b>Mesaj</b>Destek ve fırsat verildiğinde her birey yeteneklerini en üst düzeyde geliştirebilir.</div>` }]
  };

  P.altiisim = {
    title: "Engellerine Rağmen Büyük Başarılara İmza Atmış Altı İsim",
    tabs: [{ t: "Dünyadan ve Türkiye'den", html: `
      <div class="stats">
        <div><span>Hellen Keller</span>Görme ve işitme engeline rağmen yazar ve eğitimci oldu.</div>
        <div><span>Stephen Hawking</span>ALS hastalığına rağmen dünyaca ünlü bir fizikçi oldu.</div>
        <div><span>Beethoven</span>İşitme kaybına rağmen eşsiz eserler besteledi.</div>
        <div><span>Âşık Veysel</span>Görme engeline rağmen türküleriyle gönüllere dokundu.</div>
        <div><span>Louis Braille</span>Görme engelliler için kabartma alfabeyi geliştirdi.</div>
        <div><span>Sümeyye Boyacı</span>Kolları olmadan dünya yüzme şampiyonu oldu.</div>
      </div>` }]
  };

  P.engelleriasiyorum = {
    title: "Engelleri Aşıyorum",
    tabs: [{ t: "Etkinlik", html: `
      <ol>
        <li>Gözlerini kapatarak sıranın üzerindeki üç eşyayı bulmaya çalış.</li>
        <li>Tek elini kullanarak çantanı açıp bir defter çıkar.</li>
        <li>Konuşmadan, yalnızca beden dilinle arkadaşına bir şey anlat.</li>
      </ol>
      <div class="fx"><b>Düşün</b>Hangisi zorladı? Bu zorlukları her gün yaşayan biri için hangi düzenlemeler hayatı kolaylaştırır?</div>` }]
  };

  P.beyineseri = {
    title: "Beyin Eseri Tekniği",
    tabs: [{ t: "Nasıl uygulanır?", html: `
      <ol>
        <li>Her öğrenci konuyla ilgili fikrini bir kâğıda yazar.</li>
        <li>Kâğıtlar ters çevrilerek masaya konur.</li>
        <li>Herkes masadan rastgele bir kâğıt seçer ve fikri yüksek sesle okur.</li>
        <li>Okunan fikirler tartışılır, benzer fikirler gruplandırılır.</li>
        <li>En özgün fikirler belirlenir ve projeye dönüştürülür.</li>
      </ol>
      <div class="fx"><b>Avantajı</b>Kimin fikri olduğu bilinmediği için herkes çekinmeden düşüncesini yazar.</div>` }]
  };

  P.firsatfikir = {
    title: "Fırsat Eşitliği İçin Fikir Üretiyoruz Kontrol Listesi",
    checklist: [
      "Eğitim alanında fikir önerisi yazdı.",
      "Sağlık alanında fikir önerisi yazdı.",
      "İstihdam alanında fikir önerisi yazdı.",
      "Ulaşım alanında fikir önerisi yazdı.",
      "Sosyal yaşama katılım alanında fikir önerisi yazdı.",
      "Fikirleri uygulanabilir ve özgün.",
      "Arkadaşlarının fikirlerine saygı gösterdi.",
      "Benzer fikirleri gruplandırmaya katkı sağladı."
    ]
  };

  P.engelsizrubrik = {
    title: "Engelsiz Yaşam Tasarımları · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Proje taslağının tüm bölümlerini eksiksiz doldurdu.",
      "Projenin adı ve amacı fırsat eşitliğiyle uyumlu.",
      "Projenin yöntemini uygulanabilir adımlarla planladı.",
      "Güvenilir kaynaklardan yararlandı.",
      "Projeden faydalanacak kişileri doğru belirledi.",
      "Grup içinde koordinasyon ve iş birliği sağlandı.",
      "Sonuç ve değerlendirme bölümünü anlamlı biçimde yazdı.",
      "Projeyi zamanında tamamladı ve sundu."
    ]
  };

  P.millimeseleler = {
    title: "Millî Meselelerde Biz",
    tabs: [{ t: "Tarihimizden örnekler", html: `
      <div class="bars">
        <div><span>1915 · Çanakkale Savaşları</span><i style="--w:6"></i><b></b></div>
        <div><span>1919–1922 · Millî Mücadele</span><i style="--w:9"></i><b></b></div>
        <div><span>1974 · Kıbrıs Barış Harekâtı</span><i style="--w:13"></i><b></b></div>
        <div><span>1999 · Marmara depremi</span><i style="--w:16"></i><b></b></div>
        <div><span>2016 · 15 Temmuz</span><i style="--w:19"></i><b></b></div>
        <div><span>2023 · 6 Şubat depremleri</span><i style="--w:21.6"></i><b></b></div>
      </div>
      <div class="fx"><b>Ortak nokta</b>Her zorlukta Türk milleti birlik, beraberlik ve dayanışma içinde hareket etmiştir.</div>` }]
  };

  P.temmuz = {
    title: "15 Temmuz Darbe Girişimi",
    tabs: [
      { t: "Ne oldu?", html: `<p>15 Temmuz 2016 gecesi hain bir darbe girişimiyle millî irade hedef alındı. TBMM ve güvenlik güçlerinin binaları bombalandı. Türk milleti sokaklara, meydanlara ve köprülere çıkarak canı pahasına demokrasiye sahip çıktı.</p>
        <div class="stats"><div><span>253</span>şehit</div><div><span>Binlerce</span>gazi</div></div>` },
      { t: "Nasıl anıyoruz?", html: `<p>Her yıl 15 Temmuz, <b>Demokrasi ve Millî Birlik Günü</b> olarak anılır. Bu destan, milletimizin bağımsızlığına ve iradesine sahip çıkma kararlılığının simgesidir.</p>` }
    ]
  };

  P.kompozisyon = {
    title: "Kalemimden Dökülenler · Kompozisyon Kontrol Listesi",
    checklist: [
      "Kompozisyona konuyla uyumlu ve etkili bir başlık koydu.",
      "Giriş, gelişme ve sonuç bölümlerini oluşturdu.",
      "Millî meselelere tarihimizden ve günümüzden örnekler verdi.",
      "Tutum ve davranışların toplumsal birlikteliğe etkisini açıkladı.",
      "Panelde konuşulan görüşlerden yararlandı.",
      "Yazım ve noktalama kurallarına uydu.",
      "Açık ve anlaşılır bir dil kullandı.",
      "Kompozisyonunu arkadaşlarıyla paylaştı."
    ]
  };

  P.sorular = {
    title: "Öğrenme Alanı Ek Sorular",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "\"Sen hiç beni dinlemiyorsun!\" cümlesi hangi iletişim türüne örnektir?", o: ["Ben dili", "Sen dili", "Empati", "Etkin dinleme"], a: 1 },
      { q: "Yüz ifadeleriyle duygularımızı göstermemize ne denir?", o: ["Jest", "Mimik", "Ses tonu", "Yazılı iletişim"], a: 1 },
      { q: "\"İki dinle, bir söyle.\" atasözü hangi iletişim becerisini vurgular?", o: ["Etkin dinleme", "Sen dili", "Ön yargı", "Hızlı konuşma"], a: 0 },
      { q: "Hangisi özel gereksinimli bireyler için yapılan bir düzenleme değildir?", o: ["Rampa", "Hissedilebilir yüzey", "Sesli trafik ışığı", "Yüksek basamaklı merdiven"], a: 3 },
      { q: "Anayasa'nın 10. maddesi hangi ilkeyi düzenler?", o: ["Eşitlik", "Vergi ödevi", "Dilekçe hakkı", "Vatan hizmeti"], a: 0 },
      { q: "Millî Mücadele'de halkın elindeki imkânları orduya vermesini sağlayan emirlerin adı nedir?", o: ["Tekâlif-i Millîye Emirleri", "Amasya Genelgesi", "Misak-ı Millî", "Erzurum Kongresi"], a: 0 },
      { q: "15 Temmuz hangi adla anılmaktadır?", o: ["Demokrasi ve Millî Birlik Günü", "Zafer Bayramı", "Cumhuriyet Bayramı", "Ulusal Egemenlik Günü"], a: 0 },
      { q: "Hangisi millî kimliğin unsurlarından biri değildir?", o: ["Dil", "Tarih", "Kültür", "Kişisel zevkler"], a: 3 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları öğrenme alanının üç konusuna göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["İletişim", "Fırsat eşitliği", "Millî meseleler"],
      items: [["Empati", 0], ["Ben dili", 0], ["Mimik", 0], ["Rampa", 1], ["Braille alfabesi", 1], ["Özel gereksinim", 1], ["Millî kimlik", 2], ["15 Temmuz", 2], ["Tekâlif-i Millîye", 2]]
    },
    quiz: [
      { q: "Konuşan kişiyi doğru anlamak amacıyla dikkatle dinlemeye ne denir?", o: ["Etkin dinleme", "Sen dili", "Ön yargı"], a: 0 },
      { q: "Bir milletin tamamını ilgilendiren önemli gelişmelere ne denir?", o: ["Millî mesele", "Bireysel sorun", "Kitle iletişimi"], a: 0 }
    ]
  };
})();

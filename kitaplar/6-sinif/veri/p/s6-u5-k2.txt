// 6. Sınıf 5. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "5. Öğrenme Alanı: Hayatımızdaki Ekonomi",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Ülkemizin kaynakları ve ekonomik faaliyetler</b>Toprak, su, orman ve maden kaynaklarına dayalı tarım, hayvancılık, balıkçılık, ormancılık, madencilik, sanayi ve turizm.</div>
          <div class="c-a"><b>Ekonomik faaliyetler ve meslekler</b>Her ekonomik faaliyetle ilişkili meslekler; geçmişten günümüze ve geleceğe mesleklerin değişimi.</div>
          <div class="c-s"><b>Tasarlanan bir ürünün yatırım ve pazarlama süreci</b>Üretim-dağıtım-tüketim, AR-GE, inovasyon, GZFT, sermaye, yatırım ve pazarlama.</div>
        </div>` },
      { t: "Bu alanda neler yapacağız?", html: `
        <ul>
          <li>Ülkemizin kaynakları ile ekonomik faaliyetler arasındaki ilişkiyi <b>çözümleyeceğiz</b>.</li>
          <li>Ekonomik faaliyetler ve meslekler arasındaki ilişki hakkında <b>çıkarımda bulunacağız</b>.</li>
          <li>Tasarladığımız bir ürün için yatırım ve pazarlama proje önerisi <b>hazırlayacağız</b>.</li>
        </ul>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Doğal kaynak:</b> Doğada kendiliğinden bulunan toprak, su, orman ve madenler.</li>
          <li><b>Ekonomik faaliyet:</b> İhtiyaçları karşılamak ve gelir elde etmek için yapılan çalışmalar.</li>
          <li><b>Meslek:</b> Eğitimle kazanılan, insanların geçimini sağladığı iş.</li>
          <li><b>Üretim-dağıtım-tüketim:</b> Bir ürünün yapılıp insanlara ulaşması ve kullanılması.</li>
          <li><b>Yatırım:</b> Parayı gelir getirecek bir mala yatırmak.</li>
          <li><b>Pazarlama:</b> Ürünün tanıtılması, müşteriye sunulması ve satılması.</li>
          <li><b>Tasarım:</b> Yeni bir ürünün fikirden maket ve uygulamaya kadar planlanması.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Hangisi doğal kaynak değildir?", o: ["Orman", "Fabrika", "Akarsu"], a: 1 },
      { q: "Bir ürünün tanıtılması ve satılması sürecine ne denir?", o: ["Pazarlama", "Üretim", "Tüketim"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Kaynaklar", html: `
        <div class="two">
          <div><b>Toprak</b>Tarım (tahıl, çay, fındık, pamuk), hayvancılık (Erzurum-Kars), seramik (Kütahya).</div>
          <div><b>Su</b>Balıkçılık, HES ve barajlar, sulama (GAP), turizm, ulaşım (boğazlar).</div>
          <div><b>Orman</b>Kereste, mobilya, kâğıt, arıcılık, kamp ve doğa turizmi.</div>
          <div><b>Maden</b>Bor, taş kömürü, petrol, krom, bakır, demir, mermer.</div>
        </div>` },
      { t: "Meslekler", html: `
        <p>Her ekonomik faaliyetin kendine özgü meslekleri vardır. Teknoloji geliştikçe bazı meslekler kaybolur (nalbantlık, semercilik), bazıları ortaya çıkar (yapay zekâ mühendisliği, dron pilotluğu).</p>` },
      { t: "Ürün süreci", html: `
        <div class="bars">
          <div><span>Fikir</span><i style="--w:5"></i><b></b></div>
          <div><span>Araştırma ve AR-GE</span><i style="--w:9"></i><b></b></div>
          <div><span>Hazırlık ve GZFT</span><i style="--w:13"></i><b></b></div>
          <div><span>Yatırım (sermaye, malzeme, iş gücü)</span><i style="--w:17"></i><b></b></div>
          <div><span>Üretim ve pazarlama</span><i style="--w:21.6"></i><b></b></div>
        </div>` }
    ]
  };

  P.toprak = {
    title: "Topraklarımıza Dayalı Ekonomik Faaliyetler",
    tabs: [{ t: "Örnekler", html: `
      <div class="stats">
        <div><span>Ayçiçeği</span>Tekirdağ · bitkisel yağ</div>
        <div><span>Tahıl, pancar</span>Konya · gıda sanayi</div>
        <div><span>İncir, üzüm</span>Aydın · ticaret</div>
        <div><span>Porselen</span>Kütahya · seramik</div>
        <div><span>Turunçgil</span>Antalya · meyve suyu</div>
        <div><span>Fındık, çay</span>Giresun, Rize · gıda</div>
        <div><span>Hayvancılık</span>Erzurum-Kars</div>
        <div><span>Pamuk</span>Adana · tekstil</div>
        <div><span>Antep fıstığı</span>Gaziantep, Şanlıurfa</div>
      </div>` }],
    sort: {
      prompt: "Her ürünü yetiştiği ile yerleştir.",
      groups: ["Karadeniz", "Akdeniz ve Ege", "İç ve Doğu Anadolu"],
      items: [["Çay", 0], ["Fındık", 0], ["Bal (Ordu)", 0], ["Turunçgil", 1], ["İncir", 1], ["Pamuk", 1], ["Tahıl", 2], ["Şeker pancarı", 2], ["Büyükbaş hayvancılık", 2]]
    }
  };

  P.su = {
    title: "Sularımıza Dayalı Ekonomik Faaliyetler",
    tabs: [{ t: "Örnekler", html: `
      <ul>
        <li><b>Ulaşım ve ticaret:</b> İstanbul ve Çanakkale boğazları; Van Gölü'nde feribot.</li>
        <li><b>Enerji:</b> Çoruh üzerindeki Yusufeli Barajı ve diğer HES'ler.</li>
        <li><b>Tarım:</b> GAP barajlarıyla sulu tarım.</li>
        <li><b>Balıkçılık:</b> Karadeniz'de hamsi, Muğla'da kültür balıkçılığı.</li>
        <li><b>Turizm:</b> Akdeniz-Ege kıyı turizmi, Manavgat'ta rafting, Denizli'de termal turizm.</li>
      </ul>` }],
    quiz: [
      { q: "Hangi barajda hidroelektrik enerji üretilmektedir?", o: ["Yusufeli Barajı", "Tuz Gölü", "Van Gölü"], a: 0 },
      { q: "Rafting hangi akarsu üzerinde yapılır?", o: ["Manavgat Çayı", "Dicle", "Kızılırmak"], a: 0 }
    ]
  };

  P.orman = {
    title: "Ormanlarımıza Dayalı Ekonomik Faaliyetler",
    tabs: [{ t: "Örnekler", html: `
      <ul>
        <li><b>Kereste ve parke:</b> Kastamonu</li>
        <li><b>Mobilya:</b> Bursa, İstanbul, Kayseri</li>
        <li><b>Kâğıt:</b> Muğla-Dalaman</li>
        <li><b>Yakacak odun:</b> Sakarya ve birçok il</li>
        <li><b>Bal ormanları ve kestane balı:</b> Giresun, Artvin</li>
        <li><b>Yem ve gübre:</b> Yozgat</li>
        <li><b>Turizm:</b> Isparta Kızıldağ Millî Parkı, Mersin'de kamp</li>
      </ul>
      <div class="fx"><b>Unutma</b>Ormanlar oksijen kaynağıdır; sel, erozyon ve çığ gibi afetlerin etkisini azaltır.</div>` }]
  };

  P.maden = {
    title: "Madenlerimize Dayalı Ekonomik Faaliyetler",
    tabs: [{ t: "Örnekler", html: `
      <div class="stats">
        <div><span>Bor</span>Kütahya, Eskişehir, Balıkesir, Bursa</div>
        <div><span>Taş kömürü</span>Zonguldak · enerji</div>
        <div><span>Mermer</span>Afyonkarahisar · inşaat</div>
        <div><span>Boksit</span>Konya · alüminyum</div>
        <div><span>Tuz</span>Tuz Gölü · gıda</div>
        <div><span>Krom</span>Elazığ · uçak, gemi</div>
        <div><span>Bakır</span>Artvin · elektronik</div>
        <div><span>Petrol</span>Batman, Şırnak (Gabar)</div>
        <div><span>Demir</span>Malatya · otomotiv</div>
      </div>
      <p>Türkiye, dünyada ticareti yapılan 90 madenden 77'sine sahiptir; maden çeşitliliğinde dünyada 10. sıradadır.</p>` }],
    sort: {
      prompt: "Her madeni çıkarıldığı ile eşleştir.",
      groups: ["Enerji", "Sanayi", "İnşaat ve süs"],
      items: [["Taş kömürü (Zonguldak)", 0], ["Petrol (Batman)", 0], ["Linyit (Kütahya)", 0], ["Demir (Malatya)", 1], ["Krom (Elazığ)", 1], ["Bakır (Artvin)", 1], ["Mermer (Afyon)", 2], ["Oltu taşı (Erzurum)", 2]]
    }
  };

  P.vatanseverlik = {
    title: "Doğal Kaynaklar ve Vatanseverlik",
    tabs: [{ t: "Neden önemli?", html: `
      <p>Doğal kaynaklarımız ülkemizin zenginliğidir ve gelecek nesillere emanettir.</p>
      <ul>
        <li>Ormanları yangından korumak, ağaç dikmek</li>
        <li>Suyu israf etmemek, kirletmemek</li>
        <li>Toprağı erozyondan korumak, tarım alanlarına bina yapmamak</li>
        <li>Madenleri yerli imkânlarla işleyip dışa bağımlılığı azaltmak</li>
        <li>Yerli ürünleri tercih etmek</li>
      </ul>
      <div class="fx"><b>Vatanseverlik</b>Kaynaklarımızı korumak ve verimli kullanmak, vatanımıza sahip çıkmanın bir yoludur.</div>` }]
  };

  P.harita = {
    title: "Doğal Kaynaklara Dayalı Ekonomik Faaliyetler Haritası Derecelendirme Ölçeği",
    levels: RUBRIC,
    checklist: [
      "Toprak, su, orman ve maden kaynakları ile öne çıkan üçer il belirledi.",
      "İllerin isimlerini haritaya doğru yazdı.",
      "İlleri harita üzerinde doğru boyadı.",
      "Doğal kaynaklarla ilgili ekonomik faaliyetleri doğru yazdı.",
      "Haritayı düzenli, okunaklı ve özenli hazırladı.",
      "Güvenilir kaynaklardan yararlandı.",
      "Çalışmasını zamanında teslim etti."
    ]
  };

  P.tartisma = {
    title: "Tartışma Kontrol Listesi",
    checklist: [
      "Sırasını bekleyerek çemberdeki sandalyeye oturdu ve görüşünü söyledi.",
      "Bir ekonomik faaliyetin doğal kaynakları nasıl etkilediğini açıkladı.",
      "Kaynaklara sahip çıkmanın vatanseverlikle ilişkisini kurdu.",
      "Görüşlerini örneklerle destekledi.",
      "Arkadaşlarını dinledi, sözlerini kesmedi.",
      "Farklı görüşlere saygı gösterdi.",
      "Türkçeyi doğru, güzel ve etkili kullandı.",
      "Vardığı sonucu yazılı olarak ifade etti."
    ]
  };

  P.meslekler = {
    title: "Ekonomik Faaliyetler ve Meslekler",
    tabs: [{ t: "Örnekler", html: `
      <div class="two">
        <div><b>Hizmet</b>Öğretmen, doktor, psikolog, asker, polis, bankacı, itfaiyeci, avukat</div>
        <div><b>Sanayi</b>Mühendis, teknisyen, operatör, ustabaşı, oto boyacısı</div>
        <div><b>Turizm</b>Rehber, aşçı, resepsiyonist, animatör, tercüman</div>
        <div><b>Ormancılık</b>Orman mühendisi, orman bekçisi, marangoz, keresteci</div>
        <div><b>Ticaret ve ulaşım</b>Pazarlamacı, ihracat uzmanı, şoför, pilot, kaptan, vatman</div>
        <div><b>Tarım ve hayvancılık</b>Çiftçi, ziraat mühendisi, veteriner, çoban, arıcı</div>
        <div><b>Madencilik</b>Maden mühendisi, maden işçisi, iş güvenliği uzmanı</div>
      </div>` }]
  };

  P.eslestirme = {
    title: "Ekonomik Faaliyetler ve Meslekler Eşleştirme Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Her mesleği ilgili ekonomik faaliyete yerleştir.</p>` }],
    sort: {
      prompt: "Her mesleği doğru ekonomik faaliyete yerleştir.",
      groups: ["Tarım", "Sanayi", "Turizm", "Madencilik"],
      items: [["Ziraat mühendisi", 0], ["Çiftçi", 0], ["Makine mühendisi", 1], ["Fabrika işçisi", 1], ["Turist rehberi", 2], ["Aşçı", 2], ["Maden mühendisi", 3], ["Maden işçisi", 3]]
    }
  };

  P.gelecek = {
    title: "Geleceğin Meslekleri",
    tabs: [{ t: "Yükselen alanlar", html: `
      <div class="stats">
        <div><span>Yapay zekâ</span>Yapay zekâ mühendisi ve eğitmeni</div>
        <div><span>Veri</span>Veri bilimci, veri analisti</div>
        <div><span>Güvenlik</span>Siber güvenlik uzmanı</div>
        <div><span>Robotik</span>Robot ve dron teknisyeni, dron pilotu</div>
        <div><span>İklim</span>İklim mühendisi, yenilenebilir enerji teknisyeni</div>
        <div><span>Dijital</span>Dijital içerik üreticisi, blokzincir uzmanı</div>
      </div>
      <div class="fx"><b>Ne yapmalıyız?</b>Gelecekte birçok meslekte dijital beceriler gerekecek. Merak etmek, problem çözmek, iş birliği yapmak ve öğrenmeye açık olmak her meslekte işimize yarar.</div>` }]
  };

  P.gozlem = {
    title: "Gözlem Formu",
    levels: [['Evet', 2], ['Kısmen', 1], ['Hayır', 0]],
    checklist: [
      "Ekonomik faaliyet ve mesleklerdeki değişimlere örnek verdi.",
      "Yeni ortaya çıkan meslekleri doğru belirledi.",
      "Teknoloji ve dijitalleşmenin mesleklere etkisini açıkladı.",
      "Beyin fırtınasına etkin biçimde katıldı.",
      "Arkadaşlarının fikirlerine saygı gösterdi.",
      "Türkçeyi doğru ve etkili kullandı."
    ]
  };

  P.mektup = {
    title: "\"Gelecekten Bugüne\" Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Gelecekte ortaya çıkabilecek bir mesleği seçti.",
      "Mesleği tanıtıcı bilgiler verdi (ne iş yaptığı, hangi becerileri gerektirdiği).",
      "Mesleğin hangi ekonomik faaliyetle ilişkili olduğunu belirtti.",
      "Değişim ve sürekliliği algıladığını gösterdi.",
      "Mektup ya da kartpostal biçimine uydu.",
      "Türkçeyi doğru, güzel ve etkili kullandı.",
      "Ürününü özenli ve yaratıcı biçimde hazırladı.",
      "Çalışmasını sınıfla paylaştı."
    ]
  };

  P.urun = {
    title: "Ürün Tasarımı Nasıl Yapılır?",
    tabs: [{ t: "Adımlar", html: `
      <ol>
        <li><b>Fikir:</b> Çevredeki ihtiyaç ve problemleri belirle.</li>
        <li><b>Araştırma:</b> Ürünün nasıl üretileceğini, hangi ihtiyacı karşılayacağını ve etkilerini araştır.</li>
        <li><b>Hazırlık:</b> Çalışma planı yap, malzemeleri ve bütçeyi belirle.</li>
        <li><b>Uygulama:</b> Çizim, grafik ve maket hazırla; iş bölümü yap.</li>
        <li><b>Değerlendirme:</b> Maketi incele, gerekirse geliştir ve yeniden dene.</li>
      </ol>` }]
  };

  P.projeler = {
    title: "Ülkemizden Örnek Yatırım ve Pazarlama Projeleri",
    tabs: [{ t: "Örnekler", html: `
      <ul>
        <li><b>Köy kooperatifleri:</b> Kadın kooperatiflerinin tarhana, erişte, salça gibi ürünleri markalaştırıp genel ağdan satması.</li>
        <li><b>Coğrafi işaretli ürünler:</b> Malatya kayısısı, Antep fıstığı, Rize çayı gibi ürünlerin tescillenip tanıtılması.</li>
        <li><b>Tıbbi ve aromatik bitkiler:</b> Boş arazilerde lavanta ve kekik yetiştirilip yağının çıkarılması.</li>
        <li><b>El sanatları:</b> Keçe, kilim ve bakır ürünlerin hediyelik eşya olarak pazarlanması.</li>
        <li><b>Yerli teknoloji:</b> Öğrenci ve gençlerin TEKNOFEST gibi yarışmalarda tasarladığı ürünlerin desteklenmesi.</li>
      </ul>` }]
  };

  P.rapor = {
    title: "Örnek Proje Raporu",
    tabs: [{ t: "Keçe ürünleri", html: `
      <div class="stats">
        <div><span>Ürün</span>Keçe telefon kılıfı, kalemlik, gözlük kılıfı, cüzdan</div>
        <div><span>Ham madde</span>Yöredeki büyükbaş hayvanların yünleri, keçe atıkları</div>
        <div><span>Sermaye</span>Grup bütçesinden ayrılan para</div>
        <div><span>İş gücü</span>Bütçe sorumlusu, malzeme yöneticisi, insan kaynakları uzmanı</div>
      </div>
      <div class="two">
        <div><b>Güçlü yönler</b>Ham madde çevrede yaygın, el emeği, farklı amaçlarla kullanılabilir.</div>
        <div><b>Zayıf yönler</b>Ham maddeyi kendimiz üretmiyoruz, deneyim eksikliği.</div>
        <div><b>Fırsatlar</b>El emeği ürünlerin tercih edilmesi, çok yaş grubuna hitap, satış yerlerinin olması.</div>
        <div><b>Tehditler</b>Ham madde temininde sorun, tüketicinin tercih etmemesi.</div>
      </div>
      <div class="fx"><b>Pazarlama</b>Okul kantini, yerel pazar ve sosyal medya. Ürün dürüst ve tarafsız biçimde tanıtılır.</div>` }]
  };

  P.analitik = {
    title: "Yatırım ve Pazarlama Projesi Analitik Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Çevredeki kaynakları ve ekonomik faaliyetleri dikkate alarak ürün tasarladı.",
      "Ürünün yatırım ve pazarlama alanını belirledi.",
      "GZFT formunu doğru doldurdu.",
      "Araç-gereç, malzeme, sermaye ve iş gücü kaynaklarını belirledi.",
      "Grup içinde rol dağılımı yaptı ve rolleri canlandırdı.",
      "Deneyimli bir girişimciyle görüşme yaptı.",
      "Proje raporunu eksiksiz hazırladı.",
      "Pazarlamada tüketiciyi yanıltmadan dürüst bir tanıtım yaptı."
    ]
  };

  P.sunum = {
    title: "Proje Sunumu Kontrol Listesi",
    checklist: [
      "Ürünü ve amacını açık biçimde tanıttı.",
      "Yatırım ve pazarlama sürecini aşamalarıyla anlattı.",
      "GZFT analizini sundu.",
      "Sunumunu görsellerle destekledi.",
      "Grup üyeleri sunuma eşit katıldı.",
      "Soruları doğru ve kibar biçimde yanıtladı.",
      "Türkçeyi doğru ve etkili kullandı.",
      "Sunumu verilen sürede tamamladı."
    ]
  };

  P.sorular = {
    title: "Daha Fazla Örnek Soru",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "Rize ve çevresinde yetiştirilen ve gıda sanayisinde kullanılan ürün hangisidir?", o: ["Çay", "Pamuk", "İncir", "Ayçiçeği"], a: 0 },
      { q: "Erzurum-Kars Platosu'nda hangi ekonomik faaliyet yaygındır?", o: ["Turunçgil tarımı", "Büyükbaş hayvancılık", "Seracılık", "Balıkçılık"], a: 1 },
      { q: "Bilişim teknolojileri ve roket yakıtında kullanılan maden hangisidir?", o: ["Mermer", "Bor", "Tuz", "Oltu taşı"], a: 1 },
      { q: "Hangisi ormana dayalı bir ekonomik faaliyettir?", o: ["Kâğıt üretimi", "Rafting", "Petrol çıkarımı", "Seramik üretimi"], a: 0 },
      { q: "Hangisi geçmişte yaygın olup günümüzde azalan bir meslektir?", o: ["Nalbantlık", "Yazılımcılık", "Dron pilotluğu", "Veri analistliği"], a: 0 },
      { q: "Bir ürünün piyasaya sunulmadan önce incelenmesi, geliştirilmesi ve test edilmesine ne denir?", o: ["Pazarlama", "AR-GE", "Tüketim", "Dağıtım"], a: 1 },
      { q: "Bir işin yapılıp sürdürülebilmesi için gereken ana paraya ne denir?", o: ["Sermaye", "Vergi", "Kâr", "Fatura"], a: 0 },
      { q: "GZFT analizinde \"T\" harfi neyi ifade eder?", o: ["Tasarım", "Tehdit", "Tüketim", "Tanıtım"], a: 1 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları öğrenme alanının üç konusuna göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["Kaynaklar", "Meslekler", "Yatırım ve pazarlama"],
      items: [["Bor madeni", 0], ["Ormancılık", 0], ["Baraj", 0], ["Ziraat mühendisi", 1], ["Nalbant", 1], ["Dron pilotu", 1], ["Sermaye", 2], ["GZFT", 2], ["İnovasyon", 2]]
    },
    quiz: [
      { q: "Var olan bir şeyi geliştirmek ya da yepyeni bir şey ortaya koymaya ne denir?", o: ["İnovasyon", "Tüketim", "Sermaye"], a: 0 },
      { q: "Ürünlerin kullanılıp harcanmasına ne denir?", o: ["Tüketim", "Üretim", "Yatırım"], a: 0 }
    ]
  };
})();

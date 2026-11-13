// "Yaşadığınız il" sorularının cevapları için 81 il bilgisi.
// [ad, iklim, yüzey (d: düz/plato, e: engebeli, k: karma), yer şekilleri, ekonomi, kültürel ögeler]
// iklim: kd (Karadeniz), ak (Akdeniz), ma (Marmara/geçiş), ka (karasal), ks (sert karasal)
(function () {
  const L = [
    ["Adana","ak","k","Çukurova'nın verimli düzlükleri ve kuzeyde Toroslar","pamuk, turunçgil ve tarım ürünlerine dayalı sanayi ile ticaret","Taşköprü, Sabancı Merkez Camii, Adana kebabı, şalgam"],
    ["Adıyaman","ka","k","Fırat'a uzanan platolar ve kuzeyde Nemrut Dağı","tarım, Atatürk Barajı'nda balıkçılık ve turizm","Nemrut Dağı heykelleri, Cendere Köprüsü, çiğ köfte"],
    ["Afyonkarahisar","ka","k","geniş ovalar, platolar ve volkanik dağlar","tarım, mermercilik, termal turizm ve hayvancılık","Afyon Kalesi, Frig Vadisi, kaymak, sucuk, termal kaplıcalar"],
    ["Ağrı","ks","e","Ağrı Dağı ve yüksek, engebeli platolar","büyükbaş hayvancılık ve sınır ticareti","Ağrı Dağı, İshak Paşa Sarayı, Meteor Çukuru"],
    ["Amasya","kd","e","Yeşilırmak vadisi ve çevresindeki dağlar","elma ve meyvecilik, tarım ve turizm","Kral Kaya Mezarları, Yalıboyu evleri, Amasya elması"],
    ["Ankara","ka","d","geniş plato ve ovalar","kamu hizmetleri, sanayi, ticaret ve tahıl tarımı","Ankara Kalesi, Anıtkabir, Anadolu Medeniyetleri Müzesi, seymen oyunları"],
    ["Antalya","ak","k","kıyı ovaları ve hemen gerisinde Toros Dağları","deniz turizmi, seracılık ve turunçgil tarımı","Kaleiçi, Aspendos Tiyatrosu, Düden Şelalesi, piyaz"],
    ["Artvin","kd","e","dik yamaçlı dağlar ve dar Çoruh vadisi","çay ve fındık tarımı, arıcılık ve doğa turizmi","Macahel, Şavşat evleri, Kafkasör Yaylası, Artvin balı"],
    ["Aydın","ak","k","Büyük Menderes Ovası ve çevresindeki dağlar","incir, zeytin, pamuk tarımı ve deniz turizmi","Efes yakınındaki Priene ve Milet, Afrodisias, Aydın inciri, zeybek"],
    ["Balıkesir","ma","k","ovalar, platolar ve batıda Kaz Dağları","zeytin, tarım, hayvancılık, sanayi ve kıyı turizmi","Kaz Dağları, Cunda Adası, höşmerim, Ayvalık evleri"],
    ["Bilecik","ma","e","dağlık ve engebeli arazi ile Sakarya vadisi","seramik ve mermer sanayisi, tarım","Söğüt Ertuğrul Gazi Türbesi, Osmanlı'nın kuruluş yerleri"],
    ["Bingöl","ks","e","yüksek dağlar ve dar vadiler","büyükbaş hayvancılık, arıcılık ve yaylacılık","Yüzen Adalar, Bingöl balı, yayla şenlikleri"],
    ["Bitlis","ks","e","Van Gölü kıyısı ve çevresindeki yüksek dağlar","hayvancılık, tütün ve sınırlı tarım","Ahlat Selçuklu Mezarlığı, Nemrut Krater Gölü, büryan kebabı"],
    ["Bolu","kd","e","ormanlarla kaplı dağlar ve göller","ormancılık, tavukçuluk ve doğa turizmi","Abant Gölü, Yedigöller, Gölcük, Mengen aşçıları"],
    ["Burdur","ak","k","göller, ovalar ve Toros Dağları","süt hayvancılığı, tarım ve mermer","Burdur Gölü, Salda Gölü, Sagalassos, Burdur şiş köftesi"],
    ["Bursa","ma","k","verimli ovalar ve güneyde Uludağ","otomotiv ve tekstil sanayisi, meyve-sebze tarımı ve kış turizmi","Ulu Cami, Cumalıkızık, Uludağ, İskender kebap, Karagöz"],
    ["Çanakkale","ma","k","kıyı ovaları, yarımadalar ve Kaz Dağları","tarım, balıkçılık, turizm ve deniz ulaşımı","Çanakkale Şehitlik Anıtı, Truva Antik Kenti, peynir helvası"],
    ["Çankırı","ka","e","engebeli platolar ve Ilgaz Dağları","tarım, hayvancılık ve kaya tuzu","Çankırı Tuz Mağarası, Ilgaz Dağı, Taş Mescit"],
    ["Çorum","ka","k","platolar ve akarsu vadileri","leblebi, tahıl tarımı ve sanayi","Hattuşa, Alacahöyük, Çorum leblebisi"],
    ["Denizli","ak","k","ovalar, platolar ve dağlar","tekstil sanayisi, mermer, tarım ve termal turizm","Pamukkale travertenleri, Hierapolis, Denizli horozu"],
    ["Diyarbakır","ka","d","Dicle kıyısında geniş platolar","tahıl ve karpuz tarımı, hayvancılık ve ticaret","Diyarbakır surları, Ulu Cami, On Gözlü Köprü, karpuz"],
    ["Düzce","kd","k","verimli Düzce Ovası ve ormanlık dağlar","fındık tarımı, ormancılık ve sanayi","Akçakoca kıyıları, Güzeldere Şelalesi, Efteni Gölü"],
    ["Edirne","ma","d","geniş Trakya ovaları ve Meriç-Tunca vadileri","ayçiçeği ve pirinç tarımı, sınır ticareti","Selimiye Camii, Kırkpınar Yağlı Güreşleri, ciğer tava"],
    ["Elazığ","ka","k","ovalar, Keban ve Hazar gölleri","tarım, maden ve balıkçılık","Harput, Hazar Gölü, Elazığ çerezi, kürsübaşı sohbetleri"],
    ["Erzincan","ks","e","Fırat vadisindeki ova ve yüksek dağlar","tarım, hayvancılık ve tulum peyniri","Kemaliye, Girlevik Şelalesi, Erzincan tulum peyniri"],
    ["Erzurum","ks","k","yüksek platolar ve dağlar","büyükbaş hayvancılık, kış turizmi ve eğitim","Çifte Minareli Medrese, Palandöken, cağ kebabı, bar oyunları"],
    ["Eskişehir","ka","d","geniş Porsuk Ovası ve platolar","sanayi, havacılık, tarım ve üniversiteler","Odunpazarı evleri, lületaşı, çibörek, Nasreddin Hoca"],
    ["Gaziantep","ka","d","alçak ve düz platolar","sanayi, ticaret, fıstık ve zeytin tarımı","Zeugma Mozaik Müzesi, Gaziantep Kalesi, baklava, Antep fıstığı"],
    ["Giresun","kd","e","dik yamaçlı dağlar ve dar kıyı","fındık tarımı, balıkçılık ve yaylacılık","Giresun Adası, Kümbet Yaylası, Giresun fındığı, Aksu Festivali"],
    ["Gümüşhane","ks","e","dağlık ve engebeli arazi ile derin vadiler","hayvancılık, pestil-köme ve maden","Karaca Mağarası, Santa Harabeleri, pestil ve köme"],
    ["Hakkari","ks","e","çok yüksek ve sarp dağlar","hayvancılık, arıcılık ve sınır ticareti","Cilo-Sat Dağları, Zap Vadisi, Hakkari balı"],
    ["Hatay","ak","k","Amik Ovası ve Nur Dağları","tarım, ticaret, liman ve sanayi","Habibi Neccar Camii, Mozaik Müzesi, künefe, Harbiye Şelalesi"],
    ["Isparta","ak","k","göller bölgesindeki ovalar ve dağlar","gül ve elma tarımı, halıcılık","Isparta gülü, Eğirdir Gölü, Isparta halısı"],
    ["Mersin","ak","k","kıyı ovaları ve gerisinde Toros Dağları","liman ticareti, turunçgil ve seracılık, turizm","Kızkalesi, Cennet ve Cehennem obrukları, tantuni"],
    ["İstanbul","ma","k","iki yarımada üzerinde alçak tepeler ve boğaz kıyıları","sanayi, ticaret, finans, turizm ve liman","Ayasofya, Topkapı Sarayı, Galata Kulesi, Boğaz köprüleri"],
    ["İzmir","ak","k","Gediz ve Küçük Menderes ovaları ile dağlar","liman ticareti, sanayi, tarım ve turizm","Saat Kulesi, Kemeraltı Çarşısı, Efes Antik Kenti, boyoz, zeybek"],
    ["Kars","ks","d","yüksek platolar ve çayırlar","büyükbaş hayvancılık, peynir ve bal","Ani Ören Yeri, Kars Kalesi, kaşar peyniri, kaz eti"],
    ["Kastamonu","kd","e","ormanlarla kaplı engebeli dağlar","ormancılık, sarımsak tarımı ve hayvancılık","Kastamonu Kalesi, Valla Kanyonu, Taşköprü sarımsağı, etli ekmek"],
    ["Kayseri","ka","k","platolar, ovalar ve Erciyes Dağı","mobilya ve tekstil sanayisi, ticaret ve kış turizmi","Erciyes Dağı, Gevher Nesibe Şifahanesi, mantı, pastırma"],
    ["Kırklareli","ma","k","Trakya ovaları ve Istranca Dağları","ayçiçeği ve buğday tarımı, hayvancılık","Dupnisa Mağarası, İğneada Longoz Ormanları, Hıdırellez"],
    ["Kırşehir","ka","d","dalgalı platolar","tahıl tarımı, hayvancılık ve termal turizm","Cacabey Medresesi, Âşık Paşa Türbesi, Neşet Ertaş ve abdal müziği"],
    ["Kocaeli","ma","k","İzmit Körfezi kıyısı ve ormanlık dağlar","sanayi, liman ve petrokimya","Seka Kâğıt Müzesi, Kartepe, pişmaniye"],
    ["Konya","ka","d","Türkiye'nin en geniş ovaları ve platoları","tahıl ve şeker pancarı tarımı, sanayi","Mevlâna Müzesi, Çatalhöyük, etli ekmek, sema törenleri"],
    ["Kütahya","ka","e","engebeli platolar ve dağlar","çini ve porselen, maden, termal turizm","Kütahya çinisi, Aizanoi, Evliya Çelebi"],
    ["Malatya","ka","k","Fırat'a yakın ovalar ve dağlar","kayısı tarımı, tarıma dayalı sanayi","Arslantepe Höyüğü, Malatya kayısısı, Levent Vadisi"],
    ["Manisa","ak","k","Gediz Ovası ve Spil Dağı","üzüm ve zeytin tarımı, elektronik sanayisi","Spil Dağı, Mesir Macunu Festivali, Sardes, sultaniye üzümü"],
    ["Kahramanmaraş","ak","k","ovalar ve Toros Dağları","tekstil sanayisi, tarım","Kahramanmaraş Kalesi, dondurma, tarhana, biber"],
    ["Mardin","ka","k","Mezopotamya düzlüklerine bakan platolar","tarım, ticaret ve kültür turizmi","Mardin taş evleri, Zinciriye Medresesi, telkari"],
    ["Muğla","ak","e","girintili çıkıntılı kıyılar ve dağlar","deniz turizmi, arıcılık ve zeytin","Bodrum Kalesi, Ölüdeniz, Dalyan kaya mezarları, çam balı"],
    ["Muş","ks","k","Muş Ovası ve yüksek dağlar","tahıl tarımı ve büyükbaş hayvancılık","Malazgirt Meydan Muharebesi alanı, Muş lalesi"],
    ["Nevşehir","ka","k","volkanik platolar ve vadiler","kültür turizmi, patates ve üzüm tarımı","Kapadokya peribacaları, Derinkuyu yer altı şehri, testi kebabı"],
    ["Niğde","ka","k","platolar ve Aladağlar","elma ve patates tarımı","Niğde Alaeddin Camii, Aladağlar, Gümüşler Manastırı"],
    ["Ordu","kd","e","dik yamaçlı dağlar ve yaylalar","fındık tarımı, arıcılık ve yayla turizmi","Boztepe, Perşembe Yaylası, Ordu fındığı"],
    ["Rize","kd","e","denize dik inen dağlar ve dar kıyı","çay tarımı, balıkçılık ve yayla turizmi","Ayder Yaylası, Zilkale, Rize çayı, horon"],
    ["Sakarya","ma","k","verimli Adapazarı Ovası ve ormanlık dağlar","otomotiv sanayisi, fındık ve sebze tarımı","Sapanca Gölü, Justinianus Köprüsü, ıslama köfte"],
    ["Samsun","kd","k","Bafra ve Çarşamba delta ovaları","tütün ve sebze tarımı, liman ve sanayi","Bandırma Vapuru Müzesi, Kızılırmak Deltası, Bafra pidesi"],
    ["Siirt","ka","e","engebeli dağlar ve Botan vadisi","fıstık tarımı, battaniye dokumacılığı","Siirt fıstığı, perde pilavı, büryan, Veysel Karani Türbesi"],
    ["Sinop","kd","k","yarımada kıyıları ve ormanlık dağlar","balıkçılık, turizm ve tarım","Sinop Cezaevi, Hamsilos Koyu, İnceburun, Sinop mantısı"],
    ["Sivas","ks","k","yüksek platolar ve dağlar","tahıl tarımı, hayvancılık ve demiryolu","Divriği Ulu Camii, Gök Medrese, Sivas Kongresi, Kangal köpeği"],
    ["Tekirdağ","ma","d","geniş Trakya ovaları","ayçiçeği ve buğday tarımı, sanayi","Rakoczi Müzesi, Tekirdağ köftesi, Namık Kemal Evi"],
    ["Tokat","kd","k","Kelkit ve Yeşilırmak vadileri ile ovalar","sebze-meyve tarımı, bakırcılık","Ballıca Mağarası, Tokat kebabı, yazmacılık"],
    ["Trabzon","kd","e","dik yamaçlı dağlar ve dar kıyı","fındık ve çay tarımı, liman ve yayla turizmi","Sümela Manastırı, Uzungöl, Atatürk Köşkü, horon, kuymak"],
    ["Tunceli","ks","e","çok engebeli dağlar ve Munzur vadisi","hayvancılık, arıcılık ve doğa turizmi","Munzur Vadisi Millî Parkı, Pülümür, Ovacık"],
    ["Şanlıurfa","ka","d","Harran Ovası ve geniş platolar","GAP ile sulanan pamuk tarımı, hayvancılık","Göbeklitepe, Balıklıgöl, Harran evleri, sıra geceleri"],
    ["Uşak","ka","k","engebeli platolar","tekstil, deri ve halı sanayisi, tarım","Uşak halısı, Ulubey Kanyonu, Karun Hazinesi"],
    ["Van","ks","k","Van Gölü kıyısı ve yüksek dağlar","hayvancılık, sınır ticareti ve turizm","Van Kalesi, Akdamar Adası, Van kedisi, Van kahvaltısı"],
    ["Yozgat","ka","k","engebeli platolar","tahıl tarımı ve hayvancılık","Çamlık Millî Parkı, Çapanoğlu Camii, testi kebabı, sürmeli"],
    ["Zonguldak","kd","e","engebeli dağlar ve dar kıyı","taşkömürü madenciliği, demir-çelik ve liman","Gökgöl Mağarası, maden şehitleri anıtı, Ereğli"],
    ["Aksaray","ka","d","geniş platolar, Tuz Gölü ve Hasan Dağı","tahıl tarımı ve hayvancılık","Ihlara Vadisi, Sultanhanı Kervansarayı, Hasan Dağı"],
    ["Bayburt","ks","e","yüksek ve engebeli dağlar","hayvancılık ve tahıl tarımı","Bayburt Kalesi, Dede Korkut Şenlikleri, Bayburt tava"],
    ["Karaman","ka","d","geniş ovalar ve Toroslar","tahıl tarımı, bisküvi sanayisi","Karamanoğlu Mehmet Bey ve Türkçenin resmî dil ilanı, Binbir Kilise"],
    ["Kırıkkale","ka","k","Kızılırmak vadisi ve platolar","savunma ve rafineri sanayisi, tarım","Hasandede Türbesi, Kızılırmak kıyıları"],
    ["Batman","ka","k","Dicle ve Batman çayı vadileri, platolar","petrol üretimi ve tarım","Hasankeyf, Malabadi Köprüsü"],
    ["Şırnak","ks","e","sarp dağlar ve derin vadiler","hayvancılık, kömür ve sınır ticareti","Cudi Dağı, Nuh'un Gemisi rivayeti, perde pilavı"],
    ["Bartın","kd","e","ormanlık dağlar ve dar kıyı","ormancılık, tarım ve turizm","Amasra, Bartın evleri, Küre Dağları"],
    ["Ardahan","ks","d","yüksek platolar ve çayırlar","büyükbaş hayvancılık ve bal","Çıldır Gölü, kızaklı atlar, Ardahan kaşarı"],
    ["Iğdır","ka","d","Aras kıyısında alçak ve verimli Iğdır Ovası","kayısı, pamuk ve sebze tarımı, sınır ticareti","Ağrı Dağı manzarası, Dilucu, Iğdır kayısısı"],
    ["Yalova","ma","k","kıyı ovası ve ormanlık dağlar","süs bitkisi yetiştiriciliği, termal turizm","Termal kaplıcaları, Karaca Arboretumu, Atatürk Köşkü"],
    ["Karabük","kd","e","ormanlık dağlar ve vadiler","demir-çelik sanayisi","Safranbolu evleri, Yenice Ormanları, safran"],
    ["Kilis","ka","d","alçak ve düz platolar","zeytin ve üzüm tarımı, sınır ticareti","Kilis tavası, Kilis zeytinyağı, Ravanda Kalesi"],
    ["Osmaniye","ak","k","Çukurova'nın doğusu ve Amanos Dağları","yer fıstığı tarımı, demir-çelik sanayisi","Karatepe-Aslantaş, Hemite Kalesi, Osmaniye yer fıstığı"],
    ["Düzce_","kd","k","","",""]
  ].filter(x => x[0].indexOf('_') < 0);

  const CL = {
    kd: { ad: "her mevsim yağışlı Karadeniz iklimi", etki: "Bol yağış nedeniyle ormanlar geniş yer kaplar; fındık ve mısır gibi nemli iklim ürünleri yetişir, yağmur suyu kolay aksın diye evler eğimli çatılı yapılır." },
    ak: { ad: "yazları sıcak ve kurak, kışları ılık ve yağışlı Akdeniz iklimi", etki: "Ilık ve yağışlı kışlar ile uzun, sıcak yazlar zeytin, meyve ve sebze tarımına elverişlidir; kıyı kesimlerde deniz turizmi gelişir." },
    ma: { ad: "Akdeniz ile Karadeniz iklimi arasında geçiş özelliği gösteren ılıman iklim", etki: "Ilıman iklim tarımı, sanayiyi ve yerleşmeyi kolaylaştırmış, nüfusu artırmıştır." },
    ka: { ad: "yazları sıcak ve kurak, kışları soğuk ve karlı karasal iklim", etki: "Yağış az olduğu için tahıl tarımı ve hayvancılık yaygındır; kışın ısınma ihtiyacı fazladır, içme ve sulama suyu için barajlar yapılır." },
    ks: { ad: "kışları uzun ve çok sert geçen karasal iklim", etki: "Tarım süresi kısadır; yazın yeşeren çayırlar sayesinde büyükbaş hayvancılık ve yaylacılık öne çıkar." }
  };
  const RL = {
    d: "Düz ve geniş alanlar yerleşmenin yayılmasını, yol ve demir yollarının kolay yapılmasını sağlar; nüfus su kaynaklarına yakın düzlüklerde toplanır.",
    k: "Ovalarda tarım, ulaşım ve yerleşme kolaydır; nüfus düzlüklerde yoğun, dağlık kesimlerde seyrektir.",
    e: "Engebeli arazi tarım alanlarını daraltır, yol yapımını zorlaştırır ve pahalı hâle getirir; yerleşmeler dağınıktır, nüfus vadilerde ve kıyıda toplanır."
  };

  const list = L.map(r => ({ ad: r[0], c: r[1], y: r[2], sekil: r[3], eko: r[4], kultur: r[5] }));
  list.sort((a, b) => a.ad.localeCompare(b.ad, 'tr'));

  window.CITIES = list;
  window.CITY_TEXT = {
    // 1. öğrenme alanı s. 24: çevrendeki kültürel ögeler
    kultur: c => `Örnek (${c.ad}): ${c.kultur}.`,
    // 2. öğrenme alanı s. 76: doğal ve beşerî çevre ilişkisi
    dogalBeseri: c => `Örnek (${c.ad}): İlde ${c.sekil} bulunur ve ${CL[c.c].ad} görülür. ${CL[c.c].etki} Bu doğal koşullar sayesinde ${c.eko} gelişmiştir.`,
    // 2. öğrenme alanı s. 77: iklim ve yer şekillerinin nüfusa etkisi
    iklimNufus: c => `Örnek (${c.ad}): İlde ${CL[c.c].ad} görülür. ${CL[c.c].etki} ${RL[c.y]}`,
    // 2. öğrenme alanı s. 81: yer şekillerinin beşerî çevreye etkisi
    sekilBeseri: c => `Örnek (${c.ad}): İlde ${c.sekil} bulunur. ${RL[c.y]} Bu özellikler ${c.eko} gibi faaliyetlerin gelişmesine yol açmıştır.`,
    // 5. sınıf 2. öğrenme alanı: yaşadığın ilin özellikleri
    ilAdi: c => c.ad,
    yerSekli: c => `${c.ad}: ${c.sekil}`,
    ekonomi: c => `${c.ad}: ${c.eko}`,
    tarihi: c => `${c.ad}: ${c.kultur}`,
    iklim: c => `${c.ad}: ${CL[c.c].ad}`,
    iklimEtki: c => `${c.ad}: ${CL[c.c].ad}. ${CL[c.c].etki}`,
    yerlesme: c => `${c.ad}: ${RL[c.y]}`,
    dogalUnsur: c => `${c.ad}: ${c.sekil}; ${CL[c.c].ad}.`,
    tanitim: c => `${c.ad}: ${c.sekil} ile ${c.kultur} öne çıkarılabilir; ${c.eko} ilin ekonomisinde önemlidir.`
  };
})();

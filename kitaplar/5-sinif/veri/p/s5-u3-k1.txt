// 5. Sınıf 3. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "3. Öğrenme Alanı: Ortak Mirasımız",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Ortak miras ögelerimiz</b>Tarihî mekân ve eserler, UNESCO Dünya Mirası Listesi, somut ve somut olmayan kültürel miras.</div>
          <div class="c-a"><b>Anadolu'nun ilk yerleşim yerlerinde sosyal hayat</b>Göbeklitepe, Çayönü, Çatalhöyük, Hacılar.</div>
          <div class="c-s"><b>Mezopotamya ve Anadolu medeniyetlerinin ortak kültürel mirasa katkıları</b>Sümerler, Babilliler, Asurlular, Hititler, Lidyalılar, İyonyalılar.</div>
        </div>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Avcı-toplayıcı toplum:</b> Avlanarak ve doğadan hazır besin toplayarak yaşayan topluluk.</li>
          <li><b>Milat:</b> Hz. İsa'nın doğumu; takvimin başlangıcı.</li>
          <li><b>Medeniyet:</b> Bir toplumun maddi ve manevi alanlardaki gelişmişliği.</li>
          <li><b>Ortak miras:</b> Geçmişten bugüne ulaşan ve tüm insanlığa ait değerler.</li>
          <li><b>UNESCO:</b> Birleşmiş Milletler Eğitim, Bilim ve Kültür Kurumu.</li>
          <li><b>Yerleşik hayat:</b> İnsanların tarım ve hayvancılıkla tek yerde yaşaması.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Yazıyı icat eden medeniyet hangisidir?", o: ["Sümerler", "Lidyalılar", "Hititler"], a: 0 },
      { q: "Parayı ilk kullanan medeniyet hangisidir?", o: ["Lidyalılar", "Babilliler", "Asurlular"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Ortak miras", html: `<p>Ortak miras; tarihî mekânlar, eserler, gelenekler, el sanatları ve yemekler gibi geçmişten bugüne ulaşan değerlerdir. UNESCO, insanlık için önemli olan bu ögeleri koruma altına alır. Türkiye'nin listede Nemrut, Kapadokya, Pamukkale, Göbeklitepe, çay kültürü gibi pek çok ögesi vardır.</p>` },
      { t: "İlk yerleşimler", html: `
        <div class="stats">
          <div><span>Göbeklitepe</span>MÖ 10000 · İnanç merkezi</div>
          <div><span>Çayönü</span>MÖ 8200 · Izgara planlı evler, bakır</div>
          <div><span>Çatalhöyük</span>MÖ 7500 · Damdan girişli evler, duvar resimleri</div>
          <div><span>Hacılar</span>MÖ 7000 · Çömlekçilik, tahıl ambarları</div>
        </div>` },
      { t: "Medeniyetler", html: `
        <div class="two">
          <div><b>Mezopotamya</b>Sümerler: yazı, tekerlek, ziggurat · Babilliler: Hammurabi kanunları, Asma Bahçeler · Asurlular: Kültepe ticaret kolonileri, ilk kütüphane</div>
          <div><b>Anadolu</b>Hititler: Kadeş Antlaşması, yıllıklar · Lidyalılar: para, Kral Yolu · İyonyalılar: bilim ve felsefe</div>
        </div>` }
    ]
  };

  P.unesco = {
    title: "UNESCO Listesindeki Ülkemize Ait Kültürel Ögeler",
    tabs: [
      { t: "Somut miras", html: `<ul><li>İstanbul Tarihî Alanları</li><li>Göreme ve Kapadokya</li><li>Divriği Ulu Camii ve Darüşşifası</li><li>Hattuşa</li><li>Nemrut Dağı</li><li>Hierapolis-Pamukkale</li><li>Safranbolu</li><li>Truva</li><li>Selimiye Camii</li><li>Çatalhöyük</li><li>Efes</li><li>Göbeklitepe</li><li>Gordion</li></ul>` },
      { t: "Somut olmayan miras", html: `<ul><li>Nasreddin Hoca fıkraları</li><li>Meddahlık</li><li>Mevlevi sema töreni</li><li>Âşıklık geleneği</li><li>Karagöz</li><li>Nevruz</li><li>Kırkpınar yağlı güreşleri</li><li>Türk kahvesi</li><li>Ebru</li><li>Mangala</li><li>Kuş dili</li><li>Çay kültürü</li></ul>` }
    ],
    sort: {
      prompt: "Ögeleri doğru gruba yerleştir.",
      groups: ["Somut", "Somut olmayan"],
      items: [["Nemrut Dağı", 0], ["Selimiye Camii", 0], ["Efes", 0], ["Türk kahvesi", 1], ["Ebru", 1], ["Karagöz", 1]]
    }
  };

  P.unescorubrik = {
    title: "UNESCO Dünya Mirası Listesi'nde Olmasını İstediğim Ögeler · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "İldeki somut ve somut olmayan miras ögelerini doğru belirledi.",
      "Ögelerin listeye alınması için kanıta dayalı gerekçeler yazdı.",
      "Afiş, poster ya da broşürü özgün ve dikkat çekici hazırladı.",
      "Ögelerin korunmasına yönelik fikirler üretti.",
      "Ürününü sınıf panosunda sergiledi ve tanıttı."
    ]
  };

  P.gobeklitepe = {
    title: "Göbeklitepe",
    tabs: [{ t: "Tarihin sıfır noktası", html: `
      <ul>
        <li>Şanlıurfa'nın 20 km kuzeydoğusunda, Örencik Köyü yakınındadır.</li>
        <li>Yaklaşık 12.000 yıl önce avcı-toplayıcılar tarafından yapılmış bir inanç merkezidir.</li>
        <li>"T" şeklindeki dikili taşların üzerinde aslan, boğa, tilki, yılan gibi hayvan figürleri vardır.</li>
        <li>2018'de UNESCO Dünya Mirası Listesi'ne alınmıştır.</li>
        <li>Taş Tepeler Projesi ile Karahantepe gibi çevredeki alanlarda da kazılar sürmektedir.</li>
      </ul>` }]
  };

  P.yerlesim = {
    title: "Anadolu'nun İlk Yerleşim Yerleri",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Özellikleri ait olduğu yerleşim yerine yerleştir.</p>` }],
    sort: {
      prompt: "Her özelliği yerleşim yerine yerleştir.",
      groups: ["Göbeklitepe", "Çayönü", "Çatalhöyük", "Hacılar"],
      items: [["T şekilli dikili taşlar", 0], ["İnanç merkezi", 0], ["Izgara planlı evler", 1], ["Bakır işleme", 1], ["Damdan girişli evler", 2], ["Duvar resimleri", 2], ["Burdur'da yer alır", 3], ["Tahıl ambarları", 3]]
    }
  };

  P.sanalmuze = {
    title: "Anadolu'nun İlk Yerleşim Yerleri Sanal Müzesi",
    tabs: [{ t: "Müze turu", html: `
      <div class="stats">
        <div><span>Şanlıurfa Arkeoloji Müzesi</span>Göbeklitepe buluntuları, Balıklıgöl heykeli</div>
        <div><span>Konya Arkeoloji Müzesi</span>Çatalhöyük duvar resimleri ve buluntuları</div>
        <div><span>Burdur Müzesi</span>Hacılar çanak çömlekleri</div>
        <div><span>Diyarbakır Müzesi</span>Çayönü buluntuları</div>
      </div>` }]
  };

  P.urunrubrik = {
    title: "Anadolu'nun İlk Yerleşimlerinde Sosyal Hayat · Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Seçtiği karakterin yaşadığı dönemi doğru yansıttı.",
      "Barınma, beslenme ve geçim bilgilerini doğru kullandı.",
      "Tarihsel empati kurarak duygu ve düşüncelerini ifade etti.",
      "Yazısını ya da resmini özgün ve özenli hazırladı.",
      "Görüşlerini sınıfla paylaştı."
    ]
  };

  P.sumer = {
    title: "Sümerler",
    tabs: [{ t: "Ortak mirasa katkıları", html: `
      <ul>
        <li>MÖ 3200'de çivi yazısını icat ettiler; tarih çağları başladı.</li>
        <li>Tekerleği ilk kullananlardır.</li>
        <li>Zigguratları tapınak, depo, okul ve rasathane olarak kullandılar.</li>
        <li>Ay yılı esaslı takvim, 60'lık sayı sistemi, 360 derecelik çember.</li>
        <li>Bilinen ilk yazılı kanunlar (Urukagina) ve Gılgamış Destanı.</li>
      </ul>` }]
  };

  P.babil = {
    title: "Babilliler",
    tabs: [{ t: "Ortak mirasa katkıları", html: `
      <ul>
        <li>Başkentleri Babil'dir.</li>
        <li>Hammurabi Kanunları "kısasa kısas" esasına dayanır.</li>
        <li>Babil'in Asma Bahçeleri dünyanın yedi harikasından biridir.</li>
        <li>Astronomi ve matematikte ilerlemişlerdir.</li>
      </ul>` }]
  };

  P.asur = {
    title: "Asurlular",
    tabs: [{ t: "Ortak mirasa katkıları", html: `
      <ul>
        <li>Başkentleri Ninova'dır.</li>
        <li>Anadolu'da Kültepe (Kayseri) gibi ticaret kolonileri kurdular.</li>
        <li>Çivi yazısını Anadolu'ya getirdiler; Anadolu'da tarih çağları başladı.</li>
        <li>Asurbanipal Kütüphanesi bilinen ilk kütüphanedir.</li>
        <li>Posta teşkilatı ve barajlar kurdular.</li>
      </ul>` }]
  };

  P.hitit = {
    title: "Hititler",
    tabs: [{ t: "Ortak mirasa katkıları", html: `
      <ul>
        <li>Başkentleri Hattuşa'dır (Çorum Boğazköy).</li>
        <li>Kadeş Antlaşması bilinen ilk yazılı barış antlaşmasıdır.</li>
        <li>Yıllıklarla tarih yazıcılığını başlattılar.</li>
        <li>Pankuş Meclisi, Tavananna (kraliçe).</li>
        <li>Hattuşa 1986'da UNESCO Dünya Mirası Listesi'ne alınmıştır.</li>
      </ul>` }]
  };

  P.bogazkoy = {
    title: "Çorum Boğazköy Müzesi",
    tabs: [{ t: "Müze", html: `<p>Boğazköy Müzesi, Hitit başkenti Hattuşa'dan çıkarılan çivi yazılı tabletleri, mühürleri, seramikleri ve heykelleri sergiler. Hattuşa'daki Aslanlı Kapı, Kral Kapı ve Yazılıkaya Açık Hava Tapınağı ziyaret edilebilir.</p>` }]
  };

  P.lidya = {
    title: "Lidyalılar",
    tabs: [{ t: "Ortak mirasa katkıları", html: `
      <ul>
        <li>Başkentleri Sardes'tir (Manisa).</li>
        <li>Parayı icat ettiler; takas yerine para kullanımı başladı.</li>
        <li>Efes'ten Mezopotamya'ya uzanan Kral Yolu'nu kullandılar.</li>
        <li>Tarihte ilk sigortacılığı başlattılar.</li>
      </ul>` }]
  };

  P.efes = {
    title: "Efes Müzesi İzmir",
    tabs: [{ t: "Müze", html: `<p>Selçuk'taki Efes Müzesi, Efes Antik Kenti ve Artemis Tapınağı'ndan çıkarılan heykelleri, sikkeleri ve günlük yaşam eşyalarını sergiler. Efes 2015'te UNESCO Dünya Mirası Listesi'ne alınmıştır.</p>` }]
  };

  P.iyon = {
    title: "İyonyalılar",
    tabs: [{ t: "Ortak mirasa katkıları", html: `
      <ul>
        <li>Batı Anadolu kıyılarında şehir devletleri kurdular.</li>
        <li>Özgür düşünce ortamında bilim ve felsefe gelişti.</li>
        <li>Hipokrat (tıp), Heredot (tarih), Pisagor ve Thales (matematik) yetişti.</li>
        <li>Akdeniz ve Karadeniz'de ticaret kolonileri kurdular.</li>
      </ul>` }]
  };

  P.kontrol = {
    title: "Beyin Eseri · Kontrol Listesi",
    checklist: [
      "Kültür, bilim, ekonomi ve hukuk alanlarında görüşlerini yazdı.",
      "Benzerlik ve farklılıkları doğru belirledi.",
      "Arkadaşlarının görüşlerini değerlendirdi.",
      "Tartışmaya etkin biçimde katıldı.",
      "Mezopotamya ve Anadolu'nun medeniyetlerin beşiği olma nedenlerini açıkladı."
    ]
  };

  P.medeniyetler = {
    title: "Mezopotamya ve Anadolu Medeniyetleri",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Katkıları ait olduğu medeniyete yerleştir.</p>` }],
    sort: {
      prompt: "Her katkıyı medeniyetine yerleştir.",
      groups: ["Sümerler", "Asurlular", "Hititler", "Lidyalılar"],
      items: [["Çivi yazısı", 0], ["Ziggurat", 0], ["Kültepe", 1], ["İlk kütüphane", 1], ["Kadeş Antlaşması", 2], ["Yıllıklar", 2], ["Para", 3], ["Kral Yolu", 3]]
    }
  };

  P.sorular = {
    title: "Daha Fazla Örnek Soru",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun.</p>` }],
    quiz: [
      { q: "Hangisi somut olmayan kültürel mirastır?", o: ["Ebru", "Efes", "Nemrut Dağı", "Selimiye Camii"], a: 0 },
      { q: "Geçmiş uygarlıkların kalıntılarını kazı yaparak inceleyen bilim dalı hangisidir?", o: ["Arkeoloji", "Coğrafya", "Ekonomi", "Astronomi"], a: 0 },
      { q: "Evlere damdan girilen yerleşim yeri hangisidir?", o: ["Çatalhöyük", "Çayönü", "Hacılar", "Göbeklitepe"], a: 0 },
      { q: "Göbeklitepe hangi ilimizdedir?", o: ["Şanlıurfa", "Konya", "Burdur", "Diyarbakır"], a: 0 },
      { q: "Hammurabi Kanunları hangi medeniyete aittir?", o: ["Babilliler", "Sümerler", "Hititler", "Lidyalılar"], a: 0 },
      { q: "Bilinen ilk yazılı barış antlaşması hangisidir?", o: ["Kadeş Antlaşması", "Hammurabi Kanunları", "Gılgamış Destanı", "Kral Yolu"], a: 0 },
      { q: "Kral Yolu hangi şehirden başlar?", o: ["Efes", "Hattuşa", "Babil", "Ninova"], a: 0 },
      { q: "Türkiye UNESCO'ya hangi yıl katıldı?", o: ["1946", "1923", "1983", "1972"], a: 0 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları konulara göre grupla.</p>` }],
    sort: {
      prompt: "Her kavramı konusuna yerleştir.",
      groups: ["Ortak miras", "İlk yerleşimler", "Medeniyetler"],
      items: [["UNESCO", 0], ["Somut miras", 0], ["Höyük", 1], ["Avcı-toplayıcı", 1], ["Obsidiyen", 1], ["Ziggurat", 2], ["Para", 2], ["Yıllık", 2]]
    },
    quiz: [
      { q: "Tarih boyunca yıkıntıların üst üste birikmesiyle oluşan yapay tepeye ne denir?", o: ["Höyük", "Ziggurat", "Rasathane"], a: 0 }
    ]
  };
})();

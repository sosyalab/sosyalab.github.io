// 6. Sınıf 4. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  const P = window.PANELS = {};

  P.alan = {
    title: "4. Öğrenme Alanı: Yaşayan Demokrasimiz",
    tabs: [
      { t: "Konular", html: `
        <div class="clim">
          <div class="c-k"><b>Yönetimin karar alma sürecini etkileyen unsurlar</b>Siyasi partiler, sivil toplum kuruluşları, medya ve kamuoyu; seçimler ve katılım hakkı.</div>
          <div class="c-a"><b>Temel hak ve sorumlulukların toplumsal düzendeki önemi</b>Anayasadaki temel haklar ve ödevler, dilekçe hakkı, hak ve özgürlüklerin sınırları.</div>
          <div class="c-s"><b>Dijitalleşmenin vatandaşlık hak ve sorumluluklarına etkileri</b>e-Devlet, e-Nabız, e-Okul, EBA, CİMER; dijital vatandaşlık, siber zorbalık, dijital mahremiyet.</div>
        </div>` },
      { t: "Bu alanda neler yapacağız?", html: `
        <ul>
          <li>Yönetimin karar alma sürecini etkileyen unsurları <b>çözümleyeceğiz</b>.</li>
          <li>Toplumsal düzenin sürdürülmesinde temel hak ve sorumlulukların önemini <b>yorumlayacağız</b>.</li>
          <li>Vatandaşlık haklarının kullanımında dijitalleşme ve teknolojik gelişmelerin etkilerini <b>sorgulayacağız</b>.</li>
        </ul>` },
      { t: "Anahtar kavramlar", html: `
        <ul>
          <li><b>Millî egemenlik:</b> Yönetme yetkisinin millete ait olması.</li>
          <li><b>Siyasi parti:</b> Belli bir görüşü savunan ve yönetimde söz sahibi olmak isteyen örgüt.</li>
          <li><b>STK:</b> Devletten bağımsız, gönüllülük esasına dayalı kuruluşlar (dernek, vakıf, sendika).</li>
          <li><b>Kamuoyu:</b> Bir konuda halkın benimsediği genel düşünce.</li>
          <li><b>Medya:</b> Gazete, radyo, televizyon, genel ağ gibi kitle iletişim araçları.</li>
          <li><b>Hukuk:</b> Toplumu düzenleyen, devlet yaptırımına bağlı kurallar.</li>
          <li><b>Dijital vatandaşlık:</b> Dijital ortamı güvenli, bilinçli ve kurallara uygun kullanmak.</li>
        </ul>` }
    ],
    quiz: [
      { q: "Gönüllülük esasına dayanan, devletten bağımsız kuruluşlara ne denir?", o: ["Siyasi parti", "Sivil toplum kuruluşu", "Bakanlık"], a: 1 },
      { q: "Halkın bir konudaki ortak görüşüne ne denir?", o: ["Kamuoyu", "Medya", "Anayasa"], a: 0 },
      { q: "Hangisi dijital bir kamu hizmetidir?", o: ["e-Devlet", "Muhtarlık", "Sendika"], a: 0 }
    ]
  };

  P.ozet = {
    title: "Öğrenme Alanı Özeti",
    tabs: [
      { t: "Karar alma süreci", html: `
        <div class="bars">
          <div><span>1. Sorunun gündeme gelmesi</span><i style="--w:5"></i><b></b></div>
          <div><span>2. Çözüm önerileri</span><i style="--w:8"></i><b></b></div>
          <div><span>3. Karar verme</span><i style="--w:11"></i><b></b></div>
          <div><span>4. Kararın uygulanması</span><i style="--w:14"></i><b></b></div>
          <div><span>5. Değerlendirme</span><i style="--w:17"></i><b></b></div>
          <div><span>6. Gerekirse yeni çözüm</span><i style="--w:21.6"></i><b></b></div>
        </div>
        <div class="fx"><b>Etkileyen unsurlar</b>Siyasi partiler, STK'lar, medya ve kamuoyu. Vatandaşlar seçimlerle doğrudan, diğer yollarla dolaylı olarak yönetime katılır.</div>` },
      { t: "Hak ve sorumluluk", html: `
        <ul>
          <li>Temel haklarımız Anayasa ile güvence altındadır (yaşama, eğitim, düşünce özgürlüğü, sağlıklı çevre…).</li>
          <li>Özgürlüklerimiz başkalarının haklarının başladığı yerde biter.</li>
          <li>Sorumluluklarımız: vergi vermek, vatan hizmeti, kurallara uymak, çevreyi korumak.</li>
          <li>Dilekçe hakkı (Anayasa Madde 74) ile isteklerimizi yetkililere iletebiliriz.</li>
        </ul>` },
      { t: "Dijitalleşme", html: `
        <div class="two">
          <div><b>Olumlu etkiler</b>e-Devlet, e-Nabız, e-Okul, EBA, CİMER ile hizmetlere hızlı ve kolay ulaşım; zaman ve para tasarrufu.</div>
          <div><b>Olumsuz etkiler</b>Siber zorbalık, kişisel verilerin ifşası, sahte haberler, teknoloji bağımlılığı.</div>
        </div>` }
    ],
    quiz: [
      { q: "Dilekçe hakkı Anayasa'nın kaçıncı maddesinde yer alır?", o: ["17", "56", "74"], a: 2 },
      { q: "Seçimlerde oy kullanma yaşı kaçtır?", o: ["16", "18", "21"], a: 1 }
    ]
  };

  P.siyasihaklar = {
    title: "Siyasi Haklar ve Ödevler",
    tabs: [
      { t: "Siyasi haklar", html: `
        <ul>
          <li><b>Seçme ve seçilme hakkı:</b> 18 yaşını dolduran vatandaşlar oy kullanır; milletvekili olmak için 18 yaş yeterlidir.</li>
          <li><b>Siyasi parti kurma ve üye olma hakkı</b></li>
          <li><b>Kamu hizmetine girme hakkı</b></li>
          <li><b>Dilekçe hakkı ve bilgi edinme hakkı</b></li>
          <li><b>Halk oylamasına (referandum) katılma hakkı</b></li>
        </ul>` },
      { t: "Ödevler", html: `
        <ul>
          <li><b>Vatan hizmeti</b> (Madde 72): Her Türk'ün hakkı ve ödevidir.</li>
          <li><b>Vergi ödevi</b> (Madde 73): Herkes mali gücüne göre vergi öder.</li>
          <li>Oy kullanmak vatandaşlık sorumluluğudur.</li>
        </ul>` },
      { t: "Seçimler", html: `
        <div class="stats">
          <div><span>5 yıl</span>Cumhurbaşkanı ve TBMM seçimleri</div>
          <div><span>5 yıl</span>Belediye başkanı ve muhtar seçimleri</div>
          <div><span>YSK</span>Seçimleri yöneten ve denetleyen kurul</div>
        </div>
        <div class="fx"><b>Seçim ilkeleri</b>Serbest, eşit, gizli oy, tek dereceli, genel oy ile açık sayım ve döküm.</div>` }
    ]
  };

  P.kararalma = {
    title: "Yönetimin Karar Alma Sürecini Etkileyen Unsurlar",
    tabs: [{ t: "Unsurlar", html: `
      <div class="two">
        <div><b>Siyasi partiler</b>Seçimlere katılır, meclise girer, kanun yapar. İktidar ülkeyi yönetir, muhalefet denetler.</div>
        <div><b>Sivil toplum kuruluşları</b>Dernek, vakıf, sendika, kooperatif. Gönüllülükle sorunlara çözüm üretir, yönetime öneri sunar.</div>
        <div><b>Kamuoyu</b>Halkın ortak görüşü. Yönetim kararlarında kamuoyunu dikkate alır.</div>
        <div><b>Medya</b>Bilgilendirir, sorunları gündeme taşır, kamuoyu oluşturur.</div>
      </div>` }],
    sort: {
      prompt: "Her örneği doğru unsura yerleştir.",
      groups: ["Siyasi parti", "STK", "Medya"],
      items: [["Seçim beyannamesi", 0], ["Milletvekili", 0], ["Meclis grubu", 0], ["Kızılay", 1], ["TEMA Vakfı", 1], ["Sendika", 1], ["Gazete", 2], ["Haber sitesi", 2], ["Televizyon kanalı", 2]]
    }
  };

  P.bulmaca = {
    title: "Bulmaca Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Tanımı oku, doğru kavramı seç.</p>` }],
    quiz: [
      { q: "Belirli bir görüşü savunan ve yönetimde söz sahibi olmak isteyen örgütlenmiş kuruluş:", o: ["Siyasi parti", "Medya", "Kamuoyu"], a: 0 },
      { q: "Devletten bağımsız, gönüllülük esasına dayalı kuruluş:", o: ["Bakanlık", "Sivil toplum kuruluşu", "Belediye"], a: 1 },
      { q: "Bir sorun üzerinde halkın benimsediği genel düşünce:", o: ["Kamuoyu", "Anayasa", "Dilekçe"], a: 0 },
      { q: "Gazete, radyo, televizyon ve genel ağ gibi kitle iletişim araçlarının tümü:", o: ["Medya", "Meclis", "Sendika"], a: 0 }
    ]
  };

  P.hakozgur = {
    title: "Hak ve Özgürlükleri Belirliyorum",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Her durumu hak ya da sorumluluk olarak grupla.</p>
      <div class="fx"><b>Hatırla</b>Hak, kişinin sahip olduğu ve talep edebileceği imkândır. Sorumluluk ise yerine getirmesi gereken görevdir.</div>` }],
    sort: {
      prompt: "Her ifadeyi doğru gruba yerleştir.",
      groups: ["Hakkım", "Sorumluluğum"],
      items: [["Eğitim almak", 0], ["Oyun oynamak", 0], ["Düşüncemi söylemek", 0], ["Sağlık hizmeti almak", 0], ["Ödevimi yapmak", 1], ["Çevreyi temiz tutmak", 1], ["Trafik kurallarına uymak", 1], ["Okul eşyalarını korumak", 1]]
    }
  };

  P.temelhak = {
    title: "Temel Hak ve Ödevler",
    tabs: [{ t: "Anayasadan maddeler", html: `
      <div class="stats">
        <div><span>Madde 17</span>Yaşama, maddi ve manevi varlığı koruma hakkı</div>
        <div><span>Madde 20</span>Özel hayatın gizliliği</div>
        <div><span>Madde 24</span>Din ve vicdan hürriyeti</div>
        <div><span>Madde 25</span>Düşünce ve kanaat hürriyeti</div>
        <div><span>Madde 27</span>Bilim ve sanat hürriyeti</div>
        <div><span>Madde 42</span>Eğitim ve öğrenim hakkı</div>
        <div><span>Madde 56</span>Sağlıklı çevrede yaşama hakkı ve çevreyi koruma ödevi</div>
        <div><span>Madde 72</span>Vatan hizmeti</div>
        <div><span>Madde 73</span>Vergi ödevi</div>
        <div><span>Madde 74</span>Dilekçe hakkı</div>
      </div>` }],
    quiz: [
      { q: "Eğitim ve öğrenim hakkı Anayasa'nın hangi maddesindedir?", o: ["Madde 42", "Madde 72", "Madde 20"], a: 0 },
      { q: "Hangisi hem hak hem ödev olarak tanımlanmıştır?", o: ["Vatan hizmeti", "Bilim hürriyeti", "Özel hayatın gizliliği"], a: 0 }
    ]
  };

  P.dilekce = {
    title: "Dilekçe Yazma Bütüncül Dereceli Puanlama Anahtarı",
    levels: RUBRIC,
    checklist: [
      "Yakın çevresinde yaşanan ya da yaşanabilecek bir sorunu doğru tespit etti.",
      "Sorunla ilgili taleplerini açık ve anlaşılır biçimde belirtti.",
      "Dilekçeyi ilgili yönetim birimine (makama) hitaben yazdı.",
      "Dilekçe biçimine uydu (başlık, tarih, ad-soyad, imza, adres).",
      "Çözüm önerisi sundu.",
      "Saygılı ve resmî bir dil kullandı.",
      "Türkçeyi doğru, güzel ve etkili kullandı; yazım kurallarına uydu.",
      "Ürününü zamanında teslim etti."
    ]
  };

  P.rapor = {
    title: "Rapor Yazma Derecelendirme Ölçeği",
    levels: RUBRIC,
    checklist: [
      "Hak ve özgürlüklerin toplumsal düzendeki önemini doğru yorumladı.",
      "Raporunda hak, eşitlik ve adalet kavramlarına yer verdi.",
      "Verilen kaynaklardan ve önceki bilgilerinden yararlandı.",
      "Görüşlerini örneklerle destekledi.",
      "Raporu giriş, gelişme ve sonuç bölümleriyle düzenledi.",
      "Türkçeyi doğru, güzel ve etkili kullandı.",
      "Raporunu düzenli ve okunaklı yazdı.",
      "Raporunu zamanında teslim etti."
    ]
  };

  P.dijitaletki = {
    title: "Dijital ve Teknolojik Gelişmelerin Etkileri",
    tabs: [
      { t: "Olumlu", html: `<ul>
        <li>Kamu hizmetlerine 7/24, evden ulaşma (e-Devlet)</li>
        <li>Sağlık kayıtlarına erişim, randevu alma (e-Nabız, MHRS)</li>
        <li>Uzaktan eğitim ve dijital içerikler (EBA)</li>
        <li>Şikâyet ve önerileri kolayca iletme (CİMER)</li>
        <li>Zaman, kâğıt ve ulaşım masrafından tasarruf</li>
      </ul>` },
      { t: "Olumsuz", html: `<ul>
        <li>Kişisel verilerin çalınması, dolandırıcılık</li>
        <li>Siber zorbalık</li>
        <li>Yanlış ve sahte haberlerin hızla yayılması</li>
        <li>Teknoloji bağımlılığı, hareketsizlik</li>
        <li>Teknolojiye erişimi olmayanların geride kalması (dijital uçurum)</li>
      </ul>` }
    ],
    sort: {
      prompt: "Her etkiyi doğru gruba yerleştir.",
      groups: ["Olumlu etki", "Olumsuz etki"],
      items: [["Evden randevu almak", 0], ["Uzaktan eğitim", 0], ["Zaman tasarrufu", 0], ["Hızlı şikâyet", 0], ["Siber zorbalık", 1], ["Veri hırsızlığı", 1], ["Sahte haber", 1], ["Ekran bağımlılığı", 1]]
    }
  };

  P.dijitalvat = {
    title: "Dijital Vatandaşlık",
    tabs: [{ t: "İyi bir dijital vatandaş", html: `
      <ul>
        <li>Şifrelerini kimseyle paylaşmaz, güçlü şifre kullanır.</li>
        <li>Bilgiyi güvenilir kaynaklardan doğrular, sahte haber yaymaz.</li>
        <li>Başkalarına saygılı yorum yapar, siber zorbalığa karşı çıkar.</li>
        <li>Kişisel bilgilerini ve fotoğraflarını gelişigüzel paylaşmaz.</li>
        <li>Başkalarının emeğine (telif hakkı) saygı duyar.</li>
        <li>Ekran süresini dengeler.</li>
        <li>e-Devlet gibi dijital hizmetleri haklarını kullanmak için bilinçli kullanır.</li>
      </ul>` }],
    quiz: [
      { q: "Hangisi iyi bir dijital vatandaş davranışıdır?", o: ["Şifresini arkadaşıyla paylaşmak", "Bilgiyi güvenilir kaynaktan doğrulamak", "Tanımadığı linklere tıklamak"], a: 1 }
    ]
  };

  P.eokul = {
    title: "e-Okul",
    tabs: [{ t: "Ne işe yarar?", html: `
      <p>Millî Eğitim Bakanlığının öğrenci bilgi sistemidir. Veliler ve öğrenciler şunlara ulaşabilir:</p>
      <ul><li>Not ve yazılı ortalamaları, e-karne</li><li>Devamsızlık bilgileri</li><li>Haftalık ders programı</li><li>Takdir, teşekkür belgeleri, nakil işlemleri</li></ul>
      <div class="fx"><b>Hangi hak?</b>Eğitim hakkı ve bilgi edinme hakkı. Okul-aile iş birliğini güçlendirir.</div>` }]
  };

  P.eba = {
    title: "EBA (Eğitim Bilişim Ağı)",
    tabs: [{ t: "Ne işe yarar?", html: `
      <p>MEB'in ücretsiz dijital eğitim platformudur.</p>
      <ul><li>Sesli ve PDF kitaplar, ders videoları ve sunumlar</li><li>Etkileşimli uygulamalar ve çalışma kitapları</li><li>Soru havuzu</li><li>Canlı ders ve uzaktan eğitim imkânı</li></ul>
      <div class="fx"><b>Hangi hak?</b>Eğitim hakkı. Her yerden, ücretsiz erişim sağlayarak eğitimde fırsat eşitliğine katkıda bulunur.</div>` }]
  };

  P.cimer = {
    title: "CİMER",
    tabs: [{ t: "Nedir?", html: `
      <p><b>Cumhurbaşkanlığı İletişim Merkezi.</b> Vatandaşların görüş, öneri, şikâyet ve bilgi edinme başvurularını alır.</p>
      <ul><li>cimer.gov.tr adresinden ya da mobil uygulamadan başvuru yapılır.</li><li>Başvuruda ad-soyad, T.C. kimlik numarası ve telefon doğrulaması gerekir.</li></ul>
      <div class="fx"><b>Hangi hak?</b>Dilekçe hakkı ve bilgi edinme hakkı.</div>` }]
  };

  P.enabiz = {
    title: "e-Nabız",
    tabs: [{ t: "Nedir?", html: `
      <p>Sağlık Bakanlığının kişisel sağlık kayıt sistemidir.</p>
      <ul><li>Tahlil ve radyoloji sonuçları</li><li>Reçete, teşhis ve rapor bilgileri</li><li>Aşı takibi ve muayene geçmişi</li><li>Hekim ya da yakınlarla kayıt paylaşımı (izin vererek)</li></ul>
      <div class="fx"><b>Hangi hak?</b>Sağlık hakkı ve kişisel verilere erişim hakkı.</div>` }]
  };

  P.edevlet = {
    title: "e-Devlet Kapısı",
    tabs: [{ t: "Nedir?", html: `
      <div class="stats"><div><span>66 milyon+</span>kullanıcı (2024)</div><div><span>turkiye.gov.tr</span>adres</div></div>
      <p>Kamu kurumlarının hizmetlerini tek bir adresten sunar. En çok kullanılan hizmetler: Sosyal Güvenlik Kurumu, Çalışma Hayatım Bütünleşik Hizmeti, Gelir İdaresi Başkanlığı.</p>
      <div class="fx"><b>Güvenlik</b>Giriş için e-Devlet şifresi, e-imza ya da mobil imza kullanılır. Şifre kimseyle paylaşılmamalıdır.</div>` }]
  };

  P.siberzorbalik = {
    title: "Siber Zorbalık",
    tabs: [
      { t: "Nedir?", html: `<p>Sanal ortamda iletişim araçları yoluyla insanlara hakaret edilmesi, aşağılanması, dışlanması, tehdit ya da rahatsız edilmesidir. E-posta, sosyal medya, forumlar ve oyunlarda görülebilir.</p>` },
      { t: "Ne yapmalıyım?", html: `
        <ol>
          <li>Karşılık verme, tartışmaya girme.</li>
          <li>Mesajların ekran görüntüsünü alarak kanıt topla.</li>
          <li>Ailene ya da öğretmenine hemen anlat.</li>
          <li>Kişiyi engelle ve platforma bildir (şikâyet et).</li>
          <li>Gerekirse yetkili birimlere başvur.</li>
        </ol>` }
    ],
    quiz: [
      { q: "Siber zorbalığa maruz kalan kişi ilk olarak ne yapmalıdır?", o: ["Aynı şekilde karşılık vermeli", "Bir yetişkinden yardım almalı", "Hiçbir şey yapmamalı"], a: 1 }
    ]
  };

  P.gozlem = {
    title: "Münazara Gözlem Formu",
    levels: [['Evet', 2], ['Kısmen', 1], ['Hayır', 0]],
    checklist: [
      "Savunduğu görüşü açık ve anlaşılır biçimde ifade etti.",
      "Görüşlerini güncel ve bilimsel verilerle destekledi.",
      "Dijitalleşmenin vatandaşlık haklarına etkisini doğru örneklerle açıkladı.",
      "Karşı grubun görüşlerini dikkatle dinledi.",
      "Karşı görüşlere mantıklı cevaplar verdi.",
      "Konuşma süresine ve sırasına uydu.",
      "Türkçeyi doğru, güzel ve etkili kullandı.",
      "Saygılı bir üslup kullandı."
    ]
  };

  P.bulmacacevap = {
    title: "Bulmacanın Cevap Anahtarı",
    tabs: [{ t: "Cevaplar", html: `
      <div class="bars">
        <div><span>1</span><i style="--w:14"></i><b>DİJİTAL VATANDAŞ</b></div>
        <div><span>2</span><i style="--w:21.6"></i><b>TEKNOLOJİ BAĞIMLILIĞI</b></div>
        <div><span>3</span><i style="--w:15"></i><b>SİBER ZORBALIK</b></div>
        <div><span>4</span><i style="--w:6"></i><b>CİMER</b></div>
        <div><span>5</span><i style="--w:6"></i><b>E-OKUL</b></div>
        <div><span>6</span><i style="--w:7"></i><b>E-NABIZ</b></div>
        <div><span>7</span><i style="--w:4"></i><b>EBA</b></div>
        <div><span>8</span><i style="--w:8"></i><b>E-DEVLET</b></div>
      </div>` }]
  };

  P.sorular = {
    title: "Daha Fazla Örnek Soru",
    tabs: [{ t: "Nasıl çözülür?", html: `<p>Doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil gösterilir.</p>` }],
    quiz: [
      { q: "Türkiye Büyük Millet Meclisi hangi tarihte açılmıştır?", o: ["23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922", "19 Mayıs 1919"], a: 0 },
      { q: "Hangisi demokrasinin niteliklerinden biri değildir?", o: ["Eşitlik", "Çoğulculuk", "Ayrımcılık", "Millî egemenlik"], a: 2 },
      { q: "Çocuk Haklarına Dair Sözleşme hangi gün kabul edilmiştir?", o: ["23 Nisan", "20 Kasım", "1 Haziran", "10 Aralık"], a: 1 },
      { q: "Hangisi yönetimi doğrudan etkileyen bir unsurdur?", o: ["Medya", "Kamuoyu", "Siyasi partiler", "Dernekler"], a: 2 },
      { q: "\"Herkes, kamu giderlerini karşılamak üzere mali gücüne göre vergi ödemekle yükümlüdür.\" ifadesi hangi kavramla ilgilidir?", o: ["Hak", "Ödev", "Özgürlük", "Talep"], a: 1 },
      { q: "Okulun önüne yaya geçidi yapılması isteğini belediyeye iletmek için hangisi kullanılır?", o: ["Dilekçe", "Seçim", "Referandum", "Vergi"], a: 0 },
      { q: "Vatandaşların kişisel sağlık kayıtlarının yer aldığı platform hangisidir?", o: ["e-Okul", "EBA", "e-Nabız", "CİMER"], a: 2 },
      { q: "Sanal ortamda başkalarına kasıtlı olarak hakaret etme ve rahatsız etmeye ne denir?", o: ["Dijital vatandaşlık", "Siber zorbalık", "Dijital mahremiyet", "Kamuoyu"], a: 1 }
    ]
  };

  P.kavram = {
    title: "Kavram Oyunu",
    tabs: [{ t: "Nasıl oynanır?", html: `<p>Kavramları öğrenme alanının üç konusuna göre grupla, sonra tanım sorularını yanıtla.</p>` }],
    sort: {
      prompt: "Her kavramı ait olduğu konuya yerleştir.",
      groups: ["Karar alma süreci", "Hak ve sorumluluk", "Dijitalleşme"],
      items: [["Siyasi parti", 0], ["Kamuoyu", 0], ["STK", 0], ["Dilekçe", 1], ["Anayasa", 1], ["Vergi ödevi", 1], ["e-Devlet", 2], ["Siber zorbalık", 2], ["Dijital mahremiyet", 2]]
    },
    quiz: [
      { q: "Kişisel bilgilerimizi kiminle ne kadar paylaşacağımıza karar vermemize ne denir?", o: ["Dijital mahremiyet", "Kamuoyu", "Siber zorbalık"], a: 0 },
      { q: "Yasa ve düzene uymamaya ne denir?", o: ["İhlal", "Talep", "Eşitlik"], a: 0 },
      { q: "Yönetme yetkisinin millete ait olmasına ne denir?", o: ["Millî egemenlik", "Kişi egemenliği", "Esaret"], a: 0 }
    ]
  };
})();

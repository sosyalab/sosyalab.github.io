// 6. Sınıf 1. Öğrenme Alanı · Karekodların yerine kitabın içinde açılan dijital içerikler
// Video eklemek için bir sekmeye { video: "https://..." } yazmanız yeterli.
(function () {
  const RUBRIC = [['Çok iyi', 4], ['İyi', 3], ['Orta', 2], ['Geliştirilmeli', 1]];
  window.PANELS = {
    alan: {
      title: "1. Öğrenme Alanı: Birlikte Yaşamak",
      tabs: [
        { t: "Konular", html: `
          <div class="clim">
            <div class="c-k"><b>Zaman içinde değişen gruplar ve roller</b>Aile, akraba, arkadaş, okul ve meslek gruplarında üstlendiğimiz roller; bu rollerin hak ve sorumlulukları ve zamanla nasıl değiştikleri.</div>
            <div class="c-a"><b>Kültürel bağlarımız ve millî değerlerimiz</b>Dil, din, tarih, sanat ve gelenek-göreneğin bizi nasıl bir arada tuttuğu; vatanseverlik, adalet, yardımlaşma gibi değerler.</div>
            <div class="c-s"><b>Toplumsal sorunlar ve çözüm önerileri</b>Çevre kirliliği, afetler, göç, salgın hastalıklar ve israf gibi sorunlar ile bunlara birlikte çözüm üretmek.</div>
          </div>` },
        { t: "Bu alanda neler yapacağız?", html: `
          <ul>
            <li>Dâhil olduğumuz grupların ve bu gruplardaki rollerimizin zaman içinde nasıl değişebileceğine ilişkin <b>çıkarım yapacağız</b>.</li>
            <li>Kültürel bağlarımızın ve millî değerlerimizin toplumsal birliğe etkisini <b>yorumlayacağız</b>.</li>
            <li>Toplumsal hayatta karşılaşılan sorunlara yönelik çözüm önerilerini <b>müzakere edeceğiz</b>.</li>
          </ul>` },
        { t: "Anahtar kavramlar", html: `
          <ul>
            <li><b>Grup:</b> Ortak amaç ya da özellik etrafında bir araya gelen insanlar.</li>
            <li><b>Rol:</b> Bir grupta üstlendiğimiz görev ve konum.</li>
            <li><b>Hak:</b> Kişinin yararlanabileceği ve talep edebileceği imkânlar.</li>
            <li><b>Sorumluluk:</b> Kişinin yerine getirmesi gereken görevler.</li>
            <li><b>Kültür:</b> Bir toplumun dili, inancı, sanatı ve yaşayış biçiminin bütünü.</li>
            <li><b>Millî değer:</b> Bir milleti bir arada tutan ortak değerler (vatan sevgisi, adalet, bağımsızlık vb.).</li>
            <li><b>Gelenek ve görenek:</b> Kuşaktan kuşağa aktarılan alışkanlıklar ve törenler.</li>
            <li><b>Birlik ve beraberlik:</b> Toplumun ortak amaçlar için bir arada durması.</li>
          </ul>` }
      ],
      quiz: [
        { q: "Bir grupta üstlendiğimiz görev ve konuma ne ad verilir?", o: ["Hak", "Rol", "Kültür"], a: 1 },
        { q: "Hangisi kültürel bağlarımızdan biridir?", o: ["Dil", "Nüfus", "İklim"], a: 0 },
        { q: "Hangisi bir toplumsal sorundur?", o: ["Bayram ziyareti", "Hava kirliliği", "Halk oyunları"], a: 1 }
      ]
    },

    ozet: {
      title: "Öğrenme Alanı Özeti",
      tabs: [
        { t: "Gruplar ve roller", html: `
          <p>Doğduğumuz andan itibaren farklı gruplara dâhil oluruz: <b>aile, akraba, arkadaş, okul, meslek grupları ve sivil toplum kuruluşları</b>.</p>
          <ul>
            <li>Bazı rollerimiz doğuştandır (çocuk, kardeş, torun); bazılarını sonradan, isteğimizle kazanırız (öğrenci, oyuncu, öğretmen).</li>
            <li>Rollerimiz değiştikçe <b>hak ve sorumluluklarımız</b> da değişir.</li>
            <li>Gruplarımızın ve rollerimizin zamanla değişmesi doğal bir süreçtir.</li>
          </ul>` },
        { t: "Kültürel bağlar", html: `
          <p>Bir toplumu millet yapan en önemli unsur <b>millî kültürdür</b>. Kültürel bağlarımız:</p>
          <div class="two">
            <div><b>Dil ve din</b>Türkçe, milletimizin ortak hazinesidir. Din; sevgi, hoşgörü ve kardeşliği güçlendirir (Yunus Emre, Mevlânâ, Hacı Bektaş Veli).</div>
            <div><b>Tarih, sanat, gelenek</b>Millî Mücadele ve İstiklal Yolu; ebru, hat, kilim; bayramlar, zimem defteri, Nevruz ve halk oyunları.</div>
          </div>
          <div class="fx"><b>Millî değerler</b>Vatanseverlik, bağımsızlık, adalet, dürüstlük, saygı, hoşgörü, yardımlaşma ve millet sevgisi toplumsal birliğimizi güçlendirir.</div>` },
        { t: "Toplumsal sorunlar", html: `
          <p>Toplumsal sorunlar toplumun büyük kısmını etkileyen ve ancak birlikte çözülebilen sorunlardır.</p>
          <ul>
            <li><b>Çevre:</b> hava, su ve toprak kirliliği, plastik atıklar</li>
            <li><b>Afetler:</b> deprem, sel, heyelan, orman yangınları, kuraklık</li>
            <li><b>Diğer:</b> göç, salgın hastalıklar, gıda israfı ve açlık</li>
          </ul>
          <div class="fx"><b>Ne yapabiliriz?</b>Duyarlı ve sorumlu davranmak, geri dönüşüme katkı vermek, israfı önlemek, gönüllü çalışmalara katılmak. Geçmişte vakıflar da toplumsal sorunlara çözüm üretmiştir.</div>` }
      ],
      quiz: [
        { q: "Hangisi doğuştan sahip olduğumuz bir roldür?", o: ["Sınıf başkanı", "Kardeş", "Takım kaptanı"], a: 1 },
        { q: "İnebolu'dan Ankara'ya cephane taşınan yol hangi adla anılır?", o: ["İpek Yolu", "İstiklal Yolu", "Kral Yolu"], a: 1 },
        { q: "Ecdadımızın toplumsal sorunları çözmek için kurduğu kuruluşlar hangisidir?", o: ["Vakıflar", "Fabrikalar", "Limanlar"], a: 0 }
      ]
    },

    roller: {
      title: "Sahip Olduğum Roller",
      tabs: [
        { t: "Gruplarım", html: `
          <div class="stats">
            <div><span>Aile</span>çocuk, kardeş, abla/ağabey</div>
            <div><span>Akraba</span>torun, yeğen, kuzen</div>
            <div><span>Arkadaş</span>arabulucu, planlayıcı</div>
            <div><span>Okul</span>öğrenci, nöbetçi, sınıf başkanı</div>
            <div><span>Kulüp, takım</span>oyuncu, solist, araştırmacı</div>
            <div><span>Meslek</span>öğretmen, doktor, çiftçi</div>
          </div>
          <div class="fx"><b>Unutma</b>Aynı gün içinde birden fazla rolümüz olabilir: sabah öğrenci, öğleden sonra takım oyuncusu, akşam evde abla ya da ağabey.</div>` },
        { t: "Hak ve sorumluluk", html: `
          <div class="two">
            <div><b>Öğrenci olarak</b>Hakkım: eğitim almak, okulun imkânlarından yararlanmak.<br>Sorumluluğum: derslere hazırlıklı gelmek, okul kurallarına uymak.</div>
            <div><b>Ailede çocuk olarak</b>Hakkım: sevgi, bakım ve korunma.<br>Sorumluluğum: büyüklere saygı, ev işlerinde yardım.</div>
          </div>` }
      ],
      sort: {
        prompt: "Her rolü ait olduğu gruba yerleştir.",
        groups: ["Aile ve akraba", "Okul", "Meslek"],
        items: [["Kardeş", 0], ["Torun", 0], ["Anne", 0], ["Sınıf başkanı", 1], ["Nöbetçi öğrenci", 1], ["Kulüp başkanı", 1], ["Doktor", 2], ["Çiftçi", 2], ["Ustabaşı", 2]]
      }
    },

    degisen: {
      title: "Zaman İçinde Değişen Rollerimiz",
      tabs: [
        { t: "Hayat şeridi", html: `
          <div class="bars">
            <div><span>Bebeklik ve çocukluk</span><i style="--w:6"></i><b>çocuk, kardeş</b></div>
            <div><span>Okul yılları</span><i style="--w:10"></i><b>öğrenci</b></div>
            <div><span>Gençlik</span><i style="--w:14"></i><b>üniversite öğrencisi</b></div>
            <div><span>Yetişkinlik</span><i style="--w:19"></i><b>çalışan, eş, ebeveyn</b></div>
            <div><span>Yaşlılık</span><i style="--w:21.6"></i><b>dede, nine, emekli</b></div>
          </div>
          <div class="fx"><b>Doğal bir süreç</b>Bazı rollerimiz hayat boyu sürer (evlat olmak) ama sorumlulukları yaşla değişir. Yeni gruplara katıldıkça yeni roller ediniriz.</div>` },
        { t: "Doğuştan mı, sonradan mı?", html: `
          <div class="two">
            <div><b>Doğuştan kazanılan roller</b>Seçme hakkımız yoktur: çocuk, kardeş, torun, yeğen, kuzen.</div>
            <div><b>Sonradan kazanılan roller</b>Çalışarak, başararak ya da isteğimizle kazanırız: öğrenci, takım oyuncusu, öğretmen, dernek üyesi.</div>
          </div>` }
      ],
      sort: {
        prompt: "Rolleri doğuştan ya da sonradan kazanılanlar olarak ayır.",
        groups: ["Doğuştan", "Sonradan"],
        items: [["Çocuk", 0], ["Kardeş", 0], ["Torun", 0], ["Kuzen", 0], ["Öğrenci", 1], ["Takım kaptanı", 1], ["Öğretmen", 1], ["Dernek üyesi", 1]]
      }
    },

    karagoz: {
      title: "Karagöz Oyunu",
      tabs: [
        { t: "Karagöz nedir?", html: `
          <p>Karagöz, deriden yapılmış renkli <b>tasvirlerin</b> beyaz bir perdenin arkasından ışıkla oynatıldığı geleneksel bir <b>gölge oyunudur</b>. Perdenin arkasında tasvirleri oynatan ve bütün karakterleri seslendiren sanatçıya <b>Karagözcü (hayalî)</b> denir.</p>
          <div class="two">
            <div><b>Karagöz</b>Halktan, okumamış ama zeki ve dobra biridir. Açık sözlüdür, sözcükleri yanlış anlayarak güldürür.</div>
            <div><b>Hacivat</b>Okumuş, kibar ve süslü konuşan biridir. Her şeyi bildiğini düşünür, arabuluculuk yapar.</div>
          </div>
          <div class="fx"><b>Kültürel miras</b>Karagöz, UNESCO İnsanlığın Somut Olmayan Kültürel Mirası listesinde yer almaktadır.</div>` },
        { t: "Oyundaki değerler", html: `
          <ul>
            <li><b>Komşuluk ve yardımlaşma:</b> Mahalle halkı birbirinin derdine ortak olur.</li>
            <li><b>Hoşgörü:</b> Farklı kişiliklerdeki karakterler bir arada yaşar.</li>
            <li><b>Dürüstlük:</b> Hileye ve yalana başvuran sonunda zor duruma düşer.</li>
            <li><b>Saygı:</b> Büyüklere ve misafire hürmet gösterilir.</li>
            <li><b>Mizah:</b> Yanlış davranışlar güldürerek eleştirilir.</li>
          </ul>` },
        { t: "Oyunun bölümleri", html: `
          <div class="bars">
            <div><span>1. Mukaddime</span><i style="--w:8"></i><b>giriş</b></div>
            <div><span>2. Muhavere</span><i style="--w:13"></i><b>atışma</b></div>
            <div><span>3. Fasıl</span><i style="--w:21.6"></i><b>asıl olay</b></div>
            <div><span>4. Bitiş</span><i style="--w:6"></i><b>vedalaşma</b></div>
          </div>` }
      ],
      quiz: [
        { q: "Karagöz oyununda tasvirleri oynatan sanatçıya ne denir?", o: ["Meddah", "Karagözcü (hayalî)", "Âşık"], a: 1 },
        { q: "Karagöz oyunu en çok hangi ayda oynanmasıyla bilinir?", o: ["Ramazan", "Şevval", "Muharrem"], a: 0 },
        { q: "Hacivat'ın en belirgin özelliği hangisidir?", o: ["Süslü ve bilgiç konuşması", "Okumamış olması", "Hiç konuşmaması"], a: 0 }
      ]
    },

    yardimlasma: {
      title: "Yardımlaşma Geleneklerimiz",
      tabs: [
        { t: "Zimem defteri", html: `
          <p>Ramazan'da durumu iyi olanlar tanımadıkları mahalle bakkallarına gider, veresiye defterinin (zimem defteri) bir kısmını ya da tamamını öder, borçluların adını bilmeden borçlarını kapatırdı. Yardım eden kişi kimseye kendini göstermezdi.</p>
          <div class="fx"><b>Değer</b>Yardımlaşma, dürüstlük, gizlilik içinde iyilik yapma.</div>` },
        { t: "Sadaka taşı", html: `
          <p>Osmanlı döneminde cami avlularına yerleştirilen taşlardı. Varlıklı kişiler taşın üzerindeki çukura gizlice para bırakır, ihtiyacı olanlar da sadece ihtiyacı kadarını alırdı. Böylece veren de alan da birbirini görmezdi.</p>` },
        { t: "İmece", html: `
          <p>Köylerde bir ailenin hasadı, evinin yapımı ya da kışlık hazırlığı için komşuların bir araya gelip karşılıksız çalışmasıdır. Bugün de afetlerde ve düğünlerde imece ruhunu görmek mümkündür.</p>` },
        { t: "Vakıflar", html: `
          <p>Ecdadımız hiçbir çıkar beklemeden binlerce vakıf kurmuştur: aşevleri, imaretler, hastaneler, kervansaraylar, kuşlar ve hayvanlar için vakıflar.</p>
          <div class="fx"><b>Günümüzde</b>Askıda ekmek, bayramlarda ihtiyaç sahiplerini ziyaret, afetlerde yardım kampanyaları bu geleneğin devamıdır.</div>` }
      ],
      quiz: [
        { q: "Veresiye borçlarının gizlice ödenmesi geleneğine ne ad verilir?", o: ["Zimem defteri", "İmece", "Hıdrellez"], a: 0 },
        { q: "Komşuların bir işi karşılıksız birlikte yapmasına ne denir?", o: ["Vakıf", "İmece", "Nevruz"], a: 1 }
      ]
    },

    kultur: {
      title: "Kültürel Bağlarımız ve Millî Değerlerimiz",
      tabs: [
        { t: "Kültürel bağlar", html: `
          <div class="stats">
            <div><span>Dil</span>Türkçe, destanlar, ninniler, türküler, atasözleri</div>
            <div><span>Din</span>bayramlar, Yunus Emre, Mevlânâ, hoşgörü</div>
            <div><span>Tarih</span>Millî Mücadele, İstiklal Yolu, 15 Temmuz</div>
            <div><span>Sanat</span>ebru, hat, çini, kilim, minyatür</div>
            <div><span>Gelenek</span>Nevruz, halk oyunları, zimem defteri</div>
          </div>` },
        { t: "Millî değerler", html: `
          <p>Millî değerler, bizi millet yapan ve birliğimizi sağlayan ortak değerlerdir:</p>
          <ul>
            <li>Vatanseverlik ve millet sevgisi</li>
            <li>Bağımsızlık ve özgürlük</li>
            <li>Adalet, dürüstlük, doğruluk</li>
            <li>Saygı, sevgi, hoşgörü</li>
            <li>Yardımlaşma ve dayanışma, aile birliğine önem verme</li>
          </ul>` }
      ],
      sort: {
        prompt: "Her örneği ait olduğu kültürel bağa yerleştir.",
        groups: ["Dil", "Sanat", "Gelenek-görenek"],
        items: [["Dede Korkut Hikâyeleri", 0], ["Atasözleri", 0], ["Ninni", 0], ["Ebru", 1], ["Hat", 1], ["Çini", 1], ["Kına gecesi", 2], ["Bayram ziyareti", 2], ["Asker uğurlama", 2]]
      }
    },

    temmuz: {
      title: "15 Temmuz Demokrasi ve Millî Birlik Günü",
      tabs: [
        { t: "Ne oldu?", html: `
          <p>15 Temmuz 2016 gecesi hain bir darbe girişimiyle ülkemiz ve milletimiz hedef alındı. Milletimiz Cumhurbaşkanı'nın çağrısıyla sokaklara, meydanlara ve köprülere çıktı; canı pahasına demokrasiye ve millî iradeye sahip çıktı.</p>
          <div class="fx"><b>Sonuç</b>Darbe girişimi millet ve devlet el ele vererek püskürtüldü. Bu direnişte 250'den fazla vatandaşımız şehit oldu.</div>` },
        { t: "Neden önemli?", html: `
          <ul>
            <li>Millet olma bilincinin ve millî birliğin gücünü gösterdi.</li>
            <li>Vatanseverlik, cesaret ve fedakârlık gibi millî değerlerimiz bir kez daha ortaya çıktı.</li>
            <li>Dünyaya demokrasi bilincinin simgesi olarak örnek oldu.</li>
          </ul>` },
        { t: "Nasıl anıyoruz?", html: `
          <p>Her yıl 15 Temmuz'da <b>Demokrasi ve Millî Birlik Günü</b> etkinlikleri düzenlenir. Okullarda anma programları yapılır, şehitlerimiz rahmetle anılır. İstanbul'daki köprünün adı <b>15 Temmuz Şehitler Köprüsü</b> olarak değiştirilmiştir.</p>` }
      ],
      quiz: [
        { q: "15 Temmuz hangi adla anılmaktadır?", o: ["Demokrasi ve Millî Birlik Günü", "Ulusal Egemenlik Günü", "Zafer Bayramı"], a: 0 },
        { q: "15 Temmuz direnişinde hangi değer en çok öne çıkmıştır?", o: ["Millî birlik ve vatanseverlik", "Bencillik", "İsraf"], a: 0 }
      ]
    },

    puanlama: {
      title: "Performans Görevi Dereceli Puanlama Anahtarı",
      levels: RUBRIC,
      checklist: [
        "Ürün, kültürel bağlarımızın ve millî değerlerimizin toplumsal birliğe etkisini doğru yansıtıyor.",
        "Dil, din, tarih, sanat, gelenek-görenek gibi kültürel bağlardan örnekler içeriyor.",
        "Millî değerlere (vatan sevgisi, bağımsızlık, adalet, yardımlaşma vb.) yer veriyor.",
        "İncelenen kaynaklardan ve kavram haritasından yararlanılmış.",
        "Ürün özgün ve yaratıcı.",
        "Türkçe doğru, açık ve etkili kullanılmış.",
        "Ürün düzenli ve özenli hazırlanmış.",
        "Ürün zamanında teslim edildi ve sınıfa etkili biçimde sunuldu."
      ]
    },

    cozumkosesi: {
      title: "Çözüm Köşesi Dereceli Puanlama Anahtarı",
      levels: RUBRIC,
      checklist: [
        "Toplumsal sorunu ve nedenlerini doğru belirledi.",
        "Diğer grupların görüşleriyle benzerlik ve farklılıkları karşılaştırdı.",
        "Özgün çözüm önerileri geliştirdi.",
        "Önerileri uygulanabilir, sürdürülebilir ve topluma fayda sağlayıcı.",
        "Diğer grupların önerilerinin güçlü ve zayıf yönlerini belirledi.",
        "Geri bildirimlere göre çözüm önerisini yeniden düzenledi.",
        "Müzakere sırasında farklı görüşlere saygı gösterdi.",
        "Grup içinde iş birliği yaptı ve görevini yerine getirdi."
      ]
    },

    sorunlar: {
      title: "Toplumsal Sorunlar",
      tabs: [
        { t: "Çevre sorunları", html: `
          <p>Hava, su ve toprak kirliliği; plastik atıklar ve canlı türlerinin yok olması.</p>
          <div class="fx"><b>Neler yapabiliriz?</b>Atıkları ayrıştırmak, tek kullanımlık plastikten kaçınmak, toplu taşıma kullanmak, ağaç dikmek.</div>` },
        { t: "Doğal afetler", html: `
          <p>Deprem, sel, heyelan, orman yangınları ve kuraklık can ve mal kaybına yol açar.</p>
          <div class="fx"><b>Neler yapabiliriz?</b>Afet çantası hazırlamak, tatbikatlara katılmak, ormanda ateş yakmamak, afet bölgelerine yardım kampanyalarına destek olmak.</div>` },
        { t: "Göç ve salgın", html: `
          <p>İş, eğitim, savaş ya da afet gibi nedenlerle insanlar göç eder. Salgın hastalıklar ise kısa sürede çok sayıda insanı etkiler.</p>
          <div class="fx"><b>Neler yapabiliriz?</b>Göç edenlere yardımcı ve hoşgörülü olmak; temizlik ve hijyen kurallarına uymak, aşı ve sağlık önerilerini dikkate almak.</div>` },
        { t: "Gıda israfı", html: `
          <p>Türkiye'de üretilen gıdaların yaklaşık yüzde 35'i sofralara ulaşmadan çöpe gidiyor; her gün milyonlarca ekmek israf ediliyor.</p>
          <div class="fx"><b>Neler yapabiliriz?</b>İhtiyaç kadar almak, tabağa yiyebileceği kadar koymak, artan yemeği değerlendirmek, bayat ekmeği kullanmak.</div>` }
      ],
      sort: {
        prompt: "Her sorunu doğru gruba yerleştir.",
        groups: ["Çevre sorunu", "Doğal afet", "Diğer toplumsal sorun"],
        items: [["Hava kirliliği", 0], ["Plastik atıklar", 0], ["Su kirliliği", 0], ["Deprem", 1], ["Sel", 1], ["Heyelan", 1], ["Göç", 2], ["Salgın hastalık", 2], ["Gıda israfı", 2]]
      }
    },

    cozumler: {
      title: "Toplumsal Sorunlara Çözüm Önerilerimiz",
      tabs: [
        { t: "İsraf", html: `<ul><li>Alışveriş listesi hazırlamak</li><li>Tabağa yiyebileceğimiz kadar yemek koymak</li><li>Suyu ve elektriği tasarruflu kullanmak</li><li>Artan ekmekleri değerlendirmek</li></ul>` },
        { t: "Çevre kirliliği", html: `<ul><li>Atıkları ayrıştırıp geri dönüşüme göndermek</li><li>Bez çanta ve matara kullanmak</li><li>Kısa mesafeleri yürümek, bisiklet kullanmak</li><li>Çevre temizliği etkinliklerine katılmak</li></ul>` },
        { t: "Afetler", html: `<ul><li>Afet ve acil durum çantası hazırlamak</li><li>Deprem tatbikatlarına katılmak</li><li>Ormanlarda ateş yakmamak, cam atmamak</li><li>Yardım kampanyalarına destek olmak</li></ul>` },
        { t: "Birlikte yaşam", html: `<ul><li>Yaşlı ve ihtiyaç sahibi komşulara yardım etmek</li><li>Sokak hayvanlarına mama ve su bırakmak</li><li>Akran zorbalığına karşı çıkmak</li><li>Gönüllülük çalışmalarına katılmak</li></ul>` }
      ],
      quiz: [
        { q: "Hangisi gıda israfını önlemeye yönelik bir davranıştır?", o: ["Tabağa fazla yemek koymak", "Alışveriş listesi hazırlamak", "Bayat ekmeği atmak"], a: 1 },
        { q: "Hangisi çevre kirliliğini azaltır?", o: ["Atıkları ayrıştırmak", "Plastik poşet kullanmak", "Çöpü denize atmak"], a: 0 }
      ]
    },

    bulmacacevap: {
      title: "Bulmacanın Cevap Anahtarı",
      tabs: [
        { t: "Cevaplar", html: `
          <div class="bars">
            <div><span>1. Soldan sağa</span><i style="--w:21.6"></i><b>TOPLUMSAL SORUN</b></div>
            <div><span>2. Soldan sağa</span><i style="--w:8"></i><b>İSRAF</b></div>
            <div><span>3. Soldan sağa</span><i style="--w:15.4"></i><b>DUYARLILIK</b></div>
            <div><span>4. Yukarıdan aşağı</span><i style="--w:15.4"></i><b>SORUMLULUK</b></div>
            <div><span>5. Yukarıdan aşağı</span><i style="--w:4.6"></i><b>GÖÇ</b></div>
            <div><span>6. Soldan sağa</span><i style="--w:12.3"></i><b>KİRLİLİK</b></div>
            <div><span>7. Yukarıdan aşağı</span><i style="--w:17"></i><b>GERİ DÖNÜŞÜM</b></div>
          </div>` }
      ]
    },

    sorular: {
      title: "Daha Fazla Örnek Soru",
      tabs: [
        { t: "Nasıl çözülür?", html: `<p>Her soruda doğru olduğunu düşündüğün seçeneğe dokun. Yanlış seçersen doğru cevap yeşil olarak gösterilir.</p>` }
      ],
      quiz: [
        { q: "Hangisi doğuştan kazanılan bir roldür?", o: ["Torun", "Takım kaptanı", "Dernek üyesi", "Sınıf başkanı"], a: 0 },
        { q: "\"Rollerimiz değiştikçe hak ve sorumluluklarımız da değişir.\" ifadesine göre hangisi doğrudur?", o: ["Öğrenciyken de çalışırken de sorumluluklarımız aynıdır.", "Meslek sahibi olunca yeni sorumluluklar kazanılır.", "Çocukluk rolü hiç değişmez.", "Grupların rollerimize etkisi yoktur."], a: 1 },
        { q: "Kutadgu Bilig'deki \"Kanunu doğru yürütmeli ve halkı korumalısın\" öğüdü hangi değerle ilgilidir?", o: ["Adalet", "Sabır", "Misafirperverlik", "Tutumluluk"], a: 0 },
        { q: "İnebolu'dan Ankara'ya cephane taşıyan halkımız en çok hangi değeri yansıtmıştır?", o: ["Vatanseverlik", "Bencillik", "Kayıtsızlık", "İsraf"], a: 0 },
        { q: "Hangisi gelenek ve göreneklerimize örnek değildir?", o: ["Bayram ziyaretleri", "Nevruz kutlamaları", "Asker uğurlama", "Trafik ışıkları"], a: 3 },
        { q: "Sofralardan artan yemeklerin hayvanlara verilmesi için kurulan vakıf hangi sorunu önlemeye yöneliktir?", o: ["İsraf", "Göç", "Hava kirliliği", "Deprem"], a: 0 },
        { q: "Hangisi toplumsal bir sorun değildir?", o: ["Hava kirliliği", "Gıda israfı", "Bir öğrencinin kalemini kaybetmesi", "Su kıtlığı"], a: 2 },
        { q: "TOYTOS sistemi hangi toplumsal sorunun çözümüne katkı sağlar?", o: ["Orman yangınları", "Trafik", "Göç", "Gıda israfı"], a: 0 }
      ]
    },

    kavram: {
      title: "Kavram Oyunu",
      tabs: [
        { t: "Nasıl oynanır?", html: `<p>Aşağıdaki kavramları öğrenme alanının üç konusuna göre grupla. Sonra tanım sorularını yanıtla.</p>` }
      ],
      sort: {
        prompt: "Her kavramı ait olduğu konuya yerleştir.",
        groups: ["Gruplar ve roller", "Kültürel bağlar ve değerler", "Toplumsal sorunlar"],
        items: [["Aile", 0], ["Sınıf başkanı", 0], ["Meslek grubu", 0], ["Dil", 1], ["Nevruz", 1], ["Vatanseverlik", 1], ["İsraf", 2], ["Göç", 2], ["Hava kirliliği", 2]]
      },
      quiz: [
        { q: "Kişinin yerine getirmesi gereken görevlere ne denir?", o: ["Hak", "Sorumluluk", "Rol"], a: 1 },
        { q: "Kuşaktan kuşağa aktarılan alışkanlık ve törenlere ne denir?", o: ["Gelenek ve görenek", "Teknoloji", "Kanun"], a: 0 },
        { q: "Kullanılmış atıkların yeniden ham maddeye dönüştürülmesine ne denir?", o: ["Geri dönüşüm", "İsraf", "Kirlilik"], a: 0 }
      ]
    }
  };
})();

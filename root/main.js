var countryContainers = document.querySelectorAll('.country');
var countryLinks = document.querySelectorAll('.country-link');


const countryList = [
  {
    "id": "albania",
    "img": "Flag_of_Albania.png",
    "map": "",
    "name": "Albania",
    "subhead": "Albánofóbia",
    "short": "Alábia népe, az albánok a történelem során rengeteg negatív megkülönbeztetésen mentek keresztül. Az albánofóbia a rasszizmus egy kevésbé ismert formája, amely félelmet vagy gyűlöletet jelent az albánok, kultúrájuk és/vagy nyelvük iránt. Ez a probléma évszázadok óta jelen van Európában, és gyakran megnyilvánul diszkriminációval, sztereotípiákkal és sértő kifejezésekkel Albánia embereivel szemben. ",
    "long": "Az albánofóbia eredete visszavezethető az Oszmán Birodalom terjeszkedésére Európában a 14. században, és a Balkán háborúk idején tetőzött, amikor milliók váltak elűzöttekké. Az albánofóbia mai formái továbbra is jelen vannak Európában és azon túl, leggyakrabban diszkriminatív politikákban mutatkoznak meg, amelyek kizárják az albánokat bizonyos társadalmi területekről, például az oktatásból vagy a munkalehetőségekből. Emellett előfordulnak olyan esetek is, amikor a médiában vagy a barátokkal vagy családtagokkal folytatott alkalmi beszélgetések során sztereotípiákat terjesztenek az albánokról. Ezek a sztereotípiák gyakran negatív képet festenek az albánokról, megerősítve a régi előítéleteket, miszerint lusták vagy megbízhatatlanok, ami csak tovább marginalizálja az amúgy is kiszolgáltatott csoportot. Az albánofóbia elleni küzdelemben fontos felismerni és ellenállni ennek a problémának, és terjeszteni a tudatosságot az egyenlő jogokért, függetlenül a fajtól vagy vallástól.",
    "url": "https://www.albanistan.com/en/what-is-albanophobia-or-anti-albanian-sentiment/"
  },
  {
    "id": "austria",
    "img": "Flag_of_Austria.png",
    "map": "",
    "name": "Ausztria",
    "subhead": "Ausztria: Rasszizmus az igazságszolgáltatásban és a rendészeti szerveknél",
    "short": "Az Amnesty International Ausztria szakértője, John Dalhuisen szerint Ausztriában egy kétszintű igazságszolgáltatási rendszer működik, amely teljesen ellentétes az igazságszolgáltatás fogalmával. A jelentés bemutatja az osztrák rendőrség faji alapú visszaéléseit és hátrányos megkülönböztetését, valamint azt, hogy az igazságszolgáltatás nem tud egyenlő bánásmódot biztosítani a migránsok és etnikai kisebbségek tagjai számára. ",
    "long": "Az Amnesty International kutatása szerint a színes bőrű osztrák állampolgárokat gyakrabban gyanúsítják bűncselekményekkel, és nagyobb valószínűséggel tapasztalnak rendőri visszaéléseket. Az eljárásokban azonban kevésbé valószínű, hogy igazságos kivizsgálás és jogorvoslat történik. John Dalhuisen elmondása szerint a rendőrség diszkriminatív gyakorlata olyannyira elterjedt, hogy emiatt nem csupán az egyének, hanem egész kisebbségi közösségek érzik kifejezetten fenyegetve magukat. Az Amnesty International aggodalmát fejezi ki azzal kapcsolatban, hogy az áldozatok nagy része nem tud igazságot szerezni ugyanabban az igazságszolgáltatási rendszerben. A szervezet felhívja a hatóságokat, hogy vizsgálják ki a rasszista gyakorlatokat, erősítsék meg az intézményes választ és biztosítsák a diszkriminációmentes bánásmódot. Emellett fontos, hogy a külföldi állampolgárok és etnikai kisebbségek által bejelentett bűneseteket alaposan vizsgálják ki. A jelentésben szerepelnek konkrét esetek, amelyekben a rendőri erőszak és a rendőrségi válaszlépések hiányosságai nyilvánvalóak.",
    "url": "https://www.amnesty.hu/ausztria-rasszizmus-az-igazsagszolgaltatasban-es-a-rendeszeti-szerveknel/"
  },
  {
    "id": "belarus",
    "img": "Flag_of_Belarus.png",
    "map": "",
    "name": "Fehéroroszország",
    "subhead": "Fehéroroszországban emberi jogok tömeges megsértése",
    "short": "A független szakértő, Anaïs Marin a Human Rights Council (Emberi Jogi Tanács) megbízásából készített éves jelentésében hangsúlyozta, hogy Belaruszban súlyos emberi jogi válság tapasztalható. A hatóságokat felszólította, hogy vessenek véget az elnyomó politikának és tiszteletben tartsák a nép jogos törekvéseit.",
    "long": "A jelentésben szerepeltek információk a tüntetők elleni rendőri erőszakról, az eltűnésekkel és kínzással kapcsolatos állításokról, valamint a civil társadalom képviselőinek megfélemlítéséről és zaklatásáról. A civil társadalomra egyértelmű támadást látott, a jogok és szabadságok korlátozását és az emberi jogi aktivisták, újságírók és ügyvédek üldözését említette. A jelentés továbbá kifejezte aggodalmát az oktatáshoz való jog megsértése miatt, és rámutatott, hogy a diákok és tanárok megfélemlítésnek vannak kitéve. Az ENSZ-szakértő arra szólította fel a hatóságokat, hogy azonnal szabadon engedjék a letartóztatott személyeket és tiszteletben tartsák az emberi jogokat. A jelentéstevő, Anaïs Marin francia politológus és kutató, aki számos publikációval rendelkezik a belaruszi helyzetről. A jelentés hangsúlyozta a Speciális Eljárások független és politikailag semleges munkáját, amelyek az ENSZ Emberi Jogi rendszerének részei.",
    "url": "https://www.ohchr.org/en/press-releases/2021/07/belarus-massive-human-rights-violations-unprecedented-scope-and-gravity-says"
  },
  {
    "id": "belgium",
    "img": "Flag_of_Belgium.png",
    "map": "",
    "name": "Belgium",
    "subhead": "Faji megkülönböztetés Belgiumban",
    "short": "A rasszista diszkrimináció továbbra is a legelterjedtebb ok az egyenlőtlen bánásmódra Belgiumban, egy új jelentés szerint. Az Interfederális Egyenlő Esélyek Központja (Unia), az antidiszkriminációs szerv éves jelentése szerint 2022-ben 7 310 ember jelentette, hogy diszkriminálva érzi magát, főként származása, egészségi állapota vagy fogyatékossága miatt - áll a jelentésben. ",
    "long": "A független közszolgálati szerv 1 887 vizsgálatot indított a panaszok alapján. A jelentés szerint a rasszista szempontok - nevezetesen a nemzeti vagy etnikai származás, bőrszín, állampolgárság, származás és rasszal kapcsolatos feltételezések - az első helyen maradtak a diszkrimináció fő okaként a vizsgált ügyek 38%-át, azaz 735 esetet képviselve. A panaszok szerint a legtöbb diszkrimináció a szolgáltatások és árucikkek terén jelentkezett, főként a lakhatással kapcsolatosan, a társadalmi terekben, különösen a közintézményekben, és a munkahelyeken kollégákkal vagy ügyfelekkel való interakció során. A jelentés szerint tavaly 1 961 esetben történt valamilyen tiltott magatartás. A vizsgált esetek 68%-ában találtak közvetlen vagy közvetett diszkriminációt, míg a gyűlöletbeszéd és gyűlöletbűncselekmény egyaránt 16%-ot tett ki.",
    "url": "https://www.aa.com.tr/en/europe/racial-discrimination-remains-number-1-cause-for-unequal-treatment-in-belgium-report/2912679"
  },
  {
    "id": "bosnia",
    "img": "Flag_of_Bosnia.png",
    "map": "",
    "name": "Bosznia-Hercegovina",
    "subhead": "Diszkriminatív a választási rendszer Bosznia-Hercegovinában",
    "short": " A strasbourgi Emberi Jogok Európai Bírósága szerint Bosznia-Hercegovina választási rendszere diszkriminatív, mivel megtiltja azoknak a nőknek, akik nem vállalják, hogy melyik államalkotó kisebbséghez tartoznak, hogy részt vegyenek a képviselőházi és az elnökválasztáson. Az alkotmány különbséget tesz az emberek között a népcsoportjuk alapján, és csak azok indulhatnak a választásokon, akik az államalkotó népekhez tartozónak vallják magukat.",
    "long": "Az ítélet szerint ez sérti az Emberi Jogok Európai Egyezményének diszkriminációt tiltó rendelkezéseit. A bíróság úgy véli, hogy az eltelt időben kialakultak olyan mechanizmusok a hatalommegosztásra, amelyek miatt ezek a diszkriminatív rendelkezések nem tekinthetők ésszerűnek vagy objektívnek. Az ítélet arra szólít fel, hogy módosítsák az alkotmányt, hogy minden bosznia-hercegovinai polgár számára biztosítsák a választáson való indulás jogát etnikai alapú megkülönböztetés és államalkotó népeknek juttatott előjogok nélkül. Az ítélet még nem jogerős, és mindkét félnek van lehetősége fellebbezésre. Azra Zornic megtagadta, hogy nyilatkozzon, mely etnikumhoz tartozik, pusztán bosznia-hercegovinai állampolgárnak tartja magát, így nem indulhatott a választásokon. Ez a bírák szerint sérti az Emberi Jogok Európai Egyezményének diszkriminációt tiltó passzusait. A bíróság közleménye felidézi, hogy egy korábbi ügyben is hasonló következtetésre jutott.",
    "url": "https://www.vg.hu/kozelet/2014/07/diszkriminativ-a-valasztasi-rendszer-bosznia-hercegovinaban"
  },
  {
    "id": "bulgaria",
    "img": "Flag_of_Bulgaria.png",
    "map": "",
    "name": "Bulgária",
    "subhead": "Bulgáriában fellépnek a vallási diszkrimináció ellen",
    "short": "Bulgáriában Jehova Tanúi jelentős győzelmet arattak a vallási diszkrimináció ellen. A Bulgária Diszkrimináció Elleni Védelmi Bizottság megállapította, hogy a SKAT TV-csatorna és két újságírója szándékosan terjesztett hamis információkat a Tanúkról, és erőszakos cselekedetekre buzdították az embereket. Az ilyen műsorok gyűlöletet és erőszakot szítottak Jehova Tanúi ellen, és több támadásra és királyságtermek megrongálására vezettek. ",
    "long": "A bizottság büntetést szabott ki a SKAT TV-re és az újságírókra, kijelentve, hogy az ilyen viselkedésnek nincs mentsége. A döntés jelentősége, hogy a bizottság fellépett a rágalmak és gyűlöletbeszéd ellen. A Tanúk dicséretesnek tartják, hogy a bizottság fellépett a rágalmakat és valótlanságokat terjesztő újságírás ellen. Bulgáriában más médiumok is hasonlóan bánnak Jehova Tanúival, ezért a bizottság döntése nekik is komoly figyelmeztetés arra, hogy hagyjanak fel a hamis vádaskodással és a gyűlöletbeszéddel. A Jehova Tanúi örülnek annak, hogy a helyzetet orvosolják, és fontosnak tartják, hogy az emberek megtudják az igazat róluk. Bulgáriában továbbra is folyik a küzdelem a vallási diszkrimináció ellen, és ez a győzelem erősíti a szólásszabadság jogát, valamint védelmet nyújt az egyéneknek és a vallási szervezeteknek az ilyen támadásokkal szemben. ",
    "url": "https://www.jw.org/hu/hirek/regiok/bulgaria/bizottsag-bunteti-vallasi-diszkriminaciot/"
  },
  {
    "id": "croatia",
    "img": "Flag_of_Croatia.jpg",
    "map": "",
    "name": "Horvátország",
    "subhead": "Horvátország: A nemzeti kisebbségi bizottság szerint a nemzeti kisebbségek megkülönböztetése fennáll",
    "short": "Az Európa Tanács Keretegyezmény a Nemzeti Kisebbségek Védelméről Tanácsadó Bizottságának Ötödik Véleményében elismeri, hogy Horvátország jogi keretei a nemzeti kisebbségek számára „általánosságban összhangban vannak a Keretegyezmény rendelkezéseivel”. Valóban, „átfogó antidiszkriminációs jogszabályokat hoztak létre, és struktúrák működnek a diszkriminációval szembeni egyenlő bánásmód előmozdítására .",
    "long": "Azonban a bizottság megállapítja, hogy továbbra is fennáll a diszkrimináció bizonyos csoportokhoz tartozó személyekkel szemben, különösen a roma és a szerb nemzeti kisebbségek, ideértve a visszatérőket is. Az utolsó jelentés óta Horvátországban nőtt az uszító cselekmények száma. Az állásfoglalás kritikus azzal kapcsolatban, hogy a nemzeti kisebbségekkel kapcsolatos közbeszédet ellenkisebbségi retorika és előítéletek uralják, különösen a szerb és a roma nemzeti kisebbséghez tartozó személyeket érintve. Az állásfoglalás válaszul a Jogi Biztos hivatalának megerősítését és a szabad jogi segítségnyújtási rendszer hatékonyságának javítását, valamint az emberi jogok és a diszkrimináció elleni képzés hatásának növelését kéri a rendfenntartó erők és a bíróságok számára, mivel ezek a lépések javítanák a sebezhető csoportok elérhetőségét és csökkentenék a diszkriminációs esetek aluljelentését.",
    "url": "https://www.coe.int/en/web/portal/-/croatia-despite-progress-discrimination-persists-against-national-minorities-such-as-serbs-and-roma-says-national-minorities-committee"
  },
  {
    "id": "czech",
    "img": "Flag_of_Czech.png",
    "map": "",
    "name": "Cseh Köztársaság",
    "subhead": "D. H. ÉS MÁSOK kontra CSEH KÖZTÁRSASÁG",
    "short": "A Kamara ítélete elleni fellebbezés során a Nagykamara tizenhárom szavazattal négy szavazat ellenében megállapította, hogy megsértették Csehországban az Egyezmény 14. cikkét (megkülönböztetés tilalma) és az Első Kiegészítő Jegyzőkönyv 2. cikkét (oktatáshoz való jog), mivel a Bíróság nem látja megalapozottnak, hogy a megkülönböztetés a roma és nem roma gyermekek közötti bánásmódban objektíven és ésszerűen igazolható.",
    "long": "Valamint azt sem, hogy az elérendő cél és a cél eléréshez kapcsolódó eszközök között ésszerű arányosság állt fenn, bár a Bíróság elismeri a cseh hatóságok annak érdekében tett erőfeszítéseit, hogy biztosítsa a roma gyermekek iskoláztatását. A Bíróság megjegyzi, hogy egy új törvény megszüntette a speciális iskolákat és a különleges oktatási igényekkel rendelkező gyermekek - beleérve a szociálisan hátrányos helyzetben lévő gyermekeket - oktatását az általános iskolában írja elő. Mivel megállapítást nyert, hogy a vonatkozó joggyakorlat az ügy idején aránytalanul hátrányos hatással volt a roma közösségre, a felperesek e közösség tagjaiként szükségszerűen ugyanazt a diszkriminációs bánásmódot szenvedték el. Ezért nem kell az egyedi ügyeket vizsgálni.",
    "url": "https://kuria-birosag.hu/hu/ejeb/d-h-es-masok-kontra-cseh-koztarsasag"
  },
  {
    "id": "denmark",
    "img": "Flag_of_Denmark.png",
    "map": "",
    "name": "Dánia",
    "subhead": "Dán 25 órás parkolás diszkrimináció",
    "short": "A brüsszeli jelentés szerint az Európai Bizottság úgy döntött, hogy az előírások visszavonása iránti kérelemmel fordul Dániához. Ezek az előírások megtiltják a járművezetőknek, hogy az állami parkolókban 25 óránál többet töltsenek. A Bizottság szerint „az időbeli korlátozás főleg a Dániában székhellyel nem rendelkező szállítmányozókra van befolyással, ami állampolgárság szerinti diszkrimináció, amely nem megengedhető az EU szerződések talaján”.",
    "long": "Ezen felül a korlátozás lehetetlenné teszi az uniós szabályok betartását, amelyek a teherautóvezetők munka- és pihenő idejére vonatkozik. Ez megint csak negatív hatással van a közúti biztonságra.Brüsszel szerint a korlátozás sérti a szállítmányozók szabadságát a szállítmányozási szolgáltatások nyújtásában és alaptalan, közvetlen diszkriminációt valósít meg. Dániának két hónapja van bemutatni a Bizottságnak a megjegyzéseit aq döntéssel kapcsolatban. A Bizottság ez után hozhat döntést arról, hogy elfogadja-e, megalapozottnak tartja-e a dánok védekezését.",
    "url": "https://trans.info/hu/brusszel-a-dan-25-oras-parkolas-diszkriminacio-meg-kell-szuntetni-102684"
  },
  {
    "id": "estonia",
    "img": "Flag_of_Estonia.png",
    "map": "",
    "name": "Észtország",
    "subhead": "A kisebbségek helyzete Észtországban",
    "short": "Az észt rendszerváltásnak és az észt szuverenitás helyreállításának a folyamatában nem volt könnyen elrendezhető az országban évszázadok óta ott élő, majd a szovjet korszakban még nagyobb arányú orosz kisebbség helyzete. Jogilag többé-kevésbé megteremtették ugyan a kisebbségvédelem feltételeit, ugyanakkor de facto a mai napig sem megoldott a kisebbségi, illetve a hontalan kérdés. ",
    "long": "Jelentősen csökkent a hontalanná vált oroszok száma, de még ma is sokan küzdenek az 1992-ben visszaállított és 1993-ban hatályba lépett állampolgársági törvény okozta hátrányos helyzettel. A munkaszerződésekről és a bérekről szóló törvény tiltja a nemen, faji származáson, életkoron, etnikai származáson, a nyelvtudás szintjén, a fogyatékosságon, a szexuális irányultságon, a védelmi erők szolgálatának kötelességén, a családi vagy családi helyzeten alapuló megkülönböztetést, a családdal kapcsolatos feladatokat, társadalmi státus, a munkavállalók érdekeinek képviselete vagy a munkavállalói szövetségekben való tagság, politikai vélemény vagy politikai pártban való részvétel, vallási vagy más meggyőződés.",
    "url": "https://www.fedee.com/hu/kb/estonia-discrimination/"
  },
  {
    "id": "finland",
    "img": "Flag_of_Finland.png",
    "map": "",
    "name": "Finnország",
    "subhead": "Származásuk miatt diszkriminálják a romákat a finnek",
    "short": "A V4NA nemzetközi hírügynökség beszámolója szerint a romák Finnországban súlyos diszkriminációval szembesülnek. Az országban mintegy 10 000 roma származású ember él, akiknek mindennapjai tele vannak megkülönböztetéssel. A felmérések szerint a romák 68 százalékát érte már diszkrimináció, és az etnikai profilozás is elterjedt gyakorlatnak számít a finn társadalomban.",
    "long": "Az Európai Unió Alapjogi Ügynökségének felmérései nem terjedtek ki a romák helyzetére Finnországban, de az Európai Roma Jogok Központja már 2004-ben figyelmeztetett, hogy a romák naponta találkoznak diszkriminációval. Az iskolai oktatásban és a munkaerőpiacon is problémák merülnek fel, és a roma gyerekeket speciális oktatási rendszerbe sorolják. Az etnikai profilozás szintén elterjedt a finn társadalomban. A biztonsági őrök gyakran megállítják a nem fehér bőrű embereket, és különösen a szomáliaiakat és a Közel-Keletről érkezőket vizsgálják át. A rendőrség és a biztonsági szolgálatok fellépése gyakran okoz feszültséget a kisebbségek és a rendőrök között. ",
    "url": "https://www.origo.hu/nagyvilag/20191001-szarmazasuk-miatt-diszkriminaljak-a-romakat-a-finnek.html"
  },
  {
    "id": "france",
    "img": "Flag_of_France.png",
    "map": "",
    "name": "Franciaország",
    "subhead": "Bőrszínük és nevük miatt diszkrimináltak vendégeket a francia Riviérán",
    "short": "A francia Riviérán egy civil szervezet, a francia SOS-Racisme aktivistái szerint vendégeket diszkriminálnak a bőrszínük és nevük miatt. A szervezet titkos akciókat szervez, hogy bizonyítékokat gyűjtsön a rasszizmus és diszkrimináció jelenlétéről a mindennapi életben. Idén a dél-franciaországi Côte d’Azur privát strandjait vizsgálták meg, hogy megtudják, hogyan fogadják az embereket különböző származással és párokkal.",
    "long": "A Guardian szerint több páros is tapasztalt diszkriminációt a ruházatuk, megjelenésük, származásuk, bőrszínük vagy nevük miatt. Voltak olyan esetek, amikor a párok nem kaptak napozóágyat, mert külföldi nevet használtak. Egy másik páros azonban francia nevet adott meg másodjára, és így sikerült ágyat foglalniuk egy exkluzív strandon. Egy másik esetben a személyzet azt mondta egy párnek, hogy minden ágyuk foglalt, és nem kaptak napozóágyat, míg a sorban utánuk következő fehér pár ugyanezzel a kéréssel azonnal helyet kapott a tenger közelében. A francia kormányzati szervezet, az Emberi Jogok Nemzeti Tanácsa (CNCDH) a múlt hónapban közzétett egy jelentést a rasszizmusról, amely szerint a francia társadalom egyre toleránsabbá válik. Ugyanakkor a bizottság hangsúlyozta, hogy bizonyos közösségek, például a muszlimok és a romák ellen még mindig sok az előítélet.",
    "url": "https://telex.hu/kulfold/2022/08/08/aktivistak-rejtett-kameras-felvetelek-cote-dazur-rasszizmus"
  },
  {
    "id": "germany",
    "img": "Flag_of_Germany.png",
    "map": "",
    "name": "Németország",
    "subhead": "Német munkahelyi diszkrimináció – Megteszik, mert megtehetik a kívülről érkezőkkel",
    "short": "A Süddeutsche Zeitung cikkében arról számol be, hogy Németországban a külföldi és migrációs hátterű munkavállalók alacsonyabb bérezésben részesülnek, mint a tősgyökeres németek. A lap egy mexikói mérnök történetét is idézi, hogy bemutassa ezt a jelenséget. García Mexikó keleti partvidékén, Tampicoban nőtt fel, és az Egyesült Államokban és Franciaországban is tanult és dolgozott, mielőtt öt évvel ezelőtt Berlinbe költözött. ",
    "long": "Berlinben egy gyárnál dolgozik termelésvezetőként. Jól megérti magát a kollégáival és a főnökeivel is, de havonta legalább egyszer rádöbben, hogy alacsonyabb fizetést kap, mint a német kollégái, akik hasonló pozíciót töltnek be. García kiábrándultan közli, hogy azt az összeget, amit én kapok, nem lehetne német munkavállalóra találni ugyanazon a pozíción. Havi bruttó 3000 euró érkezik a bankszámlájára, ami alacsony az ilyen szintű termelésvezetői pozíciókhoz képest. García koordinálja és optimalizálja több termék gyártását, kapcsolatot tart a megrendelőkkel és közvetít a saját cégének fejlesztőmérnökei és a megrendelők között. Emellett vezetője a szakmunkásoknak, akik a termékek gyártásában vesznek részt.",
    "url": "https://azuzlet.hu/nemet-munkahelyi-diszkriminacio-megteszik-mert-megtehetik-a-kivulrol-erkezokkel/"
  },
  {
    "id": "greece",
    "img": "",
    "map": "Flag_of_Greece.png",
    "name": "Görögország",
    "subhead": "Közömbösség és diszkrimináció áldozatai a görög katolikusok?",
    "short": "Hollandiai támogatással indította útjára a Pro Európa Liga (PEL) múlt év augusztusában azt a projektet, amely a görög katolikus egyház kommunista rezsim alatt elkobzott vagyonának hosszadalmas, évekre elnyúló visszaszolgáltatási pereit vizsgálja. A PEL társelnöke, Smaranda Enache úgy véli, a görög katolikus egyház diszkrimináció áldozata, ugyanis az ingatlanok visszaszolgáltatásáért indított perek túlságosan hosszú ideig elhúzódnak.",
    "long": "Az emberjogi szervezet tagjai eddig 1500 kérdőívet osztottak szét az ország különböző görög katolikus egyházközségeiben, minisztériumaiban, bíróságain. A kérdések arra vonatkoznak, hogy az egyházközségek milyen vagyonnal rendelkeztek az elkobzás előtt, ebből mit szolgáltattak vissza, mióta tartanak a perek. A PEL négy regionális konferenciát is szervezett ez ügyben, amelyeken mediátor szerepet vállalt az érintettek és a meghívott intézmények között. Június 15-én Bukarestben, egy országos konferencia keretében próbálta meg ugyanezt, azonban számos kulcsfontosságú intézmény (például az igazságügyi minisztérium) képviselője nem jelent meg a találkozón – mondta a PEL társelnöke június 22-én tartott sajtótájékoztatóján.",
    "url": ""
  },
  {
    "id": "hungary",
    "img": "Flag_of_Hungary.png",
    "map": "",
    "name": "Magyarország",
    "subhead": "Botrány a magyar Amnesty International csapatánál: diszkrimináció, munkahelyi bántalmazás",
    "short": "Az Amnesty International magyar szervezeténél botrány tört ki, mivel állítások szerint a vezetők diszkriminációt és munkahelyi bántalmazást gyakoroltak. Az OpenDemocracy portál szerint több vezető nyomást gyakorolt az alkalmazottakra, hogy abbahagyják a gyermekek szoptatását, és más munkavállalókat folyamatosan szóban inzultáltak és diszkrimináltak. Összesen öt női alkalmazott tapasztalt hasonló helyzeteket, akik később távoztak a szervezettől. ",
    "long": "Az incidens az Amnesty International magyar szervezetének egy 56 oldalas dokumentumának nyilvánosságra hozatala idején történt, amely a munkahelyeken tapasztalható nemek közötti különbségtételről és a kisgyermekes nők hátrányos megkülönböztetéséről szólt. Az Amnesty International Magyarország válaszlevélben közölte, hogy semmilyen formában nem tolerálják a diszkriminációt, zaklatást és bántalmazást, és minden panaszt komolyan vesznek, alaposan kivizsgálnak. Ugyanakkor megjegyezték, hogy a konkrét esetekben végzett vizsgálatokban a panaszosok nem kívántak részt venni, így nem találtak bizonyítékot a panaszok alátámasztására. Az Amnesty különböző szervezetfejlesztési javaslatokat fogalmazott meg, amelyeket azóta megvalósítottak vagy jelenleg bevezetés alatt vannak. A panaszosok elégedetlenek az eredménnyel, ezért jelenleg egy helyreállító szemléletű folyamatban vesznek részt az Amnesty Internationalnal közösen.",
    "url": "https://www.vg.hu/kozelet/2023/01/botrany-a-magyar-amnesty-international-csapatanal-diszkriminacio-munkahelyi-bantalmazas"
  },
  {
    "id": "iceland",
    "img": "Flag_of_Iceland.png",
    "map": "",
    "name": "Izland",
    "subhead": "Izland: A megvalósult egyenlőség",
    "short": "Izland idén törvénybe foglalta az egyenlő fizetés elvét, ezáltal vált az első olyan országgá a világon, ahol a nők és férfiak azonos bért kapnak azonos munkáért. Az Euronews azt vizsgálta, miért helyezte a Világgazdasági Fórum jelentése Skandináviai szigetországot az első helyre a nemek közötti egyenlőséget illetően. Az egyik híres kereskedelmi lánc izlandi leányvállalata kiemelkedő szerepet játszott a férfiak és nők közötti esélyegyenlőség előmozdításában. ",
    "long": "A boldog és elégedett csapat hatékonyabban teljesít, és többet értékesít. Ha a csapat fele boldogtalan, az lehetetlenné teszi a sikeres vállalkozást - mondta az IKEA helyi igazgatója. Izlandon az egyenlőség a családban kezdődik. Mind a férfiak, mind a nők jogosultak 3-3 hónapos szülői szabadságra minden gyermek születésekor, és további három hónapos szabadságot oszthatnak meg egymással. Példaként említik Hjálmar esetét, aki visszatért a munkájához, miután partnerének, Ljósbrátnak szüksége volt arra, hogy visszatérjen a munkába bankigazgatóként. Hjálmar elmondta, hogy fontos számára, hogy visszatérhessen a munkájához, megtartsa munkahelyét, és ugyanolyan magas fizetést kapjon, mint a férfiak.",
    "url": "https://hu.euronews.com/2018/02/23/izland-a-megvalosult-egyenloseg"
  },{
    "id": "ireland",
    "img": "Flag_of_Ireland.png",
    "map": "",
    "name": "Írország",
    "subhead": "Kiket ér diszkrimináció Írországban?",
    "short": "Egy új tanulmány szerint majdnem minden nyolcadik ember Írországban tapasztalt diszkriminációt az elmúlt két év során. A nagyszabású, reprezentatív felmérésre a Központi Statisztikai Hivatal (CSO) adatai alapján került sor, amelyben 15 000 felnőtt válaszai szerepeltek. A diszkrimináció erőteljesen érzékelhetőnek bizonyult bizonyos csoportok között. Az Ír Emberi Jogok és Egyenlőségi Bizottság (Bizottság) és a Gazdasági és Szociális Kutatóintézet (ESRI) közösen kiadott új kutatásukban elemzi az emberek diszkriminációs tapasztalatait a munkahelyen, a toborzásban, valamint a köz- és magán szolgáltatásokhoz való hozzáférés terén.",
    "long": "A kiemelt egyenlőségi megállapítások szerint a fogyatékossággal élők kétszer olyan valószínűek a diszkrimináció tapasztalatára minden területen, míg a fekete válaszadók háromszor nagyobb valószínűséggel tapasztalnak diszkriminációt a munkahelyen és a közszolgáltatásokhoz való hozzáférésben. Az ír utazók pedig tízszerese gyakrabban tapasztalnak diszkriminációt munkakeresés során, és több mint huszonkétszer nagyobb valószínűséggel a magán szolgáltatásokhoz való hozzáférésben a fehér ír csoporttal szemben. A nők majdnem kétszer olyan valószínűek, mint a férfiak, hogy diszkriminációt tapasztaljanak a munkahelyen, főleg a fizetéssel és előléptetéssel kapcsolatos kérdésekben. Az 45-64 éves korcsoportban a diszkrimináció gyakoribb munkakeresés során, míg a magán szolgáltatások terén az idősebb felnőttek, különösen a 65 év felettiek, kevésbé valószínűek a diszkriminációra. ",
    "url": "https://www.ihrec.ie/experiences-discrimination-ireland/"
  },
  {
    "id": "italy",
    "img": "Flag_of_Italy.png",
    "map": "",
    "name": "Olaszország",
    "subhead": "Újra napirenden az olasz baloldal LMBTQ-törvénytervezete",
    "short": "Az olasz baloldal ismét előterjeszti az LMBTQ-törvénytervezetet, amely az LMBTQ-jogok bővítését és a genderelmélet iskolai oktatásának kötelezővé tételét célozza. A Demokrata Párt képviselője, Alessandro Zan szerint a jobboldal homofób magatartást legitimizál és nem biztosít megfelelő védelmet és jogegyenlőséget az LMBTQ-személyek számára. Zan szerint a törvénytervezet bukása után a jobboldali politikusok örömujjongása megmérgezte a társadalmat, és a homofób személyek további diszkriminációra kapnak felhatalmazást. ",
    "long": "Zan emellett további törvényjavaslatokat is tervez az azonos neműek házasságára és az eutanáziára vonatkozóan. Giorgia Meloni és a jobbközép koalíciós pártok szerint az jelenlegi jogrendszer már szigorúan bünteti a nemi alapú diszkriminációt vagy bántalmazást, és megakadályoznák bármilyen olyan próbálkozást, amely korlátozná a szólás-, nevelés- és vallásszabadságot. A törvénytervezetet támogató baloldaliaknak azonban nehéz dolguk lesz, mivel Giorgia Meloni kormányában olyan politikusok is helyet foglalnak, akik a genderideológia elleni harc fontos szereplői. Alfredo Mantovano ügyész például a tervezet minden egyes paragrafusát elemzi, és hangsúlyozza a benne rejlő veszélyeket",
    "url": "https://magyarnemzet.hu/kulfold/2023/01/ujra-napirenden-az-olasz-baloldal-lmbtq-torvenytervezete"
  },
  {
    "id": "latvia",
    "img": "Flag_of_Latvia.png",
    "map": "",
    "name": "Lettország",
    "subhead": "Lettországban a menekültek jogai",
    "short": "2021 augusztusában Fehéroroszország rendkívüli állapotot hirdetett a határain, és megakadályozta a menekültek és migránsok jogellenes visszatoloncolását. A rendkívüli állapotot többször is meghosszabbították, ami lehetővé tette a civil szervezetek ellenőrzésének hiányát és a jogellenes tevékenységeket a területen. A menedékjog gyakorlatilag felfüggesztésre került a határ menti területeken, de áprilistól az emberek kérelmeiket benyújthatták a daugavpilsi fogdában és a határátkelőhelyeken.",
    "long": "Lettország 200 embert fogadott be humanitárius okokból, de több mint 5000 megakadályozott határátlépésről számoltak be, ami gyakorlatilag gyorsított visszatérést jelentett. Az embereket, beleértve a gyermekeket is, önkényesen tartóztatták le az átadásuk során. Egy októberi kutatás erőszakos visszatoloncolásokat dokumentált Fehéroroszországba, önkényes fogva tartást a határ ismeretlen területein, ami valószínűleg erőszakos eltűnésnek minősül, valamint kínzásnak és bántalmazásnak vetekedő eljárást, továbbá erőszakot és megtévesztést a származási országba történő visszaküldés érdekében. A leírások szerint a lett határőrök, akik ismeretlen tisztekkel dolgoztak együtt, a fő elkövetők voltak.",
    "url": "https://www.amnesty.org/en/location/europe-and-central-asia/latvia/report-latvia/"
  },
  {
    "id": "lithuania",
    "img": "Flag_of_Lithuania.png",
    "map": "",
    "name": "Litvánia",
    "subhead": "Rasszizmus Litvániában",
    "short": "A rasszizmus Litvániában főként negatív attitűdök és cselekedetek formájában jelentkezik azokkal szemben, akiket nem tekintenek etnikailag litvánnak, különösen, ha az idegen más fajhoz tartozik. Az Etnikai Tanulmányok Központja által nyújtott adatok szerint Litvániában a romák, csecsenek, menekültek és muszlimok a leginkább rosszallással találkoznak. Ezenkívül erőteljesen jelen vannak az antipolák érzelmek is Litvániában. Azonban a legújabb kutatások szerint maguk a litvánok toleránsnak vallják magukat.",
    "long": " A rasszizmus problémáját még mindig nem ismerik el széles körben, bár a kormány maga is erőfeszítéseket tesz a xenofóbia csökkentése érdekében Litvániában. A rasszizmus problémáját még mindig nem ismerik el széles körben, bár a kormány maga is erőfeszítéseket tesz a xenofóbia csökkentése érdekében Litvániában. Az Egyenlő Esélyek Törvénye 2000-es évek közepétől tiltja a közvetlen vagy közvetett diszkriminációt a faji vagy etnikai származás, nem, vallás, nemzetiség vagy más csoporthoz tartozás alapján. Litvánia tagja az alábbi nemzetközi egyezményeknek, amelyek a rasszizmus elleni küzdelmet célozzák: Kiegészítő Jegyzőkönyv a Kibertörvény egyezményéhez (2007 óta), Keretegyezmény a Nemzeti Kisebbségek Védelmére (2000 óta) és A Faji Megkülönböztetés Minden Formájának Felszámolásáról Szóló Egyezmény (1998 óta; Litvánia ellen nem fogadnak el egyéni panaszokat).",
    "url": "https://en.wikipedia.org/wiki/Racism_in_Lithuania"
  },
  {
    "id": "luxembourg",
    "img": "Flag_of_Luxemburg.png",
    "map": "",
    "name": "Luxemburg",
    "subhead": "Luxemburgban probléma a rasszizmus?",
    "short": "Az Európai Unió Alapjogok Ügynöksége 2018-ban Luxemburgot az EU második legraszistább országának nevezte. Ennek következtében civil társadalmi szervezetek vitát szerveztek Luxemburgban 2019. november 13-án. 2020. július 1-jén a Képviselőházban parlamenti vita zajlott a rasszizmusról, amikor egy határozati javaslatot terjesztettek elő az Egyenlő Bánásmód Központ (CET) nagyobb részvételének érdekében a döntéshozatalban, amely az összes diszkrimináció elleni harcot és az harmonikus együttélés előmozdítását célozta. ",
    "long": "François Bausch, korábbi belügyminiszter és jelenlegi miniszterelnök-helyettes, 2019-ben botrányt okozott, amikor a Gare negyedben a nigériai maffiát az illegális tevékenység fő okaként azonosította. A Grand-Ducale Rendőrség 2020. évi jelentése szerint két nyugat-afrikai származású személyt tartóztattak le júliusban, akik kokain- és marihuána-kereskedelemmel foglalkoztak. Egy másik esetben három Észak-Afrikai származású újraterjesztőt tartóztattak le ugyancsak kokain- és marihuána-kereskedelem miatt. Egy 2020 novemberében lezárult kétéves nyomozás során kábítószer-kereskedelem és pénzmosás miatt 15 személyt tartóztattak le. A rendőrség több kilónyi marihuánát, hasist és kokaint foglalt le, valamint jelentős összegeket és számos luxusautót. ",
    "url": "https://delano.lu/article/is-racism-a-problem-in-luxembo"
  },
  {
    "id": "moldova",
    "img": "Flag_of_Moldova.png",
    "map": "",
    "name": "Moldova",
    "subhead": "Diszkrimináció Moldovában",
    "short": "Moldovában az etnikai és vallási kisebbségekkel, leszbikusokkal, melegekkel, biszexuálisokkal, transzneműekkel és interszexuálisokkal (LMBTI), fogyatékkal élőkkel és másokkal szembeni előítéletek és negatív sztereotípiák magas szintje olyan környezetet teremt, amelyben az e csoportok elleni erőszak és visszaélések büntetlenül maradnak. ",
    "long": "Ebben a tájékoztatóban az Amnesty International bemutatja, hogy sok embert megakadályoznak abban, hogy alapvető jogait érvényesítse, vagy megfosztanak az emberi jogok megsértése miatti jogorvoslati lehetőségektől. A tájékoztató rávilágít a hatályos jogszabályokkal kapcsolatos aggodalmakra, beleértve az egyenlőség biztosításáról szóló új törvényt is, amelyet ki kell javítani, ha Moldova meg akar felelni a diszkrimináció megelőzésére vonatkozó nemzetközi kötelezettségeinek.",
    "url": "https://www.amnesty.org/en/documents/EUR59/006/2012/en/#:~:text=In%20Moldova%20high%20levels%20of%20prejudice%20and%20negative,abuse%20against%20these%20groups%20are%20committed%20with%20impunity."
  },
  {
    "id": "netherlands",
    "img": "Flag_of_Netherlands.png",
    "map": "",
    "name": "Hollandia",
    "subhead": "Törökország bekérette a holland nagykövetet egy hágai Korán-égetés miatt",
    "short": "A török külügyminisztérium kedden bekérette Hollandia ankarai nagykövetét, mert múlt vasárnap Hágában a Pegida nevű szélsőjobboldali szervezet hollandiai vezetője, Edwin Wagensveld széttépte, meggyújtotta és megtaposta a muszlimok szent könyvének, a Koránnak egy példányát – jelentette a TGRT Haber török hírtelevízió.A külügyi tárca közleményt adott ki az ügyben, amelyben a leghatározottabban elítélték az aljas támadást. ",
    "long": ". Mint írták: az, hogy ez a szent értékeinket sértő eset Svédországot követően ezúttal Hollandiában is megtörténik, egyértelműen bizonyítja, hogy az iszlamofóbia, a diszkrimináció és az idegenellenesség Európában már nem ismer határokat.Törökország azt várja a holland hatóságoktól, hogy folytassák le a szükséges eljárást az elkövetővel szemben, és hozzanak konkrét intézkedéseket a hasonló esetek elkerülése érdekében – tették hozzá.Múlt szombaton a stockholmi török nagykövetség közelében tartott tüntetésen egy iszlamofób párt vezetője égette el a Korán egy példányát.Erre az esetre reagálva Recep Tayyip Erdogan török elnök hétfőn kijelentette: nyilvánvaló, hogy Svédország nem várhatja el Törökország támogatását a NATO-csatlakozást illetően.",
    "url": "https://hirado.hu/kulfold/cikk/2023/01/24/torokorszag-bekerette-a-holland-nagykovetet-egy-hagai-koran-egetes-miatt"
  },
  {
    "id": "northenireland",
    "img": "Flag_of_NorthenIreland.png",
    "map": "",
    "name": "Észak-Írország",
    "subhead": "Terrorhullámot indított a véres vasárnap",
    "short": "41 évvel ezelőtt, 1972. január 30-án brit deszantosok máig vitatott okokból tüzet nyitottak az észak-írországi Londonderry városában felvonuló békés tüntetőkre, akik a katolikus kisebbség embertelen helyzetére akarták akciójukkal felhívni a figyelmet. Az összecsapásnak tizennégy halálos áldozata és sok sebesültje volt, a vérengzés pedig soha nem látott terrorhullámot indított el.",
    "long": "A helyiek által Ulsternek nevezett északír országrész a felekezeti villongások fészkévé vált, ahol a protestánsok politikai fölénye rövid idő alatt egyeduralommá nőtt. A katolikusok kiszorultak a közélet majd minden területéről, s a diszkrimináció hatására gettókba kényszerültek, amelynek határait a feszültebb időkben drótkerítés jelezte. A társadalom teljesen megosztottá vált, a két vallás hívei mindenfajta érintkezést kerültek egymással, szegregálódtak. Ezek után többször is ez az ellenszenv erőszakba torkollott, és véres háború vette kezdetét a katolikus és a protestáns lakosság között.",
    "url": "https://mult-kor.hu/20130130_terrorhullamot_inditott_a_veres_vasarnap?pIdx=2"
  },
  {
    "id": "macedonia",
    "img": "Flag_of_Macedonia.png",
    "map": "",
    "name": "Macedónia",
    "subhead": "Az ország amit körbeutálnak: Macedónia",
    "short": "A nyugat-balkáni állam, amellyel az összes szomszédjának kisebb-nagyobb problémája van, amelynek társadalma etnikailag, kulturálisan, politikailag és demográfiailag egyaránt szélsőségesen megosztott, amely a korábbi Jugoszlávia legszegényebb része volt, amelyet súlyos kivándorlás sújt, amelyben néhány éve valóságos polgárháború dúlt, és amely külső kényszer hatására a belügyeit érintő szerződéseket ír alá, sőt a saját nevét is megváltoztatja – mindez Macedónia.",
    "long": "A szocialista érában a macedóniai albán közösség gazdasági marginalizációja a jól fizető, biztonságos állami szférában való alulreprezentáltságukban nyilvánult meg. Albán nemzetiségű lakos ritkán kapott állást közigazgatásban, elhanyagolható volt a jelenlétük rendvédelmi szervekben, az egészségügy, valamint – mivel az anyanyelven történő tanulás lehetősége korlátozott volt – az oktatásban is. Demográfiai arányuknál szintén jóval alacsonyabb volt előfordulásuk a szekunder szektorban. A diszkrimináció az egyre növekvő számú albán lakosságot egyéb gazdasági ágak, elsősorban a kereskedelem illetve tágabban véve az egyéni vállalkozások irányába mozdította, emellett egyre népszerűbbé vált a külföldi munkavállalás is.",
    "url": "https://pangea.blog.hu/2021/12"
  },
  {
    "id": "norway",
    "img": "Flag_of_Norvegia.png",
    "map": "",
    "name": "Norvégia",
    "subhead": "Norvégiában diszkriminálják a sztriptíztáncosnőket",
    "short": "Míg a női sztriptíztáncosokat szórakoztatóipari előadó-kategóriába sorolják az adóhivatalnokok, addig a férfi sztriptíztáncosokat a művész adókategórián belül bírálják el. Ez azért hátrányos megkülönböztetés a nők számára, mert a két kategória külön adósávba esik.",
    "long": "A művész sokkal kevesebbet adózik, mint a szórakoztatóipari előadó, így például a Chippendale-fiúk csupán 15%-ot adóztak turnéjuk után, a sztriptíztáncosnők viszont 24%-ot. Norvégia nemek közti egyenlőségért felelős ombudsmanja aggódik a diszkriminatív adótörvények miatt, és felülvizsgálatot követel. Bár Norvégia a nemek közti egyenlőséget szabályozó törvényei nagyon szigorúak, az adózási törvénybe mégis anomáliák csúsztak. Kristin Mile ombudsman elmondta, hogy ki fogják vizsgálni annak ügyét, hogy adóhivatalnokok miért sértik meg az ide vonatkozó törvényeket, és miért sorolják a Chippendale-fiúk munkáját magasabb kategóriába, mint a pontosan ugyanolyan munkát végző sztriptíztáncosnőkét.",
    "url": "https://www.origo.hu/itthon/20021129norvegiaban.html"
  },
  {
    "id": "poland",
    "img": "Flag_of_Poland.png",
    "map": "",
    "name": "Lengyelország",
    "subhead": "Kirúgták egy alkalmazottjukat, aki a melegjogok melletti kiállást kritizálta",
    "short": "Meglehetősen furcsa történetbe keveredett a lengyelországi IKEA. A cég ellen ügyészségi vizsgálat indul, vezető kormánypolitikusok pedig bojkottot emlegetnek, miután a vállalat kirúgta egyik alkalmazottját, aki a melegek jogai melletti kiállásukat kritizálta – írta a Bloomberg. Az elbocsátott dolgozó, Tomasz K. a TVP Info hírcsatornának azt mondta: azután váltak meg tőle, hogy nem volt hajlandó kitörölni egy kommentet a belső levelezésről, amelyet egy LGBT-mozgalmat támogató céges rendezvény alatt posztolt.",
    "long": "Tomasz szerint a kommentben a Bibliából idézett, és annyit írt: „azért vettek fel, hogy bútorokat adjak el, de én katolikus vagyok, és ezek nem az én értékeim”. A férfi tehát azt állítja, hogy nem szidalmazott senkit és nem tett semmi törvénysértőt, csak kiállt értékei mellett, mégis kirúgták. Az IKEA szóvivője közleményében azt írta, hogy céges kultúrájuk a „szabadságon, tolerancián és az alkalmazottaik iránti tiszteleten alapul”, és lépniük kell, amikor úgy látják, hogy az alkalmazottaik méltósága veszélybe kerülhet. Tomasz K. posztja pedig pontosan ilyen volt. A lengyel közvélemény azonnal felkapta az esetet, és a kormány is közbelépett: az ügyészség már be is jelentette, hogy vizsgálatot indít a svéd cég ellen. ",
    "url": "https://hvg.hu/gazdasag/20190629_Diszkriminacio_vagy_melegjogok_vedelme_Ossztuz_ala_kerult_a_lengyel_IKEA"
  },
  {
    "id": "portugal",
    "img": "Flag_of_Portugal.png",
    "map": "",
    "name": "Portugália",
    "subhead": "Portugáliában megnőtt a rasszista erőszakos cselekmények száma",
    "short": "Portugáliában aggasztóan megszaporodtak a rasszista támadások, amelyek közül néhány súlyos következményekkel járt. Mamadou Ba, az antirasszista szervezet vezetője is kapott fenyegető levelet és lőhüvelyt. Az Európai Hálózat a Rasszizmus Ellen (ENAR) azonnali intézkedéseket sürget. Több esetben színesbőrű embereket támadtak meg, például egy fekete színészt, akit explicitan rasszista indíttatású bűncselekmény áldozatává tettek.",
    "long": "Az ENAR szerint a szélsőjobboldali Chega párt megjelenése erősítette a rasszista támadásokat, mivel vezetője, André Ventura nyíltan kifejezi a gyűlöletet és a rasszista nézeteket. A Chega vezetője ellentüntetéseket szervezett az antirasszista mozgalom ellen. Az erőszak normalizálódása és a rasszista beszéd politikai-intézményesítése aggodalmat vált ki az aktivistákban. Azonban a diszkriminációval kapcsolatos panaszok esetében alig történik bűnös ítélet, ami további aggodalomra ad okot. A helyzetet súlyosbítja, hogy sokan támogatják a szélsőjobboldali pártot, amely politikai elit elleni támadásokat hirdet, miközben a bűnözés csökkenése ellentétben áll a párt által képviselt nézetekkel.",
    "url": "https://www.theguardian.com/world/2020/sep/28/portugal-sees-surge-in-racist-violence-as-far-right-rises"
  },
  {
    "id": "romania",
    "img": "Flag_of_Romania.png",
    "map": "",
    "name": "Románia",
    "subhead": "Nemzetisége miatt törölte egy romániai férfi szállásfoglalását egy hollandiai hotel",
    "short": "Romániakat nem fogadnak! Nemzetisége miatt törölte egy romániai férfi szállásfoglalását egy hollandiai hotel. Ami pedig talán még ennél is súlyosabb: azt állították, hogy mindezt a helyi önkormányzat tanácsára tették. Alexandru Hegyi közösségi oldalán osztotta meg a történteket, amely ügyben a romániai és a hollandiai hatóságok is vizsgálódnak.",
    "long": "„Ez felháborító!” – írta személyes Facebook-oldalán Alexandru Hegyi azok után, hogy egy hollandiai hotel pár napja a nemzetisége miatt törölte a szállásfoglalását. Mint részletezte: Tilburgba készült utazni, és a Booking.com-on foglalt szállást. „Megerősítették a foglalásomat, de később küldtek egy üzenetet arról, hogy a romániaiakat nem látják szívesen és ezért törölték a foglalásom” – osztotta meg panaszát az érintett szálláshely időközben már törölt Facebook-oldalán is. Mivel késő délután volt, egy másik városba kellett autóznia, hogy éjszakára szállást találjon magának. A szálloda ráadásul azt állította, hogy megállapodásuk van a tilburgi önkormányzattal arról, hogy tiltsák ki a romániaiakat a szállodájukból. ",
    "url": "https://maszol.ro/kulfold/Gusztustalan-diszkriminacio-nemzetisege-miatt-onkormanyzati-megallapodasra-hivatkozva-torolte-egy-romaniai-ferfi-szallasfoglalasat-egy-hollandiai-hotel"
  },
  {
    "id": "serbia",
    "img": "Flag_of_Serbia.png",
    "map": "",
    "name": "Szerbia",
    "subhead": "A szerb elnök fejében megfordult, hogy pénteken kidobja a nyugati közvetítőket",
    "short": "A szerb elnök, Aleksandar Vučić, hétfőn a televízióban beszélt a nyugati tervről, amelyet pénteken jelentettek be. A tíz pontos francia-német tervben a szerbeknek kellemetlen fejleményekkel kell szembenézniük, de Vučić egy jó hírről is beszámolt: újabb aranybányát találtak Szerbiában. A terv preambuluma kijelenti, hogy a béke megőrzésének három alapvető feltétele van: a határok sérthetetlensége.",
    "long": "A határok sérthetetlensége, a nemzeti kisebbségek védelme, valamint a területi integritás és a szuverenitás tiszteletben tartása. A terv nem mondja ki nyíltan, hogy Szerbiának el kell ismernie Koszovó függetlenségét, de az első kilenc pont Koszovót úgy kezeli, mintha már független lenne. A tervben szerepel, hogy Szerbiának és Koszovónak kölcsönösen el kell ismernie a vonatkozó dokumentumokat és nemzeti szimbólumokat. A felek egyetértenek abban, hogy határok lesznek Szerbia és Koszovó között, és támogatják egymás törekvését az Európai Unió tagjává válásra.",
    "url": "https://balk.hu/2023/01/24/a-nyugati-terv-szerb-elnok/"
  },
  {
    "id": "slovakia",
    "img": "Flag_of_Slovakia.png",
    "map": "",
    "name": "Szlovákia",
    "subhead": "Szlovákiában még mindig él és virul az etnikai diszkrimináció",
    "short": "Szlovákiában jelenleg is problémát jelent az etnikai diszkrimináció, és az Európai Unió (EU) is figyelmen kívül hagyja az országban történő visszamenőleges földkisajátításokat. A Politico nevű hírportál szerint a közép-európai társadalmakat továbbra is a történelem szelleme kíséri. Szlovákiában továbbra is történelmi igazságtalanságok fosztják meg az embereket az alapvető emberi jogoktól.",
    "long": "Az elmúlt években Szlovákia újraélesztett egy jogi eljárást, az ún. Beneš-dekrétumokat, amelyek azon eredeti céljából származnak, hogy elkobozzák azok vagyonát, akik a második világháború idején német vagy magyar nemzetiségűnek vallották magukat. Ezek a dekrétumok a két etnikumot kollektív felelősség alá vonták a háborús pusztításokért. Azonban még ennél is aggasztóbb, hogy ezt a gyakorlatot jelenleg az Európai Unió közönye közepette folytatják, pedig az EU-nak meg kellene védenie a polgárait az ilyen visszaélésektől. A Beneš-dekrétumok a cseh és a szlovák jogrendszer részét képezik, még azután is, hogy 2004-ben ezeket az országokat felvették az EU-ba.",
    "url": "https://mandiner.hu/cikk/20221028_kovacs_balazs_velemeny_szlovakia_diszkriminacio_etnika_fold_kisajatitas_kulfold_benes_dekretumok"
  },
  {
    "id": "slovenia",
    "img": "Flag_of_Slovenia.png",
    "map": "",
    "name": "Szlovénia",
    "subhead": "A melegházasság elfogadása felé tett nagy lépést Szlovénia",
    "short": "Korábban már engedélyezte ezt a parlament, de egy katolikus szervezet kezdeményezte népszavazás elsöpörte e jogot.Nem egyeztethető össze az alkotmánnyal az azonos neműek házasságának és a gyermek örökbefogadásának tilalma a szlovén alkotmánybíróság szerint – jelentette pénteken a szlovén közszolgálati televízió (RTV) az MTI szerint.",
    "long": "Az alkotmánybíróság kimondta, hogy az a törvény, ami előírja, hogy csak két különböző nemű ember köthet házasságot, és a bejegyzett élettársi kapcsolatban élő azonos nemű párok nem fogadhatnak örökbe közösen gyermeket, nem egyeztethető össze az alkotmánnyal. A testület hat hónapot adott a parlamentnek, hogy módosítsa a diszkriminatív jogszabályt. Az alkotmánybíróság két azonos nemű házaspár panasza alapján tárgyalt az ügyben. A pároknak nem engedélyezték a házasságkötést az anyakönyvi hivatalban, és nem kerülhettek fel az örökbefogadásra jelentkező szülők listájára.",
    "url": "https://24.hu/kulfold/2022/07/08/meleghazassag-szlovenia-alkotmanybirosag/"
  },
  {
    "id": "spain",
    "img": "Flag_of_Spain.png",
    "map": "",
    "name": "Spanyolország",
    "subhead": "Súlyosan megrótta Spanyolországot az ENSZ az emberi jogok megsértése miatt",
    "short": "A Polgári és Politikai Jogok Nemzetközi Egységokmányának betartatásáért felelős ENSZ Emberi Jogi Tanácsa július 23-án adta ki a Spanyolország időszaki felülvizsgálata nyomán készült jelentést. A jelentés többrendbelileg visszhangozza a Nemzetközi Jogok Spanyolország által készített árnyékjelentés észrevételeit és ajánlásait, hangsúlyozva a jelenlegi kormány intézkedései jelentette fenyegetést az emberi jogokra nézve.",
    "long": "A tanács sérelmezi, hogy nem hoztak megfelelő intézkedéseket a faji és az etnikai diszkrimináció ellen. Külön említi a faji és etnikai diszkrimináció felszámolásával foglalkozó tanács alkalmatlanságát (amely testületnek a tanács szerint több anyagi eszközt és önállóságot kellene kapnia), valamint a rendőrség által alkalmazott etnikai profilalkotás gyakorlatát. Civil szervezetek is lehetőséget kaptak arra, hogy részt vegyenek az Emberi Jogi Tanács által lefolytatott vizsgálatban. A Nemzetközi Jogok Spanyolország is hozzájárult a Spanyolország 6-dik időszaki felülvizsgálatához.",
    "url": "https://www.liberties.eu/hu/stories/sulyos-megrovas-spanyolorszag-emberi-jogok-ensz/4899"
  },
  {
    "id": "sweden",
    "img": "Flag_of_Sweden.png",
    "map": "",
    "name": "Svédország",
    "subhead": "Elítélték a „férfimentes” svéd fesztivált, diszkrimináció miatt",
    "short": "Megsértették a diszkriminációellenes svéd törvényeket a nyáron tartott Statement fesztivál szervezői, amikor az esemény úgy hirdették meg, hogy az „férfiaktól mentes” lesz – jelentette a The Local svéd kiadása. Erről a héten döntött a svéd diszkriminációs ombudsman. Az eseményt a nyáron tartották Göteburg városában. A szervezők a „férfimentes” zenei fesztivált azután hirdették meg, hogy aggasztóan sok nemi erőszak történt svédországi fesztiválokon, nagy botrányt kiváltva az országban.",
    "long": "A szervezők egy olyan eseményt akartak, ahol a nők biztonságban érezhetik magukat a szexuális zaklatásokkal szemben. Ahol nem kell azon aggódniuk, hogy valaki bántalmazni fogja őket – mondta el még az esemény előtt a fesztivált életre hozó humorista, Emma Knyckare a The Localnak. Az ombudsmani hivatal arra nem talált bizonyítékot, hogy a fesztiválról tényleg ki lettek volna a férfiak, hogy bárkit is elküldtek volna, vagy nem tudott volna jegyet venni, csak azért, mert férfinak született, és férfinak is vallja magát. Ugyanakkor a fellépőkkel együtt érkezett férfiak, valamint a férfi műszaki dolgozók és a férfi menedzserek a beszámolók szerint csak egy színpad mögötti „férfikarámban” tartózkodhattak.",
    "url": "https://24.hu/elet-stilus/2018/12/19/eliteltek-a-ferfimentes-sved-fesztivalt-diszkriminacio-miatt/"
  },
  {
    "id": "switzerland",
    "img": "Flag_of_Switzerland.png",
    "map": "",
    "name": "Svájc",
    "subhead": "Svájcban mégjobban észrevehető a rasszizmus",
    "short": "Az elmúlt években jelentősen megnőtt a bejelentett diszkriminációs esetek száma, különösen a fiatalabb korosztály körében. A 15 és 24 éves korosztály 40%-a (+2%), valamint a 25 és 39 évesek 39%-a (+4%) tapasztalt diszkriminációt az elmúlt öt évben. A foglalkoztatással kapcsolatos panaszok dominálnak a diszkriminációs esetek között. Az esetek számának növekedése azt mutatja, hogy nőtt a rasszista diszkriminációra való nagyobb figyelem. ",
    "long": "Az interneten és a közösségi médiában különösen elterjedt a rasszista gyűlöletbeszéd és az összeesküvés-elméletek terjedése. A COVID-19 járvány hatására különösen megnőtt az antiszemita összeesküvés-elméletek terjedése. A hatékony ellenintézkedések azonban még kezdeti fejlesztési és bevezetési szakaszban vannak. A kormánynak, a civil társadalomnak, az internetezőknek és a platformüzemeltetőknek összehangoltan kell dolgozniuk a biztonságos, diszkriminációtól mentes és rasszizmusmentes online környezet megteremtése érdekében. A lakosság többsége (58%) súlyos társadalmi problémaként tekint a rasszizmusra, és közel egyharmaduk úgy gondolja, hogy több erőfeszítést kell tenni a probléma kezelésére.",
    "url": "https://www.admin.ch/gov/en/start/documentation/media-releases.msg-id-85000.html"
  },
  {
    "id": "turkey",
    "img": "Flag_of_Turkey.png",
    "map": "",
    "name": "Törökország",
    "subhead": "Törökország bekérette a holland nagykövetet egy hágai Korán-égetés miatt",
    "short": "A török külügyminisztérium kedden bekérette Hollandia ankarai nagykövetét, mert múlt vasárnap Hágában a Pegida nevű szélsőjobboldali szervezet hollandiai vezetője, Edwin Wagensveld széttépte, meggyújtotta és megtaposta a muszlimok szent könyvének, a Koránnak egy példányát – jelentette a TGRT Haber török hírtelevízió.A külügyi tárca közleményt adott ki az ügyben, amelyben a leghatározottabban elítélték az aljas támadást. ",
    "long": ". Mint írták: az, hogy ez a szent értékeinket sértő eset Svédországot követően ezúttal Hollandiában is megtörténik, egyértelműen bizonyítja, hogy az iszlamofóbia, a diszkrimináció és az idegenellenesség Európában már nem ismer határokat.Törökország azt várja a holland hatóságoktól, hogy folytassák le a szükséges eljárást az elkövetővel szemben, és hozzanak konkrét intézkedéseket a hasonló esetek elkerülése érdekében – tették hozzá.Múlt szombaton a stockholmi török nagykövetség közelében tartott tüntetésen egy iszlamofób párt vezetője égette el a Korán egy példányát.Erre az esetre reagálva Recep Tayyip Erdogan török elnök hétfőn kijelentette: nyilvánvaló, hogy Svédország nem várhatja el Törökország támogatását a NATO-csatlakozást illetően.",
    "url": "https://hirado.hu/kulfold/cikk/2023/01/24/torokorszag-bekerette-a-holland-nagykovetet-egy-hagai-koran-egetes-miatt"
  },
  {
    "id": "ukraine",
    "img": "Flag_of_Ukraine.png",
    "map": "",
    "name": "Ukrajna",
    "subhead": "Durva diszkrimináció Ukrajnában a magyar kisebbség ellen",
    "short": "Volodimir Zelenszkij ukrán elnök rendelete értelmében, a jövőben sem állami, sem önkormányzati hivatalt nem tölthetnek be a magyar állampolgársággal is rendelkező kárpátaljai magyarok – ahogy pártok tagjai és stratégiai  fontosságú állami vállalatok vezetői sem lehetnek. Hivatalosan nem tudni, hány ukrán-magyar kettős állampolgár van, az adatot a magyar kormány nem hozza nyilvánosságra. ",
    "long": "A Telex cikke szerint a rendeletben az is szerepel, hogy az ukrán nemzetbiztonság listázni fogja az ukrán-magyar kettős állampolgárokat. A 444 ezzel kapcsolatban megjegyzi, hogy a rendelet minden eddiginél durvább diszkriminációt jelent a magyar kisebbséggel szemben, hiszen Kárpátalján szinte mindenkinek van magyar állampolgársága is. A rendeletet ugyan elsősorban a kelet-ukrajnai orosz-ukrán kettős állampolgárokra írták, bár Olekszij Danilov, az ukrán Nemzetbiztonsági és Védelmi Tanács titkára korábban már mondott olyat, hogy nem Oroszország az egyetlen ország, amely fenyegeti Ukrajnát – ezzel Magyarországra utalva. ",
    "url": "https://hirklikk.hu/kozelet/durva-diszkriminacio-ukrajnaban-a-magyar-kisebbseg-ellen/378037/"
  },
  {
    "id": "unitedkingdom",
    "img": "Flag_of_GB.png",
    "map": "",
    "name": "Egyesült Királyság",
    "subhead": "Az Egyesült Királyságban is küzdenek a diszkrimináció ellen",
    "short": "A színesbőrűeket a járvány idején is hátrányos megkülönböztetés érte a szigetországban.A világ számos városához hasonlóan Londonban is tízezrek tüntettek többször is a rasszizmus ellen az utóbbi napokban. Sokan úgy vélik, hogy Nagy-Britanniában is fontos felemelni szavukat a faji megkülönböztetés ellen. ",
    "long": "A demonstrációk szervezői azzal vádolják a rendőröket, hogy a koronavírus-járvány idején sokkal szigorúbban jártak el a feketékkel szemben, amikor ellenőrizték a lakhelyelhagyási tilalom betartását. A demonstrációk szervezői azzal vádolják a rendőröket, hogy a koronavírus-járvány idején sokkal szigorúbban jártak el a feketékkel szemben, amikor ellenőrizték a lakhelyelhagyási tilalom betartását. A büntetések 31 százalékát színes bőrűek kapták, miközben arányuk csak 12% London lakosságában. George Floyd tragikus halála váltotta ki a tüntetéseket az Egyesült Királyságban, de a demonstrációk már csaknem két hete tartanak. Sokan elérkezettnek látták az időt, hogy nyomást gyakoroljanak a brit kormányra: tegyen többet a diszkrimináció ellen.",
    "url": "https://hu.euronews.com/2020/06/09/az-egyesult-kiralysagban-is-kuzdenek-a-diszkriminacio-ellen"
  }
];


let hely = window.location.href.substring(window.location.href.indexOf('subpage.html#') + 13);
const hova = document.getElementById('submain')
countryList.forEach(element => {
  if (element.id == hely) {
    hova.innerHTML = `
     <div class="title">
            <h3>${element.name}</h3>
            <h1>${element.subhead}</h1>
      </div>
        

        <div class="parallax-one" >
            <h2>Discrimination</h2>
        </div>
        

        <div class="block">
            <p class="line-break"></p>
            <p class="first-character">${element.short}</p>
            
            <p>${element.long}</p>
            <p class="line-break "></p>
        </div>
        <div class="parallax-two">
            <h2></h2>
        </div>
        `
    
  }
});
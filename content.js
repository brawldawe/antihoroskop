// ============================================================
// CONTENT.JS - VŠECHNY TEXTY PRO ANTIHOROSKOP
// ============================================================
// Tento soubor obsahuje VŠECHNY texty, které se generují na webu:
// znamení, vlastnosti, horoskopy, tarot karty, kostky osudu, atd.
//
// JAK UPRAVOVAT:
// - Text vždy piš mezi uvozovky "takto" nebo 'takto'
// - Pokud text obsahuje uvozovky uvnitř, použij druhý typ uvozovek
//   nebo je "escapuj" zpětným lomítkem: \"takto\"
// - Každá položka v seznamu [...] musí být oddělena čárkou
// - NEMAZAT čárky, hranaté [ ] a složené { } závorky - jen měň text uvnitř uvozovek!
// - Po úpravě ulož soubor a obnov stránku v prohlížeči (F5)
//
// STRUKTURA SOUBORU (v pořadí, jak jsou uvedeny níže):
// 1. SIGNS            - seznam znamení (název, datum, ikona) - needit bez důvodu
// 2. SIGN_TRAITS       - "obecné vlastnosti" znamení (zobrazené v kartách znamení)
// 3. VERDICTS          - obecné "verdikty" na úvod měsíčního horoskopu
// 4. LOVE               - texty pro kategorii "Vztahy"
// 5. WORK               - texty pro kategorii "Práce"
// 6. HEALTH             - texty pro kategorii "Zdraví"
// 7. MONEY              - texty pro kategorii "Peníze"
// 8. SIGN_FLAVOR        - texty na míru pro konkrétní znamení ("Vaše povaha")
// 9. GENDER_LINES       - texty podle pohlaví (muž/žena/jiné)
// 10. INCOMPAT_CATEGORIES - kategorie a důvody nekompatibility pro "% lásky"
// 11. INCOMPAT_LEADS     - úvodní hlášky pro výsledek "% lásky"
// 12. TAROT_CARDS        - tarotové karty (název, text, obrázek)
// 13. DICE_RESULTS       - texty pro "kostky osudu" (co znamená každé číslo 1-6)
// 14. DICE_BG_HINT        - text na pozadí při hodu (jen pro 1 a 6 -> "NE"/"ANO")
// 15. DICE_QUIPS          - krátký komentář ke každému hodu kostkou
// ============================================================

const SIGNS=[
  {id:'beran',name:'Beran',range:'21. 3. – 19. 4.',start:[3,21],end:[4,19],icon:'M16 8c-4 0-7 3-7 7 0 2 1 4 3 6M16 8c4 0 7 3 7 7 0 2-1 4-3 6M16 8V4M11 20l5-5 5 5'},
  {id:'byk',name:'Býk',range:'20. 4. – 20. 5.',start:[4,20],end:[5,20],icon:'M10 10c0-4 3-6 6-6M22 10c0-4-3-6-6-6M10 10c1 2 3 3 6 3s5-1 6-3M10 18a6 6 0 1012 0a6 6 0 10-12 0'},
  {id:'blizenci',name:'Blíženci',range:'21. 5. – 20. 6.',start:[5,21],end:[6,20],icon:'M10 6v20M22 6v20M7 6h18M7 26h18'},
  {id:'rak',name:'Rak',range:'21. 6. – 22. 7.',start:[6,21],end:[7,22],icon:'M10 11a3 3 0 110 6a5 5 0 005-5M22 21a3 3 0 110-6a5 5 0 00-5 5'},
  {id:'lev',name:'Lev',range:'23. 7. – 22. 8.',start:[7,23],end:[8,22],icon:'M12 10a5 5 0 118 5c0 3-2 5-4 6c-2 1-3 3-2 5M22 24c2 0 4 1 4 3'},
  {id:'panna',name:'Panna',range:'23. 8. – 22. 9.',start:[8,23],end:[9,22],icon:'M9 7v13M15 7v13M21 7v13M9 20a3 3 0 006 0M15 20a3 3 0 006 0M21 20c0 3 2 5 5 5'},
  {id:'vahy',name:'Váhy',range:'23. 9. – 22. 10.',start:[9,23],end:[10,22],icon:'M6 22h8M18 22h8M16 6v16M8 14a4 4 0 108 0M16 14a4 4 0 108 0'},
  {id:'stir',name:'Štír',range:'23. 10. – 21. 11.',start:[10,23],end:[11,21],icon:'M8 8v12M14 8v12M20 8v12M20 20h4l3-3M24 17v4'},
  {id:'strelec',name:'Střelec',range:'22. 11. – 21. 12.',start:[11,22],end:[12,21],icon:'M8 24L24 8M24 8h-7M24 8v7'},
  {id:'kozoroh',name:'Kozoroh',range:'22. 12. – 19. 1.',start:[12,22],end:[1,19],icon:'M8 9v10c0 3 2 5 5 5s5-2 5-5V9M18 9v10c0 3 2 5 5 5a5 5 0 005-5c0-3-2-5-5-5h-1'},
  {id:'vodnar',name:'Vodnář',range:'20. 1. – 18. 2.',start:[1,20],end:[2,18],icon:'M4 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0M4 20c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0'},
  {id:'ryby',name:'Ryby',range:'19. 2. – 20. 3.',start:[2,19],end:[3,20],icon:'M4 10c8 0 8 12 16 12M28 10c-8 0-8 12-16 12M4 20h24'}
];

const SIGN_TRAITS={
  beran:["Notoricky netrpělivý a impulzivní. Jedná dřív, než přemýšlí.","Vznětlivý a soutěživý až k vyčerpání okolí.","Nejdřív je hravý, a když to začne být zajímavé, najednou nic nechápe","Sobecky si prosazuje svou vůli bez ohledu na ostatní.","Rychle ho nadchne cokoli nové a stejně rychle ho to zase omrzí."],
  byk:["Pověstně tvrdohlavý – jednou rozhodnuto, navěky rozhodnuto.","Lpí na majetku a jistotách víc, než je zdrávo.","Pomalý na změny a alergický na cokoli nečekaného.","Umí být nepříjemně žárlivý a majetnický."],
  blizenci:["Povrchní a nestálý – nikdy nevíte, kterého dvojníka právě potkáváte.","Mluví víc, než jedná, a slova často nemají váhu.","Snadno se nudí a stejně snadno opustí to, co začal.","Bývá vypočítavý a říká každému něco jiného."],
  rak:["Přecitlivělý až na pokraj hysterie, urazí se kvůli ničemu.","Nadměrně lpí na minulosti a nedokáže ji pustit.","Náladový a nevyzpytatelný – nikdy nevíte, co čekat.","Uzavírá se do sebe a trestá okolí mlčením."],
  lev:["Egocentrický a potřebuje být neustále obdivován.","Nesnese kritiku a hraje uraženou drama-queen.","Okatě předvádí svůj majetek a úspěchy, i když nemusí.","Tvrdohlavě si stojí za svým, i když je zjevně vedle."],
  panna:["Přehnaně kritický k sobě i ke všem kolem.","Puntičkářský workoholik, který nedokáže relaxovat.","Věčně nespokojený perfekcionista, kterému nic není dost dobré.","Úzkostně kontroluje detaily a otravuje tím okolí."],
  vahy:["Chronicky nerozhodný – neumí si vybrat ani mezi dvěma kávami.","Vyhýbá se konfliktům tak dlouho, až problém přeroste přes hlavu.","Povrchně příjemný, ale často neupřímný, jen aby se zalíbil.","Závislý na cizím názoru, protože vlastnímu nevěří."],
  stir:["Podezíravý a mstivý – nic neodpustí a nic nezapomene.","Manipulativní a rád tahá za nitky ze stínu.","Nedokáže pustit staré křivdy, i když už dávno nikoho nezajímají.","Extrémně žárlivý a vlastnický ve vztazích."],
  strelec:["Nezodpovědný dobrodruh, který uteče od problémů, ne k jejich řešení.","Netaktní přímost hraničí s hrubostí.","Slibuje víc, než je ochoten nebo schopen splnit.","Neklidný a nestálý – závazky ho děsí."],
  kozoroh:["Pesimistický workoholik, pro kterého je práce důležitější než lidé.","Příjme vás s otevřenou náručí, jen aby vás v zápětí mohl ingnorovat, jako byste neexistovali.","Chladný a odměřený, city dává najevo jen zřídka.","Přehnaně ambiciózní na úkor všeho ostatního v životě.","Skeptický ke všemu novému a nedokáže se bavit bez plánu."],
  vodnar:["Odtažitý samotář, který se emocím spíš vyhýbá než je řeší.","Hraje si na hodného, zatímco v duchu doufá, že všichni kolem něj zmizí","Rebeluje jen proto, aby rebeloval, i bez důvodu.","Nepředvídatelný do té míry, že mu nikdo nevěří.","Intelektuálně povýšený a citově nedostupný."],
  ryby:["Věčný snílek, který utíká od reality místo jejího řešení.","Přehnaně obětavý až k sebezničení, nedokáže odmítat.","Chaoticky nespolehlivý a věčně zmatený v termínech.","Snadno podlehne sebelítosti a utápí se v smutku."]
};

const VERDICTS = [
  // Původní hlášky
  "Tento měsíc se lépe rovnou schovejte.",
  "Je jedno, jaký je měsíc. Tenhle váš to taky není.",
  "Připravte se na měsíc, který si nebudete chtít pamatovat.",
  "Vesmír vás tento měsíc ignoruje – a je to vzájemné zklamání.",
  "Nic z toho, co plánujete, nedopadne podle plánu.",
  "Tento měsíc je zkouška vaší tolerance k neúspěchu.",
  "Nic zajímavého tento měsíc nečekejte, takže vlastně váš průměrný život.",
  "Hvězdy se tento měsíc otočily jinam. Chápeme je.",
  "Čeká vás měsíc plný rozhodnutí, která budete litovat.",
  "Optimismus si tento měsíc nechte pro jiné.",
  "Tento měsíc bude jako špatně naladěné rádio – jen šum a rušení.",
  "Kalendář vám tento měsíc nabídne víc problémů než dní.",
  "Tentokrát to nebude o štěstí, ale o tom, jak málo ho máte.",
  "Měsíc, který si zaslouží rovnou přeskočit.",
  "I ta nejnižší očekávání budou tento měsíc příliš vysoká.",
  "Tento měsíc se karma rozhodla vyrovnat účty – bohužel s vámi.",
  "Nic velkého se nestane, jen spousta malých zklamání za sebou.",
  "Tento měsíc raději nic neplánujte, ať nemáte co zrušit.",
  
  // Nově přidané hlášky (gramaticky a stylisticky upravené)
  "I když se budete snažit, aby se vaše přání vyplnilo, čeká vás jen tvrdý návrat do reality.",
  "Můžete předstírat, že je vám celá situace ukradená, ale v hloubi duše stejně marně doufáte ve změnu.",
  "I když budete počítat s tím nejhorším možným scénářem, stejně se stane něco, co jste vůbec nečekali.",
  "Až se ocitnete před rozhodnutím, spolehněte se, že si stejně vyberete tu nejhorší variantu.",
  "Jakmile to začne vypadat, že se situace konečně zlepší, dostanete od života další facku."
];

const LOVE=[
  "Vaše vztahy tento měsíc nabírají směr přímo do zdi.",
  "Kdo vás má rád, brzy zapochybuje, proč vlastně.",
  "Romantika se tento měsíc vydala na dovolenou bez vás.",
  "Očekávejte hádku o něco, na čem vám ve skutečnosti nezáleží.",
  "Někdo blízký vás tento měsíc citelně zklame – a vy jeho.",
  "Osamělost bude tento měsíc váš nejvěrnější společník.",
  "Vaše zprávy zůstanou nepřečtené déle, než je zdrávo.",
  "Flirtování tento měsíc skončí jen rozpačitým tichem.",
  "Staré nedořešené spory se tento měsíc vrátí v plné síle.",
  "Někdo vám tento měsíc slíbí víc, než kdy splní.",
  "Vaše trpělivost s blízkými bude tento měsíc na historickém minimu.",
  "Společné plány se tento měsíc rozpadnou přesně v tu nejhorší chvíli.",
  "Žárlivost nebo lhostejnost – tento měsíc si vyberete tu horší variantu.",
  "Rande, na které jste se těšili, dopadne přesně tak, jak jste se bál.",
  "Komunikace tento měsíc vázne přesně tam, kde by měla fungovat nejlépe.",
  "Váš vztahový status se tento měsíc nezmění – jen se zhorší nálada kolem něj.",
  "Když už to bude vypadat, že jste našli lásku svého života, zjistíte, že druhá osoba Vás nepovažuje ani za blízkého kamaráda.",
  "Budete se snažit udělat pro lásku první poslední, zatímco druhá osoba pro Vás neudělá vůbec nic. (i tak se budete snažit dál)",
  "Nikdy si nenajdete lásku svého života, nikdy si vás nikdo nevšimne, zůstanete sami.",
  "Budete nadále pokračovat ve své komfortní zóně, nikdy nikoho neoslovíte, nikdy si nikoho nenajdete, zůstanete sami.",
  "Budete mít takový strach z odmínutí, že nikdy s nikým nezačnete konverzaci a nikdy si tak nikoho nenajdete." 
   ];

const WORK=[
  "V práci vás čeká úkol, který nikdo jiný nechtěl.",
  "Vaše nápady tento měsíc skončí v koši, ne v prezentaci.",
  "Šéf si na vás tento měsíc konečně všimne – bohužel v ten špatný moment.",
  "Termíny se posunou, ale ne ve váš prospěch.",
  "Kolega si připíše vaši zásluhu a vy budete jen mlčky přikyvovat.",
  "Motivace vás tento měsíc opustí přesně tehdy, kdy ji budete nejvíc potřebovat.",
  "Porada, která měla trvat 15 minut, si vezme celé dopoledne.",
  "Váš pracovní e-mail se tento měsíc stane synonymem stresu.",
  "Přesčas, který jste neplánovali, se tento měsíc stane normou.",
  "Vaše kariérní postup si tento měsíc dá pauzu – dlouhou pauzu.",
  "Tiskárna, systém i internet vypoví službu přesně, když to nejméně potřebujete.",
  "Zpětná vazba, kterou dostanete, bude bolet víc, než jste čekali.",
  "Nový projekt vám tento měsíc přidělí práci navíc bez poděkování.",
  "Vaše soustředění bude tento měsíc trvat tak dlouho jako jedna notifikace.",
  "Kolegové budou tento měsíc mít lepší nápady rychleji než vy.",
  "Pracovní stres si tento měsíc najde cestu i do vašich večerů.",
  "Všichni ve vašem okolí berou více jak vy, ale stejně s tím nic neuděláte a budete dále pracovat v práci, která vás vůbec nenaplňuje.",
  "Nadále budete chodit do práce, která vás nebaví, nenaplňuje, ani za ní není moc peněz, a vy s tím vůbec nic neuděláte." ,
  "Jste tak neschopní, že si ani nedojdete za šéfem říct si o vyšší mzdu, takže budete nadále pracovat za směšnou mzdu.",
  "Jste tak nahraditelní, že kdybyste zítra do práce nepřišli, tak si toho ani nikdo nevšimne." ,
  "Nikoho v práci nezajímate, všichni jenom předstíraj, že o vašem nudném životě chtějí vědět víc."
];

const HEALTH=[
  "Spánek bude tento měsíc vzácnější než klid v hlavě.",
  "Bolest v kříži si tento měsíc řekne o vaši plnou pozornost.",
  "Vaše předsevzetí cvičit skončí už u druhého tréninku.",
  "Tělo si tento měsíc vezme přesně ten den dovolené, který jste plánovali jinak.",
  "Únava se tento měsíc stane vaším druhým jménem.",
  "Kávy bude potřeba víc, energie bude přesto míň.",
  "Nachlazení si vybere ten nejnevhodnější týden.",
  "Zrcadlo vám tento měsíc nebude dělat žádné komplimenty.",
  "Stres se tento měsíc usadí přímo ve vašich ramenech a nehne se odtud.",
  "Chuť na zdravé jídlo zmizí přesně tehdy, kdy ji budete nejvíc potřebovat.",
  "Vaše energie bude tento měsíc kolísat rychleji než počasí na horách.",
  "Migréna si tento měsíc najde cestu i do vašich nejlepších plánů.",
  "Ranní vstávání bude tento měsíc bojem, který pravidelně prohráváte.",
  "Sportovní odhodlání vydrží tak akorát do konce prvního týdne.",
  "Imunita si tento měsíc vezme dovolenou přesně na tu nejhorší chvíli.",
  "Duševní pohoda bude tento měsíc vzácnější než volný víkend.",
  "Řeknete, že příští den půjdete spát dřiv, ale deprese z toho, že ztratíte další část dne vás donutí jít zase spát pozdě.",
  "Každodenní sezení v práci se na Vás nenávratně podepíše." ,
  "Můžete se motivovat se začátkem cvičení jak chcete, stejně pro sebe nic neuděláte.",
  "Motivovat se k cvičení je pro vás stejně platné jak motivovat se k tomu, že začnete jíst zdravě, úplně k ničemu.",
  "Budete se točit furt v jednom bodě, nestane dávno očekáváné zlepšení, ale ani zhoršení, furt na nule, jako váš život."
];

const MONEY=[
  "Peněženka bude tento měsíc hubenější, než čekáte.",
  "Neplánovaný výdaj přijde přesně ve chvíli, kdy nejméně čekáte.",
  "Slevy, které jste čekali, se tento měsíc nedostaví.",
  "Účty přijdou dřív, výplata později.",
  "Investice, do které jste věřili, si tento měsíc odpočine v minusu.",
  "Impulzivní nákup vám tento měsíc zůstane jako trvalá připomínka.",
  "Rozpočet, který jste si naplánovali, vydrží tak do poloviny měsíce.",
  "Šetření tento měsíc prohraje na plné čáře s realitou.",
  "Nečekaná oprava si tento měsíc vezme přesně tu částku, kterou jste šetřili.",
  "Bankovní poplatky se tento měsíc objeví tam, kde jste je nečekali.",
  "Výhodná nabídka, na kterou jste čekali, tento měsíc zase nedorazí.",
  "Vaše finanční plány tento měsíc naruší jedna hloupá chyba v kalkulaci.",
  "Účet za energie tento měsíc podá lekci z matematiky, kterou jste nechtěli.",
  "Peníze, které jste chtěli ušetřit, tento měsíc padnou na něco zbytečného.",
  "Půjčka nebo dluh se tento měsíc připomene ve nejnevhodnější chvíli.",
  "Finanční klid si tento měsíc dejte z hlavy – nekoná se.",
  "Vaše impulzivní nákupy pro dokázání si, že jste na živu, opravdu nejsou pro vaši finanční situace správná volba.",
  "Nikdy nebudete mít peníze na to vlastnit svoji vlastní nemovitost.",
  "V dědickém řízení se celé vaše rodinné pouta rozpadnou.",
  "Tento měsíc se na Vás usměje štěstí a najdete na ulici peníze. 5 Kč. Pro někoho málo, pro vás dost.",
  "Můžete machrovat s vašim značkovým oblečením jak chcete, stejně to nikoho nezajímá."
];

const SIGN_FLAVOR={
  beran:[
    "Uvidíte něco, co vás rozčílí, a než se nadechnete, už budete reagovat – lítost přijde až později.",
    "Budete chtít mít poslední slovo v hádce, která vlastně nikam nevedla, a hlavně ne k vám.",
    "Ta netrpělivost, kterou znáte sami od sebe, vás dovede k rozhodnutí, které bude potřeba brzy vzít zpátky.",
    "Někdo vám bude chtít poradit, a vy to vezmete stejně jako vždycky – jako útok."
  ],
  byk:[
    "Budete si stát za svým i ve chvíli, kdy vám bude jasné, že se pletete – jen to nikomu nepřiznáte.",
    "Něco se změní, a vy budete mít pocit, jako by se vám sesypal celý svět.",
    "Bude vás štvát, že musíte znovu řešit to samé, co jste už jednou 'vyřešili'.",
    "Přijde chvíle, kdy budete chtít jen klid a jistotu, a dostanete přesně opak."
  ],
  blizenci:[
    "Řeknete něco, co druhý den ani nebudete myslet, ale ono to stejně zůstane viset ve vzduchu.",
    "Rozhodnete se pro něco a hned potom si budete přát, abyste se rozhodli jinak.",
    "Budete mít pocit, že mluvíte hodně, ale málokdo se dozví, co si vlastně skutečně myslíte.",
    "Něco vás nadchne na pár dní a pak to prostě přestane bavit, aniž byste přesně věděli proč."
  ],
  rak:[
    "Něco malého vás zraní víc, než by mělo, a budete to nosit v sobě déle, než je zdrávo.",
    "Budete si přehrávat starý rozhovor v hlavě, i když ho už dávno chcete pustit.",
    "Ozve se pocit, že vás nikdo doopravdy nechápe, i když se snažíte to nedávat najevo.",
    "Uzavřete se do sebe zrovna ve chvíli, kdy by vám nejvíc pomohlo mluvit."
  ],
  lev:[
    "Někdo si vás nevšimne tak, jak byste čekali, a bude vás to bolet víc, než si přiznáte.",
    "Budete chtít slyšet, že jste udělali dobře, a místo toho přijde jen ticho nebo kritika.",
    "Přiznat, že jste se spletli, půjde tento měsíc mimořádně těžko.",
    "Zjistíte, že ne všichni vás obdivují tak, jak jste si mysleli."
  ],
  panna:[
    "Uděláte si dlouhý seznam věcí, které musíte zvládnout, a stejně budete mít pocit, že to nestačí.",
    "Všimnete si chyby, kterou nikdo jiný neřeší, a ta drobnost vám nedá spát.",
    "Budete tvrdí na sebe víc, než byste kdy byli na kohokoli jiného.",
    "Pokusíte se mít vše pod kontrolou a přesně to vás vyčerpá nejvíc."
  ],
  vahy:[
    "Budete se rozhodovat mezi dvěma možnostmi tak dlouho, až se rozhodne za vás okolí.",
    "Řeknete něco, co si vlastně nemyslíte, jen abyste se vyhnuli hádce.",
    "Zjistíte, že snaha vyhovět všem znamená hlavně to, že sami zůstanete nespokojení.",
    "Někoho zklamete přesně v tu chvíli, kdy jste se snažili nezklamat nikoho."
  ],
  stir:[
    "Něco vás napadne o někom blízkém a budete tomu věřit dřív, než si to ověříte.",
    "Starou křivdu, kterou jste už měli pustit, si znovu vytáhnete – a bude to bolet znovu.",
    "Budete cítit potřebu mít nad situací kontrolu, a to vás nakonec vyčerpá víc než samotný problém.",
    "Někomu blízkému nedáte druhou šanci, i když by si ji možná zasloužil."
  ],
  strelec:[
    "Slíbíte něco ve chvíli nadšení a pak budete hledat způsob, jak z toho vycouvat.",
    "Uteče vás nutkání zmizet, zrovna když by bylo lepší zůstat a probrat to.",
    "Řeknete něco příliš přímo a všimnete si toho až podle reakce druhého.",
    "Zaváznete v rutině, která vás bude dusit rychleji, než čekáte."
  ],
  kozoroh:[
    "Práci postavíte znovu na první místo, a všimnete si toho, co jste tím obětovali, až později.",
    "Budete tvrdí sami na sebe za věc, kterou by vám jiný odpustil hned.",
    "Přijde chvíle, kdy budete chtít vše naplánovat, a stejně se nic nepovede podle plánu.",
    "Něco citového necháte úplně stranou, protože na to prostě 'nemáte čas'."
  ],
  vodnar:[
    "Budete potřebovat být sami, a nikdo kolem to nebude chápat – ani vy sami úplně.",
    "Uděláte něco proti proudu jen proto, abyste ukázali, že jste jiní.",
    "Někdo se vás zeptá na pocity a vy nebudete vědět, co vlastně odpovědět.",
    "Odtáhnete se od někoho blízkého přesně ve chvíli, kdy by stačilo zůstat."
  ],
  ryby:[
    "Utečete do vlastní hlavy zrovna ve chvíli, kdy je potřeba řešit něco skutečného.",
    "Slíbíte pomoc, na kterou nemáte sílu, a pak si budete připadat vinní za to, že jste to nezvládli.",
    "Něco vás rozteskní víc, než by si to daná situace zasloužila.",
    "Budete doufat, že se problém vyřeší sám, a mezitím se jen zhorší."
  ]
};

const GENDER_LINES={
  'muž':["Coby muž budete tento měsíc statisticky ještě víc ignorovat vlastní pocity, a bude to poznat.","Vaše okolí od vás bude tento měsíc čekat víc síly, než ve skutečnosti máte.","Tlak nezobrazovat slabost vás tento měsíc jen víc vyčerpá."],
  'žena':["Coby žena budete tento měsíc řešit o starost víc, aniž by si toho kdokoli všiml.","Očekávání okolí budou tento měsíc vyšší než vaše chuť jim vyhovět.","Nespravedlivé nároky na vás tento měsíc citelně dolehnou."],
  'jiné':["Vaše okolí vás tento měsíc bude nadále nesprávně zaškatulkovávat – s předvídatelně únavným výsledkem.","Nedostatek pochopení od okolí bude tento měsíc obzvlášť viditelný.","Cítit se nepochopeně bude tento měsíc vaší běžnou zkušeností."]
};

const INCOMPAT_CATEGORIES=[
  {
    key:'komunikace',
    label:'Komunikace',
    icon:'M21 11.5a8.5 8.5 0 01-11.9 7.8L3 21l1.7-6.1A8.5 8.5 0 1121 11.5z',
    reasons:[
      "Když se pohádáte, jeden hned chce probrat, co se stalo, a druhý potřebuje tři dny odstup – takže se stejně minete.",
      "Napíšete si zprávu a čekáte odpověď déle, než by bylo zdrávo, a pak si to oba vyloží úplně jinak.",
      "Po hádce si oba budete myslet, že jste to jasně řekli, a nikdo z vás ve skutečnosti neřekl nic.",
      "Vtip, který jeden myslí neškodně, si druhý odnese jako osobní urážku a bude si to pamatovat týdny.",
      "Slib 'probereme to, až budeme mít oba klid' se v realitě nikdy nesplní.",
      "Jeden chce mluvit o pocitech hned, druhý potřebuje být sám – výsledek je vzájemné nedorozumění.",
      "Budete si říkat, jak umíte spolu krásně komunikovat, jen abyste při větším konfliktu spolu už nikdy nepromluvili.",
      "Neměli jste s kým komunikovat většinu svého žiovta, myslíte si, že to najednou s tímhle člověkem začne fungovat?",
      "Komunikace neexistující, stejně jako budoucnost pro tento vztah.",
      "Nic vypisovat a vysvětlovat nebudu, stejně jako vy a váš vztah.",
      "Komunikace? Možná tak občasný lhaní o svých citech."
    ]
  },
  {
    key:'tempo',
    label:'Životní tempo',
    icon:'M12 8v4l3 3M12 3a9 9 0 100 18 9 9 0 000-18z',
    reasons:[
      "Jeden má hotový plán na víkend už ve středu, druhý ještě ve čtvrtek neví, co bude dělat.",
      "Co je pro jednoho vzrušující výlet bez plánu, je pro druhého noc beze spánku ze strachu.",
      "Jeden potřebuje mít každý den stejný, druhý se z rutiny začne dusit už po týdnu.",
      "Rozhodnutí, které jeden udělá impulzivně za minutu, bude druhý zvažovat celý týden.",
      "Jeden chce jet hned, druhý si ještě musí sbalit, zkontrolovat a přebalit – a hádka je na světě."
    ]
  },
  {
    key:'kontrola',
    label:'Svoboda a kontrola',
    icon:'M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z',
    reasons:[
      "Když se jeden zeptá 'kde jsi byl', druhý to slyší jako výslech, ne jako zájem.",
      "Jeden chce vědět, s kým jde druhý ven, a druhý to považuje za zbytečnou kontrolu.",
      "Večer o samotě si jeden potřebuje užít, druhý ho ihned interpretuje jako odmítnutí.",
      "Snaha jednoho o blízkost narazí na potřebu druhého mít prostor jen pro sebe.",
      "Volnost, kterou si jeden brání, druhý čte jako signál, že mu na vztahu nezáleží."
    ]
  },
  {
    key:'emoce',
    label:'Emoční nesoulad',
    icon:'M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5c2 0 3.5 1.2 4.5 2.7C12 6.2 13.5 5 15.5 5 19 5 21.5 8.5 20 12.5 18 16.65 12 21 12 21z',
    reasons:[
      "Když je jednomu zle, chce o tom mluvit, druhý chce hlavně vyřešit problém a jde na věc – nesejdou se.",
      "Jeden potřebuje slyšet 'mám tě rád' často, druhý si myslí, že to je jasné z toho, že tu ještě je.",
      "Oba budete tvrdit, že jste v pořádku, a oba budete lhát.",
      "Něco, co jednoho dojme k slzám, druhý sotva zaregistruje.",
      "Snaha jednoho pochopit pocity druhého narazí na věty typu 'to je jen v hlavě'.",
      "Jeden brečí u filmu, druhý se ptá, proč se z toho dělá drama."
    ]
  },
  {
    key:'hodnoty',
    label:'Hodnoty a priority',
    icon:'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M2 14h4M10 8h4M18 12h4',
    reasons:[
      "Jeden šetří na byt, druhý si právě koupil něco, co nutně nepotřeboval – a hádka o peníze je na spadnutí.",
      "Pro jednoho je důležitá kariéra, pro druhého rodina, a nikdo neustoupí ani o kousek.",
      "Co jeden považuje za úspěch, druhý vidí jako ztracený víkend u počítače.",
      "Sobota strávená doma je pro jednoho odpočinek, pro druhého ztracený den.",
      "Když padne slovo 'společné plány', každý si pod tím představí něco úplně jiného."
    ]
  },
  {
    key:'konflikt',
    label:'Řešení konfliktů',
    icon:'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
    reasons:[
      "Malý problém necháte hnít tak dlouho, až se z něj stane velká hádka o něčem úplně jiném.",
      "Když jeden řekne 'promiň', myslí to jako konec debaty, ne jako začátek řešení.",
      "Jeden začne zvedat hlas, druhý odejde z místnosti – a nikdo se nic nedozví.",
      "Ta samá hádka o nádobí nebo o pozdním příchodu se vrací každý druhý týden.",
      "Kompromis u vás znamená hlavně to, že jeden z vás vždycky ustoupí víc.",
      "Po hádce se tváříte, že je vše v pořádku, ale ve skutečnosti to jen tlačíte pod pokličku."
    ]
  },
  {
    key:'ego',
    label:'Ego a soutěživost',
    icon:'M12 2a5 5 0 015 5c0 2.76-2.24 5-5 5s-5-2.24-5-5a5 5 0 015-5zM6 21v-2a6 6 0 016-6h0a6 6 0 016 6v2',
    reasons:[
      "Ani jeden z vás nechce ustoupit první, i když je to o naprostou drobnost.",
      "Oba čekáte, že ten druhý zavolá první po hádce – takže nezavolá nikdo.",
      "Kdo má pravdu, u vás vyhraje nad tím, co je vlastně důležité pro vztah.",
      "Přeháníte i to, kdo z vás dvou uvařil lepší večeři, natož něco skutečně důležitého.",
      "Přiznat si nahlas 'spletl jsem se' vám oběma dělá větší problém, než by mělo."
    ]
  },
  {
    key:'napetí',
    label:'Vzájemné napětí',
    icon:'M12 2l2.5 7.5H22l-6 4.5 2.5 7.5-6.5-4.5L5.5 21.5 8 14 2 9.5h7.5z',
    reasons:[
      "Věc, která jednoho baví, druhého jen unaví – a po chvíli i naštve.",
      "Jeden vidí ve všem šanci, druhý hned najde deset důvodů, proč to nepůjde.",
      "Společný plán na víkend skončí tím, že jeden ho navrhne a druhý ho zboří jednou větou.",
      "Vtip, kterému se jeden zasměje, druhého jen otráví a schválně ho ignoruje.",
      "Chemie mezi vámi vyprchá rychle tam, kde chybí základní ohled na toho druhého."
    ]
  }
];

const INCOMPAT_LEADS=[
  // Původní hlášky
  "Krátká odpověď: nefunguje to.",
  "Astrologicky i logicky – katastrofa na spadnutí.",
  "Antiláska v plné síle: nekompatibilita na první pohled.",
  "Tohle spojení nemá šanci přežít ani první měsíc.",
  "Vesmír vám tímto párováním dělá jasně za uši.",
  "Kompatibilita na úrovni ohně a vody – hasit nemá cenu.",
  "Tenhle vztah by potřeboval zázrak, ne horoskop.",
  "I hvězdy si tady zakrývají oči.",
  "Můžete se snažit jak chcete, stejně to nevyjde.",
  "Ze začátku to bude vypadat pozitivně, škoda...",
  "To, jak si myslíte, že vás vidí, není pravda.",
  "Ne, opravdu to nevyjde. (I když se budete modlit.)",
  "Horoskop vám nepomůže, stejně jako váš partner."
];

const TAROT_CARDS=[{"name": "Mág", "text": "Máte pocit, že máte všechno pod kontrolou. Realita: jen žonglujete s věcmi, které vám kdykoli spadnou na hlavu. Ten trik s kartami, co jste si naplánovali, nikomu nevyjde – ani vám.", "img": "assets/tarot/mag.jpg"}, {"name": "Velekněžka", "text": "Intuice vám tentokrát mlčí, nebo možná křičí a vy ji ignorujete. Tajemství, které skrýváte, se stejně provalí – jen v nejhorší možný moment.", "img": "assets/tarot/veleknezka.jpg"}, {"name": "Císařovna", "text": "Hojnost, o které jste snili, se nekoná. Místo úrody čekejte spíš vyprázdněný účet a trůn, na kterém sedíte jen vy sami.", "img": "assets/tarot/cisarovna.jpg"}, {"name": "Císař", "text": "Snažíte se všechno kontrolovat a stavět pevné základy, jenže stavíte z kostek, které se za vámi sesypou dřív, než dostavíte poslední patro.", "img": "assets/tarot/cisar.jpg"}, {"name": "Velekněz", "text": "Čekáte moudrou radu shora. Dostanete jen prázdná slova od někoho, kdo neví o vašem životě víc než vy sami.", "img": "assets/tarot/veleknez.jpg"}, {"name": "Milenci", "text": "Volba mezi dvěma cestami vás čeká – a ať zvolíte kteroukoli, budete litovat. Propast mezi vámi a partnerem (nebo rozhodnutím) se jen prohloubí.", "img": "assets/tarot/milenci.jpg"}, {"name": "Vůz", "text": "Vypadá to na pohodovou jízdu vpřed, ale ve skutečnosti jen sedíte v kočáře, který řídí někdo jiný, a vy si to jen neuvědomujete.", "img": "assets/tarot/vuz.jpg"}, {"name": "Síla", "text": "Máte pocit vnitřní síly a kontroly nad situací (nebo nad šelmou ve vašem životě). Ve skutečnosti vás krotíte jen o vlásek – a to vlásek už se trhá.", "img": "assets/tarot/sila.jpg"}, {"name": "Poustevník", "text": "Hledáte odpovědi v samotě, ale čím dál jdete, tím víc jste ztraceni. Ruka, která se po vás natahuje, vám nepomůže – nebo jí nevěříte.", "img": "assets/tarot/poustevnik.jpg"}, {"name": "Kolo štěstí", "text": "Kolo se otáčí, ale nahoru se dostane vždycky někdo jiný. Vaše štěstí je tento měsíc pevně zaparkované na spodním díle kola.", "img": "assets/tarot/kolo_stesti.jpg"}, {"name": "Spravedlnost", "text": "Čekáte, že vše dostane, co si zaslouží. Váhy se ale vychýlí přesně v neprospěch vás – spravedlnost je slepá a tentokrát i vůči vám.", "img": "assets/tarot/spravedlnost.jpg"}, {"name": "Viselec", "text": "Jste zavěšeni v čekání, obklopeni nedokončenými úkoly (a nekonečným načítáním). Nic se nepohne, dokud si to sami neuvědomíte – a to bude trvat.", "img": "assets/tarot/viselec.jpg"}, {"name": "Smrt", "text": "Konec něčeho je nevyhnutelný, ale žádné nové výhonky nečekejte hned. Země je vyprahlá a to, co roste, brzy zase usychá.", "img": "assets/tarot/smrt.jpg"}, {"name": "Umírněnost", "text": "Snažíte se udržet rovnováhu a přelévat energii tam, kde je potřeba. Jenže přeléváte do prázdné nádoby – a rovnováha se vám rozlévá po podlaze.", "img": "assets/tarot/umirnenost.jpg"}, {"name": "Ďábel", "text": "Jste připoutáni k něčemu, čeho se nemůžete zbavit – závislosti, zlozvyku, nebo telefonu, do kterého civíte místo života. Řetězy jsou volnější, než myslíte, ale vy je stejně neuvolníte.", "img": "assets/tarot/dabel.jpg"}, {"name": "Věž", "text": "Něco, co jste dlouho stavěli, se tento měsíc zbortí – rychle, hlasitě a bez varování. Blesk už je na cestě.", "img": "assets/tarot/vez.jpg"}, {"name": "Hvězda", "text": "Naděje se line jako voda, ale přímo do trhliny, kterou nic nezacelí. I ta nejjasnější hvězda vás tentokrát nenavede správným směrem.", "img": "assets/tarot/hvezda.jpg"}, {"name": "Měsíc", "text": "Kráčíte labyrintem iluzí a stínů a nic není takové, jak se zdá. Cesta, po které jdete, vás jen zavede zpátky na začátek.", "img": "assets/tarot/mesic.jpg"}, {"name": "Slunce", "text": "Sluneční paprsky svítí, ale hřejí jen ty ostatní kolem vás. Vy zůstáváte ve stínu vlastního zatmění, i když je jasno.", "img": "assets/tarot/slunce.jpg"}, {"name": "Blázen", "text": "Stojíte na okraji propasti a chystáte se skočit bez rozmyslu – jako obvykle. Tentokrát vás dole nečeká žádné bezpečné přistání.", "img": "assets/tarot/blazen.jpg"}];

const DICE_RESULTS={
  1:"Ne.",
  2:"Skoro to vyšlo, stejně jako všechno o co jste v životě stáli.",
  3:"Průměr takže vlastně nic, stejně jako váš život.",
  4:"Žolík nebo klaun, záleží co vy s tím uděláte.",
  5:"Tak blízko, skoro to vyšlo a nic by se stejně nestalo.",
  6:"Ano."
};

const DICE_BG_HINT={
  1:"NE",
  6:"ANO"
};

const DICE_QUIPS={
  1:"Kostka to řekla jasně. Zbytek si domyslete sami.",
  2:"Tak blízko, a přece tak daleko. Jako obvykle.",
  3:"Prázdno. Ale aspoň konzistentní prázdno.",
  4:"Náhoda vám dala žolíka. Co s ním uděláte, je váš problém.",
  5:"I kdyby padla šestka, stejně by se nic nezměnilo.",
  6:"Ano. Užijte si to, dokud to trvá."
};

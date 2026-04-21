const allBeaches = [
  {
    name: "Cala del Senyor Ramon",
    town: "Santa Cristina d'Aro / Tossa de Mar",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "10 min a peu",
    description: "Cala coneguda per l'entorn rocós, aigües transparents i una zona on el nudisme és habitual i ben acceptat.",
    tags: ["Mixta", "Snorkel", "Entorn natural"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: [41.756, 2.936],
    href: "platges/cala-del-senyor-ramon.html"
  },
  {
    name: "Platja de Castell",
    town: "Palamós",
    zone: "Baix Emporda",
    type: "accessible",
    distance: "Accés fàcil",
    description: "Gran platja natural amb sectors més tranquils on molts banyistes practiquen nudisme, ideal per començar.",
    tags: ["Àmplia", "Aparcament", "Familiar"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: [41.862, 3.158],
    href: "platges/platja-de-castell.html"
  },
  {
    name: "Cala Estreta",
    town: "Palamós",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "25 min a peu",
    description: "Una de les cales més emblemàtiques de la zona, envoltada de pins i amb ambient discret i natural.",
    tags: ["Caminada", "Salvatge", "Fotogènica"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: [41.878, 3.173],
    href: "platges/cala-estreta.html"
  },
  {
    name: "Illa Roja",
    town: "Begur",
    zone: "Baix Emporda",
    type: "tranquil",
    distance: "15 min a peu",
    description: "Probablement la platja nudista més famosa de la Costa Brava, amb sorra daurada i gran presència nudista.",
    tags: ["Clàssica", "Panoràmica", "Popular"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: [41.967, 3.226],
    href: "platges/illa-roja.html"
  },
  {
    name: "Platja del Tornet",
    town: "Roses",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "8 min a peu",
    description: "Espai més apartat dins l'entorn de Roses, interessant per a qui busca calma i menys densitat de visitants.",
    tags: ["Discreta", "Poc massificada", "Calma"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: [42.252, 3.196],
    href: "platges/platja-del-tornet.html"
  },
  {
    name: "Cala de la Murtra",
    town: "Roses",
    zone: "Alt Emporda",
    type: "senderisme",
    distance: "20 min a peu",
    description: "Cala naturista molt apreciada al Cap de Creus, sense urbanització immediata i amb una sensació de retirada total.",
    tags: ["Cap de Creus", "Naturista", "Aïllada"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: [42.276, 3.245],
    href: "platges/cala-murtra.html"
  },
  {
    name: "Cala del Pi",
    town: "Portbou",
    zone: "Alt Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala de l'extrem nord de la Costa Brava, interessant per a qui busca un entorn discret i més retirat.",
    tags: ["Portbou", "Rocosa", "Tranquila"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-pi.html"
  },
  {
    name: "Cala Borro",
    town: "Colera",
    zone: "Alt Emporda",
    type: "salvatge",
    distance: "Consultar accés",
    description: "Raco de Cap Ras amb perfil natural i bona cabuda dins d'un directori de cales nudistes del nord de la Costa Brava.",
    tags: ["Cap Ras", "Natural", "Calma"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-borro.html"
  },
  {
    name: "Platja Gran del Futaner",
    town: "Llanca",
    zone: "Alt Emporda",
    type: "salvatge",
    distance: "Acces a peu per Cap Ras",
    description: "Petita platja de Cap Ras amb roca, sorra escassa i una sensacio de raco discret molt marcada.",
    tags: ["Cap Ras", "Discreta", "Natural"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: [42.3882, 3.1643],
    href: "platges/platja-gran-del-futaner.html"
  },
  {
    name: "Cala Tamariua",
    town: "El Port de la Selva",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "Consultar accés",
    description: "Cala del Port de la Selva amb personalitat pròpia i un entorn que encaixa molt bé en una fitxa visual.",
    tags: ["Port de la Selva", "Aigües clares", "Discreta"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-tamariua.html"
  },
  {
    name: "Cala Taballera",
    town: "El Port de la Selva",
    zone: "Alt Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Una de les cales amb més caràcter del sector del Cap de Creus, ideal per a usuaris que valoren paisatge i sensació d'aïllament.",
    tags: ["Cap de Creus", "Senderisme", "Salvatge"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-taballera.html"
  },
  {
    name: "Cala Fredosa",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala associada al paisatge més obert i mineral del Cap de Creus, perfecta per a un perfil de visitant que busca entorn cru i natural.",
    tags: ["Cadaques", "Cap de Creus", "Vistes"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-fredosa.html"
  },
  {
    name: "Cala Jugadora",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "salvatge",
    distance: "Consultar accés",
    description: "Cala molt ben situada dins l'imaginari del Cap de Creus, adequada per a una fitxa centrada en paisatge i tranquil·litat.",
    tags: ["Cadaques", "Salvatge", "Rocosa"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-jugadora.html"
  },
  {
    name: "Platja de Sant Lluis",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "Consultar accés",
    description: "Cala de Cadaques amb molt potencial per a una fitxa clara, pensada per orientar visitants sobre ambient i tipus d'entorn.",
    tags: ["Cadaques", "Calma", "Entorn natural"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-de-sant-lluis.html"
  },
  {
    name: "Cala s'Alqueria Gran",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "Consultar accés",
    description: "Raco de Cadaques que funciona molt bé dins d'una col·lecció de cales nudistes per la seva identitat i ubicació.",
    tags: ["Cadaques", "Discreta", "Natural"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-s-alqueria-gran.html"
  },
  {
    name: "Cala s'Alqueria Petita",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "Acces per la carretera del far",
    description: "Cala petita i coneguda de la badia de Raco des Moro, amb tradicio nudista i un entorn molt de Cadaques.",
    tags: ["Cadaques", "Tradicio nudista", "Petita"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: [42.2972, 3.2883],
    href: "platges/cala-s-alqueria-petita.html"
  },
  {
    name: "Platja Sa Conca (roques)",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "accessible",
    distance: "Consultar accés",
    description: "Platja de Cadaques adequada per oferir una fitxa simple i orientativa dins del catàleg general de la comarca.",
    tags: ["Cadaques", "Platja", "Mixta"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-de-sa-conca.html"
  },
  {
    name: "Cala Sa Sabolla",
    town: "Cadaques",
    zone: "Alt Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala que reforça el bloc de Cadaques i Cap de Creus, amb una proposta enfocada a usuaris que volen llocs més apartats.",
    tags: ["Cadaques", "Aillada", "Senderisme"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-sa-sabolla.html"
  },
  {
    name: "Platja de Can Comes",
    town: "Castello d'Empuries",
    zone: "Alt Emporda",
    type: "accessible",
    distance: "Consultar accés",
    description: "Una opcio de tram de platja ampli, interessant per a qui prefereix espai obert i menys sensacio de cala tancada.",
    tags: ["Llarga", "Arenosa", "Espai obert"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-de-can-comes.html"
  },
  {
    name: "Platja del Cortal de la Vila",
    town: "Sant Pere Pescador",
    zone: "Alt Emporda",
    type: "accessible",
    distance: "Consultar accés",
    description: "Platja de tram extens molt útil per representar l'oferta nudista de Sant Pere Pescador i l'entorn dels Aiguamolls.",
    tags: ["Sant Pere Pescador", "Natural", "Llarga"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-del-cortal-de-la-vila.html"
  },
  {
    name: "Platja del Riuet",
    town: "Sant Marti d'Empuries / L'Escala",
    zone: "Alt Emporda",
    type: "tranquil",
    distance: "Consultar accés",
    description: "Tram de platja de l'Escala interessant per a qui busca una opcio oberta i menys recollida que les cales rocoses.",
    tags: ["L'Escala", "Arenosa", "Vent"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-del-riuet.html"
  },
  {
    name: "Cala Ferriol",
    town: "L'Estartit",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "1 h - 1 h 30 a peu",
    description: "Cala gran i rocosa del massis del Montgri, remota i molt atractiva per a una jornada de caminada i bany.",
    tags: ["Montgri", "Aillada", "Rocosa"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: [42.0822, 3.195],
    href: "platges/cala-ferriol.html"
  },
  {
    name: "Cala Pedrosa",
    town: "L'Estartit",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "Uns 60 min a peu",
    description: "Petita cala de codols entre pins i roca, molt bona per a una excursio de mati o tarda amb bany tranquil.",
    tags: ["Codols", "Snorkel", "Natural"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: [42.0735, 3.2021],
    href: "platges/cala-pedrosa.html"
  },
  {
    name: "Platja de la Platera",
    town: "L'Estartit, Torroella de Montgri",
    zone: "Baix Emporda",
    type: "accessible",
    distance: "Consultar accés",
    description: "Tram de platja llarga i oberta, molt útil per donar varietat al catàleg més enllà de les cales petites.",
    tags: ["L'Estartit", "Llarga", "Arenosa"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-de-la-platera.html"
  },
  {
    name: "La Gola de Ter",
    town: "Torroella de Montgri",
    zone: "Baix Emporda",
    type: "accessible",
    distance: "Acces per pista i camins naturals",
    description: "Gran paisatge de desembocadura, dunes i sorra fina per a qui prefereix espais oberts i molt valor ambiental.",
    tags: ["Desembocadura", "Dunes", "Espai natural"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: [42.0233, 3.1939],
    href: "platges/la-gola-de-ter.html"
  },
  {
    name: "Platja de Pals",
    town: "Pals",
    zone: "Baix Emporda",
    type: "accessible",
    distance: "Consultar accés",
    description: "Gran platja del Baix Emporda amb espai suficient per orientar diferents perfils de visitant segons tram i temporada.",
    tags: ["Pals", "Espai obert", "Arenosa"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-de-pals.html"
  },
  {
    name: "Cala del Crit",
    town: "Entre Palamos i Calella de Palafrugell",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala vinculada al conjunt d'Estreta i Roca Bona, pensada per a visitants que prefereixen racons amb paisatge i una arribada més pausada.",
    tags: ["Caminada", "Natural", "Baix Emporda"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-del-crit.html"
  },
  {
    name: "Roca Bona",
    town: "Entre Palamos i Calella de Palafrugell",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Consultar accés",
    description: "Raco del mateix sector que Cala Estreta i Cala del Crit, adient per completar la xarxa de fitxes d'aquest tram costaner.",
    tags: ["Rocosa", "Discreta", "Caminada"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/roca-bona.html"
  },
  {
    name: "Cala de les Roques Planes",
    town: "Sant Antoni de Calonge",
    zone: "Baix Emporda",
    type: "tranquil",
    distance: "Consultar accés",
    description: "Cala coneguda dins del sector de Calonge, adequada per a una fitxa amb orientacio visual i recomanacions de visita.",
    tags: ["Calonge", "Rocosa", "Calma"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-de-les-roques-planes.html"
  },
  {
    name: "Cala Canyers",
    town: "Platja d'Aro",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Consultar accés",
    description: "Cala amb perfil discret dins del tram de Platja d'Aro, molt útil per donar cobertura a aquesta zona del directori.",
    tags: ["Platja d'Aro", "Discreta", "Rocosa"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-canyers.html"
  },
  {
    name: "Cala del Vigata",
    town: "Sant Feliu de Guixols",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Consultar accés",
    description: "Cala de Sant Feliu de Guixols apropiada per a qui busca roques, mar i una atmosfera menys multitudinaria.",
    tags: ["Sant Feliu", "Rocosa", "Natural"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-del-vigata.html"
  },
  {
    name: "Cala Vallpresona",
    town: "Santa Cristina d'Aro",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala amb molta personalitat entre penya-segats i vegetacio, molt bona candidata per a una fitxa centrada en natura i tranquil·litat.",
    tags: ["Santa Cristina", "Aillada", "Senderisme"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-vallpresona.html"
  },
  {
    name: "Cala Figuera",
    town: "Tossa de Mar",
    zone: "Selva",
    type: "senderisme",
    distance: "Consultar accés",
    description: "Cala de Tossa de Mar pensada per a qui busca un raco amb entorn potent i menys sensacio urbana.",
    tags: ["Tossa", "Salvatge", "Caminada"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-figuera.html"
  },
  {
    name: "Cala Boadella",
    town: "Lloret de Mar",
    zone: "Selva",
    type: "accessible",
    distance: "Consultar accés",
    description: "Una de les opcions més conegudes de la Selva per a banyistes que busquen una combinacio d'accessibilitat i ambient natural.",
    tags: ["Lloret", "Popular", "Mixta"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/cala-boadella.html"
  },
  {
    name: "Platja Delta de la Tordera",
    town: "Delta de la Tordera",
    zone: "Selva",
    type: "accessible",
    distance: "Consultar accés",
    description: "Tram final del cataleg, amb perfil de platja oberta i util per a qui vol espai i menys concentracio de gent.",
    tags: ["Delta", "Llarga", "Arenosa"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: null,
    href: "platges/platja-delta-de-la-tordera.html"
  }
];

const newBeaches = [
  {
    name: "Cala s'Eixugador",
    town: "Begur",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "Acces per cami de ronda",
    description: "Raco estret i elegant entre roques i pinar, molt propi del Begur mes retallat i silencios.",
    tags: ["Begur", "Cami de ronda", "Rocosa"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: [41.9415, 3.2225],
    href: "platges/cala-s-eixugador.html"
  },
  {
    name: "Platja Fonda",
    town: "Begur",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "Acces per escales",
    description: "Platja ombria i molt fotogenica on la part mes al nord es la que acostuma a tenir mes ambient naturista.",
    tags: ["Begur", "Escales", "Mixta"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: [41.9427, 3.2145],
    href: "platges/platja-fonda.html"
  },
  {
    name: "Aigua Xelida",
    town: "Palafrugell",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Acces a peu",
    description: "Petit paradis de roca i aigua transparent on el nudisme es practica sobretot a les plataformes i trams mes apartats.",
    tags: ["Palafrugell", "Roca", "Snorkel"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: [41.9118, 3.1946],
    href: "platges/aigua-xelida.html"
  },
  {
    name: "Cala Predrosa",
    town: "Palafrugell",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "Acces per cami",
    description: "Cala recollida de codols i roca, molt bona per a qui gaudeix de llocs petits i d'arribades pausades.",
    tags: ["Palafrugell", "Codols", "Natural"],
    image: "https://images.unsplash.com/photo-1501959915551-4e8a04b6f9c1?auto=format&fit=crop&w=1200&q=80",
    coords: [41.9102, 3.1921],
    href: "platges/cala-predrosa.html"
  },
  {
    name: "Cala del Cau",
    town: "Palafrugell",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Acces a peu",
    description: "Raco menut i discret del tram entre capes i penya-segats, per a qui busca silenci i mar molt a prop.",
    tags: ["Palafrugell", "Discreta", "Roca"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: [41.8998, 3.1845],
    href: "platges/cala-del-cau.html"
  },
  {
    name: "Cala d'en Massoni",
    town: "Palafrugell",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Acces a peu",
    description: "Cala de personalitat forta dins del sector de Cap Roig, ideal per a una visita mes contemplativa que no pas urbana.",
    tags: ["Palafrugell", "Cap Roig", "Rocosa"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: [41.8959, 3.1825],
    href: "platges/cala-d-en-massoni.html"
  },
  {
    name: "Cala Cap de Planes",
    town: "Mont-ras",
    zone: "Baix Emporda",
    type: "senderisme",
    distance: "Acces a peu",
    description: "Cala del tram entre Calella i Castell amb caseta de pescadors, bones vistes i una bona sensacio de cami de costa.",
    tags: ["Mont-ras", "Illes Formigues", "Roca"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: [41.8793, 3.1717],
    href: "platges/cala-cap-de-planes.html"
  },
  {
    name: "Cala Corbs",
    town: "Palamos",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Acces pel cami de ronda",
    description: "Cala recollida i rocosa per a qui vol una aturada mes discreta dins del litoral de Palamos.",
    tags: ["Palamos", "Discreta", "Roca"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: [41.8568, 3.1278],
    href: "platges/cala-corbs.html"
  },
  {
    name: "Cala dels Canyers",
    town: "Palamos",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Acces a peu",
    description: "Petit tram rocos del sector de Castell on el nudisme encaixa de manera natural amb el paisatge i el pas del cami.",
    tags: ["Palamos", "Rocosa", "Natural"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    coords: [41.8613, 3.1575],
    href: "platges/cala-dels-canyers.html"
  },
  {
    name: "Cala de l'Ametller",
    town: "Sant Feliu de Guixols",
    zone: "Baix Emporda",
    type: "salvatge",
    distance: "Acces a peu",
    description: "Raco rocos i poc convencional, bo per a qui gaudeix d'aquells punts on el bany es combina amb pedra, sol i molta mar.",
    tags: ["Sant Feliu", "Roca", "Discreta"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: [41.7758, 3.0361],
    href: "platges/cala-de-l-ametller.html"
  },
  {
    name: "Cala Futadera",
    town: "Tossa de Mar",
    zone: "Selva",
    type: "senderisme",
    distance: "Acces per escales",
    description: "Cala abrupta i molt espectacular per a qui vol roca, verticalitat i una sensacio molt salvatge.",
    tags: ["Tossa", "Escales", "Panoramica"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coords: [41.7311, 2.9315],
    href: "platges/cala-futadera.html"
  },
  {
    name: "Cala Giveroleta",
    town: "Tossa de Mar",
    zone: "Selva",
    type: "senderisme",
    distance: "Acces pel cami de ronda",
    description: "Petit raco del litoral de Tossa que funciona molt be si t'agrada anar encadenant cales i miradors.",
    tags: ["Tossa", "Cami de ronda", "Roca"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    coords: [41.7248, 2.9334],
    href: "platges/cala-giveroleta.html"
  },
  {
    name: "Cala Morisca",
    town: "Tossa de Mar",
    zone: "Selva",
    type: "senderisme",
    distance: "Acces a peu",
    description: "Cala tranquil.la del mateix gran tram de Tossa, pensada per a qui prefereix llocs petits i una mica apartats.",
    tags: ["Tossa", "Discreta", "Rocosa"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: [41.7191, 2.932],
    href: "platges/cala-morisca.html"
  },
  {
    name: "Cala Rajols",
    town: "Lloret de Mar",
    zone: "Selva",
    type: "senderisme",
    distance: "Acces a peu",
    description: "Raco mes discret del litoral de Lloret, bo per a qui vol apartar-se del front mes conegut i trobar una escala mes petita.",
    tags: ["Lloret", "Roca", "Discreta"],
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    coords: [41.6939, 2.8612],
    href: "platges/cala-rajols.html"
  },
  {
    name: "Desembocadura de la Tordera",
    town: "Blanes",
    zone: "Selva",
    type: "accessible",
    distance: "Acces facil segons tram",
    description: "Gran tram final de delta amb dunes, pinar i ambient molt obert, ideal per a qui busca espai i una lectura molt natural del litoral.",
    tags: ["Delta", "Dunes", "Espai obert"],
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    coords: [41.6658, 2.7934],
    href: "platges/desembocadura-de-la-tordera.html"
  }
];

const beachOverrides = {
  "platges/cala-del-senyor-ramon.html": {
    name: "Cala del Sr. Ramon",
    town: "Santa Cristina d'Aro",
    distance: "10 min a peu",
    description: "Cala de gran tradicio naturista, amb xiringuito, bons fondejos i un paisatge que demana instal.lar-s'hi una bona estona.",
    tags: ["Mixta", "Snorkel", "Tradicio"]
  },
  "platges/platja-de-castell.html": {
    name: "Platja del Castell",
    town: "Palamos",
    distance: "Acces facil i aparcament",
    description: "Gran platja preservada per la lluita veinal, amb molt d'espai i una tradicio naturista clara al costat dret.",
    tags: ["Arenal", "Aparcament", "Historic"]
  },
  "platges/illa-roja.html": {
    name: "Platja de l'Illa Roja i Cala Moreta",
    description: "Una de les platges nudistes mes conegudes de la Costa Brava, marcada per la gran roca rogenca i un paisatge immediatament recognoscible.",
    tags: ["Classica", "Panoramica", "Popular"]
  },
  "platges/cala-del-crit.html": {
    town: "Mont-ras",
    distance: "Acces pel cami de ronda"
  },
  "platges/roca-bona.html": {
    name: "Cala Roca Bona",
    town: "Palamos",
    distance: "Acces pel cami de ronda"
  },
  "platges/cala-de-les-roques-planes.html": {
    name: "Cala de Roques Planes",
    distance: "15 min a peu"
  },
  "platges/cala-del-vigata.html": {
    distance: "Acces a peu"
  },
  "platges/cala-vallpresona.html": {
    distance: "10 min a peu des de la carretera",
    description: "Cala plenament verge, amagada entre bosc i penya-segat, molt adequada per a qui vol una sensacio d'aillament real.",
    tags: ["Santa Cristina", "Verge", "Senderisme"]
  },
  "platges/cala-figuera.html": {
    distance: "Acces curt des de la carretera",
    description: "Cala del costat de Llevado on el nudisme es viu amb molta naturalitat i on l'entorn mante una gran força visual.",
    tags: ["Tossa", "Salvatge", "Mar clar"]
  },
  "platges/cala-boadella.html": {
    distance: "Acces curt",
    coords: [41.7004, 2.8341]
  },
  "platges/platja-de-pals.html": {
    distance: "Acces facil",
    coords: [41.9872, 3.2018]
  },
  "platges/platja-de-la-platera.html": {
    distance: "Acces senzill",
    coords: [42.0411, 3.2015]
  },
  "platges/cala-pi.html": {
    distance: "15 min a peu",
    coords: [42.4278, 3.1672]
  },
  "platges/cala-borro.html": {
    distance: "10 min a peu",
    coords: [42.4029, 3.1593]
  }
};

const directoryOrder = [
  "Cala del Pi",
  "Cala Borro",
  "Platja Gran del Futaner",
  "Cala Tamariua",
  "Cala Taballera",
  "Cala Fredosa",
  "Cala Jugadora",
  "Platja de Sant Lluis",
  "Cala s'Alqueria Gran",
  "Cala s'Alqueria Petita",
  "Platja Sa Conca (roques)",
  "Cala Sa Sabolla",
  "Cala de la Murtra",
  "Platja de Can Comes",
  "Platja del Cortal de la Vila",
  "Platja del Riuet",
  "Cala Ferriol",
  "Cala Pedrosa",
  "Platja de la Platera",
  "La Gola de Ter",
  "Platja de Pals",
  "Platja de l'Illa Roja i Cala Moreta",
  "Cala s'Eixugador",
  "Platja Fonda",
  "Aigua Xelida",
  "Cala Predrosa",
  "Cala del Cau",
  "Cala d'en Massoni",
  "Cala del Crit",
  "Cala Cap de Planes",
  "Cala Roca Bona",
  "Cala Estreta",
  "Cala Corbs",
  "Cala dels Canyers",
  "Platja del Castell",
  "Cala de Roques Planes",
  "Cala Canyers",
  "Cala de l'Ametller",
  "Cala del Vigata",
  "Cala del Sr. Ramon",
  "Cala Vallpresona",
  "Cala Futadera",
  "Cala Giveroleta",
  "Cala Figuera",
  "Cala Morisca",
  "Cala Rajols",
  "Cala Boadella",
  "Desembocadura de la Tordera"
];

const beaches = allBeaches
  .map((beach) => ({ ...beach, ...(beachOverrides[beach.href] || {}) }))
  .concat(newBeaches)
  .filter((beach) => directoryOrder.includes(beach.name))
  .sort((left, right) => directoryOrder.indexOf(left.name) - directoryOrder.indexOf(right.name));

const featuredBeachNames = new Set([
  "Cala Taballera",
  "Cala Estreta",
  "Platja de l'Illa Roja i Cala Moreta",
  "Cala Boadella"
]);

const heroCarouselNames = [
  "Cala Estreta",
  "Platja de l'Illa Roja i Cala Moreta",
  "Cala Boadella"
];

const beachGrid = document.getElementById("beachGrid");
const resultsCount = document.getElementById("resultsCount");
const template = document.getElementById("beachCardTemplate");
const searchInput = document.getElementById("searchInput");
const zoneFilter = document.getElementById("zoneFilter");
const typeFilter = document.getElementById("typeFilter");
const map = L.map("map", { scrollWheelZoom: true }).setView([42.02, 3.08], 9);
const markersLayer = L.layerGroup().addTo(map);
const markersByBeach = new Map();
const pageQuery = new URLSearchParams(window.location.search);

function currentLanguage() {
  return document.documentElement.lang || localStorage.getItem("costa-brava-language") || "ca";
}

function uiText() {
  const language = currentLanguage();
  const dictionary = {
    ca: {
      cardLink: "Veure fitxa completa",
      results: "platges visibles",
      carouselKicker: "Seleccio visual",
      previousSlide: "Imatge anterior",
      nextSlide: "Imatge seguent"
    },
    es: {
      cardLink: "Ver ficha completa",
      results: "playas visibles",
      carouselKicker: "Seleccion visual",
      previousSlide: "Imagen anterior",
      nextSlide: "Imagen siguiente"
    },
    en: {
      cardLink: "View full profile",
      results: "visible beaches",
      carouselKicker: "Visual selection",
      previousSlide: "Previous image",
      nextSlide: "Next image"
    },
    fr: {
      cardLink: "Voir la fiche complete",
      results: "plages visibles",
      carouselKicker: "Selection visuelle",
      previousSlide: "Image precedente",
      nextSlide: "Image suivante"
    }
  };
  return dictionary[language] || dictionary.ca;
}

function initHeroCarousel() {
  const track = document.getElementById("heroCarouselTrack");
  const title = document.getElementById("heroCarouselTitle");
  const location = document.getElementById("heroCarouselLocation");
  const dotsContainer = document.getElementById("heroCarouselDots");
  const prevButton = document.getElementById("heroCarouselPrev");
  const nextButton = document.getElementById("heroCarouselNext");
  const kicker = document.querySelector(".hero-carousel-kicker");

  if (!track || !title || !location || !dotsContainer || !prevButton || !nextButton || !kicker) {
    return;
  }

  const slides = heroCarouselNames
    .map((name) => beaches.find((beach) => beach.name === name))
    .filter(Boolean);

  if (!slides.length) {
    return;
  }

  const texts = uiText();
  kicker.textContent = texts.carouselKicker;
  prevButton.setAttribute("aria-label", texts.previousSlide);
  nextButton.setAttribute("aria-label", texts.nextSlide);

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  slides.forEach((beach, index) => {
    const slide = document.createElement("article");
    slide.className = "hero-carousel-slide";
    slide.style.backgroundImage = `url("${beach.image}")`;
    slide.setAttribute("aria-hidden", index === 0 ? "false" : "true");
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "hero-carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", beach.name);
    dot.addEventListener("click", () => {
      setSlide(index);
      restartAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.querySelectorAll(".hero-carousel-dot"));
  let activeIndex = 0;
  let autoplayId;

  function setSlide(index) {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    title.textContent = slides[activeIndex].name;
    location.textContent = slides[activeIndex].town;

    Array.from(track.children).forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", slideIndex === activeIndex ? "false" : "true");
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
    });
  }

  function startAutoplay() {
    window.clearInterval(autoplayId);
    autoplayId = window.setInterval(() => {
      setSlide(activeIndex + 1);
    }, 5500);
  }

  function restartAutoplay() {
    startAutoplay();
  }

  prevButton.onclick = () => {
    setSlide(activeIndex - 1);
    restartAutoplay();
  };

  nextButton.onclick = () => {
    setSlide(activeIndex + 1);
    restartAutoplay();
  };

  track.onmouseenter = () => window.clearInterval(autoplayId);
  track.onmouseleave = () => startAutoplay();

  setSlide(0);
  restartAutoplay();
}

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  referrerPolicy: "strict-origin-when-cross-origin",
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function highlightCard(name) {
  document.querySelectorAll(".beach-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.beachName === name);
  });
}

function createPopupMarkup(beach) {
  return `
    <div class="map-popup">
      <h3>${beach.name}</h3>
      <p><strong>${beach.town}</strong></p>
      <p>${beach.description}</p>
      <p>${beach.distance} · ${beach.zone}</p>
      <p><a href="${beach.href}">Obrir fitxa completa</a></p>
    </div>
  `;
}

function updateMap(items) {
  markersLayer.clearLayers();
  markersByBeach.clear();
  const latLngs = [];

  items.forEach((beach) => {
    if (!beach.coords) {
      return;
    }

    const marker = L.marker(beach.coords).addTo(markersLayer);
    marker.bindPopup(createPopupMarkup(beach));
    markersByBeach.set(beach.name, marker);
    marker.on("click", () => {
      highlightCard(beach.name);
      document.querySelector(`[data-beach-name="${CSS.escape(beach.name)}"]`)?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
    latLngs.push(beach.coords);
  });

  if (latLngs.length === 0) {
    map.setView([42.02, 3.08], 9);
    return;
  }

  if (latLngs.length === 1) {
    map.setView(latLngs[0], 13);
    return;
  }

  map.fitBounds(latLngs, { padding: [30, 30] });
}

function renderBeaches(items) {
  beachGrid.innerHTML = "";
  const texts = uiText();

  items.forEach((beach) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".beach-card");
    const cardLink = node.querySelector(".card-link");
    const titleLink = node.querySelector(".beach-name-link");

    card.dataset.beachName = beach.name;
    card.addEventListener("click", (event) => {
      if (event.target.closest(".card-link") || event.target.closest(".beach-name-link")) {
        return;
      }

      highlightCard(beach.name);
      if (beach.coords) {
        map.setView(beach.coords, 13);
        markersByBeach.get(beach.name)?.openPopup();
      }
    });

    card.querySelector(".card-image").style.backgroundImage = `url("${beach.image}")`;
    card.querySelector(".zone-pill").textContent = beach.zone;
    card.querySelector(".distance-pill").textContent = beach.distance;
    card.querySelector(".beach-name").textContent = beach.name;
    card.querySelector(".beach-location").textContent = beach.town;
    card.querySelector(".beach-description").textContent = beach.description;
    cardLink.href = beach.href;
    cardLink.textContent = texts.cardLink;
    titleLink.href = beach.href;

    const tagsContainer = card.querySelector(".card-tags");
    beach.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });

    beachGrid.appendChild(node);
  });

  resultsCount.textContent = `${items.length} ${texts.results}`;
  updateMap(items);
}

function filterBeaches() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedZone = zoneFilter.value;
  const selectedType = typeFilter.value;
  const hasActiveFilters =
    query !== "" || selectedZone !== "all" || selectedType !== "all";

  let filtered = beaches.filter((beach) => {
    const matchesQuery =
      beach.name.toLowerCase().includes(query) ||
      beach.town.toLowerCase().includes(query);
    const matchesZone = selectedZone === "all" || beach.zone === selectedZone;
    const matchesType = selectedType === "all" || beach.type === selectedType;

    return matchesQuery && matchesZone && matchesType;
  });

  if (!hasActiveFilters) {
    filtered = filtered.filter((beach) => featuredBeachNames.has(beach.name));
  }

  renderBeaches(filtered);
}

[searchInput, zoneFilter, typeFilter].forEach((element) => {
  element.addEventListener("input", filterBeaches);
  element.addEventListener("change", filterBeaches);
});

if (pageQuery.has("q")) {
  searchInput.value = pageQuery.get("q") || "";
}

if (pageQuery.has("zone")) {
  zoneFilter.value = pageQuery.get("zone") || "all";
}

if (pageQuery.has("type")) {
  typeFilter.value = pageQuery.get("type") || "all";
}

filterBeaches();
initHeroCarousel();

window.addEventListener("costa-brava-language-change", () => {
  filterBeaches();
  initHeroCarousel();
});

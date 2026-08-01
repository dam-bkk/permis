import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "bateau-balisage",
  subject: "bateau",
  grade: "permis",
  num: 2,
  title: "Balisage et règles de barre",
  domain: "geometrie",
  icon: "Anchor",
  teaser:
    "Rouge à bâbord, vert à tribord, cardinales, priorités et feux de nuit : lire la mer comme une carte.",
  objectives: [
    "Je reconnais les marques latérales de la région A et je sais de quel côté les laisser",
    "Je sais interpréter les quatre marques cardinales, le danger isolé et les eaux saines",
    "Je connais l'ordre des priorités et les manœuvres en croisement, face à face et dépassement",
    "J'identifie un navire de nuit à partir de ses feux",
  ],
  lesson: [
    {
      title: "Le balisage latéral en région A",
      paragraphs: [
        "La France, comme l'ensemble de l'Europe, se situe en région A du système de balisage maritime. La convention y est simple : la marque bâbord est rouge, de forme cylindrique, avec un voyant cylindrique rouge et un feu rouge ; la marque tribord est verte, de forme conique, avec un voyant conique pointe en haut et un feu vert.",
        "Ces marques ne s'interprètent que dans le sens conventionnel du balisage, qui va généralement du large vers le port, ou dans le sens du flot. En entrant au port, on laisse donc la marque rouge sur bâbord, c'est-à-dire à gauche, et la marque verte sur tribord, à droite. En sortant, tout s'inverse.",
        "En région B, qui couvre notamment le continent américain, le Japon et la Corée, les couleurs sont exactement inversées. C'est la raison pour laquelle on ne mémorise jamais « rouge à gauche » sans préciser la région et le sens de parcours.",
        "Il existe aussi des marques de chenal préféré, bicolores à bande horizontale, qui indiquent quel côté d'une bifurcation est le chenal principal, et des marques spéciales, entièrement jaunes avec un voyant en croix de Saint-André, qui signalent une zone particulière : mouillage, câble, zone de baignade, engin de mesure.",
      ],
      example: [
        "Vous rentrez au port après une sortie. Vous croisez une bouée rouge cylindrique : vous la laissez sur votre gauche. La bouée verte conique se laisse sur votre droite. Si vous ressortez, les mêmes bouées se laissent de l'autre côté.",
      ],
      tip: "En rentrant au port en région A : le rouge à gauche, le vert à droite. Le moyen mnémotechnique tient au fait que le vert et le tribord vont ensemble, comme le feu vert de tribord d'un navire.",
    },
    {
      title: "Cardinales, danger isolé et eaux saines",
      paragraphs: [
        "Les marques cardinales indiquent de quel côté il faut passer par rapport à un danger. Elles sont noires et jaunes, surmontées de deux cônes noirs dont l'orientation donne la clé. Cardinale Nord : deux cônes pointes en haut, noir au-dessus du jaune, on passe au nord de la marque. Cardinale Sud : deux cônes pointes en bas, jaune au-dessus du noir, on passe au sud.",
        "Cardinale Est : les deux cônes sont opposés par la base, la marque est noire avec une large bande jaune médiane, on passe à l'est. Cardinale Ouest : les deux cônes sont opposés par la pointe, formant un sablier, la marque est jaune avec une large bande noire médiane, on passe à l'ouest.",
        "De nuit, les cardinales portent un feu blanc scintillant dont le rythme reprend le cadran d'une horloge : trois éclats pour l'Est, six éclats suivis d'un éclat long pour le Sud, neuf éclats pour l'Ouest, et un scintillement continu pour le Nord.",
        "La marque de danger isolé est noire avec une ou plusieurs larges bandes horizontales rouges, surmontée de deux sphères noires superposées, avec un feu blanc à deux éclats groupés : elle est mouillée sur le danger lui-même, que l'on peut contourner par tous les côtés. La marque d'eaux saines, à bandes verticales rouges et blanches avec un voyant sphérique rouge, indique au contraire une eau libre autour d'elle : elle sert souvent d'atterrissage ou de milieu de chenal.",
      ],
      example: [
        "Une cardinale Ouest est mouillée devant une roche. Ses deux cônes forment un sablier et son feu émet neuf scintillements : vous devez passer à l'ouest de la bouée pour rester dans l'eau libre.",
      ],
      tip: "Les cônes montrent la direction : pointes en haut pour le Nord, pointes en bas pour le Sud, sablier pour l'Ouest. Et 3, 6, 9 comme sur un cadran d'horloge pour Est, Sud, Ouest.",
    },
    {
      title: "Les règles de barre : qui s'écarte de la route de qui",
      paragraphs: [
        "Le règlement international pour prévenir les abordages en mer fixe une hiérarchie entre les navires. Dans l'ordre, un navire non maître de sa manœuvre prime sur un navire à capacité de manœuvre restreinte, qui prime sur un navire handicapé par son tirant d'eau, qui prime sur un navire en train de pêcher, qui prime sur un voilier, qui prime lui-même sur un navire à propulsion mécanique.",
        "La conséquence la plus connue est que le navire à moteur doit s'écarter de la route d'un voilier. Cette règle connaît des exceptions : elle ne joue pas si le voilier est le navire rattrapant, ni si le navire à moteur est non maître de sa manœuvre, à capacité restreinte, handicapé par son tirant d'eau ou en train de pêcher. Un voilier qui utilise son moteur, même avec les voiles hissées, est réglementairement un navire à propulsion mécanique.",
        "Entre deux navires à propulsion mécanique faisant des routes directement opposées, chacun vient sur tribord et ils se croisent bâbord contre bâbord. En croisement, celui qui voit l'autre venir sur sa droite, donc sur tribord, doit s'écarter : l'autre est privilégié et doit maintenir son cap et sa vitesse.",
        "Le navire rattrapant, celui qui approche par l'arrière dans un secteur de plus de 22,5 degrés en arrière du travers, s'écarte toujours, qu'il soit à voile ou à moteur. Enfin, la manœuvre du navire non privilégié doit être franche, exécutée assez tôt et suffisamment ample pour être immédiatement perceptible par l'autre.",
      ],
      example: [
        "Vous êtes à moteur et un autre bateau à moteur apparaît sur votre tribord, en route de collision. C'est vous qui devez manœuvrer : vous ralentissez ou vous venez franchement sur tribord pour passer derrière lui. L'autre, privilégié, garde son cap.",
      ],
      tip: "La règle du croisement se retient comme la priorité à droite en voiture : celui qui voit l'autre à sa droite, à tribord, s'écarte.",
    },
    {
      title: "Entre voiliers, et dans les chenaux étroits",
      paragraphs: [
        "Entre deux voiliers, la première règle porte sur les amures : celui qui reçoit le vent de bâbord s'écarte de la route de celui qui reçoit le vent de tribord. L'amure se détermine par le côté opposé à celui où est bordée la grand-voile.",
        "Si les deux voiliers reçoivent le vent du même bord, c'est celui qui est au vent qui s'écarte de celui qui est sous le vent. Le navire au vent est celui qui se trouve du côté d'où vient le vent par rapport à l'autre.",
        "Dans un chenal étroit, tout navire navigue aussi près que possible de la limite tribord du chenal, c'est-à-dire sur sa droite. Les navires de moins de 20 mètres et les voiliers ne doivent pas gêner le passage d'un navire qui ne peut naviguer qu'à l'intérieur du chenal.",
        "Enfin, la règle qui prime sur toutes les autres est celle de la veille et de la vitesse de sécurité : tout navire doit assurer une veille visuelle et auditive permanente et adapter sa vitesse à la visibilité, au trafic et à l'état de la mer. Aucune règle de priorité ne dispense de manœuvrer pour éviter un abordage imminent.",
      ],
      example: [
        "Deux voiliers convergent. Le premier a le vent venant de bâbord, le second le vent venant de tribord. C'est le premier qui doit s'écarter, quelle que soit sa taille ou son allure.",
      ],
      tip: "Tribord amure est prioritaire. Et à égalité d'amure, le bateau au vent laisse passer celui qui est sous le vent.",
    },
    {
      title: "Les feux de navigation",
      paragraphs: [
        "De nuit, un navire ne s'identifie que par ses feux. Les feux de côté couvrent chacun 112,5 degrés : rouge à bâbord, vert à tribord. Le feu de poupe, blanc, couvre 135 degrés vers l'arrière. Le feu de tête de mât, blanc lui aussi, couvre 225 degrés vers l'avant et n'est porté que par les navires à propulsion mécanique.",
        "Un navire à propulsion mécanique en marche porte donc un feu de tête de mât blanc, ses deux feux de côté et son feu de poupe. Un navire de moins de 12 mètres peut remplacer le feu de tête de mât et le feu de poupe par un unique feu blanc visible sur tout l'horizon, conservé avec les feux de côté.",
        "Un voilier en marche ne porte pas de feu de tête de mât : c'est le signe distinctif qui permet de le reconnaître de nuit. Il porte ses feux de côté et son feu de poupe, éventuellement regroupés en un feu tricolore en tête de mât s'il mesure moins de 20 mètres. Un voilier qui met son moteur en marche doit allumer son feu de tête de mât, redevenant un navire à propulsion mécanique.",
        "Au mouillage, un navire porte un feu blanc visible sur tout l'horizon, et de jour une boule noire à l'avant. Un navire non maître de sa manœuvre montre deux feux rouges superposés visibles sur tout l'horizon et, de jour, deux boules noires. Ces signaux se lisent toujours ensemble : la combinaison des feux, pas un feu isolé, donne l'identification.",
      ],
      example: [
        "De nuit, vous apercevez uniquement un feu rouge et un feu vert, sans aucun feu blanc au-dessus : il s'agit très probablement d'un voilier venant droit sur vous. S'il s'agissait d'un navire à moteur, un feu blanc de tête de mât serait visible.",
      ],
      tip: "Voir un feu rouge devant soi, c'est voir le côté bâbord de l'autre : il traverse de droite à gauche. Un feu vert, c'est son tribord : il traverse de gauche à droite.",
    },
  ],
  exercises: [
    {
      id: "bat2-1",
      level: 1,
      type: "qcm",
      question:
        "En région A, de quelle couleur est la marque latérale bâbord ?",
      choices: ["Verte", "Rouge", "Jaune", "Noire et jaune"],
      answer: 1,
      explanation:
        "En région A, qui couvre la France et l'Europe, la marque bâbord est rouge et cylindrique, avec un voyant cylindrique rouge et un feu rouge ; la marque tribord est verte et conique. Le piège vient de la région B, notamment le continent américain, où les couleurs sont exactement inversées.",
      hint: "En Europe, tribord et vert vont ensemble.",
    },
    {
      id: "bat2-2",
      level: 1,
      type: "qcm",
      question:
        "Vous rentrez au port. De quel côté laissez-vous une bouée verte conique ?",
      choices: ["Sur bâbord, à gauche", "Sur tribord, à droite", "Indifféremment", "Il faut la contourner par le large"],
      answer: 1,
      explanation:
        "Dans le sens conventionnel du balisage, qui va du large vers le port, la marque verte de tribord se laisse à droite et la marque rouge de bâbord à gauche. En sortant du port, l'interprétation s'inverse : c'est le sens de parcours, et non la position sur la carte, qui commande.",
      hint: "Le nom de la marque donne directement le bord où la laisser en entrant.",
    },
    {
      id: "bat2-3",
      level: 1,
      type: "truefalse",
      question:
        "Un navire à propulsion mécanique doit s'écarter de la route d'un voilier.",
      answer: true,
      explanation:
        "Vrai, c'est le principe. Il connaît toutefois des exceptions : la règle ne joue pas si le voilier est le navire rattrapant, ni si le navire à moteur est non maître de sa manœuvre, à capacité de manœuvre restreinte, handicapé par son tirant d'eau ou en train de pêcher. Et un voilier qui utilise son moteur est réglementairement un navire à propulsion mécanique.",
      hint: "Le principe est simple, les exceptions sont l'objet des questions difficiles.",
    },
    {
      id: "bat2-4",
      level: 1,
      type: "qcm",
      question:
        "De quel côté doit-on passer par rapport à une marque cardinale Nord ?",
      choices: ["Au nord de la marque", "Au sud de la marque", "À l'est de la marque", "On ne doit pas s'en approcher"],
      answer: 0,
      explanation:
        "Une marque cardinale indique le côté par lequel il faut passer : au nord d'une cardinale Nord, au sud d'une cardinale Sud, et ainsi de suite. Ses deux cônes pointes en haut et sa partie supérieure noire la rendent immédiatement identifiable. Le danger se trouve donc du côté opposé au nom de la marque.",
      hint: "Le nom de la marque désigne le côté sûr.",
    },
    {
      id: "bat2-5",
      level: 1,
      type: "qcm",
      question:
        "Deux navires à moteur font des routes directement opposées et risquent l'abordage. Que doit faire chacun d'eux ?",
      choices: [
        "Venir sur bâbord et se croiser tribord contre tribord",
        "Le plus petit s'écarte, le plus grand maintient",
        "Venir sur tribord et se croiser bâbord contre bâbord",
        "Stopper les machines tous les deux",
      ],
      answer: 2,
      explanation:
        "Lorsque deux navires à propulsion mécanique font des routes directement opposées, chacun vient sur tribord et ils se croisent bâbord contre bâbord. C'est l'équivalent maritime de la circulation à droite. Le piège consiste à croire que le plus petit ou le moins rapide doit s'écarter : ici les deux manœuvrent, dans le même sens.",
      hint: "Comme sur une route : chacun se décale du même côté.",
    },
    {
      id: "bat2-6",
      level: 2,
      type: "qcm",
      question:
        "Vous êtes à moteur. Un autre navire à moteur apparaît sur votre tribord, en route de collision. Que faites-vous ?",
      choices: [
        "Je maintiens mon cap : je suis privilégié",
        "Je m'écarte de sa route par une manœuvre franche",
        "Je viens sur bâbord pour passer devant lui",
        "J'accélère pour passer avant",
      ],
      answer: 1,
      explanation:
        "En croisement entre deux navires à propulsion mécanique, celui qui voit l'autre sur son tribord doit s'écarter ; l'autre est privilégié et maintient cap et vitesse. La manœuvre doit être franche et exécutée assez tôt pour être immédiatement perceptible. Passer devant en accélérant ou en venant sur bâbord est précisément ce que le règlement proscrit.",
      hint: "C'est l'équivalent maritime de la priorité à droite.",
    },
    {
      id: "bat2-7",
      level: 2,
      type: "qcm",
      question:
        "Quelle marque est noire avec une ou plusieurs bandes horizontales rouges et surmontée de deux sphères noires ?",
      choices: [
        "La marque d'eaux saines",
        "La marque de danger isolé",
        "La marque spéciale",
        "La cardinale Est",
      ],
      answer: 1,
      explanation:
        "La marque de danger isolé est noire à bandes horizontales rouges, avec deux sphères noires superposées et un feu blanc à deux éclats groupés. Elle est mouillée sur le danger lui-même, que l'on peut contourner par n'importe quel côté. À ne pas confondre avec la marque d'eaux saines, à bandes verticales rouges et blanches, qui signale au contraire une eau libre tout autour.",
      hint: "Les bandes horizontales et verticales n'ont pas du tout le même sens.",
    },
    {
      id: "bat2-8",
      level: 2,
      type: "truefalse",
      question:
        "Un navire qui en rattrape un autre doit toujours s'écarter, qu'il soit à voile ou à moteur.",
      answer: true,
      explanation:
        "Vrai. La règle du navire rattrapant prime sur toutes les autres règles de barre entre navires : celui qui approche par un secteur situé à plus de 22,5 degrés en arrière du travers de l'autre doit s'écarter. C'est l'exception la plus importante à la priorité du voilier sur le navire à moteur : un voilier qui rattrape un bateau à moteur doit s'en écarter.",
      hint: "Cette règle prime même sur la priorité de la voile.",
    },
    {
      id: "bat2-9",
      level: 2,
      type: "qcm",
      question:
        "De nuit, vous apercevez un feu rouge et un feu vert, sans aucun feu blanc au-dessus. De quoi s'agit-il probablement ?",
      choices: [
        "D'un navire à moteur venant vers vous",
        "D'un voilier venant vers vous",
        "D'un navire au mouillage",
        "D'une bouée cardinale",
      ],
      answer: 1,
      explanation:
        "Un voilier en marche ne porte pas de feu de tête de mât : voir les deux feux de côté sans feu blanc au-dessus est donc la signature d'un voilier faisant route vers vous. Un navire à propulsion mécanique montrerait en plus un feu blanc de tête de mât. Attention : un voilier qui met son moteur en marche doit allumer ce feu blanc et redevient réglementairement un navire à propulsion mécanique.",
      hint: "Un seul type de navire n'a pas de feu blanc vers l'avant.",
    },
    {
      id: "bat2-10",
      level: 2,
      type: "qcm",
      question:
        "Deux voiliers reçoivent le vent de bords différents. Lequel doit s'écarter ?",
      choices: [
        "Celui qui reçoit le vent de tribord",
        "Celui qui reçoit le vent de bâbord",
        "Le plus rapide des deux",
        "Celui qui est le plus près du vent",
      ],
      answer: 1,
      explanation:
        "Entre deux voiliers recevant le vent de bords différents, celui qui reçoit le vent de bâbord s'écarte de la route de celui qui reçoit le vent de tribord. On dit que tribord amure est privilégié. Si les deux reçoivent le vent du même bord, c'est alors celui qui est au vent qui s'écarte de celui qui est sous le vent.",
      hint: "Tribord amure garde sa route.",
    },
    {
      id: "bat2-11",
      level: 3,
      type: "qcm",
      question:
        "Une marque cardinale porte deux cônes opposés par la pointe, formant un sablier. Que devez-vous faire ?",
      choices: [
        "Passer au nord de la marque",
        "Passer à l'est de la marque",
        "Passer à l'ouest de la marque",
        "Passer au sud de la marque",
      ],
      answer: 2,
      explanation:
        "Deux cônes opposés par la pointe, en forme de sablier, caractérisent la cardinale Ouest : on passe à l'ouest de la marque. Son feu émet neuf scintillements. Le repère mnémotechnique du sablier, qui rappelle un W écrasé, ou celui du cadran d'horloge avec 9 heures à l'ouest, évitent la confusion avec la cardinale Est, dont les cônes sont opposés par la base.",
      hint: "Pensez au cadran d'une horloge : quelle heure est à gauche ?",
    },
    {
      id: "bat2-12",
      level: 3,
      type: "qcm",
      question:
        "Un voilier navigue à la voile avec son moteur en marche. Comment est-il considéré au regard des règles de barre ?",
      choices: [
        "Comme un voilier, tant que les voiles sont hissées",
        "Comme un navire à propulsion mécanique",
        "Comme un navire à capacité de manœuvre restreinte",
        "Il est prioritaire sur tous les autres navires",
      ],
      answer: 1,
      explanation:
        "Un voilier qui utilise son moteur, même avec les voiles hissées, est réglementairement un navire à propulsion mécanique : il perd la priorité de la voile et doit porter son feu de tête de mât la nuit et un cône noir pointe en bas le jour. C'est l'un des pièges les plus classiques de l'examen, et une source réelle d'abordages.",
      hint: "Ce qui compte est la source de propulsion utilisée, pas la présence de voiles.",
    },
    {
      id: "bat2-13",
      level: 3,
      type: "truefalse",
      question:
        "Le navire privilégié doit maintenir son cap et sa vitesse, même si l'abordage devient imminent.",
      answer: false,
      explanation:
        "Faux. Le navire privilégié maintient en principe cap et vitesse pour rendre son comportement prévisible, mais il doit manœuvrer dès qu'il apparaît que le navire non privilégié ne fait pas le nécessaire, et en tout état de cause pour éviter un abordage imminent. Aucune règle de priorité ne peut justifier une collision : c'est le principe fondamental du règlement.",
      hint: "Une priorité n'est jamais un droit d'aller au contact.",
    },
    {
      id: "bat2-14",
      level: 3,
      type: "qcm",
      question:
        "De nuit, vous apercevez deux feux rouges superposés visibles sur tout l'horizon. Que signalent-ils ?",
      choices: [
        "Un navire au mouillage",
        "Un navire non maître de sa manœuvre",
        "Un navire en train de pêcher au chalut",
        "Une marque de danger isolé",
      ],
      answer: 1,
      explanation:
        "Deux feux rouges superposés visibles sur tout l'horizon signalent un navire non maître de sa manœuvre, qui montre de jour deux boules noires. Ce navire prime sur tous les autres : c'est à vous de vous écarter largement. Le navire au mouillage porte, lui, un feu blanc visible sur tout l'horizon et une boule noire de jour.",
      hint: "Ce navire est en tête de la hiérarchie des priorités.",
    },
    {
      id: "bat2-15",
      level: 3,
      type: "qcm",
      question:
        "Dans un chenal étroit, où doit naviguer un navire ?",
      choices: [
        "Au milieu du chenal",
        "Aussi près que possible de la limite bâbord du chenal",
        "Aussi près que possible de la limite tribord du chenal",
        "Indifféremment, selon le vent",
      ],
      answer: 2,
      explanation:
        "Dans un chenal étroit, tout navire navigue aussi près que possible de la limite tribord, c'est-à-dire de sa droite, exactement comme sur une route. Les navires de moins de 20 mètres et les voiliers ne doivent en outre pas gêner le passage d'un navire qui ne peut naviguer qu'à l'intérieur du chenal, quelle que soit leur priorité théorique.",
      hint: "Comme en voiture, on serre à droite.",
    },
  ],
};

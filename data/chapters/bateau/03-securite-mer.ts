import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "bateau-securite",
  subject: "bateau",
  grade: "permis",
  num: 3,
  title: "Sécurité et météo en mer",
  domain: "grandeurs",
  icon: "LifeBuoy",
  teaser:
    "Canal 16, numéro 196, échelle de Beaufort, marées : savoir alerter, comprendre la météo et anticiper la mer.",
  objectives: [
    "Je connais le matériel de sécurité exigé selon la zone de navigation",
    "Je sais utiliser la VHF et le canal 16, et j'émets un message de détresse correct",
    "Je connais le rôle du CROSS et le numéro d'urgence maritime",
    "Je comprends l'échelle de Beaufort, les avis de vent fort, les marées et les courants",
  ],
  lesson: [
    {
      title: "Le matériel de sécurité par zone de navigation",
      paragraphs: [
        "L'armement de sécurité est fonction de la distance d'éloignement d'un abri, et non de la taille du navire. Trois zones se succèdent : basique jusqu'à 2 milles, côtier de 2 à 6 milles, hauturier au-delà de 6 milles. Chaque zone reprend le matériel de la précédente et y ajoute des éléments.",
        "L'armement basique comprend notamment un équipement individuel de flottabilité de 50 newtons par personne embarquée, un moyen de repérage lumineux, un dispositif permettant de remonter à bord, un moyen d'assèchement, un moyen de propulsion de secours, un dispositif de remorquage et une ligne de mouillage.",
        "L'armement côtier ajoute des équipements de flottabilité de 100 newtons, trois feux rouges automatiques à main, un compas magnétique, la carte marine de la zone fréquentée, le règlement international pour prévenir les abordages, un dispositif de repérage et d'assistance pour une personne tombée à l'eau et un moyen de recevoir les prévisions météorologiques.",
        "L'armement hauturier ajoute des équipements de 150 newtons, un radeau de survie ou un engin flottant, un harnais et sa longe, une VHF fixe, le matériel de navigation complet avec livre des feux et journal de bord, ainsi qu'une trousse de secours. La logique est celle du délai avant assistance : plus on s'éloigne, plus il faut pouvoir tenir seul.",
      ],
      example: [
        "Avant chaque sortie, le chef de bord vérifie que le matériel correspond à la zone réellement fréquentée, que les feux rouges à main ne sont pas périmés et que chacun sait où se trouvent les équipements de flottabilité.",
      ],
      tip: "L'armement dépend de la distance à l'abri, jamais de la taille du bateau. Un petit bateau à 5 milles doit avoir l'armement côtier complet.",
    },
    {
      title: "La VHF et le canal 16",
      paragraphs: [
        "La VHF marine est le moyen de communication de référence en mer : contrairement au téléphone, elle est entendue par tous les navires à portée et par les centres de secours, ce qui multiplie les chances d'une assistance rapide.",
        "Le canal 16, sur la fréquence 156,800 MHz, est le canal international de détresse, d'urgence, de sécurité et d'appel. Il fait l'objet d'une veille permanente. On ne l'utilise jamais pour une conversation : après avoir établi le contact, on bascule sur un canal de dégagement pour poursuivre l'échange.",
        "Trois niveaux de message existent. MAYDAY, répété trois fois, annonce une détresse : un danger grave et imminent menaçant le navire ou une personne. PAN PAN annonce une urgence : une situation sérieuse mais sans danger immédiat, par exemple une avarie ou un blessé stable. SÉCURITÉ annonce un message de sécurité, comme un obstacle flottant ou une information météorologique.",
        "Un message de détresse suit toujours le même ordre : MAYDAY trois fois, le nom du navire trois fois, la position, la nature de la détresse, l'assistance demandée, le nombre de personnes à bord, puis « à vous ». Sur les VHF à appel sélectif numérique, le bouton de détresse transmet automatiquement l'identifiant du navire et sa position.",
      ],
      example: [
        "Voie d'eau importante à bord : « MAYDAY, MAYDAY, MAYDAY, ici Alizé, Alizé, Alizé, position 43 degrés 10 nord, 006 degrés 20 est, voie d'eau, nous coulons, demandons assistance immédiate, quatre personnes à bord, à vous. »",
      ],
      tip: "MAYDAY pour la vie en danger, PAN PAN pour l'urgence sans péril immédiat, SÉCURITÉ pour l'information. Trois mots, trois niveaux de gravité.",
    },
    {
      title: "Le CROSS et l'alerte depuis un téléphone",
      paragraphs: [
        "Les centres régionaux opérationnels de surveillance et de sauvetage, les CROSS, assurent la coordination des opérations de recherche et de sauvetage en mer, la surveillance de la navigation et la diffusion des informations de sécurité maritime.",
        "Depuis un téléphone, le numéro d'urgence maritime est le 196. Il met directement en relation avec le CROSS compétent, sans passer par un opérateur généraliste, ce qui fait gagner un temps précieux. Le 112 reste utilisable et sera réorienté.",
        "La VHF reste toutefois préférable au téléphone : l'appel est entendu par tous les navires à proximité, qui peuvent intervenir avant les moyens de secours, et l'appel sélectif numérique transmet automatiquement la position. Le téléphone, lui, est une liaison privée et dépend d'une couverture réseau souvent absente au large.",
        "Les CROSS diffusent également les bulletins météorologiques et les avis de vent fort sur les canaux VHF annoncés au préalable sur le canal 16. Écouter ces diffusions fait partie de la préparation normale d'une sortie.",
      ],
      example: [
        "Vous apercevez une personne en difficulté dans l'eau depuis votre bord. Vous lancez immédiatement un appel sur le canal 16, et à défaut vous composez le 196 : les navires alentour reçoivent l'alerte en même temps que le CROSS.",
      ],
      tip: "En mer : canal 16 d'abord, 196 ensuite. La VHF alerte les secours et tous les bateaux voisins ; le téléphone n'alerte qu'un interlocuteur.",
    },
    {
      title: "Signaux de détresse et conduite en cas d'incident",
      paragraphs: [
        "Outre la radio, plusieurs signaux de détresse sont reconnus internationalement : les fusées à parachute rouges et les feux rouges à main, le fumigène orange, le pavillon carré accompagné d'une boule au-dessus ou en dessous, les pavillons N et C hissés ensemble, le signal SOS émis par tout moyen, et le geste consistant à lever et abaisser lentement les bras étendus de chaque côté du corps.",
        "Les artifices ont une date de péremption : périmés, ils peuvent ne pas fonctionner et ne satisfont plus à l'obligation d'armement. On les déclenche sous le vent, bras tendu, jamais vers une personne ou vers les voiles, et seulement lorsqu'un observateur potentiel est susceptible de les voir.",
        "En cas d'homme à la mer, la séquence est immuable : crier l'alerte pour que tout l'équipage soit informé, lancer immédiatement une bouée ou un objet flottant pour marquer la position, désigner une personne chargée de ne jamais quitter la victime des yeux, puis manœuvrer pour revenir et récupérer par sous le vent, moteur au point mort à l'approche pour écarter tout risque avec l'hélice.",
        "En cas d'incendie, de voie d'eau ou d'avarie majeure, l'ordre des priorités est constant : la vie humaine d'abord, le navire ensuite. On endosse les équipements de flottabilité, on lance l'alerte tôt plutôt que tard, et on ne quitte le navire qu'en dernier recours, un bateau même en difficulté restant plus visible et plus flottant qu'un naufragé.",
      ],
      example: [
        "Un équipier passe par-dessus bord. Vous criez « homme à la mer », vous jetez la bouée couronne, vous désignez un veilleur qui garde le contact visuel, puis vous revenez lentement, en approchant par sous le vent, moteur débrayé au moment de la récupération.",
      ],
      tip: "Homme à la mer : alerter, marquer, garder l'œil, revenir. L'erreur classique est de manœuvrer d'abord et de perdre la victime de vue.",
    },
    {
      title: "Météo, Beaufort, marées et courants",
      paragraphs: [
        "L'échelle de Beaufort mesure la force du vent de 0 à 12. La force 0 correspond au calme, la force 4 à une jolie brise, la force 6 à un vent frais. À partir de la force 7, le grand frais, la mer devient difficile pour un bateau de plaisance côtier. La force 8 correspond au coup de vent, la force 10 à la tempête, la force 12 à l'ouragan.",
        "Les avis de vent fort sont diffusés par les CROSS et par les bulletins météorologiques marins. L'avis de grand frais correspond à un vent atteignant la force 7 ; l'avis de coup de vent vise les forces 8 et 9 ; l'avis de tempête, les forces 10 et 11 ; l'avis d'ouragan, la force 12. Un plaisancier consulte la météo avant chaque sortie et pendant la navigation, un bulletin étant valable pour une durée limitée.",
        "La marée résulte de l'attraction de la Lune et du Soleil. Le cycle complet dure environ 12 heures et 25 minutes, avec approximativement 6 heures de montée, le flot, et 6 heures de descente, le jusant. Le coefficient de marée, compris entre 20 et 120, mesure l'amplitude : au-delà de 70 on parle de vive-eau, en dessous de morte-eau.",
        "La règle des douzièmes donne une estimation rapide de la hauteur d'eau : pendant les six heures de marée, la variation se répartit en un douzième, deux douzièmes, trois douzièmes, trois douzièmes, deux douzièmes puis un douzième de l'amplitude totale. Elle explique pourquoi l'eau monte le plus vite au milieu de la marée.",
        "Les courants de marée peuvent atteindre plusieurs nœuds dans certains passages et modifient considérablement la route sur le fond. Un courant contraire au vent lève une mer courte et dure, bien plus dangereuse que le vent seul ne le laisserait prévoir : c'est une situation classique d'accident en zone côtière.",
      ],
      example: [
        "Le bulletin annonce un avis de coup de vent, force 8. Vous renoncez à votre sortie : au-delà de la force 6, un bateau de plaisance côtier est déjà dans des conditions difficiles, et un avis de coup de vent ne se négocie pas.",
      ],
      tip: "Beaufort : 7 grand frais, 8 coup de vent, 10 tempête, 12 ouragan. Et pour la marée, retenez 1-2-3-3-2-1 : la règle des douzièmes.",
    },
  ],
  exercises: [
    {
      id: "bat3-1",
      level: 1,
      type: "qcm",
      question: "Quel est le canal VHF international de détresse et d'appel ?",
      choices: ["Canal 6", "Canal 9", "Canal 16", "Canal 72"],
      answer: 2,
      explanation:
        "Le canal 16, sur la fréquence 156,800 MHz, est le canal international de détresse, d'urgence, de sécurité et d'appel, veillé en permanence. Il ne sert jamais à converser : une fois le contact établi, on bascule sur un canal de dégagement. Le piège est de l'utiliser pour des échanges de routine, ce qui encombre un canal vital.",
      hint: "Le même numéro que l'âge minimal du permis côtier.",
    },
    {
      id: "bat3-2",
      level: 1,
      type: "qcm",
      question:
        "Quel numéro composer depuis un téléphone pour joindre les secours en mer ?",
      choices: ["15", "18", "196", "197"],
      answer: 2,
      explanation:
        "Le 196 est le numéro d'urgence maritime : il met directement en relation avec le CROSS compétent. Le 112 fonctionne également et sera réorienté. La VHF sur le canal 16 reste toutefois préférable, car elle alerte simultanément les secours et tous les navires à proximité, qui peuvent intervenir plus vite.",
      hint: "Un numéro à trois chiffres, dédié à la mer.",
    },
    {
      id: "bat3-3",
      level: 1,
      type: "truefalse",
      question: "L'échelle de Beaufort mesure la force du vent de 0 à 12.",
      answer: true,
      explanation:
        "Vrai. L'échelle de Beaufort gradue la force du vent de 0, le calme, à 12, l'ouragan. Elle décrit à la fois le vent et l'état de la mer associé. Le repère utile pour un plaisancier côtier est la force 6, vent frais, au-delà de laquelle les conditions deviennent rapidement éprouvantes.",
      hint: "Treize degrés au total, du calme à l'ouragan.",
    },
    {
      id: "bat3-4",
      level: 1,
      type: "qcm",
      question:
        "Quel mot annonce un message de détresse sur la VHF ?",
      choices: ["SÉCURITÉ", "PAN PAN", "MAYDAY", "SOS"],
      answer: 2,
      explanation:
        "MAYDAY, répété trois fois, annonce une détresse : danger grave et imminent menaçant le navire ou une personne. PAN PAN annonce une urgence sans péril immédiat, et SÉCURITÉ un message d'information. SOS est bien un signal de détresse reconnu, mais il s'agit d'un signal en morse ou en lumière, pas de l'annonce vocale utilisée en radiotéléphonie.",
      hint: "Le mot le plus grave se répète trois fois.",
    },
    {
      id: "bat3-5",
      level: 1,
      type: "qcm",
      question:
        "De quoi dépend le niveau d'armement de sécurité exigé à bord ?",
      choices: [
        "De la longueur du navire",
        "De la distance d'éloignement d'un abri",
        "De la puissance du moteur",
        "Du nombre de personnes embarquées",
      ],
      answer: 1,
      explanation:
        "L'armement dépend de la distance d'éloignement d'un abri : basique jusqu'à 2 milles, côtier de 2 à 6 milles, hauturier au-delà. Le piège classique est de raisonner en taille de bateau : un petit bateau qui s'éloigne à 5 milles doit disposer de tout l'armement côtier, feux rouges à main et compas compris.",
      hint: "Ce qui compte est le temps qu'il faudrait pour vous porter secours.",
    },
    {
      id: "bat3-6",
      level: 2,
      type: "qcm",
      question:
        "Un équipier tombe à l'eau. Quelle est la première action à effectuer ?",
      choices: [
        "Manœuvrer immédiatement pour faire demi-tour",
        "Crier l'alerte et lancer une bouée pour marquer la position",
        "Appeler le CROSS sur le canal 16",
        "Couper le moteur et attendre",
      ],
      answer: 1,
      explanation:
        "La séquence est : alerter l'équipage, marquer la position en lançant immédiatement une bouée ou un objet flottant, désigner un veilleur qui ne quitte plus la victime des yeux, puis manœuvrer pour revenir en approchant par sous le vent, moteur débrayé au moment de la récupération. Le piège est de manœuvrer d'abord : on perd alors la victime de vue en quelques secondes.",
      hint: "Une tête dans la houle disparaît en quelques instants.",
    },
    {
      id: "bat3-7",
      level: 2,
      type: "qcm",
      question:
        "À quelle force de l'échelle de Beaufort correspond un avis de grand frais ?",
      choices: ["Force 5", "Force 6", "Force 7", "Force 9"],
      answer: 2,
      explanation:
        "L'avis de grand frais correspond à la force 7. L'avis de coup de vent vise les forces 8 et 9, l'avis de tempête les forces 10 et 11, et l'avis d'ouragan la force 12. Le piège consiste à confondre grand frais et coup de vent, qui sont deux niveaux distincts d'avis diffusés par les CROSS.",
      hint: "C'est le premier niveau d'avis diffusé pour vent fort.",
    },
    {
      id: "bat3-8",
      level: 2,
      type: "truefalse",
      question:
        "Après avoir établi le contact sur le canal 16, on poursuit la conversation sur ce même canal.",
      answer: false,
      explanation:
        "Faux. Le canal 16 est un canal de détresse, d'urgence, de sécurité et d'appel : une fois le contact établi, on bascule immédiatement sur un canal de dégagement pour poursuivre l'échange. Occuper le canal 16 avec une conversation de routine peut empêcher un appel de détresse d'être entendu.",
      hint: "Ce canal sert à se joindre, pas à discuter.",
    },
    {
      id: "bat3-9",
      level: 2,
      type: "qcm",
      question:
        "Quelle est la durée approximative d'un cycle complet de marée ?",
      choices: ["6 heures", "12 h 25 environ", "18 heures", "24 heures"],
      answer: 1,
      explanation:
        "Un cycle complet de marée dure environ 12 heures et 25 minutes, soit approximativement 6 heures de flot, la montée, et 6 heures de jusant, la descente. Le décalage d'environ 25 minutes explique que les heures de marée avancent chaque jour. Le piège est de retenir 6 heures, qui correspondent à une demi-marée seulement.",
      hint: "Il y a deux marées hautes par jour, avec un léger décalage quotidien.",
    },
    {
      id: "bat3-10",
      level: 2,
      type: "qcm",
      question:
        "Vous devez déclencher un feu rouge à main. Comment procédez-vous ?",
      choices: [
        "Sous le vent, bras tendu, jamais dirigé vers une personne ou les voiles",
        "Au vent, en le tenant contre soi pour le protéger",
        "En le pointant vers le navire que je veux alerter",
        "En le posant sur le pont pour avoir les mains libres",
      ],
      answer: 0,
      explanation:
        "Un feu à main se déclenche sous le vent, bras tendu à l'écart du corps, jamais dirigé vers une personne, vers les voiles ou vers le pont : il produit des scories brûlantes. On l'utilise seulement quand un observateur est susceptible de le voir, car le stock est limité. Les artifices périmés ne satisfont plus à l'obligation d'armement et peuvent ne pas fonctionner.",
      hint: "Pensez à la trajectoire des retombées brûlantes.",
    },
    {
      id: "bat3-11",
      level: 3,
      type: "qcm",
      question:
        "Quelle situation justifie l'usage du signal PAN PAN plutôt que MAYDAY ?",
      choices: [
        "Le navire coule et l'équipage doit être évacué",
        "Une avarie de moteur sans danger immédiat pour les personnes",
        "Un obstacle flottant signalé aux autres navires",
        "Une demande de bulletin météorologique",
      ],
      answer: 1,
      explanation:
        "PAN PAN annonce une urgence : une situation sérieuse, comme une avarie ou un blessé stable, mais sans danger grave et imminent. MAYDAY est réservé au péril immédiat pour le navire ou les personnes. Le signalement d'un obstacle flottant relève, lui, du message SÉCURITÉ. Le piège est de sous-évaluer une situation qui se dégrade : en cas de doute réel sur la vie de quelqu'un, on émet MAYDAY.",
      hint: "Trois niveaux : information, urgence, détresse.",
    },
    {
      id: "bat3-12",
      level: 3,
      type: "qcm",
      question:
        "Que signifie un coefficient de marée de 95 ?",
      choices: [
        "Une morte-eau, avec de faibles amplitudes",
        "Une vive-eau, avec de fortes amplitudes et des courants marqués",
        "Une absence de marée",
        "Un coefficient impossible, le maximum étant 80",
      ],
      answer: 1,
      explanation:
        "Le coefficient de marée varie de 20 à 120. Au-delà de 70 on parle de vive-eau : l'amplitude entre basse et pleine mer est forte et les courants de marée sont plus soutenus, ce qui affecte la route sur le fond et la hauteur d'eau disponible sur les hauts-fonds. En dessous de 70, on parle de morte-eau.",
      hint: "Le seuil qui sépare vive-eau et morte-eau se situe autour de 70.",
    },
    {
      id: "bat3-13",
      level: 3,
      type: "truefalse",
      question:
        "En mer, un appel téléphonique au 196 est préférable à un appel VHF sur le canal 16.",
      answer: false,
      explanation:
        "Faux. La VHF est préférable : l'appel est reçu simultanément par le CROSS et par tous les navires à portée, qui peuvent porter assistance bien avant les moyens de secours, et l'appel sélectif numérique transmet automatiquement l'identité et la position du navire. Le téléphone n'établit qu'une liaison privée et dépend d'une couverture réseau souvent absente au large. Le 196 reste précieux quand la VHF est indisponible.",
      hint: "L'un des deux moyens alerte tout le monde à la fois.",
    },
    {
      id: "bat3-14",
      level: 3,
      type: "qcm",
      question:
        "Selon la règle des douzièmes, à quel moment la hauteur d'eau varie-t-elle le plus vite ?",
      choices: [
        "Pendant la première heure de marée",
        "Pendant les troisième et quatrième heures",
        "Pendant la dernière heure",
        "La variation est constante sur les six heures",
      ],
      answer: 1,
      explanation:
        "La règle des douzièmes répartit la variation sur six heures selon la séquence 1, 2, 3, 3, 2, 1 douzièmes de l'amplitude : l'eau monte ou descend donc le plus vite au milieu de la marée, pendant les troisième et quatrième heures. Le piège pratique est de sous-estimer cette vitesse quand on est échoué ou mouillé sur un haut-fond.",
      hint: "La séquence 1-2-3-3-2-1 donne directement la réponse.",
    },
    {
      id: "bat3-15",
      level: 3,
      type: "qcm",
      question:
        "Un vent de force 6 souffle contre un courant de marée de 3 nœuds. Que faut-il en attendre ?",
      choices: [
        "Une mer plus plate, le courant amortissant les vagues",
        "Une mer courte et dure, plus dangereuse que le vent seul ne le laisserait prévoir",
        "Un effet négligeable sur l'état de la mer",
        "Une accélération du navire sans conséquence",
      ],
      answer: 1,
      explanation:
        "Quand le vent et le courant sont opposés, la mer se creuse et se raccourcit : les vagues deviennent hautes, rapprochées et cassantes, dans des conditions bien plus dures que celles annoncées par la seule force du vent. C'est une cause classique d'accident dans les passages à fort courant. Vent et courant dans le même sens produisent au contraire une mer plus régulière.",
      hint: "Deux forces opposées se rencontrent à la surface de l'eau.",
    },
  ],
};

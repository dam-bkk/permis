import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "code-vitesses",
  subject: "code",
  grade: "permis",
  num: 2,
  title: "Vitesses et distances",
  domain: "grandeurs",
  icon: "Gauge",
  teaser:
    "Limitations, règle des 2 secondes, distances d'arrêt et sanctions : maîtriser sa vitesse.",
  objectives: [
    "Je connais les vitesses maximales autorisées selon le type de route",
    "Je sais adapter ma vitesse à la pluie, au brouillard et au permis probatoire",
    "Je sais mesurer ma distance de sécurité et estimer ma distance d'arrêt",
    "Je connais les sanctions applicables aux excès de vitesse",
  ],
  lesson: [
    {
      title: "Les vitesses maximales selon la route",
      paragraphs: [
        "En agglomération, la vitesse est limitée à 50 km/h. Elle peut être relevée à 70 km/h sur certaines sections où les accès riverains et les traversées piétonnes sont peu nombreux et protégés, et de nombreuses communes l'abaissent au contraire à 30 km/h.",
        "Hors agglomération, la limitation est de 80 km/h sur les routes à double sens sans séparateur central. L'autorité locale chargée de la circulation peut relever cette limite à 90 km/h sur les sections qui relèvent de sa compétence : c'est pourquoi certains départements affichent 80 et d'autres 90.",
        "Toujours hors agglomération, la vitesse est de 90 km/h sur les sections comportant au moins deux voies affectées à un même sens de circulation, de 110 km/h sur les routes à deux chaussées séparées par un terre-plein central, et de 130 km/h sur autoroute.",
        "Ces valeurs ne s'entendent que dans des conditions optimales : bonnes conditions atmosphériques, trafic fluide, véhicule en bon état. Elles ne dispensent jamais de rester maître de sa vitesse et de l'adapter à l'état de la chaussée, à la visibilité et aux obstacles prévisibles.",
      ],
      example: [
        "Vous quittez une autoroute limitée à 130 km/h pour une deux fois deux voies séparées par un terre-plein : la limite passe à 110 km/h. À la sortie de cette voie rapide, sur une route à double sens sans séparateur, elle tombe à 80 km/h, sauf panneau indiquant 90.",
      ],
      tip: "Un panneau de limitation ne fixe jamais une vitesse à tenir : c'est un plafond, jamais une consigne.",
    },
    {
      title: "Pluie, brouillard et permis probatoire",
      paragraphs: [
        "En cas de pluie ou d'autres précipitations, les limitations sont abaissées : 110 km/h sur les autoroutes normalement limitées à 130, 100 km/h sur les autres sections d'autoroute et sur les routes à deux chaussées séparées, et 80 km/h sur les autres routes hors agglomération. Une route déjà limitée à 80 km/h reste donc à 80 sous la pluie, et l'agglomération reste à 50.",
        "Lorsque la visibilité tombe en dessous de 50 mètres, quelle qu'en soit la cause (brouillard, neige, forte pluie), la vitesse est limitée à 50 km/h sur toutes les routes, autoroute comprise.",
        "Pendant toute la période probatoire, ainsi que pour tout élève conducteur, les plafonds sont abaissés à 110 km/h sur les autoroutes limitées à 130, 100 km/h sur les autres autoroutes et les routes à chaussées séparées, et 80 km/h sur les autres routes. En agglomération, la limite reste de 50 km/h.",
        "Le conducteur en période probatoire doit apposer de façon visible le disque « A » à l'arrière de son véhicule. Lorsque plusieurs règles se cumulent, c'est toujours la plus basse qui s'applique.",
      ],
      example: [
        "Permis probatoire, sur une autoroute limitée à 130 km/h : votre plafond est de 110 km/h par temps sec. S'il se met à pleuvoir, la limite générale descend elle aussi à 110 km/h : votre vitesse maximale reste donc 110 km/h.",
      ],
      tip: "Deux règles applicables en même temps ? On retient la plus contraignante, jamais la moyenne.",
    },
    {
      title: "La distance de sécurité : la règle des 2 secondes",
      paragraphs: [
        "Lorsque deux véhicules se suivent, le conducteur du second doit maintenir une distance suffisante pour éviter une collision en cas de ralentissement brusque ou d'arrêt subit. Le code fixe cette distance à celle parcourue pendant un délai d'au moins deux secondes.",
        "En pratique, on repère un point fixe au bord de la route (panneau, arbre, marquage) : lorsque le véhicule qui précède le dépasse, on compte deux secondes. Si l'on atteint le repère avant la fin du décompte, on est trop près.",
        "Hors agglomération, les véhicules de plus de 3,5 tonnes ou de plus de 7 mètres qui se suivent à la même vitesse doivent respecter une distance d'au moins 50 mètres.",
        "Le non-respect des distances de sécurité est une contravention de 4e classe : 135 € d'amende forfaitaire et 3 points en moins. Par temps de pluie ou sur chaussée glissante, deux secondes ne suffisent plus : on double l'intervalle.",
      ],
      example: [
        "À 90 km/h, vous parcourez 25 mètres par seconde. Deux secondes représentent donc 50 mètres, soit environ la longueur de deux traits d'axe et de leurs intervalles sur une route hors agglomération.",
      ],
      tip: "Comptez à voix haute « mille un, mille deux » : la formule dure à peu près deux secondes et évite de compter trop vite.",
    },
    {
      title: "Distance d'arrêt = distance de réaction + distance de freinage",
      paragraphs: [
        "La distance d'arrêt est la somme de deux distances : celle parcourue pendant le temps de réaction, avant même que le pied n'appuie sur le frein, et celle nécessaire pour immobiliser le véhicule une fois le freinage engagé.",
        "Le temps de réaction d'un conducteur en pleine possession de ses moyens est d'environ une seconde. La distance de réaction s'estime facilement : on multiplie le chiffre des dizaines de la vitesse par 3. À 50 km/h, cela fait 15 mètres ; à 90 km/h, 27 mètres ; à 130 km/h, 39 mètres.",
        "Pour la distance d'arrêt totale sur chaussée sèche, le repère de calcul retenu en auto-école consiste à multiplier le chiffre des dizaines par lui-même : environ 25 mètres à 50 km/h, 81 mètres à 90 km/h, 169 mètres à 130 km/h. Sur chaussée mouillée, il faut compter environ une fois et demie ces valeurs.",
        "La fatigue, l'alcool, les médicaments ou un simple regard sur un écran allongent le temps de réaction : à 130 km/h, deux secondes d'inattention représentent 72 mètres parcourus à l'aveugle.",
      ],
      example: [
        "À 50 km/h en ville, un enfant surgit à 20 mètres. Vous parcourez déjà 15 mètres avant de commencer à freiner : il ne reste que 5 mètres de freinage, très loin des 25 mètres nécessaires pour vous arrêter.",
      ],
      tip: "Mémo des dizaines : distance de réaction = dizaines × 3, distance d'arrêt sur sol sec = dizaines × dizaines.",
    },
    {
      title: "Énergie du choc et sanctions",
      paragraphs: [
        "L'énergie libérée lors d'un choc augmente avec le carré de la vitesse : en doublant la vitesse, on multiplie cette énergie par quatre. Passer de 50 à 100 km/h ne double donc pas la violence de l'impact, il la quadruple. Un choc frontal à 50 km/h contre un obstacle fixe équivaut à une chute d'environ dix mètres, soit une chute du troisième étage.",
        "Les sanctions dépendent de l'importance du dépassement. Un excès inférieur à 5 km/h coûte 68 € lorsque la vitesse maximale autorisée est supérieure à 50 km/h, 135 € lorsqu'elle est inférieure ou égale à 50 km/h, sans retrait de point. Entre 5 et 19 km/h, mêmes montants, mais 1 point en moins.",
        "Au-delà, il s'agit d'une contravention de 4e classe à 135 € : 2 points pour un excès de 20 à 29 km/h, 3 points de 30 à 39 km/h, 4 points de 40 à 49 km/h. À partir de 30 km/h, le conducteur risque en outre une suspension du permis pouvant aller jusqu'à 3 ans et un stage de sensibilisation à ses frais.",
        "Depuis le 29 décembre 2025, un dépassement de 50 km/h ou plus n'est plus une contravention mais un délit : jusqu'à 3 mois d'emprisonnement et 3 750 € d'amende, 6 points retirés, confiscation possible du véhicule et suspension ou annulation du permis. Un excès de 30 km/h ou plus constitue par ailleurs une circonstance aggravante en cas d'accident corporel.",
      ],
      example: [
        "Contrôlé à 145 km/h sur une route limitée à 80 km/h, le dépassement est de 65 km/h : le conducteur ne reçoit pas une amende forfaitaire ordinaire, il commet un délit routier et encourt une peine de prison.",
      ],
      tip: "Sous les 5 km/h de dépassement, l'amende reste due : seul le retrait de point disparaît. Ce n'est pas une tolérance.",
    },
  ],
  exercises: [
    {
      id: "cvit-1",
      level: 1,
      type: "qcm",
      question:
        "Vous franchissez le panneau d'entrée d'agglomération et aucun panneau de limitation n'est implanté. Quelle est la vitesse maximale autorisée ?",
      choices: ["50 km/h", "30 km/h", "70 km/h", "90 km/h"],
      answer: 0,
      explanation:
        "L'entrée d'agglomération, matérialisée par le panneau portant le nom de la commune, fixe à elle seule la limitation à 50 km/h : aucun panneau de vitesse n'est nécessaire. Le piège est d'attendre une confirmation chiffrée pour lever le pied.",
      hint: "Le panneau d'entrée d'agglomération est lui-même un panneau de limitation.",
    },
    {
      id: "cvit-2",
      level: 1,
      type: "qcm",
      question:
        "Sur autoroute, par temps sec, quelle est la vitesse maximale autorisée pour un conducteur qui n'est plus en période probatoire ?",
      choices: ["110 km/h", "120 km/h", "130 km/h", "150 km/h"],
      answer: 2,
      explanation:
        "La vitesse maximale autorisée sur autoroute est de 130 km/h dans des conditions normales. Attention : certaines sections d'autoroute sont limitées à 110 km/h par arrêté local, et la signalisation prime alors sur la règle générale.",
    },
    {
      id: "cvit-3",
      level: 1,
      type: "truefalse",
      question:
        "Par temps de pluie, la vitesse maximale autorisée sur une autoroute limitée à 130 km/h passe à 110 km/h.",
      answer: true,
      explanation:
        "Vrai. En cas de pluie ou d'autres précipitations, les limitations sont abaissées : 110 km/h sur les autoroutes normalement limitées à 130, 100 km/h sur les autres sections d'autoroute et sur les routes à chaussées séparées. Cet abaissement s'applique automatiquement, sans qu'aucun panneau ne le rappelle.",
      hint: "Cette réduction ne dépend d'aucune signalisation : elle est automatique.",
    },
    {
      id: "cvit-4",
      level: 1,
      type: "qcm",
      question:
        "Vous êtes en période probatoire. Sur une autoroute limitée à 130 km/h, quelle vitesse ne devez-vous pas dépasser ?",
      choices: [
        "130 km/h, comme les autres conducteurs",
        "120 km/h",
        "100 km/h",
        "110 km/h",
      ],
      answer: 3,
      explanation:
        "Pendant le délai probatoire, les plafonds sont de 110 km/h sur les autoroutes limitées à 130, 100 km/h sur les autres autoroutes et les routes à deux chaussées séparées, et 80 km/h sur les autres routes. Le disque « A » doit par ailleurs être apposé de façon visible à l'arrière du véhicule.",
      hint: "Le jeune conducteur roule 20 km/h en dessous du plafond autoroutier.",
    },
    {
      id: "cvit-5",
      level: 1,
      type: "qcm",
      question:
        "La distance de sécurité à respecter avec le véhicule qui précède correspond à la distance parcourue pendant :",
      choices: ["1 seconde", "3 secondes", "5 secondes", "2 secondes"],
      answer: 3,
      explanation:
        "Le code impose un intervalle correspondant à la distance parcourue pendant un délai d'au moins deux secondes. Le piège est de raisonner en mètres fixes : deux secondes représentent 28 mètres à 50 km/h mais 72 mètres à 130 km/h. Le non-respect coûte 135 € et 3 points.",
      hint: "La règle est exprimée en temps, pas en mètres.",
    },
    {
      id: "cvit-6",
      level: 2,
      type: "qcm",
      question:
        "Hors agglomération, vous circulez sur une route à double sens sans séparateur central et aucun panneau n'est visible. Quelle est la vitesse maximale autorisée ?",
      choices: [
        "70 km/h",
        "100 km/h",
        "80 km/h, sauf relèvement à 90 km/h décidé par l'autorité locale",
        "110 km/h",
      ],
      answer: 2,
      explanation:
        "La limitation par défaut sur ces routes est de 80 km/h. L'autorité locale chargée de la circulation peut la relever à 90 km/h sur les sections qui relèvent de sa compétence, ce qui explique les différences d'un département à l'autre. En l'absence de panneau relevant la limite, la référence reste 80 km/h.",
      hint: "Deux valeurs coexistent en France sur ce type de route depuis 2019.",
    },
    {
      id: "cvit-7",
      level: 2,
      type: "qcm",
      question:
        "Hors agglomération, sur une route à deux chaussées séparées par un terre-plein central qui n'est pas une autoroute, la vitesse maximale par temps sec est de :",
      choices: ["80 km/h", "110 km/h", "90 km/h", "130 km/h"],
      answer: 1,
      explanation:
        "Une route à deux chaussées séparées par un terre-plein central est limitée à 110 km/h. Ne la confondez pas avec une section comportant simplement deux voies dans le même sens sans terre-plein, limitée à 90 km/h, ni avec l'autoroute, limitée à 130 km/h. C'est la présence du séparateur central qui fait la différence.",
      hint: "Le terre-plein central est l'élément déterminant.",
    },
    {
      id: "cvit-8",
      level: 2,
      type: "truefalse",
      question:
        "Par temps de pluie, une route hors agglomération limitée à 80 km/h passe à 70 km/h.",
      answer: false,
      explanation:
        "Faux. Sous la pluie, une route déjà limitée à 80 km/h reste à 80 km/h, tout comme l'agglomération reste à 50 km/h. La réduction ne concerne que les vitesses supérieures : 130 devient 110, 110 et les autoroutes plus lentes deviennent 100, 90 devient 80. Cela n'empêche évidemment pas de devoir réduire son allure si la chaussée est glissante.",
      hint: "Toutes les limitations ne baissent pas sous la pluie.",
    },
    {
      id: "cvit-9",
      level: 2,
      type: "qcm",
      question:
        "Un brouillard épais réduit la visibilité à moins de 50 mètres alors que vous circulez sur autoroute. Quelle est la vitesse maximale autorisée ?",
      choices: ["110 km/h", "80 km/h", "70 km/h", "50 km/h"],
      answer: 3,
      explanation:
        "Dès que la visibilité descend sous 50 mètres, la vitesse est limitée à 50 km/h sur toutes les routes, y compris l'autoroute. Le piège est de confondre cette règle avec celle de la pluie, qui ramène l'autoroute à 110 km/h : ici, c'est la visibilité, et non la précipitation, qui commande.",
      hint: "Un seul chiffre s'applique à toutes les routes dans ce cas.",
    },
    {
      id: "cvit-10",
      level: 2,
      type: "qcm",
      question:
        "Vous circulez à 90 km/h. Avec un temps de réaction d'une seconde, quelle distance parcourez-vous avant même de commencer à freiner ?",
      choices: [
        "environ 9 mètres",
        "environ 15 mètres",
        "environ 25 mètres",
        "environ 50 mètres",
      ],
      answer: 2,
      explanation:
        "À 90 km/h, un véhicule parcourt 25 mètres par seconde. La distance de réaction s'estime en multipliant le chiffre des dizaines par 3, soit environ 27 mètres. Ce trajet est parcouru sans aucun freinage : c'est la première moitié du problème, avant même que les freins n'agissent.",
      hint: "Divisez la vitesse par 3,6 pour obtenir des mètres par seconde.",
    },
    {
      id: "cvit-11",
      level: 3,
      type: "qcm",
      question:
        "Sur chaussée sèche, à 90 km/h, quelle est la distance d'arrêt approximative de votre véhicule ?",
      choices: [
        "environ 27 mètres",
        "environ 80 mètres",
        "environ 45 mètres",
        "environ 120 mètres",
      ],
      answer: 1,
      explanation:
        "Le repère de calcul consiste à multiplier le chiffre des dizaines par lui-même : 9 × 9 = 81 mètres environ. Le piège est de confondre distance d'arrêt et distance de réaction : les 27 mètres correspondent à la seule distance parcourue pendant la seconde de réaction. Sur chaussée mouillée, il faut compter environ une fois et demie ces 81 mètres.",
      hint: "Distance d'arrêt = distance de réaction + distance de freinage.",
    },
    {
      id: "cvit-12",
      level: 3,
      type: "qcm",
      question:
        "Vous passez de 50 à 100 km/h. Par combien l'énergie libérée lors d'un choc est-elle multipliée ?",
      choices: ["2", "4", "3", "10"],
      answer: 1,
      explanation:
        "L'énergie cinétique varie avec le carré de la vitesse : en doublant la vitesse, on multiplie l'énergie du choc par quatre. C'est la raison pour laquelle une petite différence de vitesse change radicalement la gravité d'un accident, alors même que le temps gagné sur un trajet reste dérisoire.",
      hint: "L'énergie dépend du carré de la vitesse, pas de la vitesse.",
    },
    {
      id: "cvit-13",
      level: 3,
      type: "qcm",
      question:
        "Vous êtes contrôlé à 145 km/h sur une route limitée à 80 km/h. De quoi s'agit-il ?",
      choices: [
        "D'un délit, puni jusqu'à 3 mois de prison et 3 750 € d'amende, avec 6 points en moins",
        "D'une contravention de 3e classe",
        "D'une contravention de 4e classe à 135 €",
        "D'une simple amende forfaitaire, sans autre conséquence",
      ],
      answer: 0,
      explanation:
        "Le dépassement atteint 65 km/h. Depuis le 29 décembre 2025, tout excès de 50 km/h ou plus constitue un délit puni de 3 mois d'emprisonnement et de 3 750 € d'amende, avec retrait de 6 points, confiscation possible du véhicule et suspension ou annulation du permis. Le piège consiste à raisonner encore en contravention de 5e classe, comme c'était le cas auparavant.",
      hint: "Au-delà d'un certain seuil, on quitte le domaine de la contravention.",
    },
    {
      id: "cvit-14",
      level: 3,
      type: "truefalse",
      question:
        "Un excès de vitesse inférieur à 5 km/h n'entraîne aucun retrait de point sur le permis.",
      answer: true,
      explanation:
        "Vrai. Un dépassement inférieur à 5 km/h ne donne lieu à aucun retrait de point. L'amende reste toutefois due : 68 € lorsque la vitesse maximale autorisée est supérieure à 50 km/h, 135 € lorsqu'elle est inférieure ou égale à 50 km/h. Ce n'est donc pas une tolérance, seulement une absence de sanction sur le capital de points.",
      hint: "Absence de retrait de point ne veut pas dire absence d'amende.",
    },
    {
      id: "cvit-15",
      level: 3,
      type: "qcm",
      question:
        "Vous êtes en permis probatoire, il pleut, et vous circulez sur une route à deux chaussées séparées par un terre-plein central limitée à 110 km/h par temps sec. Quelle vitesse ne devez-vous pas dépasser ?",
      choices: ["100 km/h", "110 km/h", "90 km/h", "80 km/h"],
      answer: 0,
      explanation:
        "Deux règles s'appliquent en même temps : la pluie abaisse la limite à 100 km/h et le permis probatoire la fixe également à 100 km/h sur ce type de route. On retient toujours la valeur la plus basse, soit 100 km/h. Le piège est de cumuler les réductions en descendant à 90 ou 80 km/h : elles ne s'additionnent pas.",
      hint: "Les réductions ne s'additionnent jamais : on garde la plus contraignante.",
    },
  ],
};

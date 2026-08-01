import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "bateau-cotier",
  subject: "bateau",
  grade: "permis",
  num: 1,
  title: "Le permis plaisance option côtière",
  domain: "nombres",
  icon: "Ship",
  teaser:
    "6 milles d'un abri, de jour comme de nuit : ce que le permis côtier autorise, l'examen, et l'extension hauturière.",
  objectives: [
    "Je sais quelle navigation le permis côtier autorise et à partir de quelle puissance il est exigé",
    "Je connais l'âge minimal et le déroulement de l'examen",
    "Je sais ce qu'apporte l'extension hauturière",
    "Je connais les trois zones d'armement et leur logique",
  ],
  lesson: [
    {
      title: "Ce que le permis côtier autorise",
      paragraphs: [
        "Le permis d'armement, appelé officiellement titre de conduite des bateaux de plaisance à moteur, option côtière, autorise la conduite d'un bateau à moteur en mer jusqu'à 6 milles nautiques d'un abri, de jour comme de nuit. Un mille nautique vaut 1 852 mètres : la limite correspond donc à un peu plus de 11 kilomètres.",
        "La notion d'abri est essentielle : il s'agit d'un lieu où le navire et son équipage peuvent se mettre en sécurité, ce qui n'est pas nécessairement le port de départ. La distance se mesure donc par rapport à l'abri le plus proche, pas par rapport à la côte en général.",
        "Le permis n'est exigé que pour les navires dont le moteur développe plus de 6 chevaux administratifs, soit 4,5 kilowatts. En dessous de ce seuil, aucun titre n'est requis, ce qui n'exonère évidemment pas des règles de navigation ni de l'équipement de sécurité.",
        "Le permis côtier ne dit rien de la voile : la conduite d'un voilier ne requiert aucun titre en France, quelle que soit la distance parcourue, sauf si le moteur auxiliaire dépasse le seuil et est utilisé comme propulsion principale.",
      ],
      example: [
        "Vous naviguez le long d'une côte découpée. Vous vous trouvez à 9 milles de votre port de départ, mais à 4 milles d'une crique abritée accessible : vous êtes dans les limites de votre permis côtier, car c'est l'abri le plus proche qui compte.",
      ],
      tip: "6 milles d'un abri, jour et nuit, moteur de plus de 6 CV : les trois chiffres qui définissent le permis côtier.",
    },
    {
      title: "L'âge, l'examen et la formation pratique",
      paragraphs: [
        "L'âge minimal pour se présenter au permis plaisance option côtière est de 16 ans. Le candidat doit fournir un certificat médical et une pièce d'identité, et s'inscrire par l'intermédiaire d'un établissement de formation agréé.",
        "L'épreuve théorique est un questionnaire à choix multiples de 30 questions. Le candidat est admis s'il ne commet pas plus de 5 erreurs, ce qui suppose donc au moins 25 bonnes réponses. Les thèmes portent sur le balisage, les règles de barre, la signalisation, la sécurité, la météorologie et la réglementation.",
        "La partie pratique consiste en une formation d'une durée minimale de 3 heures 30, dispensée par un établissement agréé, à l'issue de laquelle une attestation est délivrée. Elle porte notamment sur les manœuvres de port, l'homme à la mer, le mouillage et l'utilisation des équipements de sécurité.",
        "Il n'existe pas de période probatoire ni de retrait de points comme pour le permis de conduire terrestre, mais le titre peut être suspendu ou retiré en cas d'infraction grave à la réglementation maritime, notamment en cas de conduite sous l'empire d'un état alcoolique.",
      ],
      example: [
        "Un candidat obtient 26 bonnes réponses sur 30 : il a commis 4 erreurs, il est donc admis. Avec 24 bonnes réponses, soit 6 erreurs, il aurait échoué.",
      ],
      tip: "30 questions, 5 erreurs tolérées au maximum. Une sixième erreur, et l'épreuve est à repasser.",
    },
    {
      title: "L'extension hauturière et les autres options",
      paragraphs: [
        "L'extension hauturière complète l'option côtière et lève la limite des 6 milles : elle autorise la navigation sans limitation de distance d'un abri, en toutes eaux.",
        "Elle s'obtient par une épreuve écrite de navigation, sans questionnaire à choix multiples : le candidat travaille sur une carte marine et doit savoir faire un point, tracer une route, tenir compte de la dérive et du courant, et utiliser un annuaire des marées. Il faut être titulaire de l'option côtière pour s'y présenter.",
        "L'option eaux intérieures est un titre distinct, destiné à la navigation fluviale sur les fleuves, rivières et canaux. Elle ne remplace pas l'option côtière et obéit à ses propres règles, notamment en matière de signalisation fluviale et d'écluses.",
        "Une extension grande plaisance existe pour la conduite des navires de plaisance à moteur de plus de 20 mètres. Ces extensions se cumulent : on part toujours de l'option côtière comme socle.",
      ],
      example: [
        "Vous prévoyez une traversée vers la Corse, largement au-delà de 6 milles d'un abri. Le permis côtier ne suffit pas : il vous faut l'extension hauturière, ainsi que l'armement de sécurité correspondant à cette zone.",
      ],
      tip: "Côtier = le socle. Hauturier = pas de limite de distance, obtenu par une épreuve de navigation sur carte, pas par un QCM.",
    },
    {
      title: "Trois zones d'armement, trois niveaux d'équipement",
      paragraphs: [
        "La réglementation classe l'équipement de sécurité obligatoire selon la distance d'éloignement d'un abri : armement basique jusqu'à 2 milles, armement côtier entre 2 et 6 milles, armement hauturier au-delà de 6 milles. Chaque niveau reprend le précédent et y ajoute du matériel.",
        "L'armement basique comprend notamment un équipement individuel de flottabilité de 50 newtons par personne embarquée, un moyen de repérage lumineux, un dispositif permettant de remonter à bord, un moyen d'assèchement, un moyen de propulsion de secours, un dispositif de remorquage et une ligne de mouillage.",
        "L'armement côtier ajoute des équipements individuels de flottabilité de 100 newtons, trois feux rouges automatiques à main, un compas magnétique, la carte marine de la zone fréquentée, le règlement international pour prévenir les abordages en mer, un moyen de connaître les prévisions météorologiques et un dispositif de repérage et d'assistance pour une personne tombée à l'eau.",
        "L'armement hauturier ajoute encore des équipements de 150 newtons, un radeau de survie ou un engin flottant, un harnais et sa longe, une VHF fixe, le matériel de navigation complet, un livre des feux, un journal de bord et une trousse de secours. La logique est constante : plus on s'éloigne, plus il faut pouvoir survivre longtemps sans assistance.",
      ],
      example: [
        "Vous partez pour une sortie à 4 milles d'un abri : vous relevez de l'armement côtier. Trois feux rouges à main, un compas, la carte de la zone et un moyen d'obtenir la météo doivent être à bord, en plus de tout le matériel basique.",
      ],
      tip: "50, 100, 150 newtons : la flottabilité des gilets suit exactement les trois zones d'armement, basique, côtier, hauturier.",
    },
  ],
  exercises: [
    {
      id: "bat1-1",
      level: 1,
      type: "qcm",
      question:
        "Jusqu'à quelle distance d'un abri le permis plaisance option côtière autorise-t-il la navigation ?",
      choices: ["2 milles", "6 milles", "12 milles", "20 milles"],
      answer: 1,
      explanation:
        "L'option côtière autorise la navigation jusqu'à 6 milles nautiques d'un abri, de jour comme de nuit. Le piège vient des 2 milles, qui délimitent la zone d'armement basique, et des 12 milles, qui correspondent à la limite des eaux territoriales : ni l'un ni l'autre ne définit la portée du permis.",
      hint: "Ce chiffre correspond aussi à la frontière entre armement côtier et hauturier.",
    },
    {
      id: "bat1-2",
      level: 1,
      type: "qcm",
      question:
        "À partir de quel âge peut-on obtenir le permis plaisance option côtière ?",
      choices: ["14 ans", "16 ans", "18 ans", "21 ans"],
      answer: 1,
      explanation:
        "L'âge minimal est de 16 ans. Le piège est de transposer les 18 ans du permis B automobile : la réglementation maritime est distincte et fixe un seuil plus bas, aligné sur celui de la catégorie A1 du permis moto.",
      hint: "Le même âge que pour le permis moto A1.",
    },
    {
      id: "bat1-3",
      level: 1,
      type: "truefalse",
      question:
        "Le permis côtier autorise la navigation de nuit dans sa zone de validité.",
      answer: true,
      explanation:
        "Vrai. L'option côtière autorise la navigation de jour comme de nuit, dans la limite de 6 milles d'un abri. Naviguer de nuit impose en revanche de connaître parfaitement les feux de navigation et le balisage lumineux, et de disposer de l'armement de sécurité correspondant à la zone fréquentée.",
      hint: "Le titre est limité en distance, pas en horaire.",
    },
    {
      id: "bat1-4",
      level: 1,
      type: "qcm",
      question:
        "Combien de questions comporte l'épreuve théorique du permis plaisance option côtière ?",
      choices: ["20", "30", "40", "50"],
      answer: 1,
      explanation:
        "L'épreuve théorique est un questionnaire à choix multiples de 30 questions, avec un maximum de 5 erreurs tolérées, soit au moins 25 bonnes réponses. Le piège vient des 40 questions, qui correspondent aux épreuves théoriques du permis de conduire terrestre.",
      hint: "Le nombre de questions est inférieur à celui du code de la route.",
    },
    {
      id: "bat1-5",
      level: 1,
      type: "qcm",
      question:
        "À partir de quelle puissance de moteur un titre de conduite est-il exigé pour un bateau de plaisance ?",
      choices: [
        "Dès le premier cheval",
        "Plus de 6 chevaux administratifs, soit 4,5 kW",
        "Plus de 20 chevaux",
        "Plus de 50 chevaux",
      ],
      answer: 1,
      explanation:
        "Le titre de conduite n'est exigé qu'au-delà de 6 chevaux administratifs, soit 4,5 kilowatts. En dessous, aucun permis n'est requis, mais toutes les règles de navigation, de balisage et d'armement de sécurité continuent de s'appliquer. Le piège est de croire qu'absence de permis signifie absence d'obligations.",
      hint: "Le seuil s'exprime en chevaux administratifs, et vaut 4,5 kW.",
    },
    {
      id: "bat1-6",
      level: 2,
      type: "qcm",
      question:
        "Combien d'erreurs au maximum sont tolérées à l'épreuve théorique de l'option côtière ?",
      choices: ["3", "5", "8", "10"],
      answer: 1,
      explanation:
        "Le candidat est admis s'il ne commet pas plus de 5 erreurs sur les 30 questions, ce qui suppose au moins 25 bonnes réponses. Une sixième erreur entraîne l'échec, quelle que soit la difficulté des questions manquées : il n'y a pas de pondération par thème.",
      hint: "Un sixième de l'épreuve environ.",
    },
    {
      id: "bat1-7",
      level: 2,
      type: "qcm",
      question:
        "Vous naviguez à 8 milles de votre port de départ, mais à 3 milles d'une crique offrant un abri sûr. Êtes-vous dans les limites de votre permis côtier ?",
      choices: [
        "Non : la distance se compte toujours depuis le port de départ",
        "Oui : la distance se compte par rapport à l'abri le plus proche",
        "Non : au-delà de 6 milles de la côte, l'extension hauturière est requise",
        "Oui, mais uniquement de jour",
      ],
      answer: 1,
      explanation:
        "La limite de 6 milles se mesure par rapport à l'abri le plus proche, c'est-à-dire un lieu où le navire et son équipage peuvent se mettre en sécurité, et non par rapport au port de départ ni à la côte en général. Le piège consiste à raisonner en distance parcourue depuis le point de départ.",
      hint: "Le texte parle d'abri, pas de port de départ.",
    },
    {
      id: "bat1-8",
      level: 2,
      type: "truefalse",
      question:
        "L'extension hauturière s'obtient par un questionnaire à choix multiples de 30 questions.",
      answer: false,
      explanation:
        "Faux. L'extension hauturière s'obtient par une épreuve écrite de navigation, réalisée sur une carte marine : faire un point, tracer une route, tenir compte de la dérive et du courant, utiliser un annuaire des marées. C'est l'option côtière qui repose sur un QCM. Il faut d'ailleurs être titulaire de l'option côtière pour se présenter à l'extension.",
      hint: "L'épreuve hauturière se travaille avec un compas et une règle Cras.",
    },
    {
      id: "bat1-9",
      level: 2,
      type: "qcm",
      question:
        "Quelle est la durée minimale de la formation pratique du permis plaisance option côtière ?",
      choices: ["1 heure", "2 heures", "3 h 30", "7 heures"],
      answer: 2,
      explanation:
        "La formation pratique dure au minimum 3 heures 30, dispensée par un établissement agréé, et donne lieu à une attestation. Elle porte notamment sur les manœuvres de port, la récupération d'un homme à la mer, le mouillage et l'utilisation du matériel de sécurité. Le piège des 7 heures vient de la formation moto : ce sont deux dispositifs sans rapport.",
      hint: "Un peu plus de trois heures.",
    },
    {
      id: "bat1-10",
      level: 2,
      type: "qcm",
      question:
        "Vous sortez pour une navigation à 4 milles d'un abri. De quel armement de sécurité relevez-vous ?",
      choices: ["Basique", "Côtier", "Hauturier", "Aucun armement n'est imposé"],
      answer: 1,
      explanation:
        "L'armement côtier s'applique entre 2 et 6 milles d'un abri. Il reprend tout l'armement basique et y ajoute notamment trois feux rouges automatiques à main, un compas magnétique, la carte marine de la zone, le règlement international pour prévenir les abordages, un moyen de connaître la météo et un dispositif de repérage pour une personne à la mer.",
      hint: "Les trois zones sont délimitées par 2 milles et 6 milles.",
    },
    {
      id: "bat1-11",
      level: 3,
      type: "qcm",
      question:
        "Quelle flottabilité minimale doivent offrir les équipements individuels de flottabilité en armement côtier ?",
      choices: ["50 newtons", "100 newtons", "150 newtons", "275 newtons"],
      answer: 1,
      explanation:
        "L'armement basique exige 50 newtons, l'armement côtier 100 newtons et l'armement hauturier 150 newtons. Le piège est de retenir une seule valeur pour toutes les zones : la flottabilité requise augmente avec l'éloignement, car le délai avant secours s'allonge et l'état de la mer peut être plus dur.",
      hint: "Les trois valeurs suivent exactement les trois zones d'armement.",
    },
    {
      id: "bat1-12",
      level: 3,
      type: "qcm",
      question:
        "Vous projetez une traversée qui vous éloignera de 30 milles de tout abri. Que vous faut-il ?",
      choices: [
        "Le permis côtier suffit si la météo est favorable",
        "L'extension hauturière et l'armement de sécurité hauturier",
        "L'option eaux intérieures",
        "Une simple déclaration auprès du CROSS",
      ],
      answer: 1,
      explanation:
        "Au-delà de 6 milles d'un abri, il faut l'extension hauturière et l'armement hauturier, qui comprend notamment un radeau de survie ou un engin flottant, une VHF fixe, un harnais et sa longe, le matériel de navigation complet et une trousse de secours. Le piège est de croire que la météo ou l'expérience du chef de bord peuvent tenir lieu de titre : la limite est réglementaire.",
      hint: "Deux choses manquent : un titre et du matériel.",
    },
    {
      id: "bat1-13",
      level: 3,
      type: "truefalse",
      question:
        "La conduite d'un voilier en mer nécessite le permis plaisance option côtière.",
      answer: false,
      explanation:
        "Faux. La conduite d'un voilier ne requiert aucun titre en France, quelle que soit la distance parcourue. Le permis plaisance ne concerne que les navires à moteur dont la puissance dépasse 6 chevaux administratifs. Attention toutefois : l'absence de permis n'exonère jamais des obligations d'armement de sécurité, qui dépendent de la seule distance d'éloignement d'un abri.",
      hint: "Le titre est lié à la motorisation, pas au fait de naviguer.",
    },
    {
      id: "bat1-14",
      level: 3,
      type: "qcm",
      question: "Combien de mètres vaut un mille nautique ?",
      choices: ["1 000 m", "1 609 m", "1 852 m", "2 000 m"],
      answer: 2,
      explanation:
        "Un mille nautique vaut 1 852 mètres : la limite de 6 milles du permis côtier représente donc un peu plus de 11 kilomètres. Le piège vient du mille terrestre anglo-saxon, qui vaut 1 609 mètres et n'a aucun usage en navigation maritime. À noter : le nœud est la vitesse d'un mille nautique par heure.",
      hint: "Cette valeur correspond à une minute d'arc de méridien.",
    },
    {
      id: "bat1-15",
      level: 3,
      type: "qcm",
      question:
        "Quelle affirmation décrit correctement la logique des trois zones d'armement ?",
      choices: [
        "Chaque zone remplace intégralement l'équipement de la précédente",
        "Chaque zone reprend l'équipement de la précédente et y ajoute du matériel",
        "L'armement hauturier est plus léger, le navire étant plus grand",
        "L'armement ne dépend que de la longueur du navire",
      ],
      answer: 1,
      explanation:
        "L'armement fonctionne par empilement : le côtier comprend tout le basique et y ajoute du matériel, le hauturier comprend tout le côtier et y ajoute encore. La logique est celle du délai d'assistance : plus on s'éloigne, plus il faut pouvoir tenir seul longtemps. Le piège est de croire que l'armement dépend de la taille du bateau : il dépend de la distance à l'abri.",
      hint: "Pensez à des cercles concentriques plutôt qu'à trois listes séparées.",
    },
  ],
};

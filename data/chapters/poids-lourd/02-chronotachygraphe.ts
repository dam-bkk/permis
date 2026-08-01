import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "pl-temps-conduite",
  subject: "poids-lourd",
  grade: "permis",
  num: 2,
  title: "Temps de conduite et de repos",
  domain: "grandeurs",
  icon: "Clock",
  teaser:
    "4 h 30 puis 45 minutes de pause, 9 heures par jour, 11 heures de repos : la réglementation sociale européenne en clair.",
  objectives: [
    "Je sais à quoi sert le chronotachygraphe et quelles données je dois pouvoir présenter",
    "Je connais la limite de conduite continue et la pause qui doit suivre",
    "Je connais les durées de conduite journalière et hebdomadaire",
    "Je connais les repos journaliers et hebdomadaires et les sanctions encourues",
  ],
  lesson: [
    {
      title: "Le chronotachygraphe, témoin de l'activité du conducteur",
      paragraphs: [
        "Le chronotachygraphe est l'appareil de contrôle installé à bord des véhicules de transport de marchandises dont le PTAC dépasse 3,5 tonnes et des véhicules de transport de voyageurs de plus de neuf places. Il enregistre en continu la vitesse, les distances parcourues et l'alternance des activités du conducteur.",
        "Le conducteur y insère sa carte de conducteur personnelle, valable 5 ans, et sélectionne son activité au moyen du sélecteur : conduite, autre tâche, disponibilité, repos. La conduite est enregistrée automatiquement dès que le véhicule roule.",
        "Lors d'un contrôle sur route, le conducteur doit être en mesure de présenter les données de la journée en cours et des 28 jours précédents. Il doit également disposer d'une attestation pour les périodes non couvertes par des enregistrements, par exemple un congé ou un arrêt maladie.",
        "L'employeur, de son côté, télécharge périodiquement les données de la carte de conducteur et de la mémoire du véhicule, et les conserve. Toute manipulation destinée à fausser les enregistrements, aimant, boîtier, usage d'une carte qui n'est pas la sienne, constitue un délit, et non une simple contravention.",
      ],
      example: [
        "Un contrôle a lieu un jeudi. Le conducteur doit pouvoir justifier de son activité depuis le jour même et pendant les 28 jours qui précèdent, en présentant sa carte, et le cas échéant des attestations pour les journées où il n'a pas conduit.",
      ],
      tip: "Retenez « le jour en cours plus 28 jours » : c'est la fenêtre que tout conducteur doit pouvoir justifier immédiatement.",
    },
    {
      title: "Conduite continue et pauses",
      paragraphs: [
        "La règle centrale est celle des 4 h 30 : après une période de conduite continue de 4 heures et 30 minutes au maximum, le conducteur doit observer une interruption ininterrompue d'au moins 45 minutes, à moins de prendre un temps de repos.",
        "Cette pause de 45 minutes peut être fractionnée, mais uniquement en deux tranches et dans un ordre imposé : une première interruption d'au moins 15 minutes, suivie d'une seconde d'au moins 30 minutes, réparties sur la période de conduite. L'ordre inverse n'est pas conforme.",
        "Pendant la pause, le conducteur ne peut exercer aucune activité de conduite ni aucun autre travail : c'est un temps consacré exclusivement au repos. Le chargement, le déchargement ou l'attente au quai relèvent d'autres catégories d'activité et n'interrompent pas la conduite continue au sens de la réglementation.",
        "La règle est une limite, pas un objectif : rien n'interdit de s'arrêter plus tôt, et la fatigue apparaît souvent bien avant la quatrième heure, notamment en début de matinée et en début d'après-midi.",
      ],
      example: [
        "Vous partez à 6 h. À 10 h 30, vous avez atteint 4 h 30 de conduite continue : vous devez prendre 45 minutes d'interruption avant de repartir. Vous auriez aussi pu couper avec 15 minutes à 8 h puis 30 minutes à 10 h.",
      ],
      tip: "15 puis 30, jamais 30 puis 15. Le fractionnement de la pause n'est valable que dans cet ordre.",
    },
    {
      title: "Durées de conduite journalière et hebdomadaire",
      paragraphs: [
        "La durée de conduite journalière est limitée à 9 heures. Elle peut être portée à 10 heures, mais seulement deux fois par semaine. Ces heures se comptent entre deux repos journaliers, et non de minuit à minuit.",
        "Sur la semaine, la durée de conduite ne peut dépasser 56 heures. Sur deux semaines consécutives, elle ne peut dépasser 90 heures au total : un conducteur qui a conduit 56 heures une semaine ne peut donc pas dépasser 34 heures la semaine suivante.",
        "Ces plafonds de conduite se cumulent avec la réglementation de la durée du travail, qui prend en compte l'ensemble des tâches : chargement, déchargement, entretien, formalités administratives. Conduire moins de 9 heures ne signifie donc pas nécessairement respecter le temps de travail.",
        "Le dépassement des durées de conduite ou le non-respect des temps de repos constitue une contravention de 4e classe, sanctionnée par une amende de 135 €, appliquée infraction par infraction : un contrôle peut donc donner lieu à plusieurs amendes cumulées, sans compter les sanctions visant l'entreprise.",
      ],
      example: [
        "Semaine 1 : 56 heures de conduite, ce qui est le maximum admis. Semaine 2 : le conducteur ne pourra pas conduire plus de 34 heures, pour rester sous le plafond de 90 heures sur deux semaines consécutives.",
      ],
      tip: "9 heures par jour, deux fois 10 par semaine, 56 heures sur la semaine, 90 heures sur deux semaines : quatre chiffres à mémoriser ensemble.",
    },
    {
      title: "Les repos journaliers et hebdomadaires",
      paragraphs: [
        "Le repos journalier normal est de 11 heures consécutives au minimum par période de 24 heures. Il peut être fractionné en deux périodes, à condition que la première dure au moins 3 heures et la seconde au moins 9 heures, ce qui porte le total à 12 heures.",
        "Un repos journalier réduit de 9 heures au minimum est admis, mais au plus trois fois entre deux repos hebdomadaires. C'est la souplesse la plus surveillée par les contrôleurs, car elle est fréquemment dépassée.",
        "Le repos hebdomadaire normal est de 45 heures consécutives au minimum. Il peut être réduit à 24 heures, la réduction devant alors être compensée par une période de repos équivalente prise en bloc avant la fin de la troisième semaine suivante.",
        "Sur deux semaines consécutives, le conducteur doit prendre soit deux repos hebdomadaires normaux, soit un repos normal et un repos réduit. Ces règles visent un objectif unique : la fatigue au volant d'un ensemble de 40 tonnes n'a pas les mêmes conséquences que dans une voiture, et le temps d'arrêt d'un poids lourd ne pardonne aucun retard de réaction.",
      ],
      example: [
        "Vous terminez votre journée à 20 h. Un repos journalier normal de 11 heures vous permet de reprendre le volant à 7 h le lendemain au plus tôt. Avec un repos réduit à 9 heures, utilisable au plus trois fois entre deux repos hebdomadaires, la reprise serait possible à 5 h.",
      ],
      tip: "11 h de repos journalier, 9 h en version réduite trois fois maximum, 45 h de repos hebdomadaire, 24 h en version réduite avec compensation.",
    },
  ],
  exercises: [
    {
      id: "pl2-1",
      level: 1,
      type: "qcm",
      question:
        "Après combien de temps de conduite continue un conducteur doit-il observer une interruption ?",
      choices: ["3 heures", "4 h 30", "6 heures", "9 heures"],
      answer: 1,
      explanation:
        "La période de conduite continue ne peut excéder 4 heures et 30 minutes ; elle doit ensuite être suivie d'une interruption d'au moins 45 minutes, sauf si le conducteur prend un temps de repos. Le piège vient des 9 heures, qui correspondent à la conduite journalière maximale, et non à la conduite continue.",
      hint: "Ne confondez pas la limite continue et la limite de la journée.",
    },
    {
      id: "pl2-2",
      level: 1,
      type: "qcm",
      question: "Quelle est la durée minimale de l'interruption qui suit 4 h 30 de conduite ?",
      choices: ["30 minutes", "45 minutes", "1 heure", "15 minutes"],
      answer: 1,
      explanation:
        "L'interruption est de 45 minutes au minimum, ininterrompues. Les 15 et 30 minutes du QCM correspondent aux deux tranches du fractionnement autorisé, dont l'addition donne précisément 45 minutes : prises isolément, elles ne satisfont pas à l'obligation.",
      hint: "Trois quarts d'heure.",
    },
    {
      id: "pl2-3",
      level: 1,
      type: "truefalse",
      question:
        "La durée de conduite journalière maximale est de 9 heures, portée à 10 heures deux fois par semaine.",
      answer: true,
      explanation:
        "Vrai. La conduite journalière est limitée à 9 heures, avec une possibilité d'atteindre 10 heures deux fois par semaine seulement. Ces heures se comptent entre deux repos journaliers, et non de minuit à minuit : c'est le piège de calcul le plus fréquent.",
      hint: "La journée réglementaire se mesure entre deux repos.",
    },
    {
      id: "pl2-4",
      level: 1,
      type: "qcm",
      question:
        "Quelle est la durée minimale du repos journalier normal ?",
      choices: ["8 heures", "9 heures", "11 heures", "12 heures"],
      answer: 2,
      explanation:
        "Le repos journalier normal est d'au moins 11 heures consécutives par période de 24 heures. Les 9 heures correspondent au repos journalier réduit, admis au plus trois fois entre deux repos hebdomadaires ; les 12 heures correspondent au total obtenu lorsque le repos est fractionné en 3 h puis 9 h.",
      hint: "Le chiffre de référence est supérieur à 10.",
    },
    {
      id: "pl2-5",
      level: 1,
      type: "qcm",
      question:
        "Quelle période le conducteur doit-il pouvoir justifier lors d'un contrôle sur route ?",
      choices: [
        "La journée en cours uniquement",
        "La journée en cours et les 7 jours précédents",
        "La journée en cours et les 28 jours précédents",
        "Les 6 derniers mois",
      ],
      answer: 2,
      explanation:
        "Le conducteur doit présenter les données de la journée en cours et des 28 jours précédents. Pour les journées sans conduite, il doit disposer d'une attestation justifiant son activité. Le piège consiste à retenir l'ancienne fenêtre plus courte, qui n'est plus celle applicable.",
      hint: "Quatre semaines, à peu près.",
    },
    {
      id: "pl2-6",
      level: 2,
      type: "qcm",
      question:
        "Vous souhaitez fractionner votre pause de 45 minutes. Quel découpage est conforme ?",
      choices: [
        "30 minutes puis 15 minutes",
        "15 minutes puis 30 minutes",
        "Trois fois 15 minutes",
        "20 minutes puis 25 minutes",
      ],
      answer: 1,
      explanation:
        "Le fractionnement n'est admis qu'en deux tranches et dans un ordre imposé : une première interruption d'au moins 15 minutes, puis une seconde d'au moins 30 minutes. L'ordre inverse, le découpage en trois tranches ou des tranches de durées différentes ne sont pas conformes. C'est un piège de contrôle très classique.",
      hint: "La plus courte vient toujours en premier.",
    },
    {
      id: "pl2-7",
      level: 2,
      type: "qcm",
      question:
        "Quelle est la durée maximale de conduite sur une semaine ?",
      choices: ["45 heures", "48 heures", "56 heures", "60 heures"],
      answer: 2,
      explanation:
        "La durée de conduite hebdomadaire ne peut dépasser 56 heures. Le piège vient des 48 heures, qui relèvent de la durée du travail hebdomadaire moyenne et non de la conduite, et des 45 heures, qui correspondent au repos hebdomadaire normal.",
      hint: "Ce chiffre n'est ni celui du repos hebdomadaire ni celui du temps de travail moyen.",
    },
    {
      id: "pl2-8",
      level: 2,
      type: "truefalse",
      question:
        "Le repos journalier peut être réduit à 9 heures sans aucune limite de fréquence.",
      answer: false,
      explanation:
        "Faux. Le repos journalier réduit de 9 heures est admis au plus trois fois entre deux repos hebdomadaires. Au-delà, l'infraction est constituée. C'est l'une des règles les plus fréquemment enfreintes et les plus systématiquement relevées lors des contrôles de la fenêtre des 28 jours.",
      hint: "Une souplesse existe, mais elle est comptée.",
    },
    {
      id: "pl2-9",
      level: 2,
      type: "qcm",
      question:
        "Vous avez conduit 56 heures la semaine dernière. Combien d'heures pouvez-vous conduire cette semaine au maximum ?",
      choices: ["34 heures", "45 heures", "56 heures", "90 heures"],
      answer: 0,
      explanation:
        "La conduite sur deux semaines consécutives est plafonnée à 90 heures. Après 56 heures, il reste donc 90 − 56 = 34 heures. Le piège est de raisonner semaine par semaine en oubliant le plafond glissant sur deux semaines, qui est justement celui que les contrôleurs vérifient sur les 28 jours enregistrés.",
      hint: "Une soustraction à partir du plafond bihebdomadaire.",
    },
    {
      id: "pl2-10",
      level: 2,
      type: "qcm",
      question:
        "Vous êtes en attente de déchargement au quai pendant une heure, moteur coupé, sans effectuer de tâche. Cette période peut-elle valoir pause réglementaire ?",
      choices: [
        "Oui, dès lors que le véhicule ne roule pas",
        "Oui, si elle dépasse 45 minutes",
        "Non, sauf si elle est enregistrée comme interruption et que le conducteur n'effectue aucun travail",
        "Non, une pause ne peut se prendre que sur une aire de repos",
      ],
      answer: 2,
      explanation:
        "Une interruption n'est valable que si le conducteur ne conduit pas et n'effectue aucun autre travail, et si elle est correctement enregistrée au chronotachygraphe. Une attente au quai peut donc valoir pause si elle est réellement libre de toute tâche et sélectionnée comme telle ; sélectionnée en disponibilité ou en autre tâche, elle n'interrompt pas la conduite continue. Le lieu, lui, est indifférent.",
      hint: "Ce qui compte est l'activité réelle et l'activité sélectionnée, pas l'endroit.",
    },
    {
      id: "pl2-11",
      level: 3,
      type: "qcm",
      question:
        "Comment le repos journalier normal peut-il être fractionné, et pour quelle durée totale ?",
      choices: [
        "En 4 h puis 7 h, soit 11 heures",
        "En 3 h puis 9 h, soit 12 heures",
        "En 2 h puis 9 h, soit 11 heures",
        "Il ne peut pas être fractionné",
      ],
      answer: 1,
      explanation:
        "Le repos journalier peut être pris en deux périodes : la première d'au moins 3 heures, la seconde d'au moins 9 heures, soit 12 heures au total. Le piège est de croire que le fractionnement conserve le total de 11 heures : le choix du fractionnement coûte une heure supplémentaire au conducteur.",
      hint: "Fractionner coûte une heure de plus que le repos d'un seul tenant.",
    },
    {
      id: "pl2-12",
      level: 3,
      type: "qcm",
      question:
        "Quelle est la durée du repos hebdomadaire normal, et quelle est sa version réduite ?",
      choices: [
        "35 heures normal, 20 heures réduit",
        "45 heures normal, 24 heures réduit",
        "48 heures normal, 30 heures réduit",
        "45 heures normal, 36 heures réduit",
      ],
      answer: 1,
      explanation:
        "Le repos hebdomadaire normal est d'au moins 45 heures consécutives ; il peut être réduit à 24 heures, la réduction devant être compensée par un repos équivalent pris en bloc avant la fin de la troisième semaine suivante. Le piège consiste à oublier cette compensation, qui n'est pas facultative.",
      hint: "La version réduite représente une journée entière, la version normale près de deux jours.",
    },
    {
      id: "pl2-13",
      level: 3,
      type: "truefalse",
      question:
        "Utiliser un dispositif destiné à fausser les enregistrements du chronotachygraphe constitue un délit, et non une contravention.",
      answer: true,
      explanation:
        "Vrai. La manipulation ou la falsification des enregistrements, par aimant, boîtier ou usage d'une carte qui n'est pas la sienne, relève du délit et expose à des peines d'emprisonnement et à de fortes amendes, ainsi qu'à des sanctions visant l'entreprise. Le simple dépassement d'une durée de conduite, lui, reste une contravention de 4e classe à 135 €.",
      hint: "Dépasser une durée et truquer l'appareil ne relèvent pas du même registre pénal.",
    },
    {
      id: "pl2-14",
      level: 3,
      type: "qcm",
      question:
        "Vous démarrez votre journée à 5 h et vous avez conduit 4 h 30 sans interruption. Il est 9 h 30, il vous reste 40 minutes de route jusqu'au client. Que faites-vous ?",
      choices: [
        "Je termine les 40 minutes, la marge est négligeable",
        "Je prends immédiatement une interruption d'au moins 45 minutes avant de repartir",
        "Je change l'activité en disponibilité et je continue",
        "J'attends d'avoir atteint 5 heures de conduite pour m'arrêter",
      ],
      answer: 1,
      explanation:
        "La limite de 4 h 30 de conduite continue est stricte : elle ne se dépasse pas au motif que la destination est proche. Il faut observer 45 minutes d'interruption avant de reprendre le volant. Sélectionner une autre activité tout en conduisant serait une falsification, donc un délit, bien plus grave que la contravention initiale.",
      hint: "Aucune marge de tolérance n'existe sur la conduite continue.",
    },
    {
      id: "pl2-15",
      level: 3,
      type: "qcm",
      question:
        "Quelle sanction encourt un conducteur pour un dépassement de la durée de conduite journalière ?",
      choices: [
        "Un simple rappel à la réglementation",
        "Une contravention de 2e classe : 35 €",
        "Une contravention de 4e classe : 135 €",
        "Un délit passible d'un an d'emprisonnement",
      ],
      answer: 2,
      explanation:
        "Le dépassement des durées de conduite comme le non-respect des temps de repos constituent des contraventions de 4e classe, soit 135 € d'amende, appliquées infraction par infraction : un contrôle portant sur 28 jours peut donc générer plusieurs amendes cumulées, auxquelles s'ajoutent les sanctions visant l'employeur. Le délit, lui, est réservé à la falsification du chronotachygraphe.",
      hint: "Même classe de contravention que le refus de priorité.",
    },
  ],
};

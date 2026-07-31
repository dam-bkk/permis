import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "code-alcool",
  subject: "code",
  grade: "permis",
  num: 3,
  title: "Alcool, stupéfiants et vigilance",
  domain: "donnees",
  icon: "TriangleAlert",
  teaser:
    "Taux légaux, sanctions, stupéfiants, médicaments, fatigue et téléphone : rester apte à conduire.",
  objectives: [
    "Je connais les taux d'alcool légaux et les sanctions encourues",
    "Je sais quels effets l'alcool produit sur la conduite",
    "Je connais la règle applicable aux stupéfiants et aux médicaments",
    "Je sais gérer la fatigue et je connais les règles sur le téléphone au volant",
  ],
  lesson: [
    {
      title: "Les taux d'alcool légaux",
      paragraphs: [
        "Il est interdit de conduire avec un taux d'alcool égal ou supérieur à 0,5 gramme par litre de sang, ce qui correspond à 0,25 milligramme par litre d'air expiré. C'est le seuil applicable à la majorité des conducteurs.",
        "Un seuil abaissé à 0,2 gramme par litre de sang, soit 0,10 milligramme par litre d'air expiré, s'applique aux conducteurs titulaires d'un permis soumis au délai probatoire, aux élèves en apprentissage anticipé, encadré ou supervisé, aux conducteurs de véhicules de transport en commun et aux personnes dont le droit de conduire est limité aux véhicules équipés d'un éthylotest antidémarrage.",
        "Un verre standard servi dans un bar contient environ 10 grammes d'alcool pur et fait monter l'alcoolémie de 0,20 à 0,25 gramme par litre en moyenne. Pour un conducteur soumis au seuil de 0,2 g/L, un seul verre suffit donc à franchir la limite : la seule règle sûre est zéro alcool.",
        "L'organisme élimine l'alcool à un rythme lent, de l'ordre de 0,10 à 0,15 gramme par litre et par heure. Ni le café, ni la douche froide, ni l'air frais, ni un repas copieux n'accélèrent cette élimination : seul le temps agit.",
      ],
      example: [
        "Un conducteur en permis probatoire boit un unique verre de vin lors d'un repas. Une heure plus tard, son alcoolémie tourne autour de 0,20 g/L : il est déjà en infraction, alors qu'un conducteur expérimenté ne le serait pas.",
      ],
      tip: "Deux seuils à retenir : 0,5 g/L pour la règle générale, 0,2 g/L pour le permis probatoire et les transports en commun. En air expiré, on divise par deux : 0,25 et 0,10 mg/L.",
    },
    {
      title: "Les sanctions liées à l'alcool",
      paragraphs: [
        "Entre le seuil applicable et 0,8 gramme par litre de sang, l'infraction est une contravention de 4e classe : amende forfaitaire de 135 €, retrait de 6 points, immobilisation possible du véhicule et suspension du permis pouvant aller jusqu'à 3 ans. Un jeune conducteur perd ainsi la moitié de son capital de points dès 0,2 g/L.",
        "À partir de 0,8 gramme par litre de sang, soit 0,40 milligramme par litre d'air expiré, il ne s'agit plus d'une contravention mais d'un délit : jusqu'à 3 ans d'emprisonnement et 9 000 € d'amende, 6 points retirés, suspension ou annulation du permis pendant 5 ans au plus, confiscation possible du véhicule. La conduite en état d'ivresse manifeste est punie des mêmes peines, même sans mesure du taux.",
        "Dès 0,8 g/L, les forces de l'ordre retiennent immédiatement le permis à titre conservatoire, et le véhicule peut être immobilisé. Le refus de se soumettre au dépistage ou à la vérification constitue lui aussi un délit sanctionné par 6 points.",
        "L'alcool est l'une des premières causes de mortalité routière en France : il est présent dans près d'un accident mortel sur trois. En cas d'accident, il constitue une circonstance aggravante qui peut faire basculer les faits vers l'homicide routier ou les blessures routières.",
      ],
      example: [
        "Contrôlé à 0,9 g/L de sang, un conducteur ne reçoit pas une amende à payer en ligne : son permis est retenu sur place, son véhicule peut partir en fourrière et il sera convoqué devant le tribunal.",
      ],
      tip: "Un seul chiffre marque la frontière entre l'amende et le tribunal : 0,8 g/L de sang, ou 0,40 mg/L d'air expiré.",
    },
    {
      title: "Ce que l'alcool fait à la conduite",
      paragraphs: [
        "L'alcool allonge le temps de réaction. Une seconde de réaction devient facilement une seconde et demie, ce qui ajoute une dizaine de mètres à la distance d'arrêt sur route hors agglomération.",
        "Il rétrécit le champ visuel : la vision périphérique se réduit, un phénomène de vision tunnel apparaît, et les piétons ou les deux-roues arrivant sur les côtés sont perçus trop tard. La sensibilité à l'éblouissement augmente, ce qui aggrave le risque de nuit.",
        "Il perturbe l'appréciation des distances et des vitesses, dégrade la coordination des gestes et diminue la vigilance. Il lève enfin les inhibitions : le conducteur prend davantage de risques tout en se sentant parfaitement capable de conduire.",
        "C'est ce dernier point qui rend l'alcool si dangereux : l'autoévaluation est faussée. La seule mesure fiable de son état est l'éthylotest, jamais l'impression personnelle de forme.",
      ],
      example: [
        "Après une soirée, un conducteur se sent « tout à fait capable de rentrer ». Cette impression de maîtrise fait précisément partie des effets de l'alcool : elle ne prouve rien sur son taux réel.",
      ],
      tip: "L'alcool ne diminue pas seulement les capacités : il diminue aussi la conscience qu'on en a. Le seul juge fiable est l'éthylotest.",
    },
    {
      title: "Stupéfiants et médicaments",
      paragraphs: [
        "La conduite après usage de stupéfiants est interdite quelle que soit la quantité consommée : il n'existe aucun seuil de tolérance. Le dépistage se fait par test salivaire, et les traces d'un produit comme le cannabis restent détectables bien après la disparition de ses effets ressentis.",
        "Conduire après usage de stupéfiants est un délit puni de 3 ans d'emprisonnement et de 9 000 € d'amende, avec retrait de 6 points. Si le conducteur se trouve également sous l'empire d'un état alcoolique, les peines montent à 5 ans d'emprisonnement et 15 000 € d'amende, et 9 points sont retirés. L'interdiction vaut aussi pour l'accompagnateur d'un élève conducteur.",
        "Les médicaments susceptibles d'altérer la conduite portent un pictogramme sur leur boîte. Le niveau 1, triangle jaune, invite à la prudence et à lire la notice. Le niveau 2, triangle orange, impose une grande prudence et l'avis d'un professionnel de santé avant de conduire. Le niveau 3, triangle rouge, interdit la conduite : la reprise du volant nécessite l'avis d'un médecin.",
        "Certains médicaments courants sont concernés : somnifères, anxiolytiques, antihistaminiques, antitussifs ou collyres. Leur association avec l'alcool multiplie les effets.",
      ],
      example: [
        "Un antihistaminique pris contre une allergie porte un pictogramme orange de niveau 2. Avant de prendre la route pour un long trajet, il faut demander l'avis du pharmacien ou du médecin, et non se fier au fait de « se sentir normal ».",
      ],
      tip: "Trois couleurs, trois consignes : jaune, soyez prudent ; orange, demandez conseil ; rouge, ne conduisez pas.",
    },
    {
      title: "Fatigue, somnolence et téléphone",
      paragraphs: [
        "La somnolence est la première cause d'accident mortel sur autoroute. Les signaux d'alerte sont connus : bâillements répétés, paupières lourdes, regard fixe, position inconfortable, difficulté à maintenir sa trajectoire ou franchissement involontaire d'une ligne.",
        "Face à ces signaux, une seule réponse est efficace : s'arrêter en sécurité et faire une sieste de 15 à 20 minutes. Ouvrir la fenêtre, monter le son de la radio ou boire un café en roulant ne fait que masquer brièvement la fatigue. La recommandation générale est de faire une pause d'au moins 20 minutes toutes les deux heures de conduite.",
        "L'usage d'un téléphone tenu en main par le conducteur d'un véhicule en circulation est interdit : 135 € d'amende forfaitaire et 3 points en moins. Un véhicule arrêté à un feu rouge ou immobilisé dans un embouteillage reste un véhicule en circulation : l'infraction est constituée.",
        "Le port à l'oreille de tout dispositif émettant du son est également interdit et sanctionné de la même façon : oreillette, casque, écouteurs. Seuls restent admis les dispositifs intégrés au véhicule, comme le haut-parleur du système embarqué, et les appareils correcteurs de surdité. Une conversation, même mains libres, reste une source majeure de distraction.",
      ],
      example: [
        "Sur autoroute, un conducteur bâille depuis plusieurs minutes et mord la bande d'arrêt d'urgence. Il quitte l'autoroute à la prochaine aire de repos, s'installe et dort vingt minutes : c'est la seule mesure qui restaure réellement la vigilance.",
      ],
      tip: "Sur un long trajet : une pause toutes les deux heures, avant que les signaux de somnolence n'apparaissent, pas après.",
    },
  ],
  exercises: [
    {
      id: "calc-1",
      level: 1,
      type: "qcm",
      question:
        "Quel est le taux d'alcool à partir duquel un conducteur qui n'est plus en période probatoire est en infraction ?",
      choices: [
        "0,2 g/L de sang",
        "0,8 g/L de sang",
        "0,5 g/L de sang",
        "1 g/L de sang",
      ],
      answer: 2,
      explanation:
        "Il est interdit de conduire avec un taux égal ou supérieur à 0,5 g/L de sang, soit 0,25 mg/L d'air expiré. Le piège classique consiste à confondre ce seuil de contravention avec celui de 0,8 g/L, qui marque le passage au délit.",
      hint: "Ce seuil correspond à 0,25 mg par litre d'air expiré.",
    },
    {
      id: "calc-2",
      level: 1,
      type: "qcm",
      question:
        "À partir de quel taux d'alcool dans le sang un conducteur en permis probatoire est-il en infraction ?",
      choices: ["0,2 g/L", "0,3 g/L", "0,5 g/L", "0,8 g/L"],
      answer: 0,
      explanation:
        "Pour un conducteur en période probatoire, comme pour un élève en conduite accompagnée ou un conducteur de transport en commun, le seuil est fixé à 0,2 g/L de sang, soit 0,10 mg/L d'air expiré. Un seul verre suffisant à l'atteindre, la règle pratique est simple : aucun alcool avant de conduire.",
      hint: "Un seul verre standard fait déjà franchir ce seuil.",
    },
    {
      id: "calc-3",
      level: 1,
      type: "truefalse",
      question:
        "Un taux de 0,5 g/L d'alcool dans le sang correspond à 0,25 mg/L d'alcool dans l'air expiré.",
      answer: true,
      explanation:
        "Vrai. La correspondance est constante : le taux en milligrammes par litre d'air expiré vaut la moitié du taux en grammes par litre de sang. Ainsi 0,2 g/L correspond à 0,10 mg/L, et 0,8 g/L à 0,40 mg/L. C'est cette dernière valeur que les forces de l'ordre lisent sur l'éthylomètre lorsqu'un délit est caractérisé.",
      hint: "Passer du sang à l'air expiré revient à diviser par deux.",
    },
    {
      id: "calc-4",
      level: 1,
      type: "qcm",
      question:
        "Vous avez consommé du cannabis la veille au soir et vous prenez le volant le lendemain matin. Que dit la réglementation ?",
      choices: [
        "C'est autorisé si je me sens parfaitement lucide",
        "C'est autorisé si la quantité consommée était faible",
        "C'est toléré : seule l'alcoolémie est contrôlée lors des contrôles routiers",
        "C'est interdit : conduire après usage de stupéfiants est un délit, quelle que soit la quantité",
      ],
      answer: 3,
      explanation:
        "La conduite après usage de stupéfiants est interdite sans aucun seuil de tolérance : c'est un délit puni de 3 ans d'emprisonnement, 9 000 € d'amende et 6 points en moins. Le piège tient à la durée de détection : le test salivaire peut être positif longtemps après la disparition des effets ressentis.",
      hint: "Existe-t-il un seuil légal pour les stupéfiants, comme pour l'alcool ?",
    },
    {
      id: "calc-5",
      level: 1,
      type: "qcm",
      question:
        "Sur un long trajet, à quelle fréquence est-il recommandé de faire une pause ?",
      choices: [
        "Toutes les 30 minutes",
        "Toutes les 2 heures",
        "Toutes les 4 heures",
        "Uniquement lorsque l'on se sent fatigué",
      ],
      answer: 1,
      explanation:
        "La recommandation est une pause d'au moins 20 minutes toutes les deux heures de conduite. Le piège est la dernière proposition : attendre de se sentir fatigué revient à réagir après l'apparition des premiers signes de somnolence, alors que la baisse de vigilance est déjà installée.",
      hint: "La pause doit précéder la fatigue, pas la suivre.",
    },
    {
      id: "calc-6",
      level: 2,
      type: "qcm",
      question:
        "Vous êtes titulaire du permis depuis six ans et un contrôle établit un taux de 0,6 g/L de sang. Que risquez-vous ?",
      choices: [
        "Un simple avertissement",
        "Un délit puni de 2 ans de prison",
        "Une contravention de 4e classe : 135 € d'amende et 6 points en moins",
        "Une amende de 68 € et 3 points en moins",
      ],
      answer: 2,
      explanation:
        "Entre 0,5 et 0,8 g/L, l'infraction est une contravention de 4e classe : amende forfaitaire de 135 €, retrait de 6 points et suspension du permis pouvant aller jusqu'à 3 ans. Le piège est de sous-estimer le retrait de points : 6 points, soit la moitié d'un permis à 12 points, pour une simple contravention.",
      hint: "Le montant est modeste, le retrait de points ne l'est pas.",
    },
    {
      id: "calc-7",
      level: 2,
      type: "qcm",
      question:
        "À partir de quel taux d'alcool dans le sang la conduite devient-elle un délit ?",
      choices: ["0,5 g/L", "0,8 g/L", "1,2 g/L", "0,7 g/L"],
      answer: 1,
      explanation:
        "À partir de 0,8 g/L de sang, soit 0,40 mg/L d'air expiré, l'infraction est un délit puni de 3 ans d'emprisonnement et de 9 000 € d'amende, avec 6 points retirés et rétention immédiate du permis. La conduite en état d'ivresse manifeste est punie des mêmes peines, même sans mesure du taux.",
      hint: "C'est le seuil qui déclenche la rétention immédiate du permis.",
    },
    {
      id: "calc-8",
      level: 2,
      type: "truefalse",
      question:
        "Boire un café fort ou prendre une douche froide accélère l'élimination de l'alcool dans le sang.",
      answer: false,
      explanation:
        "Faux. L'organisme élimine l'alcool à un rythme d'environ 0,10 à 0,15 g/L par heure, et rien ne l'accélère : ni le café, ni la douche, ni l'air frais, ni un repas. Ces gestes peuvent donner une impression trompeuse de lucidité, mais le taux mesuré à l'éthylomètre reste identique.",
      hint: "Seul un facteur fait baisser l'alcoolémie.",
    },
    {
      id: "calc-9",
      level: 2,
      type: "qcm",
      question:
        "Vous conduisez en tenant votre téléphone à la main. Que risquez-vous ?",
      choices: [
        "135 € d'amende et 3 points en moins",
        "68 € d'amende et aucun retrait de point",
        "135 € d'amende et 6 points en moins",
        "Rien, si je suis arrêté devant un feu rouge",
      ],
      answer: 0,
      explanation:
        "L'usage d'un téléphone tenu en main par le conducteur d'un véhicule en circulation est une contravention de 4e classe : 135 € et 3 points. Le piège est la dernière proposition : un véhicule immobilisé à un feu rouge ou dans un embouteillage reste en circulation, et l'infraction est bien constituée.",
      hint: "Être à l'arrêt dans la circulation n'est pas être stationné.",
    },
    {
      id: "calc-10",
      level: 2,
      type: "qcm",
      question:
        "La boîte d'un médicament porte un pictogramme rouge de niveau 3. Que signifie-t-il ?",
      choices: [
        "Soyez prudent, lisez la notice",
        "Le médicament n'a aucun effet sur la conduite",
        "Soyez très prudent : demandez l'avis d'un professionnel de santé",
        "Ne pas conduire ; l'avis d'un médecin est nécessaire pour reprendre le volant",
      ],
      answer: 3,
      explanation:
        "Le pictogramme rouge de niveau 3 interdit la conduite : la reprise du volant suppose l'avis d'un médecin. Le niveau 1, jaune, invite à la prudence et à la lecture de la notice ; le niveau 2, orange, impose de demander conseil à un professionnel de santé avant de conduire.",
      hint: "Trois niveaux, trois couleurs, du jaune au rouge.",
    },
    {
      id: "calc-11",
      level: 3,
      type: "qcm",
      question: "Comment l'alcool agit-il sur la conduite ?",
      choices: [
        "Il allonge le temps de réaction et rétrécit le champ visuel",
        "Il améliore la concentration à faible dose",
        "Il n'a d'effet mesurable qu'au-delà de 0,8 g/L",
        "Il ne ralentit que les réflexes des conducteurs âgés",
      ],
      answer: 0,
      explanation:
        "L'alcool allonge le temps de réaction, rétrécit le champ visuel, fausse l'appréciation des distances et des vitesses, diminue la vigilance et lève les inhibitions. Ces effets apparaissent dès les premiers verres, bien avant le seuil de 0,8 g/L. Le piège d'examen est l'idée d'une « dose utile » : à aucune dose l'alcool n'améliore la conduite.",
      hint: "Ces effets commencent-ils à un seuil précis ou dès les premiers verres ?",
    },
    {
      id: "calc-12",
      level: 3,
      type: "qcm",
      question:
        "Vous conduisez un autocar de transport de voyageurs. Quel taux d'alcool ne devez-vous pas atteindre ?",
      choices: [
        "0,8 g/L de sang",
        "0,5 g/L de sang",
        "Aucun seuil particulier ne s'applique",
        "0,2 g/L de sang",
      ],
      answer: 3,
      explanation:
        "Les conducteurs de véhicules de transport en commun relèvent du seuil abaissé de 0,2 g/L de sang, soit 0,10 mg/L d'air expiré, comme les conducteurs en période probatoire, les élèves en conduite accompagnée et les personnes soumises à un éthylotest antidémarrage. Le piège est de réserver ce seuil aux seuls jeunes conducteurs.",
      hint: "Le seuil bas ne concerne pas que les débutants.",
    },
    {
      id: "calc-13",
      level: 3,
      type: "qcm",
      question:
        "Vous circulez sur autoroute : vous bâillez, vos paupières sont lourdes et vous venez de mordre la bande d'arrêt d'urgence. Que faites-vous ?",
      choices: [
        "J'ouvre la fenêtre et je monte le son de la radio",
        "J'accélère pour arriver plus vite à destination",
        "Je m'arrête sur la prochaine aire et je fais une sieste de 15 à 20 minutes",
        "Je bois un café tout en continuant à rouler",
      ],
      answer: 2,
      explanation:
        "Ces signaux annoncent une somnolence installée, première cause d'accident mortel sur autoroute. La seule réponse efficace est l'arrêt suivi d'une sieste de 15 à 20 minutes. Air frais, musique forte et café en roulant ne font que masquer brièvement la fatigue : la baisse de vigilance, elle, reste entière.",
      hint: "Quelle est la seule mesure qui restaure réellement la vigilance ?",
    },
    {
      id: "calc-14",
      level: 3,
      type: "truefalse",
      question:
        "Le port d'une oreillette ou d'écouteurs est autorisé au volant, à condition de garder les deux mains sur le volant.",
      answer: false,
      explanation:
        "Faux. Le port à l'oreille de tout dispositif susceptible d'émettre du son est interdit au conducteur d'un véhicule en circulation : oreillette, casque, écouteurs, y compris pour téléphoner. La sanction est la même que pour le téléphone tenu en main : 135 € et 3 points. Seuls restent admis les dispositifs intégrés au véhicule et les appareils correcteurs de surdité.",
      hint: "L'interdiction vise l'oreille, pas seulement la main.",
    },
    {
      id: "calc-15",
      level: 3,
      type: "qcm",
      question:
        "Un conducteur est contrôlé positif aux stupéfiants et se trouve en même temps sous l'empire d'un état alcoolique. Quelles peines maximales encourt-il ?",
      choices: [
        "3 ans de prison et 9 000 € d'amende",
        "5 ans de prison et 15 000 € d'amende",
        "2 ans de prison et 4 500 € d'amende",
        "Une contravention de 5e classe",
      ],
      answer: 1,
      explanation:
        "Le cumul des deux infractions porte les peines à 5 ans d'emprisonnement et 15 000 € d'amende, avec 9 points retirés au lieu de 6, immobilisation et mise en fourrière du véhicule, et confiscation obligatoire sauf décision motivée du juge. Pris isolément, l'usage de stupéfiants au volant expose déjà à 3 ans de prison et 9 000 € d'amende.",
      hint: "Le cumul aggrave à la fois la peine et le retrait de points.",
    },
  ],
};

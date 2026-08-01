import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "moto-conduite",
  subject: "moto",
  grade: "permis",
  num: 3,
  title: "Conduite et sécurité à moto",
  domain: "geometrie",
  icon: "Route",
  teaser:
    "Trajectoire de sécurité, placement sur la voie, freinage, adhérence : les gestes qui font la différence sur deux roues.",
  objectives: [
    "Je place ma moto sur la voie pour voir et pour être vu",
    "Je construis une trajectoire de sécurité en virage",
    "Je répartis correctement mon freinage entre l'avant et l'arrière",
    "J'anticipe les pertes d'adhérence : pluie, gravillons, marquages, rails",
  ],
  lesson: [
    {
      title: "Voir et être vu : le placement sur la voie",
      paragraphs: [
        "Un motard n'occupe qu'une fraction de la largeur de sa voie : il peut donc choisir sa position latérale, et ce choix conditionne à la fois ce qu'il voit et la façon dont les autres le perçoivent. La règle est simple : on se place là où l'on gagne du champ de vision et là où l'on est le plus tôt visible dans le pare-brise ou les rétroviseurs des autres.",
        "Sur une route à double sens, se décaler légèrement vers l'extérieur de sa voie, sans jamais empiéter sur la voie opposée, allonge la vue dans les courbes et dégage l'angle mort du véhicule qui précède. À l'approche d'une intersection, on se replace au contraire vers le centre de sa voie pour ne pas se faire couper la route par un véhicule qui débouche.",
        "L'intervalle de sécurité se mesure en temps, pas en mètres : deux secondes minimum par temps sec, davantage sous la pluie. À moto, cet intervalle sert autant à freiner qu'à voir : trop près du véhicule qui précède, le motard perd la vue de la route et se retrouve masqué aux yeux des autres.",
        "Les angles morts sont doublement dangereux à moto : ceux des autres, où la silhouette étroite du deux-roues disparaît complètement, et ceux du motard lui-même, que les rétroviseurs ne couvrent pas. Un contrôle visuel direct par-dessus l'épaule est indispensable avant chaque changement de direction ou de file.",
      ],
      example: [
        "Vous suivez une camionnette sur une route de campagne. Collé derrière elle, vous ne voyez rien de la route et son conducteur ne vous voit pas non plus. En reculant à plus de deux secondes et en vous décalant légèrement sur la gauche de votre voie, vous retrouvez la vue sur la chaussée et vous apparaissez dans son rétroviseur.",
      ],
      tip: "Le placement du motard répond à deux questions : est-ce que je vois loin, et est-ce que l'autre me voit tôt. Si l'une des deux réponses est non, on change de position.",
    },
    {
      title: "La trajectoire de sécurité en virage",
      paragraphs: [
        "En virage, la trajectoire de sécurité ne se confond pas avec la trajectoire de vitesse utilisée sur circuit. Elle vise à voir le plus loin possible dans la courbe, à conserver une marge par rapport aux autres usagers et à pouvoir corriger si un obstacle apparaît.",
        "Elle se construit en trois temps. À l'approche, on se place à l'extérieur de sa voie pour ouvrir l'angle de vue. Ensuite, on retarde le point de corde, c'est-à-dire le moment où l'on se rapproche de l'intérieur du virage : ce retard permet de découvrir la sortie avant de s'engager. Enfin, on ressort progressivement en accélérant doucement une fois la sortie visible.",
        "Dans un virage à droite, on reste vers le milieu ou l'extérieur gauche de sa voie à l'approche, sans jamais franchir l'axe : c'est là que se joue la marge de sécurité face à un véhicule qui déborde en sens inverse. Dans un virage à gauche, on se place au contraire vers la droite de sa voie, ce qui éloigne des véhicules venant en face et allonge la vue.",
        "Toute la vitesse doit être réglée avant l'entrée du virage. Freiner sur l'angle déstabilise la machine et la redresse ; à l'inverse, une accélération douce et progressive en sortie stabilise la moto. Le regard commande la trajectoire : on regarde loin, vers la sortie, jamais l'obstacle que l'on veut éviter.",
      ],
      example: [
        "Vous abordez un virage à gauche sans visibilité. En vous plaçant à droite de votre voie, vous découvrez la sortie plusieurs dizaines de mètres plus tôt qu'en restant au milieu, et vous restez loin d'un véhicule qui mordrait l'axe en arrivant en face.",
      ],
      tip: "Extérieur pour voir, point de corde retardé pour décider, sortie progressive pour accélérer. On ralentit avant, on tourne, on accélère après.",
    },
    {
      title: "Freiner à moto : la répartition avant/arrière",
      paragraphs: [
        "Au freinage, le poids de l'ensemble se transfère vers l'avant : la roue avant s'écrase sur le sol et gagne en adhérence, la roue arrière s'allège et se met à glisser facilement. C'est pourquoi l'essentiel de la puissance de freinage vient de l'avant, l'arrière apportant un complément et surtout de la stabilité.",
        "Le freinage efficace est donc combiné : les deux freins actionnés ensemble, avec une pression progressive sur le levier avant plutôt qu'un serrage brutal. Un appui brutal sur l'avant fait bloquer la roue et provoque la chute presque instantanément sur une machine sans ABS.",
        "L'ordre des gestes compte : on freine en ligne droite, moto redressée, avant d'aborder la courbe. Sur l'angle, l'adhérence disponible est déjà consommée par la force qui maintient la moto en virage : il n'en reste presque plus pour freiner.",
        "L'ABS, obligatoire sur les motos neuves de plus de 125 cm³ depuis 2017, empêche le blocage des roues et permet de conserver la direction. Il ne raccourcit pas la distance de freinage dans tous les cas et ne dispense jamais d'anticiper : la distance d'arrêt reste la somme de la distance parcourue pendant le temps de réaction et de la distance de freinage.",
      ],
      example: [
        "À 90 km/h, une seconde de temps de réaction représente 25 mètres parcourus avant même que le frein ne soit actionné. Sur sol mouillé, la distance de freinage qui s'ajoute ensuite peut doubler par rapport au sol sec.",
      ],
      tip: "Les deux freins, l'avant en priorité, progressivement, et toujours moto droite. Freiner sur l'angle est le geste qui met le plus de motards au sol.",
    },
    {
      title: "L'adhérence : pluie, gravillons, marquages et rails",
      paragraphs: [
        "Avec deux roues et une empreinte au sol minuscule, la moto ne pardonne aucune perte d'adhérence. Les premières minutes de pluie sont les plus traîtresses : l'eau soulève les huiles et les poussières accumulées sur la chaussée et forme un film particulièrement glissant, surtout aux endroits où les véhicules s'arrêtent, comme les carrefours et les péages.",
        "Certaines surfaces sont durablement traîtresses : marquages au sol en peinture, plaques d'égout, joints de chaussée, passages piétons, bandes de résine des ralentisseurs. Elles se franchissent moto droite, sans freiner ni accélérer, en ligne droite autant que possible.",
        "Les rails de tramway et les voies ferrées se croisent le plus perpendiculairement possible : les aborder de biais expose à voir la roue avant se prendre dans la saignée du rail. Le même raisonnement vaut pour les longues fissures et les rainurages de chaussée.",
        "Les gravillons se rencontrent surtout en sortie de virage, sur les routes de campagne, à la sortie des chemins agricoles et sur les chantiers signalés par le panneau de danger correspondant. On les traite en réduisant la vitesse avant, en redressant la machine et en évitant tout geste brusque sur les commandes.",
        "Enfin, le froid diminue l'adhérence des pneumatiques : un pneu froid, en début de trajet ou par température basse, n'offre pas le grip d'un pneu à température de fonctionnement. Les premiers kilomètres se conduisent avec une marge supplémentaire.",
      ],
      example: [
        "Vous sortez d'un rond-point sous une averse naissante. Le passage piéton peint au sol, humide, offre une adhérence très inférieure à l'enrobé : vous le franchissez moto redressée, sans accélérer, avant de reprendre de la vitesse.",
      ],
      tip: "Sur une surface douteuse : moto droite, mains et pied immobiles sur les commandes, vitesse réglée avant. On traverse, on ne pilote pas dessus.",
    },
    {
      title: "La circulation inter-files : un cadre strictement limité",
      paragraphs: [
        "La circulation inter-files désigne le fait, pour un deux-roues, de remonter entre deux files de véhicules ralentis ou arrêtés. Elle n'est pas un droit général du motard sur l'ensemble du territoire français : elle n'a été admise que dans le cadre d'expérimentations réglementaires, limitées à certains départements et à une période déterminée.",
        "En dehors de ce cadre expérimental, remonter entre les files reste une infraction, qualifiée selon les cas de dépassement par la droite, de chevauchement ou de franchissement de ligne continue, avec des sanctions pouvant atteindre 135 € d'amende et 3 points, voire davantage pour un franchissement de ligne continue.",
        "Lorsqu'elle a été autorisée à titre expérimental, la circulation inter-files était encadrée par des conditions cumulatives strictes : uniquement sur des routes à au moins deux voies dans le même sens séparées par un marquage et dont la vitesse maximale autorisée est élevée, uniquement entre les deux files les plus à gauche, uniquement lorsque la circulation est fortement ralentie ou arrêtée, à vitesse très réduite, avec retour dans une file dès que le trafic reprend.",
        "La conduite à tenir pour un candidat comme pour un motard confirmé est donc la prudence : se renseigner sur le cadre en vigueur dans le département concerné avant de pratiquer, et ne jamais considérer que la tolérance observée chez d'autres usagers vaut autorisation.",
      ],
      example: [
        "Sur un boulevard urbain à deux voies dans chaque sens, la circulation est arrêtée. Un motard remonte entre les files. Hors dispositif expérimental applicable, il est en infraction, quelle que soit sa vitesse et même si la manœuvre paraît sans danger.",
      ],
      tip: "Retenez la logique plutôt que la liste : la circulation inter-files n'est pas autorisée par principe en France, elle l'a été par exception, dans un cadre limité dans l'espace et dans le temps.",
    },
  ],
  exercises: [
    {
      id: "mot3-1",
      level: 1,
      type: "qcm",
      question:
        "Vous abordez un virage à gauche sans visibilité sur une route à double sens. Où placez-vous votre moto à l'approche ?",
      choices: [
        "Vers la droite de ma voie",
        "Sur l'axe médian pour couper le virage",
        "Au milieu exact de la voie, quelle que soit la courbe",
        "Le plus près possible du bord gauche, contre la ligne",
      ],
      answer: 0,
      explanation:
        "Dans un virage à gauche, se placer vers la droite de sa voie ouvre l'angle de vue vers la sortie et éloigne des véhicules arrivant en face, dont certains mordent l'axe. Le piège est d'appliquer la trajectoire de circuit, qui consiste à couper au plus court : elle place le motard exactement là où arrivent les autres.",
      hint: "On se place du côté opposé à la courbe pour voir plus loin.",
    },
    {
      id: "mot3-2",
      level: 1,
      type: "qcm",
      question:
        "Lors d'un freinage d'urgence à moto, quel frein assure l'essentiel de la puissance de freinage ?",
      choices: [
        "Le frein arrière",
        "Le frein avant",
        "Les deux fournissent exactement la même part",
        "Le frein moteur, en rétrogradant",
      ],
      answer: 1,
      explanation:
        "Au freinage, le poids se transfère vers l'avant : la roue avant s'écrase et gagne en adhérence, la roue arrière s'allège et glisse facilement. L'essentiel de la puissance vient donc de l'avant, l'arrière apportant un complément et de la stabilité. Le piège est de croire qu'il faut éviter le frein avant par peur de la chute : c'est la brutalité du geste, pas le frein avant lui-même, qui fait tomber.",
      hint: "Pensez à ce qui se passe quand une moto plonge sur sa fourche.",
    },
    {
      id: "mot3-3",
      level: 1,
      type: "truefalse",
      question:
        "Il est prudent de freiner fortement lorsqu'on est déjà incliné dans un virage.",
      answer: false,
      explanation:
        "Faux. Sur l'angle, l'adhérence disponible est déjà largement consommée par la force qui maintient la moto en virage : il n'en reste presque plus pour freiner. Un freinage appuyé provoque alors soit un dérobage de roue, soit un redressement brutal qui envoie la moto vers l'extérieur. La règle est de régler sa vitesse avant l'entrée du virage, moto droite.",
      hint: "L'adhérence disponible se partage entre tourner et freiner.",
    },
    {
      id: "mot3-4",
      level: 1,
      type: "qcm",
      question:
        "Quel est l'intervalle de sécurité minimal recommandé par temps sec derrière le véhicule qui précède ?",
      choices: ["Une demi-seconde", "Une seconde", "Deux secondes", "Cinq secondes"],
      answer: 2,
      explanation:
        "L'intervalle de sécurité se mesure en temps : deux secondes minimum par temps sec, davantage sous la pluie ou avec un passager. Cet intervalle sert autant à freiner qu'à voir : trop près du véhicule qui précède, le motard perd toute vision de la route et devient invisible pour l'autre conducteur.",
      hint: "On le compte en repérant un point fixe au bord de la route.",
    },
    {
      id: "mot3-5",
      level: 1,
      type: "qcm",
      question:
        "Vous devez traverser des rails de tramway. Comment les abordez-vous ?",
      choices: [
        "En les longeant sur quelques mètres avant de sortir",
        "En les franchissant le plus perpendiculairement possible",
        "En freinant fort juste avant le rail",
        "En accélérant pour passer plus vite",
      ],
      answer: 1,
      explanation:
        "Les rails se franchissent le plus perpendiculairement possible, moto droite, sans freiner ni accélérer. Les aborder de biais expose à voir la roue avant se coincer dans la saignée du rail, ce qui provoque une chute immédiate. Le métal mouillé est en outre extrêmement glissant.",
      hint: "L'angle d'attaque est ce qui décide du sort de la roue avant.",
    },
    {
      id: "mot3-6",
      level: 2,
      type: "qcm",
      question:
        "Qu'appelle-t-on « retarder le point de corde » dans une trajectoire de sécurité ?",
      choices: [
        "Freiner le plus tard possible avant le virage",
        "Repousser le moment où l'on se rapproche de l'intérieur du virage, pour découvrir la sortie avant de s'engager",
        "Accélérer dès l'entrée du virage",
        "Rester collé à l'intérieur du virage du début à la fin",
      ],
      answer: 1,
      explanation:
        "Retarder le point de corde consiste à rester à l'extérieur plus longtemps, puis à se rapprocher de l'intérieur seulement lorsque la sortie devient visible. Cela allonge le champ de vision et laisse la possibilité de corriger si un obstacle apparaît. Le piège est de confondre trajectoire de sécurité et trajectoire de vitesse : sur circuit, le point de corde est au contraire anticipé pour aller vite.",
      hint: "L'objectif est de voir la sortie avant de s'y engager.",
    },
    {
      id: "mot3-7",
      level: 2,
      type: "qcm",
      question:
        "Il commence à pleuvoir après plusieurs semaines de sec. Quel est le moment le plus dangereux ?",
      choices: [
        "Après une heure de pluie continue",
        "Les premières minutes de l'averse",
        "Une fois la chaussée totalement détrempée",
        "Le lendemain, sur chaussée encore humide",
      ],
      answer: 1,
      explanation:
        "Les premières minutes de pluie sont les plus dangereuses : l'eau soulève les huiles, les poussières et les résidus de gomme accumulés sur la chaussée et forme un film particulièrement glissant. Une pluie soutenue finit au contraire par laver la route. Les zones où les véhicules s'arrêtent, carrefours, péages, arrêts de bus, concentrent ces dépôts.",
      hint: "Il faut du temps à l'eau pour laver la chaussée.",
    },
    {
      id: "mot3-8",
      level: 2,
      type: "truefalse",
      question:
        "Le contrôle des rétroviseurs suffit pour changer de file en toute sécurité à moto.",
      answer: false,
      explanation:
        "Faux. Les rétroviseurs d'une moto laissent des angles morts importants, et la silhouette étroite d'un autre deux-roues peut y disparaître complètement. Un contrôle visuel direct par-dessus l'épaule, bref mais réel, est indispensable avant tout changement de file ou de direction, en complément du clignotant.",
      hint: "Un rétroviseur montre une zone, pas toute la route.",
    },
    {
      id: "mot3-9",
      level: 2,
      type: "qcm",
      question:
        "Vous franchissez un large passage piéton peint, détrempé par la pluie. Quelle est la bonne conduite ?",
      choices: [
        "Je freine sur la peinture pour ralentir avant le carrefour",
        "J'accélère franchement pour réduire le temps de contact",
        "Je le traverse moto droite, sans freiner ni accélérer, vitesse réglée avant",
        "Je m'incline légèrement pour contourner les bandes blanches",
      ],
      answer: 2,
      explanation:
        "Les peintures de marquage, plaques d'égout, joints de chaussée et résines de ralentisseur offrent une adhérence très inférieure à l'enrobé, surtout mouillés. On règle sa vitesse avant, puis on traverse moto redressée, sans aucune sollicitation des commandes. Le piège consiste à vouloir corriger sa vitesse pendant la traversée : c'est précisément le geste qui fait déraper.",
      hint: "Sur une surface douteuse, on ne pilote pas : on traverse.",
    },
    {
      id: "mot3-10",
      level: 2,
      type: "qcm",
      question:
        "Que peut-on affirmer de la circulation inter-files en France ?",
      choices: [
        "Elle est autorisée partout dès que la circulation est ralentie",
        "Elle n'est pas autorisée par principe : elle n'a été admise que dans un cadre expérimental limité à certains départements",
        "Elle est autorisée sur toutes les autoroutes du territoire",
        "Elle est interdite y compris aux véhicules d'urgence",
      ],
      answer: 1,
      explanation:
        "La circulation inter-files n'est pas un droit général du motard : elle n'a été admise qu'à titre expérimental, dans des départements et pour des périodes déterminés, sous conditions cumulatives strictes. Hors de ce cadre, remonter entre les files reste une infraction, qualifiée selon les cas de dépassement par la droite, de chevauchement ou de franchissement de ligne. Le piège est de prendre la pratique courante pour une autorisation.",
      hint: "Une pratique répandue n'est pas une règle générale.",
    },
    {
      id: "mot3-11",
      level: 3,
      type: "qcm",
      question:
        "Vous roulez à 90 km/h. Quelle distance parcourez-vous pendant une seconde de temps de réaction, avant même d'avoir actionné les freins ?",
      choices: ["9 mètres", "15 mètres", "25 mètres", "45 mètres"],
      answer: 2,
      explanation:
        "À 90 km/h, on parcourt 25 mètres par seconde. La distance d'arrêt est la somme de cette distance de réaction et de la distance de freinage proprement dite : c'est pourquoi l'anticipation compte davantage que la puissance des freins. Le calcul rapide consiste à diviser la vitesse en km/h par 3,6 pour obtenir les mètres parcourus en une seconde.",
      hint: "Divisez la vitesse en km/h par 3,6.",
    },
    {
      id: "mot3-12",
      level: 3,
      type: "qcm",
      question:
        "En sortie de virage sur une route de campagne, vous découvrez une nappe de gravillons. Quelle est la meilleure réaction ?",
      choices: [
        "Freiner fortement de l'avant pour m'arrêter avant",
        "M'incliner davantage pour contourner la nappe",
        "Redresser la machine autant que possible et traverser sans geste brusque",
        "Accélérer pour faire glisser la roue arrière volontairement",
      ],
      answer: 2,
      explanation:
        "Face à des gravillons découverts tardivement, le seul geste sûr est de redresser la machine autant que possible et de traverser sans action brutale sur les freins, la direction ou l'accélérateur. Freiner fort sur des billes de gravier ou augmenter l'angle revient à supprimer le peu d'adhérence restant. La vraie prévention est en amont : ralentir avant les virages sans visibilité, surtout près des chemins agricoles.",
      hint: "Moins la moto est inclinée, plus l'adhérence disponible sert à avancer droit.",
    },
    {
      id: "mot3-13",
      level: 3,
      type: "truefalse",
      question:
        "L'ABS d'une moto garantit une distance de freinage plus courte dans toutes les situations.",
      answer: false,
      explanation:
        "Faux. L'ABS empêche le blocage des roues et permet de conserver le contrôle de la direction pendant un freinage appuyé, ce qui est déterminant sur deux roues. Il ne raccourcit pas la distance de freinage dans tous les cas, notamment sur revêtement meuble comme le gravier, et il ne fait rien pour la distance parcourue pendant le temps de réaction. Le piège est de freiner plus tard parce que la machine en est équipée.",
      hint: "Son apport principal porte sur le contrôle de la direction.",
    },
    {
      id: "mot3-14",
      level: 3,
      type: "qcm",
      question:
        "Vous suivez une camionnette dont vous ne voyez pas au-delà. Quelle position adoptez-vous et pourquoi ?",
      choices: [
        "Je me rapproche pour la doubler dès que possible",
        "Je recule à plus de deux secondes et je me décale dans ma voie pour retrouver de la visibilité et apparaître dans son rétroviseur",
        "Je reste exactement dans son axe pour être protégé du vent",
        "Je circule sur la bande d'arrêt d'urgence pour voir devant",
      ],
      answer: 1,
      explanation:
        "Reculer restaure le champ de vision et fait sortir le motard de l'angle mort du véhicule qui précède. Se placer dans l'axe d'une camionnette cumule les deux pires effets : on ne voit rien de la route et on est invisible pour son conducteur. Rouler sur la bande d'arrêt d'urgence est par ailleurs une infraction, cet espace étant réservé aux arrêts d'urgence et aux véhicules de secours.",
      hint: "Voir loin et être vu tôt : les deux se gagnent par la même manœuvre.",
    },
    {
      id: "mot3-15",
      level: 3,
      type: "qcm",
      question:
        "Dans une trajectoire de sécurité, dans quel ordre s'enchaînent freinage, prise d'angle et accélération ?",
      choices: [
        "Je freine avant, je prends l'angle, j'accélère progressivement en sortie",
        "Je prends l'angle, je freine sur la corde, j'accélère avant la sortie",
        "J'accélère à l'entrée, je freine au milieu, je redresse en sortie",
        "Je freine tout au long du virage pour garder le contrôle",
      ],
      answer: 0,
      explanation:
        "La séquence est immuable : toute la vitesse se règle en ligne droite avant le virage, on tourne à vitesse stabilisée en retardant le point de corde, puis on accélère doucement une fois la sortie visible, ce qui stabilise la machine. Freiner pendant la mise sur l'angle redresse la moto et l'envoie à l'extérieur : c'est l'erreur la plus fréquente en sortie de route à moto.",
      hint: "Une seule action à la fois : ralentir, tourner, relancer.",
    },
  ],
};

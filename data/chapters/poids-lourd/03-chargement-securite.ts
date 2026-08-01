import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "pl-chargement",
  subject: "poids-lourd",
  grade: "permis",
  num: 3,
  title: "Chargement, gabarit et sécurité",
  domain: "geometrie",
  icon: "Package",
  teaser:
    "Répartir, arrimer, respecter le gabarit et les vitesses : ce qui distingue vraiment la conduite d'un poids lourd.",
  objectives: [
    "Je répartis et j'arrime une charge correctement",
    "Je connais les limites de gabarit : largeur, hauteur, longueur",
    "Je connais les sanctions de la surcharge et les vitesses limites des poids lourds",
    "J'anticipe les angles morts et les distances de freinage d'un ensemble lourd",
  ],
  lesson: [
    {
      title: "Répartir la charge : l'équilibre avant tout",
      paragraphs: [
        "Un chargement mal réparti dégrade la tenue de route bien avant d'atteindre la surcharge. La règle de base est de placer les masses les plus lourdes au plus bas et au plus près de l'axe longitudinal du véhicule, réparties de façon équilibrée entre l'avant et l'arrière et entre les côtés gauche et droit.",
        "Une charge trop reculée allège l'essieu directeur : la direction devient floue et le véhicule perd de la précision. Une charge trop avancée surcharge l'essieu avant et allonge les distances de freinage. Un déséquilibre latéral, lui, abaisse le seuil de renversement en virage et sur les bretelles de sortie.",
        "Le respect du PTAC ne suffit pas : chaque essieu dispose d'une charge maximale propre, indiquée sur le véhicule et sur le certificat d'immatriculation. Un ensemble peut être sous son PTAC total tout en présentant un essieu en surcharge, ce qui constitue une infraction à part entière.",
        "Le centre de gravité d'un poids lourd chargé est haut. C'est la raison pour laquelle les renversements se produisent à des vitesses très inférieures à celles qu'un conducteur de voiture jugerait dangereuses, en particulier sur les giratoires et les bretelles d'autoroute.",
      ],
      example: [
        "Un semi-remorque chargé de palettes uniquement sur les deux derniers mètres du plancher se trouve dans une configuration critique : essieu avant délesté, essieu arrière en surcharge, et comportement en freinage imprévisible, alors même que le poids total reste conforme.",
      ],
      tip: "Bas, centré, réparti. Trois mots qui résument la répartition d'une charge, et qui priment sur le seul respect du poids total.",
    },
    {
      title: "Arrimer : empêcher tout déplacement de la charge",
      paragraphs: [
        "L'arrimage vise à empêcher tout déplacement de la charge lors des accélérations, des freinages et des virages. Un chargement non arrimé se comporte comme un projectile : lors d'un freinage d'urgence, une charge peut développer une force plusieurs fois supérieure à son propre poids.",
        "Les techniques se combinent : le blocage contre les parois ou les ridelles, le cerclage par sangles passant par-dessus la charge, l'arrimage direct par sangles ou chaînes reliant la charge aux points d'ancrage, et l'emploi de tapis antidérapants ou de barres de calage.",
        "Le matériel doit être adapté et en bon état : sangle avec étiquette lisible indiquant sa capacité, cliquet fonctionnel, absence de coupure ou d'effilochage. Une sangle usée cède au moment précis où elle serait utile.",
        "La responsabilité de l'arrimage n'appartient pas seulement au chargeur : le conducteur doit vérifier son chargement avant le départ et le contrôler après les premiers kilomètres, la charge ayant tendance à se tasser. Le chargement ne doit ni traîner sur la route, ni masquer les feux et les plaques, ni compromettre la stabilité du véhicule.",
      ],
      example: [
        "Vous chargez des tubes métalliques. Le blocage seul ne suffit pas : ils roulent. Il faut les caler avec des chandelles ou des berceaux, puis les sangler, et vérifier l'arrimage après une dizaine de kilomètres.",
      ],
      tip: "Un chargement est correctement arrimé lorsqu'il ne bouge pas si l'on freine d'urgence. Dans le doute, on ajoute une sangle : elle coûte moins cher qu'un accident.",
    },
    {
      title: "Le gabarit : largeur, hauteur, longueur",
      paragraphs: [
        "La largeur maximale d'un véhicule chargé est de 2,55 mètres, portée à 2,60 mètres pour les véhicules isothermes à parois épaisses, notamment les frigorifiques.",
        "La hauteur maximale admise est de 4 mètres, chargement compris. C'est le gabarit à surveiller en permanence : les ponts, les passages sous voûte, les auvents de station-service et les branches basses sont responsables de nombreux accrochages, souvent parce que le conducteur a changé de véhicule et raisonne encore avec l'ancienne hauteur.",
        "La longueur maximale est de 12 mètres pour un véhicule isolé, 16,50 mètres pour un ensemble articulé et 18,75 mètres pour un train routier. Un dépassement de charge à l'arrière est possible dans certaines limites, à condition d'être signalé par un dispositif réfléchissant réglementaire.",
        "Tout transport hors gabarit relève d'un régime d'autorisation particulier, avec itinéraire imposé et, selon les cas, accompagnement. Un panneau de limitation de hauteur, de largeur ou de longueur est une interdiction absolue : on ne « tente » pas le passage.",
      ],
      example: [
        "Vous prenez un porteur inhabituel dont la hauteur totale atteint 3,90 m. Le panneau annonce un passage limité à 3,80 m : vous devez impérativement contourner, quelle que soit la longueur du détour.",
      ],
      tip: "Notez la hauteur exacte de votre véhicule chargé et gardez-la sous les yeux dans la cabine. La plupart des accrochages de pont viennent d'un chiffre approximatif de mémoire.",
    },
    {
      title: "La surcharge et ses sanctions",
      paragraphs: [
        "La surcharge consiste à dépasser le PTAC, le PTRA ou la charge maximale autorisée sur un essieu. Elle allonge les distances de freinage, sollicite excessivement les pneumatiques et les freins, dégrade les chaussées et les ouvrages d'art, et engage la responsabilité pénale du conducteur comme celle de l'entreprise.",
        "Pour les véhicules dont le PTAC dépasse 3,5 tonnes, le dépassement du poids autorisé est sanctionné par une contravention de 4e classe, soit 135 € d'amende. Lorsque le dépassement atteint ou dépasse 20 % du poids autorisé, la contravention est de 5e classe, avec une amende pouvant atteindre 1 500 €.",
        "Dans tous les cas, le véhicule peut être immobilisé jusqu'à la mise en conformité : il faut alors transférer la charge excédentaire sur un autre véhicule, ce qui immobilise le conducteur et coûte à l'entreprise bien davantage que l'amende.",
        "La responsabilité n'est pas seulement celle du conducteur : le donneur d'ordre et l'employeur peuvent être poursuivis. Cela n'exonère pas le conducteur, qui reste tenu de refuser de prendre la route avec un chargement qu'il sait non conforme.",
      ],
      example: [
        "Un ensemble autorisé à 40 tonnes est pesé à 48,5 tonnes, soit plus de 20 % de dépassement. La contravention devient de 5e classe et le véhicule est immobilisé jusqu'au transfert de la charge excédentaire.",
      ],
      tip: "Le seuil à retenir est 20 % : en dessous, contravention de 4e classe ; à partir de ce seuil, contravention de 5e classe et immobilisation.",
    },
    {
      title: "Angles morts, distances de freinage et vitesses",
      paragraphs: [
        "Un poids lourd présente des angles morts considérables : devant la cabine, le long du flanc droit, et derrière le véhicule. Depuis 2021, les véhicules de plus de 3,5 tonnes doivent porter une signalisation matérialisant ces angles morts, apposée à l'avant et sur les deux côtés, afin d'alerter les cyclistes et les piétons.",
        "La manœuvre la plus meurtrière reste le virage à droite en ville : la remorque coupe l'intérieur du virage et écrase l'espace où se trouve souvent un cycliste. Le contrôle des rétroviseurs, l'usage du miroir d'angle mort et une amorce de virage suffisamment large sont indispensables.",
        "La distance de freinage d'un ensemble chargé est sans commune mesure avec celle d'une voiture : à masse élevée et hauteur de centre de gravité importante, il faut anticiper très en amont et respecter des intervalles bien plus grands. Hors agglomération, les véhicules de plus de 3,5 tonnes ou de plus de 7 mètres doivent maintenir un intervalle d'au moins 50 mètres avec le véhicule qui les précède.",
        "Les vitesses maximales des véhicules de transport de marchandises de plus de 3,5 tonnes sont inférieures à celles des voitures : 90 km/h sur autoroute, 80 km/h sur les routes à chaussées séparées et sur les autres routes hors agglomération, 50 km/h en agglomération. Ces véhicules sont en outre équipés d'un limiteur de vitesse. Enfin, sur les autoroutes comportant au moins trois voies dans un sens, ils ne peuvent pas emprunter la voie la plus à gauche.",
      ],
      example: [
        "Vous abordez un virage à droite serré en ville avec un semi-remorque. Vous contrôlez le rétroviseur droit et le miroir d'angle mort avant et pendant la manœuvre : un cycliste peut se glisser le long du flanc droit en quelques secondes.",
      ],
      tip: "Trois réflexes propres au poids lourd : 50 mètres d'intervalle hors agglomération, jamais la voie de gauche sur une autoroute à trois voies, et un contrôle du flanc droit avant tout virage à droite.",
    },
  ],
  exercises: [
    {
      id: "pl3-1",
      level: 1,
      type: "qcm",
      question:
        "Où placer les éléments les plus lourds d'un chargement ?",
      choices: [
        "Le plus haut possible pour libérer le plancher",
        "Le plus bas possible et près de l'axe du véhicule",
        "Tout à l'arrière pour délester l'avant",
        "Sur un seul côté pour faciliter le déchargement",
      ],
      answer: 1,
      explanation:
        "Les masses les plus lourdes se placent au plus bas et au plus près de l'axe longitudinal, réparties entre l'avant et l'arrière et entre les deux côtés. Un chargement haut élève le centre de gravité et abaisse la vitesse à laquelle le véhicule se renverse en courbe ; un chargement déporté ou trop reculé dégrade la direction et le freinage.",
      hint: "Pensez à ce qui fait basculer un véhicule en virage.",
    },
    {
      id: "pl3-2",
      level: 1,
      type: "qcm",
      question:
        "Quelle est la largeur maximale d'un véhicule chargé, hors véhicules isothermes ?",
      choices: ["2,30 m", "2,55 m", "2,80 m", "3,00 m"],
      answer: 1,
      explanation:
        "La largeur maximale est de 2,55 mètres, portée à 2,60 mètres pour les véhicules isothermes à parois épaisses comme les frigorifiques. Le piège consiste à retenir la valeur dérogatoire comme s'il s'agissait de la règle générale.",
      hint: "La règle générale et l'exception frigorifique ne diffèrent que de 5 centimètres.",
    },
    {
      id: "pl3-3",
      level: 1,
      type: "truefalse",
      question:
        "La hauteur maximale d'un véhicule chargé est de 4 mètres.",
      answer: true,
      explanation:
        "Vrai. La hauteur maximale admise, chargement compris, est de 4 mètres. C'est la cote à connaître précisément pour son propre véhicule : les accrochages de pont et d'auvent proviennent presque toujours d'un conducteur qui a changé de matériel et raisonne encore avec l'ancienne hauteur.",
      hint: "Un chiffre rond, facile à retenir.",
    },
    {
      id: "pl3-4",
      level: 1,
      type: "qcm",
      question:
        "Quelle est la vitesse maximale d'un véhicule de transport de marchandises de plus de 3,5 tonnes sur autoroute ?",
      choices: ["80 km/h", "90 km/h", "110 km/h", "130 km/h"],
      answer: 1,
      explanation:
        "Sur autoroute, un véhicule de transport de marchandises de plus de 3,5 tonnes est limité à 90 km/h. Hors agglomération, sur les routes à chaussées séparées comme sur les autres routes, la limite descend à 80 km/h, et à 50 km/h en agglomération. Le piège est d'appliquer les vitesses des voitures particulières.",
      hint: "C'est la vitesse à laquelle est réglé le limiteur de ces véhicules.",
    },
    {
      id: "pl3-5",
      level: 1,
      type: "qcm",
      question:
        "À quoi sert l'arrimage d'un chargement ?",
      choices: [
        "À protéger la marchandise de la pluie",
        "À empêcher tout déplacement de la charge lors des freinages et des virages",
        "À répartir le poids entre les essieux",
        "À faciliter le passage aux péages",
      ],
      answer: 1,
      explanation:
        "L'arrimage empêche la charge de se déplacer lors des accélérations, des freinages et des virages. Lors d'un freinage d'urgence, une charge non arrimée développe une force plusieurs fois supérieure à son poids et devient un projectile. La répartition, qui est une notion distincte, concerne le placement de la charge entre les essieux.",
      hint: "Répartir et arrimer sont deux opérations différentes.",
    },
    {
      id: "pl3-6",
      level: 2,
      type: "qcm",
      question:
        "Vous transportez un ensemble dont le poids total autorisé est de 40 tonnes. Le pesage indique 43 tonnes. Quelle sanction encourez-vous ?",
      choices: [
        "Aucune, le dépassement est inférieur à 10 %",
        "Une contravention de 4e classe : 135 €",
        "Une contravention de 5e classe : jusqu'à 1 500 €",
        "Un délit avec suspension immédiate du permis",
      ],
      answer: 1,
      explanation:
        "Le dépassement est ici de 3 tonnes sur 40, soit 7,5 %, donc inférieur au seuil de 20 %. Il s'agit d'une contravention de 4e classe, 135 € d'amende, avec immobilisation possible du véhicule jusqu'à la mise en conformité. La contravention de 5e classe, jusqu'à 1 500 €, n'intervient qu'à partir de 20 % de dépassement.",
      hint: "Calculez d'abord le pourcentage de dépassement.",
    },
    {
      id: "pl3-7",
      level: 2,
      type: "qcm",
      question:
        "Quel intervalle minimal un véhicule de plus de 3,5 tonnes doit-il maintenir hors agglomération avec le véhicule qui le précède ?",
      choices: ["20 mètres", "30 mètres", "50 mètres", "100 mètres"],
      answer: 2,
      explanation:
        "Hors agglomération, les véhicules dont le PTAC dépasse 3,5 tonnes ou dont la longueur dépasse 7 mètres doivent maintenir un intervalle d'au moins 50 mètres avec le véhicule qui les précède. Cette règle spécifique s'ajoute à l'obligation générale de distance de sécurité et tient à la distance de freinage considérable d'un ensemble chargé.",
      hint: "C'est l'équivalent de deux traits d'une bande d'arrêt d'urgence espacés.",
    },
    {
      id: "pl3-8",
      level: 2,
      type: "truefalse",
      question:
        "Un ensemble dont le poids total respecte le PTRA ne peut pas être en infraction de charge.",
      answer: false,
      explanation:
        "Faux. Chaque essieu dispose d'une charge maximale propre. Un véhicule peut respecter son PTAC ou son PTRA tout en présentant un essieu en surcharge, ce qui constitue une infraction à part entière. C'est le piège classique du chargement concentré sur une seule zone du plancher.",
      hint: "Le poids total n'est pas la seule limite à respecter.",
    },
    {
      id: "pl3-9",
      level: 2,
      type: "qcm",
      question:
        "Quelle est la longueur maximale d'un ensemble articulé (semi-remorque) ?",
      choices: ["12 m", "16,50 m", "18,75 m", "20 m"],
      answer: 1,
      explanation:
        "Un ensemble articulé est limité à 16,50 mètres. Les 12 mètres correspondent à un véhicule isolé et les 18,75 mètres à un train routier, c'est-à-dire un porteur attelé d'une remorque. Confondre ces trois valeurs est l'erreur la plus fréquente sur la question du gabarit.",
      hint: "Trois configurations, trois longueurs : isolé, articulé, train routier.",
    },
    {
      id: "pl3-10",
      level: 2,
      type: "qcm",
      question:
        "Vous abordez un virage serré à droite en ville avec un semi-remorque. Quel est le risque principal ?",
      choices: [
        "Le décrochage de l'essieu avant",
        "L'écrasement d'un usager circulant le long du flanc droit, dans l'angle mort",
        "Le déclenchement du limiteur de vitesse",
        "La perte des sangles d'arrimage",
      ],
      answer: 1,
      explanation:
        "Le virage à droite est la manœuvre la plus meurtrière pour les cyclistes et les piétons : la remorque coupe l'intérieur du virage et balaie l'espace situé le long du flanc droit, précisément là où se trouve l'angle mort le plus important. Contrôle du rétroviseur droit, miroir d'angle mort et amorce de virage suffisamment large sont indispensables.",
      hint: "Le danger est du côté où la remorque coupe le virage.",
    },
    {
      id: "pl3-11",
      level: 3,
      type: "qcm",
      question:
        "Un ensemble autorisé à 40 tonnes est pesé à 49 tonnes. Quelle est la conséquence ?",
      choices: [
        "Contravention de 4e classe et poursuite du trajet",
        "Contravention de 5e classe, jusqu'à 1 500 €, avec immobilisation jusqu'au transfert de la charge",
        "Une simple observation adressée à l'employeur",
        "Un retrait immédiat de 6 points",
      ],
      answer: 1,
      explanation:
        "Le dépassement est ici de 9 tonnes sur 40, soit 22,5 %, donc supérieur au seuil de 20 % : la contravention devient de 5e classe, avec une amende pouvant atteindre 1 500 €. Le véhicule est immobilisé jusqu'à la mise en conformité, qui impose de transférer la charge excédentaire sur un autre véhicule. Le donneur d'ordre et l'employeur peuvent également être poursuivis.",
      hint: "Comparez le dépassement au seuil des 20 %.",
    },
    {
      id: "pl3-12",
      level: 3,
      type: "qcm",
      question:
        "Sur une autoroute à trois voies dans votre sens de circulation, où un poids lourd de plus de 3,5 tonnes peut-il circuler ?",
      choices: [
        "Sur n'importe laquelle des trois voies",
        "Sur les deux voies de droite uniquement",
        "Sur la voie de gauche pour dépasser",
        "Uniquement sur la voie la plus à droite",
      ],
      answer: 1,
      explanation:
        "Sur les autoroutes comportant au moins trois voies dans un sens, les véhicules dont le PTAC dépasse 3,5 tonnes ou dont la longueur dépasse 7 mètres ne peuvent pas emprunter la voie la plus à gauche. Ils disposent donc des deux voies de droite. Le piège est de croire qu'un dépassement autorise à s'y déporter : l'interdiction est générale.",
      hint: "Une seule voie leur est fermée, pas deux.",
    },
    {
      id: "pl3-13",
      level: 3,
      type: "truefalse",
      question:
        "La responsabilité de l'arrimage du chargement incombe exclusivement au chargeur, jamais au conducteur.",
      answer: false,
      explanation:
        "Faux. Le chargeur et le donneur d'ordre engagent leur responsabilité, mais le conducteur reste tenu de vérifier son chargement avant le départ et de le contrôler après les premiers kilomètres, la charge ayant tendance à se tasser. Il doit refuser de prendre la route avec un chargement qu'il sait non conforme : c'est lui qui sera verbalisé sur la route.",
      hint: "Plusieurs acteurs peuvent être responsables en même temps.",
    },
    {
      id: "pl3-14",
      level: 3,
      type: "qcm",
      question:
        "Depuis 2021, quelle obligation de signalisation s'impose aux véhicules de plus de 3,5 tonnes ?",
      choices: [
        "Un panneau « véhicule lent » à l'arrière",
        "Une signalisation matérialisant les angles morts, à l'avant et sur les deux côtés",
        "Un gyrophare orange permanent",
        "Un marquage de la hauteur totale sur le pare-chocs",
      ],
      answer: 1,
      explanation:
        "Depuis 2021, les véhicules de plus de 3,5 tonnes doivent porter une signalisation matérialisant les angles morts, apposée à l'avant et sur les deux côtés, afin d'alerter les cyclistes et les piétons. Cette signalisation informe les autres usagers : elle ne dispense en rien le conducteur de ses contrôles rétroviseurs, qui restent la seule protection réelle.",
      hint: "La mesure vise à protéger les usagers vulnérables en ville.",
    },
    {
      id: "pl3-15",
      level: 3,
      type: "qcm",
      question:
        "Un semi-remorque est chargé uniquement sur les deux derniers mètres de son plancher, tout en respectant le poids total autorisé. Que peut-on en dire ?",
      choices: [
        "Le chargement est conforme puisque le poids total est respecté",
        "Le chargement est irrégulier : l'essieu arrière peut être en surcharge et l'essieu directeur délesté",
        "C'est la configuration recommandée pour faciliter le déchargement",
        "Cela n'a d'effet que sur la consommation de carburant",
      ],
      answer: 1,
      explanation:
        "Respecter le poids total ne garantit rien sur la répartition. Une charge concentrée à l'arrière met l'essieu arrière en surcharge, ce qui est une infraction en soi, et allège l'essieu directeur, rendant la direction floue et le freinage imprévisible. Le piège classique consiste à considérer le PTAC comme la seule contrainte à vérifier avant de partir.",
      hint: "Le poids total est une contrainte parmi d'autres, pas la seule.",
    },
  ],
};

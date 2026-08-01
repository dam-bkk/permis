import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "moto-equipement",
  subject: "moto",
  grade: "permis",
  num: 2,
  title: "Équipement obligatoire du motard",
  domain: "grandeurs",
  icon: "HardHat",
  teaser:
    "Casque homologué, gants certifiés, gilet à bord : ce que la loi impose, ce qu'elle recommande, et ce que ça coûte de l'oublier.",
  objectives: [
    "Je connais les règles d'homologation et de port du casque et les sanctions associées",
    "Je sais que les gants certifiés sont obligatoires pour le conducteur comme pour le passager",
    "Je connais l'obligation liée au gilet de haute visibilité",
    "Je sais contrôler mes pneumatiques, mes freins et mon éclairage avant de partir",
  ],
  lesson: [
    {
      title: "Le casque : la seule protection imposée pour la tête",
      paragraphs: [
        "Le port d'un casque homologué et attaché est obligatoire pour le conducteur et pour le passager de tout deux-roues ou trois-roues motorisé, quelle que soit la cylindrée et quelle que soit la distance parcourue. Il n'existe aucune tolérance pour les trajets courts ni pour la circulation en agglomération.",
        "Le casque doit être homologué selon la norme européenne ECE, dont l'étiquette est cousue sur la jugulaire. La version ECE 22-06 s'applique aux casques mis sur le marché depuis le 1er janvier 2024 ; les casques homologués ECE 22-05 déjà en circulation restent utilisables.",
        "Le casque doit également comporter quatre dispositifs rétro-réfléchissants : un à l'avant, un à l'arrière et un de chaque côté. Un casque dont les autocollants réfléchissants ont été retirés n'est plus conforme.",
        "Circuler avec un casque non homologué, non attaché ou porté par un passager sans casque est une contravention de 4e classe : 135 € d'amende forfaitaire et retrait de 3 points sur le permis. Le conducteur est responsable du casque de son passager mineur, et une suspension du permis pouvant aller jusqu'à 3 ans peut être prononcée.",
      ],
      example: [
        "Vous partez faire cinq cents mètres pour acheter du pain. Vous enfilez votre casque sans le sangler pour aller plus vite : vous êtes en infraction dès la mise en mouvement de la machine, exactement comme si vous ne portiez pas de casque du tout.",
      ],
      tip: "Un casque non attaché est juridiquement traité comme un casque absent : la jugulaire fait partie de l'homologation.",
    },
    {
      title: "Les gants : une obligation souvent oubliée",
      paragraphs: [
        "Depuis le 20 novembre 2016, le port de gants certifiés est obligatoire pour le conducteur et pour le passager de tout deux-roues ou trois-roues motorisé. Les gants doivent porter le marquage CE attestant qu'ils sont conçus pour la protection contre les risques mécaniques : des gants de ville, de jardinage ou de ski ne conviennent pas.",
        "L'infraction est une contravention de 3e classe : 68 € d'amende forfaitaire et retrait de 1 point sur le permis de conduire. La sanction s'applique séparément au conducteur et au passager non gantés.",
        "Cette obligation vise une réalité statistique : lors d'une chute, la main est le premier point de contact avec le sol par réflexe, et les lésions des mains figurent parmi les blessures les plus fréquentes chez les motards, y compris à faible vitesse.",
        "Les gants font partie des rares équipements dont le contrôle est immédiat : un agent constate en un regard si le marquage CE figure sur le gant présenté.",
      ],
      example: [
        "Vous prenez un ami en passager pour un trajet de dix minutes. Il n'a que ses gants de laine. Vous risquez tous les deux la même verbalisation : 68 € et 1 point pour chacun, car l'obligation pèse sur chaque personne à bord.",
      ],
      tip: "Casque = 135 € et 3 points, gants = 68 € et 1 point. Deux équipements obligatoires, deux niveaux de sanction distincts.",
    },
    {
      title: "Le gilet de haute visibilité",
      paragraphs: [
        "Depuis le 1er janvier 2016, tout conducteur d'un deux-roues ou trois-roues motorisé doit détenir à bord un gilet de haute visibilité rétro-réfléchissant. Il n'a pas à être porté en roulant : il doit être disponible, par exemple sous la selle ou dans le top-case.",
        "Ce gilet doit être revêtu par le conducteur en cas d'arrêt d'urgence sur la chaussée ou sur l'accotement, notamment après une panne ou un accident, dès lors qu'il descend de sa machine.",
        "Les sanctions distinguent deux situations. Ne pas détenir le gilet à bord est une contravention de 1re classe : 11 € d'amende. Ne pas le porter lors d'un arrêt d'urgence est une contravention de 4e classe : 135 € d'amende.",
        "Ce gilet ne dispense pas de l'usage des feux de détresse ni du positionnement le plus sûr possible : on se met hors de la chaussée et derrière une protection quand c'est possible, avant même de penser à la signalisation.",
      ],
      example: [
        "Une crevaison vous oblige à vous arrêter sur la bande d'arrêt d'urgence. Vous coupez le moteur, vous enfilez votre gilet avant de descendre, puis vous vous placez derrière la glissière de sécurité en attendant l'assistance.",
      ],
      tip: "Le gilet du motard se retient en deux temps : 11 € si je ne l'ai pas, 135 € si je ne le mets pas quand il faut.",
    },
    {
      title: "Les protections vivement recommandées",
      paragraphs: [
        "Au-delà du casque et des gants, la loi n'impose rien, mais les équipements de protection individuelle réduisent considérablement la gravité des blessures. Un blouson ou une veste avec coques homologuées aux épaules et aux coudes, un pantalon renforcé, des bottes ou chaussures montantes couvrant les malléoles et une dorsale constituent la panoplie recommandée.",
        "Les matières comptent autant que les coques : une simple veste en toile s'use en quelques mètres de glissade, là qu'un textile technique ou un cuir résiste. Les chaussures basses, elles, exposent directement les chevilles, articulation la plus souvent fracturée en cas de chute.",
        "La visibilité fait partie de l'équipement : un vêtement clair ou muni de bandes rétro-réfléchissantes réduit le risque d'être vu trop tard, principale cause des accidents impliquant un deux-roues et un automobiliste en intersection.",
        "Enfin, l'équipement doit être adapté à la saison : le froid et la pluie dégradent la vigilance et la précision des commandes bien avant que le motard ne s'en rende compte.",
      ],
      example: [
        "Un motard qui chute à 50 km/h glisse sur plusieurs dizaines de mètres. Un jean ordinaire est traversé en moins d'une seconde ; un pantalon moto renforcé conserve son intégrité et évite des brûlures profondes.",
      ],
      tip: "La règle de bon sens du motard : on s'habille pour la chute, pas pour le trajet.",
    },
    {
      title: "L'entretien : pneus, freins, éclairage",
      paragraphs: [
        "Les pneumatiques d'une moto n'offrent qu'une surface de contact avec la route de la taille d'une carte de crédit, pour chaque roue. Leur état conditionne tout le reste. La profondeur des sculptures doit rester au minimum de 1 mm sur toute la surface de roulement, contre 1,6 mm pour une voiture. Un pneu lisse, déchiré ou sous-gonflé expose à une contravention de 4e classe, soit 135 € par pneu non conforme.",
        "La pression doit être contrôlée à froid, au moins une fois par mois, et ajustée en cas de charge ou de passager. Un sous-gonflage dégrade la tenue de cap, allonge les distances de freinage et fait chauffer la carcasse.",
        "Le freinage se vérifie sur deux points : l'épaisseur des plaquettes et le niveau du liquide de frein, qui se remplace périodiquement car il absorbe l'humidité. L'ABS est obligatoire sur les motos neuves de plus de 125 cm³ depuis 2017 ; il n'exonère jamais d'un freinage correctement dosé.",
        "L'éclairage se contrôle avant chaque sortie : feu de croisement, feu de route, feu stop actionné par les deux commandes, clignotants et éclairage de plaque. Rouler avec un feu défectueux est une contravention, mais surtout la première cause de non-détection par les autres usagers.",
      ],
      example: [
        "Avant de partir, faites le tour de la machine : pression des pneus, usure, tension et lubrification de la chaîne, niveaux, essai des deux freins, allumage de tous les feux. Trois minutes suffisent et couvrent l'essentiel des pannes évitables.",
      ],
      tip: "Le contrôle avant départ tient dans un mot-repère : pneus, freins, feux, niveaux, chaîne.",
    },
  ],
  exercises: [
    {
      id: "mot2-1",
      level: 1,
      type: "qcm",
      question:
        "Vous circulez à moto avec un passager. Qui doit porter un casque homologué et attaché ?",
      choices: [
        "Le conducteur uniquement",
        "Le conducteur et le passager",
        "Le conducteur, et le passager seulement hors agglomération",
        "Le conducteur, et le passager seulement s'il est mineur",
      ],
      answer: 1,
      explanation:
        "Le port du casque homologué et attaché s'impose au conducteur comme au passager de tout deux-roues ou trois-roues motorisé, sans distinction d'âge, de lieu ni de distance. Le piège classique est de croire à une tolérance en agglomération ou pour les trajets courts : elle n'existe pas.",
      hint: "L'obligation vise chaque personne à bord.",
    },
    {
      id: "mot2-2",
      level: 1,
      type: "qcm",
      question:
        "Quelle sanction encourez-vous si vous circulez avec un casque non attaché ?",
      choices: [
        "11 € d'amende, aucun point retiré",
        "68 € d'amende et 1 point",
        "135 € d'amende et 3 points",
        "Un simple avertissement",
      ],
      answer: 2,
      explanation:
        "Le défaut de port du casque, le casque non homologué et le casque non attaché sont sanctionnés de la même façon : contravention de 4e classe, 135 € d'amende forfaitaire et retrait de 3 points, avec suspension du permis possible jusqu'à 3 ans. Le piège est de croire qu'un casque simplement posé sur la tête atténue l'infraction : la jugulaire fait partie de l'homologation.",
      hint: "La sanction est identique à celle d'un casque absent.",
    },
    {
      id: "mot2-3",
      level: 1,
      type: "truefalse",
      question:
        "Le port de gants certifiés est obligatoire pour tout conducteur de deux-roues motorisé.",
      answer: true,
      explanation:
        "Vrai. Depuis le 20 novembre 2016, les gants certifiés portant le marquage CE sont obligatoires pour le conducteur et pour le passager de tout deux-roues ou trois-roues motorisé. Des gants de ville ou de sport non certifiés ne satisfont pas à l'obligation.",
      hint: "C'est le deuxième équipement rendu obligatoire après le casque.",
    },
    {
      id: "mot2-4",
      level: 1,
      type: "qcm",
      question:
        "Où doit se trouver le gilet de haute visibilité d'un motard lorsqu'il circule normalement ?",
      choices: [
        "Porté par-dessus le blouson en permanence",
        "Porté uniquement de nuit",
        "Détenu à bord de la machine, sans obligation de le porter",
        "Il n'est obligatoire que sur autoroute",
      ],
      answer: 2,
      explanation:
        "Depuis le 1er janvier 2016, le motard doit détenir un gilet rétro-réfléchissant à bord ; il n'a pas à le porter en roulant. Il doit en revanche l'enfiler en cas d'arrêt d'urgence sur la chaussée ou l'accotement. Le piège est de confondre détention et port : ce sont deux obligations distinctes, avec deux sanctions différentes.",
      hint: "L'obligation de port ne se déclenche que dans une situation précise.",
    },
    {
      id: "mot2-5",
      level: 1,
      type: "qcm",
      question:
        "Quelle est la profondeur minimale des sculptures d'un pneumatique de motocyclette ?",
      choices: ["1 mm", "1,6 mm", "2 mm", "3 mm"],
      answer: 0,
      explanation:
        "Pour une motocyclette, la profondeur des sculptures doit être d'au moins 1 mm sur toute la surface de roulement, contre 1,6 mm pour une voiture particulière. Le piège d'examen consiste précisément à appliquer le chiffre de la voiture. Un pneu non conforme coûte 135 € par pneu.",
      hint: "Le seuil du deux-roues est plus bas que celui de l'automobile.",
    },
    {
      id: "mot2-6",
      level: 2,
      type: "qcm",
      question:
        "Votre passager porte des gants de ville en cuir souple, sans marquage CE. Quelle est la conséquence en cas de contrôle ?",
      choices: [
        "Aucune : seul le conducteur est concerné par l'obligation",
        "Une contravention de 3e classe : 68 € et 1 point",
        "Une contravention de 4e classe : 135 € et 3 points",
        "Une simple observation, les gants en cuir étant tolérés",
      ],
      answer: 1,
      explanation:
        "L'obligation de gants certifiés CE vaut pour le conducteur et pour le passager. Le non-respect est une contravention de 3e classe : 68 € d'amende et retrait de 1 point sur le permis du conducteur. Le piège est double : croire que le passager échappe à l'obligation, et croire que la matière suffit alors que c'est la certification qui est contrôlée.",
      hint: "Ce qui est contrôlé, c'est un marquage, pas une matière.",
    },
    {
      id: "mot2-7",
      level: 2,
      type: "qcm",
      question:
        "Combien de dispositifs rétro-réfléchissants un casque de motard doit-il comporter ?",
      choices: ["Un seul, à l'arrière", "Deux, à l'avant et à l'arrière", "Quatre", "Aucun, ils sont facultatifs"],
      answer: 2,
      explanation:
        "Le casque doit comporter quatre éléments rétro-réfléchissants : un à l'avant, un à l'arrière et un de chaque côté. Un casque dont ces autocollants ont été retirés n'est plus conforme, même s'il porte encore son étiquette d'homologation. C'est un manquement fréquemment relevé lors des contrôles.",
      hint: "Il s'agit de rendre la tête visible sous tous les angles.",
    },
    {
      id: "mot2-8",
      level: 2,
      type: "truefalse",
      question:
        "Ne pas détenir de gilet de haute visibilité à bord de sa moto est sanctionné par une amende de 135 €.",
      answer: false,
      explanation:
        "Faux. La simple non-détention du gilet à bord est une contravention de 1re classe, soit 11 € d'amende. C'est le fait de ne pas le porter lors d'un arrêt d'urgence sur la chaussée ou l'accotement qui constitue une contravention de 4e classe à 135 €. Le piège de l'examen tient précisément à cette distinction entre détenir et porter.",
      hint: "Deux manquements différents, deux montants très éloignés.",
    },
    {
      id: "mot2-9",
      level: 2,
      type: "qcm",
      question:
        "Quand faut-il contrôler la pression des pneumatiques d'une moto ?",
      choices: [
        "À chaud, après quelques kilomètres de roulage",
        "À froid, au moins une fois par mois",
        "Uniquement lors de la révision annuelle",
        "Seulement avant un long trajet sur autoroute",
      ],
      answer: 1,
      explanation:
        "La pression se contrôle à froid, car l'échauffement du roulage augmente artificiellement la valeur lue, et au moins une fois par mois. Elle doit aussi être ajustée en cas de charge supplémentaire ou de passager. Un sous-gonflage dégrade la tenue de cap, allonge les distances de freinage et fait chauffer la carcasse jusqu'au risque d'éclatement.",
      hint: "La chaleur fausse la lecture vers le haut.",
    },
    {
      id: "mot2-10",
      level: 2,
      type: "qcm",
      question:
        "Vous êtes en panne sur la bande d'arrêt d'urgence d'une autoroute. Dans quel ordre agissez-vous ?",
      choices: [
        "Je descends de la machine, puis j'enfile mon gilet une fois à l'abri",
        "J'enfile mon gilet avant de descendre, puis je me place derrière la glissière",
        "Je reste assis sur la moto pour rester visible",
        "Je traverse la chaussée pour rejoindre le terre-plein central",
      ],
      answer: 1,
      explanation:
        "Le gilet doit être revêtu avant de s'exposer, c'est-à-dire avant de descendre de la machine, puis on se met hors de la chaussée, derrière une protection quand il en existe une. Rester sur la moto ou traverser une chaussée d'autoroute sont deux comportements accidentogènes majeurs : la bande d'arrêt d'urgence est un espace dangereux, on ne s'y attarde pas.",
      hint: "On s'équipe tant qu'on est encore protégé, pas une fois exposé.",
    },
    {
      id: "mot2-11",
      level: 3,
      type: "qcm",
      question:
        "Quelle norme d'homologation s'applique aux casques mis sur le marché depuis le 1er janvier 2024 ?",
      choices: ["ECE 22-04", "ECE 22-05", "ECE 22-06", "NF S 72-305"],
      answer: 2,
      explanation:
        "La norme ECE 22-06 s'applique aux casques mis sur le marché depuis le 1er janvier 2024. Elle renforce notamment les essais d'impact et encadre les accessoires. Point important à ne pas confondre : les casques déjà homologués ECE 22-05 restent utilisables par leur propriétaire, l'échéance concernant la commercialisation et non le port.",
      hint: "La version la plus récente porte le numéro le plus élevé.",
    },
    {
      id: "mot2-12",
      level: 3,
      type: "qcm",
      question:
        "Depuis quelle date l'ABS est-il obligatoire sur les motocyclettes neuves de plus de 125 cm³ ?",
      choices: ["Depuis 2010", "Depuis 2017", "Depuis 2021", "Il reste facultatif"],
      answer: 1,
      explanation:
        "L'ABS équipe obligatoirement les motocyclettes neuves de plus de 125 cm³ depuis 2017. Le piège d'examen porte sur le raisonnement plus que sur la date : l'ABS empêche le blocage des roues, il ne raccourcit pas magiquement la distance d'arrêt et n'autorise pas à freiner plus tard. Un freinage bien dosé, avant surtout, reste indispensable.",
      hint: "L'obligation est arrivée avec les motos vendues neuves à la fin des années 2010.",
    },
    {
      id: "mot2-13",
      level: 3,
      type: "truefalse",
      question:
        "Un casque homologué dont les autocollants rétro-réfléchissants ont été retirés reste conforme à la réglementation.",
      answer: false,
      explanation:
        "Faux. Les quatre dispositifs rétro-réfléchissants font partie des exigences applicables au casque en circulation : les retirer, notamment pour des raisons esthétiques, rend le casque non conforme et expose à la sanction prévue pour le casque non homologué. Le piège est de croire que l'étiquette ECE cousue sur la jugulaire suffit à elle seule.",
      hint: "L'homologation d'origine ne couvre pas les modifications faites après achat.",
    },
    {
      id: "mot2-14",
      level: 3,
      type: "qcm",
      question:
        "Vous roulez avec un pneu arrière dont les sculptures sont effacées sur une partie de la bande de roulement. Que risquez-vous et pourquoi est-ce grave à moto ?",
      choices: [
        "Rien tant que le témoin d'usure n'est pas atteint sur toute la largeur",
        "135 € d'amende ; la surface de contact au sol d'un pneu moto est de l'ordre d'une carte de crédit",
        "Une amende de 68 € seulement, la moto étant plus légère qu'une voiture",
        "Une simple mise en demeure de changer le pneu sous un mois",
      ],
      answer: 1,
      explanation:
        "Un pneu dont les sculptures descendent sous 1 mm, même sur une seule zone de la surface de roulement, est non conforme : contravention de 4e classe, 135 € par pneu, avec immobilisation possible. La gravité tient à la physique du deux-roues : chaque pneu ne dispose que d'une empreinte au sol de quelques centimètres carrés, seule liaison avec la route pour tenir, tourner et freiner.",
      hint: "La sanction est la même que pour un défaut d'éclairage majeur, mais l'enjeu est l'adhérence.",
    },
    {
      id: "mot2-15",
      level: 3,
      type: "qcm",
      question:
        "Parmi ces équipements, lequel n'est PAS obligatoire pour circuler à moto en France ?",
      choices: [
        "Le casque homologué et attaché",
        "Les gants certifiés CE",
        "Le gilet de haute visibilité détenu à bord",
        "Le blouson à coques homologuées",
      ],
      answer: 3,
      explanation:
        "Le blouson à coques, le pantalon renforcé, les bottes et la dorsale sont fortement recommandés mais ne sont pas imposés par la réglementation. Les trois obligations réelles sont le casque homologué et attaché, les gants certifiés et la détention d'un gilet de haute visibilité à bord. Le piège consiste à supposer que tout l'équipement du motard est obligatoire : la loi ne couvre que la tête, les mains et la visibilité en cas d'arrêt.",
      hint: "Trois obligations seulement : la tête, les mains, la visibilité à l'arrêt.",
    },
  ],
};

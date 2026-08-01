import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "moto-categories",
  subject: "moto",
  grade: "permis",
  num: 1,
  title: "Catégories et accès au permis moto",
  domain: "nombres",
  icon: "Bike",
  teaser:
    "A1, A2, A, passerelle 125 : quelle machine avez-vous le droit de conduire, à quel âge et après quelle formation.",
  objectives: [
    "Je distingue les catégories A1, A2 et A et les machines qu'elles autorisent",
    "Je connais l'âge minimal et les conditions d'accès de chaque catégorie",
    "Je sais comment un titulaire du permis B peut conduire une 125 cm³",
    "Je connais les obligations administratives : plaque, assurance, contrôle technique",
  ],
  lesson: [
    {
      title: "Trois catégories, trois niveaux de puissance",
      paragraphs: [
        "Le permis moto est découpé en trois catégories qui correspondent à des paliers de puissance. La catégorie A1 autorise les motocyclettes dont la cylindrée n'excède pas 125 cm³, dont la puissance ne dépasse pas 11 kW et dont le rapport puissance/poids reste inférieur ou égal à 0,1 kW/kg. Elle couvre aussi les tricycles à moteur d'une puissance maximale de 15 kW. L'âge minimal est de 16 ans.",
        "La catégorie A2 autorise les motocyclettes d'une puissance maximale de 35 kW, avec un rapport puissance/poids inférieur ou égal à 0,2 kW/kg. Une machine bridée pour entrer dans ces limites n'est acceptée que si elle ne dérive pas d'un modèle développant plus du double de cette puissance, soit plus de 70 kW à l'origine. L'âge minimal est de 18 ans.",
        "La catégorie A donne accès à toutes les motocyclettes, sans limitation de puissance. Elle ne s'obtient pas directement : il faut avoir été titulaire de la catégorie A2 pendant au moins deux ans, puis suivre une formation de 7 heures dans une école de conduite. En pratique, le motard accède donc à la catégorie A à 20 ans au plus tôt.",
        "Attention à la logique du dispositif : on ne « passe » pas le permis A comme un examen classique. Le passage de A2 vers A est une formation, sans épreuve finale ; c'est l'attestation de suivi qui permet d'obtenir le titre.",
      ],
      example: [
        "Vous avez 18 ans et vous obtenez le permis A2. Vous roulez sur une machine de 35 kW. Deux ans plus tard, à 20 ans, vous suivez la formation de 7 heures : vous pouvez alors conduire une moto de grosse cylindrée sans limitation de puissance.",
      ],
      tip: "Retenez la suite 16 / 18 / 2 ans + 7 h : 16 ans pour l'A1, 18 ans pour l'A2, puis deux ans d'A2 et une formation de 7 heures pour l'A.",
    },
    {
      title: "L'examen du permis moto",
      paragraphs: [
        "Depuis 2020, le candidat au permis moto passe une épreuve théorique qui lui est propre, l'épreuve théorique moto, distincte du code de la route des automobilistes. Elle comporte 40 questions et exige au moins 35 bonnes réponses pour être validée.",
        "L'épreuve pratique se déroule en deux temps : une épreuve hors circulation, sur un plateau, qui vérifie la maîtrise de la machine à allure lente puis à allure normale, les freinages et l'évitement, et une épreuve en circulation sur route ouverte.",
        "Une fois le permis obtenu, le motard novice est soumis au permis probatoire, comme tout nouveau conducteur : 6 points au départ, et un disque « A » (jeune conducteur) apposé à l'arrière de la machine. La période probatoire dure 3 ans, réduite à 2 ans en cas d'apprentissage anticipé de la conduite.",
        "Le titulaire d'un permis A2 obtenu depuis moins de deux ans reste dans les limites de sa catégorie : conduire une machine plus puissante que 35 kW revient à conduire sans permis de la catégorie correspondante.",
      ],
      example: [
        "Vous êtes titulaire du permis B depuis huit ans et vous souhaitez passer le permis A2. Vous devrez tout de même présenter l'épreuve théorique moto : le code passé pour la voiture ne dispense pas de cette épreuve spécifique lorsque sa validité est expirée.",
      ],
      tip: "Plateau et circulation sont deux épreuves indépendantes : réussir le plateau ne garantit rien pour la circulation, et la maîtrise à allure lente reste le point noir le plus fréquent.",
    },
    {
      title: "La passerelle 125 pour les titulaires du permis B",
      paragraphs: [
        "Un titulaire du permis B peut conduire une motocyclette légère de 125 cm³ (puissance maximale 11 kW) ou un tricycle à moteur, à deux conditions : détenir le permis B depuis au moins deux ans, et avoir suivi une formation pratique de 7 heures dans une école de conduite ou une association agréée.",
        "Cette formation de 7 heures se décompose en trois blocs : 2 heures de théorie, 2 heures de pratique hors circulation et 3 heures de pratique en circulation. Elle ne se conclut pas par un examen : c'est l'attestation de suivi qui fait foi et doit pouvoir être présentée en cas de contrôle.",
        "Une dispense existe pour les conducteurs qui peuvent justifier avoir assuré une 125 cm³ ou un tricycle pendant au moins un an au cours des cinq années précédant le 1er janvier 2011 : le relevé d'information de l'assureur sert alors de preuve.",
        "Cette passerelle ne donne aucun droit sur les catégories A2 et A. Elle n'ouvre pas non plus l'accès aux 125 cm³ à l'étranger de façon automatique : la reconnaissance dépend du pays visité.",
      ],
      example: [
        "Vous avez le permis B depuis trois ans et vous voulez circuler en scooter 125 pour vos trajets domicile-travail. Vous suivez la formation de 7 heures, vous conservez l'attestation dans vos papiers, et vous pouvez rouler légalement.",
      ],
      tip: "Deux ans de permis B ET sept heures de formation : les deux conditions se cumulent, l'une sans l'autre ne suffit pas.",
    },
    {
      title: "Les obligations administratives du motard",
      paragraphs: [
        "Toute motocyclette doit porter une plaque d'immatriculation à l'arrière. Depuis le 1er juillet 2015, le format est unique et imposé : 210 mm de large sur 130 mm de haut. Une plaque non conforme, illisible, masquée ou repliée est sanctionnée par une contravention de 4e classe, soit 135 € d'amende, avec immobilisation possible du véhicule.",
        "L'assurance de responsabilité civile est obligatoire pour tout véhicule terrestre à moteur, y compris un deux-roues qui ne circule pas et reste stationné dans un garage. Conduire sans assurance est un délit, sanctionné par une amende forfaitaire délictuelle de 500 €, et jusqu'à 3 750 € d'amende en cas de poursuite devant le tribunal, avec possibilité de confiscation du véhicule.",
        "Le contrôle technique des deux-roues et trois-roues motorisés est entré en vigueur le 15 avril 2024. Sa périodicité est de trois ans, contre deux ans pour les voitures particulières.",
        "Enfin, la carte grise doit être mise à jour dans le mois qui suit un changement d'adresse ou dans le mois qui suit l'achat d'une machine d'occasion.",
      ],
      example: [
        "Vous achetez une moto d'occasion à un particulier. Vous disposez d'un mois pour faire établir la carte grise à votre nom, et vous devez assurer la machine dès l'instant où vous en devenez propriétaire, même si vous ne roulez pas encore avec.",
      ],
      tip: "Le défaut d'assurance n'est pas une contravention mais un délit : c'est la faute administrative la plus lourdement sanctionnée du permis moto.",
    },
  ],
  exercises: [
    {
      id: "mot1-1",
      level: 1,
      type: "qcm",
      question:
        "À partir de quel âge peut-on se présenter au permis de la catégorie A1 ?",
      choices: ["14 ans", "16 ans", "18 ans", "20 ans"],
      answer: 1,
      explanation:
        "La catégorie A1, qui autorise les motocyclettes de 125 cm³ au plus et de 11 kW au plus, est accessible dès 16 ans. Le piège consiste à confondre avec l'âge du permis AM (anciennement BSR), accessible à 14 ans pour les cyclomoteurs de 50 cm³, ou avec les 18 ans de la catégorie A2.",
      hint: "Ne confondez pas avec l'âge du permis AM pour les 50 cm³.",
    },
    {
      id: "mot1-2",
      level: 1,
      type: "qcm",
      question:
        "Quelle est la puissance maximale d'une motocyclette relevant de la catégorie A2 ?",
      choices: ["11 kW", "15 kW", "35 kW", "70 kW"],
      answer: 2,
      explanation:
        "La catégorie A2 est limitée à 35 kW, avec un rapport puissance/poids qui ne doit pas dépasser 0,2 kW/kg. Le piège porte sur les 70 kW : ce chiffre existe bien dans la réglementation, mais c'est le seuil de puissance d'origine au-delà duquel un modèle bridé ne peut plus être accepté en A2, ce n'est pas la puissance autorisée.",
      hint: "Un chiffre est la puissance autorisée, l'autre est le double, qui sert de limite au bridage.",
    },
    {
      id: "mot1-3",
      level: 1,
      type: "truefalse",
      question:
        "La catégorie A peut s'obtenir directement, sans être passé par la catégorie A2.",
      answer: false,
      explanation:
        "Faux. L'accès à la catégorie A suppose d'avoir été titulaire de la catégorie A2 pendant au moins deux ans, puis d'avoir suivi une formation de 7 heures. Il n'existe pas d'examen « permis A » que l'on présenterait directement pour les motos de forte puissance.",
      hint: "L'accès à la grosse cylindrée est un accès progressif.",
    },
    {
      id: "mot1-4",
      level: 1,
      type: "qcm",
      question:
        "Quelle est la cylindrée maximale d'une motocyclette de la catégorie A1 ?",
      choices: ["50 cm³", "80 cm³", "125 cm³", "250 cm³"],
      answer: 2,
      explanation:
        "La catégorie A1 est limitée à 125 cm³ de cylindrée, 11 kW de puissance et un rapport puissance/poids de 0,1 kW/kg au plus. Les 50 cm³ relèvent du permis AM, accessible à 14 ans : c'est la confusion la plus fréquente.",
      hint: "C'est la cylindrée du scooter urbain le plus répandu.",
    },
    {
      id: "mot1-5",
      level: 1,
      type: "qcm",
      question:
        "Vous venez d'acheter une moto que vous laissez stationnée dans votre garage sans rouler avec. Devez-vous l'assurer ?",
      choices: [
        "Oui : tout véhicule terrestre à moteur doit être assuré, même immobilisé",
        "Non : l'assurance n'est obligatoire qu'à partir du premier trajet",
        "Non : une machine non immatriculée n'a pas à être assurée",
        "Uniquement si le garage n'est pas fermé à clé",
      ],
      answer: 0,
      explanation:
        "L'assurance de responsabilité civile est obligatoire pour tout véhicule terrestre à moteur, qu'il circule ou non. Le piège classique est de croire que l'immobilisation dispense de l'obligation : ce n'est pas le cas, et le défaut d'assurance est un délit, pas une simple contravention.",
      hint: "L'obligation porte sur le véhicule, pas sur son usage.",
    },
    {
      id: "mot1-6",
      level: 2,
      type: "qcm",
      question:
        "Vous êtes titulaire du permis B depuis trois ans et vous souhaitez conduire un scooter de 125 cm³. Que devez-vous faire ?",
      choices: [
        "Rien : le permis B suffit dès qu'il a plus de deux ans",
        "Passer l'épreuve théorique moto",
        "Suivre une formation pratique de 7 heures dans une école de conduite",
        "Passer le plateau de la catégorie A1",
      ],
      answer: 2,
      explanation:
        "Le titulaire du permis B depuis au moins deux ans peut conduire une 125 cm³ ou un tricycle à moteur après une formation de 7 heures (2 h de théorie, 2 h hors circulation, 3 h en circulation). Le piège est de croire que l'ancienneté du permis B suffit à elle seule : les deux conditions se cumulent, et l'attestation de formation doit pouvoir être présentée en cas de contrôle.",
      hint: "L'ancienneté ouvre le droit, mais une démarche reste à accomplir.",
    },
    {
      id: "mot1-7",
      level: 2,
      type: "qcm",
      question:
        "Combien de temps faut-il avoir détenu la catégorie A2 avant de pouvoir accéder à la catégorie A ?",
      choices: ["6 mois", "1 an", "2 ans", "3 ans"],
      answer: 2,
      explanation:
        "Il faut avoir été titulaire de la catégorie A2 pendant au moins deux ans, puis suivre une formation de 7 heures. Le piège fréquent est de confondre cette durée avec les 3 ans de la période probatoire du permis, qui est une notion différente et qui court en parallèle.",
      hint: "Ce n'est pas la durée de la période probatoire.",
    },
    {
      id: "mot1-8",
      level: 2,
      type: "truefalse",
      question:
        "L'épreuve théorique moto comporte 40 questions et exige au moins 35 bonnes réponses.",
      answer: true,
      explanation:
        "Vrai. Depuis 2020, les candidats au permis moto passent une épreuve théorique spécifique, distincte du code des automobilistes : 40 questions, 35 bonnes réponses minimum. Le seuil est donc plus exigeant en proportion que l'ancien 35 sur 40 du code voiture, et les thèmes portent sur les spécificités du deux-roues.",
      hint: "Le nombre de fautes tolérées se compte sur les doigts d'une main.",
    },
    {
      id: "mot1-9",
      level: 2,
      type: "qcm",
      question:
        "Quel est le format réglementaire de la plaque d'immatriculation d'une motocyclette ?",
      choices: [
        "140 × 120 mm",
        "275 × 200 mm",
        "170 × 100 mm",
        "210 × 130 mm",
      ],
      answer: 3,
      explanation:
        "Depuis le 1er juillet 2015, la plaque des deux-roues motorisés a un format unique de 210 mm sur 130 mm. Une plaque à un autre format, repliée, masquée ou illisible expose à une contravention de 4e classe de 135 € et à l'immobilisation du véhicule. Le piège est de croire que les anciennes petites plaques restent tolérées : elles ne le sont plus.",
      hint: "Un seul format est autorisé depuis 2015, il n'y a plus de choix.",
    },
    {
      id: "mot1-10",
      level: 2,
      type: "qcm",
      question:
        "Comment se décompose la formation de 7 heures permettant de conduire une 125 cm³ avec le permis B ?",
      choices: [
        "2 h de théorie, 2 h hors circulation, 3 h en circulation",
        "3 h de théorie et 4 h de plateau",
        "7 h de conduite en circulation",
        "1 h de théorie et 6 h de plateau",
      ],
      answer: 0,
      explanation:
        "La formation de 7 heures comprend 2 heures de théorie, 2 heures de pratique hors circulation et 3 heures de pratique en circulation. Elle ne se termine par aucun examen : c'est l'attestation de suivi qui ouvre le droit à conduire. Le piège consiste à imaginer une épreuve finale, qui n'existe pas.",
      hint: "Le temps le plus long est consacré à la route ouverte.",
    },
    {
      id: "mot1-11",
      level: 3,
      type: "qcm",
      question:
        "Vous êtes titulaire de la catégorie A2 depuis un an. Un ami vous propose de conduire sa moto de 100 kW. Quelle est votre situation si vous acceptez ?",
      choices: [
        "Aucune infraction : le permis A2 couvre toutes les motos",
        "Une simple contravention pour excès de puissance",
        "Je conduis sans être titulaire de la catégorie requise",
        "C'est autorisé si le propriétaire est présent à mes côtés",
      ],
      answer: 2,
      explanation:
        "La catégorie A2 est limitée à 35 kW. Conduire une machine plus puissante revient à conduire sans être titulaire de la catégorie correspondante, ce qui constitue un délit de conduite sans permis, et non une contravention. L'accord du propriétaire ou sa présence ne change strictement rien. De plus, l'assurance peut refuser sa garantie.",
      hint: "Rouler hors de sa catégorie n'est pas un simple dépassement de limite technique.",
    },
    {
      id: "mot1-12",
      level: 3,
      type: "qcm",
      question:
        "Une motocyclette est bridée à 35 kW. Dans quel cas ne peut-elle malgré tout pas être conduite avec la catégorie A2 ?",
      choices: [
        "Si sa cylindrée dépasse 600 cm³",
        "Si son modèle d'origine développe plus de 70 kW",
        "Si elle a plus de dix ans",
        "Si elle est équipée d'un ABS",
      ],
      answer: 1,
      explanation:
        "Une machine bridée n'est admise en A2 que si elle ne dérive pas d'un modèle développant plus du double de la puissance autorisée, soit plus de 70 kW. Le piège est de raisonner en cylindrée : la réglementation A2 ne fixe aucune limite de cylindrée, uniquement une limite de puissance (35 kW), un rapport puissance/poids (0,2 kW/kg) et cette règle sur la puissance d'origine.",
      hint: "Le double de la puissance autorisée sert de plafond au modèle d'origine.",
    },
    {
      id: "mot1-13",
      level: 3,
      type: "truefalse",
      question:
        "La formation de 7 heures qui permet de passer de la catégorie A2 à la catégorie A se conclut par un examen évalué par un inspecteur.",
      answer: false,
      explanation:
        "Faux. Cette formation de 7 heures ne comporte aucune épreuve finale : c'est l'attestation de suivi délivrée par l'école de conduite qui permet de demander la catégorie A. Il en va de même pour la formation de 7 heures de la passerelle 125. Le piège est d'assimiler « formation obligatoire » et « examen ».",
      hint: "Une attestation de suivi n'est pas un procès-verbal d'examen.",
    },
    {
      id: "mot1-14",
      level: 3,
      type: "qcm",
      question:
        "Depuis quelle date les motocyclettes et les autres deux-roues motorisés sont-ils soumis au contrôle technique en France ?",
      choices: [
        "Depuis le 1er janvier 2011",
        "Depuis le 1er juillet 2015",
        "Depuis le 15 avril 2024",
        "Ils n'y sont toujours pas soumis",
      ],
      answer: 2,
      explanation:
        "Le contrôle technique des deux-roues et trois-roues motorisés est entré en vigueur le 15 avril 2024, avec une périodicité de trois ans, contre deux ans pour les voitures particulières. Les autres dates du QCM correspondent à des jalons différents : 2011 pour la dispense de formation 125, 2015 pour le format unique de plaque.",
      hint: "C'est la mesure la plus récente de la liste.",
    },
    {
      id: "mot1-15",
      level: 3,
      type: "qcm",
      question:
        "Vous conduisez une moto sans assurance. Quelle est la nature de cette infraction ?",
      choices: [
        "Une contravention de 2e classe",
        "Une contravention de 4e classe",
        "Un délit, avec amende forfaitaire délictuelle de 500 €",
        "Un simple manquement administratif sans sanction pénale",
      ],
      answer: 2,
      explanation:
        "Le défaut d'assurance est un délit, sanctionné en premier lieu par une amende forfaitaire délictuelle de 500 € et, en cas de poursuite devant le tribunal, par une amende pouvant atteindre 3 750 €, assortie de peines complémentaires comme la confiscation du véhicule ou la suspension du permis. Le piège est de le ranger parmi les contraventions routières ordinaires : il en sort par sa nature délictuelle.",
      hint: "Une amende forfaitaire peut aussi être délictuelle, pas seulement contraventionnelle.",
    },
  ],
};

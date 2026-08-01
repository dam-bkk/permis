import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "pl-categories",
  subject: "poids-lourd",
  grade: "permis",
  num: 1,
  title: "Catégories C, CE et conditions",
  domain: "nombres",
  icon: "Truck",
  teaser:
    "C1, C1E, C, CE : les seuils de PTAC, les âges, la visite médicale et la qualification professionnelle FIMO/FCO.",
  objectives: [
    "Je distingue les catégories C1, C1E, C et CE et les véhicules qu'elles autorisent",
    "Je sais ce que recouvrent le PTAC et le PTRA",
    "Je connais les âges minimaux et la périodicité de la visite médicale",
    "Je sais à quoi servent la FIMO, la FCO et la carte de qualification de conducteur",
  ],
  lesson: [
    {
      title: "Les quatre catégories du groupe lourd « marchandises »",
      paragraphs: [
        "La catégorie C1 autorise la conduite des véhicules affectés au transport de marchandises dont le poids total autorisé en charge est supérieur à 3,5 tonnes sans dépasser 7,5 tonnes, avec une remorque dont le PTAC n'excède pas 750 kg. L'âge minimal est de 18 ans.",
        "La catégorie C1E permet d'atteler à un véhicule de la catégorie C1 une remorque de plus de 750 kg, l'ensemble ne devant pas dépasser 12 tonnes. Elle permet aussi de tracter une remorque de plus de 750 kg avec un véhicule du groupe léger, dans la même limite. L'âge minimal est de 18 ans.",
        "La catégorie C autorise tous les véhicules de transport de marchandises dont le PTAC dépasse 3,5 tonnes, sans limite supérieure, attelés d'une remorque n'excédant pas 750 kg. La catégorie CE ajoute la possibilité d'atteler une remorque ou une semi-remorque de plus de 750 kg : c'est la catégorie du semi-remorque et du train routier.",
        "L'âge minimal des catégories C et CE est de 21 ans. Il est abaissé à 18 ans pour les conducteurs qui suivent le parcours de qualification professionnelle : formation initiale minimale obligatoire ou titre professionnel de conducteur routier. Le permis C est en outre un préalable indispensable au permis CE.",
      ],
      example: [
        "Un porteur de 19 tonnes avec une petite remorque de 600 kg relève de la catégorie C. Le même porteur attelé d'une remorque de 8 tonnes relève de la catégorie CE, car la remorque dépasse 750 kg.",
      ],
      tip: "Le E signifie toujours « ensemble avec remorque de plus de 750 kg ». Les chiffres 1 marquent la version allégée : C1 s'arrête à 7,5 t, C1E s'arrête à 12 t d'ensemble.",
    },
    {
      title: "PTAC, PTRA et charge utile",
      paragraphs: [
        "Le poids total autorisé en charge, ou PTAC, est le poids maximal du véhicule chargé, tel qu'il figure sur le certificat d'immatriculation. Il inclut le véhicule à vide, le carburant, le conducteur, les passagers et le chargement.",
        "Le poids total roulant autorisé, ou PTRA, est le poids maximal de l'ensemble constitué par le véhicule tracteur et sa ou ses remorques, en charge. Il n'apparaît que sur les cartes grises des véhicules conçus pour tracter.",
        "La charge utile est la différence entre le PTAC et le poids du véhicule à vide : c'est ce que l'on peut réellement charger. Confondre PTAC et charge utile est l'erreur la plus fréquente, et celle qui conduit tout droit à la surcharge.",
        "La réglementation fixe aussi des poids totaux roulants maximaux : en règle générale 40 tonnes pour un ensemble articulé, et 44 tonnes pour un ensemble à cinq essieux dans les conditions prévues par le code de la route. Ces plafonds réglementaires ne dispensent jamais de respecter le PTAC et le PTRA propres au véhicule utilisé.",
      ],
      example: [
        "Un porteur affiche un PTAC de 19 t et pèse 8 t à vide. Sa charge utile est donc de 11 t. Charger 12 t de marchandises, même si le camion « le supporte », constitue une surcharge sanctionnable.",
      ],
      tip: "PTAC = le véhicule seul en charge. PTRA = le véhicule et sa remorque en charge. Charge utile = PTAC moins le poids à vide.",
    },
    {
      title: "La visite médicale, condition permanente",
      paragraphs: [
        "Les permis du groupe lourd, dont les catégories C1, C1E, C et CE, sont délivrés pour une durée limitée. Leur validité est subordonnée à un avis médical favorable, délivré par un médecin agréé par le préfet, à l'issue d'un examen que le conducteur finance lui-même.",
        "La périodicité tient à l'âge du titulaire : la visite est renouvelée tous les 5 ans jusqu'à 60 ans, puis tous les 2 ans entre 60 et 76 ans, puis tous les ans au-delà de 76 ans.",
        "Conduire avec un permis dont la validité médicale est expirée revient à conduire sans être titulaire de la catégorie requise : le conducteur s'expose à une sanction pénale et l'assurance peut refuser sa garantie.",
        "La visite médicale porte notamment sur la vision, l'audition, l'état cardiovasculaire et neurologique et sur les traitements en cours. Une inaptitude peut être temporaire, définitive, ou assortie de restrictions inscrites sur le titre.",
      ],
      example: [
        "Un conducteur de 62 ans doit passer sa visite médicale tous les deux ans. Il lui appartient de surveiller la date de fin de validité inscrite sur son permis : aucun rappel administratif n'est envoyé.",
      ],
      tip: "5 ans, 2 ans, 1 an : la périodicité se resserre à 60 ans puis à 76 ans. La date de validité figure sur le titre lui-même.",
    },
    {
      title: "FIMO, FCO et carte de qualification de conducteur",
      paragraphs: [
        "Le permis suffit à conduire ; il ne suffit pas à travailler. Pour exercer le métier de conducteur routier de marchandises, il faut en plus une qualification professionnelle : la formation initiale minimale obligatoire, la FIMO, d'une durée de 140 heures, ou un titre professionnel équivalent.",
        "Cette qualification s'entretient par la formation continue obligatoire de sécurité, la FCO, d'une durée de 35 heures, à renouveler tous les 5 ans. Elle porte sur la conduite rationnelle et économique, la réglementation sociale, la sécurité et la santé du conducteur.",
        "La preuve de cette qualification est matérialisée par la carte de qualification de conducteur, valable 5 ans, que le conducteur doit pouvoir présenter lors d'un contrôle, au même titre que son permis et sa carte de conducteur de chronotachygraphe.",
        "Certains transports sont dispensés de FIMO, notamment ceux effectués avec des véhicules dont la vitesse maximale autorisée ne dépasse pas 45 km/h, les véhicules affectés aux services de secours ou de la protection civile, ou le transport de matériel pour l'usage propre du conducteur lorsque la conduite ne constitue pas son activité principale.",
      ],
      example: [
        "Un jeune de 18 ans qui obtient le permis C dans le cadre d'un titre professionnel de conducteur routier peut conduire dès l'obtention, alors qu'un candidat ayant passé le permis à titre personnel devra attendre 21 ans pour conduire un véhicule de la catégorie C.",
      ],
      tip: "FIMO = 140 h à l'entrée dans le métier. FCO = 35 h tous les 5 ans pour y rester. Carte de qualification = la preuve à présenter.",
    },
  ],
  exercises: [
    {
      id: "pl1-1",
      level: 1,
      type: "qcm",
      question:
        "Quelle catégorie de permis faut-il pour conduire un véhicule de transport de marchandises dont le PTAC est de 12 tonnes, attelé d'une remorque de 500 kg ?",
      choices: ["B", "C1", "C", "CE"],
      answer: 2,
      explanation:
        "La catégorie C couvre les véhicules de transport de marchandises dont le PTAC dépasse 3,5 tonnes, sans limite supérieure, avec une remorque n'excédant pas 750 kg. Ici la remorque de 500 kg reste sous ce seuil : la catégorie C suffit. Le piège est de penser à la catégorie C1, qui s'arrête à 7,5 tonnes de PTAC.",
      hint: "Regardez d'abord le PTAC du porteur, puis le poids de la remorque.",
    },
    {
      id: "pl1-2",
      level: 1,
      type: "qcm",
      question: "Quel est le PTAC maximal d'un véhicule relevant de la catégorie C1 ?",
      choices: ["3,5 tonnes", "7,5 tonnes", "12 tonnes", "19 tonnes"],
      answer: 1,
      explanation:
        "La catégorie C1 couvre les véhicules de transport de marchandises dont le PTAC est supérieur à 3,5 tonnes sans dépasser 7,5 tonnes, avec une remorque de 750 kg au plus. Le piège vient des 12 tonnes, qui correspondent au poids maximal de l'ensemble en catégorie C1E, et non au PTAC du porteur.",
      hint: "Un chiffre concerne le porteur seul, l'autre l'ensemble avec remorque.",
    },
    {
      id: "pl1-3",
      level: 1,
      type: "truefalse",
      question:
        "L'âge minimal pour se présenter au permis de la catégorie C est de 21 ans, sauf parcours de qualification professionnelle.",
      answer: true,
      explanation:
        "Vrai. L'âge minimal des catégories C et CE est de 21 ans, abaissé à 18 ans pour les conducteurs qui suivent la formation initiale minimale obligatoire ou préparent un titre professionnel de conducteur routier. Les catégories C1 et C1E sont, elles, accessibles dès 18 ans.",
      hint: "La qualification professionnelle ouvre un accès anticipé.",
    },
    {
      id: "pl1-4",
      level: 1,
      type: "qcm",
      question: "Que signifie le sigle PTAC ?",
      choices: [
        "Poids à vide du véhicule",
        "Poids total autorisé en charge",
        "Poids transportable après chargement",
        "Poids théorique admis en circulation",
      ],
      answer: 1,
      explanation:
        "Le PTAC est le poids total autorisé en charge : le poids maximal du véhicule chargé, indiqué sur le certificat d'immatriculation, incluant le véhicule à vide, le carburant, le conducteur, les passagers et le chargement. Il ne faut pas le confondre avec la charge utile, qui est la différence entre le PTAC et le poids du véhicule à vide.",
      hint: "Le mot « charge » figure dans le sigle.",
    },
    {
      id: "pl1-5",
      level: 1,
      type: "qcm",
      question: "Quelle est la durée de la formation initiale minimale obligatoire (FIMO) ?",
      choices: ["35 heures", "70 heures", "140 heures", "280 heures"],
      answer: 2,
      explanation:
        "La FIMO dure 140 heures. Le piège porte sur les 35 heures, qui correspondent à la formation continue obligatoire de sécurité, la FCO, à renouveler tous les 5 ans. L'une ouvre l'accès au métier, l'autre l'entretient.",
      hint: "L'une des deux durées est celle du recyclage quinquennal.",
    },
    {
      id: "pl1-6",
      level: 2,
      type: "qcm",
      question:
        "Vous conduisez un porteur de 19 tonnes et vous souhaitez y atteler une remorque de 6 tonnes. Quelle catégorie de permis est nécessaire ?",
      choices: ["C", "CE", "C1E", "B96"],
      answer: 1,
      explanation:
        "Dès que la remorque dépasse 750 kg derrière un véhicule de la catégorie C, il faut la catégorie CE. La catégorie C1E est réservée aux ensembles dont le poids total ne dépasse pas 12 tonnes avec un porteur de la catégorie C1. Le piège consiste à croire que la catégorie C couvre toute remorque tant que le porteur est le même.",
      hint: "Le seuil de 750 kg décide de l'ajout de la lettre E.",
    },
    {
      id: "pl1-7",
      level: 2,
      type: "qcm",
      question:
        "Un conducteur de 63 ans titulaire du permis C doit passer sa visite médicale selon quelle périodicité ?",
      choices: ["Tous les ans", "Tous les 2 ans", "Tous les 5 ans", "Tous les 10 ans"],
      answer: 1,
      explanation:
        "La visite médicale du groupe lourd est renouvelée tous les 5 ans jusqu'à 60 ans, tous les 2 ans entre 60 et 76 ans, puis tous les ans au-delà de 76 ans. À 63 ans, la périodicité est donc de 2 ans. Le piège classique est de conserver la périodicité de 5 ans après le soixantième anniversaire.",
      hint: "La périodicité se resserre une première fois à 60 ans.",
    },
    {
      id: "pl1-8",
      level: 2,
      type: "truefalse",
      question:
        "Le PTRA correspond au poids maximal de l'ensemble formé par le véhicule tracteur et sa remorque, en charge.",
      answer: true,
      explanation:
        "Vrai. Le poids total roulant autorisé, ou PTRA, est le poids maximal de l'ensemble tracteur plus remorque en charge. Il figure sur le certificat d'immatriculation des véhicules conçus pour tracter. Le PTAC ne concerne, lui, qu'un seul véhicule pris isolément.",
      hint: "Le R du sigle renvoie à l'ensemble « roulant ».",
    },
    {
      id: "pl1-9",
      level: 2,
      type: "qcm",
      question:
        "Un porteur a un PTAC de 26 tonnes et pèse 11 tonnes à vide. Quelle est sa charge utile ?",
      choices: ["11 tonnes", "15 tonnes", "26 tonnes", "37 tonnes"],
      answer: 1,
      explanation:
        "La charge utile est la différence entre le PTAC et le poids à vide : 26 − 11 = 15 tonnes. Confondre PTAC et charge utile conduit directement à la surcharge, car on croit alors pouvoir charger 26 tonnes de marchandises sur un camion qui n'en accepte que 15.",
      hint: "Une simple soustraction entre deux valeurs de la carte grise.",
    },
    {
      id: "pl1-10",
      level: 2,
      type: "qcm",
      question:
        "Quels documents un conducteur routier professionnel doit-il pouvoir présenter lors d'un contrôle ?",
      choices: [
        "Uniquement son permis de conduire",
        "Son permis et sa carte grise",
        "Son permis, sa carte de qualification de conducteur et sa carte de conducteur de chronotachygraphe",
        "Uniquement sa carte de qualification de conducteur",
      ],
      answer: 2,
      explanation:
        "Le conducteur professionnel doit présenter son permis en cours de validité médicale, sa carte de qualification de conducteur attestant de la FIMO ou de la FCO, et sa carte de conducteur associée au chronotachygraphe. Le piège est de croire que le permis suffit : il autorise à conduire, mais pas à exercer le métier.",
      hint: "Conduire et exercer le métier sont deux autorisations distinctes.",
    },
    {
      id: "pl1-11",
      level: 3,
      type: "qcm",
      question:
        "Quelle est la durée et la périodicité de la formation continue obligatoire de sécurité (FCO) ?",
      choices: [
        "35 heures tous les 5 ans",
        "35 heures tous les 10 ans",
        "140 heures tous les 5 ans",
        "70 heures tous les 3 ans",
      ],
      answer: 0,
      explanation:
        "La FCO dure 35 heures et se renouvelle tous les 5 ans, comme la carte de qualification de conducteur qu'elle permet de proroger. Le piège tient au fait que la FIMO, elle, dure 140 heures mais ne se passe qu'une fois, à l'entrée dans le métier.",
      hint: "Sa durée est la même que celle d'une semaine de travail.",
    },
    {
      id: "pl1-12",
      level: 3,
      type: "qcm",
      question:
        "Vous conduisez un ensemble articulé et votre visite médicale est arrivée à échéance il y a un mois, sans avoir été renouvelée. Quelle est votre situation ?",
      choices: [
        "Je bénéficie d'un délai de tolérance de trois mois",
        "Je suis en règle tant que je n'ai pas d'accident",
        "Mon permis n'est plus valide : je conduis sans être titulaire de la catégorie requise",
        "Je risque seulement une amende de 35 €",
      ],
      answer: 2,
      explanation:
        "Le permis du groupe lourd n'est valide que dans la limite de la période fixée par l'avis médical. Au-delà, le conducteur n'est plus considéré comme titulaire de la catégorie : c'est un délit de conduite sans permis, et l'assureur peut refuser sa garantie en cas de sinistre. Aucun délai de tolérance n'est prévu, et aucun rappel n'est adressé au conducteur.",
      hint: "La date de fin de validité est inscrite sur le titre lui-même.",
    },
    {
      id: "pl1-13",
      level: 3,
      type: "truefalse",
      question:
        "La catégorie C1E permet de conduire un ensemble dont le poids total dépasse 12 tonnes.",
      answer: false,
      explanation:
        "Faux. La catégorie C1E est limitée à un ensemble de 12 tonnes au plus, constitué d'un véhicule de la catégorie C1 attelé d'une remorque de plus de 750 kg. Au-delà de ce plafond, il faut la catégorie CE. Le piège consiste à retenir seulement le seuil de 7,5 tonnes du porteur en oubliant le plafond de l'ensemble.",
      hint: "Deux plafonds coexistent : celui du porteur et celui de l'ensemble.",
    },
    {
      id: "pl1-14",
      level: 3,
      type: "qcm",
      question:
        "Quel poids total roulant est généralement admis pour un ensemble articulé à cinq essieux en France ?",
      choices: ["26 tonnes", "38 tonnes", "44 tonnes", "60 tonnes"],
      answer: 2,
      explanation:
        "La réglementation française admet un poids total roulant de 44 tonnes pour les ensembles à cinq essieux, dans les conditions fixées par le code de la route, la règle générale étant de 40 tonnes. Attention au piège : ce plafond réglementaire ne remplace jamais le PTRA propre au véhicule inscrit sur la carte grise, qui peut être inférieur et qui prime.",
      hint: "Le plafond général est de 40 t ; cinq essieux ouvrent un cran supplémentaire.",
    },
    {
      id: "pl1-15",
      level: 3,
      type: "qcm",
      question:
        "Un conducteur de 18 ans peut-il conduire professionnellement un véhicule de la catégorie C ?",
      choices: [
        "Non, jamais avant 21 ans",
        "Oui, s'il est titulaire de la FIMO ou d'un titre professionnel de conducteur routier",
        "Oui, sans condition dès l'obtention du permis",
        "Oui, mais uniquement en transport de voyageurs",
      ],
      answer: 1,
      explanation:
        "L'âge minimal de 21 ans des catégories C et CE est abaissé à 18 ans pour les conducteurs engagés dans le parcours de qualification professionnelle : formation initiale minimale obligatoire de 140 heures ou titre professionnel de conducteur routier. Le piège est d'en conclure que le permis seul suffit à 18 ans : c'est la qualification professionnelle qui ouvre cet accès anticipé.",
      hint: "La qualification professionnelle et l'âge d'accès sont liés.",
    },
  ],
};

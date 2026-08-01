import type { Chapter } from "@/lib/types";

export const chapter: Chapter = {
  slug: "code-priorites",
  subject: "code",
  grade: "permis",
  num: 1,
  title: "Les priorités",
  domain: "nombres",
  icon: "TrafficCone",
  teaser:
    "Priorité à droite, panneaux, giratoires, véhicules d'urgence : savoir qui passe en premier.",
  objectives: [
    "Je connais la règle de la priorité à droite et ses exceptions",
    "Je distingue « cédez le passage », « stop » et route à caractère prioritaire",
    "Je fais la différence entre un carrefour à sens giratoire et un rond-point",
    "Je sais réagir face à un véhicule d'urgence, un tramway ou un croisement en pente",
  ],
  lesson: [
    {
      title: "La règle de base : la priorité à droite",
      figure: "sit-priorite-droite",
      paragraphs: [
        "Lorsque deux conducteurs abordent une intersection par des routes différentes, celui qui vient par la gauche doit céder le passage à l'autre. Autrement dit : le véhicule qui arrive sur votre droite passe avant vous. C'est la règle par défaut, celle qui s'applique dès qu'aucune signalisation ne dit le contraire.",
        "Cette règle vaut pour tous les conducteurs, y compris les cyclistes et les conducteurs de deux-roues motorisés. Elle ne dépend ni de la largeur des routes, ni de l'ordre d'arrivée à l'intersection.",
        "Céder le passage ne signifie pas s'arrêter systématiquement : cela signifie ne pas obliger l'autre conducteur à modifier brusquement sa vitesse ou sa trajectoire. En pratique, on ralentit à l'approche et on s'arrête si nécessaire.",
        "Le refus de priorité est une contravention de 4e classe : 135 € d'amende forfaitaire, 4 points en moins et une suspension du permis pouvant aller jusqu'à 3 ans.",
      ],
      example: [
        "Vous circulez dans un quartier résidentiel. À l'intersection suivante, aucun panneau ni marquage au sol n'est visible. Une voiture débouche de la rue de droite : elle est prioritaire, même si votre rue est plus large et plus fréquentée.",
      ],
      tip: "Devant une intersection « nue » (ni panneau, ni feu, ni marquage), le réflexe est toujours le même : je regarde à droite et je me prépare à céder.",
    },
    {
      title: "Les panneaux qui changent la donne",
      figure: "sit-stop",
      paragraphs: [
        "Le panneau « Cédez le passage » (triangle blanc bordé de rouge, pointe vers le bas) impose de laisser passer les véhicules circulant sur la route abordée. Vous n'êtes pas obligé de vous arrêter si la voie est libre, mais vous devez pouvoir le faire.",
        "Le panneau « Stop » (octogone rouge) impose un arrêt absolu à la limite de la chaussée abordée, même si la route est totalement dégagée. Un simple ralentissement, aussi lent soit-il, constitue une infraction.",
        "Le losange jaune indique que la route sur laquelle vous circulez a un caractère prioritaire : aux intersections suivantes, vous n'avez pas à céder le passage aux véhicules venant de droite. Le même losange barré d'une bande noire annonce la fin de ce caractère prioritaire : la priorité à droite redevient la règle.",
        "Le triangle marqué d'une croix noire (en forme de X) annonce, lui, une intersection où la priorité à droite s'applique. Ne pas respecter un stop ou un « cédez le passage » coûte 135 € et 4 points, comme le refus de priorité.",
      ],
      example: [
        "Vous roulez sur une route signalée par un losange jaune. Vous croisez ensuite le même losange barré : à partir de cette intersection, la voiture qui débouche sur votre droite redevient prioritaire.",
      ],
      tip: "Stop = arrêt des roues, pas seulement du pied sur le frein. À l'examen comme en contrôle, l'arrêt doit être total et marqué à la ligne.",
    },
    {
      title: "Carrefour à sens giratoire ou rond-point : la vraie différence",
      figure: "sit-giratoire",
      paragraphs: [
        "Un carrefour à sens giratoire est signalé par le panneau représentant trois flèches en anneau, accompagné à chaque entrée d'un panneau « Cédez le passage ». Tout conducteur qui l'aborde doit céder le passage aux usagers qui circulent déjà sur l'anneau, quelle que soit la route qu'il quitte. C'est le cas de l'immense majorité des giratoires en France.",
        "Un rond-point sans cette signalisation obéit à la règle inverse : faute de panneau, c'est la priorité à droite qui s'applique. Les véhicules qui entrent sont donc prioritaires sur ceux qui tournent déjà autour du terre-plein central. La place de l'Étoile à Paris en est l'exemple le plus connu.",
        "Dans les deux cas, on aborde l'anneau à vitesse réduite, on signale sa sortie avec le clignotant droit et on ne change pas de file sans contrôle des angles morts.",
      ],
      example: [
        "Vous arrivez sur un anneau à quatre branches. À l'entrée, un panneau « Cédez le passage » est planté : vous devez donc attendre une ouverture dans le flux de l'anneau. Si ce panneau est absent, la situation s'inverse et le conducteur qui se présente à votre droite passe avant vous.",
      ],
      tip: "Regardez le panneau à l'entrée, pas la forme de l'anneau : le « Cédez le passage » est le seul indice qui détermine qui est prioritaire.",
    },
    {
      title: "Les priorités qui s'imposent en toutes circonstances",
      figure: "sit-vehicule-urgence",
      paragraphs: [
        "Les véhicules d'intérêt général prioritaires (pompiers, SAMU, police, gendarmerie) doivent être laissés libres de passer en toutes circonstances, à condition qu'ils annoncent leur approche avec leurs avertisseurs spéciaux, sonores et lumineux. Sirène éteinte, le véhicule perd cette priorité et redevient un usager ordinaire.",
        "Céder le passage à un véhicule d'urgence ne signifie pas commettre une infraction dangereuse : on ralentit, on se serre à droite, on s'arrête si nécessaire, et on ne s'engage jamais dans un carrefour pour le laisser passer. Le refus de priorité coûte ici aussi 135 € et 4 points.",
        "Aux passages à niveau et partout où une voie ferrée traverse la chaussée, la priorité appartient au matériel qui circule sur les rails. Le tramway, lui, doit respecter les feux et les panneaux de prescription absolue, mais on ne peut pas le doubler du côté où les voyageurs montent et descendent, et on le dépasse normalement par la droite lorsque l'espace le permet.",
      ],
      example: [
        "Une ambulance arrive derrière vous, gyrophare et sirène en fonctionnement, alors que vous êtes arrêté à un feu rouge. Vous n'avancez pas dans le carrefour : vous vous décalez sur le côté de votre voie pour dégager un passage, sans franchir le feu.",
      ],
      tip: "Deux conditions pour la priorité d'un véhicule d'urgence : le gyrophare ET la sirène. L'une sans l'autre ne suffit pas.",
    },
    {
      title: "Les cas particuliers à connaître",
      figure: "sit-croisement-pente",
      paragraphs: [
        "Lorsque vous débouchez sur une route depuis une aire de stationnement, un chemin de terre, un accès privé ou en franchissant un trottoir, vous n'avez aucune priorité : vous devez céder le passage à tout autre véhicule, y compris à celui qui vient de votre gauche.",
        "Pour tourner à gauche, vous devez céder le passage aux véhicules venant en sens inverse, ainsi qu'aux cyclistes et engins circulant dans les deux sens sur une piste cyclable que vous allez traverser. Un feu vert ne dispense jamais de cette obligation.",
        "Sur les routes de montagne et à forte déclivité, lorsque le croisement est difficile, c'est le véhicule qui descend qui doit s'arrêter le premier. Si l'un des deux doit faire marche arrière, l'obligation revient au véhicule seul face à un ensemble de véhicules, puis au plus léger des deux. À catégories égales, c'est celui qui descend qui recule, sauf si la manœuvre est manifestement plus facile pour celui qui monte, par exemple s'il se trouve près d'une place d'évitement.",
        "Enfin, on ne s'engage jamais dans une intersection si l'on risque d'y rester immobilisé et de bloquer les autres voies, même avec un feu vert.",
      ],
      example: [
        "Sur une route de col, vous montez et vous croisez une camionnette qui descend sur une portion très étroite. C'est elle qui doit s'arrêter la première pour vous laisser le passage.",
      ],
      tip: "Le véhicule qui monte garde son élan : c'est la logique de la règle. Celui qui descend maîtrise mieux son arrêt et sa marche arrière.",
    },
  ],
  exercises: [
    {
      id: "cpri-1",
      figure: "sit-priorite-droite",
      level: 1,
      type: "qcm",
      question:
        "Vous circulez en agglomération et abordez une intersection sans panneau, sans feu et sans marquage au sol. Une voiture arrive sur votre droite. Que faites-vous ?",
      choices: [
        "Je passe : ma route est plus large",
        "Je klaxonne pour signaler ma présence",
        "Je lui cède le passage",
        "Je passe si je suis arrivé le premier à l'intersection",
      ],
      answer: 2,
      explanation:
        "En l'absence de signalisation, la priorité à droite s'applique : le conducteur venant par la gauche cède le passage à l'autre. Le piège classique consiste à croire que la largeur de la voie, sa fréquentation ou l'ordre d'arrivée changent quelque chose : ce n'est jamais le cas.",
      hint: "Aucun panneau, aucun feu : quelle règle s'applique alors par défaut ?",
    },
    {
      id: "cpri-2",
      figure: "sit-stop",
      level: 1,
      type: "qcm",
      question:
        "Vous abordez un panneau « Stop » et la route abordée est parfaitement dégagée. Que devez-vous faire ?",
      choices: [
        "Ralentir fortement puis passer sans m'arrêter",
        "M'arrêter uniquement si un véhicule approche",
        "Passer sans m'arrêter si la visibilité est parfaite",
        "Marquer un arrêt complet à la limite de la chaussée abordée",
      ],
      answer: 3,
      explanation:
        "Le panneau « Stop » impose un temps d'arrêt à la limite de la chaussée abordée, sans aucune condition : peu importe que la route soit libre ou que la visibilité soit excellente. Le piège d'examen est le « stop roulant » : rouler très lentement n'est pas s'arrêter, et l'infraction coûte 135 € et 4 points.",
      hint: "Le mot clé de ce panneau est « absolu ».",
    },
    {
      id: "cpri-3",
      figure: "sit-cedez-passage",
      level: 1,
      type: "truefalse",
      question:
        "Le panneau « Cédez le passage » impose un arrêt complet, même si aucun véhicule n'arrive.",
      answer: false,
      explanation:
        "Faux. Le « Cédez le passage » impose de laisser passer les véhicules circulant sur la route abordée et de ne s'engager qu'après s'être assuré de pouvoir le faire sans danger. Si la voie est libre, on peut s'engager sans s'arrêter. C'est le « Stop » qui impose l'arrêt absolu : ne confondez pas les deux triangles.",
      hint: "Un seul des deux panneaux impose l'immobilisation du véhicule.",
    },
    {
      id: "cpri-4",
      figure: "sit-vehicule-urgence",
      level: 1,
      type: "qcm",
      question:
        "Un véhicule de pompiers arrive derrière vous, gyrophare et sirène en fonctionnement. Quelle est la conduite à tenir ?",
      choices: [
        "Je facilite son passage en me rangeant dès que je peux le faire en sécurité",
        "Je conserve ma vitesse et ma trajectoire",
        "Je freine brutalement et je m'immobilise sur place",
        "Je ne lui cède le passage que hors agglomération",
      ],
      answer: 0,
      explanation:
        "Tout conducteur doit céder le passage, en toutes circonstances, aux véhicules d'intérêt général prioritaires annonçant leur approche par leurs avertisseurs spéciaux. Le piège consiste à s'arrêter n'importe où ou à franchir un feu rouge pour dégager : on facilite le passage sans créer un nouveau danger. Le refus de priorité coûte 135 € et 4 points.",
      hint: "Faciliter le passage, oui ; commettre une infraction dangereuse, non.",
    },
    {
      id: "cpri-5",
      level: 1,
      type: "qcm",
      question:
        "Vous apercevez un panneau en forme de losange jaune le long de votre itinéraire. Que signifie-t-il ?",
      choices: [
        "Ma route est prioritaire",
        "Je dois céder le passage aux véhicules venant de ma droite",
        "Fin du caractère prioritaire de ma route",
        "Route réservée aux véhicules lents",
      ],
      answer: 0,
      explanation:
        "Le losange jaune annonce le caractère prioritaire de la route empruntée : aux intersections suivantes, vous n'avez pas à céder le passage aux véhicules venant de droite. Attention au piège : le même losange barré d'une bande noire signifie la fin de cette priorité, et la priorité à droite reprend immédiatement ses droits.",
      hint: "Le même panneau existe en version barrée ; l'un annonce, l'autre annule.",
    },
    {
      id: "cpri-6",
      figure: "sit-giratoire",
      level: 2,
      type: "qcm",
      question:
        "Vous abordez un carrefour à sens giratoire signalé, avec un panneau « Cédez le passage » à l'entrée. Qui est prioritaire ?",
      choices: [
        "Les véhicules qui abordent le giratoire",
        "Les usagers qui circulent déjà sur l'anneau",
        "Le véhicule venant de la droite de celui qui entre",
        "Le premier arrivé à l'entrée",
      ],
      answer: 1,
      explanation:
        "Devant un carrefour à sens giratoire, tout conducteur doit céder le passage aux usagers circulant sur la chaussée qui ceinture le carrefour, quelle que soit la route qu'il quitte. Le piège de l'examen est de raisonner en priorité à droite : ici, la signalisation écarte cette règle.",
      hint: "Le panneau à l'entrée vous dit exactement ce que vous devez faire.",
    },
    {
      id: "cpri-7",
      figure: "sit-rond-point",
      level: 2,
      type: "qcm",
      question:
        "Vous circulez sur l'anneau d'un rond-point qui n'est pas signalé comme carrefour à sens giratoire : aucun « Cédez le passage » n'est implanté aux entrées. Un véhicule se présente sur votre droite pour s'insérer. Que faites-vous ?",
      choices: [
        "Je passe : sur l'anneau, je suis toujours prioritaire",
        "Je lui cède le passage : faute de signalisation, la priorité à droite s'applique",
        "Je klaxonne pour lui signaler que je suis prioritaire",
        "Je m'arrête sur l'anneau et je laisse passer tous les véhicules",
      ],
      answer: 1,
      explanation:
        "C'est LA différence entre un carrefour à sens giratoire et un rond-point : sans panneau « Cédez le passage » aux entrées, aucune règle particulière ne s'applique, donc la priorité à droite reprend ses droits et les véhicules qui entrent passent avant ceux qui tournent. Le piège est de croire que la forme circulaire suffit à donner la priorité à l'anneau.",
      hint: "Ce n'est pas la forme de l'anneau qui décide, c'est la signalisation.",
    },
    {
      id: "cpri-8",
      figure: "sit-sortie-parking",
      level: 2,
      type: "qcm",
      question:
        "Vous sortez d'une aire de stationnement pour vous insérer sur la chaussée. Un véhicule arrive sur votre gauche. Que faites-vous ?",
      choices: [
        "Je m'engage : le véhicule vient de ma gauche",
        "Je m'engage si je peux accélérer plus vite que lui",
        "Je cède le passage à tous les véhicules circulant sur la route",
        "Je ne cède le passage qu'aux véhicules venant de ma droite",
      ],
      answer: 2,
      explanation:
        "Un conducteur qui débouche sur une route depuis une aire de stationnement, un chemin de terre, un accès privé ou en franchissant un trottoir doit céder le passage à tout autre véhicule, et s'engager à une vitesse assez réduite pour pouvoir s'arrêter sur place. Le piège classique est d'appliquer mécaniquement la priorité à droite : elle ne s'applique pas ici.",
      hint: "Sortir d'un lieu qui n'est pas une route ne donne aucune priorité.",
    },
    {
      id: "cpri-9",
      level: 2,
      type: "truefalse",
      question:
        "Un refus de priorité entraîne un retrait de 4 points sur le permis de conduire.",
      answer: true,
      explanation:
        "Vrai. Le refus de priorité, comme le non-respect d'un « Stop » ou d'un « Cédez le passage », est une contravention de 4e classe : 135 € d'amende forfaitaire, retrait de 4 points et suspension possible du permis pendant 3 ans au plus. À noter : le refus de céder le passage à un piéton qui traverse coûte, lui, 6 points.",
      hint: "C'est la même sanction pour le stop, le cédez-le-passage et la priorité à droite.",
    },
    {
      id: "cpri-10",
      figure: "sit-tourne-a-gauche",
      level: 2,
      type: "qcm",
      question:
        "En agglomération, vous vous apprêtez à tourner à gauche. Un véhicule arrive en face et continue tout droit. Que faites-vous ?",
      choices: [
        "Il doit ralentir puisque j'ai mis mon clignotant",
        "Je m'engage rapidement avant qu'il n'arrive",
        "Je passe : le feu vert me donne la priorité",
        "Je lui cède le passage avant de tourner",
      ],
      answer: 3,
      explanation:
        "Le conducteur qui quitte une route sur sa gauche doit céder le passage aux véhicules venant en sens inverse, ainsi qu'aux cyclistes circulant sur une piste cyclable qu'il va traverser. Le clignotant annonce une intention, il ne crée aucune priorité, et un feu vert n'autorise pas davantage à couper la route d'un véhicule arrivant en face.",
      hint: "Le clignotant informe, il ne donne pas la priorité.",
    },
    {
      id: "cpri-11",
      figure: "sit-carrefour-bloque",
      level: 3,
      type: "qcm",
      question:
        "Le feu passe au vert, mais la circulation est à l'arrêt de l'autre côté de l'intersection. Que faites-vous ?",
      choices: [
        "Je m'engage : le feu vert m'autorise à passer",
        "Je m'engage puis j'attends au milieu du carrefour",
        "Je m'engage en klaxonnant pour faire avancer la file",
        "Je reste en amont de l'intersection tant que je risque d'y être immobilisé",
      ],
      answer: 3,
      explanation:
        "On ne doit s'engager dans une intersection que si l'on ne risque pas d'y être immobilisé et d'empêcher le passage des véhicules circulant sur les autres voies. Le piège est de considérer le feu vert comme une autorisation inconditionnelle : le vert autorise le passage, il n'oblige jamais à s'engager.",
      hint: "Un feu vert autorise, il n'oblige pas.",
    },
    {
      id: "cpri-12",
      figure: "sit-tramway",
      level: 3,
      type: "qcm",
      question:
        "Un tramway est à l'arrêt sur la chaussée et des voyageurs descendent du côté où vous circulez. Que faites-vous ?",
      choices: [
        "Je le dépasse lentement",
        "Je le dépasse par la gauche",
        "Il m'est interdit de le dépasser de ce côté",
        "Je le dépasse si aucun piéton n'est visible",
      ],
      answer: 2,
      explanation:
        "Il est interdit de dépasser un tramway ou un train empruntant la chaussée pendant la montée ou la descente des voyageurs, du côté où elle s'effectue. Le piège est de croire qu'une allure très réduite rend la manœuvre légale : l'interdiction est absolue tant que les voyageurs utilisent ce côté.",
      hint: "Des piétons traversent la chaussée juste devant votre trajectoire.",
    },
    {
      id: "cpri-13",
      figure: "sit-croisement-pente",
      level: 3,
      type: "qcm",
      question:
        "Sur une route de montagne étroite, deux voitures de même catégorie ne peuvent se croiser qu'en effectuant une marche arrière. À qui incombe cette manœuvre ?",
      choices: [
        "Au véhicule qui monte",
        "Au véhicule qui descend",
        "Au dernier arrivé sur la portion étroite",
        "À celui dont le moteur est le plus puissant",
      ],
      answer: 1,
      explanation:
        "Sur les routes de montagne et à forte déclivité, le véhicule descendant s'arrête le premier ; si une marche arrière est indispensable entre deux véhicules de même catégorie, c'est à lui de l'effectuer. Nuance à connaître : la manœuvre revient au conducteur qui monte lorsqu'elle est manifestement plus facile pour lui, par exemple s'il se trouve près d'une place d'évitement. Et entre catégories différentes, elle s'impose au véhicule seul face à un ensemble, puis au plus léger des deux.",
      hint: "Un véhicule qui monte perd son élan et peine à repartir en côte.",
    },
    {
      id: "cpri-14",
      level: 3,
      type: "truefalse",
      question:
        "Un véhicule de police dont les avertisseurs sonores et lumineux ne sont pas en fonctionnement conserve sa priorité de passage.",
      answer: false,
      explanation:
        "Faux. La priorité des véhicules d'intérêt général prioritaires n'existe que lorsqu'ils annoncent leur approche par l'emploi de leurs avertisseurs spéciaux, sonores et lumineux. Sans sirène ni gyrophare, le véhicule est soumis aux mêmes règles que tous les autres usagers.",
      hint: "La priorité tient à un signal, pas à la couleur du véhicule.",
    },
    {
      id: "cpri-15",
      figure: "sit-chemin-de-terre",
      level: 3,
      type: "qcm",
      question:
        "Hors agglomération, vous circulez sur une route sans signalisation particulière. Sur votre droite, une voiture sort d'un chemin de terre. Qui doit céder le passage ?",
      choices: [
        "Elle : un conducteur qui débouche d'un chemin de terre cède le passage à tout autre véhicule",
        "Vous : elle vient de votre droite",
        "Personne : le premier arrivé passe",
        "Vous devez vous arrêter et lui faire signe de passer",
      ],
      answer: 0,
      explanation:
        "La priorité à droite ne s'applique qu'entre routes. Le conducteur qui débouche d'un chemin de terre, d'un accès non ouvert à la circulation publique ou d'une aire de stationnement doit céder le passage à tout autre véhicule et rouler assez lentement pour pouvoir s'arrêter sur place. Le piège d'examen est ici de voir « un véhicule à droite » et d'appliquer la règle sans regarder d'où il sort.",
      hint: "Regardez la nature de la voie d'où sort le véhicule, pas seulement son côté.",
    },
  ],
};

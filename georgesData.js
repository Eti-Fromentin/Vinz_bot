
const quoteAndSound = [
    {
        name: "regimes",
        quote: "Alors toi, avec tes régimes à la con, tu me fais bien marrer.",
    },
    {
        name: "recommencer",
        quote: "- T'es lourde là. \n - J'ai très bien entendu. \n - Bon excuse moi. \n T'avises pas de recommencer.",
    },
    {
        name: "muscles",
        quote: "Tu trouves pas que je suis musclé ces derniers temps ?",
    },
    {
        name: "blaireau",
        quote: "Mon plus grand plaisir serait que tu te calmes, gros blaireau.",
    },
    {
        name: "chier",
        quote: "Bon ça va, on vous fait pas chier là ? Non c'est sûr ? Je rêve.",
    },
    {
        name: "menageres",
        quote: "Sauf que moi j'les baises moi les ménagéres.",
    },
    {
        name: "savoir",
        quote: "Et on peut savoir, euh, ça veut dire quoi ça ?",
    },
    {
        name: "convaincu",
        quote: "Ah ben là patron vous m'avez convaincu, c'est une bonne raison.",
    },
    {
        name: "bordel",
        quote: "Ca m'a l'air d'un bordel",
    },
    {
        name: "helicoptere",
        quote: "Ecoute, j'ai un truc à te proposer, vachement bien, super baléze. On serait tous les deux complétement irresponsables, payés par la CIA avec un hélicoptère",
    },
    {
        name: "partouzeurs",
        quote: "Paraît qu'on a repéré des animaux préhistoriques partouzeurs de droite dans les parages.",
    },
    {
        name: "tronche",
        quote: "Mais qu'est ce qui t'arrive ? Pourquoi tu dis rien ? Tu fais la tronche ou quoi ?",
    },
    {
        name: "decision",
        quote: "- Ecoutez. \n - Oui, oui. \n - J'ai plus beaucoup de temps. \n - Moi non plus. \n - Alors, il faut que vous preniez une désicion. Moi j'suis à bloc. Dites moi si c'est oui ou si c'est non. ",
    },
    {
        name: "voleurs",
        quote: "J'aime pas trop les voleurs et... les fils de pute.",
    },
    {
        name: "amalgame",
        quote: "Tu fais un amalgame entre la coquetterie et la classe.",
    },
    {
        name: "touffe",
        quote: "Il était trop balourd, trop pataud. Il voulait pas m'lâcher la touffe.",
    },
    {
        name: "costume",
        quote: "Actuellement j'ai un léger problème de costume, je crois que mon tailleur se fout de ma gueule.",
    },
    {
        name: "anglais",
        quote: "Tiens regarde les anglais ont débarqué. On va être obligé de passer par derrieère. Tu sais par ce tunner tout sombre qui sent pas très bon.",
    },
    {
        name: "pipeau",
        quote: "Ca sent le pipeau ton histoire. Le pipeau !",
    },
    {
        name: "croire",
        quote: "Comment peux tu croire des conneries pareilles ?",
    },
    {
        name: "duel",
        quote: "Ok, puisque j'vois qu'on peut pas discuter, on va faire un duel.",
    },
    {
        name: "demerder",
        quote: "Putain, j'me suis mal démerdé. Pourtant, j'ai pas fait une concession.",
    },
    {
        name: "chemin",
        quote: "- Ca fait plsieurs fois que j'te croise. T'es toujours sur mon chemin. Tu veux quoi ? \n - Mais c'est peut-être toi qu'es sur mon chemin, pas moi.",
    },
    {
        name: "lave",
        quote: "Boah et puis merde, j'ai même plus envie de me laver !",
    },
    {
        name: "cons",
        quote: "Je suis l'homme le plus classe du monde. Bande de cons !",
    },
    {
        name: "mystere",
        quote: "Je sais âs toi, mais moi le mystére s'épaissit.",
    },
    {
        name: "fuser",
        quote: "Ca va fuser, les potins, les ragots.",
    },
    {
        name: "ranch",
        quote: "Et c'est facile de traiter les gens de pédés. Tout ça parce que deux garçons vivent ensemble dans un ranch et portent des pantalons en cuir.",
    },
    {
        name: "espagnol",
        quote: "- Buenas noches. \n - Ben, tu parles espagnol ? \n - Un poquito. \n - Et tu crois qu'tu m'impressionnes ? Moi j'sais dire: allons à la plage monsieur renard. Vamos a la playa senior zorro.",
    },
    {
        name: "mode",
        quote: "Tu dépenses tout ton argent dans les habits et accessoires de mode mais tu es ridicule.",
    },
    {
        name: "bizarres",
        quote: "- Moi j'aime pas les gens bizarres. \n - Oh merde, J'peux pas encadrer les nazis.",
    },
    {
        name: "bac",
        quote: "Au revoir messieurs dames. C'est ça la puissance intellectuelle. Bac+2, les enfants.",
    },
    {
        name: "courageux",
        quote: "- Pas très courageux. \n - J'en ai rien à foutre d'être courageux.",
    },
    {
        name: "chili",
        quote: "est-ce que tu aimerais te bâfrer un chili con carne ?",
    },
    {
        name: "tchernobyl",
        quote: "C'est le cow-boy de Tchernobyl.",
    },
    {
        name: "aider",
        quote: "Très bien. Puisque vous ne voulez pas m'aider, allez vous faire enculer !",
    },
    {
        name: "reve",
        quote: "Eh, non mais pour qui tu me prends, je rêve !",
    },
    {
        name: "poudre",
        quote: "OK. tu veux pas me parler, hum ? Tu veux qu'j'fasse parler la poudre.",
    },
    {
        name: "classe",
        quote: "C'est la classe.",
    },
    {
        name: "ouiche",
        quote: "- On dit une ouiche lorrainer. \n - t'es sûr ?",
    },
    {
        name: "facteur",
        quote: "Presse le pas, facteur, car l'amitié n'attends pas !",
    },
    {
        name: "prive",
        quote: "Mais c'est privé, et j'ai des principes.",
    },
    {
        name: "battre",
        quote: "- C'est tout c'que t'as à dire ? Fais quelque chose. \n -Qu'est-ce tu veux que je fasse ? \n - Je ne sais pas moi, va te battre, c'est notre honneur qui est en jeu. \n -Ben si c'est notre honneur, vas-y toi te battre.",
    },
    {
        name: "choucroute",
        quote: "Eh, la choucroute ! Si tu veux une saucisse...",
    },
    {
        name: "burgers",
        quote: "Ca doit être les burgers.",
    },
    {
        name: "capotes",
        quote: "Mettez des capotes.",
    },
    {
        name: "seins",
        quote: "J'aimes vos seins. Vos loches.",
    },
    {
        name: "tendre",
        quote: "Aime-moi tendre, aime-moi vrai.",
    },
    {
        name: "pietons",
        quote: "Quels connards ces piétons !",
    },
    {
        name: "plaisantais",
        quote: "Ah ça va, je plaisantais, détends-toi.",
    },
    {
        name: "playboy",
        quote: "Style le grand play-boy des fonds marins.",
    },
    {
        name: "hommes",
        quote: "J'ai connus des hommes, mais jamais des commes vous.",
    },
    {
        name: "ouf",
        quote: "Je pense qie t'es un ouf toi. Un ouf malade.",
    },
    {
        name: "manchot",
        quote: "J'ai peut-être qu'un bras, mais... je suis pas manchot !",
    },
    {
        name: "poete",
        quote: "Quel poète, vous me surprenez. On ne m'a jamais parlé comme ça.",
    },
    {
        name: "Je préfère partir plutôt que d'entendre ça plutôt que d'être sourd.",
        quote: "",
    },
    {
        name: "savoirvivre",
        quote: "- Merci m'sieur, c'est très gentil. \n - C'est une leçon d'savoir-vivre.",
    },
    {
        name: "philosophes",
        quote: "Excusez-moi maestro, je saluais des amis pholisophes.",
    },
    {
        name: "nom",
        quote: "- C'est surement un nom. Si c'est une femme, j'veux savoir quelle femme. Si c'est uncheval, je veux savoir dans quelle course. \n - Nous on pensait que ça pouvait être un traîneau.",
    },
    {
        name: "reveil",
        quote: "Sur mon front y'a pas marqué radio-réveil !",
    },
    {
        name: "buse",
        quote: "Vous me prenez pour une buse ?",
    },
    {
        name: "mondedemerde",
        quote: "Monde de merde.",
    },
    {
        name: "surpuissant",
        quote: "Mais j'suis pas super fort, j'suis mieux qu'ça même. J'suis surpuissant.",
    },
    {
        name: "pipoter",
        quote: "- Tu pipotes pas un peu toi ? \n - Jamais j'pipote.",
    },
    {
        name: "comprendre",
        quote: "C'est ça. C'est à n'y rien comprendre, même en y réfléchissant bien.",
    },
    {
        name: "joue",
        quote: "Bien joué les gars.",
    },
    {
        name: "chips",
        quote: "On va manger... des chips. t'entends ? Des chips. C'est tout c'que ça t'fait quand j'te dis qu'on va manger des chips ?",
    },
    {
        name: "just",
        quote: "Moi je préfèrerais avoir sa classe plutôt qu'avoir la mienne. Moi je suis un peu just.",
    },
    {
        name: "dring",
        quote: "- Tu connais l'effet spéciaux de la sonnette ? Dring. Tiens dring. Dring dring, tiens. Et dring dring. \n - C'est super impressionnant ça, tu l'fais bien. \n -Et après j'te fais dring, et puis dring. Et puis même encore dring. Oh putain. Allez un dernier dring. Maintenant t'appelles Jacques hein.",
    },
    {
        name: "cul",
        quote: "Et ça chauffera pour ton cul.",
    },
    {
        name: "qualite",
        quote: "J'te dis ça en qualité d'homme le plus classe du monde.",
    },
    {
        name: "plusdutout",
        quote: "Ca va plus du tout? J'ai plus envie de boire ni de manger.",
    },
    {
        name: "pop",
        quote: "classe, man ! top of the pop.",
    },
    {
        name: "elvis",
        quote: "Un pour l'argent. Deux pour le spectacle. Et trois pour le caillou.",
    },
    {
        name: "francais",
        quote: "Pas mal, non ? C'est français.",
    },
    {
        name: "cinq",
        quote: "Alors une, je ne m'en souviens pas, deux je ne suis pas resté longtemps, et enfin cinq... il n'y a pas de cinq.",
    },
    {
        name: "botter",
        quote: "Moi c'que je vois, c'est qu'dans deux secondes, j'vais t'botter le cul.",
    },
    {
        name: "botter",
        quote: "Moi c'que je vois, c'est qu'dans deux secondes, j'vais t'botter le cul.",
    },
    {
        name: "clim",
        quote: "Pas de clim' quand il fait chaud, pas de téléphone, pas de télé, pas de chauffage...",
    },
    {
        name: "breakdown",
        quote: "J'suis limite nervous breakdown.",
    },
    {
        name: "julienlepers",
        quote: "- Mon émission passe tous les soirs à 18h35, je pose des questions à des champions, je suis ? Je suis ? \n - Tu es... Tu es Julien Lepers, c'est ça ?\n - Oui c'est ça, je suis Julien Lpers ! \n - Bien ! Sacré Julien, va. ",
    },
    {
        name: "injures",
        quote: "Tu n'es vraiment pas très sympa. Mais le train de tes injures roule sur le rail de mon indifférence.",
    },
    {
        name: "con",
        quote: "Rassurez-moi. Vous seriez pas un peu en train d'me prendre pour un con des fois ?",
    },
    {
        name: "foutre",
        quote: "vous dites que j'aille me faire foutre ? OK j'y vais.",
    },
    {
        name: "ferme",
        quote: "- La ferme ? Quelle ferme ? \n - A la ferme ta gueule toi ducon espèce de crétin. Qu'est ce que tu veux ? Nous prendre la tête là ? Pauv'con. Oui je l'ai connu à la ferme on était des cowbays ! On vivait à la ferme, ça n'a rien d'étonnant.",
    },
    {
        name: "sexe",
        quote: "Sexe + histoire de cul = meurtre.",
    },
    {
        name: "fax",
        quote: "Si tu veux me'parler, envoie-moi un... fax.",
    },
    {
        name: "minable",
        quote: "T'es un minable ! Et tu te crosi le meilleur journaliste du monde ? Mais c'est incroyable, ça.",
    },
    {
        name: "pasteques",
        quote: "Ah je te jure. J'ai les pastèques.",
    },
    {
        name: "renseignement",
        quote: "Ah bravo, merci du renseignement. Heureusement que tu es là.",
    },
    {
        name: "premier",
        quote: "- Mais j'te reconnais, toi ! J't'ai déjà vu quelque part. Je suis sûr que j'te reconnais ! \n - Désolé, mais c'est moi qui te reconnais. J'tai vu le premier? Toi, tu m'as vu en deuxième. Vu ? \n - Ben, j't'ai vu le deuxième, alors voilà. \n - Perdu ! C'est aussi moi qui t'ai vu le deuxième.",
    },
    {
        name: "tomate",
        quote: "- Regarde, c'est lui, il est là. \n - Qui, le jus de tomate ? \n - Non, l'acteur.",
    },
    {
        name: "bonbons",
        quote: "Bababa baba baba. J'ai les bonbons qui collent au papier.",
    },
    {
        name: "cheveux",
        quote: "Parce que j'ai les cheveux longs tu flippes pour ton confort bourgeois. T'as un mauvais karma frêre, si tu supportes pas mes cheveux. Désolé papy, mais j'ai mas liberté d'expression capillaire.",
    },
    {
        name: "gentil",
        quote: "Vous être très gentil. Attention, j'ai bien dit gentil, j'ai pas dit homosexuel, hein.",
    },
    {
        name: "nichons",
        quote: "Elle s'est fait refaire les nichons, elle. Et je sais de quoi je parle.",
    },
    {
        name: "balles",
        quote: "La prochaine fois, je m'occuperai de toi avec de vraies balles.",
    },
    {
        name: "sape",
        quote: "A, voilaà enfin de roi de la classe ! L'homme trop bien sapé.",
    },
    {
        name: "amour",
        quote: "Je faisais l'amour avec lui depuis le samedi après-midi jusqu'au vendredi soir. A ce moment là c'était un bon compagnon.",
    },
    {
        name: "grave",
        quote: "Alors que moi, pendant c'temps là, j'me la suis donné grave.",
    },
    {
        name: "brille",
        quote: "Tu dois avoir le cul qui brille.",
    },
    {
        name: "conneries",
        quote: "Ca veut dire quoi ces conneries ?",
    },
    {
        name: "aime",
        quote: "Je voulais vous dire, je vous aime.",
    },
    {
        name: "amis",
        quote: "Considère qu'on n'est plus amis !",
    },
    {
        name: "tomber",
        quote: "Laisse tomber, tu te fous de ma gueule ?",
    },
    {
        name: "fromage",
        quote: "Bon, on va pas en faire un fromage. Je m'en suis sorti sans problème.",
    },
    {
        name: "rougir",
        quote: "Non, arrêtez, vous me gêner, je vais rougir.",
    },
    {
        name: "excuses",
        quote: "Il va sans doute nous présenter ses excuses.",
    },
    {
        name: "megachiasse",
        quote: "- Bon, m'emmerde pas avec tes histoires, j'te dis que j'ai mal au bide. J'ai la méga chiasse, putain la méga chiasse. \n - Ben, excuse-moi. \n - Excuse-moi, mal au bide, tu sais c'que c'est ? Faut qu'j'aille chier bordel ! Faut qu'j'aille chier, faut qu'j'aille chier rapidos.",
    },
    {
        name: "meufs",
        quote: "Quand je serai célèbre, je me ferai des meufs ! Mmh je ferai des folies !",
    },
    {
        name: "fesses",
        quote: "Mon mari est absent. Vous voulez voir mes fesses ? Et ensuite j'vous roulerai une pelle.",
    },
    {
        name: "string",
        quote: "En string, vous d'vez être bonne.",
    },
    {
        name: "puissance",
        quote: "En puissance intellectuelle, on va voir c'que tu vaux.",
    },
    {
        name: "idee",
        quote: "Oui, on en a chié pour trouver cette idée, on a été charrette.",
    },
    {
        name: "tete",
        quote: "Bon, ben lui il va me prendre la tête.",
    },
    {
        name: "divorce",
        quote: "En y réfléchissant bien, je pense que notre histoire n'a pas une chance sur cent de marcher. On divorce ?",
    },
    {
        name: "tranquille",
        quote: "Alors, on peut plus chier tranquille ?",
    },
    {
        name: "effetspeciaux",
        quote: "Moi ce qui me fait chier c'est les effets spéciaux minables. Je supporte plus.",
    },
    {
        name: "jeune",
        quote: "A mon avis, tu me prends pour un con. Tu m'as l'air bien jeune pour avoir connu cette époque.",
    },
    {
        name: "celebre",
        quote: "Moi, j'veux être connu, tu sais pourquoi ? Pour niquer les gonzesses. Quand t'es célèbre tu niques plein de gonzesses.",
    },
    {
        name: "droite",
        quote: "Hé ben. J'ai connu un mec de droite, une fois. Il avait dix fois plus de classe.",
    },
    {
        name: "apresmidi",
        quote: "On veut savoir si on peut prendre notre après midi ? C'est à dire qu'o a un plan là.",
    },
    {
        name: "trouble",
        quote: "En tout cas s'il cherchait pour du trouble, il est venu à la bonne place.",
    },
    {
        name: "sucer",
        quote: "Oui je pourrais, mais d'abord faut sucer.",
    },
    {
        name: "acte",
        quote: "À propos de salope, tout à l’heure, avant que vous commenciez votre histoire, vous m'aviez proposé de... comment dire... de faire le... j'aimerais bien passer à l'acte sexuel.",
    },
    {
        name: "cafe",
        quote: "Est-ce que vous voulez être ma femme ? Et après on boira un café.",
    },
    {
        name: "indiscret",
        quote: "T'es pas indiscret. Je suis majeur et je fais c'que j'ai envie de faire avec mon p'tit corps.",
    },
    {
        name: "assassine",
        quote: "On l'a retrouvé assassiné un jour. Il en est mort.",
    },
    {
        name: "niquer",
        quote: "vous voulez niquer avec mon ami et moi ?",
    },
    {
        name: "pesant",
        quote: "Ca commence à être pesant cette histoire de pédé. Tout l'monde s'acharne sur nous, alors qu'on est même pas pédés. \n Ben oui, je sais. ",
    },
    {
        name: "partout",
        quote: "Wow. Steven ! Tu vas pas me croire. J’ai plus mal au bide. Je suis guéri. Par contre, on ne peut plus rentrer dans les chiottes, il y en a partout.",
        noSound: true,
    },
    {
        name: "zero",
        quote: "Encore heureux que tu aies pas dit où en était l’enquête, parce que vu qu’on en est au point zéro, si tu l’avais dit on passait pour des busards.",
        noSound: true,
    },
    {
        name: "metamorphose",
        quote: "Je vais la métamorphoser ma tête de Français, tu vas voir. Tu vas pas en croire tes yeux.",
        noSound: true,
    },
    {
        name: "fasciste",
        quote: "Parce que si on réfléchit bien, moi je suis un vrai démocrate. George est un fasciste de merde. Un fasciste de merde !",
        noSound: true,
    },
    {
        name: "croix",
        quote: "Alors les bouseux, qui va me parler de George ? Qui c’est qui va tout dire à Dave ? Bon, toi tu dis rien, c’est normal tu es une croix en bois, tu as qu’à te taire",
        noSound: true,
    },
    {
        name: "enquete",
        quote: "Si je comprends bien, on s’est tapé une enquête super dure alors que si on vous avait rencontrée avant, on aurait pu niquer tout de suite sans même être célèbres.",
        noSound: true,
    },
]



module.exports = {quoteAndSound};
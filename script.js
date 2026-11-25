const annee = 2026;

const compteARebours = document.getElementById("compte-a-rebours");
const dateCible = new Date(annee, 11, 1);
const mettreAJour = function () {
  const instant = new Date();
  const difference = dateCible - instant;
  const joursRestants = Math.floor(difference / (1000 * 60 * 60 * 24));
  const heuresRestantes = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutesRestantes = Math.floor((difference / (1000 * 60)) % 60);
  const secondesRestantes = Math.floor((difference / 1000) % 60);
  if (dateCible > instant) {
    compteARebours.textContent =
      "C'est décembre dans " +
      joursRestants +
      " jours, " +
      heuresRestantes +
      " heures, " +
      minutesRestantes +
      " minutes et " +
      secondesRestantes +
      " secondes !";
  } else {
    compteARebours.textContent = "C'est décembre !";
  }
};
mettreAJour();
setInterval(mettreAJour, 1000);
let themeActuel = "amour";
const boutonsTheme = document.querySelectorAll("button[data-theme]");
boutonsTheme.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    boutonsTheme.forEach(function (autre) {
      autre.classList.remove("active");
    });
    bouton.classList.add("active");
    themeActuel = bouton.getAttribute("data-theme");
  });
});

const calendrier = document.getElementById("calendrier");
const messageFinal = document.getElementById("messageFinal");
const maintenant = new Date(2026,11,10);
const noel = new Date(annee, 11, 25);
const afterNoel = new Date(annee + 1, 0, 1);

// Pour le message de Noël

const dateDuJour = new Date(
  maintenant.getFullYear(),
  maintenant.getMonth(),
  maintenant.getDate(),
);
const modal = document.getElementById("modal");
const texteMessage = document.getElementById("texte-message");
const boutonFermer = document.getElementById("fermer");

const messages = {
  amour: [
    "Tu n'as pas besoin d'être parfait(e) pour être merveilleux(se). C'est aussi dans tes imperfections que réside ta beauté.",

    "Si je devais choisir un endroit où rester, je choisirais celui où ton sourire existe.",

    "N'oublie jamais que tu mérites un amour qui ne te fait pas douter de ta valeur.",

    "Parfois, un simple message peut illuminer toute une journée. Alors voici le mien : je pense à toi.",

    "Tu es cette personne qui rend certains moments ordinaires absolument inoubliables.",

    "L'amour ne se mesure pas au nombre de cadeaux, mais à la sincérité des petites attentions.",

    "Même les jours où tu ne vois pas ta propre lumière, sache qu'elle existe et qu'elle est précieuse.",

    "Je ne te promets pas des journées sans difficultés, mais j'espère être une raison supplémentaire de sourire.",

    "Il y a des personnes qu'on rencontre et qu'on oublie. Et puis il y a celles qui laissent une trace dans notre cœur.",

    "Tu mérites qu'on t'écoute, qu'on te comprenne, qu'on te respecte et qu'on te choisisse chaque jour.",

    "Si ton cœur pouvait recevoir un cadeau aujourd'hui, j'aimerais que ce soit un peu de paix et beaucoup de bonheur.",

    "Aimer, ce n'est pas seulement dire « je t'aime ». C'est aussi savoir le montrer dans les gestes les plus simples.",

    "Tu n'es pas une option, ni un second choix. Tu es une personne qui mérite une place sincère dans le cœur de quelqu'un.",

    "J'espère que tu trouveras toujours une raison de sourire, même lorsque la vie essaiera de t'en donner mille de moins.",

    "Il n'existe pas de formule magique pour rendre quelqu'un heureux. Mais parfois, être présent suffit déjà beaucoup.",

    "Ton existence compte. Ne laisse jamais quelqu'un te faire croire le contraire.",

    "Les plus belles histoires ne sont pas forcément parfaites. Elles sont celles où deux personnes apprennent à se comprendre.",

    "Je te souhaite un amour qui rassure, qui respecte tes silences et qui célèbre tes réussites.",

    "Si aujourd'hui personne ne te l'a dit, sache que tu es digne d'être aimé(e), pleinement et sincèrement.",

    "L'amour véritable ne cherche pas à changer une personne, mais à l'aider à devenir la meilleure version d'elle-même.",

    "J'espère être, pour quelqu'un, cette pensée qui fait sourire sans raison particulière.",

    "Les kilomètres, le temps et les difficultés peuvent séparer des personnes, mais les souvenirs sincères gardent une place particulière.",

    "N'attends pas une occasion spéciale pour dire à quelqu'un qu'il compte. Aujourd'hui est déjà une belle occasion.",

    "Et si le plus beau cadeau de Noël n'était pas sous le sapin, mais dans le cœur d'une personne qui pense à toi ? Joyeux Noël ! ❤️",
  ],
  anime: [
    "BLEACH ⚔️ — Imagine que ton Zanpakutō puisse prendre une forme humaine. Maintenant, imagine qu'il ait exactement ton caractère. Tu survivrais combien de temps ? 😭",

    "TOKYO REVENGERS 🏍️ — La nuit de Noël. Takemichi pensait vivre une soirée romantique avec Hina. Mais avec les membres du Toman dans les parages, même Noël peut devenir une affaire de gang. Une preuve que certaines soirées sont impossibles à oublier.",

    "NARUTO 🍥 — Naruto a passé une bonne partie de sa vie à chercher la reconnaissance des autres. Pourtant, sa plus grande force a toujours été de ne pas abandonner. Même quand tout le monde doutait de lui.",

    "DEMON SLAYER 🌸 — Tanjiro nous rappelle qu'on peut être gentil sans être faible. Même face à l'horreur, il n'a jamais complètement perdu son humanité.",

    "BLEACH 👁️ — Aizen ne se contente pas de gagner ses combats. Il te laisse parfois croire que tu avais compris la situation depuis le début. Et c'est là que tu réalises que tu étais déjà tombé dans son piège. 😭",

    "ONE PIECE 🏴‍☠️ — L'équipage du Chapeau de paille, c'est la preuve qu'une famille ne se résume pas toujours aux liens du sang. Parfois, elle se construit autour d'un rêve et de quelques compagnons complètement fous.",

    "JUJUTSU KAISEN 👊 — Gojo peut être tellement insupportable qu'on en oublierait presque qu'il est terrifiant au combat. Le genre de professeur qui te fait rire avant de te rappeler qu'il est le plus fort.",

    "TOKYO REVENGERS 🥀 — Mikey peut sourire comme un enfant, manger tranquillement et sembler parfaitement inoffensif. Puis quelqu'un provoque ses amis. Et là, tu comprends que tu aurais mieux fait de rester chez toi.",

    "DRAGON BALL 🐉 — Goku peut être en plein combat pour sauver l'univers et penser à manger cinq minutes plus tard. Les priorités, mes amis. Les priorités. 😭",

    "HUNTER × HUNTER 🎴 — Gon nous apprend qu'un sourire innocent ne signifie pas forcément un cœur incapable de noirceur. Certains personnages ont des évolutions qui te laissent sans voix.",

    "NARUTO 🌙 — Itachi. Un personnage qu'on a longtemps pu juger sans connaître toute son histoire. Parfois, comprendre quelqu'un change complètement notre regard sur ses actes.",

    "DEMON SLAYER ❄️ — Doma est le genre de personnage qui te sourit alors que tu devrais probablement courir dans la direction opposée. Très loin. 😭",

    "ATTACK ON TITAN 🧱 — Au début, on croyait regarder une histoire de survie contre des titans. Puis les révélations se sont enchaînées et notre cerveau a demandé une pause.",

    "BLEACH 🌌 — Kyōka Suigetsu : imagine ne plus pouvoir faire confiance à tes propres yeux. Maintenant, imagine que ton meilleur ami possède ce pouvoir. Tu ne le croirais même plus quand il te dirait bonjour.",

    "SPY × FAMILY 🕵️ — Une famille composée d'un espion, d'une tueuse et d'une petite fille télépathe. Et pourtant, c'est probablement l'une des familles les plus attachantes de l'animation.",

    "FULLMETAL ALCHEMIST ⚙️ — Deux frères prêts à tout pour réparer une erreur du passé. Une histoire qui rappelle que certaines choses ont un prix qu'on ne devrait jamais sous-estimer.",

    "TOKYO REVENGERS 🏍️ — Draken et Mikey : l'un essaie de garder les pieds sur terre, l'autre semble parfois vivre dans une autre dimension. Ensemble, ils forment un duo inoubliable.",

    "DEATH NOTE 📓 — Tu trouves un carnet capable de tuer quelqu'un en écrivant son nom. Première réaction : la panique. Deuxième réaction : espérer que personne ne connaisse ton écriture. 😭",

    "NARUTO 🍃 — Kakashi est arrivé en retard tellement souvent qu'on pourrait croire que son véritable pouvoir est de manipuler les horaires.",

    "ONE PUNCH MAN 👊 — Saitama peut vaincre presque n'importe qui avec un seul coup. Son véritable ennemi ? Les promotions au supermarché qu'il risque de manquer.",

    "HIGURASHI 🔪 — Un village paisible, des amis adorables, une ambiance chaleureuse… Et puis quelque chose ne va plus du tout. Ne te fie jamais trop longtemps à l'apparence tranquille d'un village dans un anime d'horreur.",

    "DEMON SLAYER 🌊 — Rengoku nous rappelle qu'une personne peut marquer profondément les autres, même lorsque son passage dans leur vie est trop court.",

    "BLEACH 🗡️ — Le Bankai, c'est déjà impressionnant. Mais le moment où un personnage prononce son nom et révèle enfin sa véritable puissance… Voilà pourquoi on aime les animés !",

    "JOYEUX NOËL, OTAKU ! 🎄 — Que ton réveillon soit aussi mémorable qu'un épisode final réussi, que tes cadeaux soient légendaires et que personne ne te spoil ton anime préféré. Et surtout, n'oublie jamais : le prochain épisode t'attend ! ❤️",
  ],
  minuit: [
    "01 DÉCEMBRE | LA LETTRE\n\nCe matin, une enveloppe rouge attendait devant ta porte. Aucun timbre, aucune adresse d'expéditeur. Seulement ton prénom, écrit à la main. À l'intérieur, une phrase : « Cette année, Noël ne sera pas comme les autres. »",

    "02 DÉCEMBRE | LE PREMIER AVERTISSEMENT\n\nUne deuxième lettre est arrivée. Cette fois, elle contenait une vieille photographie de ta maison. Elle semblait avoir été prise il y a plusieurs décennies. Pourtant, quelque chose clochait : une silhouette se tenait derrière la fenêtre de ta chambre.",

    "03 DÉCEMBRE | LE VISITEUR\n\nÀ 23 h 47, quelqu'un a sonné. Trois coups, toujours espacés de la même manière. Tu as regardé par la fenêtre. Personne. Mais sur le paillasson, une petite boîte rouge venait d'apparaître.",

    "04 DÉCEMBRE | LE CADEAU\n\nLa boîte contenait une clochette argentée. Dès que tu l'as secouée, toutes les lumières de la maison se sont éteintes. Dans le noir, une voix d'enfant a murmuré : « Tu l'as enfin retrouvée. »",

    "05 DÉCEMBRE | LE GRENIER\n\nTu as fouillé le grenier à la recherche d'une explication. Parmi les vieux cartons, tu as découvert un sapin miniature, couvert de poussière. Une petite inscription était gravée sur son socle : « Ne l'allume jamais avant minuit. »",

    "06 DÉCEMBRE | LA MÉLODIE\n\nCette nuit, une mélodie de Noël a commencé à jouer dans la maison. Tu as reconnu la chanson, mais quelque chose était différent. Elle semblait provenir d'une vieille boîte à musique que personne n'avait touchée depuis des années.",

    "07 DÉCEMBRE | LE JOURNAL\n\nDerrière la boîte à musique se trouvait un journal intime. Sur la première page, une date : 24 décembre 1986. La dernière phrase disait : « Il est revenu cette année. Cette fois, il connaît mon nom. »",

    "08 DÉCEMBRE | LES EMPREINTES\n\nAu réveil, des empreintes de pas traversaient le salon. Elles partaient de la cheminée et s'arrêtaient juste devant ta chambre. Tu vis alors quelque chose d'encore plus étrange : les traces étaient mouillées, comme si quelqu'un venait de marcher dans la neige.",

    "09 DÉCEMBRE | L'ENFANT\n\nEn regardant une ancienne photographie de famille, tu as remarqué un petit garçon que personne ne semblait connaître. Il portait exactement la même clochette que celle retrouvée dans la boîte rouge. Au dos de la photo : « À Élias, notre dernier Noël ensemble. »",

    "10 DÉCEMBRE | LE PRÉNOM OUBLIÉ\n\nTu as interrogé ta famille sur Élias. Le silence fut immédiat. Puis quelqu'un a répondu : « Ne prononce plus jamais ce prénom. » Avant de quitter la pièce, cette personne a ajouté : « Il n'aurait jamais dû revenir. »",

    "11 DÉCEMBRE | LA FENÊTRE\n\nÀ 00 h 12, tu as entendu trois coups contre la fenêtre. Tu habites pourtant au deuxième étage. Derrière la vitre, un petit garçon souriait. Il tenait une pancarte : « Tu as oublié notre promesse. »",

    "12 DÉCEMBRE | LE SOUVENIR\n\nTu as fait un rêve étrange. Tu étais enfant, assis devant un sapin avec un garçon qui te ressemblait beaucoup. Vous ouvriez des cadeaux et riiez ensemble. Avant de te réveiller, il t'a demandé : « Tu viendras me chercher cette année ? »",

    "13 DÉCEMBRE | LA CHAMBRE FERMÉE\n\nDans la maison, une porte que tu n'avais jamais remarquée était entrouverte. Derrière, une petite chambre décorée pour Noël. Deux assiettes sur une table, deux cadeaux sous un sapin et un calendrier arrêté au 24 décembre 1986.",

    "14 DÉCEMBRE | LE MESSAGE\n\nSur le miroir de la chambre, une phrase était écrite avec de la buée : « Tu as grandi, mais moi, je t'attends toujours. » En dessous, quelqu'un avait dessiné deux petits bonshommes se tenant la main.",

    "15 DÉCEMBRE | L'ENREGISTREMENT\n\nTu as trouvé une vieille cassette audio. Après quelques grésillements, une voix familière s'est fait entendre : « Si tu écoutes ceci, c'est que j'ai échoué à te retrouver. Pardonne-moi. Je voulais simplement passer Noël avec toi. »",

    "16 DÉCEMBRE | LA VÉRITÉ COMMENCE\n\nTu as découvert les archives de ta famille. Élias était ton frère jumeau. Il avait disparu un soir de Noël, alors que vous étiez encore enfants. Personne n'avait jamais compris ce qui lui était arrivé.",

    "17 DÉCEMBRE | LE SAPIN\n\nTu as décidé de remonter le vieux sapin du grenier. En le dépoussiérant, tu as remarqué une petite étoile au sommet. À l'intérieur, un papier plié : « Quand les douze cloches sonneront, ouvre la porte. »",

    "18 DÉCEMBRE | LE DOUZIÈME COUP\n\nCette nuit, tu as entendu onze coups de cloche. Au douzième, la porte de la chambre s'est ouverte toute seule. Une odeur de cannelle et de chocolat chaud s'est répandue dans le couloir. Quelqu'un venait de rentrer.",

    "19 DÉCEMBRE | LE DÎNER\n\nDeux assiettes étaient dressées sur la table. Deux verres de lait, deux biscuits en forme d'étoile. Et sur ta chaise, un dessin d'enfant : deux frères devant un sapin. En dessous, ces mots : « Comme avant ? »",

    "20 DÉCEMBRE | LE DERNIER AVERTISSEMENT\n\nUne dernière lettre t'attendait. « Tu peux le revoir. Mais souviens-toi : il ne faut pas lui demander pourquoi il est parti. Il ne faut pas lui demander ce qu'il est devenu. Et surtout, ne le laisse pas repartir seul. »",

    "21 DÉCEMBRE | LE RÊVE\n\nCette fois, tu as vu toute la scène. Deux enfants jouaient près du sapin. Une porte s'était ouverte. Une lumière blanche avait envahi la pièce. L'un des enfants avait disparu. L'autre avait continué à attendre.",

    "22 DÉCEMBRE | LA PROMESSE\n\nTu as retrouvé un petit bracelet dans la chambre. Deux prénoms y étaient gravés : le tien et celui d'Élias. Tu te souvenais maintenant. Ce soir-là, tu lui avais promis de ne jamais fêter Noël sans lui.",

    "23 DÉCEMBRE | LA VEILLE\n\nIl ne reste qu'un jour. La maison est décorée, les lumières scintillent et le vieux sapin est enfin allumé. À minuit, quelqu'un frappe à la porte. Une petite voix demande : « Cette fois, tu m'ouvriras ? »",

    "24 DÉCEMBRE | MINUIT\n\nTu ouvres la porte. Élias est là. Il n'a pas vieilli d'un seul jour. Il sourit, les yeux brillants, et te tend un petit cadeau. À l'intérieur, une photographie : deux enfants devant un sapin, heureux, ensemble.\n\nTu comprends enfin. Élias n'était pas revenu pour te faire peur. Il était revenu pour tenir une promesse.\n\nTu le prends dans tes bras. Dehors, la neige tombe doucement.\n\nSur la dernière page du journal, une phrase apparaît : « Certaines personnes ne demandent pas grand-chose pour Noël. Seulement de ne pas être oubliées. »\n\nJoyeux Noël. ❤️",
  ],
};
for (let i = 1; i <= 24; i++) {
  const caseJour = document.createElement("div");

  caseJour.className = "caseJour";
  caseJour.textContent = i;
  calendrier.appendChild(caseJour);

  let dateCase = new Date(annee, 11, i);
  let estOuverte = maintenant >= dateCase;

  if (!estOuverte) {
    caseJour.classList.add("verrouillage");
  }
  caseJour.addEventListener("click", function () {
    modal.classList.remove("mode-minuit", "mode-anime", "mode-amour");
    modal.classList.add("mode-" + themeActuel);

    let message;
    if (estOuverte) {
      message =
        messages[themeActuel]?.[i - 1] ||
        "Un message t'attend, reviens bientôt.";
    } else {
      message = "Patience ! Cette case s'ouvrira le " + i + " décembre.";
    }

    texteMessage.textContent = message;
    modal.classList.add("visible");
  });
}
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("visible");
  }
});
boutonFermer.addEventListener("click", function () {
  modal.classList.remove("visible");
});
if (dateDuJour.getTime() === noel.getTime()) {
  messageFinal.textContent = "Joyeux Noël ! 🎄";
} else if (dateDuJour > noel && dateDuJour < afterNoel) {
  messageFinal.textContent =
    "Partagez de beaux moments avec vos proches et profitez de la magie de Noël ! 🎁";
} else if (dateDuJour >= afterNoel) {
  messageFinal.textContent =
    "Bonne année ! 🎉 Merci d'avoir partagé notre calendrier de l'Avent. Nous espérons que Noël vous a apporté beaucoup de bonheur. ❤️ Rendez-vous bientôt pour nos surprises de la Saint-Valentin ! 💌";
} else {
  messageFinal.textContent = "C'est bientôt Noël ! 🎅";
}

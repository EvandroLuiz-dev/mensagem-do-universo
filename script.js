document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("pagina-visivel");
});

function navegarSuave(url) {

    document.body.classList.remove("pagina-visivel");
    document.body.classList.add("pagina-saindo");

    setTimeout(() => {
        window.location.href = url;
    }, 450);
}
const parametros = new URLSearchParams(window.location.search);

const signo = parametros.get("signo");

const botoesSignos = document.querySelectorAll(".signo");

botoesSignos.forEach((botao) => {
    botao.addEventListener("click", () => {
        const signo = [...botao.classList]
            .find((classe) => classe.startsWith("signo-"))
            .replace("signo-", "");

        window.location.href = `seguir.html?signo=${signo}`;
    });
});

const nomesSignos = {
    aries: "Áries",
    touro: "Touro",
    gemeos: "Gêmeos",
    cancer: "Câncer",
    leao: "Leão",
    virgem: "Virgem",
    libra: "Libra",
    escorpiao: "Escorpião",
    sagitario: "Sagitário",
    capricornio: "Capricórnio",
    aquario: "Aquário",
    peixes: "Peixes"
};

console.log("Signo escolhido:", signo);

const nomeSigno = document.querySelector("#nome-signo");

if (nomeSigno) {
    nomeSigno.textContent = nomesSignos[signo];
}



const mensagensSignos = {
    aries: [
        "Existe uma força dentro de você pedindo movimento. Não espere que todas as condições sejam perfeitas para começar aquilo que seu coração já decidiu.",
        "Sua coragem cresce quando você confia na própria iniciativa. Dê o primeiro passo, mesmo que o caminho ainda não esteja completamente claro.",
        "Nem toda batalha merece sua energia. Escolha com sabedoria aquilo que realmente vale a pena conquistar.",
        "Você tem uma chama difícil de apagar. Use essa intensidade para abrir caminhos, não para se cobrar por chegar antes de todo mundo.",
        "Uma nova oportunidade pode surgir quando você menos espera. Esteja atento e não tenha medo de dizer sim ao que desperta entusiasmo.",
        "Sua independência é uma força, mas permitir que alguém caminhe ao seu lado também pode trazer descobertas importantes.",
        "Não confunda pressa com coragem. Algumas decisões ficam ainda mais poderosas quando você dá a si mesmo tempo para pensar.",
        "Existe algo que você deseja há algum tempo e talvez esteja esperando um sinal. Talvez o sinal seja justamente a vontade que continua dentro de você.",
        "O universo convida você a começar de novo sem carregar o peso de antigas tentativas. Um recomeço não apaga sua experiência, ele usa tudo o que você aprendeu.",
        "Sua espontaneidade pode abrir portas inesperadas. Permita-se experimentar algo diferente sem precisar saber exatamente onde isso vai levar.",
        "Nem sempre vencer significa chegar primeiro. Às vezes, a verdadeira conquista está em permanecer fiel ao que você acredita.",
        "Uma mudança pode despertar uma versão ainda mais corajosa de você. Não fuja do desconhecido apenas porque ele ainda não tem forma.",
        "Sua chama precisa de direção. Escolha um desejo, coloque intenção nele e permita que sua coragem faça o restante acontecer."
    ],

    touro: [
        "Nem tudo precisa acontecer rapidamente. Sua força está em construir com calma aquilo que realmente deseja, sabendo que o que é sólido leva tempo para florescer.",
        "Você tem uma capacidade especial de encontrar beleza nas coisas simples. Hoje, permita-se desacelerar e perceber aquilo que normalmente passa despercebido.",
        "Segurança é importante para você, mas não permita que o medo de perder aquilo que conquistou impeça você de viver novas experiências.",
        "Sua determinação pode levar você muito longe. Quando decide seguir um caminho, confie no seu ritmo e não se compare com quem escolheu uma estrada diferente.",
        "Existe valor em reconhecer tudo aquilo que você já construiu. Antes de buscar o próximo objetivo, olhe para trás e perceba o quanto já avançou.",
        "Algumas oportunidades chegam devagar, quase sem chamar atenção. Observe com cuidado: aquilo que parece pequeno hoje pode se tornar algo muito importante amanhã.",
        "Você não precisa provar seu valor o tempo todo. Sua presença, sua lealdade e sua capacidade de permanecer firme já dizem muito sobre quem você é.",
        "O prazer também pode ser uma forma de conexão. Permita-se aproveitar uma boa conversa, uma música, um lugar tranquilo ou simplesmente alguns minutos de paz.",
        "Quando algo realmente importa para você, sua persistência se torna uma grande força. Continue, mesmo que os resultados ainda não sejam visíveis.",
        "Sua sensibilidade aos detalhes pode revelar aquilo que outras pessoas não percebem. Confie no que seus sentidos estão tentando mostrar.",
        "Talvez seja hora de deixar de carregar algo apenas porque você se acostumou com aquilo. Permanecer firme é uma virtude, mas saber soltar também é.",
        "O universo lembra você de uma coisa importante: não tenha pressa para colher aquilo que ainda está criando raízes. Continue cuidando do que importa e confie no tempo."
    ],

    gemeos: [
        "Sua curiosidade pode levar você a uma descoberta inesperada. Permita-se fazer perguntas e seguir aquilo que desperta sua atenção.",
        "Uma conversa pode mudar completamente a forma como você enxerga determinada situação. Escute tanto quanto fala e deixe novas ideias entrarem.",
        "Sua mente precisa de movimento. Experimente algo diferente, aprenda algo novo ou simplesmente permita que sua imaginação explore outros caminhos.",
        "Nem toda dúvida precisa ser resolvida imediatamente. Algumas respostas aparecem naturalmente quando você deixa a mente respirar.",
        "Você pode estar carregando ideias demais ao mesmo tempo. Escolha aquela que mais desperta seu entusiasmo e dê a ela espaço para crescer.",
        "Uma mensagem, encontro ou conversa inesperada pode trazer uma nova perspectiva. Esteja aberto ao acaso.",
        "Sua capacidade de enxergar diferentes lados de uma situação é um presente. Use essa visão para compreender, não para se perder em indecisões.",
        "Há momentos em que mudar de ideia não significa falta de firmeza. Significa que você teve coragem de aprender algo novo.",
        "Sua comunicação pode tocar alguém mais profundamente do que você imagina. Escolha suas palavras com intenção.",
        "Não permita que a necessidade de novidade faça você abandonar algo que ainda está florescendo. Algumas experiências precisam de continuidade para revelar seu verdadeiro potencial.",
        "Uma ideia aparentemente pequena pode se transformar em algo importante. Anote aquilo que surgir hoje, mesmo que pareça estranho no começo.",
        "Seu humor e sua leveza podem iluminar ambientes. Não subestime o poder que uma palavra gentil ou uma conversa sincera pode ter.",
        "O universo convida você a diminuir o excesso de pensamentos e prestar atenção ao que realmente desperta seu coração.",
        "Você não precisa escolher entre todas as possibilidades agora. Observe, experimente e deixe o caminho se revelar aos poucos.",
        "Sua mente é inquieta porque está sempre buscando novas possibilidades. Hoje, permita que essa inquietação se transforme em criatividade."
    ],

    cancer: [
        "Sua sensibilidade percebe aquilo que muitas pessoas não conseguem enxergar. Confie nela, mas lembre-se de proteger também a sua própria energia.",
        "O passado pode trazer lembranças importantes, mas ele não precisa decidir o seu futuro. Leve consigo o aprendizado e deixe o restante partir.",
        "Seu cuidado com quem ama é uma das suas maiores qualidades. Apenas não se esqueça de oferecer a si mesmo a mesma atenção.",
        "Você pode estar precisando de um pouco mais de recolhimento. Nem todo silêncio é solidão; às vezes ele é exatamente onde a alma encontra descanso.",
        "Sua intuição pode estar tentando mostrar que algo precisa de atenção. Observe seus sentimentos antes de ignorá-los.",
        "Existe um vínculo que merece ser cuidado com mais carinho. Pequenos gestos podem reconstruir uma proximidade que parecia distante.",
        "Não carregue sozinho aquilo que poderia ser compartilhado. Permitir que alguém cuide de você também é uma forma de confiança.",
        "O universo convida você a criar um espaço onde possa se sentir seguro para ser exatamente quem é.",
        "Algumas respostas chegam quando você para de lutar contra o que sente. Aceitar uma emoção não significa permitir que ela controle você.",
        "Uma fase emocionalmente mais leve pode estar se aproximando. Dê espaço para novas experiências sem exigir que elas sejam perfeitas.",
        "Você não precisa esconder sua delicadeza. Existe coragem em permanecer sensível em um mundo que muitas vezes pede que você endureça."
    ],

    leao: [
        "Existe uma luz própria em você que não precisa competir com ninguém. Permita que ela apareça naturalmente.",
        "Sua presença pode inspirar mais do que você imagina. Use sua força para encorajar aqueles que também estão tentando encontrar o próprio caminho.",
        "Você merece reconhecimento, mas não dependa dele para lembrar do seu valor. Saiba enxergar sua própria grandeza.",
        "Um novo palco pode surgir diante de você. Não tenha medo de ocupar espaço quando aquilo que você tem a oferecer merece ser visto.",
        "Seu coração gosta de intensidade e presença. Não aceite relações onde precise diminuir sua luz para que outra pessoa se sinta confortável.",
        "Sua generosidade pode transformar o dia de alguém. Um gesto sincero pode ter mais impacto do que qualquer grande demonstração.",
        "Você está entrando em um momento favorável para mostrar um talento que talvez tenha deixado de lado.",
        "Nem todo reconhecimento chega imediatamente. Continue desenvolvendo aquilo que ama, mesmo quando ninguém estiver olhando.",
        "Sua confiança pode crescer quando você percebe que não precisa ser perfeito para ser admirado.",
        "Uma oportunidade pode colocar você em evidência. Receba essa atenção com humildade e use-a para construir algo significativo.",
    ],

    virgem: [
        "Sua atenção aos detalhes pode revelar uma solução que ninguém mais percebeu. Confie nessa capacidade, mas não permita que ela se transforme em cobrança.",
        "Nem tudo precisa estar perfeito para começar. Algumas das melhores experiências nascem justamente enquanto aprendemos.",
        "Seu cuidado com os outros é valioso, mas você também merece receber o mesmo cuidado que oferece.",
        "Uma pequena mudança na rotina pode trazer uma sensação inesperada de renovação. Experimente algo simples e diferente.",
        "Existe beleza na simplicidade. Nem sempre é necessário acrescentar mais; às vezes, retirar excessos revela o que realmente importa.",
        "Sua dedicação pode estar construindo resultados que ainda não consegue enxergar. Continue, mas lembre-se de reconhecer seu próprio esforço.",
        "Uma decisão ficará mais clara quando você separar aquilo que é necessidade daquilo que é apenas preocupação.",
        "Sua inteligência prática é uma grande aliada. Confie naquilo que você já aprendeu através da experiência.",
        "Permita-se descansar sem sentir que está desperdiçando tempo. Até a terra precisa de períodos de repouso para voltar a florescer.",
        "Você está aprendendo que autocuidado também significa aceitar suas imperfeições. Não exija de si aquilo que jamais exigiria de alguém que ama.",
        "O universo convida você a trocar um pouco do controle pela confiança. Nem tudo precisa ser planejado para dar certo."
    ],

    libra: [
        "O equilíbrio que você procura começa quando você também considera as próprias necessidades. Não deixe sua vontade sempre por último.",
        "Uma conversa sincera pode restaurar uma harmonia que parecia distante. Escolha a honestidade sem abrir mão da delicadeza.",
        "Você tem facilidade para enxergar diferentes perspectivas. Use esse talento para aproximar pessoas, mas não se perca tentando agradar a todos.",
        "A beleza que você percebe ao seu redor também existe na sua própria trajetória. Observe mais aquilo que já floresceu dentro de você.",
        "Uma escolha pode parecer difícil porque você está tentando encontrar a opção perfeita. Talvez seja suficiente encontrar aquela que traz paz.",
        "Relacionamentos precisam de reciprocidade. Não confunda manter a harmonia com aceitar sempre menos do que você merece.",
        "Seu charme natural pode abrir portas, mas é sua autenticidade que fará as pessoas permanecerem.",
        "Existe uma decisão que talvez você esteja adiando para não decepcionar alguém. Lembre-se de que sua felicidade também merece consideração.",
        "O universo convida você a encontrar beleza no equilíbrio entre dar e receber.",
        "Você não precisa resolver todos os conflitos ao seu redor. Algumas pessoas precisam encontrar suas próprias respostas.",
        "Seu senso de justiça pode estar pedindo uma atitude. Fale quando sentir que algo importante precisa ser colocado em equilíbrio.",
        "A paz verdadeira não nasce de evitar todos os conflitos, mas de saber quais batalhas merecem sua energia.",
        "Hoje, escolha aquilo que traz leveza sem ignorar aquilo que precisa ser enfrentado.",
    ],

    escorpiao: [
        "Sua intensidade é uma das suas maiores forças. Quando você direciona essa energia para aquilo que realmente importa, consegue ir muito mais longe do que imagina.",
        "Sua intuição pode perceber aquilo que as palavras não revelam. Observe os detalhes, os silêncios e aquilo que seu coração sente antes de tomar uma decisão.",
        "Nem todo mundo precisa conhecer tudo o que existe dentro de você. Preserve seu mistério, mas permita que pessoas verdadeiras atravessem suas barreiras.",
        "Alguns ciclos precisam terminar para que uma nova versão sua possa nascer. Não tenha medo de deixar para trás aquilo que já cumpriu seu propósito.",
        "Existe uma força silenciosa dentro de você que aparece justamente nos momentos mais difíceis. Confie na sua capacidade de se reconstruir quantas vezes forem necessárias.",
        "Sua paixão pode transformar sonhos em realidade quando encontra um propósito. Escolha com cuidado aquilo que merece toda a sua dedicação.",
        "Nem toda batalha precisa ser enfrentada. Às vezes, a verdadeira força está em saber quando recuar, observar e esperar o momento certo.",
        "Confiança não precisa ser entregue de uma vez. Permita que as pessoas mostrem, através de atitudes, quem realmente merece conhecer o seu lado mais profundo.",
        "Você pode estar percebendo mudanças antes que elas se tornem visíveis. Confie na sua percepção, mas permita que o tempo confirme aquilo que sua intuição já suspeita.",
        "Existe poder em transformar uma ferida em aprendizado. O que um dia pareceu uma fraqueza pode se tornar justamente a fonte da sua maior força.",
        "Sua natureza intensa pode fazer você querer respostas imediatas. Hoje, experimente deixar algumas coisas acontecerem naturalmente. Nem todo mistério precisa ser desvendado agora.",
        "Um sentimento profundo pode estar pedindo sua atenção. Em vez de escondê-lo ou tentar controlá-lo, permita-se compreender o que ele está tentando revelar.",
        "O momento pede renascimento. Deixe morrer aquilo que já não representa quem você é e abra espaço para uma versão mais consciente, livre e verdadeira de si."
    ],

    sagitario: [
        "Existe um horizonte novo chamando sua atenção. Não tenha medo de explorar aquilo que desperta sua curiosidade.",
        "Sua liberdade é importante, mas liberdade também significa escolher conscientemente onde deseja permanecer.",
        "Uma viagem pode acontecer sem que você precise sair do lugar. Uma nova ideia, livro ou conversa pode expandir completamente sua visão de mundo.",
        "Você aprende melhor quando experimenta. Permita-se viver algo diferente em vez de apenas imaginar como seria.",
        "Seu entusiasmo pode transformar uma experiência comum em uma grande aventura. Compartilhe essa energia com quem caminha ao seu lado.",
        "Nem todo caminho precisa ter um destino definido. Algumas experiências existem simplesmente para mostrar novas possibilidades.",
        "Uma verdade que você procura pode aparecer através de uma experiência inesperada. Mantenha a mente aberta.",
        "Sua sinceridade é uma força, mas lembre-se de que verdade e sensibilidade podem caminhar juntas.",
        "O universo convida você a deixar para trás uma limitação que já não combina com a pessoa que está se tornando.",
        "Existe algo novo que você deseja aprender. Siga essa curiosidade; ela pode levar você muito mais longe do que imagina.",
        "Não permita que o medo de se comprometer faça você abandonar algo que realmente merece sua presença.",
        "Sua esperança pode ser uma bússola em momentos de incerteza. Continue olhando para frente, mesmo quando o caminho ainda estiver se formando.",
        "Uma mudança de perspectiva pode resolver aquilo que parecia impossível. Às vezes, não é o caminho que precisa mudar, mas a maneira de enxergá-lo.",
        "Você nasceu para experimentar a vida, não apenas observá-la. Dê espaço para espontaneidade e descoberta.",
        "O próximo capítulo pode ser maior do que aquilo que você deixou para trás. Confie na estrada e permita que o desconhecido também ensine você."
    ],

    capricornio: [
        "Tudo aquilo que você constrói com consistência tende a ganhar raízes profundas. Continue, mesmo quando os resultados ainda parecerem distantes.",
        "Sua disciplina é uma das suas maiores forças, mas lembre-se de que descansar também faz parte de uma jornada de sucesso.",
        "Você não precisa carregar todas as responsabilidades sozinho. Permitir ajuda não diminui sua força.",
        "Existe uma meta que merece sua atenção. Divida o caminho em pequenos passos e confie na constância.",
        "Nem todo progresso é visível. Algumas das maiores mudanças acontecem silenciosamente, enquanto você continua fazendo sua parte.",
        "Sua ambição pode levar você longe quando está alinhada com aquilo que realmente deseja, e não apenas com aquilo que esperam de você.",
        "O universo lembra você de celebrar pequenas conquistas. Elas também fazem parte da montanha que você está subindo.",
        "Uma oportunidade pode exigir paciência antes de mostrar seu verdadeiro potencial. Não abandone algo valioso apenas porque ainda está no começo.",
        "Você sabe construir lentamente aquilo que muitos desejam alcançar rapidamente. Confie no seu ritmo.",
        "Existe uma diferença entre responsabilidade e peso. Pergunte-se quais obrigações realmente pertencem a você.",
        "Seu futuro não precisa ser decidido de uma vez. Continue construindo e permita que novas possibilidades apareçam ao longo do caminho.",
        "Uma fase de crescimento pode exigir que você saia de antigas estruturas. Nem toda tradição precisa permanecer apenas porque sempre esteve presente.",
        "Você está mais perto do que imagina de alcançar algo pelo qual trabalhou muito. Continue firme, mas não se esqueça de olhar para tudo o que já conquistou."
    ],

    aquario: [
        "Uma ideia diferente pode ser exatamente aquilo que você precisava. Não descarte algo apenas porque ainda não faz sentido para os outros.",
        "Sua maneira única de enxergar o mundo é uma força. Preserve sua autenticidade mesmo quando ela fizer você seguir por um caminho diferente.",
        "Uma conversa pode despertar uma ideia que muda seus próximos passos. Permita que novas perspectivas desafiem aquilo que você acreditava saber.",
        "O futuro começa nas pequenas escolhas do presente. Use sua criatividade para construir algo que represente realmente quem você é.",
        "Você não precisa seguir uma regra apenas porque todos seguem. Questione, compreenda e escolha conscientemente.",
        "Existe valor em pertencer sem perder a individualidade. As conexões mais verdadeiras permitem que você continue sendo você.",
        "Uma ideia que parecia distante pode começar a ganhar forma. Dê atenção àquilo que sua imaginação insiste em mostrar.",
        "Sua mente busca liberdade, mas seu coração também precisa de vínculos. Encontre pessoas que respeitem seu espaço e valorizem sua presença.",
        "Nem toda mudança precisa ser explicada para os outros. Algumas decisões fazem sentido primeiro dentro de você.",
        "Seu olhar diferente pode ajudar alguém a enxergar uma saída onde só existia confusão.",
        "Você pode estar pronto para abandonar uma ideia antiga sobre quem deveria ser. Dê espaço para uma versão mais autêntica de você.",
        "Uma nova visão pode abrir um caminho completamente diferente. Confie na sua capacidade de imaginar aquilo que ainda não existe."
    ],

    peixes: [
        "Sua sensibilidade pode captar nuances que passam despercebidas para outras pessoas. Confie nessa percepção, mas proteja sua energia.",
        "Um sonho que parecia distante pode estar tentando mostrar uma direção. Preste atenção ao que desperta emoção e inspiração dentro de você.",
        "Nem tudo precisa ser explicado pela razão. Algumas respostas chegam através da intuição, dos sentimentos e daqueles pequenos sinais que aparecem pelo caminho.",
        "Sua empatia é um presente, mas você não precisa carregar as emoções de todos ao seu redor.",
        "Seu coração pode estar pedindo silêncio. Afaste-se por alguns instantes do excesso de estímulos e escute aquilo que existe dentro de você.",
        "Você não precisa transformar todos os seus sonhos em planos imediatamente. Alguns precisam primeiro existir como inspiração.",
        "Sua delicadeza não é fraqueza. Existe muita coragem em continuar sentindo profundamente sem permitir que o mundo endureça seu coração.",
        "Talvez você esteja procurando respostas muito longe. Às vezes, aquilo que precisa ser compreendido já está sendo sentido dentro de você.",
        "O universo convida você a equilibrar sonho e realidade. Imagine novos caminhos, mas dê também pequenos passos para aproximá-los.",
        "Uma fase mais intuitiva se aproxima. Observe sonhos, coincidências e sentimentos recorrentes, mas permita que o tempo revele seus significados.",
        "Existe uma parte sua pronta para recomeçar. Deixe a água levar aquilo que pesa e siga em direção ao que traz paz."
    ]
};

const mensagemSigno = document.querySelector("#mensagem-signo");

const mensagens = mensagensSignos[signo];

const mensagemAleatoria =
    mensagens[Math.floor(Math.random() * mensagens.length)];

mensagemSigno.textContent = mensagemAleatoria;

const iconesSignos = {
    aries: "assets/icons/aries.svg",
    touro: "assets/icons/taurus.svg",
    gemeos: "assets/icons/gemini.svg",
    cancer: "assets/icons/cancer.svg",
    leao: "assets/icons/leo.svg",
    virgem: "assets/icons/virgo.svg",
    libra: "assets/icons/libra.svg",
    escorpiao: "assets/icons/scorpio.svg",
    sagitario: "assets/icons/sagittarius.svg",
    capricornio: "assets/icons/capricorn.svg",
    aquario: "assets/icons/aquarius.svg",
    peixes: "assets/icons/pisces.svg"
};

const iconeSigno = document.querySelector("#icone-signo");

if (iconeSigno) {
    iconeSigno.src = iconesSignos[signo];
    iconeSigno.alt = nomesSignos[signo];

    console.log("Signo:", signo);
console.log("SVG:", iconesSignos[signo]);
}





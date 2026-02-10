(function() {
    const display = document.getElementById("minhaFrase");
    const conjuntoFrases =[
        {texto:"Com grandes poderes vem grandes responsabilidades.", autor: "Tio Ben"},
        {texto:"Amar o que você faz é o segredo de tudo.", autor: "Julia Roberts"},
        {texto:"Vencer sem correr riscos, é triunfar sem glórias!", autor:"Ayrton Senna"},
        {texto:"A persistência é o caminho do êxito.", autor:"Charles Chaplin"},
        {texto:"Sempre há limites. Eu não conheço os meus.", autor:"Usain Bolt"},
        {texto:"Seja a mudança que você quer ver no mundo.", autor:"Mahatma Gandhi"},
        {texto:" O sucesso é cair nove vezes e levantar-se outras dez.", autor:"Jon Bon Jovi"},
        {texto:"O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.", autor:"Henry Ford"},
        {texto:"Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.", autor:"Friedrich Nietzsche"},
        {texto:"O fracasso é o tempero que dá sabor ao sucesso.", autor:"Truman Capote"},
        {texto:"Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.", autor:"Charlie Brown Jr."},
        {texto:"O caminho da sabedoria é não ter medo de errar.", autor:"Paulo Coelho"},
        {texto:"Todos estamos matriculados na escola da vida, onde o mestre é o tempo.", autor:"Cora Coralina"},
        {texto:"Sempre parece impossível até que seja feito.", autor:"Nelson Mandela"},
        {texto:"Talento é 1% inspiração e 99% transpiração.", autor:"Thomas Edison"},
        {texto:"Na vida, não existe nada a temer, apenas a compreender.", autor:"Marie Curie"},
        {texto:"O que sabemos é uma gota, o que ignoramos é um oceano.", autor:"Isaac Newton"},
        {texto:"Viver é enfrentar um problema atraś do outro. O modo como você o encara é que faz a diferença.",autor:"Benjamin Franklin"},
        {texto:"Em algum lugar, algo incrível está esperando para ser conhecido.", autor:"Carl Sagan"}
    ];

    if(display) {
        const indiceAleatorio = Math.floor(Math.random() * conjuntoFrases.length);
        const sorteada = conjuntoFrases[indiceAleatorio];
        display.innerHTML = `
            <span class="texto-citacao">${sorteada.texto}</span>
            <span class="autor-citacao">${sorteada.autor}</span>
        `;
    }
    
})();

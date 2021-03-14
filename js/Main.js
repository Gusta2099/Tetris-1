//recupera o elemento
const canvas = document.getElementById('painel');
//obtem o contexto 2d
const ctx = canvas.getContext('2d');

//Calcula o tamanho do elemento canvas
ctx.canvas.width = COLUNA * TAM_BLOCO;
ctx.canvas.height = LINHA * TAM_BLOCO;

ctx.scale(TAM_BLOCO,TAM_BLOCO);

let painel = new Painel();

function play() {
    painel.reset();
    let peca = new Peca(ctx);
    peca.desenho();

    painel.peca = peca;
    console.table(painel.grid);

}
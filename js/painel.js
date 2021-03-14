class Painel {

//Reinicia o painel ao iniciar o jogo
reset() {
    this.grid = this.getPainelVazio();
}

//retorna a matriz preenchida com zeros
getPainelVazio() {
    return Array.from(
        {length: LINHA}, () => Array(COLUNA).fill(0)
    );
    }
}
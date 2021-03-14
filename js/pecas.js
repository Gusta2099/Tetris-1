class Peca {
    constructor(ctx) {
        this.ctx = ctx;
        this.color = 'blue';
        this.shape = [
            [2, 0, 0]
            [2, 2, 2]
            [0, 0, 0]
        ];

        //posição inicial do painel
        this.x = 3;
        this.y = 0;
    }

    desenho() {
        //define a cor do preenchimento
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
            }
        });
    });
    }
}
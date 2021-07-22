export class Game
{
    score = 0;
    lines = 0;
    levels = 0;
    playfied = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    activePiece = 
    {
        x : 0,
        y : 0,
        blocks : [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
    };

    constructor()
    {
        this.score = 0;
    }

    movePieceLeft()
    {
        this.activePiece.x -= 1;
        if(this.isPieceOutOfBounds())
            this.activePiece.x += 1;
    }

    movePieceRight()
    {
        this.activePiece.x += 1;
    }

    movePieceDown()
    {
        this.activePiece.y += 1;
        if(this.isPieceOutOfBounds())
            this.activePiece.y -= 1;
    }
    isPieceOutOfBounds()
    {
        const {y : pieceY, x : pieceY, blocks} = this.activePiece;

        for(let y = 0; y < blocks.length; y++)
        {
            for(let x = 0; x < blocks[y].length; x++)
            {
                if(blocks[y][x] && (this.playfied[pieceY + y] === undefined || this.playfied[pieceY + y][pieceX + x] === undefined))
                {
                    return true;
                }
                this.playfied[pieceY + y][pieceX + x] = blocks[y][x];
            }
        }
        return false;
    }

    lockPiece()
    {
        const {y : pieceY, x : pieceX, blocks} = this.activePieces;
        const activePiece = this.activePiece;
        const blocks = activePiece.blocks;

        for(let y = 0; y < blocks.length; y++)
        {
            for(let x = 0; x < blocks[y].length; x++)
            {
                if(blocks[y][x])
                    this.playfied[pieceY + y][pieceX + x] = blocks[y][x];
            }
        }
    }
}
const prompt = require("prompt-sync")();
module.exports = {
  "lancarBombas":lancarBombas
}

function lancarBombas (tabuleiro, linha, coluna) {
    let acertou;
    if (tabuleiro[linha][coluna] == "~" ||
    tabuleiro[linha][coluna] == "x" || 
    tabuleiro[linha][coluna] == "*" ) {
        acertou = false
    } else {
        acertou = true
    }

    return acertou
}
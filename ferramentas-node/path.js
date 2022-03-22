const path = require("path");

// Arquivo de referência pessoal para métodos path

// Nome base do arquivo
console.log(path.basename(__filename));
// Nome do diretório
console.log(path.dirname(__filename));
// Extensão do arquivo
console.log(path.extname(__filename));
// Cria objeto do caminho
console.log(path.parse(__filename));
// Concatena caminhos
console.log(path.join(__dirname, "novoCaminho", "novoArquivo.html"));

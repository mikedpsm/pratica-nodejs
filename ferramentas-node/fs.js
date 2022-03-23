const fs = require("fs");
const path = require("path");

// Criar pasta
// const criarPasta = fs.mkdir(path.join(__dirname, "/nova-pasta"), {}, (err) => {
//   if (err) throw err;
//   console.log("Pasta criada com sucesso.");
// });

// Criar e editar arquivo
// const escreverArquivo = fs.writeFile(
//   path.join(__dirname, "/nova-pasta", "arquivo.txt"),
//   "Dados do txt. ",
//   (err) => {
//     if (err) throw err;
//     console.log("Arquivo criado e editado com sucesso.");
//   }
// );

// Anexar dados a arquivo
// const anexarDados = fs.appendFile(
//   path.join(__dirname, "/nova-pasta", "arquivo.txt"),
//   "Dados anexados. ",
//   (err) => {
//     if (err) throw err;
//     console.log("Dados anexados com sucesso");
//   }
// );

// Leitura de dados. Não funciona se for executado na mesma linha de execução de criação e escrita de dados.
// const lerArquivo = fs.readFile(
//   path.join(__dirname, "/nova-pasta", "arquivo.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log("Dados do arquivo: " + data);
//   }
// );

// Renomear arquivo. Não funciona se for executado na mesma linha de execução de criação e escrita de dados.
// const renomearArquivo = fs.rename(
//   path.join(__dirname, "/novaPasta", "arquivo.txt"),
//   path.join(__dirname, "/novaPasta", "novo-nome.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("Arquivo renomeado com sucesso.");
//   }
// );

// Funções para manipulação de arquivos

// Criar pasta
async function novaPasta(caminho, nomePasta, funcao) {
  await fs.mkdir(path.join(caminho, nomePasta), {}, funcao);
}

// Testando
novaPasta(__dirname, "pastaTeste", (err) => {
  if (err) throw err;
  console.log("Pasta criada");
});

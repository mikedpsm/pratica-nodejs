const fs = require("fs");
const path = require("path");

// Criar pasta
fs.mkdir(path.join(__dirname, "/nova-pasta"), {}, (err) => {
  if (err) throw err;
  console.log("Pasta criada com sucesso.");
});

// Criar e editar arquivo
fs.writeFile(
  path.join(__dirname, "/nova-pasta", "arquivo.txt"),
  "Dados do txt. ",
  (err) => {
    if (err) throw err;
    console.log("Arquivo criado e editado com sucesso.");

    // Anexar dados a arquivo
    fs.appendFile(
      path.join(__dirname, "/nova-pasta", "arquivo.txt"),
      "Dados anexados. ",
      (err) => {
        if (err) throw err;
        console.log("Dados anexados com sucesso");
      }
    );
  }
);

// Leitura de dados. Não funciona se for executado na mesma linha de execução de criação e escrita de dados.
fs.readFile(
  path.join(__dirname, "/nova-pasta", "arquivo.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

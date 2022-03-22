const os = require("os");

// Plataforma
if (os.platform() !== "win32") {
  console.log(`Sistema operacional: ${os.platform()}`);
} else {
  console.log("Sistema operacional: Windows " + os.arch());
}

// Info dos núcleos da CPU
console.log(
  `Processador: ${os.cpus()[0].model} de ${os.cpus().length} núcleos`
);

// Infos da memória em GB
const memoriaLivre = os.freemem();
const memoriaTotal = os.totalmem();
console.log(
  `Memória livre: ${(memoriaLivre / 1000000000).toFixed(0)} GB de ${(
    memoriaTotal / 1000000000
  ).toFixed(0)} GB`
);

// Diretório base
console.log(os.homedir());

// Tempo de pc ligado em minutos
const tempoLigado = os.uptime();
console.log(
  `Tempo de uso do computador: ${(tempoLigado / 60).toFixed(0)} minutos`
);

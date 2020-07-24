const votos = [10000, 15000, 3500, 1200, 600];

const matriz = [[],[],[],[],[]];

for (let i = 0; i < votos.length; i++) {
    for (let j = 1; j < 6; j++) {
        matriz[i].push(Math.floor(votos[i] / j));     
    }
}

console.log(matriz);
console.log(Math.max(...votos));
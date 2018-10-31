const aggressive = (resultTotal1, resultTotal2) => {
  const area1 = [29, 31, 22, 24, 26, 28];
  const area2 = [27, 29, 31, 30, 32];
  const answer = 'Tu perfil de inversión es "Agresivo"';
  if (area1.indexOf(resultTotal1) !== -1 && area1.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area2.indexOf(resultTotal1) !== -1 && area2.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  }
}

const moderate = (resultTotal1, resultTotal2) => {
  const area1 = [27, 29, 31, 14, 16, 18, 20];
  const area2 = [25, 27, 22, 24, 26, 28];
  const area3 = [23, 25, 30, 32];
  const answer = 'Tu perfil de inversión es "Moderado"';
  if (area1.indexOf(resultTotal1) !== -1 && area1.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area2.indexOf(resultTotal1) !== -1 && area2.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area3.indexOf(resultTotal1) !== -1 && area3.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  }
}

const conservative = (resultTotal1, resultTotal2) => {
  const area1 = [19, 21, 23, 25, 27, 29, 31, 0, 2, 4];
  const area2 = [17, 19, 21, 23, 25, 27, 29, 31, 6, 8, 10, 12];
  const area3 = [15, 17, 19, 21, 23, 25, 14, 16, 18, 20];
  const area4 = [13, 15, 17, 19, 21, 23, 22, 24, 26, 28];
  const area5 = [11, 13, 15, 17, 19, 21, 30, 32];
  const answer = 'Tu perfil de inversión es "Conservador"';
  if (area1.indexOf(resultTotal1) !== -1 && area1.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area2.indexOf(resultTotal1) !== -1 && area2.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area3.indexOf(resultTotal1) !== -1 && area3.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area4.indexOf(resultTotal1) !== -1 && area4.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area5.indexOf(resultTotal1) !== -1 && area5.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  }
}

const highlyConservative = (resultTotal1, resultTotal2) => {
  const area1 = [9, 11, 13, 15, 17, 0, 2, 4];
  const area2 = [7, 9, 11, 13, 15, 6, 8, 10, 12];
  const area3 = [5, 7, 9, 11, 13, 14, 16, 18, 20];
  const area4 = [3, 5, 7, 9, 11, 22, 24, 26, 28];
  const area5 = [3, 5, 7, 9, 30, 32];
  const answer = 'Tu perfil de inversión es "Altamente Conservador"';
  if (area1.indexOf(resultTotal1) !== -1 && area1.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area2.indexOf(resultTotal1) !== -1 && area2.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area3.indexOf(resultTotal1) !== -1 && area3.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area4.indexOf(resultTotal1) !== -1 && area4.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area5.indexOf(resultTotal1) !== -1 && area5.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  }
}

const defensive = (resultTotal1, resultTotal2) => {
  const area1 = [3, 5, 7, 0, 2, 4];
  const area2 = [3, 5, 6, 8, 10, 12];
  const area3 = [3, 14, 16, 18, 20];
  const answer = 'Tu perfil de inversión es "Defensivo"';
  if (area1.indexOf(resultTotal1) !== -1 && area1.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area2.indexOf(resultTotal1) !== -1 && area2.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  } else if (area3.indexOf(resultTotal1) !== -1 && area3.indexOf(resultTotal2) !== -1) {
    return console.log(answer);
  }
}
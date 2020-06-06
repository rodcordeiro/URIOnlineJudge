let lines=[5,6,7,8];

function calcDiferenca(values){
  let a = parseInt(values[0]);
  let b = parseInt(values[1]);
  let c = parseInt(values[2]);
  let d = parseInt(values[3]);
  var dif = a * b - c * d;
  console.log(`DIFERENCA = ${dif}`)
}
calcDiferenca(lines)

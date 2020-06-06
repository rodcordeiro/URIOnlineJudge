let lines = [5.0,6.0,7.0];

function calcMedia(values){
  let a = parseFloat(values[0]) * 2;
  let b = parseFloat(values[1]) * 3;
  let c = parseFloat(values[2]) * 5;
  let media = ((a + b + c) /10).toFixed(1);
  console.log(`MEDIA = ${media}`)
}
calcMedia(lines)

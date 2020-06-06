let lines=[5.0,7.1]

function calcMedia(values){
  let a = parseFloat(values[0]) *3.5;
  let b = parseFloat(values[1]) * 7.5;
  let media = ((a + b) /11).toFixed(5);
  console.log(`MEDIA = ${media}`)
}

calcMedia(lines)

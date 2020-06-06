let lines=["12 1 5.30","16 2 5.10"];
function calcItems(values){
  let item1 = values[0].split(' ');
  let item2 = values[1].split(' ');
  var value1 = item1[2] * item1[1];
  var value2 = item2[2] * item2[1];
  let total = (value1 + value2).toFixed(2);
  console.log(`VALOR A PAGAR: R$ ${total}`)
}
calcItems(lines)

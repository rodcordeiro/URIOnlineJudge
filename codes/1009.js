let lines=["JOAO",500.00,1230.30];


function calcSalary(values){
  let base = parseFloat(values[1])
  let amount = parseFloat(values[2])
  let percentage = amount * 0.15;
  let salary = (base + percentage).toFixed(2);
  console.log(`TOTAL = R$ ${salary}`)
}
calcSalary(lines)

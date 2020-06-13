function calc(values){
  let tomadas = values[0].split(' ');
  let equip = 1;
  tomadas.forEach(tomada => {
    equip += tomada -1;
  })
  console.log(equip)
}
calc(["2 4 3 2"])
calc(["6 6 6 6"])
calc(["2 2 2 2"])

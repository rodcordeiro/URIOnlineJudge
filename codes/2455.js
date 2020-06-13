//P1 ∗ C1 = P2 ∗ C2

function equilibrio(values){
  let valores = values[0].split(' ');
  let p1= valores[0] * valores[1]
  let p2 = valores[2] * valores[3]
  if(p1 == p2){
    console.log(0)
  } else{
   if(p1 > p2){
    console.log(-1)
  } else{
    console.log(1)
  }
  }
}
equilibrio(["30 100 60 50"])
equilibrio(["40 40 38 60"])
equilibrio(['35 80 35 75'])

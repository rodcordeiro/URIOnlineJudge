function teste(){
  let values = [576,11257,503,75.3]
  values.forEach(value => {
    cedulas(value)
  })
}

function cedulas(value){
  console.log(value);
  let cedulas = [100,50,20,10,5,2,1]
  let resto = parseInt(value)
  cedulas.forEach(cedula =>{
    let numCelulas = parseInt(resto / cedula)
    resto = resto % cedula
    console.log(`${numCelulas} nota(s) de R$ ${parseFloat(cedula).toFixed(2)}`)
  })

  }






teste()

let lines = [25,100,5.50];

function calcSalary(values){
    let id = values[0]
    let time = parseInt(values[1])
    let value = parseFloat(values[2])
    let salary = (value * time).toFixed(2)
    console.log(`NUMBER = ${id}\nSALARY = U$ ${salary}`)
}

calcSalary(lines)

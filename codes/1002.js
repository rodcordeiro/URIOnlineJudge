let lines = [2.00]
function circleArea(value){
    let raio = parseFloat(value);
    let pi = parseFloat(3.14159);
    let area = pi*(raio * raio);
    console.log(`A=${area.toFixed(4)}`)
}

circleArea(lines)

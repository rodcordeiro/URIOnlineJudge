//Not Finished
let lines = [8,7]

function Odds(values){
    values.forEach(value=>{
        console.log(value)
        let odds = []
        let curValue = value
        while (odds.length <= 5 ){
            curValue = parseInt(getOdd(curValue))
            odds.push(curValue)
            curValue++;
        }
        odds.forEach(odd=>console.log(odd))
    })
}
function getOdd(value){
    if(parseInt(value)) console.log("ok")
    // if (value % 2 !== 0){
    //     return parseInt(value);
    // } else {
    //     value++;
    //     getOdd(value);
    // }
}

Odds(lines)
var arrayHeads // [1,0,1,0,1,0]
var arrayTails // [0,1,0,1,0,1]

var example = [1,0,1,0,1,1]
var example2 = [1,0,1,1]
var example3 = [0,0,1,1]
var example4 = [1,1,1,1,1,1]

check(example)
check(example2)
check(example3)
check(example4)

function check(option) {
    buildHeads(option.length)
    buildTails(option.length)

    let countHeads = 0
    let countTails = 0

    //Comparamos para saber si la mejor opcion es heads
    // option, que es el array que quiere compara usuario
    // arrayHead y arrayTails qeu son las soluciones
/*
    var numberGiven = 6897
    var numberAdd = 5
    var numberGivenToString = numberGiven.toString();
    var numberGivenToArray = Array.from(numberGivenToString);

    var finalNumberString = ""
    var index = 0
    var numberIsAdded = false

    do {

        let currentNumber = numberGivenToArray[index];
        let currentNumberToInt = parseInt(currentNumber)

        if (currentNumberToInt < numberAdd && numberIsAdded === false) {
            finalNumberString = finalNumberString + numberAdd.toString() + currentNumber
            numberIsAdded = true
        } else {
            finalNumberString = finalNumberString + currentNumber 
        }

        index++;

        if (index == numberGivenToArray.length && numberIsAdded == false) {
            finalNumberString = finalNumberString + numberAdd.toString()
        }

    } while (index < numberGivenToArray.length)
*/


    option.forEach((value, index)=> {

        //compraobacion para heads
        if (value != arrayHeads[index]) {
            countHeads++;
        }

        //comprobacion para tails
        if (value != arrayTails[index]) {
            countTails++;
        }
    });


    if (countHeads < countTails) {
        console.log("la solución es " + arrayHeads + " y necesita " + countHeads + " cambios.");
    } else if  (countHeads > countTails){
        console.log("la solución es " + arrayTails + " y necesita " + countTails + " cambios.");
    } else {
        console.log("tiene el mismo coste " + arrayTails + " que" + arrayHeads + " y necesita " + countTails + " cambios.");
    }
}

function buildHeads(optionLength) {
   arrayHeads = [1];

    let i = 0;

    while ( i < optionLength - 1){
        const newItem = arrayHeads[i] === 1 ? 0 : 1;
        arrayHeads.push(newItem);
        i++;
    }
}

function buildTails(optionLength) {
    arrayTails =[0];
    let i = 0;
    
    while ( i < optionLength - 1) {
        const newTailItem = arrayTails[i-1] === 0 ? 1 : 0;
        arrayTails.push(newTailItem);
        i++;
    }
}


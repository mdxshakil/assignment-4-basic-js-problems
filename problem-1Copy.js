//Problem 1:
function anaToVori(ana) {
    if (typeof ana == 'number' && ana > 0) {
        const vori = ana / 16;
        return vori;
    }
    else{
        return 'Please provide a valid input!'
    }
}

//Problem 2: 
const eachSingaraPrice = 7;
const eachSomuchaPrice = 10;
const eachJilapiPrice = 15;
function pandaCost(singaraQty, somuchaQty, jilapiQty ) {
    if ((singaraQty>=0 && somuchaQty>=0 && jilapiQty>=0) && typeof singaraQty=='number' && typeof somuchaQty=='number' && typeof jilapiQty=='number') {
        const totalCost = (singaraQty*eachSingaraPrice) + (somuchaQty*eachSomuchaPrice) + (jilapiQty*eachJilapiPrice);
        return totalCost;
    }
    else{
        return 'Please provide valid input!'
    }
}

//problem 3:
const first100Cost = (100*5000);
const second100Cost = (100*4000);
function picnicBudget(totalPerson) {
    if (totalPerson >=0 && totalPerson <= 100 && typeof totalPerson == 'number') {
       const totalCost = totalPerson * 5000;
       return totalCost;
    }
    else if (totalPerson > 100 && totalPerson <= 200 && typeof totalPerson == 'number' ) {
        const remainingPeople = totalPerson - 100;
        const totalCost = (remainingPeople*4000) + first100Cost;
        return totalCost;
    }
    else if(totalPerson > 200 && typeof totalPerson == 'number'){
        const remainingPeople = totalPerson - 200;
        const totalCost = (remainingPeople*3000) + first100Cost + second100Cost;
        return totalCost;
    }
    else{
        return 'Provide a valid number!'
    }
}

//Problem 4:
var friendNames = ['shakib', 'musfiq', 'fizz', 'tamim', 'liton', 'taskins']
function oddFriend(names) {
    let oddLengthName = names[0];
    if (typeof names == 'object') {
        for (let i = 0; i < names.length; i++) {
            const eachName = names[i];
            if (eachName.length%2 != 0) {
                oddLengthName = (eachName);
                return oddLengthName;
            }
        }
    }
    else{
        return 'Invalid Input!'
    }
}

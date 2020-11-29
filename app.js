var costLista = [];
var incomeLista = [];
var costSum = 0;
var incomeSum = 0;

function countTotal(event) {

    //sidan ska inte uppdateras
    //data ska inte försvinna

    event.preventDefault();

    // om användare väljer +
    var options = document.querySelector("#selectOption");
    console.log(options.value);

    if (options.value === "+") {

        //ska uppdateras: inkomst
        //-vinst
        //inkomstlista

        var description = document.querySelector("#description").value;
        var value = document.querySelector("#value").value;

        // pusha value in till valueLista
        incomeLista.push(Number(value));

        var inkomstData = document.querySelector(".inkomstData");
        incomeSum += Number(value);
        inkomstData.innerText = incomeSum;


        var li = document.createElement("li");
        li.innerText = description + " : " + value;

        var ul = document.querySelector(".listaIncome");
        ul.appendChild(li);
        //pusha in i elementet i ett befintligt element

    }

    else if (options.value === "-") {

        // om användare väljer -
        // ska uppdatera: kostnad
        //-kostnadslista

        var description = document.querySelector("#description").value;
        var value = document.querySelector("#value").value;

        // pusha value in till valueLista

        costLista.push(Number(-value));
        var kostnadData = document.querySelector(".kostnadData");
        costSum -= Number(value);
        kostnadData.innerText = costSum;
        var li = document.createElement("li");
        li.innerText = description + " : " + value;
        var ul = document.querySelector(".listaKostnad");
        ul.appendChild(li);
    }

    //vinst:

    var summa = incomeSum + costSum;
    var vinstData = document.querySelector(".vinstData");
    console.log(summa);
    vinstData.innerText = summa;
}

function rensa() {

    location.reload();
}

var btn = document.querySelector(".add");
btn.addEventListener("click", countTotal);
var clear = document.querySelector(".rensa");
clear.addEventListener("click", rensa);

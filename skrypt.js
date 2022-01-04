//nasluchuje nacisniecia przycisku/ przypisuje wartosc przycisku do wyboru gracza i uruchamia gre
let button = document.querySelectorAll('button');
button.forEach(button => button.addEventListener('click', function (e) {
    playerChoice = button.innerText;
    gra();
} ));
let playerChoice = "";


// tablica z ktorej losuje komputer
const shape = ["ROCK", "PAPER", "SCISSORS"];
// losowanie komputera
function computerPlay() {
    let computerSay = Math.floor((Math.random()) * shape.length);
    return computerSay;
   
}
// pojemnik na wynik komputera
let computerChoice = "";
// funkcja wybrania zwyciescy rund
function compare(playerChoice, computerChoice) {
    if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        return "win";
    } else if(playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        return "win";
    } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        return "win";
    } else if (playerChoice === computerChoice) {
        return "draw";
    }else {
        return "loose";
    }
}
// tablica zbierajaca wyniki rund
let wyniki = []; 
// pojemnik na ostateczny wynik z 5 rund
let wynikOstateczny = null;
// funkcja przeprowadzajaca gre
function gra() {
        
        computerChoice = shape[computerPlay()];
        const p = document.createElement('p');
        document.body.appendChild(p);
        p.textContent = "Computer: " + computerChoice + " " + "VS " + "Player: " + playerChoice + " -----------> " + compare(playerChoice, computerChoice);
        console.log("Computer say: " + computerChoice);
        console.log("You say: " + playerChoice);
        wyniki.push(compare(playerChoice, computerChoice));
        console.log(wyniki);
    //}
    winnerCheck();
}

// funkcja sprawdzajaca ostatecznego zwyciesce z 5 rund
function winnerCheck() {
    if (wyniki.length === 5) {
        for (let j = 0; j < wyniki.length; j++) {
            if (wyniki[j] === "win") {
                wynikOstateczny = +1;
            } else if (wyniki[j] === "loose") {
                wynikOstateczny = -1;
            }
        }
        const h1 = document.createElement('h1');
        document.body.appendChild(h1);
        if (wynikOstateczny > 0) {
            h1.textContent = "WYGRALES!!!!";
        } else if (wynikOstateczny === 0) {
            h1.textContent = "REMIS!!!!!";
        } else {
            h1.textContent = "PRZEGRALES!!!!";
        }
    } else {return;
        }
}

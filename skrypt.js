//nasluchuje nacisniecia przycisku/ przypisuje wartosc przycisku do wyboru gracza i uruchamia gre
let button = document.querySelectorAll('button');
button.forEach(button => button.addEventListener('click', function (e) {
    
    playerChoice = button.innerText;

    const body = document.body;  
//funkcja resetuje gre po 5 rundzie
    if (licznik === 5) {
        document.body.removeChild(body.querySelectorAll('h1')[0]);
        document.body.removeChild(body.querySelector('table'));
        document.body.removeChild(body.querySelectorAll('div')[0])
        wyniki = [];
        licznik = 0;
    }

    gra();
//funkcja usuwa zbedne divy co runde
    if (licznik >= 1) {
        document.body.removeChild(body.querySelectorAll('div')[0]);
        document.body.removeChild(body.querySelector('table'));
    };

    licznik += 1;

    console.log(makeTable(wyniki));
//funkcja rysuje tabele z wynikami
    function makeTable(wyniki) {
        let table = document.createElement('table');
        for (let k = 0; k < wyniki.length; k++) {
            let row = document.createElement('tr');
            for (let l = 0; l < wyniki[k].length; l++) {
                let cell = document.createElement('td');
                cell.textContent = wyniki[k][l];
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        document.body.appendChild(table);
        return table;
        
    }
    
} ));
let licznik = 0;
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
// funkcja wybrania zwyciezcy rund
function compare(playerChoice, computerChoice) {
    if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        return [`Runda: ${licznik +1}`,"win"];
    } else if(playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        return [`Runda: ${licznik +1}`,"win"];
    } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        return [`Runda: ${licznik +1}`,"win"];
    } else if (playerChoice === computerChoice) {
        return [`Runda: ${licznik +1}`,"draw"];
    }else {
        return [`Runda: ${licznik +1}`,"loose"];
    }
}
// tablica zbierajaca wyniki rund
let wyniki = []; 
// pojemnik na ostateczny wynik z 5 rund
let wynikOstateczny = 0;
// funkcja przeprowadzajaca gre
function gra() {
        computerChoice = shape[computerPlay()];
        const div = document.createElement('div');
        document.body.appendChild(div);
        const p = document.createElement('p');
        div.appendChild(p);
        p.textContent = "Computer: " + computerChoice + " " + "VS " + "Player: " + playerChoice + " -----------> " + compare(playerChoice, computerChoice);
        console.log("Computer say: " + computerChoice);
        console.log("You say: " + playerChoice);
        wyniki.push(compare(playerChoice, computerChoice));
        console.log(wyniki);
    //}
    winnerCheck();
}

// funkcja sprawdzajaca ostatecznego zwyciezce z 5 rund
function winnerCheck() {
    if (wyniki.length === 5) {
        for (let j = 0; j < wyniki.length; j++) {
            if (wyniki[j][1] === "win") {
                wynikOstateczny += 1;
            } else if (wyniki[j][1] === "loose") {
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
    } else { 
        return;
        }
}


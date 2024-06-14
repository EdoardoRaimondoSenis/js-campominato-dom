let container = document.getElementById("prisultato")
let button = document.getElementById("button")
let dieci = document.getElementById("dieci");
let nove = document.getElementById("nove");
let otto = document.getElementById("otto");
let difficolta = document.querySelector(".difficolta");

function numerobombe(numeri) {
    let casellanumero = [];
    for (let i = 0; i <= numeri; i++) {
        casellanumero[i] = Math.floor(Math.random() * 64);
    }
    return casellanumero;
}

let bombe = numerobombe(9);
console.log(bombe);

function letturabombe(lettura) {
    let outputletto;
    for (let i = 0; i < lettura.length; i++) {
        outputletto = lettura[i];
    }
    return outputletto;
}

let lettura = letturabombe(bombe);
console.log(lettura);


button.addEventListener("click",
    function () {
        let inputdifficolta = difficolta.value;
        console.log(inputdifficolta);

        if (inputdifficolta == "dieci") {
            
            for (let i = 1; i <= 100; i++) {
                
                let numericaselle = i;
                let punteggio = 0;
                let quadro = document.createElement("div");
                quadro.classList.add("risultatodieci");


                quadro.addEventListener("click",
                    function () {
                        this.classList.toggle("sfondoclick");
                        if (lettura != numericaselle) {
                            punteggio = punteggio + 1;
                            console.log(punteggio);
                        } else if (lettura == numericaselle) {
                            document.querySelector(".fine").innerHTML = "Hai perso, il tuo punteggio totale è " + punteggio;
                            quadro.classList.toggle("sfondobombe");
                            console.log(numericaselle);
                        }
                    }
                );
                
                container.appendChild(quadro);
                quadro.append(i)
            
            } 
        } else if (inputdifficolta == "nove") {
            for (let i = 1; i <= 81; i++) {
                let quadro = document.createElement("div");
                quadro.classList.add("risultatonove");
                
                
                quadro.addEventListener("click",
                    function () {
                        this.classList.toggle("sfondoclick");
                    }
                );
                
                container.appendChild(quadro);
                quadro.append(i)
            }
        } else if (inputdifficolta == "otto") {
            for (let i = 1; i <= 64; i++) {
                let quadro = document.createElement("div");
                quadro.classList.add("risultatotto");
                
                
                quadro.addEventListener("click",
                    function () {
                        this.classList.toggle("sfondoclick");
                    }
                );
                
                container.appendChild(quadro);
                quadro.append(i)
            }
        }
    } 
    
);


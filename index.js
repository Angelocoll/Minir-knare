//hitta alla element
let h2 = document.querySelector("h2");
let RäknaBtn = document.querySelector("#RäknaBtn");
let input1 = document.querySelector("#kalk1");
let input2 = document.querySelector("#kalk2");

let multiBtn = document.querySelector("#multiBtn");
let subBtn = document.querySelector("#subBtn");
//skriv en eventlistener
RäknaBtn.addEventListener("click", () => {
    //om input1s value är lika med en tomstring || betyder eller input2.value är en tomstring skriv ut du missade att fylla i ett fält
    if(input1.value === "" || input2.value === "" ){
        h2.style.fontSize = "1.5rem";
        h2.innerText = "Kuuuur! Dino är hungrig! Dino vill ha en siffra från bägge fälten!";
        //annars försök använd number() funktionen som konvertar string nummer till ett nummer 
          }else {
            let num1 = Number(input1.value);
            let num2 = Number(input2.value);
    //om de visar sig att stringen inte är ett nummer isnan is not a number skriv input är inte en siffra
            if (isNaN(num1) || isNaN(num2)) {
                h2.style.fontSize = "1.5rem";
                h2.innerText = "Kuuuuur! Dino tycker inte om bokstäver! Det smakar broccoli!";
                //annars addera de konverterade stringens nummer och spara i resultat och sedan ändra h2 till resultatet
            } else {
                let resultat = num1 + num2;
                h2.style.fontSize = "4rem";
                
                h2.innerText = resultat;
            }
            //innan vi fortsätter nollställ också fälten 
            input1.value = "";
            input2.value = "";
        }
    });
    
    //KOPIERA HELA OVAN ÄNDRA VILKEN KNAPP DEN KOPPLAS TILL
    //samt ändra till * istället för +
    multiBtn.addEventListener("click", () => {
        
        if(input1.value === "" || input2.value === "" ){
            h2.innerText = "Kuuuur! Dino är hungrig! Dino vill ha en siffra från bägge fälten!";
            h2.style.fontSize = "1.5rem";
            
        }else {
            let num1 = Number(input1.value);
            let num2 = Number(input2.value);
            
            if (isNaN(num1) || isNaN(num2)) {
                h2.innerText = "Kuuuuur! Dino tycker inte om bokstäver! Det smakar broccoli!";
                h2.style.fontSize = "1.5rem";
                
            } else {
                let resultat = num1 * num2;
                h2.style.fontSize = "4rem";
                h2.innerText = resultat;
            }
            
            input1.value = "";
            input2.value = "";
        }
    });
    //kopiera all ovan igen 
    subBtn.addEventListener("click", () => {
        
        if(input1.value === "" || input2.value === "" ){
            h2.innerText = "Kuuuur! Dino är hungrig! Dino vill ha en siffra från bägge fälten!";
            h2.style.fontSize = "1.5rem";
            
        }else {
            let num1 = Number(input1.value);
            let num2 = Number(input2.value);
            
            if (isNaN(num1) || isNaN(num2)) {
                h2.innerText = "Kuuuuur! Dino tycker inte om bokstäver! Det smakar broccoli!";
                h2.style.fontSize = "1.5rem";
                
            } else {
                let resultat = num1 - num2;
                //här kommer skillnaden kolla om resultat är större än 0 om de inte är de skriv ut error
                if(resultat < 0){
                    h2.innerText = "kuuuuur! Dino är hungrig! Dino klarar inte av en siffra mindre än 0!";
                    h2.style.fontSize = "1.5rem";
                }else{
                    
                    h2.innerText = resultat;
                    h2.style.fontSize = "4rem";
                }
            }
        
            input1.value = "";
            input2.value = "";
        }
});
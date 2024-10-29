//import {createTable} from './table.js';
//import {createForm} from './form.js';
const table = createTable(document.querySelector("#table1"));
//const form = createForm(document.querySelector('#app'));
//import { createButton} from "./button.js";
/*table.build([["Cognome", "Voto"], ["Pogba", "6"], ["Vlahovic", 8], ["Thuram", 6.5]]);
table.render();
*/

let but = createButton(document.querySelector("#div"));
but.setLabel("ciao");
but.render();
let tipologieArray = [];
fetch('conf.json')
  .then(response => response.json())  
  .then(data => {
    tipologieArray = tipologieArray.concat(data.tipologie);
    console.log(tipologieArray); // Stampa l'array aggiornato
  })
  .catch(error => console.error('Errore nel caricamento dei dati:', error));

    //document.getElementById("tabellacardiologia").style.visibility = "hidden";
    //document.getElementById("tabellacardiologia").style.visibility = "hidden";
    //document.getElementById("tabellacardiologia").style.visibility = "hidden";
    //document.getElementById("tabellacardiologia").style.visibility = "hidden";
let bot1 =createButton(document.querySelector("#div"));
let bot2 =createButton(document.querySelector("#div"));
let bot3 =createButton(document.querySelector("#div"));
let bot4 =createButton(document.querySelector("#div"));
let bot5 =createButton(document.querySelector("#div"));

bot1.setLabel(tipologieArray[0]);
bot2.setLabel(tipologieArray[1]);
bot3.setLabel(tipologieArray[2]);
bot4.setLabel(tipologieArray[3]);
bot5.setLabel(tipologieArray[4]);

bot1.render();
bot2.render();
bot3.render();
bot4.render();
bot5.render();









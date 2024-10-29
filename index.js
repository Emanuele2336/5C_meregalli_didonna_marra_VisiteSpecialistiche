//import {createTable} from './table.js';
//import {createForm} from './form.js';
const table = createTable(document.querySelector("#table1"));
//const form = createForm(document.querySelector('#app'));
//import { createButton} from "./button.js";
/*table.build([["Cognome", "Voto"], ["Pogba", "6"], ["Vlahovic", 8], ["Thuram", 6.5]]);
table.render();
*/
const buttons=[];
const tabels=[];
let tipologieArray = [];

  fetch("conf.json")
  .then(response => response.json())  
  .then(data => {
    tipologieArray = tipologieArray.concat(data.tipologie);
    for(let i =0;i<tipologieArray.length;i++){
      let b = createButton(document.querySelector("#bottoni"));
      let t = createTable();
      t.build("lunedi","ciao","ciao","ciao");
      t.render();

      b.setLabel(tipologieArray[i]);
      buttons.push(b);
      b.render();
    }
  
})


/*
let bot1 =createButton(document.querySelector("#div"));
let bot2 =createButton(document.querySelector("#div"));
let bot3 =createButton(document.querySelector("#div"));
let bot4 =createButton(document.querySelector("#div"));
let bot5 =createButton(document.querySelector("#div"));
console.log(tipologieArray);
bot1.setLabel(tipologieArray[0]);
bot2.setLabel(tipologieArray[1]);
bot3.setLabel(tipologieArray[2]);
bot4.setLabel(tipologieArray[3]);
bot5.setLabel(tipologieArray[4]);

bot1.render();
bot2.render();
bot3.render();
bot4.render();
bot5.render();*/

console.log( document.querySelector("#buttonCardiologia"))







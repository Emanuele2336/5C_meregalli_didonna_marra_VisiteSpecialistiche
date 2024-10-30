import {createTable} from './table.js';
import {createForm} from './form.js';
const table = createTable(document.querySelector("#table1"));
import {createButton} from "./button.js";
const buttons=[];
const tabels=[];
let tipologieArray = [];

  fetch("conf.json")
  .then(response => response.json())  
  .then(data => {
    tipologieArray = tipologieArray.concat(data.tipologie);
    for(let i =0;i<tipologieArray.length;i++){
      let b = createButton(document.querySelector("#bottoni"));
      b.setLabel(tipologieArray[i]);
      buttons.push(b);
      b.render();
    }
    let table = createTable(document.querySelector("#tabelle"))
    table.build([[]],"ciao")
    table.render();

    let bottonePrenota=createButton(document.querySelector("#bottoni"));
    bottonePrenota.setLabel("Prenota");
    bottonePrenota.render();
    bottonePrenota.onclick=(()=>{
      let x=0;
      console.log(x);
    });
  
})


import {createTable} from './table.js';
import {createForm} from './form.js';
const table = createTable(document.querySelector("#table1"));
const prova= document.getElementById("prova");// da modificare
import {createButton} from "./button.js";
const buttons=[];
const tabels=[];
let tipologieArray = [];
let tables=[];
let templateTable = [[8,"","","","",""],[9,"","","","",""],[10,"","","","",""],[11,"","","","",""],[12,"","","","",""]];
let currentTable=0;

Object.defineProperty(HTMLElement.prototype, 'show', {
    value: function() {
        this.classList.remove('hidden-visibility');
        this.classList.add('visible-visibility');
    },
    enumerable: false
});

Object.defineProperty(HTMLElement.prototype, 'hide', {
    value: function() {
        this.classList.remove('visible-visibility');
        this.classList.add('hidden-visibility');
    },
    enumerable: false 
});

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
    
    for (let i =0;i<5;i++){
        let table = createTable(document.querySelector("#tabelle"),i)
        table.build(templateTable)
        tables.push(table);
    }
    
   /* const tables = []; // Array per contenere le tabelle

    for (let i = 0; i < 5; i++) {
        let table = createTable(document.querySelector("#tabelle"));
    
        // Genera un ID unico per ogni tabella, ad esempio "table-0", "table-1", ecc.
        const tableId = `table-${i}`;
        
        // Passa l'ID unico alla funzione build della tabella
        table.build(templateTable, tableId);
    
        // Aggiungi la tabella all'array
        tables.push(table);
    }
    */



    document.getElementById("buttonCardiologia").onclick = () => {
        tables[0].render();
        console.log("ciao0");
        currentTable = 0;
        document.getElementById("0").show()
        document.getElementById("1").hide()
        document.getElementById("2").hide()
        document.getElementById("3").hide()
        document.getElementById("4").hide()
    }
    document.getElementById("buttonPsicologia").onclick = () => {
        tables[1].render();
        console.log("ciao1");
        currentTable = 1;
        document.getElementById("1").show()
        document.getElementById("0").hide()
        document.getElementById("2").hide()
        document.getElementById("3").hide()
        document.getElementById("4").hide()
    }
    
    document.getElementById("buttonOncologia").onclick = () => {
        tables[2].render();
        console.log("ciao2");
        currentTable = 2;
        document.getElementById("2").show()
        document.getElementById("1").hide()
        document.getElementById("0").hide()
        document.getElementById("3").hide()
        document.getElementById("4").hide()
    }
    
    document.getElementById("buttonOrtopedia").onclick = () => {
        tables[3].render();
        console.log("ciao3");
        currentTable = 3;
        document.getElementById("3").show()
        document.getElementById("1").hide()
        document.getElementById("2").hide()
        document.getElementById("0").hide()
        document.getElementById("4").hide()
    }
    
    document.getElementById("buttonNeurologia").onclick = () => {
        tables[4].render();
        console.log("ciao4");
        currentTable = 4;
        document.getElementById("4").show()
        document.getElementById("1").hide()
        document.getElementById("2").hide()
        document.getElementById("3").hide()
        document.getElementById("0").hide()
    }
    

    
    

      let template=`
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="prenota">
          Prenota
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">

                <select id="sceltaOra">
                  <option value="0" id="option0">8</option>
                  <option value="1" id="option1">9</option>
                  <option value="2" id="option2">10</option>
                  <option value="3" id="option3">11</option>
                  <option value="4" id="option4">12</option>
                </select>
                <select id="sceltaGiorno">
                <option value="0">lunedì ${new Date().toLocaleDateString()}</option>
                  <option value="1">martedì ${new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString()}</option>
                  <option value="2">mercoledì ${new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString()}</option>
                  <option value="3">giovedì ${new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleDateString()}</option>
                  <option value="4">venerdì ${new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString()}</option>
                </select>
               
             
                
                <br>
                <input type="text" placeholder="Inserire Nominativo" id="nominativoId">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">chiudi</button>
                <button type="button" class="btn btn-primary" id="prenotino">prenota</button>
              </div>
            </div>
          </div>
        </div>`
      prova.innerHTML=template;

    
    //da fare richiamo altri bottoni e sviluppo delle funzionalità

    let prenota = document.getElementById("prenotino");
    prenota.onclick =()=>{
        let tmptable = templateTable;
        tmptable[parseInt(document.getElementById("sceltaOra").value)][parseInt(document.getElementById("sceltaGiorno").value)+1]=document.querySelector("#nominativoId").value;
        console.log(parseInt(document.getElementById("sceltaGiorno").value)+1+"  "+parseInt(document.getElementById("sceltaOra").value)+1);
        tables[currentTable].build(tmptable)
        tables[currentTable].render();
    } 
})


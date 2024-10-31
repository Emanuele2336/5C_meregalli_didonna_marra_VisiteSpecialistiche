import {createTable} from './table.js';
import {createForm} from './form.js';
const table = createTable(document.querySelector("#table1"));
const prova= document.getElementById("prova");// da modificare
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
    table.build([[8,"",""],[9,"",""],[10,"",""],[11,"",""],[12,"",""]])
    table.render();

      let template=`
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

                <select>
                  <option value="ciao">8</option>
                  <option value="ciao">9</option>
                  <option value="ciao">10</option>
                  <option value="ciao">11</option>
                  <option value="ciao">12</option>
                </select><br>
                <input type="text" placeholder="Inserire Nominativo">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">chiudi</button>
                <button type="button" class="btn btn-primary">prenota</button>
              </div>
            </div>
          </div>
        </div>`
      prova.innerHTML=template;

    
    //da fare richiamo altri bottoni e sviluppo delle funzionalità

  
})


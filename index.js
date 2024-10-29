//import {createTable} from './table.js';
//import {createForm} from './form.js';
const table = createTable(document.querySelector("#table1"));
//const form = createForm(document.querySelector('#app'));

table.build([["lunedì", "martedì","mercoledì","giovedì","venerdì"], ["Pogba", "6"], ["Vlahovic", 8], ["Thuram", 6.5]]);
table.render();




const bottoneCardiologia=document.getElementById("bottCardiologia");
bottoneCardiologia.onclick=()=>{
    document.getElementById("tabellacardiologia").style.visibility = "hidden";
    document.getElementById("tabellacardiologia").style.visibility = "hidden";
    document.getElementById("tabellacardiologia").style.visibility = "hidden";
    document.getElementById("tabellacardiologia").style.visibility = "hidden";
}






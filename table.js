/*export*/ const createTable = (parentElement) => {
    let id; 
    let data;
    let headers; // Headers per giorni e date
    let hours;   // Ore della giornata
    return {
      build: (dataInput, idInput, headersInput, hoursInput) => {
        data = dataInput;
        id = idInput;
        headers = headersInput;
        hours = hoursInput;
      },
      render: () => {
        let htmlTable = `<table id='${id}'>`;
        
        // Intestazioni per giorni e date
        htmlTable += "<thead><tr><th></th>"; // Cella vuota per la prima colonna
        headers.forEach(header => {
          htmlTable += `<th>${header}</th>`;
        });
        htmlTable += "</tr></thead>";
        
        // Corpo della tabella con ore e dati
        htmlTable += "<tbody>";
        data.forEach((row, rowIndex) => {
          htmlTable += "<tr>";
          
          // Colonna delle ore con sfondo verde
          htmlTable += `<td>${hours[rowIndex]}</td>`;
          
          // Celle dei dati
          row.forEach(cell => {
            htmlTable += `<td>${cell || ""}</td>`;
          });
          
          htmlTable += "</tr>";
        });
        htmlTable += "</tbody>";
        
        htmlTable += "</table>";
        parentElement.innerHTML = htmlTable;
      }
    }
  }

  


/*export const createTable = (parentElement) => {
  let data;
  return {
    build: (dataInput) => {
      data = dataInput;
    },
    render: () => {
      let htmlTable = `<table> <th></th><th>Lunedì</th> <th>Martedì</th> <th>Mercoledì</th> <th>Giovedì</th> <th>Venerdì</th>`; //``
      htmlTable += data.map((row,) => 
        "<tr>" + row.map((col) => 
         "<td>" + col + "</td>"
        ).join("")
      ).join("") + "</tr>";
      htmlTable += "</table";
      parentElement.innerHTML = htmlTable;
    }
  }
}
  */
export const createTable = (parentElement) => {
    let data;
    let id; 
  
    return {
      build: (dataInput, idInput) => {
        data = dataInput;
        id = idInput; 
      },
      render: () => {
        let htmlTable = `<table id="${id}"><thead><tr><th></th><th>Lunedì</th><th>Martedì</th><th>Mercoledì</th><th>Giovedì</th><th>Venerdì</th></tr></thead>`;
        
        htmlTable += "<tbody>";
        htmlTable += data.map((row) => 
          "<tr>" + row.map((col) => 
           `<td>${col}</td>` 
          ).join("") + "</tr>"
        ).join("");
        htmlTable += "</tbody></table>";
  
       
        parentElement.innerHTML = htmlTable;
      }
    }
  }
  
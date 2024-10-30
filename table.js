export const createTable = (parentElement) => {
  let id;
  let data;
  return {
    build: (dataInput, idInput) => {
      id = idInput;
      data = dataInput;
    },
    render: () => {
      let htmlTable = `<table id='${id}'>;
      <tr>
        <th></th>
        <th>Lunedì</th>
        <th>Martedì</th>
        <th>Mercoledì</th>
        <th>Giovedì</th>
        <th>Venerdì</th>
      </tr>
      <tr> <td></td> <td></td> <td></td><td></td><td></td><td></td></tr>
      <tr> <td>1</td> <td></td> <td></td><td></td><td></td><td></td></tr>
      <tr> <td>2</td> <td></td> <td></td><td></td><td></td><td></td></tr>
      <tr> <td>3</td> <td></td> <td></td><td></td><td></td><td></td></tr>
      <tr> <td>4</td> <td></td> <td></td><td></td><td></td><td></td></tr>
      <tr> <td>5</td> <td></td> <td></td><td></td><td></td><td></td></tr>
      `
      htmlTable += "</table";
      parentElement.innerHTML = htmlTable;
    }
  }
}
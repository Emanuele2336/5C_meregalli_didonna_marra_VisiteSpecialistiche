
 export const createButton = (parentElement) => {
    let data;
    let callback = null;
  
    return {  
      setLabel: (label) => { data = label; },  
      onclick: (callbackInput) => { callback = callbackInput},
      render: () => { 
        parentElement.innerHTML += `<button type='button' id='button${data}'>${data}</button>` 
        document.querySelector(`#button${data}`).onclick =()=>{
          callback();
        };
      },
    };
  };
  
  
  
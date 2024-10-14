const listarep ="" ;
 
  
  // Step 3: Lettura delle reparti da db 
  listareparti() ;
   // Step 4: Trova il menu a tendina
   const selectreparto= document.getElementById("ins-reparto");



//   // Step 5: Popola il menu a tendina con i reparti
      //forEach  (listarep) {
      const option = document.createElement("option");
      option.value = listarep.nome;
      option.textContent = listarep.nome;
      selectreparto.appendChild(option);
  //});


 

  function listareparti(){
    debugger
    $.ajax(
        {
            url: "http://localhost:5140/api/Reparti/lista",
            type: "GET",
            success: function(risultato){
debugger
                 let listarep = "";
                for(let [idx, item] of risultato.entries()){
                    listarep += `
                        
                            ${item.cod},
                          ${item.nom}
                            
                            
                    `;
                }

                

            },
          
            
        }
    );
    // const reparto = contenuto;
}
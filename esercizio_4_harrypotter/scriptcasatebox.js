 
 
debugger
 


//   // Step 3: Lettura delle casate da localStorage
//   const casate = JSON.parse(localStorage.getItem("casata"));



// casatanomi.push(casatel);
// localStorage.setItem("casate", JSON.stringify(casatanomi));

//   // Step 4: Trova il menu a tendina
//   const selectCasata = document.getElementById("input-casata");

//   // Step 5: Popola il menu a tendina con le casate
//   casate.forEach(function(casatanomi) {
//       const option = document.createElement("option");
//       option.value = casatanomi;
//       option.textContent = casatanomi;
//       selectCasata.appendChild(option);
//   });



  // Step 3: Lettura delle casate da localStorage
  const casate = JSON.parse(localStorage.getItem("casata"));

  // Step 4: Trova il menu a tendina
  const selectCasata = document.getElementById("input-casata");

  // Step 5: Popola il menu a tendina con le casate
  casate.forEach(function(casate) {
      const option = document.createElement("option");
      option.value = casate.nome;
      option.textContent = casate.nome;
      selectCasata.appendChild(option);
  });
function aggiungibacchetta(){
    debugger ;
    let bacchettaLocale = localStorage.getItem("bacchette") != null 
                            ? JSON.parse(localStorage.getItem("bacchette")) : [];

    // let posizioneb = document.getElementById("input-posizioneb").value;
    let varCodice= $("#input-codice").val();   
    let varMateriale= $("#input-materiale").val();  
    let varNucleo= $("#input-nucleo").val();  
    let varLunghezza= $("#input-lun").val();  
    let varResistenza= $("#input-resistenza").val();      
    let varMago= $("#input-mago").val();  
    let varCasata= $("#input-casata").val();  
    let varFoto= $("#input-foto").val();  

   
                           //JQUERY
 if (varCodice ==null || varCodice.trim() === "")  
 { window.alert("inserire codice") ; return   }  
  if (varMateriale ==null || varMateriale.trim() === "")  
  { window.alert("inserire mareriale") ; return   }  
 if (varNucleo ==null || varNucleo.trim() === "")  
 { window.alert("inserire nucleo") ; return   }  
 if (varLunghezza ==null || varLunghezza.trim() === "")  
 { window.alert("inserire lunghezza") ; return   }  
 if (varResistenza ==null || varResistenza.trim() === "")  
 { window.alert("inserire resistenza") ; return   }  
 if (varMago ==null || varMago.trim() === "")  
 { window.alert("inserire mago") ; return   }  
 if (varCasata ==null || varCasata.trim() === "")  
 { window.alert("inserire casata") ; return   }     
if (varFoto ==null || varFoto.trim() === "")  
{ window.alert("inserire url foto") ; return   }                

    let bacchetta = {
        codice: varCodice,
        materiale: varMateriale,
        nucleo: varNucleo,
        lunghezza:varLunghezza,
        resistenza:varResistenza,
        mago:varMago,
        casata:varCasata,
        foto:varFoto
    };
    
    
    bacchettaLocale.push(bacchetta);
    localStorage.setItem("bacchette", JSON.stringify(bacchettaLocale)) ;


//    ------------ aggiorna casata -----------------
debugger;       
addcasata(varCasata);
//    ------------ aggiorna casata -----------------
    debugger;
    document.getElementById("input-codice").value = "";
    document.getElementById("input-materiale").value = "";
    document.getElementById("input-nucleo").value = "";
    document.getElementById("input-lun").value = "";
    document.getElementById("input-resistenza").value = "";
    document.getElementById("input-mago").value = "";
    document.getElementById("input-casata").value = "";
    document.getElementById("input-foto").value = "";

 
debugger;
    stampabacchetta();
}  




function modificab(indice){
    $("#modaleModifica").modal('show');
debugger;
    let bacchettaLocale = localStorage.getItem("bacchette") != null 
                            ? JSON.parse(localStorage.getItem("bacchette")) : [];

    for(let [idx, item] of bacchettaLocale.entries()){
        if(indice == idx){
            document.getElementById("input-posizioneb").value = indice;
            $("#input-codice").val(item.codice);        
            $("#input-materiale").val(item.materiale);     
            $("#input-nucleo").val(item.nucleo);     
            $("#input-lun").val(item.lunghezza );     
            $("#input-resistenza").val(item.resistenza );     
            $("#input-mago").val(item.mago );  
            $("#input-casata").val(item.casata);  
            $("#input-foto").val(item.foto);     
                                   //Notazione JQuery

       
        }
    }
}


function salvab(){
    debugger ;
    let posizione = document.getElementById("input-posizioneb").value;
    let  varCodice = document.getElementById("input-codice").value;
    let   varMateriale = document.getElementById("input-materiale").value;
    let   varNucleo = document.getElementById("input-nucleo").value;
    let  varLunghezza  = document.getElementById("input-lun").value;
    let   varResistenza = document.getElementById("input-resistenza").value;
    let   varMago = document.getElementById("input-mago").value;
    let   varCasata = document.getElementById("input-casata").value;
    let   varFoto = document.getElementById("input-foto").value;

    if (varCodice ==null || varCodice.trim() === "")  
        { window.alert("inserire codice") ; return   }  
         if (varMateriale ==null || varMateriale.trim() === "")  
         { window.alert("inserire mareriale") ; return   }  
        if (varNucleo ==null || varNucleo.trim() === "")  
        { window.alert("inserire nucleo") ; return   }  
        if (varLunghezza ==null || varLunghezza.trim() === "")  
        { window.alert("inserire lunghezza") ; return   }  
        if (varResistenza ==null || varResistenza.trim() === "")  
        { window.alert("inserire resistenza") ; return   }  
        if (varMago ==null || varMago.trim() === "")  
        { window.alert("inserire mago") ; return   }  
        if (varCasata ==null || varCasata.trim() === "")  
        { window.alert("inserire casata") ; return   }     
       if (varFoto ==null || varFoto.trim() === "")  
       { window.alert("inserire url foto") ; return   }       

    let bacchettaLocale = localStorage.getItem("bacchette") != null 
                            ? JSON.parse(localStorage.getItem("bacchette")) : [];

    for(let [idx, item] of bacchettaLocale.entries()){
        if(idx == posizione){
            item.codice  = varCodice;
            item.materiale   = varMateriale ;  
            item.nucleo   =  varNucleo; 
            item.lunghezza  = varLunghezza ; 
            item.resistenza   = varResistenza ;            
            item.mago   = varMago ; 
            item.casata   = varCasata ; 
            item.foto   = varFoto ; 
             

            

            localStorage.setItem("bacchette", JSON.stringify(bacchettaLocale));
            stampabacchetta();
            $("#modaleModifica").modal('hide');
             return;
        }
    }
}
 


function stampabacchetta(){
    debugger;   
    let bacchettaLocale = localStorage.getItem("bacchette") != null 
                            ? JSON.parse(localStorage.getItem("bacchette")) : [];

    let contenitorebacchetta= "";
    for(let [idx, item] of bacchettaLocale.entries()){
        contenitorebacchetta += `
            <tr>
                <td>${idx + 1}</td>
                <td>${item.codice}</td>
                <td>${item.materiale}</td>
                <td>${item.nucleo}</td>
                <td>${item.lunghezza}</td>
                <td>${item.resistenza}</td>
                <td>${item.mago}</td>
                <td>${item.casata}</td>
                 <td>${item.foto}</td>
                 <td>
                <button type="button" class="btn btn-danger" onclick="eliminab(${idx})">Elimina</button>
                 <button type="button" class="btn btn-warning" onclick="modificab(${idx})">Modifica</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("corpo-bacchetta").innerHTML= contenitorebacchetta;
}


function eliminab(indice){
    let bacchettaLocale = localStorage.getItem("bacchette") != null 
                            ? JSON.parse(localStorage.getItem("bacchette")) : [];

    bacchettaLocale.splice(indice, 1);

    subcasata(indice);

    localStorage.setItem("bacchette", JSON.stringify(bacchettaLocale));
    stampabacchetta();
}

// function controllocampi(){
//     if (varCodice ==null || varCodice =="")  
//         { window.alert("inserire codice") ; return   }  
//      if (varMateriale ==null || varMateriale =="")  
//          { window.alert("inserire mareriale") ; return   }  
//      if (varNucleo ==null || varNucleo =="")  
//          { window.alert("inserire nucleo") ; return   }  
//      if (varLunghezza ==null || varLunghezza =="0")  
//          { window.alert("inserire lunghezza") ; return   }  
//      if (varResistenza ==null || varResistenza =="")  
//          { window.alert("inserire resistenza") ; return   }  
//      if (varMago ==null || varMago =="")  
//          { window.alert("inserire mago") ; return   }  
//      if (varCasata ==null || varCasata =="")  
//          { window.alert("inserire casata") ; return   }     
//      if (varFoto ==null || varFoto =="")  
//          { window.alert("inserire url foto") ; return   }   
// }








stampabacchetta();
    
//     setInterval(() => {
//         stampaTabella();
//     }, 500);
// }
// location.href = ""

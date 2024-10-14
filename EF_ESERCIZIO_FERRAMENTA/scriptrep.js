function stampaTabella(){
    $.ajax(
        {
            url: "http://localhost:5140/api/Reparti/lista",
            type: "GET",
            success: function(risultato){

                let contenuto = "";
                for(let [idx, item] of risultato.entries()){
                    contenuto += `
                        <tr>
                            <td>${item.cod}</td>
                            <td>${item.nom}</td>
                            <td>${item.fil}</td>
                            <td>
                                <button type="button" class="btn btn-danger" onclick="elimina('${item.cod}')">elimina</button>
                                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modificaModal" onclick="modifica('${item.cod}', '${item.nom}', '${item.fil}')">modifica</button>
                              
                            </td>
                        </tr>
                    `;
                }

                $("#contenuto-tabella").html(contenuto);

            },
            error: function(errore){
                alert("Sto in errore");
                console.log(errore)
            }
        }
    );
}

function elimina(varCod){
    $.ajax(
        {
            //url: "http://localhost:5140/api/Reparti/" + varCod,
            url:"http://localhost:5140/api/Reparti?varCodice=" +varCod,
            
            type: "DELETE",
            
            success: function(){
                
                stampaTabella();
            },
            error: function(errore){
                console.log ("msg" + url) ;
                console.log(errore)
            }
        }
    );
}

function salva(){

    let varNome = $("#ins-nome").val();
    let varCod = $("#ins-codice").val();
    let varFil = $("#ins-fila").val();

    if(varNome.trim() == ""){
        alert("Attenzione, nome vuoto");
        $("#ins-nome").focus();
        return;
    }
    
    if(varCod.trim() == ""){
        alert("Attenzione, codice vuoto");
        $("#ins-codice").focus();
        return;
    }
    if(varFil.trim() == ""){
        alert("Attenzione, fila vuota");
        $("#ins-fila").focus();
        return;
    }

    $.ajax({
        url: "http://localhost:5140/api/Reparti",
        type: "POST",
        data: JSON.stringify(
            {
                cod: varCod,
                nom: varNome,
                fil: varFil
            }
        ),
        contentType: "application/json",
        // dataType: "json",
        success: function(){  stampaTabella();
            puliscir()
            alert("inserimento riuscito");
                 
        },
        error: function(errore){
            alert("Attenzione, errore rivedere i dati inseriti");
                console.log(errore)
        },
        complete: function(){
            // alert("Ho finito");
            return;
        }

    })
}


function modifica(varCod,varNome,varFil){
     $("#modaleModifica").modal('show');
    debugger
    $("#mod-codice").val(varCod)  ;
     $("#mod-nome").val(varNome)  ; 
     $("#mod-fila").val(varFil)   ;

    }

     function salvac(){
        debugger ;
        
        let varCod = document.getElementById("mod-codice").value;
        let varNome= document.getElementById("mod-nome").value;
        let varFil = document.getElementById("mod-fila").value;
     
        if(varNome.trim() == ""){
            alert("Attenzione, nome vuoto");
            $("#mod-nome").focus();
            return;
        }
         
        
        if(varFil.trim() == ""){
            alert("Attenzione, fila vuota");
            $("#mod-fila").focus();
            return;
        }

        $.ajax({
            url: "http://localhost:5140/api/Reparti",
            type: "PUT",
            data: JSON.stringify(
                {
                    cod: varCod,
                    nom: varNome,
                    fil: varFil
                }
            ),
            contentType: "application/json",
            // dataType: "json",
            success: function(){ 
                alert("Modifica effettuta");
                 stampaTabella();
                 
                     
            },
            error: function(errore){
                alert("Attenzione, errore rivedere i dati inseriti");
                    console.log(errore)
            },
            complete: function(){
                // alert("Ho finito");
                return;
            }
    
         
            }
       ) 
    //    $("#modaleModifica").modal('hide');
    //              return;
    }
    
  


    



function puliscir(){
document.getElementById("ins-codice").value = "";
document.getElementById("ins-nome").value = "";
document.getElementById("ins-fila").value = "";

}




stampaTabella();
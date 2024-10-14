function stampaTabella(){
    $.ajax(
        {
            url: "http://localhost:5140/api/Prodotti/lista",
            type: "GET",
            success: function(risultato){
                
                let contenuto = "";
                for(let [idx, item] of risultato.entries()){
                    
                    contenuto += `
                    
                        <tr>
                            <td>${item.codi}</td>
                            <td>${item.nom}</td>
                            <td>${item.des}</td>   
                            <td>${item.prez}</td>                
                            <td>${item.qua}</td>
                            
                             

                            <td>
                                <button type="button" class="btn btn-danger" onclick="elimina('${item.codi}')">elimina</button>
                                 <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modificaModal" onclick="modifica('${item.codi}', '${item.nom}', '${item.des}', '${item.prez}','${item.qua}')">modifica</button>
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
    debugger
    $.ajax(
        {
            //url: "http://localhost:5140/api/prodotti/" + varCod,
            url:"http://localhost:5140/api/Prodotti?varCodice=" +varCod,
            
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
    let varDes = $("#ins-des").val();
    let varPrez = $("#ins-pre").val();
    let varQua = $("#ins-qua").val();


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
    if(varDes.trim() == ""){
        alert("Attenzione, descrizione vuota");
        $("#ins-des").focus();
        return;
    }
    if(varPrez.trim() == ""){
        alert("Attenzione, prezzo 0");
        $("#ins-pre").focus();
        return;
    }
    if(varQua.trim() == ""){
        alert("Attenzione, quantita 0");
        $("#ins-qua").focus();
        return;
    }

    $.ajax({
        url: "http://localhost:5140/api/Prodotti",
        type: "POST",
        data: JSON.stringify(
            {
                codi: varCod,
                nom: varNome,
                des: varDes,
                prez: varPrez,
                qua : varQua
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


function modifica(varCod,varNome,varDes,varPrez,varQua){
     $("#modaleModifica").modal('show');
    debugger
    $("#mod-codice").val(varCod)  ;
     $("#mod-nome").val(varNome)  ; 
     $("#mod-des").val(varDes)   ;
     $("#mod-pre").val(varPrez)   ;
     $("#mod-qua").val(varQua)   ;

    }

     function salvac(){
        debugger ;
        
        let varCod = document.getElementById("mod-codice").value;
        let varNome= document.getElementById("mod-nome").value;
        let varDes = document.getElementById("mod-des").value;
        let varPrez = document.getElementById("mod-pre").value;  
        let varQua = document.getElementById("mod-qua").value;

        if(varNome.trim() == ""){
            alert("Attenzione, nome vuoto");
            $("#mod-nome").focus();
            return;
        }
         
        
        if(varDes.trim() == ""){
            alert("Attenzione, descrizione vuota");
            $("#mod-fila").focus();
            return;
        }
        if(varPrez == 0){
            alert("Attenzione, prezzo 0");
            $("#mod-fila").focus();
            return;
        }

        if(varQua == 0){
            alert("Attenzione, quantita 0");
            $("#mod-fila").focus();
            return;
        }
       


        $.ajax({
            url: "http://localhost:5140/api/Prodotti",
            type: "PUT",
            data: JSON.stringify(
                {
                    codi: varCod,
                    nom: varNome,
                    des: varDes,
                    prez: varPrez,
                    qua: varQua
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
    
    


    



function puliscip(){
document.getElementById("ins-codice").value = "";
document.getElementById("ins-nome").value = "";
document.getElementById("ins-des").value = "";
document.getElementById("ins-pre").value = "";
document.getElementById("ins-qua").value = "";

}




stampaTabella();
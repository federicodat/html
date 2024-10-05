function aggiungicasata(){
    debugger ;
    let casataLocale = localStorage.getItem("casata") != null 
                            ? JSON.parse(localStorage.getItem("casata")) : [];
    
    let varNome = $("#input-nome").val();       
    let varDesc = $("#input-des").val();  
    let varLogo = $("#input-logo").val();  
    let varBacc = $("#input-bacchette").val();  
                           //JQUERY

    let casata = {
        nome: varNome,
        descriz: varDesc,
        logo: varLogo,
        bacc:varBacc
    }

    casataLocale.push(casata);
    localStorage.setItem("casata", JSON.stringify(casataLocale));
   
debugger;
    document.getElementById("input-nome").value = "";
    document.getElementById("input-des").value = "";
    document.getElementById("input-logo").value = "";
    document.getElementById("input-bacchette").value = "";
    stampacasata();            
}  

function modificac(indice){
    debugger;
    $("#modaleModifica").modal('show');

    let casataLocale = localStorage.getItem("casata") != null 
                            ? JSON.parse(localStorage.getItem("casata")) : [];

    for(let [idx, item] of casataLocale.entries()){
        if(indice == idx){
            document.getElementById("input-posizionec").value = indice;
            $("#input-nome").val(item.nome); 
            $("#input-des").val(item.descriz);   
            $("#input-logo").val(item.logo);   
            $("#input-bacchette").val(item.bacc);                                 
            
        }
    }
}
function salvac(){
    debugger ;
    let posizione = document.getElementById("input-posizionec").value;
    let varNome = document.getElementById("input-nome").value;
    let varDesc = document.getElementById("input-des").value;
    let varLogo = document.getElementById("input-logo").value;
    let varBacc = document.getElementById("input-bacchette").value;

    let casataLocale = localStorage.getItem("casata") != null 
                            ? JSON.parse(localStorage.getItem("casata")) : [];

    for(let [idx, item] of casataLocale.entries()){
        if(idx == posizione){
            item.nome = varNome;
            item.descriz = varDesc;
            item.logo = varLogo;
            item.bacc = varBacc;

            

            localStorage.setItem("casata", JSON.stringify(casataLocale));
            stampacasata();
            $("#modaleModifica").modal('hide');
             return;
        }
    }
}

function stampacasata(){
    debugger;   
    let casataLocale = localStorage.getItem("casata") != null 
                            ? JSON.parse(localStorage.getItem("casata")) : [];

    let contenitorecasata = "";
    for(let [idx, item] of casataLocale.entries()){
        contenitorecasata += `
            <tr>
                <td>${idx + 1}</td>
                <td>${item.nome}</td>
                <td>${item.descriz}</td>
                <td>${item.logo}</td>
                <td>${item.bacc}</td>
                <td>
                <button type="button" class="btn btn-danger" onclick="eliminac(${idx})">Elimina</button>
                 <button type="button" class="btn btn-warning" onclick="modificac(${idx})">Modifica</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("corpo-casata").innerHTML = contenitorecasata;
}

function eliminac(indice){
    let casataLocale = localStorage.getItem("casata") != null 
                            ? JSON.parse(localStorage.getItem("casata")) : [];

                            casataLocale.splice(indice, 1);

    localStorage.setItem("casata", JSON.stringify(casataLocale));
    stampacasata();
}
stampacasata();
    
//     setInterval(() => {
//         stampaTabella();
//     }, 500);
// }
//location.href = "listacasate.html"

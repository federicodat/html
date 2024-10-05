let elenco = ["Giovanni", "Maria", "Mario", "Valeria"];

let contenuto = "";

for(let i=0; i<elenco.length; i++){
    contenuto += `
        <tr>
            <td>${elenco[i]}</td>
        </tr>`;
}


document.getElementById('corpo-tabella').innerHTML = contenuto;


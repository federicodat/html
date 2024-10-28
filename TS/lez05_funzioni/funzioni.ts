// function saluta(nome: string, eta: number) {
//     return `
//     ciao, ${nome} , ${eta}
//     `
// }
// console.log(saluta("giovanni",37));
// //-----------------------arrow
// function salutaDue (nome: string) : string => {
//     return `
//     ciao,${nome}
//     `
// }
// //console.log("giovanni");
//--------------------opzionali ---------
const ringrazia = (nome: string, titolo?: string) : string => {
    if (titolo)
        return `Grazie ${titolo} ${nome}    
    `   
    
}
export class Prodotto {

        cod: string | undefined;
        nom: string | undefined;
        des: string | undefined;
        pre: number | undefined;
        qua: number | undefined;
       
    
        StampaDettaglio() : void{
            console.log(this.cod, this.nom, this.des, this.pre, this.qua);
        }
    }
 

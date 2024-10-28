export class Destinazione {

     
    nom: string | undefined;
    des: string | undefined;
    pae: string | undefined;
    fot: string | undefined;

    StampaDettaglio() : void{
        console.log(  this.nom, this.des, this.pae, this.fot);
    }
}


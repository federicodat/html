export class Pacchetto {

    nom: string | undefined;
    prez: number |undefined  ;
    dura: string | undefined;
    datai: Date | undefined;
    dataf: Date | undefined;

    StampaDettaglio() : void{
        console.log(  this.nom, this.prez, this.dura, this.datai, this.dataf);
    }
}
 

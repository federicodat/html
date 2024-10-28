export class Iscrizione {
    cod: string | undefined;
    nom: string | undefined;
    cog: string | undefined;
    mai: string | undefined;
 

    StampaDettaglio() : void{
        console.log(this.cod, this.nom, this.cog, this.mai);
}
}


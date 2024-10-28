export class Corsista {
    nom: string | undefined;
    cogn: string | undefined;
    mail: string | undefined;
   

    StampaDettaglio() : void{
        console.log(this.nom, this.cogn, this.mail);
}
}


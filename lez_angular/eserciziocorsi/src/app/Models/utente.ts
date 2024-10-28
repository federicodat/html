export class Utente {
    us: string | undefined;
    pw: string | undefined;
    ru: string | undefined;
   

    StampaDettaglio() : void{
        console.log(this.us, this.pw, this.ru );
}
}


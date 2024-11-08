export class Chat {
    cod?: string;
    mess?: string;
    datm?: Date;
    ute?:string;
 
construmctor(cod: string, mes: string, dat: Date ,ute:string) {
    this.cod = cod;
    this.mess = mes;
    this.datm = dat;
    this.ute = ute;
  }
}
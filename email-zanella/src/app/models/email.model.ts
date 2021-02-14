export class Email {
  destinatario: string;
  oggetto: string;
  testo: string;
  agg: boolean = false;
  

  constructor(title: string, link: string, testo: string) {
    this.destinatario = title;
    this.oggetto = link;
    this.testo = testo;
  }

  speciale(): boolean {
    if (this.agg == false) {
      return (this.agg = true);
    } else {
      return (this.agg = false);
    }
  }

  

  //metodo normale che non ritorna niente essendo un void che mi aumenta i votes di uno
  /*
  voteUp(): void {
    this.votes += 1;
  }
  //metodo normale che non ritorna niente essendo un void che mi diminuisce i votes di uno
  voteDown(): void {
    this.votes -= 1;
  }
  */

  //domain estrare gli URL
  //niente di che verificare se togliendolo da problemi
  /*
    domain(): string{
      try{
        const domainAndPath: string = this.link.split('//')[1];
  
        return domainAndPath.split('/')[0];
  
      }catch (err) {
        return null
      }
    }
  }
  */
}

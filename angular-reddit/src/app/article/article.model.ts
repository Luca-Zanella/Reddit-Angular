//classe OOP per creare metodi e poi andarli a riprendere importando la classe facilmente
export class Article {
  title: string;
  link: string;
  votes: number;


  //? per determinare un parametro facoltativo
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  //metodo normale che non ritorna niente essendo un void che mi aumenta i votes di uno
  VoteUp(): void {
    this.votes += 1;
  }
//metodo normale che non ritorna niente essendo un void che mi diminuisce i votes di uno
  VoteDown(): void {
    this.votes -= 1;
  }

  //domain estrare gli URL
  //niente di che verificare se togliendolo da problemi
  domain(): string{
    try{
      const domainAndPath: string = this.link.split('//')[1];

      return domainAndPath.split('/')[0];

    }catch (err) {
      return null
    }
  }
}

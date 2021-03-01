import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//per accedere lla classe del modulets dobbiamo prima importare qurllo che abbiamo fatto come in android studio
import {Article} from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//il nostro metodo lo andiamo a scrivere dentro l'export
export class AppComponent implements OnInit {
  data: Object;
  //variabile che dice se siamo in attesa di una rispsta dal sever
  loading: boolean;
  //notifica quando arriva la risposta dall'http server
  o: Observable<Object>;
  //vettore di oggetti Foo dato che abbiamo creato il model apposta per prende i valori che ci interessano
  fooData: Article[] = new Array<Article>();
  //ritorni un observable e che ritorni in una lista di oggetti Foo dato che stiamo utilizzando il model
  //ricordarsi che questa è un avariabile globale
  oFoo: Observable<Article[]>;
  //viene richiamato il costruttore associandolo alla variabile articles
  //articles: Article[];
  constructor(public http: HttpClient) {
    /*
    this.articles = [
      //in questo modo andiamo a prendere il costruttore creato nell'OOP del ts 
      //e con new Article usiamo i paraemtri del costruttori che eranoo 3 e 3 vengono dati con string string e votes?
      
      new Article('Angular 2','http://angular.io',3),
      new Article('Fullstack','http://fullstack.io',2),
      new Article('Angualr HomePage','http://angular.io',1)
      
    ]
    */
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  makeTypedRequest(): void {
    //praticamente assegna all avariabile oFoo l'http get che va a fare sul sito e lo fa tornare on observable in lista vedere la sintassi seguente
    this.oFoo = this.http.get<Article[]>(
      'http://my-json-server.typicode.com/Luca-Zanella/Reddit-Angular/posts'
    );
    //va a fare il subscribe si oFoo con lambda della variabile data che prende tutti i nostri valori e li mette dentro this.fooData che ha le stesse sembianze del modell o creato con le 4 variabili
    this.oFoo.subscribe((data) => {
      this.fooData = data;
    });
  }

  /*
sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  } 
*/

  //la variabile titile avrà inputElement quindi vuol dire che riceverà qualcosa al suo interno
  //la stessa cosa per la variabile link che riceverà qualcosa al suo interno come se fosse la plai text su android studio
  //${titile.value è un modo per inserire direttamente un valore all'interno di una riga}
  //articles = new Array<string>();

  //quando io vado a premere il bottone di submit mi andrà ad aggiungere
  //nel mio array chiamata dal costruttore dell'OOP, un altra cella che poi mi farà vedere dinamicamente senza aver bisgono di dover ricaricare la pagina
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    //andiamo ad aggiungere il titolo ed il link messo da noi e settiamo i votes a 0 come di consuetudine
    //e poi andiamo a settare a vuoto i parametri title e link così da permettere di scrivere altre cose e da non creare cose strane
    this.fooData.push(new Article(title.value, link.value,0));
    //console.log(this.fooData);
    //questo va fatto dopo averlo inserito nell'array perchè se no mi inserice il nulla se fatto dopo da spazio per essere occupato di nuovo
    title.value = '';
    link.value = '';
    return false;
  }
}

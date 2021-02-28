import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'card';
  
  data: Object;
  //variabile che dice se siamo in attesa di una rispsta dal sever
  loading: boolean;
  //notifica quando arriva la risposta dall'http server
  o: Observable<Object>;
  //vettore di oggetti Foo dato che abbiamo creato il model apposta per prende i valori che ci interessano
  fooData:Article[];
  //ritorni un observable e che ritorni in una lista di oggetti Foo dato che stiamo utilizzando il model
  //ricordarsi che questa è un avariabile globale
  oFoo:Observable<Article[]>;

  //naturalmente le variabili si possono anche non mettre anche perchè le abbiamo già messe nella OOP ts
  //variabili globali
  //votes: number;
  //title: string;
  //link: string;

  constructor(public http: HttpClient) {
    /*
      this.title = 'Angular 2';
    this.link = 'http//angular.io'
    this.votes = 10;
     */
    //this.article = new Article('Angular 2', 'http://angualr.io', 10);

  }

  makeTypedRequest(): void{
    //praticamente assegna all avariabile oFoo l'http get che va a fare sul sito e lo fa tornare on observable in lista vedere la sintassi seguente
    this.oFoo = this.http.get<Article[]>('http://my-json-server.typicode.com/Luca-Zanella/Reddit-Angular/posts');
    //va a fare il subscribe si oFoo con lambda della variabile data che prende tutti i nostri valori e li mette dentro this.fooData che ha le stesse sembianze del modell o creato con le 4 variabili
    this.oFoo.subscribe(data => {this.fooData = data})
  }



  //metodo creato soltanto per riprendere quello fatto nella OOP del ts così da poterlo utilizzarel nell'html se no impossibilie
  voteUp(): boolean {

    this.fooData[0].votes += 1;

    //this.article.voteUp(); //acceddiamo alla proprietà votes di article
    return false; //per far si che l'evento non venga propagato
  }

  voteDown(): boolean {
    this.fooData[0].VoteDown();
    return false;
  }

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
//per accedere lla classe del modulets dobbiamo prima importare qurllo che abbiamo fatto come in android studio
import {Article} from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//il nostro metodo lo andiamo a scrivere dentro l'export
export class AppComponent {
  articles:Article[];
  constructor(){
    this.articles = [
      new Article('Angular 2','http://angular.io',3),
      new Article('Fullstack','http://fullstack.io',2),
      new Article('Angualr HomePage','http://angular.io',1)
      
    ]
  }
  //la variabile titile avrà inputElement quindi vuol dire che riceverà qualcosa al suo interno
  //la stessa cosa per la variabile link che riceverà qualcosa al suo interno come se fosse la plai text su android studio
  //${titile.value è un modo per inserire direttamente un valore all'interno di una riga}
  //articles = new Array<string>();
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article('Angular 2','http://angular.io',3));
    return false;
  }
}

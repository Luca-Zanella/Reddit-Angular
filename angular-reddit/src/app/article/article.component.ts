import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  @Input() article: Article;
  gg: Article[];
  //@HostBinding('attr.class') cssClass = 'card';

  //naturalmente le variabili si possono anche non mettre anche perchè le abbiamo già messe nella OOP ts
  //variabili globali
  //votes: number;
  //title: string;
  //link: string;

  constructor() {
    /*
      this.title = 'Angular 2';
    this.link = 'http//angular.io'
    this.votes = 10;
     */
    //this.article = new Article('Angular 2', 'http://angualr.io', 10);
  }

  //metodo creato soltanto per riprendere quello fatto nella OOP del ts così da poterlo utilizzarel nell'html se no impossibilie
  voteUp(): boolean {
    this.article.votes += 1;

    //this.article.voteUp(); //acceddiamo alla proprietà votes di article
    return false; //per far si che l'evento non venga propagato
  }

  voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }

  ngOnInit(): void {}
}

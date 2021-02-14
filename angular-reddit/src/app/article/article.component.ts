import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'card';

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
  voteUp(): Boolean {
    this.article.voteUp(); //acceddiamo alla proprietà votes di article
    return false; //per far si che l'evento non venga propagato
  }

  voteDown(): Boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {}
}

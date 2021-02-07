import { Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @HostBinding('attr.class') cssClass = 'card';
 

  //variabili globali
  votes: number;
  title: string;
  link: string;

  constructor() {
    /*
      this.title = 'Angular 2';
    this.link = 'http//angular.io'
    this.votes = 10;
     */

    //this.article = new Article('Angular 2', 'http://angualr.io', 10);
  }

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

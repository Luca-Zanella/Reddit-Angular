import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Email } from '../models/email.model';

@Component({
  selector: 'app-sent-email',
  templateUrl: './sent-email.component.html',
  styleUrls: ['./sent-email.component.css'],
})
export class SentEmailComponent implements OnInit {
  @Input() email: Email;
  @HostBinding('attr.class') cssClass = 'card';
  @HostBinding('style.background') private background;

  isShow: boolean = true;
  //bgColor : string = '#ffffff';
  agg: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  espandi() {
    this.isShow = !this.isShow;
  }
  
  /*
  speciale(){

    if(this.agg == true){
      this.background = 'yellow';
      this.agg = false
    }else{
      this.background = 'white'
      this.agg = true;
    }
    
    
  }
  */


  speciale(): string {
    if(! this.email.speciale()){
      return this.background = 'white'
    }else{
      return this.background = 'yellow'
    }

    //return (this.background = 'yellow');
  }

  //return this.background = 'yellow'
}

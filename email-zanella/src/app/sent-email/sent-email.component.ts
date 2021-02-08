import { Component, HostBinding, Input, OnInit } from '@angular/core';
import {Email} from '../models/email.model'

@Component({
  selector: 'app-sent-email',
  templateUrl: './sent-email.component.html',
  styleUrls: ['./sent-email.component.css']
})
export class SentEmailComponent implements OnInit {
  @Input() email: Email;
  @HostBinding('attr.class') cssClass = 'card';
  isShow: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  espandi(){
    this.isShow = ! this.isShow;
  }

}

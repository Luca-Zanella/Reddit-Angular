import { Component } from '@angular/core';
import { Email } from './models/email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  emails: Email[];
  constructor() {
    this.emails = [
      //in questo modo andiamo a prendere il costruttore creato nell'OOP del ts 
      //e con new Article usiamo i paraemtri del costruttori che eranoo 3 e 3 vengono dati con string string e votes?
      new Email('zanella.luca@iisgalvanimi.edu.it','Presentazione Programma','Questo è la presentazione per oggi'),
      new Email('siriani.andrea@iisgalvanimi.edu.it','Testo Inglese','Questi sono gli appunti di inglese'),
      new Email('pierro.nicolo@iisgalvanimi.edu.it','Party','Vieni a giocare')
      
    ]
  }

  sendEmail(destinatario: HTMLInputElement, oggetto: HTMLInputElement, testo: HTMLInputElement): boolean{
    this.emails.push(new Email(destinatario.value,oggetto.value,testo.value))
    destinatario.value = ''
    oggetto.value = ''
    testo.value = ''

    return false
  }

 









}

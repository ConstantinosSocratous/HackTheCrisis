import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],

})
export class ChatComponent{


  messageToSend: string;

  messages: Array<String> = [];

  constructor(public navCtrl: NavController) {
    this.messageToSend = '';
  }

  sendMessage(){
    this.messages.push(this.messageToSend)
    this.messageToSend = ''
  }

}

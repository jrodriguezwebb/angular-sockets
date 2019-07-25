import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../../app/services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';
  mensajesSubscription;

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit() {
    this.mensajesSubscription = this.chatService.getMessages().subscribe( msg => {
      console.log(msg);
    });
  }

  enviar() {
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

  ngOnDestroy() {
    if (this.mensajesSubscription) {
      this.mensajesSubscription.unsubscribe();
    }
  }

}

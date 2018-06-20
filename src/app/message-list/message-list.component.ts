import { Component, OnInit } from '@angular/core';
import {MessageService} from '../service/message.service';
import {Message} from '../service/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[];

  constructor(private service: MessageService) {
    this.service.getAll().subscribe(
      messages => this.messages = messages
    );
  }

  ngOnInit() {
  }

}

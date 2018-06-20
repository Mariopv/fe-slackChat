import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../service/message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent {

  @Input('message') message: Message;

  constructor() {}

}

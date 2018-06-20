import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../service/message';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent {

  @Input('message') message: Message;

  @Input('lastItem') lastItem = true;  // Pending check last written message

  isClosed = false;

  constructor() {}

  close() {
    if (this.lastItem && confirm('Are you sure you would like to finish the conversation?')) {
      console.log('Conversation has been close');
      this.isClosed = true;
    }
  }

}

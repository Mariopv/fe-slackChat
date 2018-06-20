import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessageService} from '../service/message.service';
import {Message} from '../service/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMessages') private scrollMessages: ElementRef;

  messages: Array<Message> = [];

  constructor(private service: MessageService) {
    this.service.getAll('temedica').subscribe(
      (data: Array<Message>) => this.messages = data
    );
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollMessages.nativeElement.scrollTop = this.scrollMessages.nativeElement.scrollHeight;
    } catch(err) { }
  }

}

import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessageService} from '../service/message.service';
import {Message} from '../service/message';
import {ISubscription} from 'rxjs-compat/Subscription';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMessages') private scrollMessages: ElementRef;

  messages: Array<Message> = [];
  subscription: ISubscription;

  constructor(private service: MessageService) {
    this.loadData();

    this.subscription = this.service.messagesSource$.subscribe(
      data => this.loadData());
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private loadData() {
    this.service.getAll('temedica').subscribe(
      (data: Array<Message>) => this.messages = data
    );
  }

  private scrollToBottom(): void {
    try {
      this.scrollMessages.nativeElement.scrollTop = this.scrollMessages.nativeElement.scrollHeight;
    } catch(err) { }
  }

}

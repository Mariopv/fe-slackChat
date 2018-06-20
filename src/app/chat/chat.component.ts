import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../service/message.service';
import {Message} from '../service/message';
import {Observable} from 'rxjs';
import {ISubscription} from 'rxjs-compat/Subscription';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnDestroy {

  form: FormGroup;
  maxlength = 250;

  subscribe: ISubscription;

  constructor(private fb: FormBuilder,
              private service: MessageService) {
    this.form = this.fb.group(
      {
        message: [null, Validators.required]
      });
  }

  send() {
    const msg: Message = new Message();
    msg.text =  this.message.value;
    msg.user = 'temedica';
    msg.channel = 'support';
    msg.ts = '123456';
    this.subscribe = this.service.send(msg).subscribe((res: Message) => {
      this.message.setValue('');
    });
  }

  get message() {
    return this.form.get('message');
  }

  set message(value: any) {
    this.message.get('message').setValue(value);
  }

  ngOnDestroy(): void {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }

}

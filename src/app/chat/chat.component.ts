import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../service/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  form: FormGroup;
  maxlength = 250;

  constructor(private fb: FormBuilder,
              private service: MessageService) {
    this.form = this.fb.group(
      {
        message: [null, Validators.required]
      });
  }

  send(msg: string) {
    this.service.send(msg).subscribe( res => {
      console.log('sending', res);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  form: FormGroup;
  maxlength = 250;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        message: [null, Validators.required]
      });
  }

  send(msg: string) {
    console.log('sending', msg);
  }

}

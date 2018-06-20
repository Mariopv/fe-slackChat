import {Injectable} from '@angular/core';
import {Message} from './message';
import {HttpClient} from '@angular/common/http';

import 'rxjs-compat/add/observable/of';
import { Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messagesSource = new Subject<any>();
  messagesSource$ = this.messagesSource.asObservable();

  // private baseUrl = 'http://192.168.1.59:8080/api';
  private baseUrl = '/api';

  constructor(private httpClient: HttpClient) { }

  getAll(username: string) {
    return this.httpClient.get(this.baseUrl + '/slackmessage/' + username);
  }

  send(msg: Message) {
    return this.httpClient.post(this.baseUrl + '/slackmessage/send', msg);
  }

  refresh() {
    this.messagesSource.next(true);
  }

}

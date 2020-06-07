import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket: any;
  uri: string;

  constructor() {
    this.uri = "ws://localhost:3002";
    this.socket = io(this.uri);
    console.log("IO CONNECTED");
    this.emit("coucou", null);
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
  public sendMessage(message, username) {
    this.socket.emit('new-message', { message: message, username: username });
    console.log('message envoyé', message)
  }
  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message, username) => {
        observer.next(message, username);
        console.log('message attrapé')
      });
    });
  }
}

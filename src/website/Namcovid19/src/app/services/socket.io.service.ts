import { Injectable } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';
import { environment } from '../../environments/environment';

const { websocketUrl } = environment;

@Injectable()
export class SocketService {
  constructor() {

  }

  private subject: Subject<MessageEvent>;

  /**
   * @name connect
   * @description users the @create method to create an instance of a subscriable subject
   * @returns {Subject} subscriable subject on which the client listens for data 
   */
  public connect(): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(websocketUrl);
      console.log("Successfully connected: " + websocketUrl);
    }
    return this.subject;
  }

  /**
   * 
   * @param url uri endpoint to the websocket server
   * @description creates a connection with the websocket server
   * @returns {Subject} returns a subcribe-able subject
   */
  private create(url): Subject<MessageEvent> {
    // websocket instance
    let ws = new WebSocket(url);

    let observable = Observable.create((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return Subject.create(observer, observable);
  }
}

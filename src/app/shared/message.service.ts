import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private data = new BehaviorSubject(null);
  sharedData = this.data.asObservable();

  constructor() { }

  nextMessage(message: any) {
    this.data.next(message)
  }
}

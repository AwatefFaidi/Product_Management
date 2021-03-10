import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent } from '../state/product.state';

@Injectable({
  providedIn: 'root'
})
export class EventdriverService {
  sourceEventSubject:Subject<ActionEvent>=new Subject<ActionEvent>();
  sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

  constructor() { }
  // when we call this method, we publish  ActionEvent as (msg) subject
  publishEvent(event:ActionEvent)
  {
    this.sourceEventSubject.next(event);
  
  }
}

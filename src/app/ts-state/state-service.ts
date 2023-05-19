import { Subject } from 'rxjs';

export class StateService {
  private _message$ = new Subject<string>();
  public message$ = this._message$.asObservable();

  public setMessage(message: string) {
    this._message$.next(message);
  }
}

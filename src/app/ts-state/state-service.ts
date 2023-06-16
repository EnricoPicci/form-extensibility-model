import { Subject } from 'rxjs';

export class StateService {
  private _formValue$ = new Subject<any>();
  public formValue$ = this._formValue$.asObservable();

  private _message$ = new Subject<string>();
  public message$ = this._message$.asObservable();

  public setMessage(message: string) {
    this._message$.next(message);
  }

  public setFormValue(val: any) {
    this._formValue$.next(val);
  }
}

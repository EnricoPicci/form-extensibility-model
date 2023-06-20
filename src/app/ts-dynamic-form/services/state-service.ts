import { ReplaySubject, Subject } from 'rxjs';

export class StateService {
  public dialogueName = 'No name set';
  public dialoguePath = 'No path set';

  private _formValue$ = new ReplaySubject<any>(1);
  public formValue$ = this._formValue$.asObservable();

  private _nextRoute$ = new Subject<string>();
  public nextRoute$ = this._nextRoute$.asObservable();

  private _message$ = new Subject<string>();
  public message$ = this._message$.asObservable();

  private _formValue: any;
  public get formValue(): any {
    return this._formValue;
  }
  public set formValue(value: any) {
    this._formValue = value;
    this._formValue$.next(this._formValue);
  }
  public mergeIntoFormValue(value: any) {
    if (!this._formValue) {
      this._formValue = {};
    }
    this._formValue = { ...this._formValue, ...value };
    this._formValue$.next(this._formValue);
  }

  public nextRoute(route: string) {
    this._nextRoute$.next(this.dialoguePath + route);
  }

  public setMessage(message: string) {
    this._message$.next(message);
  }
}

import { ReplaySubject, Subject, of, tap } from 'rxjs';

export class StateService {
  private _formValue$ = new ReplaySubject<any>(1);
  public formValue$ = this._formValue$.asObservable();

  private _formValue: any;
  public get formValue(): any {
    return this._formValue;
  }
  public set formValue(value: any) {
    this._formValue$.next(value);
    this._formValue = value;
  }
}

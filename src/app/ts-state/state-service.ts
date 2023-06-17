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

  private _nextRoute$ = new Subject<string>();
  public nextRoute$ = this._nextRoute$.asObservable();

  private _message$ = new Subject<string>();
  public message$ = this._message$.asObservable();

  public nextRoute(route: string) {
    this._nextRoute$.next(route);
  }

  public setMessage(message: string) {
    this._message$.next(message);
  }

  public saveFormValue() {
    return of(`Saved form value`).pipe(
      tap((message: string) => this.setMessage(message))
    );
  }
}

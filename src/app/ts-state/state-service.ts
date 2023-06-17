import { Subject, of, tap } from 'rxjs';
export class StateService {
  private _formValue: any;
  public get formValue(): any {
    return this._formValue;
  }
  public set formValue(value: any) {
    this._formValue = value;
  }

  private _nextRoute$ = new Subject<any>();
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

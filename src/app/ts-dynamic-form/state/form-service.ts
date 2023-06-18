import { ReplaySubject, Subject, of, tap } from 'rxjs';
import { DynamicForm } from '../form';

export class FormService {
  private _formValue$ = new ReplaySubject<any>(1);
  public formValue$ = this._formValue$.asObservable();

  private _formLayout$ = new Subject<DynamicForm>();
  public formLayout$ = this._formLayout$.asObservable();

  private _nextRoute$ = new Subject<string>();
  public nextRoute$ = this._nextRoute$.asObservable();

  private _message$ = new Subject<string>();
  public message$ = this._message$.asObservable();

  private _formValue: any;
  public get formValue(): any {
    return this._formValue;
  }
  public set formValue(value: any) {
    this._formValue$.next(value);
    this._formValue = value;
  }

  public updateFormLayout(layout: DynamicForm) {
    this._formLayout$.next(layout);
  }

  public nextRoute(route: string) {
    this._nextRoute$.next(route);
  }

  public setMessage(message: string) {
    this._message$.next(message);
  }
}

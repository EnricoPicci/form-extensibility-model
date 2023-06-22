import { ReplaySubject, Subject } from 'rxjs';
import { DynamicFormLayout } from '../form';

export class DialogueState {
  public dialogueName = 'No name set';
  public dialoguePath = 'No path set';

  private _formValue$ = new ReplaySubject<any>(1);
  public formValue$ = this._formValue$.asObservable();

  private _formLayout$ = new Subject<DynamicFormLayout>();
  public formLayout$ = this._formLayout$.asObservable();

  private _nextRoute$ = new Subject<string>();
  public nextRoute$ = this._nextRoute$.asObservable();

  private _message$ = new ReplaySubject<string>(1);
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

  public updateFormLayout(layout: DynamicFormLayout) {
    this._formLayout$.next(layout);
  }

  public nextRoute(route: string) {
    this._nextRoute$.next(this.dialoguePath + route);
  }

  public setMessage(message: string) {
    this._message$.next(message);
  }
}

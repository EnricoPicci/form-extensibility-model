import { ReplaySubject, Subject, of, tap } from 'rxjs';
import { DynamicFormLayout } from '../form';

export class DynamicFormService {
  private _formLayout$ = new Subject<DynamicFormLayout>();
  public formLayout$ = this._formLayout$.asObservable();

  private _nextRoute$ = new Subject<string>();
  public nextRoute$ = this._nextRoute$.asObservable();

  private _message$ = new Subject<string>();
  public message$ = this._message$.asObservable();

  public updateFormLayout(layout: DynamicFormLayout) {
    this._formLayout$.next(layout);
  }

  public nextRoute(route: string) {
    this._nextRoute$.next(route);
  }

  public setMessage(message: string) {
    this._message$.next(message);
  }
}

export interface DialogueFormService {}

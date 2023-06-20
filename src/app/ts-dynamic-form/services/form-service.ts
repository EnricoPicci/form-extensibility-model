import { ReplaySubject, Subject, of, tap } from 'rxjs';
import { DynamicFormLayout } from '../form';

export class DynamicFormService {
  private _formLayout$ = new Subject<DynamicFormLayout>();
  public formLayout$ = this._formLayout$.asObservable();

  public updateFormLayout(layout: DynamicFormLayout) {
    this._formLayout$.next(layout);
  }
}

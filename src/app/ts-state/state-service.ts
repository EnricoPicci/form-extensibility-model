import { Subject } from 'rxjs';
import { DynamicForm } from '../ts-dynamic-form/form';

export class StateService {
  private _formLayout$ = new Subject<DynamicForm>();
  public formLayout$ = this._formLayout$.asObservable();

  private _formValue$ = new Subject<any>();
  public formValue$ = this._formValue$.asObservable();

  private _message$ = new Subject<string>();
  public message$ = this._message$.asObservable();

  public setFormLayout(layout: DynamicForm) {
    this._formLayout$.next(layout);
  }

  public setFormValue(val: any) {
    this._formValue$.next(val);
  }

  public setMessage(message: string) {
    this._message$.next(message);
  }
}

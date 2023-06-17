import { Subject, of, tap } from 'rxjs';
import { DynamicForm } from '../ts-dynamic-form/form';

// this is a service that is used to communicate between the business logic and one specific form
// For instance, if we need to add a question or change the enabled state of a question, we can do that
// in the business logic and then update the affected form using this service.
// Therefore this siervice is provided in each Component representing a form and is shared among its children
// but not with other forms. So we can have more than one form in a page and each form will have its own
// FormService instance.
export class FormService {
  private _formLayout$ = new Subject<DynamicForm>();
  public formLayout$ = this._formLayout$.asObservable();

  private _formValue$ = new Subject<any>();
  public formValue$ = this._formValue$.asObservable();

  public updateFormLayout(layout: DynamicForm) {
    this._formLayout$.next(layout);
  }

  public updateFormValue(val: any) {
    this._formValue$.next(val);
  }
}

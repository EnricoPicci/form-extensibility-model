import { FormGroup } from '@angular/forms';

export interface FormProcessor {
  processForm(form: FormGroup): string;
}

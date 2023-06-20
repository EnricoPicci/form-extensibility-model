import { Injectable } from '@angular/core';
import { FormStateService } from '../ts-dynamic-form/services/form-state-service';

@Injectable({
  providedIn: 'root',
})
export class NgStateService extends FormStateService {
  constructor() {
    super();
  }
}

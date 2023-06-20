import { Injectable } from '@angular/core';
import { StateService } from '../ts-dynamic-form/services/state-service';

@Injectable({
  providedIn: 'root',
})
export class NgStateService extends StateService {
  constructor() {
    super();
  }
}

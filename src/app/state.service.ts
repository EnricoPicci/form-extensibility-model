import { InjectionToken } from '@angular/core';

import { StateService } from './ts-state/state-service';

export const STATE_SERVICE = new InjectionToken<StateService>('STATE_SERVICE', {
  providedIn: 'root',
  factory: () => new StateService(),
});

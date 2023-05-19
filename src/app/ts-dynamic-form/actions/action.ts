import { StateService } from '../../ts-state/state-service';

export type Action = {
  name: string;
  function: (formGroupValue: any, state: StateService) => any;
};

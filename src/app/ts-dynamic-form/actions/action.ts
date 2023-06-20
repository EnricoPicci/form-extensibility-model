import { DynamicFormElement, DynamicFormElementType } from '../form';
import { FormStateService } from '../services/form-state-service';

export class Action extends DynamicFormElement {
  name: string;
  function: (
    formGroupValue: any,
    stateService: FormStateService,
    event?: any
  ) => void;
  id: string | undefined;

  override componentType: DynamicFormElementType = 'Action';

  constructor(options: {
    name: string;
    function: (
      formGroupValue: any,
      stateService: FormStateService,
      event?: any
    ) => void;
    order: number;
    id?: string;
  }) {
    super();
    this.name = options.name || '';
    this.function = options.function;
    this.order = options.order === undefined ? 1 : options.order;
    if (!options.id) {
      this.id = options.name;
    }
  }
}

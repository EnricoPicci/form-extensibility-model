import { DynamicFormService } from '../services/form-service';
import { DynamicFormElement, DynamicFormElementType } from '../form';
import { StateService } from '../services/state-service';

export class Action extends DynamicFormElement {
  name: string;
  function: (
    formGroupValue: any,
    stateService: StateService,
    dynamicFormService: DynamicFormService,
    event?: any
  ) => void;
  id: string | undefined;

  override componentType: DynamicFormElementType = 'Action';

  constructor(options: {
    name: string;
    function: (
      formGroupValue: any,
      stateService: StateService,
      dynamicFormService: DynamicFormService,
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

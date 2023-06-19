import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';

import { DynamicFormElement, DynamicFormElementType } from '../form';
import { StateService } from '../services/state-service';

export type QuestionBaseOptions<T> = {
  value?: T;
  key: string;
  label?: string;
  required?: boolean | null | undefined;
  enabled?: boolean | null | undefined;
  order?: number;
  controlType?: string;
  type?: string;
  onChangeHandler?: (
    formGroupValue: any,
    stateService: StateService,
    dialogueFormService: DialogueFormService,
    event?: any
  ) => void;
};

export abstract class QuestionBase<T> extends DynamicFormElement {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean | null | undefined;
  enabled: boolean | null | undefined;
  controlType: string;
  type: string;
  onChangeHandler?: (
    formGroupValue: any,
    stateService: StateService,
    dialogueFormService: DialogueFormService,
    event?: any
  ) => void;

  override componentType: DynamicFormElementType = 'Question';

  constructor(options: QuestionBaseOptions<T> = { key: '' }) {
    super();
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = options.required;
    this.enabled = options.enabled;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.onChangeHandler = options.onChangeHandler;
  }
}

import { DynamicFormElement, DynamicFormElementType } from '../form';

export abstract class QuestionBase<T> extends DynamicFormElement {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  controlType: string;
  type: string;
  options: { key: string; value: T }[];

  override componentType: DynamicFormElementType = 'Question';

  constructor(
    options: {
      value?: T;
      key: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      options?: { key: string; value: T }[];
    } = { key: '' }
  ) {
    super();
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}

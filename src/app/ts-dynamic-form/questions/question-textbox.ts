import {
  DialogueFormService,
  DynamicFormService,
} from 'src/app/ts-dynamic-form/services/form-service';

import { QuestionBase, QuestionBaseOptions } from './question-base';
import { StateService } from '../services/state-service';

export type TextboxQuestionOptions = QuestionBaseOptions<string> & {
  onBlurHandler?: (
    formGroupValue: any,
    stateService: StateService,
    dialogueFormService: DialogueFormService,
    event?: any
  ) => void;
};

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';

  onBlurHandler?: (
    formGroupValue: any,
    stateService: StateService,
    dialogueFormService: DialogueFormService,
    event: any
  ) => void;

  constructor(options: TextboxQuestionOptions) {
    super(options);
    this.onBlurHandler = options.onBlurHandler;
  }
}

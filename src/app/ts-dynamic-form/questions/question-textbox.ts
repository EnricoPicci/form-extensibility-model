import { FormService } from 'src/app/ts-dynamic-form/state/form-service';

import { QuestionBase, QuestionBaseOptions } from './question-base';

export type TextboxQuestionOptions = QuestionBaseOptions<string> & {
  onBlurHandler?: (
    formGroupValue: any,

    formService: FormService,
    event: any
  ) => void;
};

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';

  onBlurHandler?: (
    formGroupValue: any,

    formService: FormService,
    event: any
  ) => void;

  constructor(options: TextboxQuestionOptions) {
    super(options);
    this.onBlurHandler = options.onBlurHandler;
  }
}

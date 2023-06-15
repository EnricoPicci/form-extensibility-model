import { StateService } from 'src/app/ts-state/state-service';
import { QuestionBase, QuestionBaseOptions } from './question-base';

export type TextboxQuestionOptions = QuestionBaseOptions<string> & {
  onBlurHandler?: (formGroupValue: any, state: StateService) => void;
};

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';

  onBlurHandler?: (
    formGroupValue: any,
    state: StateService,
    event: any
  ) => void;

  constructor(options: TextboxQuestionOptions) {
    super(options);
    this.onBlurHandler = options.onBlurHandler;
  }
}

import { QuestionBase, QuestionBaseOptions } from './question-base';
import { FormStateService } from '../services/form-state-service';

export type TextboxQuestionOptions = QuestionBaseOptions<string> & {
  onBlurHandler?: (
    formGroupValue: any,
    stateService: FormStateService,
    event?: any
  ) => void;
};

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';

  onBlurHandler?: (
    formGroupValue: any,
    stateService: FormStateService,
    event: any
  ) => void;

  constructor(options: TextboxQuestionOptions) {
    super(options);
    this.onBlurHandler = options.onBlurHandler;
  }
}

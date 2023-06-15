import { StateService } from 'src/app/ts-state/state-service';
import { QuestionBase, QuestionBaseOptions } from './question-base';

export type DropdownQuestionOptions = QuestionBaseOptions<string> & {
  onChangeHandler?: (
    formGroupValue: any,
    state: StateService,
    event: any
  ) => void;
};

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';

  onChangeHandler?: (
    formGroupValue: any,
    state: StateService,
    event: any
  ) => void;

  constructor(options: DropdownQuestionOptions) {
    super(options);
    this.onChangeHandler = options.onChangeHandler;
  }
}

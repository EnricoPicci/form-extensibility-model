import { TextboxQuestion } from '../../dynamic-form-ts/questions/question-textbox';
import { toFormGroup } from './form-group-questions-convertions';

describe(`fromFormGroup`, () => {
  it(`converts a FormGroup to an object`, (done) => {
    const firstName = 'Andrea';
    const lastName = 'Any';
    const questions = [
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: firstName,
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'lasttName',
        label: 'Last name',
        value: lastName,
        required: true,
        order: 2,
      }),
    ];
    const formGroup = toFormGroup(questions);

    const obj = formGroup.value;

    expect(obj).toEqual({ firstName: firstName, lasttName: lastName });
  });
});

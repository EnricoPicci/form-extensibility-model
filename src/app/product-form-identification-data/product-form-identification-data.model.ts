import { QuestionBase } from '../questions/question-base';
import { DropdownQuestion } from '../questions/question-dropdown';
import { TextboxQuestion } from '../questions/question-textbox';

const productIdentificationDataQuestions: QuestionBase<any>[] = [
  new DropdownQuestion({
    key: 'sex',
    label: 'sex',
    options: [
      { key: 'male', value: 'Male' },
      { key: 'female', value: 'Female' },
      { key: 'unspecified', value: 'Prefer not say' },
    ],
    order: 3,
  }),

  new TextboxQuestion({
    key: 'firstName',
    label: 'First name',
    value: '',
    required: true,
    order: 1,
  }),

  new TextboxQuestion({
    key: 'lasttName',
    label: 'Last name',
    value: '',
    required: true,
    order: 2,
  }),

  new TextboxQuestion({
    key: 'emailAddress',
    label: 'Email',
    type: 'email',
    order: 4,
  }),
];

export function getProductIdentificationDataQuestions() {
  return productIdentificationDataQuestions.sort((a, b) => a.order - b.order);
}

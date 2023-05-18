import { QuestionBase } from '../../dynamic-form-ts/questions/question-base';
import { DropdownQuestion } from '../../dynamic-form-ts/questions/question-dropdown';
import { TextboxQuestion } from '../../dynamic-form-ts/questions/question-textbox';

const generaliIdentificationDataQuestions: QuestionBase<any>[] = [
  new DropdownQuestion({
    key: 'veneto',
    label: 'veneto',
    options: [
      { key: 'yes', value: 'Yes' },
      { key: 'no', value: 'No' },
    ],
    order: 1,
  }),
];

export function getGeneraliIdentificationDataQuestions() {
  return generaliIdentificationDataQuestions.sort((a, b) => a.order - b.order);
}

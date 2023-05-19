import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { DropdownQuestion } from '../../ts-dynamic-form/questions/question-dropdown';
import { TextboxQuestion } from '../../ts-dynamic-form/questions/question-textbox';

export function getProductAddressQuestions() {
  const productAddressQuestions: QuestionBase<any>[] = [
    new TextboxQuestion({
      key: 'street',
      label: 'Street',
      value: '',
      required: true,
      order: 1,
    }),

    new TextboxQuestion({
      key: 'city',
      label: 'City',
      value: '',
      required: true,
      order: 2,
    }),
  ];

  return productAddressQuestions.sort((a, b) => a.order - b.order);
}

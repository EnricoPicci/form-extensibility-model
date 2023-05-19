import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { TextboxQuestion } from '../../ts-dynamic-form/questions/question-textbox';

import { getProductAddressQuestions } from '../../ts-product/form-address/form-address.model';

export function getGeneraliAddressQuestions() {
  const generaliAddressQuestions: QuestionBase<any>[] = [
    new TextboxQuestion({
      key: 'state',
      label: 'State',
      value: '',
      required: true,
      order: 2,
    }),
  ];

  const questions = [
    ...getProductAddressQuestions(),
    ...generaliAddressQuestions,
  ];

  return questions.sort((a, b) => a.order - b.order);
}

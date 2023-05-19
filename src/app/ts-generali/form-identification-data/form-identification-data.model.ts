import { QuestionBase } from '../../ts-dynamic-form/questions/question-base';
import { DropdownQuestion } from '../../ts-dynamic-form/questions/question-dropdown';

import { getProductIdentificationDataQuestions } from '../..//ts-product/form-identification-data/form-identification-data.model';

export function getGeneraliIdentificationDataQuestions() {
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

  const questions = [
    ...getProductIdentificationDataQuestions(),
    ...generaliIdentificationDataQuestions,
  ];

  return questions.sort((a, b) => a.order - b.order);
}

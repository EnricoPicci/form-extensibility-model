import { TextboxQuestion } from 'src/app/ts-dynamic-form/questions/question-textbox';
import { get_Form_B_Layout } from '../../dialogue-product/form-b/form-b.form';
import { getTransitFrom_B_to_C_Spain } from './form-b.actions';

export function getFormXSpainLayout() {
  // retrieve the layout for Form B at the Product level
  const formLayout = get_Form_B_Layout();

  // create the new question
  const newQuestion = new TextboxQuestion({
    key: 'field-B-Spain',
    label: 'Field-B-Spain',
    value: '',
    order: 1.5,
  });

  // add the new question to the layout
  formLayout.elements.push(newQuestion);

  // get the action we want to customize
  const nextAction = formLayout.getUniqueAction('Next');

  // customize the action setting th new function
  nextAction.function = getTransitFrom_B_to_C_Spain(formLayout);

  // return the customized layout
  return formLayout;
}

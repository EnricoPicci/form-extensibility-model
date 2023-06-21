import { Action } from 'src/app/ts-dynamic-form/actions/action';
import { get_Form_A_Layout } from '../../dialogue-product/form-a/form-a.form';
import { getToFormC } from './form-a.actions';

export function getFormAGeneraliLayout() {
  // retrieve the layout for Form A at the Product level
  // this is the layout that we want to customize
  const formLayout = get_Form_A_Layout();

  // create the new action
  const goToFormC_Action = new Action({
    name: 'Go to Form C',
    function: getToFormC(formLayout),
    order: 3,
  });

  // add the new action to the layout
  formLayout.elements.push(goToFormC_Action);

  // return the customized layout
  return formLayout;
}

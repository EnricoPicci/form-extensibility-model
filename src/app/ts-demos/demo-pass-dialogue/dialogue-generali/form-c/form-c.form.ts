import { get_Form_C_Layout } from '../../dialogue-product/form-c/form-c.form';
import { getPreviousGenerali } from './form-c.actions';

export function getFormCGeneraliLayout() {
  // retrieve the layout for Form A at the Product level
  // this is the layout that we want to customize
  const formLayout = get_Form_C_Layout();

  // get the action we want to customize
  console.log('>>>>>>>>>>>>>>>>>>>>>> formLayout', formLayout);
  const previousAction = formLayout.getUniqueAction('Previous');

  // customize the action setting th new function
  previousAction.function = getPreviousGenerali(formLayout);

  // return the customized layout
  console.log('>>>>>>>>>>>>>>>>>>>>>> formLayout', formLayout);
  return formLayout;
}

import { productSave } from '../../ts-product/form-identification-data/form-identification-data.actions';

export function generaliSave(formGroupValue: any) {
  // first run the product save logic
  console.log('first run the product save logic');
  const productSaveLogicRes = productSave(formGroupValue);
  // then run the Generali save logic
  const generaliSaveLogicRes = `Veneto? ${formGroupValue.veneto}`;
  return `Result of Product logic ${productSaveLogicRes} --- Result of Generali logic ${generaliSaveLogicRes}`;
}

export function getGeneraliIdentificationDataActions() {
  return [
    {
      name: 'Save',
      function: generaliSave,
    },
  ];
}

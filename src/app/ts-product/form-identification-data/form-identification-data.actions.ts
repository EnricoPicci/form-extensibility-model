export function productSave(formGroupValue: any) {
  return `ProductIdentificationData saved: ${JSON.stringify(formGroupValue)}`;
}

export function getProductIdentificationDataActions() {
  return [
    {
      name: 'Save',
      function: productSave,
    },
  ];
}

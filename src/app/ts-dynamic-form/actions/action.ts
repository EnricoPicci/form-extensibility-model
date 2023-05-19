export type Action = {
  name: string;
  function: (formGroupValue: any) => any;
};

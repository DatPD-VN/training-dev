type TUseDetailProductProps = {
  isPhoneScreen : boolean,
  countCart : number,
  product : Array<string>,
  handleAdd: (item: any) => void,
  handleNoPlus: () => void,
  handlePlus: () => void,
  handleClick: (item: any) => void,
};

export type { TUseDetailProductProps };

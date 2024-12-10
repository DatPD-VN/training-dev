type TUseDetailProductProps = {
  isPhoneScreen: boolean;
  countCart: number;
  product: Array<object>;
  handleAdd: (item: any) => void;
  handleNoPlus: () => void;
  handlePlus: () => void;
  handleClick: (item: any) => void;
};

export type { TUseDetailProductProps };

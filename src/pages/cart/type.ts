type TUseCartProps = {
  isPhoneScreen: boolean;
  cart: Array<string>;
  totalCart: number;
  countCart: number;
  hadleDel: (id: any) => void;
  hadleCase: (handle: any, item: any) => void;
};



export type { TUseCartProps };

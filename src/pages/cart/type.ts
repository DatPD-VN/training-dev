type TUseCartProps = {
  isPhoneScreen: boolean;
  listProduct: Array<object>;
  listSearchCart: Array<string>;
  totalCart: number;
  countCart: number;
  handleDel: (id: any) => void;
  handleDelAll: () => void;
  handleCheck: (id: never) => void;
  handleCase: (handle: string, item: any) => void;
  handleSearch:() => void;
  handleCheckAll:() => void;
  inputRef: React.RefObject<HTMLInputElement>;
  isSelectId : Array<object>
};

export type { TUseCartProps };

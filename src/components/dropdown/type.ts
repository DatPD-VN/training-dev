type DropdownItem = {
  value: number;
  keyValue: string;
};

type DropdownProps<T extends Record<string, any>> = {
  name: string;
  title?: string;
  data: Array<T>;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  selectedId?: number | string;
  onSelect?: (value: string | number, id: string) => void;
  keyValue: keyof T;
};
type TUseDropDown = {
  isOpen: boolean;
  selectedItem: any;
  dropdownClass: string;
  handleChange: (item: DropdownItem) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type { DropdownItem, DropdownProps, TUseDropDown };

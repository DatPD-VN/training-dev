type DropdownItem = {
  value: number;
  keyValue: string;
};

type DropdownProps = {
  name: string;
  title?: string;
  data: any;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  selectedId?: number | string;
  onSelect?: (value: number | string, id: string) => void;
  keyValue: string;
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

type DropdownItem = {
  value: number;
};

type DropdownProps = {
  name: string;
  title?: string;
  data: DropdownItem[];
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  selectedId?: number;
  onSelect?: (value: number, id: string) => void;
};
type TUseDropDown = {
  isOpen: boolean;
  selectedItem: DropdownItem | undefined;
  dropdownClass: string;
  handleChange: (item: DropdownItem) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type { DropdownItem, DropdownProps, TUseDropDown };

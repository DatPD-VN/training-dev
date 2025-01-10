import { useRef, useState } from "react";
import { TUseDropDown } from "./type";
import useOutsideClick from "../outSideClick/hook";
import styles from "./styles.module.scss";

const useDropDown = (
  name: string,
  position = "bottom-left",
  keyValue: string,
  onSelect?: (value: number | string, id: string) => void,
  selectedId?: number | string
): TUseDropDown => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(selectedId);

  /**
   * Function Handle Change Item
   * @param item: any
   *
   */
  const handleChange = (item: any) => {
    setSelectedItem(item[keyValue]);
    onSelect && onSelect(item[keyValue], name);
    setIsOpen(false);
  };

  /**
   * Handle Open/Close DropDown
   *
   */
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const dropdownClass = `
    ${position === "bottom-right" && styles.bottomRight}
    ${position === "bottom-left" && styles.bottomLeft}
    ${position === "top-right" && styles.topRight}
    ${position === "top-left" && styles.topLeft}
  `;
  return {
    isOpen,
    selectedItem,
    dropdownClass,
    handleChange,
    dropdownRef,
    setIsOpen,
  };
};

export default useDropDown;

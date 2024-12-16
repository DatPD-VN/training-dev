import { useRef, useState } from "react";
import { DropdownItem, TUseDropDown } from "./type";
import useOutsideClick from "../outSideClick/hook";
import styles from "./styles.module.scss";

const useDropDown = (
  name: string,
  position = "bottom-left",
  onSelect?: (value: number, id: string) => void
): TUseDropDown => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = JSON.parse(localStorage.getItem("profileData") as string);
  const dataUser = {
    value: user[name],
  };
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    user ? dataUser : undefined
  );

  //   Handle Change Item
  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect && onSelect(item.value, name);
    setIsOpen(false);
  };

  //   Handle Open/Close DropDown
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

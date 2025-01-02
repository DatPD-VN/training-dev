import { ChevronDown } from "lucide-react";
import styles from "./styles.module.scss";
import { DropdownProps } from "./type";
import useDropDown from "./hook";

const Dropdown = <T extends Record<string, any>>(pops: DropdownProps<T>) => {
  const {
    name,
    title = "Select",
    data,
    position = "bottom-left",
    onSelect,
    keyValue,
    selectedId,
  } = pops;
  const {
    isOpen,
    selectedItem,
    dropdownClass,
    handleChange,
    dropdownRef,
    setIsOpen,
  } = useDropDown(name, position, keyValue as string, onSelect, selectedId);
  return (
    <div ref={dropdownRef} className={styles.dropDownClassContainer}>
      <button
        id={name}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={` ${styles.buttonOption}`}
      >
        <span>{selectedId || title}</span>
        <ChevronDown
          size={20}
          className={`
            ${styles.chevronDown}
            ${isOpen && styles.rotate180}
          `}
        />
      </button>
      {/* Open */}
      {isOpen && (
        <div
          aria-label="Dropdown menu"
          className={`${styles.dropDownClass} ${dropdownClass}`}
        >
          <ul
            role="menu"
            aria-labelledby={name}
            aria-orientation="vertical"
            className="leading-10"
          >
            {data?.map((item: any, index: number) => (
              <li
                key={index}
                onClick={() => handleChange(item)}
                className={`
                  ${styles.optionItem}
                  ${selectedItem === item[keyValue] && styles.bgGray300}
                `}
              >
                <span>{item[keyValue]}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import { ChevronDown } from "lucide-react";
import styles from "./styles.module.scss";
import { DropdownProps } from "./type";
import useDropDown from "./hook";

const Dropdown = ({
  name,
  title = "Select",
  data,
  position = "bottom-left",
  onSelect,
}: DropdownProps) => {
  const {
    isOpen,
    selectedItem,
    dropdownClass,
    handleChange,
    dropdownRef,
    setIsOpen,
  } = useDropDown(name, position, onSelect);

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
        <span>{selectedItem?.value || title}</span>
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
            {data?.map((item) => (
              <li
                key={item.value}
                onClick={() => handleChange(item)}
                className={`
                  ${styles.optionItem}
                  ${selectedItem?.value === item.value && styles.bgGray300}
                `}
              >
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

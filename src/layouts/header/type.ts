import { TCategoryState } from "../../recoil/type";

type THeaderProps = {
  handleNav: () => void;
  handleOpen: () => void;
  tag: string;
  handleSearch: (item: string) => void;
  searchRef: React.RefObject<HTMLInputElement>;
  inputSearch: () => void;
  isDisabled: boolean;
  listHashtag: Array<string>;
  handleAddHashTag: (item: string) => void;
  countCart: number;
  inputRef: React.RefObject<HTMLDivElement>;
  userName: string | null;
  userImage: string | null;
  handleLogOut: () => void;
  list: Array<TCategoryState>;
  handleAddCategory: (item: TCategoryState) => void;
};

export type { THeaderProps };

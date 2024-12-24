import { TCategoryState } from "../../recoil/type";

type THeaderProps = {
  handleNav: () => void;
  handleOpen: () => void;
  tag: string;
  handleChangeSearch: (item: string) => void;
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
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  isSearch: boolean;
};

export type { THeaderProps };

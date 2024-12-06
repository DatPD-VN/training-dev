
type THeaderProps = {
  handleNav: ()=> void,
  handleOpen: ()=> void,
  tag : string,
  handleSearch: (item : any)=> void,
  searchRef : React.RefObject<HTMLInputElement>,
  inputSearch: ()=> void,
  isDisabled : boolean,
  listHashtag : Array<string>,
  handleAddHashTag: (item : any)=> void,
  countCart : number,
  inputRef : React.RefObject<HTMLDivElement>,
};



export type { THeaderProps };

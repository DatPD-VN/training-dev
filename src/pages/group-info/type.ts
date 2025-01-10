import { TUserSearch } from "../add-chats/type";
import { TDataSideBar } from "../sidebar-chat/type";

type GroupInfoProps = {
  onClose: () => void;
  informationGroup: TDataSideBar;
};
type THookGroupInfo = {
  listMembers: TUserSearch[];
  removeMember: (id: number) => void;
  searchTerm: string;
  handleSearch: (term: string) => void;
  searchResults: TUserSearch[];
  addMember: (member: TUserSearch) => void;
  handleDeleteGroup: () => void;
};

export type { GroupInfoProps, THookGroupInfo };

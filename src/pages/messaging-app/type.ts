import React from "react";
import { TDataSideBar } from "../sidebar-chat/type";

type GroupInfoProps = {
  onClose: () => void;
  informationGroup: TDataSideBar;
};
type THookMessageApp = {
  activeChat: number;
  setActiveChat: React.Dispatch<React.SetStateAction<number>>;
  setTypeChat: React.Dispatch<React.SetStateAction<string>>;
  toggleAddChats: () => void;
  typeChat: string;
  toggleGroupInfo: () => void;
  setInformationGroup: React.Dispatch<React.SetStateAction<TDataSideBar>>;
  showGroupInfo: boolean;
  setShowGroupInfo: React.Dispatch<React.SetStateAction<boolean>>;
  informationGroup: TDataSideBar;
  showAddChats: boolean;
  setShowAddChats: React.Dispatch<React.SetStateAction<boolean>>;
};

export type { GroupInfoProps, THookMessageApp };

import { useEffect, useState } from "react";
import { TDataSideBar } from "../sidebar-chat/type";
import { THookMessageApp } from "./type";

export const useMessageApp = (): THookMessageApp => {
  const historyChats = JSON.parse(
    localStorage.getItem("HistoryChats") as string
  );
  const [activeChat, setActiveChat] = useState(() => {
    const value = localStorage.getItem("activeChat");
    return value ? value : historyChats ? historyChats[0].id : 1;
  });
  const [typeChat, setTypeChat] = useState(() => {
    const value = localStorage.getItem("typeChat");
    return value ? value : historyChats ? historyChats[0].type : "typeChat";
  });
  const [showGroupInfo, setShowGroupInfo] = useState(false);
  const [showAddChats, setShowAddChats] = useState(false);
  const [informationGroup, setInformationGroup] =
    useState<TDataSideBar>(Object);

  useEffect(() => {
    localStorage.setItem("activeChat", activeChat);
    localStorage.setItem("typeChat", typeChat);
  }, [activeChat, typeChat]);

  const toggleGroupInfo = () => {
    setShowGroupInfo(!showGroupInfo);
  };
  const toggleAddChats = () => {
    setShowAddChats(!showGroupInfo);
  };
  return {
    activeChat,
    setActiveChat,
    setTypeChat,
    toggleAddChats,
    typeChat,
    toggleGroupInfo,
    setInformationGroup,
    showGroupInfo,
    setShowGroupInfo,
    informationGroup,
    showAddChats,
    setShowAddChats,
  };
};

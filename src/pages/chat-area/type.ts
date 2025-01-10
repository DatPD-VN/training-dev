import React from "react";
import { TDataSideBar } from "../sidebar-chat/type";

type Message = {
  id: number;
  sender: string;
  content: string;
};

type ChatAreaProps = {
  activeChat: number;
  typeChat: string;
  toggleGroupInfo: () => void;
  setInformationGroup: React.Dispatch<React.SetStateAction<TDataSideBar>>;
};
type THookChatArea = {
  information: TDataSideBar;
  isLoading: boolean;
  error: string | null;
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
  handleSendMessage: (e: React.FormEvent) => void;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  selectedFiles: File[];
  handleRemoveFile: (fileToRemove: File) => void;
  handleSendMessageWithFile: (e: React.FormEvent) => void;
  setIsEmojiPickerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEmojiPickerVisible: boolean;
};

export type { Message, ChatAreaProps, THookChatArea };

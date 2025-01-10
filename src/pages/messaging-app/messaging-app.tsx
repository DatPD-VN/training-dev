import { SidebarChat } from "../sidebar-chat/sidebar-chat";
import { ChatArea } from "../chat-area/chat-area";
import { GroupInfo } from "../group-info/group-info";
import { AddChats } from "../add-chats/add-chats";
import { useMessageApp } from "./hook";
import styles from "./styles.module.scss";

export default function MessagingApp() {
  const {
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
  } = useMessageApp();

  return (
    <div className={styles.containerChat}>
      <SidebarChat
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        setTypeChat={setTypeChat}
        toggleAddChats={toggleAddChats}
      />
      <div className={styles.containerBoxChat}>
        <ChatArea
          activeChat={activeChat}
          typeChat={typeChat}
          toggleGroupInfo={toggleGroupInfo}
          setInformationGroup={setInformationGroup}
        />
      </div>
      {showGroupInfo && (
        <GroupInfo
          onClose={() => setShowGroupInfo(false)}
          informationGroup={informationGroup}
        />
      )}
      {showAddChats && <AddChats onClose={() => setShowAddChats(false)} />}
    </div>
  );
}

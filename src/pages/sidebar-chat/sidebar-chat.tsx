import { MessageCirclePlus, Search } from "lucide-react";
import React from "react";
import { SidebarProps } from "./type";
import { useSidebar } from "./hook";
import styles from "./styles.module.scss";

const SidebarChat: React.FC<SidebarProps> = ({
  setActiveChat,
  setTypeChat,
  toggleAddChats,
}) => {
  const {
    listChats,
    setSearchQuery,
    searchQuery,
    listSearchs,
    handleSelectedChat,
    currentIndex,
    setCurrentIndex,
    searchInputRef,
    handleSearchChange,
    handleSearchFocus,
    showSearchResults,
    searchResultsRef,
    setShowSearchResults,
  } = useSidebar();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarSearch}>
        <div className={styles.searchInputWrapper}>
          <span className={styles.searchIcon}>
            <Search className={styles.searchIconSearch} />
          </span>
          <input
            ref={searchInputRef}
            type="search"
            className={styles.searchInput}
            placeholder="Search chats"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
          />
          {showSearchResults && searchQuery && listSearchs.length > 0 && (
            <ul ref={searchResultsRef} className={styles.searchResults}>
              {listSearchs.map((searchItem, index) => (
                <li
                  key={index}
                  className={styles.listSearchResults}
                  onClick={() => {
                    handleSelectedChat(searchItem);
                    setActiveChat(searchItem.id);
                    setTypeChat(searchItem.name ? "group" : "user");
                    setSearchQuery("");
                    setShowSearchResults(false);
                  }}
                >
                  <div className={styles.listSearchResultsDiv}>
                    <img
                      className={styles.chatAvatar}
                      src={searchItem.avatar}
                      alt={searchItem.username || searchItem.name}
                    />
                    <div>
                      <p className={styles.listSearchResultsDivName}>
                        {searchItem.username || searchItem.name}
                      </p>
                      <p className={styles.listSearchResultsDivMessage}>
                        {searchItem.latest_message || "No messages yet"}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <MessageCirclePlus
          className="cursor-pointer"
          onClick={toggleAddChats}
        />
      </div>
      <div className={styles.chatList}>
        <h2 className={styles.chatsTitle}>Chats</h2>
        <ul>
          {listChats.map((chat, index) => (
            <li key={index}>
              <div
                className={`${styles.chatItem} ${
                  currentIndex === index
                    ? styles.selectedChatItem
                    : styles.chatItem
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  handleSelectedChat(chat);
                  setActiveChat(chat.id);
                  setTypeChat(chat.name ? "group" : "user");
                }}
              >
                <img
                  className={styles.chatAvatar}
                  src={chat.avatar}
                  alt={chat.username}
                />
                <div className={styles.chatDetails}>
                  <div className={styles.chatHeader}>
                    <h4 className={styles.chatName}>
                      {chat.username || chat.name}
                    </h4>
                    <p className={styles.chatTime}>5 minutes</p>
                  </div>
                  <p className={styles.chatMessage}>{chat.latest_message}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { SidebarChat };

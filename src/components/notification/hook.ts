import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { TData, TNotification } from "./types";

export const useNotification = (): TNotification => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    var pusher = new Pusher("c47e12db7c7164bcc7db", {
      cluster: "ap1",
    });

    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", (data: TData) => {
      if (data && data.message) {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      }
    });

    return () => {
      pusher.unsubscribe("my-channel");
    };
  }, []);

  return {
    messages,
  };
};

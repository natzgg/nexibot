"use client";

import { createContext, useState, useContext } from "react";

interface ChatContextType {
  isChatBoxOpen: boolean;
  message: string;
  toggleChatBox: () => void;
  setMessage: (message: string) => void;
  chatContent: string[];
  sendMessage: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [chatContent, setChatContent] = useState<string[]>([]);

  const toggleChatBox = () => {
    setIsChatBoxOpen(!isChatBoxOpen);
    console.log(isChatBoxOpen);
  };

  const sendMessage = () => {
    if (message.trim()) {
      setChatContent([...chatContent, message]);
      setMessage("");
    }
  };

  return (
    <ChatContext.Provider
      value={{
        isChatBoxOpen,
        toggleChatBox,
        message,
        setMessage,
        chatContent,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

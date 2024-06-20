"use client";

import { parseOpenAIResponse } from "@/libs/utils";
import { createContext, useState, useContext, useEffect } from "react";

export interface Message {
  sender: string;
  message: string;
}

interface ChatContextType {
  isChatBoxOpen: boolean;
  message: string;
  toggleChatBox: () => void;
  setMessage: (message: string) => void;
  chatContent: Message[];
  sendMessage: () => void;
  currentBotResponse: string;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [chatContent, setChatContent] = useState<Message[]>([]);
  const [currentBotResponse, setCurrentBotResponse] = useState<string>("");

  const toggleChatBox = () => {
    setIsChatBoxOpen(!isChatBoxOpen);
  };

  const sendMessage = async () => {
    try {
      if (message.trim()) {
        setChatContent([...chatContent, { sender: "User", message }]);
        setMessage(""); // Clear the input field after sending message
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const reader = response.body?.getReader();
      let receivedString = "";

      setCurrentBotResponse(""); // Clear any previous bot response

      while (true) {
        //@ts-ignore
        const { done, value } = await reader?.read();

        if (done) {
          break;
        }

        const currentString = new TextDecoder().decode(value);
        receivedString += currentString;
        const parsedString = parseOpenAIResponse(currentString);

        setCurrentBotResponse((prev) => prev + parsedString);
      }

      // Add the final bot response to the chat content
      setChatContent((prev) => [
        ...prev,
        { sender: "BOT", message: parseOpenAIResponse(receivedString) },
      ]);

      setCurrentBotResponse(""); // Clear the current bot response after adding it to the chat content
    } catch (error) {
      console.error("Error sending message:", error);
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
        currentBotResponse,
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

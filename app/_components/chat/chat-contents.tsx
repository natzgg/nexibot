"use client";

import { useRef, useEffect } from "react";
import ChatBubble from "./chat-bubble";
import { Message, useChat } from "@/components/ChatProvider";

export const parseOpenAIResponse = (response: string) => {
  // Split the response by "0:" and filter out empty strings
  const words = response.split("0:").filter(Boolean);
  // Remove double quotes from each word
  const cleanWords = words.map((word) => word.replace(/"/g, "").trim());
  console.log(words);
  console.log(cleanWords);
  // Join the clean words to form a sentence
  const sentence = cleanWords.join(" ").replace(/\s+([!?,.:;'"])/g, "$1");
  return sentence.trim(); // Remove any leading or trailing whitespace
};

const ChatContents = ({ chatContents }: { chatContents: Message[] }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { openAIResponse, message } = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const parsedResponse = openAIResponse
    ? parseOpenAIResponse(openAIResponse)
    : "";

  useEffect(() => {
    console.log(chatContents);
    scrollToBottom();
  }, [chatContents, parsedResponse]);
  return (
    <div className="h-full w-full space-y-5 overflow-y-auto bg-white rounded-lg">
      {chatContents.map((chat, i) => (
        <ChatBubble
          key={`user_message_${i}`}
          sender={chat.sender}
          message={chat.message}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatContents;

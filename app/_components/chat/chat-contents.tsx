"use client";

import { useRef, useEffect } from "react";
import ChatBubble from "./chat-bubble";
import { Message, useChat } from "@/components/ChatProvider";

const ChatContents = ({ chatContents }: { chatContents: Message[] }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { currentBotResponse } = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatContents, currentBotResponse]);

  return (
    <div className="h-full w-full space-y-5 overflow-y-auto bg-white rounded-lg">
      {chatContents.map((chat, i) => (
        <ChatBubble
          key={`chat_message_${i}`}
          sender={chat.sender}
          message={chat.message}
        />
      ))}

      {currentBotResponse && (
        <ChatBubble
          sender="BOT"
          message={currentBotResponse} // Display the streaming bot response
        />
      )}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatContents;

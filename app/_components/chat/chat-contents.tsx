"use client";

import { useRef, useEffect } from "react";
import ChatBubble from "./chat-bubble";

const ChatContents = ({ chatContents }: { chatContents: string[] }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatContents]);
  return (
    <div className="h-full w-full space-y-5 overflow-y-auto bg-white rounded-lg">
      {chatContents.map((chat, i) => (
        <>
          <ChatBubble
            key={`message_${Math.random()}`}
            sender="User"
            message={chat}
          />
          <ChatBubble
            key={`message_${Math.random()}`}
            sender="Bot"
            message="This is an answer to that."
          />
        </>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatContents;

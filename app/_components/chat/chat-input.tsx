"use client";

import { useChat } from "@/components/ChatProvider";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const ChatInput = () => {
  const { setMessage, sendMessage, message } = useChat();
  const [input, setInput] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    sendMessage();
  };
  return (
    <form className="flex gap-2" onSubmit={onSubmit}>
      <TextareaAutosize
        value={message}
        placeholder="Ask me anything, or compliment me!"
        className="w-full p-2 rounded-md resize-none"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type="submit"
        className="p-2 rounded-lg bg-primary text-foreground font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default ChatInput;

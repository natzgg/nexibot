"use client";

import TextareaAutosize from "react-textarea-autosize";

const ChatInput = () => {
  return (
    <form className="flex gap-2">
      <TextareaAutosize
        placeholder="Ask me anything, or compliment me!"
        className="w-full p-2 rounded-md resize-none"
      />

      <button className="p-2 rounded-lg bg-primary text-foreground font-semibold">
        Submit
      </button>
    </form>
  );
};

export default ChatInput;

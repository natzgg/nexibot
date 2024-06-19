import { FaDoorClosed } from "react-icons/fa";
import ChatInput from "./chat-input";
import ChatBubble from "./chat-bubble";

const ChatBox = () => {
  return (
    <div className="absolute border border-border w-full h-full md:p-10 z-20 backdrop-blur">
      <div className="w-full md:max-w-[1200px] h-full md:border-2 border-primary mx-auto rounded-lg bg-foreground p-4">
        <div className="flex flex-col h-full gap-4">
          {/* TITLE AND CLOSE BTN */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary mx-auto">NexiBot</h1>
            <button className="rounded-md p-2 border bg-primary">
              <FaDoorClosed className="w-7 h-7 justify-self-end fill-foreground" />
            </button>
          </div>
          {/* CHAT CONTENTS */}
          <div className="h-full w-full space-y-5 overflow-y-scroll bg-white rounded-lg">
            <ChatBubble
              sender="User"
              message="This is a long message. Just random things throwing at you.This is a long message. Just random things throwing at you.This is a long message. Just random things throwing at you."
            />
            <ChatBubble
              sender="Bot"
              message="This is a long message. This is a long message.
              This is a long message.
              This is a long message.
              This is a long message.
              This is a long message.
              This is a long message.
              This is a long message. Just random things throwing at you.This is a long message. Just random things throwing at you.This is a long message. Just random things throwing at you."
            />
            <ChatBubble
              sender="User"
              message="This is a long message. This is a long message.
              This is a long message.
              This is a long message.
              This is a long message.
              This is a long message.
              This is a long message.
              This is a long message. Just random things throwing at you.This is a long message. Just random things throwing at you.This is a long message. Just random things throwing at you."
            />
            <ChatBubble
              sender="Bot"
              message="This is a long message. This is a long message.
              This is a long message.
              This is a long message.
              This is a long message.
              This is a long message.
              This is a long message.
              This is a long message. Just random things throwing at you.This is a long message. Just random things throwing at you.This is a long message. Just random things throwing at you."
            />
          </div>

          {/* TEXT AREA */}
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

import { FaDoorClosed } from "react-icons/fa";

const ChatBox = () => {
  return (
    <div className="absolute border border-border w-full h-full md:p-10 z-20">
      <div className="w-full md:max-w-[1200px] h-full md:border-2 border-primary mx-auto rounded-lg bg-foreground p-4">
        {/* TITLE AND CLOSE BTN */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary mx-auto">NexiBot</h1>
          <button className="rounded-md p-2 border bg-primary">
            <FaDoorClosed className="w-7 h-7 justify-self-end fill-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

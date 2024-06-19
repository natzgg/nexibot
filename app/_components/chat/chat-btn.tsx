import { cn } from "@/libs/utils";
import { Zeyada } from "next/font/google";
import { BsChatRightFill } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";

const zeyada = Zeyada({ subsets: ["latin"], weight: "400" });

const ChatButton = () => {
  return (
    <div className="fixed bottom-10 right-10">
      <div className="relative w-full h-full">
        <div className="absolute -top-12 -left-24 -rotate-45 space-y-1">
          <div className="animate-bounce">
            <span
              className={cn(
                "text-primary font-bold text-[30px]",
                zeyada.className
              )}
            >
              Chat with me!
            </span>
            <CiLocationArrow1 className="w-7  h-7 rotate-[120deg] mx-auto fill-primary" />
          </div>
        </div>
      </div>
      <button className="p-4 rounded-full bg-primary-light hover:scale-110 transition duration-300">
        <BsChatRightFill className="w-7 h-7 fill-white" />
      </button>
    </div>
  );
};

export default ChatButton;

"use client";

import TypingAnimation from "@/components/TypingAnimation";
import { FaUserSecret } from "react-icons/fa";
import { GiRobotAntennas } from "react-icons/gi";

const ChatBubble = ({
  sender,
  message,
}: {
  sender: string;
  message: string;
}) => {
  return (
    <div className="w-full">
      {sender !== "User" ? (
        <div className="flex gap-2 p-2">
          <GiRobotAntennas className="w-12 h-12 fill-primary" />
          <div className="flex w-[80%] md:w-1/2">
            <p className="flex items-center text-pretty text-sm rounded-lg p-2 w-max bg-primary/60 text-foreground">
              {/* <TypingAnimation text={message} /> */}
              {message}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 justify-end p-2">
          <div className="flex w-[80%] md:w-1/2 justify-end">
            <p className="flex items-center text-pretty text-right text-sm bg-primary-light rounded-lg p-2 w-max text-foreground">
              {message}
            </p>
          </div>
          <FaUserSecret className="w-12 h-12 fill-primary" />
        </div>
      )}
    </div>
  );
};

export default ChatBubble;

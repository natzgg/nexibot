import { FaUserSecret } from "react-icons/fa";
import { GiRobotAntennas } from "react-icons/gi";

type Sender = "User" | "Bot";

const ChatBubble = ({
  sender,
  message,
}: {
  sender: Sender;
  message: string;
}) => {
  return (
    <>
      {sender === "User" ? (
        <div className="flex gap-2 justify-start p-2 w-full">
          <GiRobotAntennas className="w-12 h-12 fill-primary" />
          <div className="flex w-1/2">
            <p className="flex items-center text-pretty text-sm rounded-lg p-2 w-max bg-primary/60 text-foreground">
              {message}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2 justify-end p-2 w-full">
          <div className="flex w-1/2 justify-end">
            <p className="flex items-center text-pretty text-right text-sm bg-primary-light rounded-lg p-2 w-max text-foreground">
              {message}
            </p>
          </div>
          <FaUserSecret className="w-12 h-12 fill-primary" />
        </div>
      )}
    </>
  );
};

export default ChatBubble;
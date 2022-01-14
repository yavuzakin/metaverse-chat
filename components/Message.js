import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";

function Message({ message }) {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-9 w-9 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-cyan-400"
            : "rounded-bl-none bg-pink-400"
        }`}
      >
        <p className="font-bold">{message.get("message")}</p>
      </div>

      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-cyan-300" : "text-pink-400"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
}

export default Message;

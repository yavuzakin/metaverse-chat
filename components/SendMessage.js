import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message || message.trim() === "") return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (mes) => {
          // Saved successfully
          console.log(mes);
        },
        (err) => {
          console.log(err);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 max-w-2xl shadow-xl w-11/12 bg-black opacity-80 rounded-full px-6 py-4 border-4 border-cyan-400">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        placeholder={`Enter your message ${user.getUsername()}...`}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-cyan-400"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;

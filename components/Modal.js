import { useRef } from "react";
import { useMoralis } from "react-moralis";

function Modal({ confirmHandler }) {
  const { setUserData } = useMoralis();
  const usernameInputRef = useRef();
  const setUsername = () => {
    const username = usernameInputRef.current.value;
    if (!username || username.trim() === "") return;
    setUserData({
      username,
    });
    confirmHandler();
  };
  return (
    <div className="flex space-x-2 px-6 py-2 rounded-full bg-black border-2 border-cyan-300 max-w-3xl">
      <input
        ref={usernameInputRef}
        className="text-white p-3 bg-transparent flex-grow outline-none placeholder-gray-500"
        placeholder="Enter your new username"
      />
      <button className="font-bold" onClick={setUsername}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;

import { useState } from "react";
import { useMoralis } from "react-moralis";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
function ChangeUsername() {
  const { isUserUpdating } = useMoralis();
  // const setUsername = () => {
  //   const username = prompt(
  //     `Enter your new username (current: ${user.getUsername()})`
  //   );
  //   if (!username || username.trim() === "") return;
  //   setUserData({
  //     username,
  //   });
  // };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const confirmHandler = () => {
    setIsModalOpen(false);
  };

  const clickHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        // onClick={setUsername}
        onClick={clickHandler}
        disabled={isUserUpdating}
        className="hover:text-cyan-300"
      >
        Change Your Username
      </button>
      <div className="fixed top-1/3 left-0 right-0 mx-auto z-50 w-96 xl:w-3/12">
        {isModalOpen && <Modal confirmHandler={confirmHandler} />}
      </div>
      <div className="z-20">
        {isModalOpen && <Backdrop clickHandler={confirmHandler} />}
      </div>
    </div>
  );
}

export default ChangeUsername;

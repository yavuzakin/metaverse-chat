import { useMoralis } from "react-moralis";
function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    );
    if (!username || username.trim() === "") return;
    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        onClick={setUsername}
        disabled={isUserUpdating}
        className="hover:text-cyan-300"
      >
        Change Your Username
      </button>
    </div>
  );
}

export default ChangeUsername;

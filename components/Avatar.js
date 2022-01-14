import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      layout="fill"
      className="rounded-full cursor-pointer bg-black hover:opacity-75"
      onClick={() => logoutOnPress && logout()}
      src={`https://avatars.dicebear.com/api/bottts/${
        username || user.get("username")
      }.svg`}
    />
  );
}

export default Avatar;

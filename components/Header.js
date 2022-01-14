import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-cyan-400 sticky top-0 p-5 bg-black z-50 shadow-sm border-b-2 border-cyan-400">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative w-24 h-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://links.papareact.com/3pi"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative w-48 h-48 lg:mx-auto border-cyan-400 border-4 rounded-full">
            <Avatar username={user.username} />
          </div>
          <h1 className="text-3xl">Welcome to the Metaverse</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;

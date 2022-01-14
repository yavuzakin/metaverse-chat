import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <div className="z-50 flex flex-col absolute items-center justify-center h-4/6 w-full space-y-10">
        <Image
          className="object-cover rounded-full"
          src="/metaverse-logo.jpg"
          width={240}
          height={240}
        />
        <button
          onClick={authenticate}
          className="bg-cyan-300 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src="/login-bg.jpeg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;

import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative">
      <div className="z-50 flex flex-col absolute items-center justify-center h-4/6 w-full space-y-4">
        <Image
          className="object-cover rounded-full"
          src="/login-logo.png"
          width={200}
          height={200}
        />
        <button className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">
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

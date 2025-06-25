import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen
      bg-gradient-to-br from-zinc-800 to-black text-white gap-20">
        <div className="text-6xl">
          <span className="opacity-40 font-thin">Binance</span>
          <span className="font-black bg-gradient-to-r from-blue-500 to-green-500
          text-transparent bg-clip-text">Management</span>
        </div>
      </div>
  );
}

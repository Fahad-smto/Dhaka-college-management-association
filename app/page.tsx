import Image from "next/image";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to Dhaka College Management Association</h1>
        <p className="mt-4 text-lg text-gray-600">Your one-stop solution for managing college activities and events.</p>
      </main>
    </div>
  );
}

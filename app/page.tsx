import Image from "next/image";
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import FeaturedEvents from "./components/FeaturedEvents";

export default function Home() {
  return (
    <div className="">
      <Navbar />
     <Banner />
     <FeaturedEvents></FeaturedEvents>
    </div>
  );
}

import Image from "next/image";
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import FeaturedEvents from "./components/FeaturedEvents";
import LeadershipTeam from "./components/LeadershipTeam";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
     <Banner />
     <FeaturedEvents></FeaturedEvents>
     <LeadershipTeam></LeadershipTeam>
     <Footer></Footer>
    </div>
  );
}

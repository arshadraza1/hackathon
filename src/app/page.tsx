import Image from "next/image";
import Header from "./components/header";
import NavBar from "./components/NavBar";
import Hero from "./components/heroSection";
import Company from "./components/company";
import Feature from "./components/featuredProduct";
import Top from "./components/topCat";
import Explore from "./components/explore";
import OurPro from "./components/ourProduct";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Hero/>
      <Company/>
      <Feature/>
      <Top/>
      <Explore/>
     <OurPro/>
     <Footer/>
     </div>

  );
}

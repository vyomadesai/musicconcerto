import Image from "next/image";
import NavBar from "../components/NavBar";
import LandingPage from "../components/LandingPage";
import AboutMe from "@/components/AboutMe";
import AboutMe1 from "@/components/AboutMe1";
import AboutUsPage from "@/components/AboutUsPage";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <AboutMe />
      {/* <AboutMe1 /> */}
      {/* <AboutUsPage /> */}
      <Gallery />
      <Footer />
    </>
  );
}

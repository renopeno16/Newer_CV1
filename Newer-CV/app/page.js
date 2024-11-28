import Image from "next/image";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";



export default function Home() {
  return (
    <>
      <NavBar />
      <Body />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

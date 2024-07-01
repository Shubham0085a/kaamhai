import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Get_ready from "@/components/get_ready";
import Get_verified from "@/components/get_verified";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Operations from "@/components/operations";
import Partner from "@/components/partner";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Contact/>
      <About/>
      <Operations/>
      <Partner/>
      <Get_verified/>
      <Get_ready/>
      <Footer/>
    </main>
  );
}

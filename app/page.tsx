import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

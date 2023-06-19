import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import ScrollToTop from "./components/ScrollTop";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}

import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import ScrollToTop from "./components/ScrollTop";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <About />
      <Work />
    </>
  );
}

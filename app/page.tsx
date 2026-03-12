import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Product />
      <Testimonials />
      <Pricing />
      <Contact /> 
      <Footer />
    </main>
  );
}
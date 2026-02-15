import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Pricing from "./component/Pricing";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

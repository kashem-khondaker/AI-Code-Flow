export const codeExample = {
  "App.jsx": `
    
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
    `,
  "Hero.jsx": `
    
    function Hero() {
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
    `,
  "Navbar.jsx": `
    
    function Navbar() {
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
    `,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "AI-Powered Code Generation",
    content:
      "Generate code snippets, functions, or even entire components based on your descriptions.",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto animation",
    content:
      "Automatically animate elements in your UI with just a few lines of code.",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Code Search",
    content:
      " Just ask CodeFlow to find specific functions, variables, or components, and it will quickly locate them for you.",
  },
};

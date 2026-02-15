import { ChevronDown, Section } from "lucide-react";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExample, floatingCards } from "../data/CodeExample";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      console.log(mousePosition.x, mousePosition.y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentFloatingCard = floatingCards[activeTab];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 "
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px , rgba(59,130,246,0.15), transparent 35%)`,
        }}
      />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-25 right-4 sm:right-10 w-63 sm:w-96 h-64 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className=" relative order-2 w-full">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
          <div className="bg-gradient-to-br form-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px]  sm:w-[350] lg:h-[450] border border-white/5">
            {/* IDE HEADER  */}

            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:y-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
              <div className="flex  items-center sm:space-x-2">
                <div className="flex  items-center sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs sm:text-sm text-gray-300">
                  CodeFlow AI
                </span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xs sm:text-sm text-white bg-sky-500/20 px-2 sm:px-3 rounded ">
                  AI
                </span>
                <ChevronDown className="text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* file tabs  */}
            <div className="p-3 sm:p-4 relative h-full">
              <div className="flex space-x-1 items-center sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                <button
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "App.jsx" ? "bg-white/10 border-white/20 text-white" : "bg-white/5 border-white/10 text-gray-300"} transition-all duration-200 whitespace-normal`}
                  onClick={() => setActiveTab("App.jsx")}
                >
                  App.jsx
                </button>
                <button
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Hero.jsx" ? "bg-white/10 border-white/20 text-white" : "bg-white/5 border-white/10 text-gray-300"} transition-all duration-200 whitespace-normal`}
                  onClick={() => setActiveTab("Hero.jsx")}
                >
                  Hero.jsx
                </button>
                <button
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Navbar.jsx" ? "bg-white/10 border-white/20 text-white" : "bg-white/5 border-white/10 text-gray-300"} transition-all duration-200 whitespace-normal`}
                  onClick={() => setActiveTab("Navbar.jsx")}
                >
                  Navbar.jsx
                </button>
              </div>

              {/* Code content */}

              <div className="relative overflow-hidden  flex-grow">
                <SyntaxHighlighter
                  language="jsx"
                  style={nightOwl}
                  customStyle={{
                    margin: 0,
                    borderRadius: "8px",
                    fontSize: "11px",
                    height: "100%",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {codeExample[activeTab]}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          {/* floating card  */}
          <div
            className={` absolute bottom-4 right-4 transform translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/10 shadow-2xl `}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className={`${currentFloatingCard.iconColor}  w-4 h-4 flex items-center text-center text-xs sm:text-sm font-bold`}>{currentFloatingCard.icon}</div>
              <span className={`${currentFloatingCard.textColor} text-sm font-medium`}>{currentFloatingCard.title}</span>
            </div>
            <div className={`${currentFloatingCard.contentColor} text-xs sm:text-sm text-left`}>{currentFloatingCard.content}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

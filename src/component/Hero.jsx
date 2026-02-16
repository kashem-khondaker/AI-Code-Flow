import { ArrowRight, ChevronDown, Play, Section, Sparkles } from "lucide-react";
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

      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sms:gap-8 lg:gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />{" "}
              <span className="text-xs sm:text-sm text-blue-200">
                {" "}
                Introducing CodeFlow AI
              </span>
            </div>
            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight ">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Code Faster
              </span>
              <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Build better
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                With CodeFlow AI
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg animate-in slide-in-from-bottom duration-700 delay-200">
              Experience the future of coding with CodeFlow AI - your
              intelligent coding assistant that helps you write code faster,
              smarter, and with ease. Say goodbye to writer's block and hello to
              seamless coding flow.
            </p>

            <div className="flex mt-5 flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-form-bottom duration-700 delay-300">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-100 flex items-center justify-center space-x-2">
                <span>Start Coding Free</span>{" "}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 " />
              </button>
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full flex items-center justify-center text-white group p-1 group-hover:bg-white/20 transition-colors duration-300">
                  <Play className="" />
                </div>{" "}
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          <div className=" relative order-2 w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
              <div className="bg-gradient-to-br form-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280]  sm:h-[350] lg:h-[450] border border-white/5">
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
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "App.jsx" ? "bg-blue-500/10 border-blue-500/20 text-white" : "bg-white/5 border-white/10 text-gray-300"} transition-all duration-200 whitespace-normal`}
                      onClick={() => setActiveTab("App.jsx")}
                    >
                      App.jsx
                    </button>
                    <button
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Hero.jsx" ? "bg-blue-500/10 border-blue-500/20 text-white" : "bg-white/5 border-white/10 text-gray-300"} transition-all duration-200 whitespace-normal`}
                      onClick={() => setActiveTab("Hero.jsx")}
                    >
                      Hero.jsx
                    </button>
                    <button
                      className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Navbar.jsx" ? "bg-blue-500/10 border-blue-500/20 text-white" : "bg-white/5 border-white/10 text-gray-300"} transition-all duration-200 whitespace-normal`}
                      onClick={() => setActiveTab("Navbar.jsx")}
                    >
                      Navbar.jsx
                    </button>
                  </div>

                  {/* Code content */}

                  <div className="relative overflow-hidden  grow text-start text-sm lg:text-base ">
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
                  <div
                    className={`${currentFloatingCard.iconColor}  w-4 h-4 flex items-center text-center text-xs sm:text-sm font-bold`}
                  >
                    {currentFloatingCard.icon}
                  </div>
                  <span
                    className={`${currentFloatingCard.textColor} text-sm font-medium`}
                  >
                    {currentFloatingCard.title}
                  </span>
                </div>
                <div
                  className={`${currentFloatingCard.contentColor} text-xs sm:text-sm text-left`}
                >
                  {currentFloatingCard.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

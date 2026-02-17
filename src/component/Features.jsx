import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    id: 1,
    title: "AI Code Completion",
    description:
      "Our AI code completion feature uses advanced machine learning algorithms to predict and suggest code snippets as you type, helping you write code faster and with fewer errors.",
    code: `useEffect(() => {
        const handleMouseMove = (e) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          console.log(mousePosition.x, mousePosition.y);
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);`,
    imagePosition: "left",
  },
  {
    id: 2,
    title: "Automated Testing",
    description:
      "Our AI-powered automated testing feature helps you write and run tests faster, ensuring your code is reliable and bug-free.",
    code: `useEffect(() => {
        const handleMouseMove = (e) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          console.log(mousePosition.x, mousePosition.y);
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);`,
    imagePosition: "right",
  },
  {
    id: 3,
    title: "Smart Debugging",
    description:
      "Our AI-powered smart debugging feature helps you identify and fix bugs faster by providing intelligent debugging suggestions and insights.",
    code: `useEffect(() => {
        const handleMouseMove = (e) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          console.log(mousePosition.x, mousePosition.y);
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);`,
    imagePosition: "left",
  },
  // {
  //   id: 4,
  //   title: "AI Code Review",
  //   description:
  //     "Our AI-powered code review feature helps you identify potential issues and improve code quality before merging.",
  //   code: `useEffect(() => {
  //       const handleMouseMove = (e) => {
  //         setMousePosition({ x: e.clientX, y: e.clientY });
  //         console.log(mousePosition.x, mousePosition.y);
  //       };

  //       window.addEventListener("mousemove", handleMouseMove);
  //       return () => window.removeEventListener("mousemove", handleMouseMove);
  //     }, []);`,
  //   imagePosition: "right",
  // },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative border-t border-white/20 mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl mb:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development Experience
            </span>{" "}
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              WorkFlow{" "}
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:spacey-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12  ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
            >
              {/* code section  */}
              <>
                  {/* ide interface */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl transition-all duration-500 shadow-sm shadow-white/70 animate-pulse blur-sm"/>
                    <div className="relative bg-white/6 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                      <div className="bg-gray-950 rounded-lg font-fomo px-2 sm:px-3 py-3 sm:py-4 text-xs sm:text-sm">
                        <div className="flex  items-center space-x-1 mb-2 ms:mb-3 sm:space-x-2 px-1 sm:px-2">
                          <div className="flex  items-center sm:space-x-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-300 ml-2 sm:ml-4 ">
                            {feature.title}
                          </span>
                        </div>

                        <div className="relative overflow-hidden  grow text-start text-sm lg:text-base ">
                          <SyntaxHighlighter
                            language="jsx"
                            style={nightOwl}
                            customStyle={{
                              margin: 0,
                              borderRadius: "8px",
                              fontSize: "11px",
                              height: "100%",
                              backgroundColor: "transparent",
                            }}
                          >
                            {feature.code}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>

              {/* text section  */}
              <>
                <div className="flex-1 w-full">
                  <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                    <h3 className=" text-4xl sm:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-xl sm:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

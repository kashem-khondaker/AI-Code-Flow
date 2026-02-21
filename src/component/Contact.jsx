import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative "
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* right form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
              <form className="space-y-4 sm:space-y-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-400 transition"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-400 transition"
                />

                <textarea
                  rows="5"
                  placeholder="Your message"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-400 transition resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* left */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Let’s build something
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                amazing together
              </span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Have a project in mind or just want to say hello? Fill out the
              form and we’ll get back to you.  Fill out
              the form and we’ll get back to you. Looking forward to connecting
              with you!
            </p>

            {/* social icons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <a className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-400 transition">
                <Github size={20} />
              </a>

              <a className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-400 transition">
                <Linkedin size={20} />
              </a>

              <a className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-400 transition">
                <Twitter size={20} />
              </a>

              <a className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-400 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

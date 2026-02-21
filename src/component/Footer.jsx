import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 py-12 px-10 sm:px-6 lg:px-8 relative mt-20">
      <div className="max-w-7xl mx-auto">
        {/* top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              YourProduct
            </h3>

            <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-sm">
              Building modern developer experiences with clean UI, powerful
              backend, and scalable architecture.
            </p>
          </div>

          {/* links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>

            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#about" className="hover:text-white transition">
                About
              </a>
              <a href="#features" className="hover:text-white transition">
                Features
              </a>
              <a href="#pricing" className="hover:text-white transition">
                Pricing
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          {/* social */}
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>

            <div className="flex gap-4">
              <a className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-400 transition hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <Github size={18} />
              </a>

              <a className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-400 transition hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <Linkedin size={18} />
              </a>

              <a className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-400 transition hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <Twitter size={18} />
              </a>

              <a className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-400 transition hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} YourProduct. All rights reserved.
          </p>

          <div className="flex gap-4 text-gray-400 text-sm">
            <a className="hover:text-white transition">Privacy</a>
            <a className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

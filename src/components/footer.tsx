import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">About Us</h3>
            <p className="text-neutral-400">
              Empowering students and academics with AI-powered tools for better writing
              and research.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2025 Academic AI Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
// import { Link } from "react-router-dom";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";

// export default function SiteFooter() {
//   const { toast } = useToast();

//   const submitNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     toast({ title: "Subscribed!", description: "We'll keep you posted with product updates." });
//   };

//   return (
//     <footer className="mt-24 border-t bg-card/50">
//       <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-4">
//         <div>
//           <div className="text-lg font-semibold">intarVAS</div>
//           <p className="mt-2 text-sm text-muted-foreground">Smart telecom solutions for modern businesses.</p>
//         </div>
//         <div>
//           <div className="mb-3 font-medium">Pages</div>
//           <ul className="space-y-2 text-sm text-muted-foreground">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </div>
//         <div>
//           <div className="mb-3 font-medium">Services</div>
//           <ul className="space-y-2 text-sm text-muted-foreground">
//             <li><Link to="/services/pbx">IntarVAS PBX</Link></li>
//             <li><Link to="/services/bulk-messaging">Bulk Messaging</Link></li>
//             <li><Link to="/services/numbers">0700 & 0800</Link></li>
//           </ul>
//         </div>
//         <div>
//           <div className="mb-3 font-medium">Stay in the loop</div>
//           <form onSubmit={submitNewsletter} className="flex gap-2">
//             <Input type="email" placeholder="you@example.com" required />
//             <Button type="submit">Subscribe</Button>
//           </form>
//         </div>
//       </div>
//       <div className="border-t py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} intarVAS. All rights reserved.</div>
//     </footer>
//   );
// }

import React, { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    // Add your newsletter signup logic here
    setEmail("");
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and Address */}
          <div className="space-y-6">
          <Link to="/" className="md:flex items-center gap-2 font-semibold ml-[-20px]">
            <img
              src="/images/Logo.svg"
              alt="IntarVAS Logo"
              className="h-8 w-[200px]"
            />
          </Link>
            <div className="text-gray-400 text-sm leading-relaxed space-y-2">
              <p>Churchgate Tower 2,</p>
              <p>30 Churchgate Street (formerly Afribank</p>
              <p>Street) Victoria Island Lagos, Nigeria.</p>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wider">
                SOCIAL MEDIA
              </h3>
              <div className="flex gap-3">
                <button
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-not-allowed opacity-60"
                  aria-label="Facebook"
                  disabled
                >
                  <Facebook className="w-5 h-5 text-black" />
                </button>
                <button
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-not-allowed opacity-60"
                  aria-label="Twitter"
                  disabled
                >
                  <Twitter className="w-5 h-5 text-black" />
                </button>
                <button
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-not-allowed opacity-60"
                  aria-label="LinkedIn"
                  disabled
                >
                  <Linkedin className="w-5 h-5 text-black" />
                </button>
                <button
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-not-allowed opacity-60"
                  aria-label="Instagram"
                  disabled
                >
                  <Instagram className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-sm font-semibold mb-6 tracking-wider">PAGES</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home page
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services/all-in-solutions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold mb-6 tracking-wider">
              SERVICES
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services/all-in-solutions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  All in one solution
                </Link>
              </li>
              <li>
                <Link
                  to="/services/bulk-messaging"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bulk Messaging
                </Link>
              </li>
              <li>
                <Link
                  to="/services/pbx"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  IntarVAS PBX
                </Link>
              </li>
              <li>
                <Link
                  to="/services/numbers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  0700 & 0800
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-6 tracking-wider">
              DON'T MISS OUT ON WHAT'S NEXT
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Join our newsletter for exclusive insights and updates on the
              latest
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                required
                className="w-full px-6 py-3 pr-28 rounded-full bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-6 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            © All rights reserved by IntarVAS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

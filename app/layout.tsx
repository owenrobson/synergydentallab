import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Stethoscope, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DentalTech Solutions - Advanced Dental Technology",
  description:
    "Leading provider of innovative dental technology solutions for modern practices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="font-bold text-l">
                <img
                  src="/images/partners/synergy-logo.png"
                  alt=""
                  className="w-25 h-10 inline-block filter invert brightness-10"
                />
              </span>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex space-x-5 text-sm">
                <a
                  href="/"
                  className="nav-link hover:text-primary transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="nav-link hover:text-primary transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="nav-link hover:text-primary transition-colors"
                >
                  Our Services
                </a>
                <a
                  href="#gallery"
                  className="nav-link hover:text-primary transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#personal-touch"
                  className="nav-link hover:text-primary transition-colors"
                >
                  The Personal Touch
                </a>
                <a
                  href="#testimonials"
                  className="nav-link hover:text-primary transition-colors"
                >
                  Testimonials
                </a>
              </div>
            </div>

            {/* Get in Touch Button */}
            <div className="hidden md:block">
              <Button asChild variant="default" size="sm">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden ml-auto">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <a
                      href="/"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      About Us
                    </a>
                    <a
                      href="#services"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Our Services
                    </a>
                    <a
                      href="#gallery"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Gallery
                    </a>
                    <a
                      href="#personal-touch"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      The Personal Touch
                    </a>
                    <a
                      href="#testimonials"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Testimonials
                    </a>
                    <a
                      href="#contact"
                      className="text-lg hover:text-primary transition-colors"
                    >
                      Get in Touch
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src="/images/partners/synergy-logo.png"
                    alt=""
                    className="w-25 h-10 inline-block filter invert brightness-0"
                  />
                </div>
                <p className="text-gray-400">
                  Revolutionising dental care with cutting-edge technology
                  solutions.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Solutions</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Imaging Systems</li>
                  <li>CAD/CAM Technology</li>
                  <li>Practice Management</li>
                  <li>Digital Impressions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>News</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Policy</li>
                  <li>HIPAA Compliance</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 DentalTech Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

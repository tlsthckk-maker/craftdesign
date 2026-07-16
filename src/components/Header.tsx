"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#F4F4F0] border-b-4 border-black flex items-center justify-between px-4 md:px-8 py-4">
        <Link href="/#process" className="text-2xl md:text-3xl font-black tracking-tighter hover:italic cursor-pointer transition-all" onClick={closeMenu}>
          CRAFTDESIGN
        </Link>
        
        {/* Desktop Nav & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-2 font-bold text-lg">
            {[
              { name: "ABOUT", href: "/#about" },
              { name: "CAPABILITIES", href: "/#capabilities" },
              { name: "PROCESS", href: "/#process" }
            ].map((item) => (
              <Link key={item.name} href={item.href} className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-[#CCFF00] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all cursor-pointer uppercase">
                {item.name}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="bg-blue-600 text-white font-black px-6 py-3 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_rgba(0,0,0,1)] transition-transform inline-block">
            GET QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger Button & Dropdown */}
        <div className="relative md:hidden flex items-center">
          <button 
            className="flex items-center justify-center py-2 px-3 border-4 border-black bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-transform" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="text-2xl font-black leading-none">{isMobileMenuOpen ? "✕" : "☰"}</span>
          </button>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute right-0 top-full mt-4 w-56 bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col z-[100]">
              <nav className="flex flex-col w-full">
                {[
                  { name: "ABOUT", href: "/#about" },
                  { name: "CAPABILITIES", href: "/#capabilities" },
                  { name: "PROCESS", href: "/#process" }
                ].map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    onClick={closeMenu}
                    className="w-full text-left text-lg font-bold text-black uppercase hover:bg-[#F4F4F0] transition-colors p-4 border-b-2 border-black"
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Link 
                  href="/contact" 
                  onClick={closeMenu}
                  className="block w-full text-center bg-blue-600 text-white font-black text-lg p-4 uppercase transition-colors"
                >
                  GET QUOTE
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

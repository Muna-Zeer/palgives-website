'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { programs } from '../data/programs';



export default function Navbar() {
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState(programs[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  console.log("progam data", programs[0]);
  console.log("state of the are data", isProgramOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Navigation Links (Left Side) */}
          <nav className="hidden md:flex items-center space-x-6 text-slate-800 font-medium">
            <Link
              href="/"
              className="px-3 py-2 text-sm uppercase tracking-wider font-bold text-black bg-[#F3D03E] rounded transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider"
            >
              About Us
            </Link>

            {/* Donate Dropdown / Link */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider">
                <span>Donate Now</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>

  
            <div
              className="relative"
              onMouseLeave={() => setIsProgramOpen(false)} 
            >
              <button
                type="button"
                onClick={() => setIsProgramOpen((prev) => !prev)} 
                onMouseEnter={() => setIsProgramOpen(true)}    
                className="flex items-center space-x-1 text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider focus:outline-none py-2 cursor-pointer"
              >
                <span>Our Programs</span>
                <svg className={`w-4 h-4 transition-transform ${isProgramOpen ? 'rotate-180 text-amber-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              
              {isProgramOpen && (
                <div className="absolute left-0 top-full mt-1 w-[680px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-12 gap-6 z-50">

                  {/* Left Column: Program Items */}
                  <div className="col-span-7 space-y-2">
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">Impact Focus Areas</p>
                    {programs.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/programs/${item.slug}`}
                        onMouseEnter={() => setActiveProgram(item)}
                        onClick={() => setIsProgramOpen(false)} // Closes menu when a link is clicked
                        className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-amber-600">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {item.summary}
                        </div>
                      </Link>
                    ))}
                  </div>


                </div>
              )}
            </div>
            {/* Contact Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-slate-700 hover:text-[#F3D03E] transition-colors text-sm uppercase tracking-wider">
                <span>Contact Us</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Logo Brand (Right Side matching original design) */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                Pal<span className="text-amber-500">Gives</span>
              </span>
              {/* Replace with actual logo SVG or PNG */}
              <div className="w-9 h-9 relative">
                <div className="w-full h-full bg-amber-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs shadow-sm">
                  PG
                </div>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-800 hover:text-[#F3D03E] p-2 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-3">
          <Link href="/" className="block text-slate-800 font-semibold py-2">Home</Link>
          <Link href="/about" className="block text-slate-800 font-semibold py-2">About Us</Link>

          <div className="py-2">
            <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Our Programs</p>
            <div className="pl-3 space-y-2 border-l-2 border-amber-400">
              {programs.map((p) => (
                <Link key={p.slug} href={`/programs/${p.slug}`} className="block text-sm text-slate-600 hover:text-amber-600">
                  {p.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/donate" className="block text-slate-800 font-semibold py-2">Donate Now</Link>
          <Link href="/contact" className="block text-slate-800 font-semibold py-2">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
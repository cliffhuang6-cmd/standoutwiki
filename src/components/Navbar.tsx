import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sparkles, ExternalLink, Shield, BookOpen, Layers, Swords, Key } from 'lucide-react';
import { siteConfig } from '../data/site';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF3]/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="/images/brand/stand-out-wiki-logo.webp"
            alt="Stand Out Wiki Logo"
            className="h-9 sm:h-10 w-auto object-contain group-hover:scale-102 transition-transform"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {siteConfig.navigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            return (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold text-[#163C3A] hover:text-emerald-800 hover:bg-emerald-50/70 transition-colors"
                >
                  {item.label}
                  {item.badge && (
                    <span className="px-1.5 py-0.2 text-[10px] font-black uppercase tracking-wider rounded bg-emerald-100 text-emerald-800">
                      {item.badge}
                    </span>
                  )}
                  {hasChildren && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </a>

                {/* Dropdown Menu */}
                {hasChildren && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-1.5 w-64 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 divide-y divide-slate-100">
                      {item.children?.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex flex-col px-3 py-2 rounded-xl hover:bg-emerald-50 transition-colors group"
                        >
                          <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-800">
                            {child.label}
                          </span>
                          <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {child.desc}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Action Area (Search, Play Button, Mobile Toggle) */}
        <div className="flex items-center gap-2.5">
          {/* Sitewide Search */}
          <SearchModal />

          {/* External Roblox Game Link */}
          <a
            href={siteConfig.robloxGameUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-[#064E4A] hover:bg-[#00675D] text-white rounded-lg text-xs font-bold shadow-sm transition-colors"
          >
            <span>Play on Roblox</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-[#FFFDF3] px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">Navigation Menu</span>
            <a
              href={siteConfig.robloxGameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-800 flex items-center gap-1"
            >
              Play STAND OUT <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-1">
            {siteConfig.navigation.map((item) => (
              <div key={item.label} className="border-b border-slate-100 pb-1">
                {item.children ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full py-2.5 text-sm font-extrabold text-[#163C3A]"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180 text-emerald-700' : 'text-slate-400'
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-3 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-800"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 text-sm font-extrabold text-[#163C3A] hover:text-emerald-800"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.2 text-[10px] font-black uppercase tracking-wider rounded bg-emerald-100 text-emerald-800">
                        {item.badge}
                      </span>
                    )}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Quick Shortcuts */}
          <div className="pt-2 grid grid-cols-2 gap-2 text-center text-xs font-bold">
            <a
              href="/codes/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-center gap-1.5"
            >
              <Key className="w-4 h-4 text-amber-600" />
              Active Codes
            </a>
            <a
              href="/tier-list/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-center gap-1.5"
            >
              <Swords className="w-4 h-4 text-emerald-600" />
              Tier List
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Swords, Key, Wrench } from 'lucide-react';
import { siteConfig } from '../data/site';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const isItemActive = (href: string, children?: { href: string }[]) => {
    if (!currentPath) return false;
    if (href === currentPath) return true;
    if (href !== '/' && currentPath.startsWith(href)) return true;
    if (children && children.some(c => c.href === currentPath || (c.href !== '/' && currentPath.startsWith(c.href)))) {
      return true;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF3]/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Stand Out Wiki Home">
          <img
            src="/images/brand/stand-out-wiki-logo.webp"
            alt="Stand Out Wiki Logo"
            className="h-9 sm:h-10 w-auto object-contain group-hover:scale-102 transition-transform"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {siteConfig.navigation.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const active = isItemActive(item.href, item.children);

            return (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    active
                      ? 'text-emerald-950 bg-emerald-100/90 shadow-xs'
                      : 'text-[#163C3A] hover:text-emerald-900 hover:bg-emerald-50/70'
                  }`}
                  aria-haspopup={hasChildren ? 'true' : undefined}
                  aria-expanded={hasChildren ? activeDropdown === item.label : undefined}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded ${
                      item.badge === 'Active'
                        ? 'bg-amber-100 text-amber-900 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {hasChildren && <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" />}
                </a>

                {/* Dropdown Menu */}
                {hasChildren && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-1.5 w-68 animate-fade-in z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 divide-y divide-slate-100">
                      {item.children?.map((child) => {
                        const childActive = currentPath === child.href;
                        return (
                          <a
                            key={child.label}
                            href={child.href}
                            className={`flex flex-col px-3 py-2 rounded-xl transition-colors group ${
                              childActive ? 'bg-emerald-50 text-emerald-900' : 'hover:bg-emerald-50'
                            }`}
                          >
                            <span className={`text-xs font-bold ${childActive ? 'text-emerald-900 font-extrabold' : 'text-slate-900 group-hover:text-emerald-800'}`}>
                              {child.label}
                            </span>
                            {child.desc && (
                              <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {child.desc}
                              </span>
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Action Area (Search, Mobile Toggle) */}
        <div className="flex items-center gap-2.5">
          {/* Sitewide Search */}
          <SearchModal />

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
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
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-slate-400 hover:text-slate-700 p-1"
            >
              Close ✕
            </button>
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
                      <div className="flex items-center gap-2">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="px-1.5 py-0.2 text-[10px] font-black uppercase tracking-wider rounded bg-emerald-100 text-emerald-800">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180 text-emerald-700' : 'text-slate-400'
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-3 pb-2 space-y-1 bg-slate-50/70 rounded-xl p-2 mb-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 px-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-emerald-100/50"
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
                      <span className={`px-1.5 py-0.2 text-[10px] font-black uppercase tracking-wider rounded ${
                        item.badge === 'Active' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Quick Shortcuts */}
          <div className="pt-2 grid grid-cols-3 gap-2 text-center text-xs font-bold">
            <a
              href="/codes/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col items-center justify-center gap-1 hover:bg-amber-100 transition-colors"
            >
              <Key className="w-4 h-4 text-amber-600" />
              <span>Codes</span>
            </a>
            <a
              href="/tier-list/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col items-center justify-center gap-1 hover:bg-emerald-100 transition-colors"
            >
              <Swords className="w-4 h-4 text-emerald-600" />
              <span>Tier List</span>
            </a>
            <a
              href="/tools/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-900 flex flex-col items-center justify-center gap-1 hover:bg-cyan-100 transition-colors"
            >
              <Wrench className="w-4 h-4 text-cyan-600" />
              <span>Tools</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

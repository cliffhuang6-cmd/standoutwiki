import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Swords, Key, Wrench } from 'lucide-react';
import { siteConfig } from '../data/site';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Keyboard navigation & click outside listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
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

  const getDropdownConfig = (label: string) => {
    if (label === 'Guides') {
      return {
        widthClass: 'w-[540px]',
        alignClass: 'right-0',
        isMegaMenu: true,
        hubHref: '/guides/',
        hubText: 'View All Guides',
        subtitle: 'Comprehensive walkthroughs & boss guides'
      };
    }
    if (label === 'Items & Systems') {
      return {
        widthClass: 'w-[340px]',
        alignClass: 'left-0',
        isMegaMenu: false,
        hubHref: '/items/',
        hubText: 'View Items & Systems',
        subtitle: 'Game mechanics, consumables & gear'
      };
    }
    if (label === 'Tools') {
      return {
        widthClass: 'w-[320px]',
        alignClass: 'right-0',
        isMegaMenu: false,
        hubHref: '/tools/',
        hubText: 'View Tools Directory',
        subtitle: 'Calculators & build simulators'
      };
    }
    // Stands
    return {
      widthClass: 'w-[320px]',
      alignClass: 'left-0',
      isMegaMenu: false,
      hubHref: '/stands/',
      hubText: 'View Stand Database',
      subtitle: 'Movesets, stats & tier rankings'
    };
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
        <nav ref={navRef} className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {siteConfig.navigation.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const active = isItemActive(item.href, item.children);
            const isOpen = activeDropdown === item.label;
            const config = hasChildren ? getDropdownConfig(item.label) : null;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
                onMouseLeave={() => hasChildren && handleMouseLeave()}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    active || isOpen
                      ? 'text-emerald-950 bg-emerald-100/90 shadow-xs'
                      : 'text-[#163C3A] hover:text-emerald-900 hover:bg-emerald-50/70'
                  }`}
                  aria-haspopup={hasChildren ? 'true' : undefined}
                  aria-expanded={hasChildren ? isOpen : undefined}
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
                  {hasChildren && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-900 opacity-100' : ''
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {hasChildren && isOpen && config && (
                  <div
                    className={`absolute top-full pt-1.5 z-50 ${config.alignClass} ${config.widthClass} max-w-[calc(100vw-2rem)] animate-in fade-in slide-in-from-top-1 duration-150`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl shadow-slate-900/12 border border-slate-200/90 p-2.5 max-h-[calc(100vh-5rem)] overflow-y-auto">
                      {/* Items Grid/List */}
                      {config.isMegaMenu ? (
                        <div className="grid grid-cols-2 gap-1.5">
                          {item.children?.map((child) => {
                            const childActive = currentPath === child.href;
                            return (
                              <a
                                key={child.label}
                                href={child.href}
                                className={`group/item flex flex-col px-3 py-2.5 rounded-xl transition-all duration-150 ${
                                  childActive
                                    ? 'bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-200/60'
                                    : 'text-slate-800 hover:bg-emerald-50/70 hover:text-emerald-900'
                                }`}
                              >
                                <div className="flex items-center justify-between gap-1.5">
                                  <span
                                    className={`text-[13px] font-bold tracking-tight leading-snug transition-colors ${
                                      childActive
                                        ? 'text-emerald-950 font-extrabold'
                                        : 'text-slate-900 group-hover/item:text-emerald-900'
                                    }`}
                                  >
                                    {child.label}
                                  </span>
                                  {childActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" aria-hidden="true" />
                                  )}
                                </div>
                                {child.desc && (
                                  <span className="text-[11px] text-slate-500 group-hover/item:text-slate-600 line-clamp-1 mt-0.5 leading-normal font-normal">
                                    {child.desc}
                                  </span>
                                )}
                              </a>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="flex flex-col gap-1">
                          {item.children?.map((child) => {
                            const childActive = currentPath === child.href;
                            return (
                              <a
                                key={child.label}
                                href={child.href}
                                className={`group/item flex flex-col px-3 py-2.5 rounded-xl transition-all duration-150 ${
                                  childActive
                                    ? 'bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-200/60'
                                    : 'text-slate-800 hover:bg-emerald-50/70 hover:text-emerald-900'
                                }`}
                              >
                                <div className="flex items-center justify-between gap-1.5">
                                  <span
                                    className={`text-[13px] font-bold tracking-tight leading-snug transition-colors ${
                                      childActive
                                        ? 'text-emerald-950 font-extrabold'
                                        : 'text-slate-900 group-hover/item:text-emerald-900'
                                    }`}
                                  >
                                    {child.label}
                                  </span>
                                  {childActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" aria-hidden="true" />
                                  )}
                                </div>
                                {child.desc && (
                                  <span className="text-[11px] text-slate-500 group-hover/item:text-slate-600 line-clamp-1 mt-0.5 leading-normal font-normal">
                                    {child.desc}
                                  </span>
                                )}
                              </a>
                            );
                          })}
                        </div>
                      )}

                      {/* Dropdown Footer Hub Link */}
                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between px-2.5 py-1">
                        <span className="text-[11px] font-medium text-slate-400">
                          {config.subtitle}
                        </span>
                        <a
                          href={config.hubHref}
                          className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-700 hover:text-emerald-800 transition-colors group/link"
                        >
                          <span>{config.hubText}</span>
                          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                        </a>
                      </div>
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
                      aria-expanded={activeDropdown === item.label}
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
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180 text-emerald-700' : 'text-slate-400'
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-2 pb-2 space-y-1 bg-slate-50/80 rounded-xl p-2 mb-1">
                        {item.children.map((child) => {
                          const childActive = currentPath === child.href;
                          return (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-2 px-2.5 rounded-lg text-xs font-semibold transition-colors ${
                                childActive
                                  ? 'bg-emerald-100 text-emerald-950 font-bold'
                                  : 'text-slate-700 hover:text-emerald-900 hover:bg-emerald-100/50'
                              }`}
                            >
                              <div className="font-bold">{child.label}</div>
                              {child.desc && (
                                <div className="text-[10px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                                  {child.desc}
                                </div>
                              )}
                            </a>
                          );
                        })}
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

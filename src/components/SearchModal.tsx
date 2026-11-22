import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, Shield, ArrowRight, BookOpen, Key, Package, Sparkles } from 'lucide-react';
import { stands } from '../data/stands';
import { items } from '../data/items';
import { guides } from '../data/guides';
import { codes } from '../data/codes';

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: 'Stand' | 'Item' | 'Guide' | 'Code' | 'System';
  url: string;
  badge?: string;
}

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Keyboard shortcut (Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Build searchable index
  const allEntries: SearchResult[] = useMemo(() => {
    const list: SearchResult[] = [];

    // Stands
    stands.forEach((s) => {
      list.push({
        id: `stand-${s.slug}`,
        title: s.name,
        subtitle: `${s.canonicalUser} • ${s.jojoPart} • ${s.rarity}`,
        category: 'Stand',
        url: `/stands/${s.slug}/`,
        badge: s.rarity
      });
    });

    // Items
    items.forEach((item) => {
      list.push({
        id: `item-${item.slug}`,
        title: item.name,
        subtitle: `${item.category} • ${item.description.slice(0, 70)}...`,
        category: 'Item',
        url: `/items/#${item.slug}`,
        badge: item.category
      });
    });

    // Guides
    guides.forEach((g) => {
      list.push({
        id: `guide-${g.slug}`,
        title: g.title,
        subtitle: `${g.category} • ${g.readingTime}`,
        category: 'Guide',
        url: `/guides/${g.slug}/`,
        badge: g.category
      });
    });

    // Codes
    codes.forEach((c) => {
      list.push({
        id: `code-${c.code}`,
        title: c.code,
        subtitle: `Reward: ${c.reward}`,
        category: 'Code',
        url: `/codes/#${c.code}`,
        badge: c.status
      });
    });

    // Key Systems
    const systems = [
      { title: 'Tier List (PvP & Raid)', url: '/tier-list/', desc: 'Complete competitive Stand rankings' },
      { title: 'Stand Arrows Guide', url: '/stand-arrows/', desc: 'Mysterious, Lucky, Bizarre rates' },
      { title: 'Stand Rarity & Chances', url: '/stand-rarity/', desc: 'Bernoulli probability & roll tables' },
      { title: 'Hamon (The Ripple)', url: '/hamon/', desc: 'Lisa Lisa quest & 3 Hamon paths' },
      { title: 'Vampire (Stone Mask)', url: '/vampire/', desc: 'Blood mechanics & Shadow Cloak' },
      { title: 'Rokakaka Fruit Mutations', url: '/rokakaka/', desc: 'Stand reset & 33 mutations' },
      { title: 'Gardening & Crops', url: '/gardening/', desc: 'Seeds, soil, water & greenhouse' },
      { title: 'Stand Storage & D\'Arby', url: '/stand-storage/', desc: 'Stand chips and slots' },
      { title: 'Quests & NPC Directory', url: '/quests/', desc: 'Story quests & bounty targets' },
      { title: 'Accessories & Sets', url: '/accessories/', desc: 'DIO, Jotaro, SWAT gear sets' }
    ];
    systems.forEach((sys) => {
      list.push({
        id: `sys-${sys.title}`,
        title: sys.title,
        subtitle: sys.desc,
        category: 'System',
        url: sys.url,
        badge: 'Mechanic'
      });
    });

    return list;
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) {
      return allEntries.slice(0, 8); // Featured default results
    }
    const q = query.toLowerCase();
    return allEntries
      .filter((item) => item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q))
      .slice(0, 12);
  }, [allEntries, query]);

  return (
    <>
      {/* Search trigger button for Header / Nav */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300 transition-colors shadow-sm"
        aria-label="Search database"
      >
        <Search className="w-4 h-4 text-emerald-700" />
        <span className="hidden sm:inline text-slate-700">Search wiki...</span>
        <span className="inline sm:hidden text-slate-700">Search</span>
        <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 rounded shadow-xs">
          /
        </kbd>
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
              <Search className="w-5 h-5 text-emerald-600 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Stands, Codes, Items, Quests, Guides..."
                className="w-full text-slate-900 placeholder-slate-400 text-base focus:outline-none"
                autoFocus
              />
              {query && (
                <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-slate-500">
                  <p className="text-base font-semibold">No results found for "{query}"</p>
                  <p className="text-sm mt-1 text-slate-400">Try searching for "Star Platinum", "100KLIKESHUGE", "Lucky Arrow", or "Hamon".</p>
                </div>
              ) : (
                filtered.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 hover:bg-emerald-50/70 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-emerald-100 text-slate-600 group-hover:text-emerald-700 transition-colors">
                        {item.category === 'Stand' && <Shield className="w-4 h-4" />}
                        {item.category === 'Item' && <Package className="w-4 h-4" />}
                        {item.category === 'Guide' && <BookOpen className="w-4 h-4" />}
                        {item.category === 'Code' && <Key className="w-4 h-4" />}
                        {item.category === 'System' && <Sparkles className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 group-hover:text-emerald-900 text-sm">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-100 text-slate-600 group-hover:bg-emerald-200 group-hover:text-emerald-800">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0" />
                  </a>
                ))
              )}
            </div>

            {/* Footer Hint */}
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Press <kbd className="font-semibold text-slate-700">ESC</kbd> to close</span>
              <span>Direct database index: 80+ records</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

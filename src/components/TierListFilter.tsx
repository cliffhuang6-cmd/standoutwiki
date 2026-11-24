import React, { useState, useMemo } from 'react';
import { Shield, Swords, Zap, Coins, Search, ExternalLink, Filter } from 'lucide-react';
import { stands } from '../data/stands';
import type { TierRank } from '../types';

type TierMode = 'pvp' | 'raid' | 'farming';

const TIER_ORDER: TierRank[] = ['Z', 'S+', 'S', 'A+', 'A', 'B', 'C'];

const TIER_COLORS: Record<TierRank, { bg: string; text: string; border: string }> = {
  'Z': { bg: 'bg-rose-600', text: 'text-white', border: 'border-rose-700' },
  'S+': { bg: 'bg-amber-500', text: 'text-slate-950', border: 'border-amber-600' },
  'S': { bg: 'bg-emerald-600', text: 'text-white', border: 'border-emerald-700' },
  'A+': { bg: 'bg-teal-600', text: 'text-white', border: 'border-teal-700' },
  'A': { bg: 'bg-sky-600', text: 'text-white', border: 'border-sky-700' },
  'B': { bg: 'bg-slate-500', text: 'text-white', border: 'border-slate-600' },
  'C': { bg: 'bg-slate-400', text: 'text-slate-900', border: 'border-slate-500' },
};

const MODE_DESCRIPTIONS: Record<TierMode, { title: string; desc: string }> = {
  pvp: {
    title: 'PvP Combat Tier List',
    desc: 'Evaluated by frame data, true combo reliability, guardbreak options, and defensive i-frames.'
  },
  raid: {
    title: 'Raid & Boss Tier List',
    desc: 'Ranked by sustained DPS, AOE crowd clear in 77 Rings, and survivability against multi-target bosses.'
  },
  farming: {
    title: 'Farming & Economy Tier List',
    desc: 'Ranked by mob clearing speed, dalas foraging (Harvest/Shigechi), and mobility for delivery routes.'
  }
};

export default function TierListFilter() {
  const [mode, setMode] = useState<TierMode>('pvp');
  const [rarityFilter, setRarityFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const rarities = ['All', 'Pinnacle', 'Exclusive', 'Mythical', 'Legendary', 'Epic', 'Rare', 'Evolution', 'Alternative Universe', 'Quest', 'Historical'];

  const filteredStands = useMemo(() => {
    return stands.filter((s) => {
      // Historical stands only shown if explicitly selected in rarity filter
      if (s.status === 'Historical' && rarityFilter !== 'Historical') return false;
      const matchesRarity = rarityFilter === 'All' || s.rarity === rarityFilter || (rarityFilter === 'Historical' && s.status === 'Historical');
      const matchesQuery = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           s.canonicalUser.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           s.jojoPart.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRarity && matchesQuery;
    });
  }, [rarityFilter, searchQuery]);

  const standsByTier = useMemo(() => {
    const map: Record<TierRank, typeof stands> = {
      'Z': [],
      'S+': [],
      'S': [],
      'A+': [],
      'A': [],
      'B': [],
      'C': []
    };

    filteredStands.forEach((s) => {
      const rank = s.tier[mode];
      if (map[rank]) {
        map[rank].push(s);
      }
    });

    return map;
  }, [filteredStands, mode]);

  return (
    <div className="space-y-8">
      {/* Mode Switcher Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          <button
            type="button"
            onClick={() => setMode('pvp')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
              mode === 'pvp'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Swords className="w-4 h-4" />
            PvP Combat Mode
          </button>
          <button
            type="button"
            onClick={() => setMode('raid')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
              mode === 'raid'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Shield className="w-4 h-4" />
            Raids &amp; PvE Mode
          </button>
          <button
            type="button"
            onClick={() => setMode('farming')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
              mode === 'farming'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Coins className="w-4 h-4" />
            Farming &amp; Cash Mode
          </button>
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter Stands in tier..."
            className="w-full pl-9 pr-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl focus:outline-emerald-600 text-slate-900"
          />
        </div>
      </div>

      {/* Rarity Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        <span className="font-bold text-slate-400 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Filter:
        </span>
        {rarities.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRarityFilter(r)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap ${
              rarityFilter === r
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Current Mode Description Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
        <div>
          <h3 className="font-extrabold text-sm text-slate-900">{MODE_DESCRIPTIONS[mode].title}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{MODE_DESCRIPTIONS[mode].desc}</p>
        </div>
        <span className="text-xs font-bold font-mono px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600">
          {filteredStands.length} Stands Shown
        </span>
      </div>

      {/* Tier Rows */}
      <div className="space-y-4">
        {TIER_ORDER.map((tier) => {
          const list = standsByTier[tier];
          if (list.length === 0) return null;

          const color = TIER_COLORS[tier];

          return (
            <div
              key={tier}
              className="flex flex-col md:flex-row bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Tier Badge Left Header */}
              <div
                className={`w-full md:w-28 flex md:flex-col items-center justify-between md:justify-center p-4 md:p-6 ${color.bg} ${color.text} shrink-0`}
              >
                <span className="text-3xl md:text-4xl font-black font-mono tracking-tighter">
                  {tier}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-90 mt-1">
                  {tier === 'Z' ? 'God Meta' : tier === 'S+' ? 'Top Tier' : tier === 'S' ? 'High Tier' : tier === 'A+' ? 'Solid' : tier === 'A' ? 'Viable' : tier === 'B' ? 'Niche' : 'Low'}
                </span>
              </div>

              {/* Stands in Tier */}
              <div className="p-4 md:p-6 flex-1 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {list.map((stand) => (
                    <a
                      key={stand.slug}
                      href={`/stands/${stand.slug}/`}
                      className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group"
                    >
                      <img
                        src={`${stand.image}?v=2`}
                        alt={stand.name}
                        loading="lazy"
                        className="w-12 h-12 object-cover rounded-lg bg-slate-100 shrink-0 border border-slate-200 group-hover:scale-105 transition-transform"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="font-black text-xs text-slate-900 group-hover:text-emerald-900 truncate">
                          {stand.name}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate mt-0.5">
                          {stand.canonicalUser}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[10px] font-bold px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded">
                            {stand.rarity}
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-700">
                            {stand.combatRole}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 shrink-0 mr-1" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Editorial Disclaimer Footer */}
      <div className="text-xs text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <span className="font-bold text-slate-700">Editorial Ranking Notice:</span> These rankings represent the independent analysis of competitive Stand Out tournament players and data mining of frame advantage, hitboxes, and damage scaling. Rankings reflect current November 2026 balance patches. They are not official developer pronouncements.
      </div>
    </div>
  );
}

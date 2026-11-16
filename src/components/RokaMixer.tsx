import React, { useState, useMemo } from 'react';
import { Sparkles, Search, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import { rokaMutations } from '../data/rokakaka';

const SEEDS = [
  { name: 'Rokaka Seed', desc: 'Standard mutation catalyst. 3% mutation rate on harvest.' },
  { name: 'Apple Seed', desc: 'Grows cleansing fruit that resets fighting styles.' },
  { name: 'Cherry Seed', desc: 'Fastest growing garden fruit for delivery quests.' },
  { name: 'Tomato Seed', desc: 'High yield crop for restaurant delivery contracts.' },
  { name: 'Banana Seed', desc: 'Mid-tier fruit used for cooking and temporary stamina buffs.' },
  { name: 'Dragon Fruit Seed', desc: 'Rare exotic seed providing high Dalas resale profit.' },
  { name: 'Watermelon Seed', desc: 'Heavy crop granting high hydration and temperature cooling.' }
];

export default function RokaMixer() {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredMutations = useMemo(() => {
    return rokaMutations.filter((m) => {
      const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
                          m.effect.toLowerCase().includes(search.toLowerCase());
      if (!matchSearch) return false;
      if (filterType === 'stand-reset') return m.removesStand;
      if (filterType === 'sub-reset') return m.removesSubAbility;
      if (filterType === 'buff') return !m.removesStand && !m.removesSubAbility;
      return true;
    });
  }, [search, filterType]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden" id="mixer">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md">
            <Sparkles className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h3 className="text-xl font-black tracking-tight">Rokakaka Mutation &amp; Gardening Lookup</h3>
            <p className="text-xs text-emerald-200 mt-0.5">
              Verified formulas for 35 Rokakaka fruit mutations, petrification exchange penalties, and cultivation rules.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs pb-1">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
                filterType === 'all'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All 35 Mutations
            </button>
            <button
              type="button"
              onClick={() => setFilterType('stand-reset')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
                filterType === 'stand-reset'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Stand Removal
            </button>
            <button
              type="button"
              onClick={() => setFilterType('sub-reset')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
                filterType === 'sub-reset'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Sub-Ability Reset
            </button>
            <button
              type="button"
              onClick={() => setFilterType('buff')}
              className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
                filterType === 'buff'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Combat &amp; Utility
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search mutations or effects..."
              className="w-full pl-9 pr-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl focus:outline-emerald-600 text-slate-900"
            />
          </div>
        </div>

        {/* Mutation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMutations.map((roka) => (
            <div
              key={roka.slug}
              className="bg-white rounded-xl border border-slate-200 p-4 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-extrabold text-sm text-slate-900">{roka.name}</h4>
                  {roka.removesStand && (
                    <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded bg-rose-100 text-rose-800">
                      Stand Reset
                    </span>
                  )}
                  {roka.removesSubAbility && (
                    <span className="px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded bg-teal-100 text-teal-800">
                      Style Reset
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {roka.effect}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 text-[11px]">
                <div className="flex items-start gap-1.5 text-amber-800 bg-amber-50/70 p-2 rounded-lg">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Equivalent Exchange:</strong> {roka.stoneLimbPenalty}</span>
                </div>
                {roka.specialNotes && (
                  <div className="text-slate-500 italic px-1">
                    Tip: {roka.specialNotes}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Cultivation Rules Info Box */}
        <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 flex items-start gap-3 text-xs text-emerald-900">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Gardening &amp; Greenhouse Mechanics:</span> Standard Rokakakas have a 3% mutation rate upon reaching maturity. Planting crops inside the <strong>Rokakaka Growing Room (Gang Base perk)</strong> grants a permanent <strong>3x growth speed multiplier</strong>, dramatically accelerating mutation production for gang members.
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useMemo } from 'react';
import { stands } from '../data/stands';
import type { Stand } from '../types';
import { Search, X, Plus, Copy, Check, ArrowRightLeft, Shield, Sparkles, Zap, Award } from 'lucide-react';

export default function StandCompare() {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(['star-platinum', 'the-world']);
  const [searchQueries, setSearchQueries] = useState<string[]>(['', '', '']);
  const [activeSearchSlot, setActiveSearchSlot] = useState<number | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Initialize from URL query params
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const s1 = params.get('s1');
      const s2 = params.get('s2');
      const s3 = params.get('s3');
      const initial: string[] = [];
      if (s1 && stands.some(s => s.slug === s1)) initial.push(s1);
      if (s2 && stands.some(s => s.slug === s2)) initial.push(s2);
      if (s3 && stands.some(s => s.slug === s3)) initial.push(s3);

      if (initial.length >= 2) {
        setSelectedSlugs(initial);
      }
    }
  }, []);

  // Update URL parameters when selection changes
  const updateUrlParams = (slugs: string[]) => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams();
      slugs.forEach((s, idx) => {
        params.set(`s${idx + 1}`, s);
      });
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  };

  const handleSelectStand = (slotIdx: number, slug: string) => {
    const updated = [...selectedSlugs];
    updated[slotIdx] = slug;
    setSelectedSlugs(updated);
    setActiveSearchSlot(null);
    updateUrlParams(updated);
  };

  const handleAddSlot = () => {
    if (selectedSlugs.length < 3) {
      // Find a stand not yet selected
      const available = stands.find(s => !selectedSlugs.includes(s.slug))?.slug || 'king-crimson';
      const updated = [...selectedSlugs, available];
      setSelectedSlugs(updated);
      updateUrlParams(updated);
    }
  };

  const handleRemoveSlot = (slotIdx: number) => {
    if (selectedSlugs.length > 2) {
      const updated = selectedSlugs.filter((_, idx) => idx !== slotIdx);
      setSelectedSlugs(updated);
      updateUrlParams(updated);
    }
  };

  const handleReset = () => {
    const defaults = ['star-platinum', 'the-world'];
    setSelectedSlugs(defaults);
    updateUrlParams(defaults);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const selectedStands: Stand[] = useMemo(() => {
    return selectedSlugs
      .map(slug => stands.find(s => s.slug === slug))
      .filter((s): s is Stand => Boolean(s));
  }, [selectedSlugs]);

  const rarityColors: Record<string, string> = {
    Pinnacle: 'bg-rose-100 text-rose-800 border-rose-200',
    Exclusive: 'bg-violet-100 text-violet-800 border-violet-200',
    Mythical: 'bg-amber-100 text-amber-800 border-amber-200',
    Legendary: 'bg-purple-100 text-purple-800 border-purple-200',
    Epic: 'bg-sky-100 text-sky-800 border-sky-200',
    Rare: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Evolution: 'bg-teal-100 text-teal-800 border-teal-200',
    Historical: 'bg-slate-200 text-slate-800 border-slate-300',
  };

  return (
    <div className="space-y-8">
      {/* Control Bar: Actions & Preset Selectors */}
      <div className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Compare:</span>
          {selectedSlugs.map((slug, idx) => {
            const stand = stands.find(s => s.slug === slug);
            return (
              <div key={idx} className="relative">
                <button
                  onClick={() => setActiveSearchSlot(activeSearchSlot === idx ? null : idx)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 font-bold text-xs hover:border-amber-400 hover:bg-amber-50/50 transition-colors"
                >
                  <span>Stand {idx + 1}: <strong>{stand?.name || 'Choose...'}</strong></span>
                  <ArrowRightLeft className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* Dropdown Selector Popover */}
                {activeSearchSlot === idx && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl border border-slate-200 shadow-xl z-30 p-3 space-y-2">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search Stand name..."
                        value={searchQueries[idx]}
                        onChange={(e) => {
                          const updated = [...searchQueries];
                          updated[idx] = e.target.value;
                          setSearchQueries(updated);
                        }}
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-amber-500"
                        autoFocus
                      />
                    </div>
                    <div className="max-h-60 overflow-y-auto divide-y divide-slate-100 text-xs">
                      {stands
                        .filter(s => s.name.toLowerCase().includes(searchQueries[idx].toLowerCase()) || s.canonicalUser.toLowerCase().includes(searchQueries[idx].toLowerCase()))
                        .map(s => (
                          <button
                            key={s.slug}
                            onClick={() => handleSelectStand(idx, s.slug)}
                            className={`w-full text-left px-2.5 py-2 hover:bg-amber-50 transition-colors flex items-center justify-between ${
                              s.slug === slug ? 'bg-amber-50/80 font-bold text-amber-900' : 'text-slate-700'
                            }`}
                          >
                            <span>{s.name}</span>
                            <span className="text-[10px] text-slate-400">{s.rarity}</span>
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {selectedSlugs.length < 3 && (
            <button
              onClick={handleAddSlot}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-dashed border-slate-300 text-slate-600 font-bold text-xs hover:border-amber-500 hover:text-amber-800 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add 3rd Stand</span>
            </button>
          )}
        </div>

        {/* Share & Reset Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link Copied!' : 'Share Comparison'}</span>
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-100 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-${selectedStands.length} gap-6`}>
        {selectedStands.map((stand, idx) => (
          <div key={stand.slug} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            {/* Header & Removal */}
            <div className="p-6 border-b border-slate-100 relative bg-slate-50/60">
              {selectedStands.length > 2 && (
                <button
                  onClick={() => handleRemoveSlot(idx)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-rose-600 hover:border-rose-200 transition-colors"
                  title="Remove this slot"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  <img
                    src={`${stand.image}?v=2`}
                    alt={stand.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className={`px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-md border ${
                    rarityColors[stand.rarity] || 'bg-slate-100 text-slate-800'
                  }`}>
                    {stand.rarity}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1 leading-tight">{stand.name}</h3>
                  <p className="text-xs text-slate-500 font-semibold">{stand.canonicalUser}</p>
                  <p className="text-[11px] text-slate-400">{stand.jojoPart}</p>
                </div>
              </div>
            </div>

            {/* Core Metrics Comparison Table */}
            <div className="p-6 space-y-6 text-xs text-slate-600">
              {/* Meta Scores */}
              <div>
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  Tier Rankings
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">PvP Tier</span>
                    <strong className="text-sm font-black text-slate-900">{stand.tier.pvp}</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Raid Tier</span>
                    <strong className="text-sm font-black text-slate-900">{stand.tier.raid}</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase">Farm Tier</span>
                    <strong className="text-sm font-black text-slate-900">{stand.tier.farming}</strong>
                  </div>
                </div>
              </div>

              {/* Combat Role & Obtainment */}
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                  <span className="font-bold text-slate-700">Combat Role:</span>
                  <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    {stand.combatRole}
                  </span>
                </div>
                <div className="py-1.5 border-b border-slate-100">
                  <span className="font-bold text-slate-700 block mb-0.5">Obtainment Method:</span>
                  <span className="text-slate-600 leading-relaxed text-[11px] block">{stand.obtainMethod}</span>
                </div>
              </div>

              {/* Passive Ability */}
              <div>
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-teal-600" />
                  Passive Trait
                </h4>
                {stand.passives.map((p, pIdx) => (
                  <div key={pIdx} className="p-3 rounded-xl bg-teal-50/60 border border-teal-100 mb-2">
                    <strong className="text-teal-900 block font-bold text-xs mb-0.5">{p.name}</strong>
                    <p className="text-teal-800 text-[11px] leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>

              {/* Full Moveset Table */}
              <div>
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Moveset &amp; Cooldowns ({stand.moveset.length} Moves)
                </h4>
                <div className="space-y-2">
                  {stand.moveset.map((move, mIdx) => (
                    <div key={mIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.5 rounded font-mono font-black bg-slate-900 text-white text-[10px]">
                            {move.key}
                          </span>
                          <strong className="text-xs font-black text-slate-900">{move.name}</strong>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500">
                          {move.cooldown || 'No CD'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-500">
                        <span className="text-amber-800 font-semibold">{move.damage || 'Utility'}</span>
                        <span className="text-slate-400">{move.type}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug pt-0.5">
                        {move.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Stat Build */}
              <div>
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                  Recommended Level 75 Build
                </h4>
                <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 text-[11px] space-y-1.5">
                  <div className="flex justify-between font-mono font-bold text-purple-900">
                    <span>HP: {stand.recommendedBuild.points.health}</span>
                    <span>DMG: {stand.recommendedBuild.points.damage}</span>
                    <span>ABI: {stand.recommendedBuild.points.ability}</span>
                  </div>
                  <div className="text-purple-800">
                    <strong>Synergy Style:</strong> {stand.recommendedBuild.subAbility}
                  </div>
                  <p className="text-purple-700 text-[10px] leading-relaxed">
                    {stand.recommendedBuild.synergyNotes}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Stand Profile Link */}
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <a
                href={`/stands/${stand.slug}/`}
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-slate-900 text-white hover:bg-amber-600 transition-colors block"
              >
                View Full {stand.name} Wiki Page &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

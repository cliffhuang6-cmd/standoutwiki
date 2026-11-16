import React, { useState, useMemo } from 'react';
import { Sparkles, Calculator, Info, ShieldAlert, Award } from 'lucide-react';

interface ArrowConfig {
  id: string;
  name: string;
  costDesc: string;
  targets: {
    label: string;
    rate: number; // e.g. 0.015 for 1.5%
    desc: string;
  }[];
}

const arrowConfigs: ArrowConfig[] = [
  {
    id: 'mysterious',
    name: 'Mysterious Arrow (Standard)',
    costDesc: 'Basic drops, 3x Arrow Parts + 1x Steel, or 7 Train Tokens',
    targets: [
      { label: 'Pinnacle Tier (SP, The World, King Crimson)', rate: 0.005, desc: '~0.5% base chance (matches Lucky 1-(1-p)^3=1.5%)' },
      { label: 'Mythical Sub-Tier (November Rain, Highway Star, etc.)', rate: 0.05, desc: '~5.0% estimated tier chance' },
      { label: 'Legendary Tier (Kiss, Silver Chariot, Magician\'s Red)', rate: 0.145, desc: '~14.5% tier chance' },
      { label: 'Epic Tier (Kraft Work, The Hustle, Harvest)', rate: 0.35, desc: '~35.0% tier chance' },
      { label: 'Rare Tier (Yellow Temperance, Beach Boy, Smooth Ops)', rate: 0.45, desc: '~45.0% tier chance' }
    ]
  },
  {
    id: 'lucky',
    name: 'Lucky Arrow (Rare Excluded)',
    costDesc: 'Craft with 3x Mysterious Arrows or 25 Train Tokens',
    targets: [
      { label: 'Pinnacle Tier (1.5% Verified)', rate: 0.015, desc: 'Official developer rate: 1.5%' },
      { label: 'Mythical Tier (22.1% Verified)', rate: 0.221, desc: 'Official developer rate: 22.1%' },
      { label: 'Legendary Tier (34.0% Verified)', rate: 0.340, desc: 'Official developer rate: 34.0%' },
      { label: 'Epic Tier (42.5% Verified)', rate: 0.425, desc: 'Official developer rate: 42.5%' }
    ]
  },
  {
    id: 'bizarre',
    name: 'Bizarre Arrow (Rare & Epic Excluded)',
    costDesc: 'Craft with 9x Mysterious Arrows or 75 Train Tokens',
    targets: [
      { label: 'Pinnacle Tier (4.4% Verified)', rate: 0.044, desc: 'Official developer rate: 4.4%' },
      { label: 'Mythical Tier (37.7% Verified)', rate: 0.377, desc: 'Official developer rate: 37.7%' },
      { label: 'Legendary Tier (57.9% Verified)', rate: 0.579, desc: 'Official developer rate: 57.9%' }
    ]
  },
  {
    id: 'part3',
    name: 'Mysterious Arrow [Part 3]',
    costDesc: '5x Steel Ingot + 1x Mysterious Arrow at Crafting Station',
    targets: [
      { label: 'Star Platinum (5.0% Flat Rate)', rate: 0.05, desc: 'Explicitly locked at 5.0% on Part 3 arrow' },
      { label: 'The World (5.0% Flat Rate)', rate: 0.05, desc: 'Explicitly locked at 5.0% on Part 3 arrow' },
      { label: 'Any Top Tier (SP or The World Combined: 10.0%)', rate: 0.10, desc: '10.0% combined probability per pull' }
    ]
  },
  {
    id: 'part5',
    name: 'Mysterious Arrow [Part 5]',
    costDesc: '5x Steel Ingot + 1x Mysterious Arrow or Train Raid Drop',
    targets: [
      { label: 'King Crimson Full (5.0% Flat Rate)', rate: 0.05, desc: 'Explicitly locked at 5.0% on Part 5 arrow' },
      { label: 'Kraft Work (Equal Share ~11.8%)', rate: 0.118, desc: 'Equal weight among non-KC Part 5 pool' }
    ]
  }
];

export default function ArrowCalculator() {
  const [selectedArrowId, setSelectedArrowId] = useState('lucky');
  const [targetIndex, setTargetIndex] = useState(0);
  const [pullCount, setPullCount] = useState(10);

  const currentArrow = useMemo(() => {
    return arrowConfigs.find((a) => a.id === selectedArrowId) || arrowConfigs[0];
  }, [selectedArrowId]);

  const currentTarget = useMemo(() => {
    return currentArrow.targets[targetIndex] || currentArrow.targets[0];
  }, [currentArrow, targetIndex]);

  // Exact Bernoulli Formula: P(>= 1) = 1 - (1 - p)^n
  const probability = useMemo(() => {
    const p = currentTarget.rate;
    const n = Math.max(1, Math.min(200, pullCount));
    const chance = 1 - Math.pow(1 - p, n);
    return Math.min(0.9999, Math.max(0, chance));
  }, [currentTarget, pullCount]);

  // Calculate milestones
  const milestones = useMemo(() => {
    const p = currentTarget.rate;
    if (p <= 0 || p >= 1) return { p50: 1, p90: 1, p99: 1 };
    // 1 - (1-p)^n = target => (1-p)^n = 1 - target => n = ln(1 - target) / ln(1 - p)
    const calcN = (target: number) => Math.ceil(Math.log(1 - target) / Math.log(1 - p));
    return {
      p50: calcN(0.50),
      p90: calcN(0.90),
      p99: calcN(0.99),
    };
  }, [currentTarget]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 px-6 py-5 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md">
            <Calculator className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h3 className="text-xl font-black tracking-tight">Arrow Probability &amp; Pull Calculator</h3>
            <p className="text-xs text-emerald-200 mt-0.5">
              Verified mathematical odds calculated via Bernoulli trials formula: P(at least one) = 1 − (1 − p)ⁿ
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Step 1: Select Arrow */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            1. Select Arrow Type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {arrowConfigs.map((arrow) => (
              <button
                key={arrow.id}
                type="button"
                onClick={() => {
                  setSelectedArrowId(arrow.id);
                  setTargetIndex(0);
                }}
                className={`text-left p-3.5 rounded-xl border transition-all ${
                  selectedArrowId === arrow.id
                    ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-600/20 shadow-xs'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 hover:border-slate-300'
                }`}
              >
                <div className="font-bold text-sm text-slate-900">{arrow.name}</div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">{arrow.costDesc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Target Outcome */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            2. Select Desired Target Tier / Stand
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentArrow.targets.map((tgt, idx) => (
              <button
                key={tgt.label}
                type="button"
                onClick={() => setTargetIndex(idx)}
                className={`text-left p-3 rounded-lg border transition-all ${
                  targetIndex === idx
                    ? 'border-emerald-600 bg-emerald-600 text-white shadow-md'
                    : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs">{tgt.label}</span>
                  <span className={`text-xs font-mono font-extrabold ${targetIndex === idx ? 'text-amber-200' : 'text-emerald-700'}`}>
                    {(tgt.rate * 100).toFixed(1)}%
                  </span>
                </div>
                <div className={`text-[11px] mt-1 ${targetIndex === idx ? 'text-emerald-100' : 'text-slate-500'}`}>
                  {tgt.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Number of Pulls */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
              3. Number of Arrow Rolls (Pulls)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="200"
                value={pullCount}
                onChange={(e) => setPullCount(Math.max(1, Math.min(200, parseInt(e.target.value) || 1)))}
                className="w-20 px-2 py-1 text-center font-mono font-bold text-slate-900 border border-slate-300 rounded-lg text-sm bg-white"
              />
              <span className="text-xs font-semibold text-slate-500">Rolls</span>
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={Math.min(100, pullCount)}
            onChange={(e) => setPullCount(parseInt(e.target.value))}
            className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>1 Roll</span>
            <span>25 Rolls</span>
            <span>50 Rolls</span>
            <span>75 Rolls</span>
            <span>100 Rolls</span>
          </div>
        </div>

        {/* Output Hero Result */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-4 h-4" />
                Cumulative Probability Result
              </div>
              <h4 className="text-lg font-bold mt-1 text-slate-100">
                Chance of pulling at least one {currentTarget.label.split('(')[0].trim()}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Across <span className="text-white font-bold">{pullCount}</span> consecutive {currentArrow.name} attempts
              </p>
            </div>

            <div className="text-center md:text-right shrink-0">
              <div className="text-4xl md:text-5xl font-black font-mono tracking-tight text-emerald-400">
                {(probability * 100).toFixed(2)}%
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {probability >= 0.90 ? '🔥 High Statistical Confidence' : probability >= 0.50 ? '⚖️ Coin-flip (>50% Odds)' : '⏳ Requires Continued Farming'}
              </div>
            </div>
          </div>

          {/* Progress bar visual */}
          <div className="mt-5 w-full bg-slate-700/60 rounded-full h-3 overflow-hidden p-0.5">
            <div
              className="bg-gradient-to-r from-teal-500 via-emerald-400 to-amber-300 h-full rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, Math.max(3, probability * 100))}%` }}
            />
          </div>
        </div>

        {/* Milestone Targets Table */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Award className="w-4 h-4 text-emerald-600" />
            Statistical Pull Milestones for {currentTarget.label.split('(')[0].trim()}
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="text-[11px] font-semibold text-slate-500">50% Median (Coin Flip)</div>
              <div className="text-lg font-black font-mono text-slate-900 mt-1">~{milestones.p50} Rolls</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Half of all players succeed</div>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100">
              <div className="text-[11px] font-semibold text-emerald-700">90% Confidence Target</div>
              <div className="text-lg font-black font-mono text-emerald-900 mt-1">~{milestones.p90} Rolls</div>
              <div className="text-[10px] text-emerald-600 mt-0.5">Reliable farm goal</div>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
              <div className="text-[11px] font-semibold text-amber-800">99% Virtual Certainty</div>
              <div className="text-lg font-black font-mono text-amber-900 mt-1">~{milestones.p99} Rolls</div>
              <div className="text-[10px] text-amber-700 mt-0.5">99 out of 100 players</div>
            </div>
          </div>
        </div>

        {/* Technical Explanatory Disclaimer */}
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-800">Mathematical Note:</span> Roblox STAND OUT does not utilize a hidden escalating pity counter for Stand Arrows. Every arrow roll is an independent Bernoulli trial. While your cumulative probability increases over multiple attempts, previous failed rolls do not increase the odds of subsequent rolls.
          </div>
        </div>
      </div>
    </div>
  );
}

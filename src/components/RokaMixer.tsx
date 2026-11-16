import React, { useState, useMemo } from 'react';
import { Sparkles, Search, AlertTriangle, ShieldCheck, Zap, Calculator, Sprout, Clock, DollarSign, Package } from 'lucide-react';
import { rokaMutations } from '../data/rokakaka';

// Verified garden produce processing recipes from official Trello cards
const PROCESSING_RECIPES = [
  {
    name: 'Jar of Rokaka',
    category: 'Packaging',
    ingredients: ['1x Empty Glass Jar', '1x Mature Rokakaka Fruit'],
    productionTime: '10s',
    baseSale: 3000,
    rawSale: 1200,
    markup: '+150%',
    utility: 'Safe storage and 2.5x export value at Harbor Export stalls'
  },
  {
    name: 'Jar of Apples',
    category: 'Packaging',
    ingredients: ['1x Empty Glass Jar', '2x Mature Apples'],
    productionTime: '10s',
    baseSale: 875,
    rawSale: 700,
    markup: '+25%',
    utility: 'Cures combat exhaustion and provides passive stamina regeneration'
  },
  {
    name: 'Jar of Tomatoes',
    category: 'Packaging',
    ingredients: ['1x Empty Glass Jar', '3x Mature Tomatoes'],
    productionTime: '10s',
    baseSale: 630,
    rawSale: 420,
    markup: '+50%',
    utility: 'Culinary ingredient for restaurant delivery contracts'
  },
  {
    name: 'Mysterious Fertilizer',
    category: 'Cultivation',
    ingredients: ['3x Organic Scrap', '1x Bone Meal'],
    productionTime: '15s',
    baseSale: 350,
    rawSale: 150,
    markup: '+133%',
    utility: 'Accelerates crop growth cycles by -25% when applied to soil'
  },
  {
    name: 'High-Yield Garden Pot',
    category: 'Hardware',
    ingredients: ['4x Clay Bricks', '2x Dirt Bags'],
    productionTime: '20s',
    baseSale: 250,
    rawSale: 180,
    markup: '+38%',
    utility: 'Deployable farming plot with +1.5% natural mutation probability bonus'
  }
];

export default function RokaMixer() {
  const [activeTab, setActiveTab] = useState<'calculator' | 'directory' | 'recipes'>('calculator');
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Calculator State
  const [seedCount, setSeedCount] = useState<number>(20);
  const [plotCount, setPlotCount] = useState<number>(4);
  const [plotType, setPlotType] = useState<'standard' | 'greenhouse'>('greenhouse');
  const [useFertilizer, setUseFertilizer] = useState<boolean>(true);

  // Probability calculations based on verified 3% base mutation rate
  const calcResults = useMemo(() => {
    const p = 0.03; // Base 3% mutation chance
    const n = Math.max(1, seedCount);
    
    // P(at least 1 mutation) = 1 - (1 - p)^n
    const probAtLeastOne = (1 - Math.pow(1 - p, n)) * 100;
    
    // P(at least 2 mutations) = 1 - (1-p)^n - n * p * (1-p)^(n-1)
    const probZero = Math.pow(1 - p, n);
    const probOne = n * p * Math.pow(1 - p, n - 1);
    const probAtLeastTwo = Math.max(0, (1 - probZero - probOne) * 100);
    
    // Expected mutations
    const expectedMutations = n * p;

    // Time calculations
    const baseCycleMinutes = 25; // 25 min base Rokakaka growth
    const speedMultiplier = plotType === 'greenhouse' ? 3.0 : 1.0;
    const fertMultiplier = useFertilizer ? 0.75 : 1.0;
    const cycleMinutes = (baseCycleMinutes / speedMultiplier) * fertMultiplier;
    
    // Batches needed
    const batches = Math.ceil(n / Math.max(1, plotCount));
    const totalMinutes = batches * cycleMinutes;

    // Economic costs
    const seedCost = n * 50; // $50/seed
    const soilCost = Math.ceil(n / 2) * 100; // $100/bag (2 seeds per bag)
    const waterCost = batches * 50; // $50/ice water bucket per batch
    const fertCost = useFertilizer ? n * 40 : 0;
    const totalInvestment = seedCost + soilCost + waterCost + fertCost;

    // Estimated revenue
    const estimatedRawReturn = n * 1200; // $1,200 base Roka price
    const estimatedPackagedReturn = n * 3000; // $3,000 Jar of Roka price
    const netRawProfit = estimatedRawReturn - totalInvestment;
    const netPackagedProfit = estimatedPackagedReturn - totalInvestment;

    return {
      probAtLeastOne: probAtLeastOne.toFixed(1),
      probAtLeastTwo: probAtLeastTwo.toFixed(1),
      expectedMutations: expectedMutations.toFixed(2),
      cycleMinutes: cycleMinutes.toFixed(1),
      totalHours: (totalMinutes / 60).toFixed(1),
      batches,
      totalInvestment,
      estimatedRawReturn,
      estimatedPackagedReturn,
      netRawProfit,
      netPackagedProfit
    };
  }, [seedCount, plotCount, plotType, useFertilizer]);

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
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Verified Studio Umbra Mechanics
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-2 flex items-center gap-2">
            <Sprout className="w-6 h-6 text-emerald-700" />
            Cultivation &amp; Equivalent Exchange Calculator
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Calculate agricultural 3% mutation odds, harvest timelines, supply costs, and 33 verified mutation strains.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'calculator' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            Odds Calculator
          </button>
          <button
            onClick={() => setActiveTab('directory')}
            className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'directory' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            33 Mutations
          </button>
          <button
            onClick={() => setActiveTab('recipes')}
            className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'recipes' ? 'bg-white text-emerald-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Package className="w-3.5 h-3.5 text-blue-700" />
            Processing Recipes
          </button>
        </div>
      </div>

      {/* TAB 1: ODDS & CULTIVATION CALCULATOR */}
      {activeTab === 'calculator' && (
        <div className="space-y-8">
          {/* Input Controls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
            {/* Seeds to Plant */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Rokaka Seeds: <span className="text-emerald-700 font-mono font-black">{seedCount}</span>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={seedCount}
                onChange={(e) => setSeedCount(parseInt(e.target.value) || 1)}
                className="w-full accent-emerald-700 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-0.5">
                <span>1</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>

            {/* Active Garden Pots */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Available Pots: <span className="text-emerald-700 font-mono font-black">{plotCount}</span>
              </label>
              <input
                type="range"
                min="1"
                max="12"
                value={plotCount}
                onChange={(e) => setPlotCount(parseInt(e.target.value) || 1)}
                className="w-full accent-emerald-700 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-0.5">
                <span>1 pot</span>
                <span>6 pots</span>
                <span>12 pots</span>
              </div>
            </div>

            {/* Plot Environment */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Plot Facility</label>
              <select
                value={plotType}
                onChange={(e) => setPlotType(e.target.value as 'standard' | 'greenhouse')}
                className="w-full text-xs font-semibold px-3 py-2 rounded-lg bg-white border border-slate-300 focus:outline-emerald-500"
              >
                <option value="greenhouse">Gang Greenhouse (3x Speed)</option>
                <option value="standard">Standard Outdoor Plot (1x)</option>
              </select>
            </div>

            {/* Soil Booster */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Mysterious Fertilizer</label>
              <button
                type="button"
                onClick={() => setUseFertilizer(!useFertilizer)}
                className={`w-full text-xs font-bold px-3 py-2 rounded-lg border transition-all text-left flex items-center justify-between ${
                  useFertilizer
                    ? 'bg-emerald-100 border-emerald-300 text-emerald-950'
                    : 'bg-white border-slate-300 text-slate-600'
                }`}
              >
                <span>{useFertilizer ? 'Applied (-25% Time)' : 'None (Base Time)'}</span>
                <span className={`w-2.5 h-2.5 rounded-full ${useFertilizer ? 'bg-emerald-600' : 'bg-slate-300'}`} />
              </button>
            </div>
          </div>

          {/* Probability & Timing Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">
                P(≥ 1 Mutation)
              </span>
              <div className="text-3xl font-black font-mono text-emerald-950 mt-1">
                {calcResults.probAtLeastOne}%
              </div>
              <span className="text-[11px] text-emerald-700 mt-1 block">
                Bernoulli chance from {seedCount} seeds
              </span>
            </div>

            <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
              <span className="text-[11px] font-black uppercase tracking-wider text-purple-800">
                Expected Mutations
              </span>
              <div className="text-3xl font-black font-mono text-purple-950 mt-1">
                {calcResults.expectedMutations}
              </div>
              <span className="text-[11px] text-purple-700 mt-1 block">
                Mean yield (3% base probability)
              </span>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-800">
                Cycle Growth Time
              </span>
              <div className="text-3xl font-black font-mono text-blue-950 mt-1">
                {calcResults.cycleMinutes}m
              </div>
              <span className="text-[11px] text-blue-700 mt-1 block">
                Per batch in {plotType === 'greenhouse' ? '3x Greenhouse' : 'Solo Plot'}
              </span>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-800">
                Total Farming Time
              </span>
              <div className="text-3xl font-black font-mono text-amber-950 mt-1">
                {calcResults.totalHours} hrs
              </div>
              <span className="text-[11px] text-amber-700 mt-1 block">
                Across {calcResults.batches} batch cycles
              </span>
            </div>
          </div>

          {/* Financial Breakdown Table */}
          <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-emerald-700" />
              Economic Balance &amp; Profit Projections
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[11px] uppercase">Supplies Investment</span>
                <span className="text-base font-bold text-red-600 font-mono">
                  -${calcResults.totalInvestment.toLocaleString()} Dalas
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Seeds, Dirt Bags, Ice Water</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[11px] uppercase">Net Profit (Raw Sales)</span>
                <span className="text-base font-bold text-emerald-700 font-mono">
                  +${calcResults.netRawProfit.toLocaleString()} Dalas
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">$1,200 base price per fruit</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[11px] uppercase">Net Profit (Packaged Jars)</span>
                <span className="text-base font-bold text-purple-700 font-mono">
                  +${calcResults.netPackagedProfit.toLocaleString()} Dalas
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">$3,000 / Jar at Export Merchant</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 33 VERIFIED MUTATIONS DIRECTORY */}
      {activeTab === 'directory' && (
        <div className="space-y-6">
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by mutation name, effect, or stone penalty..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold placeholder:text-slate-400 focus:outline-emerald-500 focus:bg-white"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterType === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All ({rokaMutations.length})
              </button>
              <button
                onClick={() => setFilterType('stand-reset')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterType === 'stand-reset' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Stand Resets
              </button>
              <button
                onClick={() => setFilterType('sub-reset')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterType === 'sub-reset' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Sub-Ability Resets
              </button>
              <button
                onClick={() => setFilterType('buff')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  filterType === 'buff' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Combat Buffs
              </button>
            </div>
          </div>

          {/* Mutations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMutations.map((m) => (
              <div
                key={m.slug}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-xs transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-sm text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-700" />
                    {m.name}
                  </h3>
                  <div className="flex gap-1.5 text-[10px] font-bold">
                    {m.removesStand && (
                      <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800">Stand Reset</span>
                    )}
                    {m.removesSubAbility && (
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Sub Reset</span>
                    )}
                    {!m.removesStand && !m.removesSubAbility && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Special</span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{m.effect}</p>

                <div className="pt-2 border-t border-slate-100 text-[11px] space-y-1">
                  <div className="text-amber-800 flex items-start gap-1 font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>Petrification: {m.stoneLimbPenalty}</span>
                  </div>
                  {m.specialNotes && (
                    <div className="text-slate-500 flex items-start gap-1">
                      <Zap className="w-3.5 h-3.5 shrink-0 mt-0.5 text-purple-600" />
                      <span>{m.specialNotes}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: VERIFIED PROCESSING RECIPES */}
      {activeTab === 'recipes' && (
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 text-xs">
            <p className="font-bold">Verified Studio Umbra Agricultural Blueprints</p>
            <p className="mt-1">
              Raw harvested crops can be processed at the Packaging Station in the Harbor or the Advanced Crafting Bench to significantly increase resale values and craft vital gardening supplies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROCESSING_RECIPES.map((recipe) => (
              <div
                key={recipe.name}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-sm text-slate-900 flex items-center gap-2">
                    <Package className="w-4 h-4 text-blue-700" />
                    {recipe.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full font-bold text-[10px] bg-slate-100 text-slate-700">
                    {recipe.category}
                  </span>
                </div>

                <div className="text-xs text-slate-600">
                  <span className="font-bold text-slate-800 block mb-1">Required Ingredients:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-500 font-mono text-[11px]">
                    {recipe.ingredients.map((ing) => (
                      <li key={ing}>{ing}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase block">Export Value</span>
                    <span className="font-bold text-emerald-700">${recipe.baseSale} Dalas</span>
                    <span className="text-emerald-600 text-[10px] ml-1.5 font-bold">({recipe.markup})</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-[10px] uppercase block">Processing Time</span>
                    <span className="font-bold text-slate-700">{recipe.productionTime}</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  {recipe.utility}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

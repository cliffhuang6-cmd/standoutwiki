import React, { useState, useEffect, useMemo } from 'react';
import { Shield, Zap, Heart, RotateCcw, Save, Share2, Check, Award, Sparkles } from 'lucide-react';
import { stands } from '../data/stands';
import { accessories } from '../data/accessories';

const MAX_LEVEL = 50;
const MAX_STAT_POINTS = MAX_LEVEL * 3; // 150 points

const SUB_ABILITIES = [
  { id: 'none', name: 'None (Pure Stand)', desc: 'Standard Stand combat without sub-ability moveset' },
  { id: 'hamon-jonathan', name: 'Hamon: Jonathan Path', desc: 'Direct heavy physical overdrive, Sunlight Yellow Overdrive, healing breath' },
  { id: 'hamon-caesar', name: 'Hamon: Caesar Path', desc: 'Bubble Launcher, Bubble Cutter, and Bubble Barrier projectile control' },
  { id: 'hamon-zeppeli', name: 'Hamon: Zeppeli Path', desc: 'Zoom Punch, Life Magnetism Overdrive, and Torquoise Blue Overdrive' },
  { id: 'vampire', name: 'Vampire (Stone Mask)', desc: 'High night regeneration, Space Ripper Stingy Eyes, contact freeze' }
];

export default function BuildMaker() {
  const [selectedStandSlug, setSelectedStandSlug] = useState('star-platinum');
  const [selectedSubAbility, setSelectedSubAbility] = useState('hamon-jonathan');
  const [healthPoints, setHealthPoints] = useState(50);
  const [damagePoints, setDamagePoints] = useState(55);
  const [abilityPoints, setAbilityPoints] = useState(45);
  const [selectedJacket, setSelectedJacket] = useState('jotaros-jacket');
  const [selectedPants, setSelectedPants] = useState('jotaros-pants');
  const [copiedLink, setCopiedLink] = useState(false);
  const [savedLocally, setSavedLocally] = useState(false);

  // Initialize from URL search params if present
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const stand = params.get('stand');
    const h = parseInt(params.get('h') || '');
    const d = parseInt(params.get('d') || '');
    const a = parseInt(params.get('a') || '');
    const sub = params.get('sub');

    if (stand && stands.some((s) => s.slug === stand)) setSelectedStandSlug(stand);
    if (!isNaN(h)) setHealthPoints(Math.max(0, Math.min(150, h)));
    if (!isNaN(d)) setDamagePoints(Math.max(0, Math.min(150, d)));
    if (!isNaN(a)) setAbilityPoints(Math.max(0, Math.min(150, a)));
    if (sub && SUB_ABILITIES.some((s) => s.id === sub)) setSelectedSubAbility(sub);
  }, []);

  const totalUsedPoints = healthPoints + damagePoints + abilityPoints;
  const remainingPoints = MAX_STAT_POINTS - totalUsedPoints;

  const currentStand = useMemo(() => {
    return stands.find((s) => s.slug === selectedStandSlug) || stands[0];
  }, [selectedStandSlug]);

  // Gear bonus calculations
  const jacketItem = useMemo(() => accessories.find((a) => a.slug === selectedJacket), [selectedJacket]);
  const pantsItem = useMemo(() => accessories.find((a) => a.slug === selectedPants), [selectedPants]);

  const activeSetBonus = useMemo(() => {
    if (!jacketItem || !pantsItem) return null;
    if (jacketItem.slug === 'dios-jacket' && pantsItem.slug === 'dios-pants') {
      return { name: "DIO's World Set", bonusAbility: 20, desc: '+20 Bonus Ability (Extends Time-Stop duration to maximum)' };
    }
    if (jacketItem.slug === 'jotaros-jacket' && pantsItem.slug === 'jotaros-pants') {
      return { name: 'Stardust Crusader Set', bonusAbility: 15, bonusDamagePct: 10, desc: '+15 Bonus Ability & +10% Physical/Stand Damage' };
    }
    if (jacketItem.slug === 'enricos-jacket' && pantsItem.slug === 'enricos-pants') {
      return { name: 'Gravity & Speed Set', bonusWalkspeedPct: 15, desc: '+15% Base Walkspeed' };
    }
    if (jacketItem.slug === 'swat-jacket' && pantsItem.slug === 'swat-pants') {
      return { name: 'Tactical Armor Set', bonusResistPct: 5, desc: '+5% Damage Resistance' };
    }
    if (jacketItem.slug === 'darbys-jacket' && pantsItem.slug === 'darbys-pants') {
      return { name: 'Casino High-Roller Set', bonusMoneyPct: 10, desc: '+10% Bonus Dalas Earned' };
    }
    return null;
  }, [jacketItem, pantsItem]);

  // Total stat aggregations
  const finalHealth = healthPoints + (jacketItem?.bonuses.health || 0) + (pantsItem?.bonuses.health || 0);
  const finalDamage = damagePoints + (jacketItem?.bonuses.damage || 0) + (pantsItem?.bonuses.damage || 0);
  const finalAbility = abilityPoints + (jacketItem?.bonuses.ability || 0) + (pantsItem?.bonuses.ability || 0) + (activeSetBonus?.bonusAbility || 0);

  const handlePointChange = (setter: (n: number) => void, current: number, delta: number) => {
    const target = current + delta;
    if (target < 0) return;
    if (delta > 0 && remainingPoints <= 0) return;
    setter(target);
  };

  const resetBuild = () => {
    setHealthPoints(50);
    setDamagePoints(50);
    setAbilityPoints(50);
  };

  const copyShareLink = () => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('stand', selectedStandSlug);
    url.searchParams.set('h', healthPoints.toString());
    url.searchParams.set('d', damagePoints.toString());
    url.searchParams.set('a', abilityPoints.toString());
    url.searchParams.set('sub', selectedSubAbility);
    navigator.clipboard.writeText(url.toString());
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const saveToLocal = () => {
    if (typeof window === 'undefined') return;
    const buildData = {
      stand: selectedStandSlug,
      health: healthPoints,
      damage: damagePoints,
      ability: abilityPoints,
      subAbility: selectedSubAbility,
      jacket: selectedJacket,
      pants: selectedPants
    };
    localStorage.setItem('standout_custom_build', JSON.stringify(buildData));
    setSavedLocally(true);
    setTimeout(() => setSavedLocally(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden" id="build-maker">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 px-6 py-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <Sparkles className="w-4 h-4" />
            Interactive Stat Simulator
          </div>
          <h3 className="text-xl font-black tracking-tight mt-0.5">Stand Out Character Build &amp; Stats Maker</h3>
          <p className="text-xs text-emerald-200">Max Level 50 Cap • 150 Available Stat Points • Set Bonus Calculations</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetBuild}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
          <button
            onClick={saveToLocal}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 transition-colors"
          >
            <Save className="w-3.5 h-3.5" />
            {savedLocally ? 'Saved!' : 'Save'}
          </button>
          <button
            onClick={copyShareLink}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-colors"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
            {copiedLink ? 'Link Copied' : 'Share URL'}
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Step 1: Select Stand & Sub-Ability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              1. Select Stand ({stands.length} Verified Stands)
            </label>
            <select
              value={selectedStandSlug}
              onChange={(e) => setSelectedStandSlug(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-bold text-slate-900 focus:outline-emerald-600"
            >
              {stands.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name} ({s.rarity} - {s.combatRole})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              2. Select Sub-Ability (Fighting Style)
            </label>
            <select
              value={selectedSubAbility}
              onChange={(e) => setSelectedSubAbility(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-bold text-slate-900 focus:outline-emerald-600"
            >
              {SUB_ABILITIES.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Step 2: Stat Allocation Sliders */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-700">
              Stat Point Allocation
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Remaining Points:</span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-black ${
                remainingPoints === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {remainingPoints} / {MAX_STAT_POINTS}
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {/* Health */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="flex items-center gap-1.5 text-rose-700">
                  <Heart className="w-4 h-4" /> Health (HP &amp; Damage Buffer)
                </span>
                <span className="font-mono text-sm font-black text-slate-900">{healthPoints} pts</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handlePointChange(setHealthPoints, healthPoints, -5)}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 font-bold text-slate-700 flex items-center justify-center shrink-0"
                >
                  -5
                </button>
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={healthPoints}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    const diff = val - healthPoints;
                    if (diff <= remainingPoints) setHealthPoints(val);
                  }}
                  className="w-full accent-rose-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <button
                  type="button"
                  onClick={() => handlePointChange(setHealthPoints, healthPoints, 5)}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 font-bold text-slate-700 flex items-center justify-center shrink-0"
                >
                  +5
                </button>
              </div>
            </div>

            {/* Damage */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="flex items-center gap-1.5 text-amber-700">
                  <Zap className="w-4 h-4" /> Damage (Light &amp; Heavy Strike Scaling)
                </span>
                <span className="font-mono text-sm font-black text-slate-900">{damagePoints} pts</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handlePointChange(setDamagePoints, damagePoints, -5)}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 font-bold text-slate-700 flex items-center justify-center shrink-0"
                >
                  -5
                </button>
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={damagePoints}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    const diff = val - damagePoints;
                    if (diff <= remainingPoints) setDamagePoints(val);
                  }}
                  className="w-full accent-amber-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <button
                  type="button"
                  onClick={() => handlePointChange(setDamagePoints, damagePoints, 5)}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 font-bold text-slate-700 flex items-center justify-center shrink-0"
                >
                  +5
                </button>
              </div>
            </div>

            {/* Ability */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="flex items-center gap-1.5 text-teal-700">
                  <Shield className="w-4 h-4" /> Ability (Time-Stop Duration, Traps &amp; Specials)
                </span>
                <span className="font-mono text-sm font-black text-slate-900">{abilityPoints} pts</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handlePointChange(setAbilityPoints, abilityPoints, -5)}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 font-bold text-slate-700 flex items-center justify-center shrink-0"
                >
                  -5
                </button>
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={abilityPoints}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    const diff = val - abilityPoints;
                    if (diff <= remainingPoints) setAbilityPoints(val);
                  }}
                  className="w-full accent-teal-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <button
                  type="button"
                  onClick={() => handlePointChange(setAbilityPoints, abilityPoints, 5)}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 font-bold text-slate-700 flex items-center justify-center shrink-0"
                >
                  +5
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Equipment & Set Bonus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              3. Torso Gear (Jacket / Vest)
            </label>
            <select
              value={selectedJacket}
              onChange={(e) => setSelectedJacket(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-bold text-slate-900 focus:outline-emerald-600"
            >
              <option value="jotaros-jacket">Jotaro's Jacket (+15 Dmg, +5 Abil, +5 HP)</option>
              <option value="dios-jacket">DIO's Jacket (+15 Abil, +10 Dmg, +5 HP)</option>
              <option value="enricos-jacket">Enrico's Jacket (+10 Dmg, +6 Abil, +7 HP)</option>
              <option value="swat-jacket">SWAT Heavy Vest (+2 Dmg, +5 HP)</option>
              <option value="darbys-jacket">D'Arby's Jacket (+3 Abil, +2 Dmg, +3 HP)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              4. Legs Gear (Pants)
            </label>
            <select
              value={selectedPants}
              onChange={(e) => setSelectedPants(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-bold text-slate-900 focus:outline-emerald-600"
            >
              <option value="jotaros-pants">Jotaro's Pants (+15 Dmg, +5 Abil, +5 HP)</option>
              <option value="dios-pants">DIO's Pants (+15 Abil, +5 Dmg, +5 HP)</option>
              <option value="enricos-pants">Enrico's Pants (+10 Dmg, +6 Abil, +6 HP)</option>
              <option value="swat-pants">SWAT Combat Pants (+2 Dmg, +5 HP)</option>
              <option value="darbys-pants">D'Arby's Pants (+2 Abil, +1 Dmg, +3 HP)</option>
            </select>
          </div>
        </div>

        {/* Active Set Bonus Callout */}
        {activeSetBonus && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <Award className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <div className="text-xs font-black uppercase text-amber-900">
                Active Set Synergy: {activeSetBonus.name}
              </div>
              <div className="text-xs text-amber-800 font-semibold mt-0.5">
                {activeSetBonus.desc}
              </div>
            </div>
          </div>
        )}

        {/* Final Build Summary Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Calculated Build Outcome
              </span>
              <h4 className="text-2xl font-black mt-1">
                {currentStand.name} • {SUB_ABILITIES.find((s) => s.id === selectedSubAbility)?.name.split(':')[0]}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Combat Classification: <span className="text-white font-bold">{currentStand.combatRole}</span> • JoJo Part: {currentStand.jojoPart}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center px-4 py-2 bg-slate-800 rounded-xl border border-slate-700">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">Total HP</div>
                <div className="text-2xl font-black font-mono text-rose-400">{finalHealth}</div>
              </div>
              <div className="text-center px-4 py-2 bg-slate-800 rounded-xl border border-slate-700">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">Total Damage</div>
                <div className="text-2xl font-black font-mono text-amber-400">{finalDamage}</div>
              </div>
              <div className="text-center px-4 py-2 bg-slate-800 rounded-xl border border-slate-700">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">Total Ability</div>
                <div className="text-2xl font-black font-mono text-teal-400">{finalAbility}</div>
              </div>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
            <div>
              <span className="font-bold text-white block mb-1">Stand Combat Scaling:</span>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                {currentStand.abilityScaling?.map((scale, i) => (
                  <li key={i}>{scale}</li>
                )) || <li>Scales signature move cooldown and duration with Ability stat.</li>}
              </ul>
            </div>
            <div>
              <span className="font-bold text-white block mb-1">Playstyle Advisory:</span>
              <p className="text-slate-400 leading-relaxed">
                {currentStand.recommendedBuild.synergyNotes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

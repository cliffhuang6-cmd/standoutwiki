import { useState, useMemo } from 'react';
import { Keyboard, Gamepad2, Smartphone, Search } from 'lucide-react';
import ImageModal from './ImageModal';

type PlatformTab = 'pc' | 'controller' | 'mobile';

interface KeyRow {
  input: string;
  action: string;
  details: string;
  category: 'Core' | 'Combat' | 'Stand' | 'UI';
}

const PC_KEYS: KeyRow[] = [
  { input: 'Left Alt', action: 'Shift Lock / Camera Lock', details: 'Locks your crosshair behind your avatar for ranged aim (NOT Left Shift)', category: 'Core' },
  { input: 'Left Shift / W+W', action: 'Sprint / Run', details: 'Standard movement sprint; holding Left Shift does not trigger Shiftlock', category: 'Core' },
  { input: 'WASD + Space', action: 'Move & Jump / Ledge Climb', details: 'Press Space again near any roof ledge to climb up; double-tap for Stand Jump', category: 'Core' },
  { input: 'E', action: 'Summon / Dismiss Stand', details: 'Equips or recalls your Stand; Hold E splits Highway Star into Foot Form', category: 'Stand' },
  { input: 'LMB (Left Click)', action: 'Light Attack (M1 Combo)', details: '4-hit combo chain (0.7s recovery on hit, 0.85s on miss or block)', category: 'Combat' },
  { input: 'R / RMB (Right Click)', action: 'Heavy Attack / Guardbreak', details: 'Breaks standard guard; Right Click Heavy can be unbound/rebound in Menu Settings', category: 'Combat' },
  { input: 'F', action: 'Block / Perfect Block (Parry)', details: 'Hold to block posture (35–50 HP); tap within 0.12s of hit to Parry (+0.2s attacker lag)', category: 'Combat' },
  { input: 'Q', action: 'Dash / Evasive Roll', details: 'Quick directional dodge with brief startup i-frames (1.2s standardized cooldown)', category: 'Combat' },
  { input: 'X', action: 'Universal Evasive', details: 'Breaks hitstun or ragdoll (or cast standing) — costs 1 EX Bar, deals 10 DMG, 45s CD (30s Ranked)', category: 'Combat' },
  { input: 'T (Hold) + Move', action: 'Awakening / EX Skills', details: 'Hold T and press skill keys (1–5 EX Bars consumed depending on Stand move)', category: 'Stand' },
  { input: 'Left Ctrl', action: 'Pilot Mode Toggle', details: 'Remotely control piloted Stands up to range; toggles climb/flex on The Hustle', category: 'Stand' },
  { input: 'P', action: 'Pose (Charge EX Meter)', details: 'Poses to fill Awakening/EX Bar at 1%/s (requires combat tag in Gang Wars)', category: 'Stand' },
  { input: 'C', action: 'Crouch / Camera Stealth', details: 'Crouch to reveal security camera vision cones and avoid CCTV detection', category: 'Core' },
  { input: 'H', action: 'Interact / Pick Up / Drop Object', details: 'Pick up throwables (cars, signs, gas cans), talk to NPCs, enter vehicles, or detach Hustle plate', category: 'Core' },
  { input: '1–4 / Y, G, V, B', action: 'Stand & Sub-Ability Skills', details: 'Executes assigned Stand active moves and Hamon/Vampire skills (customizable in M Menu)', category: 'Stand' },
  { input: 'Z', action: 'Equip / Open Smartphone', details: 'Opens Gifts (Codes), Huber Fast Travel ($50), Map, Gangs, Quests & Bounties (press Z again to close)', category: 'UI' },
  { input: 'Tab / `', action: 'Open Inventory / Backpack', details: 'Opens full item satchel, arrows, Rokakakas, cosmetics vanity slots, and gear', category: 'UI' },
  { input: 'M / L', action: 'Settings Menu / Emote Wheel', details: 'M opens Menu & Keybind Remapper; L opens the upgraded Emote Wheel', category: 'UI' },
];

const CONTROLLER_KEYS: KeyRow[] = [
  { input: 'RT / R2', action: 'Light Attack / Tap R2: Pose', details: 'Primary M1 combo; per Oct 18 patch, tap R2 briefly to Pose and charge EX', category: 'Combat' },
  { input: 'RB / R1', action: 'Heavy Attack Finisher', details: 'Guardbreak strike against blocking opponents; pairs with combo finishers', category: 'Combat' },
  { input: 'LT / L2', action: 'Block / Perfect Block', details: 'Hold to guard; tap within 0.12s before an incoming guardbreak to trigger Parry', category: 'Combat' },
  { input: 'LB / L1', action: 'Dash', details: '1.2-second standardized directional dash with startup i-frames', category: 'Combat' },
  { input: 'D-Pad Left', action: 'Universal Evasive / Cards', details: 'Nov 24 update: D-Pad Left uses Universal Evasive (1 EX); Hold RT/R2 + D-Pad Left toggles cards', category: 'Combat' },
  { input: 'D-Pad Right', action: 'Use / Cycle Toolbar Item', details: 'Tap to equip/use selected item (Arrows, Rokas, Phone); hold & release to cycle slots', category: 'UI' },
  { input: 'Y, B, X / △, ○, □', action: 'Stand Skills & EX Moves', details: 'Executes active Stand abilities, sub-abilities, and Karaoke / QTE prompts', category: 'Stand' },
  { input: 'A / ✕ (Cross)', action: 'Jump / Ledge Climb', details: 'Jump and press again at roof ledges to vault up', category: 'Core' },
  { input: 'R3 (Right Stick Click)', action: 'Lock-On / Camera Target', details: 'Toggles target aim-lock onto nearby enemies for accurate ranged tracking', category: 'Combat' },
  { input: 'Touchpad / View Button', action: 'Open Menu / Inventory Cursor', details: 'Enables virtual UI cursor to open Menu, Phone, Inventory, Stand Storage, and Gang Builder', category: 'UI' },
  { input: 'Settings (M / UI)', action: 'Rebind KBM Binds on Console', details: 'Nov 22 update allows console players using keyboard & mouse to edit binds in Menu', category: 'UI' },
];

const MOBILE_CONTROLS: KeyRow[] = [
  { input: 'Left Virtual Joystick', action: 'Move & Sprint', details: 'Smooth omnidirectional movement; auto-sprint option available in Settings', category: 'Core' },
  { input: 'Right Screen Swipe', action: 'Free Camera Rotation', details: 'Nov 15 fix: swipe camera smoothly even while holding or tapping Light/Heavy attacks', category: 'Core' },
  { input: 'Radial Action Pad', action: 'Light, Heavy, Summon & Skills', details: 'Resize, drag, and adjust transparency of mobile touch buttons in Settings', category: 'Combat' },
  { input: 'Block Button (Toggle)', action: 'Toggle Block / Parry', details: 'Enable "Block Input: Toggle" in Settings: 1st tap holds guard, 2nd tap releases', category: 'Combat' },
  { input: 'Lock-On Target Icon', action: 'Target Aim-Lock', details: 'Locks camera facing onto opponent so projectiles and grabs track reliably', category: 'Combat' },
  { input: 'Top-Left Menu & Emote Icons', action: 'Menu, Emotes & Settings', details: 'Dedicated top-left buttons for Settings, HUD resizing, and Emote Wheel', category: 'UI' },
  { input: 'Hotbar Tap (Phone Icon)', action: 'Open Smartphone / Bag', details: 'Tap Phone slot to open Codes, Huber, Gangs, and Map; tap again to close', category: 'UI' },
];

export default function ControlsReference() {
  const [tab, setTab] = useState<PlatformTab>('pc');
  const [search, setSearch] = useState('');

  const rows = useMemo(() => {
    const base = tab === 'pc' ? PC_KEYS : tab === 'controller' ? CONTROLLER_KEYS : MOBILE_CONTROLS;
    if (!search.trim()) return base;
    const q = search.toLowerCase();
    return base.filter(
      (r) =>
        r.input.toLowerCase().includes(q) ||
        r.action.toLowerCase().includes(q) ||
        r.details.toLowerCase().includes(q)
    );
  }, [tab, search]);

  return (
    <div className="space-y-8">
      {/* Quick-Answer Hero Cards (Targets Top GSC Queries Immediately) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">Shift Lock / Camera</span>
            <kbd className="px-2 py-0.5 text-xs font-mono font-black rounded bg-slate-900 text-white">Left Alt</kbd>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <strong>Left Alt</strong> locks camera on PC (NOT Left Shift, which sprints). Controller: <strong>R3</strong>. Mobile: <strong>Target Icon</strong>.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-800">Inventory &amp; Menu</span>
            <kbd className="px-2 py-0.5 text-xs font-mono font-black rounded bg-slate-900 text-white">Tab / Z / M</kbd>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <strong>Tab / `</strong> opens Bag, <strong>Z</strong> opens Phone (Codes), <strong>M</strong> opens Menu. Console: <strong>Touchpad / View</strong> + <strong>D-Pad Right</strong>.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-black uppercase tracking-wider text-purple-800">Universal Evasive</span>
            <kbd className="px-2 py-0.5 text-xs font-mono font-black rounded bg-slate-900 text-white">X / D-Pad ◀</kbd>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Breaks hitstun/ragdoll or bursts nearby enemies for <strong>10 DMG</strong>. Costs <strong>1 EX Bar</strong> (45s open world / 30s Ranked).
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-black uppercase tracking-wider text-sky-800">EX Moves &amp; Pose</span>
            <kbd className="px-2 py-0.5 text-xs font-mono font-black rounded bg-slate-900 text-white">Hold T / P</kbd>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <strong>Hold T</strong> + attack/skill executes Awakening EX moves (1–5 bars). Press <strong>P</strong> (or tap <strong>R2</strong>) to Pose &amp; build 1% EX/s.
          </p>
        </div>
      </div>

      {/* Interactive Platform Keybind Switcher */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Platform Controls Tabs">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'pc'}
              onClick={() => setTab('pc')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                tab === 'pc'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Keyboard className="w-3.5 h-3.5" />
              PC Keybinds ({PC_KEYS.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'controller'}
              onClick={() => setTab('controller')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                tab === 'controller'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              Xbox / PlayStation Controller ({CONTROLLER_KEYS.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'mobile'}
              onClick={() => setTab('mobile')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                tab === 'mobile'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              Mobile Touch &amp; HUD ({MOBILE_CONTROLS.length})
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter keybind (e.g. shift, block, X)..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-800"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Input / Button</th>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4 hidden sm:table-cell">Category</th>
                <th className="py-3 px-4">Verified In-Game Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row) => (
                <tr key={row.input + row.action} className="hover:bg-emerald-50/40 transition-colors">
                  <td className="py-3 px-4 align-top whitespace-nowrap">
                    <kbd className="inline-block px-2 py-1 rounded-md bg-slate-900 text-white font-mono font-bold text-[11px] shadow-xs">
                      {row.input}
                    </kbd>
                  </td>
                  <td className="py-3 px-4 align-top font-bold text-slate-900">{row.action}</td>
                  <td className="py-3 px-4 align-top hidden sm:table-cell">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">
                      {row.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 align-top text-slate-600 leading-relaxed">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Combat & Control Showcase (Real Trello Screenshots) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700">In-Game Visual Reference</span>
            <h2 className="text-xl font-black text-slate-900">Keybind Menu &amp; Combat Mechanics Visuals</h2>
          </div>
          <span className="text-xs text-slate-500">Click any image to enlarge</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              src: '/images/guides/controls-menu-keybinds.webp',
              alt: 'STAND OUT keybind customization menu and default controls screen',
              title: 'Default Keybind & Rebinding Menu',
              subtitle: 'Press M to customize attacks, Stand moves, and right-click Heavy Attack'
            },
            {
              src: '/images/guides/controls-universal-evasive.webp',
              alt: 'Universal Evasive burst animation breaking hitstun in STAND OUT',
              title: 'Universal Evasive (X / D-Pad Left)',
              subtitle: 'Costs 1 EX Bar • 10 Damage • Escapes hitstun & ragdoll'
            },
            {
              src: '/images/guides/controls-perfect-block.webp',
              alt: 'Perfect Block parry timing stopping a guardbreak move in STAND OUT',
              title: 'Perfect Block / Parry (F / L2)',
              subtitle: '0.12s parry window • Inflicts +0.2s endlag on attacker'
            },
            {
              src: '/images/guides/controls-pilot-mode.webp',
              alt: 'Pilot Mode remote Stand control activated with Left Control',
              title: 'Remote Pilot Mode (Left Ctrl)',
              subtitle: 'Scout & strike remotely; taking body damage snaps camera back'
            },
            {
              src: '/images/guides/controls-posing-ex.webp',
              alt: 'Posing with P key charging EX Awakening bar in STAND OUT',
              title: 'Posing & EX Bar Charge (P / R2)',
              subtitle: 'Generates +1% Awakening meter per second while posing'
            },
            {
              src: '/images/guides/controls-crouch-stealth.webp',
              alt: 'Crouching with C key revealing security camera FOV cone in STAND OUT',
              title: 'Crouch Stealth (C Key)',
              subtitle: 'Hides from villa security cameras and reveals detection cones'
            }
          ].map((item) => (
            <div key={item.src} className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col">
              <div className="aspect-video bg-slate-900/5 overflow-hidden">
                <ImageModal
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  subtitle={item.subtitle}
                  className="w-full h-full"
                />
              </div>
              <div className="p-3">
                <h3 className="text-xs font-black text-slate-900">{item.title}</h3>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

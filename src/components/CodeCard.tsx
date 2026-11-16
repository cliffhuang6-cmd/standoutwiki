import React, { useState } from 'react';
import { Copy, Check, AlertCircle, Clock, Sparkles } from 'lucide-react';
import type { Code } from '../types';

export default function CodeCard({ code }: { code: Code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const statusConfig = {
    Active: {
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      border: 'border-slate-200 hover:border-emerald-400',
      btn: 'bg-emerald-600 hover:bg-emerald-500 text-white'
    },
    Unverified: {
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
      border: 'border-slate-200 hover:border-amber-400',
      btn: 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold'
    },
    Expired: {
      badgeBg: 'bg-slate-100 text-slate-500 border-slate-200',
      border: 'border-slate-200 opacity-60',
      btn: 'bg-slate-200 text-slate-600 hover:bg-slate-300'
    }
  }[code.status] || {
    badgeBg: 'bg-slate-100 text-slate-500 border-slate-200',
    border: 'border-slate-200',
    btn: 'bg-slate-200 text-slate-600'
  };

  return (
    <div
      className={`bg-white rounded-2xl border p-5 transition-all shadow-sm flex flex-col justify-between ${statusConfig.border}`}
      id={code.code}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`px-2.5 py-1 text-[11px] font-black uppercase tracking-wider rounded-md border ${statusConfig.badgeBg}`}>
            {code.status === 'Active' ? 'Active & Working' : code.status}
          </span>
          {code.isNewServerOnly && (
            <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
              <Clock className="w-3 h-3" /> New Servers Only
            </span>
          )}
        </div>

        {/* Code display with copy */}
        <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl mb-3 group">
          <span className="font-mono text-base md:text-lg font-black tracking-wider text-slate-900 select-all">
            {code.code}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${statusConfig.btn}`}
            aria-label={`Copy code ${code.code}`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Reward */}
        <div className="mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
            Reward:
          </span>
          <p className="text-sm font-extrabold text-emerald-950 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            {code.reward}
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
        <p className="line-clamp-2">{code.notes}</p>
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
          <span>Source: {code.evidenceSource ? 'Changelog / Release' : 'Community'}</span>
          <span>Checked: {code.lastCheckedDate || code.addedDate}</span>
        </div>
      </div>
    </div>
  );
}

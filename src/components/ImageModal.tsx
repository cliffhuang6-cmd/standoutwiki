import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ImageModal({ src, alt, title, subtitle, className = '' }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Thumbnail Trigger */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(true); }}
        className={`relative group cursor-zoom-in overflow-hidden ${className}`}
        aria-label={`Enlarge image: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none rounded-xl">
          <span className="p-1.5 rounded-lg bg-white/90 text-slate-900 shadow-md">
            <ZoomIn className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Fullscreen Magnified Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-200 overflow-hidden space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-black text-base text-slate-900">
                  {title || alt}
                </h3>
                {subtitle && (
                  <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Magnified Image Container */}
            <div className="w-full max-h-[65vh] flex items-center justify-center bg-slate-50 rounded-xl p-4 border border-slate-100">
              <img
                src={src}
                alt={alt}
                className="max-h-[60vh] max-w-full w-auto h-auto object-contain drop-shadow-md"
              />
            </div>

            {/* Modal Footer / Navigation Hint */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Click outside or press Esc to close</span>
              <span className="text-slate-500 font-medium">Stand Out Wiki</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

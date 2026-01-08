'use client';

import { translations, Language } from '@/utils/translations';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface DailyReportProps {
    seconds: number;
    date: string;
    lang: Language;
    onClose: () => void;
    onReset: () => void;
}

export const DailyReport = ({ seconds, date, lang, onClose, onReset }: DailyReportProps) => {
    const t = translations[lang];
    const [copied, setCopied] = useState(false);

    const minutes = Math.floor(seconds / 60);



    const handleCopy = () => {
        const text = `#screenfreelog`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleReset = () => {
        if (confirm(t.report.resetConfirm)) {
            onReset();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full animate-slide-up">

            {/* Header / Date */}
            <div className="absolute top-12 text-center">
                <p className="text-xs font-mono tracking-[0.2em] text-neutral-500 uppercase">
                    {new Date(date).toLocaleDateString(lang === 'JP' ? 'ja-JP' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
            </div>

            {/* Main Stats */}
            <div className="text-center space-y-2">
                <p className="text-xs md:text-sm tracking-[0.2em] text-stone-500 font-medium mb-6">{t.report.timeLabel}</p>
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-stone-300">
                    {minutes}<span className="text-2xl md:text-4xl text-stone-500 font-sans tracking-normal ml-3">min</span>
                </h1>
            </div>

            {/* Actions */}
            <div className="absolute bottom-12 flex flex-col items-center space-y-6">
                <p className="text-xs text-stone-500 tracking-wider mb-2">{t.report.sharePrompt}</p>
                <button
                    onClick={handleCopy}
                    className="flex items-center space-x-2 text-xs text-stone-400 hover:text-white transition-colors"
                >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span className="tracking-widest underline decoration-neutral-800 underline-offset-4">
                        {copied ? t.report.copied : t.report.share}
                    </span>
                </button>

                <button
                    onClick={onClose}
                    className="text-xs text-stone-500 hover:text-stone-300 tracking-widest py-2"
                >
                    {t.report.back}
                </button>

                <button
                    onClick={handleReset}
                    className="text-xs text-red-900/50 hover:text-red-700 transition-colors tracking-widest py-2"
                >
                    {t.report.reset}
                </button>
            </div>
        </div>
    );
};

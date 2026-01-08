'use client';

import { translations, Language } from '@/utils/translations';

interface TimerViewProps {
    seconds: number;
    isRunning: boolean;
    onStart: () => void;
    onStop: () => void;
    lang: Language;
}

export const TimerView = ({ seconds, isRunning, onStart, onStop, lang }: TimerViewProps) => {
    const t = translations[lang];

    const formatTime = (totalSeconds: number) => {
        // For timer view, hours can be important if long session
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        const pad = (n: number) => n.toString().padStart(2, '0');

        // If > 1 hour, show HH:MM:SS, else MM:SS?? 
        // Req 2.1 says "経過時間を表示". MM:SS is usually enough but for long detox HH is needed.
        // Let's always show HH:MM:SS or dynamic.
        if (hours > 0) {
            return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        }
        return `${pad(minutes)}:${pad(secs)}`;
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className={`text-6xl md:text-8xl font-light tracking-widest font-mono mb-12 ${isRunning ? 'animate-breathing text-white' : 'text-neutral-500'}`}>
                {formatTime(seconds)}
            </div>

            <button
                onClick={isRunning ? onStop : onStart}
                className={`px-12 py-4 text-sm tracking-[0.3em] font-light border transition-all duration-500 rounded-full
          ${isRunning
                        ? 'border-neutral-800 text-neutral-600 hover:border-red-900 hover:text-red-500' // Minimal stop
                        : 'border-white/30 text-white hover:bg-white hover:text-black'
                    }
        `}
            >
                {isRunning ? t.timer.stop : t.timer.start}
            </button>

            {isRunning && (
                <p className="mt-8 text-xs tracking-widest text-neutral-700 animate-pulse">
                    {t.timer.breathing}
                </p>
            )}
        </div>
    );
};

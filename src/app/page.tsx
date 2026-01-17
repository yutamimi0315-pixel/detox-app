'use client';

import { useState } from 'react';
import { useDetox, Session } from '@/hooks/useDetox';
import { Menu } from '@/components/Menu';
import { TimerView } from '@/components/TimerView';
import { DailyReport } from '@/components/DailyReport';
import { Language, translations } from '@/utils/translations';
import { AdBanner } from '@/components/AdBanner';

export default function Home() {
    const { status, sessionSeconds, dailySeconds, sessions, today, start, stop, openReport, closeReport, resetData } = useDetox();
    const [lang, setLang] = useState<Language>('JP');
    const t = translations[lang];

    const showControls = status !== 'running';

    // Format time helper for log
    const formatTime = (timestamp: number) => {
        const d = new Date(timestamp);
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        // Updated background color to warmer dark (Stone-950 equivalent approx #0c0a09)
        <main className="relative h-screen w-full flex flex-col overflow-hidden bg-[#0c0a09] text-stone-200 font-sans">

            {/* Navigation Layer */}
            {showControls && (
                <>
                    <Menu lang={lang} />

                    <button
                        onClick={() => setLang(l => l === 'JP' ? 'EN' : 'JP')}
                        className="fixed top-6 right-6 z-40 text-xs font-mono tracking-widest text-stone-500 hover:text-stone-200 transition-colors"
                    >
                        {lang === 'JP' ? 'EN' : 'JP'}
                    </button>
                </>
            )}

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 p-6 flex flex-col">
                {status === 'report' ? (
                    <DailyReport
                        seconds={dailySeconds}
                        date={today}
                        lang={lang}
                        onClose={closeReport}
                        onReset={resetData}
                    />
                ) : (
                    <div className="flex-1 flex flex-col items-center py-8 md:py-12">

                        {/* Timer Section - Flexible height */}
                        <div className="flex-1 flex items-center justify-center w-full min-h-0">
                            <TimerView
                                seconds={sessionSeconds}
                                isRunning={status === 'running'}
                                onStart={start}
                                onStop={stop}
                                lang={lang}
                            />
                        </div>

                        {/* Timeline / Log / Report Button - Fixed at bottom of flow */}
                        {status === 'idle' && (
                            <div className="w-full max-w-xs flex flex-col items-center space-y-6 pt-8 animate-fade-in z-20 shrink-0">

                                {/* View Report Button */}
                                <button
                                    onClick={openReport}
                                    className="px-8 py-3 border border-stone-800 rounded-full text-xs tracking-widest text-stone-400 hover:border-stone-600 hover:text-stone-200 transition-colors"
                                >
                                    {t.timer.openReport}
                                </button>

                                {/* Session List */}
                                {sessions.length > 0 && (
                                    <div className="w-full space-y-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                                        {sessions.slice().reverse().map((s, i) => (
                                            <div key={i} className="flex justify-between text-[10px] tracking-wider text-stone-600 border-b border-stone-900 pb-2">
                                                <span>{formatTime(s.timestamp)}</span>
                                                <span>{Math.floor(s.duration / 60)} MIN</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                )}
            </div>

            {/* Footer - Removed text "AD SPACE", kept empty layout as requested? 
          "余白だけあればいいのでAD SPACEという文字は消してください"
      */}
            {showControls && (
                <div className="fixed bottom-0 w-full h-[60px] bg-[#0c0a09] border-t border-stone-900 z-20 flex items-center justify-center">
                    {/* <AdBanner /> */}
                </div>
            )}
        </main>
    );
}

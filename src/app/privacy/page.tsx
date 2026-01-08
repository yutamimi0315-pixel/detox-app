'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { translations } from '@/utils/translations';

function PrivacyContent() {
    const searchParams = useSearchParams();
    const [lang, setLang] = useState<'JP' | 'EN'>('JP');

    useEffect(() => {
        const paramLang = searchParams.get('lang');
        if (paramLang === 'EN' || paramLang === 'JP') {
            setLang(paramLang);
        } else {
            const browserLang = navigator.language.startsWith('ja') ? 'JP' : 'EN';
            setLang(browserLang);
        }
    }, [searchParams]);

    const t = translations[lang];

    return (
        <div className="min-h-screen bg-[#0c0a09] text-stone-200 p-8 md:p-16 font-sans">
            <Link href="/" className="fixed top-8 right-8 text-stone-500 hover:text-white transition-colors">
                <X size={24} />
            </Link>

            <div className="max-w-2xl mx-auto py-12 animate-fade-in">
                <h1 className="text-xl font-bold tracking-wider mb-8">{t.privacy.title}</h1>
                <div className="text-sm p-0 space-y-4 text-stone-400 leading-relaxed">
                    <p>{t.privacy.intro}</p>

                    <h2 className="text-base font-bold text-stone-200 mt-8 mb-2">{t.privacy.cookies.title}</h2>
                    <p>{t.privacy.cookies.text}</p>

                    <h2 className="text-base font-bold text-stone-200 mt-8 mb-2">{t.privacy.analytics.title}</h2>
                    <p>{t.privacy.analytics.text}</p>

                    <p className="text-stone-600 text-xs mt-4">
                        {t.privacy.note}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function PrivacyPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0c0a09]"></div>}>
            <PrivacyContent />
        </Suspense>
    );
}

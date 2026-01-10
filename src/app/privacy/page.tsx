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

    // Helper to parse markdown-style links: [text](url)
    const renderTextWithLinks = (text: string) => {
        const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
        return parts.map((part, index) => {
            const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            if (match) {
                return (
                    <a
                        key={index}
                        href={match[2]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-400 hover:text-stone-200 underline decoration-stone-600 underline-offset-4 transition-colors"
                    >
                        {match[1]}
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <div className="min-h-screen bg-[#0c0a09] text-stone-200 p-8 md:p-16 font-sans">
            <Link href="/" className="fixed top-8 right-8 text-stone-500 hover:text-white transition-colors">
                <X size={24} />
            </Link>

            <div className="max-w-2xl mx-auto py-12 animate-fade-in">
                <h1 className="text-xl font-bold tracking-wider mb-2">{t.privacy.title}</h1>
                <p className="text-xs text-stone-500 mb-8">{t.privacy.enacted}</p>

                <div className="text-sm p-0 space-y-4 text-stone-400 leading-relaxed">
                    <p>{renderTextWithLinks(t.privacy.intro)}</p>

                    {t.privacy.sections.map((section, index) => (
                        <div key={index} className="mt-8">
                            <h2 className="text-base font-bold text-stone-200 mb-2">{section.title}</h2>
                            <p className="whitespace-pre-wrap">{renderTextWithLinks(section.text)}</p>
                        </div>
                    ))}
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

'use client';

import { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { translations, Language } from '@/utils/translations';

interface MenuProps {
    lang: Language;
}

export const Menu = ({ lang }: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHowTo, setShowHowTo] = useState(false);
    const t = translations[lang];

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-6 left-6 z-40 p-2 text-white/70 hover:text-white transition-opacity"
            >
                <MenuIcon size={24} />
            </button>

            {/* Full Screen Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center space-y-8 animate-fade-in">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 left-6 p-2 text-white/70 hover:text-white"
                    >
                        <X size={24} />
                    </button>

                    <nav className="flex flex-col items-center space-y-6 text-xl tracking-wider">
                        <button
                            onClick={() => setShowHowTo(true)}
                            className="hover:text-gray-400 transition-colors"
                        >
                            {t.menu.howToUse}
                        </button>

                        <Link
                            href={`/privacy?lang=${lang}`}
                            className="hover:text-gray-400 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {t.menu.privacy}
                        </Link>

                        <a
                            href="https://forms.gle/roS3VNqpyeTP1SxZA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors"
                        >
                            {t.menu.feedback}
                        </a>
                    </nav>
                </div>
            )}

            {/* How To Modal */}
            {showHowTo && (
                <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4">
                    <div className="bg-neutral-900 border border-neutral-800 p-8 max-w-md w-full rounded-lg relative">
                        <button
                            onClick={() => setShowHowTo(false)}
                            className="absolute top-4 right-4 text-neutral-500 hover:text-white"
                        >
                            <X size={20} />
                        </button>
                        <h2 className="text-xl font-bold mb-6 tracking-wide">{t.howto.title}</h2>
                        <ol className="list-decimal list-inside space-y-4 text-sm text-neutral-300 mb-6 leading-relaxed">
                            {t.howto.steps.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                        <div className="text-xs text-neutral-500 border-t border-neutral-800 pt-4">
                            {t.howto.note}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

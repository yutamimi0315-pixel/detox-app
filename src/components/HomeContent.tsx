import { Language } from '@/utils/translations';
import Link from 'next/link';

interface HomeContentProps {
    lang: Language;
}

export const HomeContent = ({ lang }: HomeContentProps) => {
    // Content in Japanese/English directly here for structure simplicity, 
    // or we could move to translations.ts. Given the volume, keeping here for now 
    // to separate "AdSense content" from "App UI labels".

    const content = {
        JP: {
            whatIsTitle: "Screen Free とは？",
            whatIsText: "Screen Free（スクリーンフリー）は、スマートフォンの使いすぎを防ぎ、デジタルデトックスをサポートする無料のウェブアプリです。勉強や仕事、睡眠の質を向上させるために、一時的にスマホから離れる時間を記録します。",
            whyTitle: "なぜデジタルデトックスが必要なのか",
            whyText: "現代人は1日に数時間もスマートフォンの画面を見ていると言われています。SNSや通知に追われる生活から少し距離を置き、自分のための時間を取り戻すことで、集中力の向上やストレスの軽減、より良い睡眠習慣につながります。",
            howTitle: "使い方は簡単",
            howText: "1. スマホを置く準備ができたら「Start」ボタンを押します。\n2. 集中したい時間、スマホを触らずに過ごします。\n3. 戻ってきたら「Stop」を押して記録を完了します。\n4. 1日の終わりにレポートで成果を確認しましょう。",
            privacy: "プライバシーポリシー",
            contact: "お問い合わせ"
        },
        EN: {
            whatIsTitle: "What is Screen Free?",
            whatIsText: "Screen Free is a free web application designed to help you prevent smartphone addiction and support digital detox. Track your screen-free time to improve focus for studying, working, or better sleep.",
            whyTitle: "Why Digital Detox?",
            whyText: "We spend hours every day glued to our screens. Stepping away from social media and notifications allows you to reclaim your time, leading to improved concentration, reduced stress, and better sleep habits.",
            howTitle: "How to Use",
            howText: "1. Tap 'Start' when you are ready to set your phone aside.\n2. Spend time away from your screen.\n3. Tap 'Stop' when you return to save your record.\n4. Check your daily report to see your achievements.",
            privacy: "Privacy Policy",
            contact: "Contact"
        }
    };

    const text = content[lang];

    return (
        <section className="w-full max-w-2xl mx-auto mt-16 px-6 pb-20 text-stone-400">
            <div className="space-y-12">
                {/* What is Screen Free */}
                <article className="space-y-4">
                    <h2 className="text-lg font-bold text-stone-300 tracking-wider border-b border-stone-800 pb-2">
                        {text.whatIsTitle}
                    </h2>
                    <p className="leading-relaxed text-sm">
                        {text.whatIsText}
                    </p>
                </article>

                {/* Why Digital Detox */}
                <article className="space-y-4">
                    <h2 className="text-lg font-bold text-stone-300 tracking-wider border-b border-stone-800 pb-2">
                        {text.whyTitle}
                    </h2>
                    <p className="leading-relaxed text-sm">
                        {text.whyText}
                    </p>
                </article>

                {/* How to Use */}
                <article className="space-y-4">
                    <h2 className="text-lg font-bold text-stone-300 tracking-wider border-b border-stone-800 pb-2">
                        {text.howTitle}
                    </h2>
                    <p className="leading-relaxed text-sm whitespace-pre-wrap">
                        {text.howText}
                    </p>
                </article>
            </div>

            {/* Footer Links */}
            <footer className="mt-20 pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-stone-600">
                <Link href={`/privacy?lang=${lang}`} className="hover:text-stone-400 transition-colors">
                    {text.privacy}
                </Link>
                <a
                    href="https://forms.gle/roS3VNqpyeTP1SxZA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-400 transition-colors"
                >
                    {text.contact}
                </a>
                <span className="text-stone-700">© 2026 Screen Free</span>
            </footer>
        </section>
    );
};

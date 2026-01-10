import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import './globals.css';

import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Screen Free',
    description: 'Digital Detox Application',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
            {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
                <Script
                    async
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
            )}
            <body className={inter.className + " bg-black text-white antialiased"}>
                {children}
            </body>
        </html>
    );
}
// Force rebuild for environment variables

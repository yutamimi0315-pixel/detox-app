import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import './globals.css';



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
            <head>
                <script
                    async
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
                    crossOrigin="anonymous"
                ></script>
            </head>
            <GoogleAnalytics gaId="G-ZSK32V9LHW" />
            {/* AdSense handled in head */}
            <body className={inter.className + " bg-black text-white antialiased"}>
                {children}
            </body>
        </html>
    );
}
// Force rebuild for environment variables

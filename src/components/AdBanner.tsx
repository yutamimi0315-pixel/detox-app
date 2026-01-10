import React, { useEffect } from 'react';

export const AdBanner = () => {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <ins className="adsbygoogle"
                style={{ display: 'inline-block', width: '320px', height: '50px' }}
                data-ad-client="ca-pub-3451037859686859"
                data-ad-slot="8127730353"></ins>
        </div>
    );
};

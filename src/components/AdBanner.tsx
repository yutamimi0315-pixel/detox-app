import React from 'react';

export const AdBanner = () => {
    return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {/* 
              ここにGoogle AdSenseなどの広告コードを配置します。
              例:
              <ins className="adsbygoogle"
                   style={{ display: 'block' }}
                   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                   data-ad-slot="XXXXXXXXXX"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
              <script>
                   (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            */}

            {/* 開発確認用のプレビュー表示（本番コードを入れる際は削除してください） */}
            <div className="text-[10px] text-stone-700 tracking-widest uppercase">
                AD SPACE
            </div>
        </div>
    );
};

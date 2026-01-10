export type Language = 'JP' | 'EN';

export const translations = {
    JP: {
        menu: {
            howToUse: '使い方',
            privacy: 'プライバシーポリシー',
            feedback: 'フィードバック',
            close: '閉じる',
        },
        timer: {
            start: 'Start',
            stop: 'Stop',
            breathing: 'デトックス中...',
            openReport: '振り返りを見る',
        },
        report: {
            dateLabel: '',
            timeLabel: 'あなたが今日デジタルデトックスをした時間',
            sharePrompt: 'よろしければ、結果をシェアしませんか？',
            share: 'Copy #screenfreelog',
            copied: 'Copied!',
            back: 'Main Menu',
            reset: 'Reset Data',
            resetConfirm: '「今日の記録」をリセットしてもよろしいですか？',
            messages: {},
            warning: '※ブラウザの履歴を消すとデータが消えます'
        },
        howto: {
            title: '使い方',
            steps: [
                'スマホから離れるタイミングで「Start」を押します。',
                '作業や休息が終わったら「Stop」を押します。',
                '1日の終わりにレポートを開くと、デジタルから解放された合計時間を確認できます。',
                '日付が変わったらレポート画面の「Reset Data」を押して、新しい1日の計測を始めましょう。'
            ],
            note: 'データはブラウザ内に保存されます。ブラウザのキャッシュ削除や履歴の消去を行うと、これまでの記録が消えてしまいますのでご注意ください。'
        },
        privacy: {
            title: 'プライバシーポリシー',
            enacted: '2026年1月10日 制定',
            intro: 'このプライバシーポリシー（以下、「本ポリシー」といいます）は「Screen Free」（以下、「当サービス」といいます）における個人情報の取り扱い方針を定めるものです。当サービスの利用者（以下、「ユーザー」といいます）は本ポリシーに同意したものとみなされます。',
            sections: [
                {
                    title: '1. 個人情報の収集と利用について',
                    text: '当サービス（アプリ）は現在、ユーザーのデトックス記録などの入力データを外部サーバーへ送信・保存することはなく、すべてお使いの端末内（ローカルストレージ）にのみ保存しています。そのため、お名前やメールアドレス等の個人情報を収集・保存することはありません。'
                },
                {
                    title: '2. Cookie（クッキー）の利用',
                    text: '当サービスでは、より良いユーザー体験を提供するため、Cookieを利用しています。Cookieとは、サイトにアクセスした際にブラウザに保存される情報ですが、特定の個人を識別できる情報は含まれません。'
                },
                {
                    title: '3. 広告の配信について',
                    text: '当サービスでは、第三者配信事業者（Google AdSenseなど）を利用して広告を掲載する予定です。これら第三者配信事業者は、Cookieを使用することで、ユーザーが当サービスや他のウェブサイトに過去にアクセスした際の情報に基づき、適切な広告を配信します。ユーザーは、[Googleの広告設定](https://www.google.com/settings/ads)でパーソナライズ広告を無効にすることができます。また、[www.aboutads.info](http://www.aboutads.info) にアクセスすれば、パーソナライズ広告に使われる第三者配信事業者の Cookie を無効にすることができます。'
                },
                {
                    title: '4. アクセス解析ツールについて',
                    text: '当サービスでは、サイトの利用状況を把握するためにGoogleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。[Googleアナリティクスの規約](https://marketingplatform.google.com/about/analytics/terms/jp/)や[Googleのポリシーと規約](https://policies.google.com/technologies/partner-sites?hl=ja)もご覧ください。'
                },
                {
                    title: '5. 免責事項',
                    text: '当サービスのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、必ずしもその正確性や安全性を保証するものではありません。当サービスに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。また、当サービスからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。'
                },
                {
                    title: '6. お問い合わせ',
                    text: '本ポリシーに関するお問い合わせは、[こちらのフォーム](https://forms.gle/NhHpkCN3mp1rdCWWA)よりお願いいたします。'
                },
                {
                    title: '7. プライバシーポリシーの変更',
                    text: '当サービスは、本ポリシーの内容を適宜見直し、その改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。'
                }
            ]
        }
    },
    EN: {
        menu: {
            howToUse: 'How to Use',
            privacy: 'Privacy Policy',
            feedback: 'Feedback',
            close: 'Close',
        },
        timer: {
            start: 'Start',
            stop: 'Stop',
            breathing: 'Detoxing...',
            openReport: 'Daily Report',
        },
        report: {
            dateLabel: '',
            timeLabel: 'Your Total Digital Detox Time Today',
            sharePrompt: 'Feel free to share your result.',
            share: 'Copy #screenfreelog',
            copied: 'Copied!',
            back: 'Main Menu',
            reset: 'Reset Data',
            resetConfirm: 'Are you sure you want to reset today\'s data?',
            messages: {},
            warning: '* Clearing browser history will delete data.'
        },
        howto: {
            title: 'How to Use',
            steps: [
                'Tap "Start" when you set your phone aside.',
                'Tap "Stop" when you return.',
                'Check the Daily Report at the end of the day to see your total screen-free time.',
                'When the date changes, tap "Reset Data" in the Daily Report to start tracking for the new day.'
            ],
            note: 'Data is stored locally in your browser. Please note that clearing your browser cache or history will delete your records.'
        },
        privacy: {
            title: 'Privacy Policy',
            enacted: 'Enacted: January 10, 2026',
            intro: 'This Privacy Policy (hereinafter referred to as "this Policy") sets forth the privacy practices for "Screen Free" (hereinafter referred to as "the Service"). Users of the Service (hereinafter referred to as "Users") are deemed to have agreed to this Policy.',
            sections: [
                {
                    title: '1. Collection and Use of Personal Information',
                    text: 'The Service currently does not transmit or store user input data (such as detox records) on external servers; all data is stored locally on your device (local storage). Therefore, we do not collect or store personal information such as your name or email address.'
                },
                {
                    title: '2. Use of Cookies',
                    text: 'The Service uses Cookies to provide a better user experience. Cookies are pieces of information saved in your browser when you access a site, but they do not include information that can identify specific individuals.'
                },
                {
                    title: '3. Advertising',
                    text: 'The Service plans to use third-party advertising services (such as Google AdSense) to display advertisements. These third-party vendors use cookies to serve ads based on a user\'s prior visits to this website or other websites. Users may opt out of personalized advertising by visiting [Google\'s Ad Settings](https://www.google.com/settings/ads). Alternatively, users can opt out of a third-party vendor\'s use of cookies for personalized advertising by visiting [www.aboutads.info](http://www.aboutads.info).'
                },
                {
                    title: '4. Analytics Tools',
                    text: 'The Service uses "Google Analytics," an access analysis tool provided by Google, to understand site usage. Google Analytics uses Cookies to collect traffic data. This traffic data is collected anonymously and does not identify individuals. You can refuse this collection by disabling Cookies in your browser settings; please check your browser settings. For more information on how Google collects and processes data, please review [Google\'s policies and terms](https://policies.google.com/technologies/partner-sites).'
                },
                {
                    title: '5. Disclaimer',
                    text: 'While we strive to provide accurate information regarding the content and information of the Service, we do not necessarily guarantee its accuracy or safety. We are not responsible for any damages arising from the content posted on the Service. Also, if you are redirected to other sites via links or banners from the Service, we are not responsible for the information or services provided on those destination sites.'
                },
                {
                    title: '6. Contact',
                    text: 'For inquiries regarding this Policy, please use [this form](https://forms.gle/NhHpkCN3mp1rdCWWA).'
                },
                {
                    title: '7. Changes to Privacy Policy',
                    text: 'The Service will appropriately review and strive to improve the contents of this Policy. The latest corrected Privacy Policy will always be disclosed on this page.'
                }
            ]
        }
    }
};

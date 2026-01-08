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
            intro: 'このプライバシーポリシー（以下、「本ポリシー」といいます）は「Screen Free」（以下、「当サービス」といいます）の個人情報の取り扱い方針を定めるものです。当サービスの利用者（以下、「ユーザー」といいます）は本ポリシーに同意したものとみなされます。',
            cookies: {
                title: 'Cookie（クッキー）の利用',
                text: '当サービスでは、より良いユーザー体験を提供するため、Cookieを利用しています。Cookieとは、サイトにアクセスした際にブラウザに保存される情報ですが、お名前やメールアドレス等の個人情報は含まれません。当サービスでは、以下の目的でCookieを利用します。'
            },
            analytics: {
                title: 'アクセス解析と広告配信',
                text: '当サービスは、サイトの利用状況を把握するためにGoogleが提供する Google Analytics を利用する可能性があります。また、広告配信のために第三者配信事業者（Google AdSenseなど）のサービスを利用する場合があります。そのため、当サービスのページにおいて、これらの事業者が提供するCookieが使用されることがあります。これらのCookieによって個人が特定される情報が収集されることはありません。この機能はブラウザの設定でCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。'
            },
            note: '※ 当アプリは現在、ユーザーのデトックス記録などの入力データを外部サーバーへ送信せず、すべてお使いの端末内（ローカルストレージ）にのみ保存しています。'
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
            intro: 'This Privacy Policy (hereinafter referred to as "this Policy") sets forth the privacy practices for "Screen Free" (hereinafter referred to as "the Service"). Users of the Service (hereinafter referred to as "Users") are deemed to have agreed to this Policy.',
            cookies: {
                title: 'Use of Cookies',
                text: 'The Service uses Cookies to provide a better user experience. Cookies are pieces of information saved in your browser when you access a site, but they do not include personal information such as your name or email address. The Service uses Cookies for the following purposes:'
            },
            analytics: {
                title: 'Analytics and Advertising',
                text: 'The Service may use Google Analytics provided by Google to understand site usage. We may also use services from third-party advertising distributors (such as Google AdSense) for ad delivery. Therefore, Cookies provided by these providers may be used on pages of the Service. No information that identifies individuals is collected through these Cookies. You can refuse collection by disabling Cookies in your browser settings; please check your browser settings.'
            },
            note: 'Note: This app currently does not transmit user input data (such as detox records) to external servers; all data is stored locally on your device (localStorage).'
        }
    }
};

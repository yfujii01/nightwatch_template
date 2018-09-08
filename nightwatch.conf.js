// nightwatchの設定
// nightwatch.jsonに記載してもよいがreqireなどが使えなくなる
module.exports = {

    // テストコードフォルダ
    src_folders: ['./tests'],
    // テスト結果フォルダ
    output_folder: './reports',
    // ページオブジェクト(共通部品など)
    page_objects_path: './tests/pages',

    // seleniumのドライバ設定
    selenium: {
        start_process: true,

        // selenium-debug.logの出力先(デフォルトは直下)(フォルダ作成はできない)
        log_path: './reports',

        // SeleniumServer
        // *IEで動かす場合は2.49じゃないとだめ
        server_path: require('selenium-server-standalone-jar').path,
        // server_path: './lib/selenium-server-standalone-2.49.0.jar',

        // selenium serverのパスを記載(デフォルトは127.0.0.1:4444)
        host: '127.0.0.1',
        port: 4444,

        // WebDriverのパス
        cli_args: {
            // 利用バージョンはpackage.jsonを確認
            chrome_driver: require('chromedriver').path,
            'webdriver.ie.driver': './lib/win/IEDriverServer.exe',
            "webdriver.gecko.driver" : require('geckodriver').path,
        }
    },

    // テスト設定
    // default以外は、実行時 --env に指定することで利用可能
    // 例：$(npm bin)/nightwatch --env chrome_headless
    test_settings: {

        // 必ず読み込まれるテスト設定
        default: {
            launch_url: 'https://www.seleniumhq.org/',

            // Nightwatch.jsのログを出すか(デフォルトはtrueで出さない)
            silent: true,

            // エラー発生時にスクリーンショットを撮るかどうかの設定
            screenshots: {
                enabled: true,
                path: './reports/error_screen_shot',
                on_failure: true,
                on_error: true
            },

            // カレントページのjavascript利用可否
            javascriptEnabled: true,

            // SSL証明書を許可すべきかどうか
            acceptSslCerts: true,

            // // ブラウザ設定
            // desiredCapabilities: {
            //     browserName: 'chrome',
            //     chromeOptions: {
            //         args: [
            //             '--headless',
            //             '--disable-gpu'
            //         ]
            //     }
            // },
        },

        ie: {
            desiredCapabilities: {
                browserName: 'internet explorer',
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
            }
        },

        chrome_headless: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [
                        '--headless',
                        '--disable-gpu'
                    ]
                }
            }
        },
    }
};

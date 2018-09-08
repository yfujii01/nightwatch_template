//テストファイル名
let t_module;

//テスト名
let t_name;

//スクリーンショットパス
let ss_path;

//スクリーンショットカウント
let ss_count;

module.exports = function (browser) {
    return {
        init(currentTest) {

            //テストのファイル名取得
            t_module = currentTest.module;

            //テスト名称取得
            t_name = currentTest.name;

            //スクリーンショットのパス
            ss_path = './reports/screenshot/' + t_module + '/';

            //スクリーンショット番号
            ss_count = 1;
        },
        screenShot() {
            const ss_name = ss_path + t_name + '_' + ss_count++ + '.png';
            browser.saveScreenshot(ss_name);
            console.log(ss_name);
        },
    };
};

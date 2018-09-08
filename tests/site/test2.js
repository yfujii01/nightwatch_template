this.session = {
    // 全てのテスト開始前に実行される
    beforeEach(browser) {
        console.log('before start');
        browser.page.myUtil().init(this.client.currentTest);
    },
    // 全てのテスト終了時に実行される
    afterEach(browser, done) {
        console.log('after start');
        browser.end(function () {
            done();
        });
    },
    test1(browser) {
        browser.url(browser.launchUrl);
        browser.page.myUtil().screenShot();

        // ページタイトルの検証
        browser.assert.title("Selenium - Web Browser Automation");

        // DOM要素指定のテキスト検証
        browser.assert.containsText("#mainContent > h2:nth-child(1)", "What is Selenium?");

        browser.page.myUtil().screenShot();
    },
    test2(browser) {
        browser.url(browser.launchUrl);
        browser.page.myUtil().screenShot();

        // ページタイトルの検証
        browser.assert.title("Selenium - Web Browser Automation");

        // DOM要素指定のテキスト検証
        browser.assert.containsText("#mainContent > h2:nth-child(1)", "What is Selenium?");

        browser.page.myUtil().screenShot();
    },
    test3(browser) {
        browser.url(browser.launchUrl);
        browser.page.myUtil().screenShot();

        // ページタイトルの検証
        browser.assert.title("Selenium - Web Browser Automation");

        // DOM要素指定のテキスト検証
        browser.assert.containsText("#mainContent > h2:nth-child(1)", "What is Selenium?");

        browser.page.myUtil().screenShot();
    },
};

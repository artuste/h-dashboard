describe('App/basic E2E Tests', function() {
    var baseUrl = 'http://localhost:1338';

    it('should have a title', function() {
        browser.get(baseUrl);
        expect(browser.getTitle()).toEqual('Bajsapp');
    });

    describe('home', function() {
        beforeEach(function() {
            browser.get('index.html#/users');
        });

        it('should render users when user navigates to /users', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/users");
        });
    });

    describe('forms', function() {
        beforeEach(function() {
            browser.get('index.html#/forms');
        });

        it('should render forms when user navigates to /forms', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/forms");
        });
    });
});
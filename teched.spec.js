require('./pages/home');
require('./pages/product');

describe("teched", function () {

	it("should validate the home screen", function () {
        // Assertions
		Then.onTheHomePage.theCategoryListShouldBeLoaded();
	});

	it("should search for a product", function () {
		// Actions
		When.onTheHomePage.iSearchForProduct();

        // Assertions
		Then.onTheHomePage.theProductListShouldBeFiltered();
	});

	it("should navigate to the product", function () {
		// Actions
		When.onTheHomePage.iSelectTheFirstProduct();

        // Assertions
		Then.onTheProductPage.theProductShouldBeLoaded();
	});
});

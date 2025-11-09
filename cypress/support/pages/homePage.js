class HomePage {

	static ABOUT_US = "//a[normalize-space()='About us']";
	static CAREER_PAGE = "//a[normalize-space()='Careers']";
	// static WHERE_WE_WORK = "#OurTeamWhereWeWork";
	// static NEW_YORK_CITY = "img[title='Careers 10']";
	// static SIOUX_FALLS = "img[title='Careers 11']";
	// static KUALA_LUMPUR = "img[title='Careers 12']";
	// static AROUND_THE_GLOBE = "img[title='Careers 13']";



	static clickHover(selector) {
		return cy.xpath(selector).trigger('mouseover');
	};

	static clickLink(selector) {
		return cy.xpath(selector).click();
	};

	static verifyLink(address){
		return cy.url().should('include', `/${address}`);
	};

	verifyLocationBlocks(expectedLocations) {
		expectedLocations.forEach(location => {
		  cy.contains(location).should('be.visible');
		});
	 }



	 
}

export default HomePage;
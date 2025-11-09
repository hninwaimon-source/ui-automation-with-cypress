import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/homePage";

const homePage = new HomePage();

Given(/^I am a new customer and I visit the MoneyLion Website$/, () => {
	cy.visit(Cypress.env("siteUrl"));
 });

When(/^I hover over the "About Us" and click on "Careers" at the top of the page$/, () => {
	HomePage.clickHover(HomePage.ABOUT_US);
	HomePage.clickLink(HomePage.CAREER_PAGE);
 });

Then(/^I should be redirected to the MoneyLion "(.*)" page$/, (address) => {
	HomePage.verifyLink(address);
 });

Then(/^I should see the following locations under the "Where we work" section:$/, (dataTable) => {
	const expectedLocations = dataTable.raw().flat();
	homePage.verifyLocationBlocks(expectedLocations);
 });
Feature: Accessing the 
	Scenario: Accessing the Money Lion "About Us" Page
		Given I am a new customer and I visit the MoneyLion Website
		When I hover over the "About Us" and click on "Careers" at the top of the page
		Then I should be redirected to the MoneyLion "careers" page
		And I should see the following locations under the "Where we work" section:
      | New York City     |
      | Sioux Falls       |
      | Kuala Lumpur      |
		| Around the globe      |

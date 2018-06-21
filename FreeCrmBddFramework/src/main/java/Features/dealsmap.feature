Feature: Deal data creation 

Scenario: Free CRM create a new deal scenario 

	Given user is on Login Page 
	When Title of Login Page is Free CRM 
	And User  enters uname and pwd 
		| username | password |
		| naveenk | test@123 |
	And user clicks on Login button 
	Then it navigates to Home Page 
	Then user moves to new deal page 
	Then user enters deal details 
		| title | amount | probability | commission |
		| test_deal1 | 1000 | 50 | 10 |
		| test_deal2 | 2000 | 60 | 10 |
		| test_deal3 | 3000 | 70 | 10 |
	Then Close the browser 

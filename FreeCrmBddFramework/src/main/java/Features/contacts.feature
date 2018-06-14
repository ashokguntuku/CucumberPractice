Feature: Free CRM Create Contacts	

Scenario Outline: Free CRM a new Contact scenario

Given user is on Login Page
When Title of Login Page is Free CRM
And User  enters "<uname>" and "<pwd>"
And user clicks on Login button
Then it navigates to Home Page
Then user moves to new contact page
Then user enters contact details "<firstname>", "<lastname>" and "<position>"
Then Close the browser

Examples: 
	| uname		| pwd		|firstname			| lastname	| position	|
	| naveenk	| test@123			| Tom efgh	| Peter		| Manager	|
	| naveenk	| test@123	| David		| Dsouza abcd				| Director	|
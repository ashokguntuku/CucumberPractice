Feature: Free CRM Login Feature

Scenario Outline: Free CRM Login Test Scenario

Given user is on Login Page
When Title of Login Page is Free CRM
And User  enters "<uname>" and "<pwd>"
And user clicks on Login button
Then it navigates to Home Page

Examples:
	| uname		| pwd		|
	| naveenk	| test@123	|
	| tom		| test456	|

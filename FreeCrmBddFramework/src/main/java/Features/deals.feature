Feature: Deal data creation

Scenario: Free CRM create a new deal scenario

Given user is on Login Page
When Title of Login Page is Free CRM
And User  enters uname and pwd
| naveenk | test@123 |
And user clicks on Login button
Then it navigates to Home Page
Then user moves to new deal page
Then user enters deal details 
| test_deal | 1000 | 50 | 10 |
Then Close the browser

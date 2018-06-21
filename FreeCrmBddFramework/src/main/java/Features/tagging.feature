@FunctionalTest
Feature: Free CRM Application Testing

@SmokeTest
Scenario: Login with correct username and correct password
Given This is a valid login test

@RegressionTest
Scenario: Login with incorrect username and correct password
Given This is a valid login test

@SmokeTest
Scenario: Create a contact
Given This is a contact test case

@SmokeTest @RegressionTest
Scenario: Create a deal
Given This is a deal test case

@RegressionTest
Scenario: Create a task
Given This is a task test case

@SmokeTest @RegressionTest
Scenario: Create a case
Given This is a case test case

@End2End
Scenario: Verify left panel links
Given clicking on left panel links

@SmokeTest @RegressionTest
Scenario: Search a deal
Given This is a search deal test case

@SmokeTest @End2End
Scenario: Search a task
Given This is a search task test case

@SmokeTest @End2End
Scenario: Search a call
Given This is a search call test case

@SmokeTest @End2End
Scenario: Search an email
Given This is a search email test case

@SmokeTest @End2End
Scenario: Create a deal
Given This is a deal test case

@SmokeTest @End2End
Scenario: Create a deal
Given This is a deal test case

@End2End
Scenario: Create a deal
Given This is a deal test case

@End2End
Scenario: Create a deal
Given This is a deal test case


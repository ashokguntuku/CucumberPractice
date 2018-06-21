Feature: Free CRM app test 

@First
Scenario: Free CRM create deal test
	Given user is on deal page
	When user fills the deal form
	Then deal is created

@Second
Scenario: Free CRM create task test
	Given user is on task page
	When user fills the task form
	Then task is created
@Third
Scenario Outline: Free CRM create mail test
	Given user is on mail page
	When user fills the mail form
	Then mail is created
	Examples:
		|mail1|
		|mail2|
		|mail3|
package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class hooksStepDefinition {
	
	@Before
	public void setUp()	{
		System.out.println("**************Global Before");
		System.out.println("launch Chrome");
		System.out.println("Enter URL for FreeCRM app");
	}

	@After
	public void tearDown()	{
		System.out.println("Close the Browser");
		System.out.println("Global After***************");
	}
	
	@Before("@First")
	public void Entering_First_Scenario()	{
		System.out.println("**************Entering First Scenario");
	}
	
	@After("@First")
	public void Bye_First_Scenario()	{
		System.out.println("Bye_First_Scenario");
	}
	
	@Before("@Second")
	public void Entering_Second_Scenario()	{
		System.out.println("**************Entering Second Scenario");
	}
	
	@After("@Second")
	public void Bye_Second_Scenario()	{
		System.out.println("Bye_Second_Scenario");
	}
	
	
	@Before("@Third")
	public void Entering_Third_Scenario()	{
		System.out.println("**************Entering Third Scenario");
	}
	
	@After("@Third")
	public void Bye_Third_Scenario()	{
		System.out.println("Bye_Third_Scenario");
	}
	
	@Given("^user is on deal page$")
	public void user_is_on_deal_page() {
		System.out.println("user_is_on_deal_page");
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user fills the deal form$")
	public void user_fills_the_deal_form() {
		System.out.println("user_fills_the_deal_form");
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^deal is created$")
	public void deal_is_created() {
		System.out.println("deal_is_created");
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	
	@Given("^user is on task page$")
	public void user_is_on_task_page() {
		System.out.println("user_is_on_task_page");
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user fills the task form$")
	public void user_fills_the_task_form() {
		System.out.println("user_fills_the_task_form");
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^task is created$")
	public void task_is_created() {
		System.out.println("task_is_created");
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	
	@Given("^user is on mail page$")
	public void user_is_on_mail_page() {
		System.out.println("user_is_on_mail_page");
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^user fills the mail form$")
	public void user_fills_the_mail_form() {
		System.out.println("user_fills_the_mail_form");
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^mail is created$")
	public void mail_is_created() {
		System.out.println("mail_is_created");
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	


	
}

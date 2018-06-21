package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealStepWithMapDefinition {

	WebDriver driver;

	@Given("^user is on Login Page$")
	public void user_is_on_Login_Page() {

		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/Driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com");
		driver.manage().window().maximize();

	}

	@When("^Title of Login Page is Free CRM$")
	public void title_of_Login_Page_is_Free_CRM() {

		String title = driver.getTitle();
		System.out.println("Title of Login Page : " + title);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);

	}

	// @When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	@When("^User  enters uname and pwd$")
	public void user_enters_username_and_password(DataTable credentials) {
		for(Map<String, String> data : credentials.asMaps(String.class, String.class))	{
			
		driver.findElement(By.name("username")).sendKeys(data.get("username"));
		driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
	}
	
	@When("^user clicks on Login button$")
	public void user_clicks_on_Login_button() {
	    WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
	    JavascriptExecutor js = (JavascriptExecutor) driver;
	    js.executeScript("arguments[0].click()", loginBtn);
	    
	}

	@Then("^it navigates to Home Page$")
	public void it_navigates_to_Home_Page() throws InterruptedException {
		
		String homepageTitle = driver.getTitle();
		Assert.assertEquals("CRMPRO", homepageTitle);
	    Thread.sleep(2000);
	}
	@Then("^user moves to new deal page$")
	public void user_moves_to_new_deal_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		
		
	}

	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable deal_details) throws InterruptedException {
		
		Actions action;
		for(Map<String, String> data : deal_details.asMaps(String.class, String.class))	{
			Thread.sleep(2000);
			driver.findElement(By.id("title")).sendKeys(data.get("title"));
			driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
			driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
			driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
			Thread.sleep(3000);
			//user_moves_to_new_deal_page();
			action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		}
		
	}

	@Then("^Close the browser$")
	public void close_the_browser() {
	    driver.quit();
	}
}

package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/java/Features/hooks.feature"
		,glue= {"stepDefinitions"}
		,format= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}
		,monochrome = true
		,dryRun = false
		//,tags = {"~@SmokeTest", "~@RegressionTest" , "~@End2End"}
		)
public class TestRunner {

}

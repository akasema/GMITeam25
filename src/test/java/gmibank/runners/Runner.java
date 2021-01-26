package gmibank.runners;

import io.cucumber.junit.Cucumber;

import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions( strict = true,
        plugin = {"html:target/default-cucumber-reports",
                "json:target/json-reports/cucumber.json",
                "junit:target/xml-report/cucumber.xml"},
        monochrome = true,
        features = "src/test/resources/gmibank/features",
        glue = "gmibank/stepdefinitions",
        tags = "@us05",
        dryRun = false
)
public class Runner {

}

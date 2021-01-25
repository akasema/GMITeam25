package gmibank.stepdefinitions;

import gmibank.pages.Positive_Negative_Login_Page;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.And;


public class US04PositiveLoginStepDefinitionP {

    Positive_Negative_Login_Page loginpage=new Positive_Negative_Login_Page();

    @Given("User on landing page:https://gmibank.com/")
    public void user_is_on_the_gmibanklogin_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank"));

    }

    @And("Click the person icon on top of right corner")
    public void user_clicks_login_button() {
        loginpage.personIcon.click();

    }

    @And("Click on the sign in button")
    public void user_signin_buton() {
    loginpage.signinIcon.click();
    }


    @And("Typed valid (.*) on the first box")
    public void user_enters_valid_username(String userName) {
    loginpage.username.sendKeys(userName);

    }

    @And("Typed the valid (.*) on the second box")
    public void puser_enters_valid_password(String password) {
    loginpage.password.sendKeys(password);
    }

    @Then("Click sign in button")
    public void user_clicks_signin_button() {
    loginpage.submit.submit();
    }

    @Then("Click cancel button")
    public void click_cancel_button(){
    loginpage.cancel.click();
    }


}
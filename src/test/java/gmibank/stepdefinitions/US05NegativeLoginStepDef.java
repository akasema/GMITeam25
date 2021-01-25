package gmibank.stepdefinitions;

import gmibank.pages.Positive_Negative_Login_Page;
import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class US05NegativeLoginStepDef {
    Positive_Negative_Login_Page loginpage = new Positive_Negative_Login_Page();

    //First TC
    @Given("User on landing page:  https://gmibank.com/")
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


    @And("Typed invalid (.*) into the first box")
    public void user_enters_invalid_username() {
        loginpage.username.sendKeys();

    }

    @And("Typed the valid (.*) into the second box")
    public void user_enters_valid_password() {
        loginpage.password.sendKeys();
    }

    @And("Click sign in button")
    public void user_clicks_signin_button() {
        loginpage.submit.submit();
    }

    @Then("The Error message on the screen")
    public void error_message() {
        loginpage.allertMessage.isEnabled();

    }
    //TC2---------------------------------------------------------------------

    @And("Typed valid (.*) into the first box")
    public void user_enters_valid_username() {
        loginpage.username.sendKeys();

    }

    @And("Typed the invalid (.*) into the second box")
    public void user_enters_invalid_password() {
        loginpage.password.sendKeys();
    }

    //TC3----------------------------------------------------------------


    @And("Typed invalid (.*) into the first box")
    public void user_enters_valid_username(String userName) {
        loginpage.username.sendKeys(userName);

    }

    @And("Typed the invalid (.*) into the second box")
    public void puser_enters_invalid_password(String password) {
        loginpage.password.sendKeys(password);
    }



}



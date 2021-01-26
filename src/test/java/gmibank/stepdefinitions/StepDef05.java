package gmibank.stepdefinitions;

import gmibank.pages.Negative_Login_Page;

import gmibank.utilities.ConfigurationReader;
import gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;


public class StepDef05 {


    Negative_Login_Page loginPage = new Negative_Login_Page();

    @Given("User on landing page")
    public void user_on_landing_page_https_gmibank_com() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank"));

    }

    @And("Click the person icon on top of right corner")
    public void click_the_person_icon_on_top_of_right_corner() {
        loginPage.personIcon.click();
    }

    @And("Click on the sign in button")
    public void click_on_the_sign_in_button() {
        loginPage.signinIcon.click();

    }

    @And("Typed the invalid username {string} into the first box")
    public void typed_the_invalid_SKayar_into_the_first_box(String userName) {
        loginPage.username.sendKeys(userName);

    }

    @And("Typed the valid password {string} into the second box")
    public void typed_the_valid_Skaya192837_into_the_second_box(String password) {
        loginPage.password.sendKeys(password);

    }

    @Then("Click the sign in button")
    public void click_the_sign_in_button() {
        loginPage.submit.click();
        boolean allertMessageDisplayed = loginPage.allertMessage.isDisplayed();
        System.out.println(allertMessageDisplayed);

    }


    @Given("Typed the valid username {string} into the first box")
    public void typed_the_valid_username_into_the_first_box(String userName) {
        loginPage.username.sendKeys(userName);
    }

    @Given("Typed the invalid password {string} into the second box")
    public void typed_the_invalid_pass_into_the_second_box(String password) {
        loginPage.password.sendKeys(password);

    }

    @Then("User should be able to see the message which is Did you forget your password?")
    public void user_should_be_able_to_see_the_message_which_is_Did_you_forget_your_password() {

        boolean isShowedUp = loginPage.forgetPasswordMessage.isDisplayed();
        System.out.println(isShowedUp);

    }

    @Then("User should be able to see  the option which says You don't have an account yet? Register a new account")
    public void user_should_be_able_to_see_the_option_which_says_You_don_t_have_an_account_yet_Register_a_new_account() {
        boolean isShowedUpText = loginPage.registerAccount.isDisplayed();
        System.out.println(isShowedUpText);

        Driver.closeDriver();
    }
}






//
//

//    @Given("Typed the invalid username {string} into the first box")
//    public void typed_the_invalid_us_into_the_first_box(String userName) {
//        loginPage.username.sendKeys(userName);
//
//    }
//
//    @Given("Typed the invalid password {string} into the second box")
//    public void typed_the_valid_Empl101_into_the_second_box(String password) {
//        loginPage.password.sendKeys(password);
//    }

//    @Given("Typed the invalid man1033 into the first box")
//    public void typed_the_invalid_man1033_into_the_first_box() {
//
//    }
//
//    @Given("Typed the valid Man103@ into the second box")
//    public void typed_the_valid_Man103_into_the_second_box() {
//
//    }



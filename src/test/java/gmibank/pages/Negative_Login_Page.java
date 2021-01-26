package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Negative_Login_Page {
    public Negative_Login_Page() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//a[@href='#']")
    public WebElement personIcon;

    @FindBy(id = "login-item")
    public WebElement signinIcon;

    @FindBy(id = "username")
    public WebElement username;

    @FindBy(id = "password")
    public WebElement password;

    @FindBy(xpath = "//*[@type='submit']")
    public WebElement submit;

    @FindBy(xpath = "//strong[text()='Failed to sign in!']")
    public WebElement allertMessage;
//
    @FindBy(xpath = "//*[text()='Did you forget your password?']")
    public WebElement forgetPasswordMessage;
    @FindBy(xpath = "//span[text()='Register a new account']")
    public WebElement registerAccount;

}

//@FindBy(id="username")
//public WebElement

package gmibank.pages;

import gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Positive_Negative_Login_Page {
    public Positive_Negative_Login_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

@FindBy(className = "d-flex align-items-center dropdown-toggle nav-link")
public WebElement personIcon;

@FindBy(id = "login-item")
public WebElement signinIcon;

@FindBy(id="username")
    public WebElement username;

@FindBy(id="password")
    public WebElement password;

@FindBy(className = "btn btn-primary")
    public WebElement submit;

@FindBy(className ="btn btn-secondary")
    public WebElement cancel;

@FindBy(className = "alert alert-danger fade show")
    public WebElement allertMessage;
}

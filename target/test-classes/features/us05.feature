@LoginUS05
Feature: TC01_Login page should not be accessible with invalid credentials
#--------------------------------------------------------------------------------------
  @US005TC01
  Scenario Outline: User cannot login with invalid username validating the error message
    Given User on landing page:  https://gmibank.com/
    And   Click the person icon on top of right corner
    And   Click on the sign in button
    And   Typed the invalid <username> into the first box
    And   Typed the valid <password> into the second box
    And   Click the sign in button
    Then  The error message on the screen

    Examples:
  #Admin, Customer, Employer and Manager credentials
   #I am testing sign in page with four different roles.
      |username|password|
      |SKayar    |Skaya192837*|
      |cus1022   |Cus102@|
      |empl1011  |Empl101@|
      |man1033   |Man103@|
#------------------------------------------------------------------------------------
    @US005TC02
    Scenario Outline: User cannot login with invalid password validating the error message
      And   Typed the valid <username> into the first box
      And   Typed the invalid <password> into the second box
      And   Click the sign in button
      Then  The Error message on the screen

    Examples:
  #Admin, Customer, Employer and Manager credentials
   #I am testing sign in page with four different roles.
      |username|password|
      |SKaya    |Skaya192837*@|
      |cus102   |Cus102@@|
      |empl101  |Empl101@@|
      |man103   |Man103@@|

#---------------------------------------------------------------------------------------------------------------------------------------
  @US005TC03
  Scenario Outline: User cannot login with the invalid username and invalid password validating the error message
    And   Typed the invalid <username> into the first box
    And   Typed the invalid <password> into the second box
    And   Click the sign in button
    Then  The Error message on the screen

    Examples:
  #Admin, Customer, Employer and Manager credentials
   #I am testing sign in page with four different roles.
      |username|password|
      |SKaya    |Skaya192837*@|
      |cus102   |Cus102@@|
      |empl101  |Empl101@@|
      |man103   |Man103@@|
#-------------------------------------------------------------------------------------------------------------------------------------------------
  @US005TC04
    Scenario:User with invalid credentials should be given an option to reset their password
    Then  User is able to  hover over the "Did you forget your password?" message and should be able to click on it in order to reset
#--------------------------------------------------------------------------------------------------------------------------------------------
  @US005TC05
  Scenario:User should be given the option to navigate to registration page if they did not register yet
    Then User is able to see the "You don't have an account yet? Register a new account" message in order to create an account
#------------------------------------------------------------------------------------------------------------------------------------------
  @US005TC06
  Scenario:User should be given the option to navigate to registration page if they did not register yet
    Then User is able to see the registration icon in the main website
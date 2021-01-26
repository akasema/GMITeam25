@us05
Feature: TC01_Login page should not be accessible with invalid credentials
  @US005TC01
  Scenario Outline: User cannot login with invalid username validating the error message
    Given User on landing page
    And Click the person icon on top of right corner
    And Click on the sign in button
    And Typed the invalid username "<username>" into the first box
    And Typed the valid password "<password>" into the second box
    Then Click the sign in button
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
      And   Typed the valid username "<username>" into the first box
      And   Typed the invalid password "<password>" into the second box
      Then  Click the sign in button


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
    And   Typed the invalid username "<username>" into the first box
    And   Typed the invalid password "<password>" into the second box
    Then   Click the sign in button


    Examples:
  #Admin, Customer, Employer and Manager credentials
   #I am testing sign in page with four different roles.
      |username|password|
      |SKayaa    |Skaya192837*@|
      |cus102b   |Cus102@@|
      |empl101c  |Empl101@@|
      |man103d   |Man103@@|
#-------------------------------------------------------------------------------------------------------------------------------------------------
  @US005TC04
    Scenario:User with invalid credentials should be given an option to reset their password
    Then  User should be able to see the message which is Did you forget your password?
#--------------------------------------------------------------------------------------------------------------------------------------------
  @US005TC05
  Scenario:User should be given the option to navigate to registration page if they did not register yet
    Then User should be able to see  the option which says You don't have an account yet? Register a new account
#------------------------------------------------------------------------------------------------------------------------------------------

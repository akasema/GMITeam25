@LoginUS04
Feature: TC01_Login page should accessible with valid credentials
 Scenario Outline: There should be a valid username and password validating the success message to login
    Given User on landing page:  https://gmibank.com/
    And   Click the person icon on top of right corner
    And   Click on the sign in button
    And   Typed valid "<username>" on the first box
    And   Typed the valid "<password>" on the second box
    Then  Click sign in button
   Examples:
  #Admin, Customer, Employer and Manager credentials
   #I am testing sign in page with four different roles.
   |username|password|
   |SKaya    |Skaya192837*|
   |cus102   |Cus102@|
   |empl101  |Empl101@|
   |man103   |Man103@|
#--------------------------------------------------------------

Feature:TC_O2
  Scenario: There should be an option to cancel login
    Given User on landing page:  https://gmibank.com/
    And   Click the person icon on top of right corner
    And   Click on the sign in button
    And   Typed valid "<username>" on the first box
    And   Typed the valid "<password>" on the second box
    Then  Click cancel button








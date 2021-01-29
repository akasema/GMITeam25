$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/manageCustomer.feature");
formatter.feature({
  "name": "US12 Manage Customer Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@manageCustomer"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User log in with customer credantials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click login link",
  "keyword": "Given "
});
formatter.step({
  "name": "Login with \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click to login button",
  "keyword": "And "
});
formatter.step({
  "name": "Click to my operations",
  "keyword": "And "
});
formatter.step({
  "name": "Click to manage customers",
  "keyword": "And "
});
formatter.examples({
  "name": "Employee user customer page",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "MJohn",
        "Mj192837?"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User log in with customer credantials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@manageCustomer"
    }
  ]
});
formatter.step({
  "name": "Click login link",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.click_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"MJohn\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.login_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password \"Mj192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to login button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to my operations",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.click_to_my_operations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to manage customers",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.click_to_manage_customers()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "First Name,Last Name,Middle Name, Email.... section should be visible.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@manageCustomer"
    },
    {
      "name": "@US_0012_01TC"
    }
  ]
});
formatter.step({
  "name": "User can see ID option",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_see_ID_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_see_Last_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Middle Inital",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_see_Middle_Inital()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Email option",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_see_Email_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see PhoneNumber",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_see_PhoneNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Adress option",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_see_Adress_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see Create date option",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_see_Create_date_option()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "There should be view option and edit button there.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@manageCustomer"
    },
    {
      "name": "@US_0012_02TC"
    }
  ]
});
formatter.step({
  "name": "User can see view option",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_see_view_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  can see edit button there.",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_see_edit_button_there()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User can reach edit option from view option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@manageCustomer"
    },
    {
      "name": "@US_0012_03TC"
    }
  ]
});
formatter.step({
  "name": "User can click  and see view option",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_click_and_see_view_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can click and see edit option",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_click_and_see_edit_option()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Edit button allow user update user info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@manageCustomer"
    },
    {
      "name": "@US_0012_04TC"
    }
  ]
});
formatter.step({
  "name": "Click edit button",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.click_edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete first name and enter First_Name",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.delete_first_name_and_enter_First_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete last name and enter  Last_Name",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.delete_last_name_and_enter_Last_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete email and enter e_mail",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.delete_email_and_enter_e_mail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete phone number and enter Phone_Number",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.delete_phone_number_and_enter_Phone_Number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete zip code and enter Zip_Code",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.delete_zip_code_and_enter_Zip_Code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete City and enter City",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.delete_City_and_enter_City()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete SSn and enter S_s_n",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.delete_SSn_and_enter_S_s_n()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User can delete customer and see message regarding delete.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@manageCustomer"
    },
    {
      "name": "@US_0012_05TC"
    }
  ]
});
formatter.step({
  "name": "User can see delete button",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_see_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can click delete button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_can_click_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  Can see warning message",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_Can_see_warning_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User confirm delete and delete info",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.ManageCustomerStepDefinitions.user_confirm_delete_and_delete_info()"
});
formatter.result({
  "status": "passed"
});
});
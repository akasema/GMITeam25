$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/gmibank/features/us05.feature");
formatter.feature({
  "name": "TC01_Login page should not be accessible with invalid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@us05"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US005TC01"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "Typed the invalid username \"\u003cusername\u003e\" into the first box",
  "keyword": "And "
});
formatter.step({
  "name": "Typed the valid password \"\u003cpassword\u003e\" into the second box",
  "keyword": "And "
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
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
        "SKayar",
        "Skaya192837*"
      ]
    },
    {
      "cells": [
        "cus1022",
        "Cus102@"
      ]
    },
    {
      "cells": [
        "empl1011",
        "Empl101@"
      ]
    },
    {
      "cells": [
        "man1033",
        "Man103@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC01"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid username \"SKayar\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_SKayar_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the valid password \"Skaya192837*\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_valid_Skaya192837_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC01"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid username \"cus1022\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_SKayar_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the valid password \"Cus102@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_valid_Skaya192837_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC01"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid username \"empl1011\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_SKayar_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the valid password \"Empl101@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_valid_Skaya192837_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC01"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid username \"man1033\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_SKayar_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the valid password \"Man103@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_valid_Skaya192837_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US005TC02"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "Typed the valid username \"\u003cusername\u003e\" into the first box",
  "keyword": "And "
});
formatter.step({
  "name": "Typed the invalid password \"\u003cpassword\u003e\" into the second box",
  "keyword": "And "
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
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
        "SKaya",
        "Skaya192837*@"
      ]
    },
    {
      "cells": [
        "cus102",
        "Cus102@@"
      ]
    },
    {
      "cells": [
        "empl101",
        "Empl101@@"
      ]
    },
    {
      "cells": [
        "man103",
        "Man103@@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC02"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the valid username \"SKaya\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_valid_username_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid password \"Skaya192837*@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_pass_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC02"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the valid username \"cus102\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_valid_username_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid password \"Cus102@@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_pass_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC02"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the valid username \"empl101\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_valid_username_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid password \"Empl101@@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_pass_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot login with invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC02"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the valid username \"man103\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_valid_username_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid password \"Man103@@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_pass_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User cannot login with the invalid username and invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US005TC03"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "Typed the invalid username \"\u003cusername\u003e\" into the first box",
  "keyword": "And "
});
formatter.step({
  "name": "Typed the invalid password \"\u003cpassword\u003e\" into the second box",
  "keyword": "And "
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
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
        "SKayaa",
        "Skaya192837*@"
      ]
    },
    {
      "cells": [
        "cus102b",
        "Cus102@@"
      ]
    },
    {
      "cells": [
        "empl101c",
        "Empl101@@"
      ]
    },
    {
      "cells": [
        "man103d",
        "Man103@@"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User cannot login with the invalid username and invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC03"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid username \"SKayaa\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_SKayar_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid password \"Skaya192837*@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_pass_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot login with the invalid username and invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC03"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid username \"cus102b\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_SKayar_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid password \"Cus102@@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_pass_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot login with the invalid username and invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC03"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid username \"empl101c\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_SKayar_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid password \"Empl101@@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_pass_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot login with the invalid username and invalid password validating the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC03"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid username \"man103d\" into the first box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_SKayar_into_the_first_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Typed the invalid password \"Man103@@\" into the second box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.typed_the_invalid_pass_into_the_second_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User with invalid credentials should be given an option to reset their password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC04"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see the message which is Did you forget your password?",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_should_be_able_to_see_the_message_which_is_Did_you_forget_your_password()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be given the option to navigate to registration page if they did not register yet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@us05"
    },
    {
      "name": "@US005TC05"
    }
  ]
});
formatter.step({
  "name": "User on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_on_landing_page_https_gmibank_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the person icon on top of right corner",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_the_person_icon_on_top_of_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.click_on_the_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see  the option which says You don\u0027t have an account yet? Register a new account",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank.stepdefinitions.StepDef05.user_should_be_able_to_see_the_option_which_says_You_don_t_have_an_account_yet_Register_a_new_account()"
});
formatter.result({
  "status": "passed"
});
});
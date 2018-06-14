$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM a new Contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User  enters \"\u003cuname\u003e\" and \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "it navigates to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\", \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "uname",
        "pwd",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Tom efgh",
        "Peter",
        "Manager"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "David",
        "Dsouza abcd",
        "Director"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM a new Contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User  enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "it navigates to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Tom efgh\", \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 12812717001,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 14038722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 14
    },
    {
      "val": "test@123",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 209278160,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 8211150263,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.it_navigates_to_Home_Page()"
});
formatter.result({
  "duration": 2008025822,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 286224070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom efgh",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 41
    },
    {
      "val": "Manager",
      "offset": 53
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 5506589927,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2016299615,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM a new Contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User  enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "it navigates to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"David\", \"Dsouza abcd\" and \"Director\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 9572717871,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 12381746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 14
    },
    {
      "val": "test@123",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 173958632,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 7177235223,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.it_navigates_to_Home_Page()"
});
formatter.result({
  "duration": 2008386284,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 264345505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 29
    },
    {
      "val": "Dsouza abcd",
      "offset": 38
    },
    {
      "val": "Director",
      "offset": 56
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 5517191533,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 878236101,
  "status": "passed"
});
});
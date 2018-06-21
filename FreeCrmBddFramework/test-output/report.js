$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "User  enters uname and pwd",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "it navigates to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 14
    },
    {
      "cells": [
        "test_deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 15
    },
    {
      "cells": [
        "test_deal2",
        "2000",
        "60",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test_deal3",
        "3000",
        "70",
        "10"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 12909352539,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 76211410,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 326588600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 5143252030,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.it_navigates_to_Home_Page()"
});
formatter.result({
  "duration": 2016092606,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 1530780527,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 25198393777,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.close_the_browser()"
});
formatter.result({
  "duration": 849078138,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/login1.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "       This is functionality of the login",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login with the correct username and password",
  "description": "",
  "id": "login-feature;login-with-the-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I input a valid username",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I input a valid password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 725005402,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.java.test.bdd.test.steps.LoginSteps.i_navigate_to_the_login_page(LoginSteps.java:14)\r\n\tat ✽.Given I navigate to the login page(feature/login1.feature:5)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginSteps.i_input_a_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_input_a_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.i_should_navigate_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
});
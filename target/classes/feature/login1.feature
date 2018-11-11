Feature: Login Feature
         This is functionality of the login

Scenario:Login with the correct username and password
          Given I navigate to the login page
          Then I input a valid username
          And I input a valid password
          When I click on the Login Button
          Then I should navigate to the home page
# cypress-cucumber-heroku-app

## Description
* This project tests the Heroku Login Page.  It uses behavior driven development testing with cucumber.  
* This regression suite is built on the assumption that the state of the heroku login page on 5/15/21 has all expected behavior.  
* I added a few test cases for the secure page to test logout and to demo how current infrastructure can support additional pages and their assertions.      

## Test Organization
*  Test cases can be found in the feature files at 'cypress/integration/cucumber-test'
*  Page objects can be found at 'cypress/integration/pages'
*  Step definitions can be found at 'cypress/integration/common' and within the folders at 'cypress/integration/cucumber-test'
*  Test data can be found at 'cypress/fixtures'

## How to Start
1. Clone the project
2. `npm i` - Install all the dependencies
3. In order to run the tests you will need to set the username and password as environment variables, CYPRESS_USERNAME and CYPRESS_PASSWORD.
    * the username and password are in the user instructions at the heroku website, http://the-internet.herokuapp.com/login
4. If you set the username and password as your OS environment varaibles, Run `npm test` to execute the tests in Test Runner | Run `npm run test:cli` to execute the tests in CLI
5. If you do not set the username and password as OS environment variables, Run `CYPRESS_USERNAME={username} CYPRESS_PASSWORD={password} npm test` | `CYPRESS_USERNAME={username} CYPRESS_PASSWORD={password} npm run test:cli` to execute tests in CLI
5. If you want to run a specific test case, I'd recommend tagging the scenario in the feature file. Then you should specify that tag in the cypress.json's env.TAGs value.
6. To create HTML reports 
    * Executing through cli : `npm run test:cli:reports`
    * Executing through cypress tool : first execute `npm run test:reports` and then end the cypress session


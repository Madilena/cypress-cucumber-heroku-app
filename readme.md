# cypress-cucumber-heroku-app

## Description
* This project tests the Heroku Login Page.  It uses behavior driven development testing with cucumber.  
* This regression suite is built on the assumption that the state of the heroku login page on 5/15/21 has all expected behavior.  However, I added some notes below to bring up behaviors that I would like to confirm with business/ticket requirements.  
* I added a few test cases for the secure page to test logout and to demo how current infrastructure can support additional pages and their assertions. 

## QA Notes
* The username and password are displayed in the user instructions.  This is not good security practice.
* I cannot determine if the site has password requirements, (e.g. length, number, capital-case, lower-case, special character), by design.
* If the user forgets their username or password, there is no way for them to reset it.
* The login page button has font that is not consistent with the rest of the text on the page's text.  
* The login button at /login and the logout button at /secure have different font, text color, size, and background color.  I'm not sure if the site's buttons are supposed to be consistent in these areas.
* The GitHub link's href is different from the url that the GitHub link redirects too.  
* If the user does not submit both correct username and password, then they are only notified that the password is incorrect, rather than a notice that they are both incorrect.
* I can see in the chrome dev tools that the network request to /authenticate returns a 303 status code, rather than a 200 status code.
* After I login, I can see that a rack.session is set (eg 123.456.789), and it is supposed to expire after the session ends.  When I logout and then log back in, then the rack.session is identical to what it was before (eg 123.456.789).  I would expect that it might be a different value with each new session.
* I was able to bypass the login requirements with a straightforward POST request.  I'm not sure if this is best practice.

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


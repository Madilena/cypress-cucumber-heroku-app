Feature: login
        
    @happy_path @login
    Scenario: test-id-1 : User can login to heroku app
        Given user navigates to the login page
        When user submits base username
        When user submits base password
        When user clicks login-logout button
        When user clicks to close the message
        Then the message does not display

    @login
    Scenario: test-id-2 : Do not permit login for no username and good password
        Given user navigates to the login page
        When user submits base password
        When user clicks login-logout button
        Then user does not navigate to secure page
        Then login error message is visible
        Then login error message displays for incorrect username
        Then error message box has expected color
        When user clicks to close the message
        Then the message does not display

    @login
    Scenario: test-id-3 : Do not permit login for good username and no password
        Given user navigates to the login page
        When user submits base username
        When user clicks login-logout button
        Then user does not navigate to secure page
        Then login error message is visible
        Then login error message displays for incorrect password
        Then error message box has expected color
    
    @login
    Scenario: test-id-4 : Do not permit login for no username and no password
        Given user navigates to the login page
        When user clicks login-logout button
        Then user does not navigate to secure page
        Then login error message is visible
        Then login error message displays for incorrect username
        Then error message box has expected color

    @login
    Scenario: test-id-5 : Do not permit login for bad username and good password
        Given user navigates to the login page
        When user submits incorrect username
        When user submits base password
        When user clicks login-logout button
        Then user does not navigate to secure page
        Then login error message is visible
        Then login error message displays for incorrect username
        Then error message box has expected color

    @login
    Scenario: test-id-6 : Do not permit login for good username and bad password
        Given user navigates to the login page
        When user submits base username
        When user submits incorrect password
        When user clicks login-logout button
        Then user does not navigate to secure page
        Then login error message is visible
        Then login error message displays for incorrect password
        Then error message box has expected color

    @login
    Scenario: test-id-7 : Do not permit login for bad username and bad password
        Given user navigates to the login page
        When user submits incorrect username
        When user submits incorrect password
        When user clicks login-logout button
        Then user does not navigate to secure page
        Then login error message is visible
        Then login error message displays for incorrect username
        Then error message box has expected color

    @login @aesthetics
    Scenario: test-id-8 : Login instructions assertions
        Given user navigates to the login page
        Then login instructions have correct text
        Then login instruction credentials are italic
        Then non-credential login instructions are normal font
        Then the instruction message has expected font weight

    @login @aesthetics
    Scenario: test-id-9 : Header assertions
        Given user navigates to the login page
        Then login header has expected text
        Then the header has expected font
        Then the header has expected font size
        Then the header has expected font weight
    
    @login @aesthetics
    Scenario: test-id-10 : Login button assertions
        Given user navigates to the login page
        Then login button has expected blue color
        Then login button text has expected color
        Then login button text has expected font

    @login
    Scenario: test-id-11 : User cannot bypass login page
        Given user navigates to url endpoint "/secure"
        Then login error message is visible
        Then login error message has expected text for not logging in
        Then error message box has expected color

    @login @aesthetics @thirdparty
    Scenario: test-id-12 : Third party info on login page
        Given user navigates to the login page
        Then footer has selenium href
        Then footer has expected selenium message
        Then GitHub banner has correct src
        Then GitHub banner has correct href
        When user clicks on GitHub banner
        #note: I would double check that the gibhub redirect link is functioning as expected
        #Then url is GitHub href
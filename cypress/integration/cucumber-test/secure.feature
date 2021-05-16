Feature: secure

    Scenario: test-id-13 : Secure message is as expected
        Given base user logs in to heroku app
        Then url is at secure page
        Then secure message has correct text
    
    Scenario: test-id-14 : Secure page aesthetics
        Given base user logs in via api
        Given user navigates to url endpoint "/secure"
        Then secure header has correct text
        Then the header has expected font
        Then the header has expected font size
        Then secure instructions has correct text

    Scenario: test-id-15 : Logout
        Given base user logs in via api
        Given user navigates to url endpoint "/secure"
        And user clicks login-logout button
        Then url is at endpoint "/login"
        Then logout message text is correct
        Given user navigates to url endpoint "/secure"
        Then user does not navigate to secure page

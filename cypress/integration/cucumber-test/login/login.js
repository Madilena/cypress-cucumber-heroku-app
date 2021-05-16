import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/login-page'

const login = new loginPage();

Given('user navigates to the login page', () => {
    cy.visit('/login')
})

When('user submits base username', () => {
    login.usernameInputField().type(Cypress.env('USERNAME'))
})

When('user submits base password', () => {
    login.passwordInputField().type(Cypress.env('PASSWORD'))
})

When('user submits incorrect username', () => {
    login.usernameInputField().type('test')
})

When('user submits incorrect password', () => {
    login.passwordInputField().type('test')
})

Then('login error message is visible', () => {
    login.message().should('be.visible')
})

Then('login error message displays for incorrect username', () => {
    cy.fixture('login-data').then(function (data) {
        login.message().should('contain', data.invalid_username_error_message)
    })
})

Then('login error message displays for incorrect password', () => {
    cy.fixture('login-data').then(function (data) {
        login.message().should('contain', data.invalid_password_error_message)
    })
})

Then('login error message has expected text for not logging in', () => {
    cy.fixture('login-data').then(function (data) {
        login.message().should('contain', data.login_error_message)
    })
})

Then('login header has expected text', () => {
    cy.fixture('login-data').then(function (data) {
        login.header().should('have.text', data.login_header_text)
    })
})

Then('login button has expected blue color', () => {
    cy.fixture('login-data').then(function (data) {
        login.button().should('have.css', 'background-color', data.button_blue)
    })
})

Then('login button text has expected color', () => {
    cy.fixture('login-data').then(function (data) {
        login.buttonText().should('have.css', 'color', data.login_button_text_color)
    })
})

Then('login button text has expected font', () => {
    cy.fixture('login-data').then(function (data) {
        login.buttonText().should('have.css', 'font-family', data.login_button_font)
    })
})

Then('login instructions have correct text', () => {
    cy.fixture('login-data').then(function (data) {
        login.userInstructions().should('have.text', data.login_instructions.part0 + Cypress.env('USERNAME') + data.login_instructions.part1 + Cypress.env('PASSWORD') + data.login_instructions.part2)
    })
})

Then('login instruction credentials are italic', () => {
    login.userInstructions().find('em').should(($em) => {
        expect($em).to.have.css('font-style', 'italic')
    })
})

Then('non-credential login instructions are normal font', () => {
    login.userInstructions().should(($em) => {
        expect($em).to.have.css('font-style', 'normal')
    })
})


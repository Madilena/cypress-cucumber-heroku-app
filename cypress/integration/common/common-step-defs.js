import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import basePage from '../pages/base-page'
const base = new basePage();

Given('base user logs in via api', () => {
    cy.loginByApi(Cypress.env('USERNAME'), Cypress.env('PASSWORD'))
})

Given('base user logs in to heroku app', () => {
    cy.login()
})

Given('user navigates to url endpoint {string}', (text) => {
    cy.visit(text)
})

When('user clicks login-logout button', () => {
    base.button().click()
})

Then('url is at secure page', () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/secure')
})

Then('url is at endpoint {string}', (text) => {
    cy.url().should('eq', Cypress.config().baseUrl + text)
})

Then('error message box has expected color', () => {
    cy.fixture('common-test-data').then(function (data) {
        base.message().should('have.css', 'background-color', data.error_red)
    })
})

Then('the header has expected font', () => {
    cy.fixture('common-test-data').then(function (data) {
        base.header().should('have.css', 'font-family', data.general_font)
    })
})

Then('the header has expected font size', () => {
    cy.fixture('common-test-data').then(function (data) {
        base.header().should('have.css', 'font-size', data.header_font_size)
    })
})

Then('the header has expected font weight', () => {
    cy.fixture('common-test-data').then(function (data) {
        base.header().should('have.css', 'font-weight', data.header_font_weight)
    })
})

Then('the instruction message has expected font weight', () => {
    cy.fixture('common-test-data').then(function (data) {
        base.userInstructions().should('have.css', 'font-weight', data.instruction_message_font_weight)
    })
})

Then('user does not navigate to secure page', () => {
    cy.url().should('not.contain', '/secure')
})

Then('logout message text is correct', () => {
    cy.fixture('common-test-data').then(function (data) {
        base.message().should('contain', data.logout_message);
    })
})

Then('GitHub banner has correct src', () => {
    cy.fixture('common-test-data').then(function (data) {
        base.gitHubBanner().should('have.attr', 'src', data.github_src);
    })
})

Then('GitHub banner has correct href', () => {
    cy.fixture('common-test-data').then(function (data) {
        cy.log('**Note: I would double check that the gibhub redirect link is functioning as expected')
        base.gitHubBannerLink().should('have.attr', 'href', data.github_href);
    })
})

When('user clicks on GitHub banner', () => {
    base.gitHubBannerLink().click({ force: true })
})

Then('url is GitHub href', () => {
    cy.fixture('common-test-data').then(function (data) {
        cy.url().should('eq', data.github_href)
    })
})

Then('footer has selenium href', () => {
    cy.fixture('common-test-data').then(function (data) {
        base.footerLink().should('have.attr', 'href', data.selenium_href)
    })
})

Then('footer has expected selenium message', () => {
    cy.fixture('common-test-data').then(function (data) {
        base.footer().should('have.text', data.footer_message)
    })
})

When('user clicks to close the message', () => {
    base.closeMessage().click({ force: true })
})

Then('the message does not display', () => {
    base.message().should('be.visible')
})


import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import securePage from '../../pages/secure-page'

const secure = new securePage();


Then('secure instructions has correct text', () => {
    cy.fixture('secure-data').then(function (data) {
        secure.userInstructions().should('contain', data.secure_instructions_text)
    })
})

Then('secure header has correct text', () => {
    cy.fixture('secure-data').then(function (data) {
        secure.header().should('contain', data.secure_header)
    })
})

Then('secure message has correct text', () => {
    cy.fixture('secure-data').then(function (data) {
        secure.message().should('contain', data.secure_message)
    })
})
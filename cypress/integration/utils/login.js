import loginPage from '../pages/login-page.js'
const login = new loginPage();


Cypress.Commands.add('login', () => {
    cy.visit('/login')
    login.usernameInputField().type(Cypress.env('USERNAME'))
    login.passwordInputField().type(Cypress.env('PASSWORD'))
    login.button().click()
    cy.url().should('eq', Cypress.config().baseUrl + '/secure')
})


Cypress.Commands.add(
    'loginByApi',
    (username, password) => {
        cy.log(`Logging in as ${username}`)
        cy.request({
            method: 'POST',
            url: Cypress.config().baseUrl + '/authenticate',
            form: true,
            body: {
                username,
                password
            },
        })
    }
)


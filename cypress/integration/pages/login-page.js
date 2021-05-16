import basePage from './base-page'

class loginPage extends basePage{

    usernameInputField() {
        return cy.get('#username')
    }

    passwordInputField() {
        return cy.get('#password')
    }
}
export default loginPage
class basePage {

    button() {
        return cy.get('.radius')
    }

    buttonText() {
        return this.button().find('i')
    }

    message() {
        return cy.get('#flash')
    }

    header() {
        return cy.get('#content > div > h2')
    }

    footer() {
        return cy.get('#page-footer > div > div > a')
    }

    userInstructions() {
        return cy.get('#content > div > h4')
    }
}
export default basePage
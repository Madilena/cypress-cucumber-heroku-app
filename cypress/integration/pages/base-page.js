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

    closeMessage() {
        return this.message().find('a')
    }

    header() {
        return cy.get('#content > div > h2')
    }

    footer() {
        return cy.get('#page-footer > div > div')
    }

    footerLink() {
        return this.footer().find('a')
    }

    userInstructions() {
        return cy.get('#content > div > h4')
    }

    gitHubBanner() {
        return cy.get('a > img')
    }

    gitHubBannerLink() {
        return this.gitHubBanner().parent()
    }
}
export default basePage
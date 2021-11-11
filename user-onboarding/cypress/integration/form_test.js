describe('Quotes App', () => {
    //start with a fresh state
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const username = () => cy.get('input[name=username]');
    const email = () => cy.get('input[name=email]');
    const password = () => cy.get('input[name=password]');
    const tos = () => cy.get('input[name=tos]');
    const submit = () => cy.get('input[type=submit]');


    it('Testing to make sure the tests go through', () => {
        expect(1+1).to.equal(2);
        expect(1+1).not.to.equal(3);
    })

    it('correct elements are showing', () => {
        username().should('exist');
        email().should('exist');
        password().should('exist');
        tos().should('exist');
        submit().should('exist');

    })

    describe('Filling out input', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('can type in the inputs', () => {
            username()
            .should('have.value', '')
            .type('VonGunten, Matthew VonGunten')
            .should('have.value', 'VonGunten, Matthew VonGunten')

        })
        it('can type in the email', () => {
            email()
            .should('have.value', '')
            .type('von@gunten.com')
            .should('have.value', 'von@gunten.com')

        })
        it('can type in the password', () => {
            password()
            .should('have.value', '')
            .type('VonGunten, Matthew VonGunten')
            .should('have.value', 'VonGunten, Matthew VonGunten')

        })
        it('can select the tos box', () => {
            tos()
            .should('not.be.checked')
            .check()
            .should('be.checked')
            .check()
            .should('not.be.checked')
            // .click()
            // .should('have.value', 'true')

        })
        it('the submit button should submit', () => {
            username().type('Matt');
            email().type('Matt@abbey.com');
            password().type('asdfasdf');
            tos().check();
        })
    })
})
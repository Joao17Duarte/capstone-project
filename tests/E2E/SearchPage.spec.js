/// <reference types="Cypress" />

describe('<SearchPage/> component', () => {
    it('should render', () =>{
        cy.visit('/search')
        cy.get('button').should('exist')
        cy.get('a').should('exist')
    })

    it('shows button genre', () =>{
        cy.visit('/search')
        cy.get('button').contains('Action')
    })

    it('should redirect to Filtered Movies Page when clicked', () =>{
        cy.visit('/search')
        cy.contains('Check out your Filtered Movies').click().visit('/filteredmovies')
    })
})
/// <reference types="Cypress" />

describe('<ResultsPage/> component', () => {
    it('should render', () => {
      cy.visit('/results')
      
      cy.get('section').should('exist')
      cy.get('a').should('exist')
    })
})
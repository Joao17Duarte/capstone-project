/// <reference types="Cypress" />


describe('<HomePage/> component', () => {
    it('should render', () => {
      cy.visit('/')
      cy.get('input').should('exist')
      cy.get('button').should('exist')
      cy.get('a').should('exist')
    })
    
    it('should add name on enter', () => {
      cy.visit('/')      
      cy.get('input').type('Jane').should('have.value', 'Jane')
      cy.get('button').click()
    })

    it('should redirect to search page when clicked', () => {
      cy.visit('/')
      cy.get('a').click().visit('/search')
    })

})
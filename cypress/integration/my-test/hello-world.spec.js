/// <reference types="cypress" />

describe('Basic Tests', () => {
  it('Correct Page Title', () => {
    cy.visit('https://www.w3schools.com/')

    // add assert by adding .should
    cy.contains('Learn to Code').should('exist')
  })

})





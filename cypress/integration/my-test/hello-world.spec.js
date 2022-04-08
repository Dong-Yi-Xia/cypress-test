/// <reference types="cypress" />

describe('Basic Tests', () => {
  it('Correct Page Title', () => {
    cy.viewport(1280, 720)
    // cy.viewport('macbook-15')

    cy.visit('https://www.w3schools.com/')

    // add assert by adding .should
    cy.contains('Learn to Code').should('exist')
    // cy.contains('Learn to Code').should('not.exist')

    cy.get('div')
    // cy.get('[data-testid=learnbtn]').click()
    // cy.get('#navbtn_exercises').click()

    // .should is the equivalent expect()
    cy.get('h1.learntocodeh1').should('have.text', 'Learn to Code')
    // cy.get('[data-testid=title]').should('eq', 'title')
  })

  it('Should exist on mobile', () => {
    cy.viewport('iphone-x')
    cy.visit('https://www.w3schools.com/')
  })

  // use it.only to test that only test
  // it.only('Log in Page', () => {
  it('Log in Page', () => {
    cy.visit('https://www.w3schools.com/')
    cy.contains('Log in').click()
    cy.contains('Need an account?').should('exist')
    cy.contains('Forgot password?').should('exist')
  })

  it('login page links works', () => {
    cy.visit('https://www.w3schools.com/')

    // Go to Log in page
    cy.contains('Log in').click()

    // Password reset page
    cy.contains('Forgot password?')
      .should('exist')
      .click()

    // verify page URL
    cy.url().should('include', '/reset')

    // go back, on the log in page
    cy.go('back')

    // Go to sign up page
    cy.contains('Sign up').click()

    // Sign up page
    cy.contains('Sign up for free').should('exist')

  })

  it('should describe cy log', () => {
    cy.visit('https://www.w3schools.com/')

    // Like console.log
    cy.log('Look Im here!!')

    // Lazy load, doesn't work, get back an Object
    cy.log('The current URL: ', cy.url())

    // Use a promise instead
    cy.url().then(value => {
      cy.log('The real URL is: ', value)
    })
  })

  it.only('login should fail', () => {
    cy.visit('https://www.w3schools.com/')

    cy.contains('Log in').click()

    cy.contains('Looks like you forgot something').should('not.exist')

    cy.get('#modalusername').type('admin')

    cy.get('#current-password').type('password')

    cy.get('button')
      .contains('Log in')
      .click()

    cy.contains('Looks like you forgot something').should('exist')
  })


})





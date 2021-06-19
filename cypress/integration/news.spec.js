describe("News Api Test Cases", ()=>{
  before(()=>{
    cy.visit('/');
  });
  it('Should check for wrong username and password', ()=>{
    cy.get('#username').type("admin")
    cy.get('#password').type("paasswrtdrd")
    cy.get('#loginButton').click();
    cy.location('pathname').should('eq', '/login')
    expect(localStorage.getItem('token')).to.eq(null)
    cy.get('#username').clear()
    cy.get('#password').clear()
  });
  it('Should change path to dashboard on successful login', ()=>{
    cy.get('#username').type("admin")
    cy.get('#password').type("password")
    cy.get('#loginButton').click();
    cy.location('pathname').should('eq', '/')
    expect(localStorage.getItem('token')).to.eq(null)
  });
  it('Should check for wrong username and password', ()=>{
    // expect(localStorage.getItem('token')).to.eq(null)
    cy.get('#readNowLink').click()
    cy.location('pathname').should('eq', '/')

    
  })
})
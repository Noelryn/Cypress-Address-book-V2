describe('Visitor can see landing page' , () => {
    it('visitor can see landing page', () => {
      cy.visit('/');
      cy.get("body")
      .should("contain", "Address Book")
    })
  })

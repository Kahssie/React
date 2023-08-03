describe('land page', () => {
    it('visit home', () => {
      cy.visit("/");
    });
  
    it('should land up in login component', () => {
  
      cy.url().should('include', 'login');
      cy.wait(3000);
  
    })
})
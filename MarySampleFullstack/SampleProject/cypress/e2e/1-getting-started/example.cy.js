 

describe('land page', () => {

    it('visit home', () => {
      cy.visit("http://localhost:3000/");
    });
  
  
    // it('should have title as library app', () => {
    //   cy.get('.clstitle').contains('News')
    //   cy.wait(4000);
    // })


    
    it('should have welcome test',()=>{
    
      cy.get('.clsh1').should('contain','Welcome home')
    })

    it('should have login button', () => {
      cy.get('.clslogin').click();
      cy.wait(3000);
      cy.url().should('include', 'login')
      cy.wait(4000);
    })



})

describe('testing login component',()=>{


it('should enter username and password ',()=>{


cy.get('#mailid').type('cassie@gmail.com');
cy.get("#password").type('password');
cy.wait(7000);
cy.get('.butlogin').click();
cy.wait(5000);

})



})

describe('testing dashboard',()=>{


it('should land up in dashboardcomponent',()=>
{
   cy.url().should('include',"dashboard");
   cy.wait(5000);

})

it('should have add button',()=>{


  cy.get('.clsadd').contains('Add');
  cy.wait(5000);
})
it('should logout ',()=>{

  cy.get('.clslogout').click();
  cy.wait(5000);
  cy.url().should('include',"localhost:3000")
 cy.wait(4000);

})

})









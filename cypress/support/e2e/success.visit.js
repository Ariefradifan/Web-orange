describe('susscess visit', ()=> {
    it('susscess visit', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.contains('Login')

       cy.get('.oxd-input').eq(0).type('Admin')
       cy.get('.oxd-input').eq(1).type('admin123')

       //click login 
       cy.get('.oxd-button ').click()
       cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/').should('include','/dashboard/index')

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
       cy.contains('Dashboard')
       
       cy.get('.oxd-main-menu-item-wrapper').eq(0).click()
       cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/').should('include','/admin/viewSystemUsers')

       cy.get('.oxd-button').eq(2).click()
       cy.get('.oxd-select-text').eq(0).click()
    })
})


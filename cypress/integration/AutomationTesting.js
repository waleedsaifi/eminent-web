
  before(function(){
      cy.visit('https://www.eminentfuture.com/') // eminentfuture App Url
      cy.url().should('include', 'eminentfuture')
  })

  it('Verifying All buttons and links of the Solutions tab', function () {
    cy.viewport(1500,700)
cy.wait(3000)
// cy.scrollTo('bottom')
cy.get('.sc-fujyAs').click({force:true})
cy.wait(2000)
cy.get(':nth-child(2) > .menu_item > a').should('have.text',' SOLUTIONS ').click({force:true})
cy.wait(2000)
cy.get('.sc-jNnpgg > .sc-iTVJFM').click({force:true})
cy.wait(2000)

cy.get(':nth-child(1) > :nth-child(1) > .sc-cxNHIi').type('isaac_barnes', {force: true}, {delay: 100})
cy.get(':nth-child(1) > :nth-child(2) > .sc-cxNHIi').type('LLC', {force: true}, {delay: 100})
   cy.get(':nth-child(2) > :nth-child(1) > .sc-cxNHIi').type('Testing text Job Title', {force: true}, {delay: 100})
   cy.get(':nth-child(2) > :nth-child(2) > .sc-cxNHIi').type('1234567890', {force: true}, {delay: 100})
   cy.get(':nth-child(3) > .sc-fKgJPI > .sc-cxNHIi').type('isaac_barnes@gmail.com', {force: true}, {delay: 100})
   cy.get(':nth-child(4) > :nth-child(1) > .sc-cxNHIi').type('Thnaks for your support ', {force: true}, {delay: 100})

   cy.get('.sc-iJCRrE').type('Testing Message ', {force: true}, {delay: 100})
    cy.wait(3000)
   cy.get('.sc-hiKfDv').click({force:true})

  })

  it('Verifying All buttons and links of the SERVICES tab', function () {
    // cy.viewport(1500,700)
    cy.wait(3000)

    // cy.scrollTo('bottom')
    cy.get('.sc-fujyAs').click({force:true})
    cy.wait(2000)
    cy.get(':nth-child(4) > .menu_item > a').should('have.text','SERVICES').click({force:true})
     cy.viewport(1500,1000)
     cy.get('.grid-1 > .sc-TtZnY > img').trigger('mouseover',{force: true}).click({force:true})
     cy.wait(2000)
     cy.get(':nth-child(2) > .sc-TtZnY > img').trigger('mouseover',{force: true})
     cy.wait(2000)
     cy.get(':nth-child(3) > .sc-TtZnY > .content > h3').trigger('mouseover',{force: true})
     cy.wait(2000)
     cy.get(':nth-child(4) > .sc-TtZnY > .content > h3').trigger('mouseover',{force: true})
     cy.wait(2000)

      })
      it('Verifying All buttons and links of the PROJECTS tab', function () {
        cy.wait(3000)

        // cy.scrollTo('bottom')
        cy.get('.sc-fujyAs').click({force:true})
        cy.get(':nth-child(6) > .menu_item > a').should('have.text','PROJECTS').click({force:true})
        cy.wait(2000)
         cy.viewport(1500,1000)
         cy.wait(2000)
          })
          it('Verifying All buttons and links of the About tab', function () {
            cy.viewport(1200,1000)
            cy.get('.sc-fujyAs').click({force:true})
            cy.get(':nth-child(7) > .menu_item > a').should('have.text','ABOUT').click({force:true})
            cy.wait(2000)
            cy.viewport(1200,1000)
             cy.wait(2000)
             cy.contains('José "Tech" Risi').scrollIntoView()
            //S cy.get('.sc-cTJkRt')('bottom', { ensureScrollable: false })
            cy.wait(2000)
            cy.contains('Raquel Risi').scrollIntoView()
            cy.wait(2000)
            cy.contains('Kevin Torres').scrollIntoView()
            cy.wait(2000)
            cy.contains('Steve Trapp').scrollIntoView()
              })

              it('Verifying All buttons and links of the DEMO BOOK tab', function () {
                cy.wait(3000)
                cy.viewport(1500,1000)
                // cy.scrollTo('bottom')
                cy.get('.sc-crzoAE').click({force:true})
                 cy.wait(4000)
                 cy.get(':nth-child(1) > :nth-child(1) > .sc-cxNHIi').type('isaac_barnes', {force: true}, {delay: 100})
                 cy.get(':nth-child(1) > :nth-child(2) > .sc-cxNHIi').type('LLC', {force: true}, {delay: 100})
                    cy.get(':nth-child(2) > :nth-child(1) > .sc-cxNHIi').type('Testing text Job Title', {force: true}, {delay: 100})
                    cy.get(':nth-child(2) > :nth-child(2) > .sc-cxNHIi').type('1234567890', {force: true}, {delay: 100})
                    cy.get(':nth-child(3) > .sc-fKgJPI > .sc-cxNHIi').type('isaac_barnes@gmail.com', {force: true}, {delay: 100})
                    cy.get(':nth-child(4) > :nth-child(1) > .sc-cxNHIi').type('Thnaks for your support ', {force: true}, {delay: 100})
                    cy.get('.sc-iJCRrE').type('Testing Message ', {force: true}, {delay: 100})
                  })






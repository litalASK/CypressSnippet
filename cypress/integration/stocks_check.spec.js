/// <reference types="cypress" />

it('Test', () =>{
cy.visit('https://www.google.com/');
cy.get('.gLFyf').type('Amazon stock').type('{enter}');
cy.get('[aria-label="עלה ב-1.03%"] > [jsname="rfaVEf"]').should('eq',)




})
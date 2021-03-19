/// <reference types="cypress" />


  it('imdb', ()=>{
    cy.visit('https://www.imdb.com/'); 
    cy.get('#imdbHeader-navDrawerOpen > .ipc-icon').click();
    cy.get('.NavLinkCategoryList__StyledContainer-sc-13vymju-0 > :nth-child(2) > ._2Q0QZxgQqVpU0nQBqv1xlY > [data-testid=category-expando]').click();
    cy.get('[href="/chart/top/?ref_=nv_mv_250"]').click();
    cy.get(':nth-child(1) > .titleColumn > a').contains('The Shawshank Redemption');
  })

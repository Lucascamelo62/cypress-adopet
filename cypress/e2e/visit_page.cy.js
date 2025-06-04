const URL = 'https://adopet-frontend-cypress.vercel.app/'

describe('Visitando página do Adopet', () => {
  it('entrando no website', () => {
    cy.visit(URL);
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Francisco Alves Pimenta');
    cy.get('[data-test="input-email"]').type('francisco@gmail.com');
    cy.get('[data-test="input-password"]').type('123456');
    cy.get(':nth-child(6) > .pass__view').click();
  })
})
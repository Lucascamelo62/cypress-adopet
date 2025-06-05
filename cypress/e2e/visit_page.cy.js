import { faker } from '@faker-js/faker';
const URL = 'https://adopet-frontend-cypress.vercel.app/'

describe('Cadastro de usuário', () => {
  it('fluxo básico: cadastro de usuário com sucesso', () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email();

    cy.visit(URL);
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type(nome);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})
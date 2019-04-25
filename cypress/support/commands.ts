import { IdGenerator } from './id-generator';

Cypress.Commands.add('additionalFunction', () => {
  const id: number = IdGenerator.getNextId();
  cy.log(`Additional function works! ID is ${id}`)
});

declare namespace Cypress {
  interface Chainable {
    additionalFunction: () => void;
  }
}

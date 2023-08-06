/// <reference types="cypress" />

const addRemoveElementsPage = require('../support/pages/addRemoveElementsPage');

describe('Adding and Removing Elements in DOM', () => {
  beforeEach(() => {
    addRemoveElementsPage.visitAddRemovePage();
    cy.url().should('include', 'add_remove_elements');
    cy.contains(addRemoveElementsPage.getHeaderTitle).should('be.visible');
  });

  it('verify adding and removing elements when clicked on Add and Delete buttons respectively', () => {
    cy.contains(addRemoveElementsPage.getDeleteButton).should('not.exist');
    addRemoveElementsPage.addElement();
    cy.contains(addRemoveElementsPage.getDeleteButton).should('be.visible');
    addRemoveElementsPage.deleteElement();
    cy.contains(addRemoveElementsPage.getDeleteButton).should('not.exist');
  });
});

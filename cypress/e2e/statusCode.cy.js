/// <reference types="cypress" />

const statusCodePage = require('../support/pages/statusCodePage');
const statusCodeSubPage = require('../support/pages/statusCodeSubPage');

describe('Status Code Verification', () => {
    let testData;

    beforeEach(() => {
        cy.fixture('statusCode.testData.json').then((data) => {
            testData = data;
        });
        statusCodePage.visitStatusCodePage();
        cy.contains(statusCodePage.getHeaderTitle).should('be.visible');
        cy.url().should('include', 'status_codes');
    });

    it('verify default page content', () => {
        cy.get(statusCodePage.getPageText).should('contain.text', testData.pageText).and('contain.text', testData.pageSubText);
        cy.get(statusCodePage.getHereLink).should('be.visible').should('have.text', testData.hereLinkText);
        testData.statusCodes.forEach((value, i) => {
            cy.get(statusCodePage.getStatusCodes).eq(i).should('be.visible').should('contain.text', value);
        });
    });

    it('verify here link', () => {
        cy.get(statusCodePage.getHereLink).should('have.attr', 'href', testData.url);
    });

    it('verify status links takes user to correct status code page', () => {
        testData.statusCodes.forEach((value, i) => {
            cy.get(statusCodePage.getStatusCodes).eq(i).click();
            cy.get(statusCodeSubPage.getPageText).should('contain.text', 'This page returned a ' + value + ' status code.');
            cy.get(statusCodeSubPage.getHereLink).click();
            cy.get(statusCodePage.getPageText).should('contain.text', testData.pageText).and('contain.text', testData.pageSubText);
        });
    });
});

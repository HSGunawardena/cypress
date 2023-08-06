class StatusCodePage {

    getHeaderTitle = 'Status Codes';
    getPageText = '.example > p';
    getHereLink = '.example > p > a';
    getStatusCodes = '.example > ul > li > a'

    visitStatusCodePage() {
        cy.visit('/status_codes');
    }
}
module.exports = new StatusCodePage();
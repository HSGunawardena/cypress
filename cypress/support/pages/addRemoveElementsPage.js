class AddRemoveElementsPage {
    getHeaderTitle = 'Add/Remove Elements';
    getAddButton = 'Add Element';
    getDeleteButton = 'Delete';

    visitAddRemovePage() {
        cy.visit('/add_remove_elements/');
    }

    addElement() {
        cy.contains(this.getAddButton).click();
    }

    deleteElement() {
        cy.contains(this.getDeleteButton).click();
    }
}
module.exports = new AddRemoveElementsPage();

describe("Tests de l'application Counter", () => {

    it("devrait afficher un compteur initial de 0", () => {
        cy.visit("http://localhost:5173/");
        cy.get("#counter").should("have.text", "count is 0");
    });
    it("le compteur devrait augmenter le nombre lors du clic sur le bouton", () => {
        cy.visit("http://localhost:5173/");
            const clic = 10
            for (let i = 0; i < clic; i++) {
                cy.get("#counter").should("have.text", `count is ${i}`.toString());
                cy.get("#counter").click();
            }
    });
    it("le compteur devrait augmenter le nombre lors du clic sur le bouton", () => {
        cy.visit("http://localhost:5173/");
            const clic = 10
            for (let i = 1; i < clic; i++) {
                cy.get("#counter").click();
                cy.get("#counter").should("have.text", `count is ${i}`.toString());
            }
    });
    
    it("devrait activer les liens au clique", () => {
        cy.visit("http://localhost:5173/");
        cy.get('#counter').click();
    });

    it("test si les shadows se déclenchent au hover", () => {
        cy.visit("http://localhost:5173/");
        cy.get('#counter').trigger('mouseover');
        cy.get('#counter').should("be.visible");
        cy.get('.logo.vanilla').first().trigger('mouseover');
        cy.get('.logo.vanilla').first().should('be.visible');
    })
    it("test si les shadows se déclenchent au hover", () => {
        cy.visit("http://localhost:5173/");
        cy.get('.logo').first().trigger('mouseover');
        cy.get('.logo').first().should('be.visible');
    });
});



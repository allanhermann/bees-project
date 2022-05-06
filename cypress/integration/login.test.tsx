/// <reference types="cypress" />

describe("Login Page", () => {
  it("should test the login page", () => {
    cy.visit("http://localhost:3000");
    cy.get("#checkBox").click();
    cy.get("#button").should("be.disabled");
    cy.get("#checkBox").click();
    cy.get("#button").should("be.disabled");
    cy.get("#textBox").type("Test");
    cy.get("#checkBox").click();
    cy.get("#button").should("not.be.disabled");
    cy.get("#button").click();
    cy.url().should("eq", "http://localhost:3000/dashboard");
  });
});

/// <reference types="cypress" />

describe("Dashboard Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#checkBox").click();
    cy.get("#textBox").type("UserName");
    cy.intercept("https://api.openbrewerydb.org/breweries").as("breweries");
    cy.get("#button").click();
  });

  it("should test the header of dashboard page", () => {
    //This stest make sure the Header is working as expected
    cy.get("#userName").should("have.text", "UserName");
    cy.get("#goBack").click();
    cy.url().should("eq", "http://localhost:3000/login");
  });

  it("should test the loading state", () => {
    //This test make sure the LoadingState is working as expected
    cy.get("#loading").should("be.visible");
  });

  it("should test the empty state", () => {
    //This test make sure the EmptyState is working as expected
    cy.wait("@breweries").then((xhr) => {
      Cypress._.times(xhr.response?.body.length, () => {
        cy.get("#trashCan").click();
      });
    });

    cy.get("#empty").should("be.visible");
    cy.get("a").click();
    cy.url().should("eq", "http://localhost:3000/login");
  });
});

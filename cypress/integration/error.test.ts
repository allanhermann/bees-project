/// <reference types="cypress" />

describe("Error Page", () => {
  it("should test the error page", () => {
    //This test makes sure the erroe page is redirecting correctly
    cy.visit("http://localhost:3000/error");
    cy.get("a").click();
    cy.url().should("eq", "http://localhost:3000/login");
  });
});

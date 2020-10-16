describe("MVP tests", () => {
  before("visit page", ()=> {
    cy.visit("http://localhost:3000/pizza") 
  })
  it("checks you can add text to input", () => {
    cy.get("textarea").type("test");
    cy.get(':nth-child(1) > .sc-eCApGN').type("test");
  })
  it("checks multiple toppings selection", ()=> {
    cy.get('[type="checkbox"]').check()
  })
  it("checks you can submit", () => {
    cy.get("form").submit();
  })
})
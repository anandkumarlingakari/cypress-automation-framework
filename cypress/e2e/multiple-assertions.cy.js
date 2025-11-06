/// <reference types="cypress" />

describe('test multiple assertions', () => {

    it('test each element using then callback', () => {
        cy.visit('https://example.cypress.io/todo');

        cy.get('.toggle + label')
            .then(item => {
                expect(item[0]).to.contain.text('Pay electric bill')
                expect(item[1]).to.contain.text('Walk the dog')
               // expect(item[2]).to.contain.text('Walk the dog')

                if (item.length !== 2) {
                    throw new Error('elements mis-matched')
                }
            })
    })

    it('test each element using should promise', () => {
        cy.visit('https://example.cypress.io/todo');

        cy.get('.toggle + label')
            .should(item => {
                expect(item[0]).to.contain.text('Pay electric bill')
                expect(item[1]).to.contain.text('Walk the dog')
              //  expect(item[2]).to.contain.text('Walk the dog')

                if (item.length == 3) {
                    throw new Error('elements mis-matched')
                }
            })
    })
})
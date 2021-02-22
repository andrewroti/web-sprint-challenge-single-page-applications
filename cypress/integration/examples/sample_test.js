import cypress from 'cypress'


describe('testing cypress- disregard', () =>{
    it('sample tests', ()=>{
        expect(true).to.equal(true);
    })
})

describe('add text to input box', () =>{
    it('checks text is entered in form inputs', ()=>{
        cypress.visit("http://localhost:3001/pizza");
        cypress.get('.form-container').should('exist');
    })
})
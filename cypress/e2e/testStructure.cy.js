///<reference types="cypress"/>


describe('Context:My first test',() => {
     before(()=>{
       // runs once before all test cases in describe block,like beforeClass 

     })

     beforeEach(() => {

        // run before each test case , beforeMethod

        cy.clearCookies();

     })

     after(()=>{
        //similira to after class in TestNg,runs after all test finished
     })

     afterEach(()=>{
        // similar to afterMethod 
     })

     it('Opening a web application',() =>{
        cy.visit('/registration_form');
       
     })

     
     it('Test 2',() =>{

        expect(false).to.equal(false);
     })

     it('Test 3',() =>{

        expect(false).not.to.equal(true);
     })

     xit('Test 4',() =>{

        expect(true).to.equal('5'==5);
     })

})

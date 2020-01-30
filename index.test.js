const { expect } = require('chai'); //I'm letting the compiler know that I'll access chai

const { calculateTip, calculateTotalAmount, displayTip, displayTotal } = require('./index');


describe('Check the bill amount', () => {

    it('Calculate the bill tip', () => {
        expect(calculateTip(11.25, 15)).to.eql(1.69);
    });

    it ('Calculate the total amount of the bill', () => {
        expect(calculateTotalAmount(11.25, 15)).to.eql(12.94);
    });

   it ('Checks the tip display ', () => {
        expect(displayTip(11.25, 15)).to.eql(`Tip: 1.69`);
    });

    it ('Checks the total bil display ', () => {
        expect(displayTotal(11.25, 15)).to.eql(`Total: 12.94`);
    });

});
//given
// this shall ask for bill amount and tip rate inputs


//then
// check the inputs are numbers

//keep asking for the input if there is no correct input
// check the numbers are not negative
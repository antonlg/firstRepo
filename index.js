
function calculateTip(billAmount, tipRate){
    let tip = billAmount * (tipRate / 100); 
    return Math.round(tip * 100) / 100;
}

function calculateTotalAmount(billAmount, tipRate){
    return billAmount + calculateTip(billAmount, tipRate);    
}

function displayTip(billAmount, tipRate){
    let str = `Tip: ${ calculateTip(billAmount, tipRate) }`;
    return str;
}

function displayTotal(billAmount, tipRate){
    let str = `Total: ${ calculateTotalAmount(billAmount, tipRate) }`;
    return str;
}
module.exports = {
    calculateTip,
    calculateTotalAmount,
    displayTip,
    displayTotal };
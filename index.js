//Create a sales receipt summary given subtotal and taxRate

function calculateSalesTax(subtotal, taxRate) {
    const taxTotal = subtotal * taxRate;
    return taxTotal;
}

//screaming snake case ALL_CAPS_WITH_UNDERSCORES
const TAX_RATE = 0.07; //For Palm Beach County, FL, US
const customerSubtotal = 17.25;

//calculate outputs
const customerTaxTotal = calculateSalesTax(customerSubtotal, TAX_RATE);
const customerTotal = customerTaxTotal + customerSubtotal;

//outputs
console.log(`Subtotal       $${customerSubtotal.toFixed(2)}`);
console.log(`Tax            $${customerTaxTotal.toFixed(2)}`);
console.log(`---------------------`);
console.log(`Total          $${customerTotal.toFixed(2)}`);

//const roundedTotal = Math.round(customerTotal * 100)/ 100;

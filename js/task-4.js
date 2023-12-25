"use strict";

function getShippingCost(country) {
let countryName;
switch (country) {
    case "China":
        countryName = 'China';
        return `Shipping to ${countryName} will cost 100 credits`;
        break;
    case "Chile":
        countryName = 'Chile';
        return `Shipping to ${countryName} will cost 250 credits`
        break;
    case "Australia":
        countryName = 'Australia';
        return `Shipping to ${countryName} will cost 170 credits`;
        break;
    case "Jamaica":
        countryName = 'Jamaica';
        return `Shipping to ${countryName} will cost 120 credits`;
        break;
    default:
        return "Sorry, there is no delivery to your country";
}
}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

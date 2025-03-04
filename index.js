// Code your solution in this file!
// index.js

// 1. Returns first two drivers from array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// 2. Returns last two drivers from array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// 3. Array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Creates a fare multiplier function
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// 5. Doubles fares using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// 6. Triples fares using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// 7. Selects drivers based on passed function
function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}

// Export all functions for testing
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};
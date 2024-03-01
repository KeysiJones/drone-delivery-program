// Sort from the smallest weight to the largest one to focus on making less trips
function sortDeliveriesByWeight(deliveries) {
    return deliveries.sort((a, b) => a.weight - b.weight);
}

module.exports = { sortDeliveriesByWeight };
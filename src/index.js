// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000){
        var msg = { error : "You are rich, my friend! We don\'t have so much coins for exchange" };
        return msg;
    } else if (currency < 0){
        return {}
    }
    var nomenals = [50,  25,   10,  5,   1 ];
    var coinNames = ['H', 'Q', 'D', 'N', 'P'];
    var cash = {};
    var i = 0;
    while (currency != 0 && i < nomenals.length){
        var part = currency /  nomenals[i]; 
        currency -= Math.floor(part) * nomenals[i];
        var cashCoin  = Math.floor(part); 
            
        if (cashCoin != 0) {
            cash[coinNames[i]] = Math.floor(part); 
        }
        i++;
    };
    return cash;
}
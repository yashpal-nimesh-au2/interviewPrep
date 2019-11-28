var maxProfit = function( prices) {
    var n = prices.length;
    var k = 2;
        if(n<2) {
            return 0;
        }
        if(k >= n / 2) {
            var len = n, profit = 0;
            for(var i = 1; i < len; i++) 
                if(prices[i] > prices[i-1]) profit += prices[i] - prices[i-1];
            return profit;
        }
        
        var globalMax = zeros([k+1, n]);

        for(var i =1; i < k+1; i++) {
            var localMax = new Array(n);
            localMax.fill(0)
            for(var j = 1; j < n; j++) {
                var profit = prices[j] - prices[j-1];
                localMax[j] = Math.max(localMax[j-1] + profit, globalMax[i-1][j-1] + profit);
                globalMax[i][j] = Math.max(localMax[j], globalMax[i][j-1]);
            }
        }
        return globalMax[k][n-1];
};

function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}
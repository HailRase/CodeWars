function positiveSum(arr) {
    return arr.reduce(function(sum, elem) {
        if (elem < 0) {
            return sum
        } else {
            return sum + elem
        }
    }, 0)
}
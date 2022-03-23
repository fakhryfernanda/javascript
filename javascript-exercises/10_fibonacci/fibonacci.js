const fibonacci = function(n) {
    let preValue = 1;
    let curValue = 1;
    let temp;
    for (let i = 3; i <= n; i++) {
        temp = curValue;
        curValue = preValue + curValue;
        preValue = temp;
    }
    return curValue;
};

// Do not edit below this line
module.exports = fibonacci;

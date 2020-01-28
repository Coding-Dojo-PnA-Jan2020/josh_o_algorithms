function isCreditCardValid(digitArr){
    for (var i=digitArr.length-2; i>=0; i-=2){
        digitArr[i] = digitArr[i] * 2;
        if (digitArr[i] > 9){
            digitArr[i] = digitArr[i] - 9
        }
    };
    var sum = 0
    for (var j=0; j<digitArr.length; j++){
        sum += digitArr[j]
    };
    if (sum % 10 == 0){
        return true
    };
    return false
};
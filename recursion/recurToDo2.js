function rFib(num){
    var idx = Math.floor(num);
    if (idx < 1){
        return 0
    };
    if (idx == 1){
        return 1
    };
    return rFib(idx-1)+rFib(idx-2)
};
function rTrib(num){
    var idx = Math.floor(num);
    if (idx < 2){
        return 0
    };
    if (idx == 2){
        return 1
    };
    return rTrib(idx-1)+rTrib(idx-2)+rTrib(idx-3)
};
function zibonacci(num){
    var idx = Math.floor(num);
    if (idx<2){return 1};
    if (idx==2){return 2};
    if (idx%2 == 0){
        return zibonacci(idx/2) + zibonacci(idx/2+1) + 1
    } else {
        return zibonacci((idx-1)/2) + zibonacci((idx-3)/2) + 1
    }
};
function bestZibNum(num){
    var idx = 0;
    while (zibonacci(idx) < num){
        idx++
    };
    if (zibonacci(idx) != num){
        return null
    };
    idx++;
    while (zibonacci(idx) != num){
        idx++
    }
    return idx
};
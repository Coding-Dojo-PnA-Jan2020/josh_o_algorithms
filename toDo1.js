function pushFront(val, arr){
    for (i=arr.length; i>0; i--){
        arr[i] = arr[i-1]
    };
    arr[0] = val;
    return arr
};

function popFront(arr){
    var val = arr[0];
    for (i=1; i<arr.length; i++){
        arr[i-1] = arr[i]
    };
    arr.pop();
    console.log(arr);
    return val
};

function insertAt(arr, idx, val){
    for (i=arr.length; i>idx; i--){
        arr[i] = arr[i-1]
    };
    arr[idx] = val;
    return arr
};

function removeAt(arr, idx){
    var val = arr[idx];
    for (i=idx+1; i<arr.length; i++){
        arr[i-1] = arr[i]
    };
    arr.pop();
    console.log(arr);
    return val
};

function swapPairs(arr){
    for (i=1; i<arr.length; i+=2){
        var val = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = val
    };
    return arr
};

function removeDuplicates(arr){
    var count = 1;
    var check = arr[0];
    for (i=1; i<arr.length; i++){
        if (arr[i] != check){
            arr[count] = arr[i];
            check = arr[i];
            count++
        };
    };
    while (arr.length > count){
        arr.pop()
    };
    return arr
}
var myArr = [1,2,3,4,5];

function reverse(arr){
    for (var i=0; i<arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp
    };
    return arr
};

function rotateArr(arr, shiftBy){
    var realShift = shiftBy%(arr.length);
    if (realShift < 0){
        realShift = realShift + arr.length
    };
    for (var i=arr.length-1; i>=0; i--){
        arr[i+realShift] = arr[i]
    };
    for (var j=realShift; j>0; j--){
        arr[j-1] = arr[arr.length-1];
        arr.pop()
    };
    return arr
}

function filterRange(arr, min, max){
    for (var i=arr.length-1; i>=0; i--){
        if (arr[i]<min || arr[i]>max){
            for (var j=i; j<arr.length-1; j++){
                arr[j] = arr[j+1]
            };
            arr.pop()
        }
    };
    return arr
}

function concat(arr1, arr2){
    var newArr = [];
    for (var i=0; i<arr1.length; i++){
        newArr.push(arr1[i])
    };
    for (var j=0; j<arr2.length; j++){
        newArr.push(arr2[j])
    };
    return newArr
}

function skylineHeights(arr){
    var check = 0; var visArr = [];
    for (var i=0; i<arr.length; i++){
        if (arr[i]>check){
            visArr.push(arr[i]);
            check = arr[i]
        }
    };
    return visArr
}
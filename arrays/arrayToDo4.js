function shuffle(arr){
    shuffles = Math.floor(Math.random()*25)+arr.length
    for (var i=0; i<shuffles; i++){
        move = Math.floor(Math.random()*(arr.length));
        temp = arr[0];
        for (var j=0; j<move; j++){
            arr[j] = arr[j+1]
        };
        arr[move] = temp
    };
    return arr
};
function removeRange(arr, start, end){
    var range = end-start
    for (var i=0; i<arr.length-(end); i++){
        arr[start+i] = arr[end+1+i]
    };
    for (var j=0; j<range+1; j++){
        arr.pop()
    }
    return arr
};
function intermediateSums(arr){
    var fin_len = arr.length+Math.floor(arr.length/10);
    var sum = 0;
    for (var i=0; i<fin_len; i++){
        sum += arr[i];
        if ((i+2)%11 == 0){
            insertAt(arr, i+1, sum);
            sum = 0;
            i++
        }
    };
    arr.push(sum);
    return arr
};
function insertAt(arr, idx, val){
    for (i=arr.length; i>idx; i--){
        arr[i] = arr[i-1]
    };
    arr[idx] = val;
    return arr
};
function doubleTrouble(arr){
    for (i=arr.length-1; i>=0; i--){
        arr[i*2+1] = arr[i];
        arr[i*2] = arr[i]
    };
    return arr
};
function zipIt(arr1, arr2){
    var len1 = arr1.length;
    var len2 = arr2.length;
    if (len1 > len2){
        for (var i=1; i<len1-len2+1; i++){
            arr1[len1+len2-i] = arr1[len1-i]
        };
        for (var j=len2-1; j>=0; j--){
            arr1[2*j+1] = arr2[j];
            arr1[2*j] = arr1[j]
        }
    } else {
        for (var i=1; i<len2-len1+1; i++){
            arr1[len1+len2-i] = arr2[len2-i]
        };
        for (var j=len1-1; j>=0; j--){
            arr1[2*j+1] = arr2[j];
            arr1[2*j] = arr1[j]
        }
    };
    return arr1
}
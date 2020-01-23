function minToFront(arr){
    var minIdx=0;
    for (i=1; i<arr.length; i++){
        if (arr[i] < arr[minIdx]){
            minIdx = i
        }
    };
    min = arr[minIdx];
    for (i=minIdx; i>0; i--){
        arr[i] = arr[i-1]
    };
    arr[0] = min;
    return arr
}
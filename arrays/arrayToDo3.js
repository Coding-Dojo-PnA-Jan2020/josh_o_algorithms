function removeNegatives(arr){
    for (var i=arr.length-1; i>=0; i--){
        if (arr[i]<0){
            for (var j=i; j<arr.length-1; j++){
                arr[j] = arr[j+1]
            };
            arr.pop()
        }
    };
    return arr
};

function secondToLast(arr){
    if (arr.length<2){
        return null
    };
    return arr[arr.length-2]
};

function secondLargest(arr){
    if (arr.length<2){
        return null
    };
    var lrg = arr[0];
    if (arr[1]>lrg){
        var scd = lrg;
        lrg = arr[1]
    } else {
        var scd = arr[1]
    };
    for (var i=2; i<arr.length; i++){
        if (arr[i]>lrg){
            scd = lrg;
            lrg = arr[i]
        } else if (arr[i]>scd){
            scd = arr[i]
        }
    };
    return scd
};

function nthToLast(arr, val){
    if (arr.length<val){
        return null
    };
    return arr[arr.length-val]
};

function nthLargest(arr, val){
    if (arr.length<val){
        return null
    };
    var check = [arr[0]];
    for (var i=1; i<arr.length; i++){
        var idx = check.length;
        while (arr[i]>check[idx-1] && idx>0){
            check[idx] = check[idx-1];
            idx--
        };
        check[idx] = arr[i];
        if (check.length>val){
            check.pop()
        }
    };
    return check[check.length-1]
}
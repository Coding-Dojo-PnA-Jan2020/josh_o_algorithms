function rBinarySearch(arr, val, start=0, end=arr.length-1){
    if (val < arr[start] || val > arr[end]){
        return false
    };
    var check = Math.floor((end+start)/2)
    if (arr[check] == val){
        return true
    } else if (val < arr[check]){
        return rBinarySearch(arr, val, start, check-1)
    } else {
        return rBinarySearch(arr, val, check+1, end)
    }
};
function rGCF(num1, num2){
    if (num1 >= num2){
        var hi = num1;
        var lo = num2
    } else {
        var hi = num2;
        var lo = num1
    }
    if (hi%lo === 0){
        return lo
    } else {
        return rGCF(hi%lo, lo)
    }
};
function strSubsets(str){
    var results = [];
    results.push("");
    if (str.length > 0){
        subset(str, results);
    }; 
    return results
};
function subset(str, results, start = "", idx = 0){
    if (idx < str.length){
        results.push(start+str.charAt(idx));
        subset(str, results, start, idx+1);
        subset(str, results, start+str.charAt(idx), idx+1)
    }
};
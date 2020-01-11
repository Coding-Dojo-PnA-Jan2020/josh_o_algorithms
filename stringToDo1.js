function removeBlanks(str){
    var noSpc = str.split(" ");
    return noSpc.join("");
};
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

function getDigits(str){
    var newNum = "";
    for (var i=0; i<str.length; i++){
        if (
            str[i] == "1" ||
            str[i] == "2" ||
            str[i] == "3" ||
            str[i] == "4" ||
            str[i] == "5" ||
            str[i] == "6" ||
            str[i] == "7" ||
            str[i] == "8" ||
            str[i] == "9" ||
            str[i] == "0"
        ){
            newNum += str[i]
        }
    };
    return Number(newNum)
};
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

function acronyms(str){
    var acro = "";
    var words = str.split(" ");
    for (var i=0; i<words.length; i++){
        if (words[i]!=""){
            acro += words[i][0]
        }
    };
    return acro.toUpperCase()
};
console.log(acronyms(" there's no free lunch - gotta pay yer way. "));

function countNonSpaces(str){
    var newStr = removeBlanks(str);
    return newStr.length
};
console.log(countNonSpaces("Honey pie, you are driving me crazy"));

function removeShorterStrings(arr, val){
    for (var i=arr.length-1; i>=0; i--){
        if (arr[i].length<val){
            for (var j=i; j<arr.length-1; j++){
                arr[j] = arr[j+1]
            };
            arr.pop()
        }
    };
    return arr
}
console.log(removeShorterStrings("Honey pie, you are driving me crazy".split(" "), 4))
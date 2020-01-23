class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
};
class Slist{
    constructor(){
        this.head = null;
    };
    contains(val){
        var runner = this.head;
        while (runner != null){
            if (runner.value == val){
                return true
            };
            runner = runner.next
        };
        return false
    }
}
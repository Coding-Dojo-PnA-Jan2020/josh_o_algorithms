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
    length(){
        var runner = this.head;
        var count = 0;
        while (runner != null){
            count++;
            runner = runner.next
        };
        return count
    }
}
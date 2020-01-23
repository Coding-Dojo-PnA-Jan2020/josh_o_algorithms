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
    addFront(val){
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    };
    removeFront(){
        if (this.head != null){
            this.head = this.head.next;
        };
        return this
    };
    front(){
        if (this.head == null){
            return null
        };
        return this.head.value;
    }
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
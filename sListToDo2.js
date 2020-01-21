class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    };
    removeSelf(list){
        var runner = list.head;
        while (runner.next != this){
            runner = runner.next
        };
        runner.next = runner.next.next
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
    addBack(val){
        var runner = this.head;
        var newNode = new Node(val);
        if (runner == null){
            this.head = newNode
        } else {
            while (runner.next != null){
                runner = runner.next
            };
            runner.next = newNode
        }
        return this
    };
    secondToLastValue(){
        var runner = this.head;
        if (runner == null || runner.next == null){
            return null
        };
        while (runner.next.next != null){
            runner = runner.next
        };
        return runner.value
    };
    copy(){
        newList = new Slist()
        var runner = this.head;
        while (runner != null){
            newList.addBack(runner.value);
            runner = runner.next
        };
        return newList
    };
    filter(lowVal, highVal){
        var runner = this.head;
        while (runner != null && (runner.value < lowVal || runner.value > highVal)){
            runner = runner.next;
            this.head = runner
        };
        while (runner != null){
            while (runner.next != null && (runner.next.value < lowVal || runner.next.value > highVal)){
                runner.next = runner.next.next
            };
            runner = runner.next
        };
        return this
    }
}
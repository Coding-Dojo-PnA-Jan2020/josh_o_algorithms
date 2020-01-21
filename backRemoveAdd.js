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
    back(){
        var runner = this.head;
        if (runner == null){
            return null
        };
        while (runner.next != null){
            runner = runner.next
        }
        return runner.value
    };
    removeBack(){
        var runner = this.head;
        if (runner != null){
            if (runner.next == null){
                this.head = null
            } else {
                while (runner.next.next != null){
                    runner = runner.next
                };
                runner.next = null
            }
        }
        return this
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
    }
}
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
    display(){
        var runner = this.head;
        var list = "";
        while (runner != null){
            list += runner.value+', ';
            runner = runner.next
        };
        list = list.slice(0, list.length - 2)
        return list
    }
}
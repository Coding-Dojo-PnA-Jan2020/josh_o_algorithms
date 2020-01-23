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
    max(){
        var runner = this.head;
        if (runner == null){
            return null
        };
        var max = runner.value;
        while (runner != null){
            if (runner.value > max){
                max = runner.value
            }
            runner = runner.next
        };
        return max
    };
    min(){
        var runner = this.head;
        if (runner == null){
            return null
        };
        var min = runner.value;
        while (runner != null){
            if (runner.value < min){
                min = runner.value
            }
            runner = runner.next
        };
        return min
    };
    average(){
        var runner = this.head;
        if (runner == null){
            return null
        };
        var count = 0;
        var sum = 0;
        while (runner != null){
            count++;
            sum += runner.value;
            runner = runner.next
        };
        return sum/count
    }
}
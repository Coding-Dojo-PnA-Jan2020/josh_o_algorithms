class BSTNode{
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
};
class BST{
    constructor(){
        this.root = null
    };
    add(value, node=this.root){
        if (this.root == null){
            this.root = new BSTNode(value);
        } else if (value > node.val){
            if (node.right == null){
                node.right = new BSTNode(value)
            } else {
                return this.add(value, node.right)
            }
        } else {
            if (node.left == null){
                node.left = new BSTNode(value)
            } else {
                return this.add(value, node.left)
            }
        };
        return this
    };
    contains(value, node=this.root){
        var isPresent = false
        if (node != null){
            if (node.val == value){
                isPresent = true
            } else if (node.val < value){
                isPresent = this.contains(value, node.right)
            } else {
                isPresent = this.contains(value, node.left)
            }
        };
        return isPresent
    };
    min(node=this.root){
        if (this.root == null){
            return null
        };
        if (node.left == null){
            return node.val
        } else {
            return this.min(node.left)
        }
    };
    max(node=this.root){
        if (this.root == null){
            return null
        };
        if (node.right == null){
            return node.val
        } else {
            return this.max(node.right)
        }
    };
    size(node=this.root){
        if (node == null){
            return 0
        };
        return 1 + this.size(node.left) + this.size(node.right)
    };
    isEmpty(){
        if (this.root == null){
            return true
        };
        return false
    }
}
var tree = new BST();
tree.add(16).add(8).add(24).add(4).add(12);
console.log(tree.contains(8), tree.contains(9))
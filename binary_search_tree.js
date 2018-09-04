
// create a tree node.......................

function Node(val) {
    this.left = null;
    this.right = null;
    this.value = val
}


// create a new Binary search tree.............

function Tree() {

    this.treeRoot = null;
    this.nodeFind = false;
    this.preOfCurrent = null;
    this.arrayOfTreeNodes = [];

    Tree.prototype.addNode = function () {

        let val = arguments[0];
        if (this.arrayOfTreeNodes != undefined) {
            this.arrayOfTreeNodes.push(val);
        }

        let node = this.treeRoot;

        if (arguments.length == 2) {
            node = arguments[1]
        }

        // arrayOfTreeNode.push(val);

        if (this.treeRoot === null) {
            this.treeRoot = new Node(val);
            return;
        }

        else if (node === null) {

            return new Node(val);
        }

        else if (val > node.value) {
            node.right = Tree.prototype.addNode(val, node.right)
        }

        else if (val < node.value) {
            node.left = Tree.prototype.addNode(val, node.left)
        }

        return node;

    }

    Tree.prototype.printInorder = function () {

        let node = this.treeRoot;

        if (arguments.length != 0) {
            node = arguments[0]
        }

        if (node === null)
            return;
        Tree.prototype.printInorder(node.left);
        console.log(node.value);
        Tree.prototype.printInorder(node.right)
    }

    Tree.prototype.removeNode = function () {

        if (this.arrayOfTreeNodes != undefined) {
            if (this.arrayOfTreeNodes.indexOf(arguments[0]) == -1) {
                console.log("Node not available in tree!");

                return false;
            }
        }

        let val = arguments[0];
        let node = this.treeRoot;
        let LoR = null;
        let preOfCurrent = arguments[3];

        if (node != undefined) {
            if (this.treeRoot.value == val && this.treeRoot.left == null && this.treeRoot.right == null) {
                this.treeRoot = null;
                return;
            }
        }

        if (arguments.length > 1) {
            node = arguments[1];
            LoR = arguments[2]
        }




        if (node == null) {
            return;
        }

        if (node.value == val) {

            if (node.left == null && node.right == null) {
                preOfCurrent[LoR] = null;
            }

            else if (node.left != null && node.right == null) {
                preOfCurrent[LoR] = node.left
            }

            else if (node.left == null && node.right != null) {
                preOfCurrent[LoR] = node.right
            }

            else {
                for (let i = node.right; i != null; i = i.left) {


                    if (node.right.left == null) {
                        preOfCurrent = node
                    }

                    if (i.left == null) {

                        node.value = i.value;

                        if (preOfCurrent == node) {
                            Tree.prototype.removeNode(i.value, i, "right", preOfCurrent);
                        }

                        else {
                            Tree.prototype.removeNode(i.value, i, "left", preOfCurrent);
                        }


                    }

                    preOfCurrent = i;
                }
            }

            this.nodeFind = true;
            return;
        }

        if (!this.nodeFind) {
            preOfCurrent = node;
            Tree.prototype.removeNode(val, node.left, "left", preOfCurrent)
        }

        if (!this.nodeFind) {
            preOfCurrent = node;
            Tree.prototype.removeNode(val, node.right, "right", preOfCurrent)
        }
    }
}


// module.exports = {
//     Tree,
//     Node
// }

var firstTree = new Tree();

firstTree.addNode(5);

firstTree.addNode(1)
firstTree.addNode(6)
firstTree.addNode(3)
firstTree.addNode(8)
firstTree.addNode(4)
firstTree.addNode(7)
firstTree.addNode(9)
firstTree.addNode(10)

// var secondTree = new Tree();
// secondTree.addNode(3);

// secondTree.addNode(8)
// secondTree.addNode(5)
// secondTree.addNode(7)
// secondTree.addNode(9)
// secondTree.addNode(2)
// secondTree.addNode(1)



console.log("Tree")
firstTree.printInorder()

var j = firstTree.removeNode(11)

if (j != false) {
    console.log("Tree after remove node");
    firstTree.printInorder()
}


// console.log("secondTree")
// secondTree.printInorder()

// secondTree.removeNode(3)

// console.log("secondTree after remove node");
// secondTree.printInorder()


// create a tree node.......................

function Node(val) {
  this.left = null;
  this.right = null;
  this.value = val
}


var treeRoot = null
var arrayOfTreeNode = [];
var nodeFind = false;
var preOfCurrent = null;

// create a new Binary search tree.............

function Tree() {

  Tree.prototype.addNode = function (node, val) {

    arrayOfTreeNode.push(val);

    if (treeRoot === null) {
      treeRoot = new Node(val);
      return;
    }

    else if (node === null) {

      return new Node(val);
    }

    else if (val > node.value) {
      node.right = Tree.prototype.addNode(node.right, val)
    }

    else if (val < node.value) {
      node.left = Tree.prototype.addNode(node.left, val)
    }

    return node;

  }

  Tree.prototype.printInorder = function (node) {
    if (node === null)
      return;
    Tree.prototype.printInorder(node.left);
    console.log(node.value);
    Tree.prototype.printInorder(node.right)
  }

  Tree.prototype.removeNode = function (node, val, LoR) {

    if (treeRoot.value == val && treeRoot.left == null && treeRoot.right == null) {
      treeRoot = null;
      return;
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
              Tree.prototype.removeNode(i, i.value, "right");
            }

            else {
              Tree.prototype.removeNode(i, i.value, "left");
            }


          }

          preOfCurrent = i;
        }
      }

      nodeFind = true;
      return;
    }

    if (!nodeFind) {
      preOfCurrent = node;
      Tree.prototype.removeNode(node.left, val, "left")
    }

    if (!nodeFind) {
      preOfCurrent = node;
      Tree.prototype.removeNode(node.right, val, "right")
    }
  }
}

var firstTree = new Tree();

// firstTree.addNode(null,5);

// firstTree.addNode(treeRoot, 1)
// firstTree.addNode(treeRoot, 6)
// firstTree.addNode(treeRoot, 3)
// firstTree.addNode(treeRoot, 8)
// firstTree.addNode(treeRoot, 4)
// firstTree.addNode(treeRoot, 7)
// firstTree.addNode(treeRoot, 9)
// firstTree.addNode(treeRoot, 10)


firstTree.addNode(null, 3);

firstTree.addNode(treeRoot, 8)
firstTree.addNode(treeRoot, 5)
firstTree.addNode(treeRoot, 7)
firstTree.addNode(treeRoot, 9)
firstTree.addNode(treeRoot, 2)
firstTree.addNode(treeRoot, 1)




firstTree.printInorder(treeRoot)

firstTree.removeNode(treeRoot, 3)

firstTree.printInorder(treeRoot)

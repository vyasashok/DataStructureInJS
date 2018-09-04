var { Tree, Node } = require('./bstCopy.js');


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


console.log("firstTree")
firstTree.printInorder()

firstTree.removeNode(3);
console.log("after remove")
firstTree.printInorder()
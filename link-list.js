function Node(value) {
    this.value = value,
        this.next = null
}

let nodeValues = [5, 1, 7, 2, 9];
let head = null;
let tail = null;
let current = null
for (val of nodeValues) {

    current = new Node(val);

    if (head === null) {
        head = current
    }
    else {
        tail.next = current
    }
    tail = current;
}



for (current = head; current != null; current = current.next) {
    console.log(current)
}






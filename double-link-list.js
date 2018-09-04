function Node(value) {
    this.prev = null,
        this.value = value,
        this.next = null
}


function List() {
    this.head = null,
        this.tail = null,

        List.prototype.addToBack = function (backVal) {
            let current = null;
            for (val of backVal) {
                let current = new Node(val);

                if (this.head == null) {
                    this.head = current,
                        current.prev = this.head
                }

                else {
                    this.tail.next = current
                    current.prev = this.tail
                }

                this.tail = current;
            }
        }

    List.prototype.addToFornt = function (backVal) {
        let current = null;
        for (val of backVal) {
            let current = new Node(val);

            if (this.tail == null) {
                this.tail = current
                //current.next = this.tail
            }

            else {
                this.head.prev = current
                current.next = this.head
            }

            this.head = current;
        }
    }

    List.prototype.printForward = function () {
        for (this.current = this.head; this.current != null; this.current = this.current.next) {
            console.log(this.current)
        }
    }

    List.prototype.printBack = function () {
        for (this.current = this.tail; this.current != null; this.current = this.current.prev) {
            console.log(this.current)
        }
    }

    List.prototype.remove = function (val) {
        let status = false

        for (let current = this.head; current != null; current = current.next) {

            if (current.value == val) {
                if (this.head == this.tail) {
                    this.head = null;
                    this.tail = null
                    status = true
                }

                else if (current.prev == null) {
                    this.head = this.head.next;
                    this.head = null
                    status = true
                }

                else if (current.next == null) {
                    this.tail = this.tail.prev;
                    this.tail.next = null
                    status = true
                }
                else {
                    current.next.prev = current.prev;
                    current.prev.next = current.next
                    status = true
                }


            }



        }
        return status;
    }
}

let shoppingList = new List()

shoppingList.addToBack(["sampoo", "soap"])
shoppingList.addToFornt(["sampoo2", "soap2"])

shoppingList.printForward();
//shoppingList.printBack();

console.log(shoppingList.remove("soap"));

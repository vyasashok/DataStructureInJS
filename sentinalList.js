function Node(value) {
    this.prev = null,
        this.value = value,
        this.next = null
}


function List() {
    this.head = new Node(0);
    this.tail = new Node(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;

    List.prototype.addToBack = function () {

        let backVal = [];
        let current = null;

        for (let i = 0; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                for (let j = 0; j < arguments[i].length; j++) {
                    backVal.push(arguments[i][j])
                }
            }
            else {
                backVal.push(arguments[i])
            }
        }

        for (val of backVal) {
            current = new Node(val);
            current.next = this.tail;
            current.prev = this.tail.prev;
            this.tail.prev.next = current;
            this.tail.prev = current
        }
    }


    List.prototype.addToFront = function () {
        let frontVal = [];
        let current = null;

        for (let i = 0; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                for (let j = 0; j < arguments[i].length; j++) {
                    frontVal.push(arguments[i][j])
                }
            }
            else {
                frontVal.push(arguments[i])
            }
        }

        for (val of frontVal) {
            current = new Node(val);
            current.prev = this.head;
            current.next = this.head.next;
            this.head.next.prev = current;
            this.head.next = current
        }

    }

    List.prototype.insertAfter = function () {

        let insertValArr = [];
        let searchVal = arguments[0];
        let current = null;

        for (let i = 1; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                for (let j = 0; j < arguments[i].length; j++) {
                    insertValArr.push(arguments[i][j])
                }
            }
            else {
                insertValArr.push(arguments[i])
            }
        }

        for (let current = this.head.next; current != this.tail; current = current.next) {
            if (current.value == searchVal) {

                let nodeAfterWhichToInsert = current;

                for (val of insertValArr) {

                    let newNode = new Node(val);

                    newNode.prev = nodeAfterWhichToInsert;
                    newNode.next = nodeAfterWhichToInsert.next;
                    nodeAfterWhichToInsert.next = newNode;
                    nodeAfterWhichToInsert.next.prev = newNode;

                    nodeAfterWhichToInsert = newNode;


                    // let newNode = new Node(val);

                    // newNode.prev = current;
                    // newNode.next = current.next;
                    // current.next = newNode;
                    // current.next.prev = newNode

                }
            }
        }
    }

    List.prototype.insertBefore = function () {

        let insertValArr = [];
        let searchVal = arguments[0];
        let current = null;

        for (let i = 1; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                for (let j = 0; j < arguments[i].length; j++) {
                    insertValArr.push(arguments[i][j])
                }
            }
            else {
                insertValArr.push(arguments[i])
            }
        }

        for (let current = this.head.next; current != this.tail; current = current.next) {

            if (current.value == searchVal) {

                let nodeAfterWhichToInsert = current;
                for (val of insertValArr) {

                    let newNode = new Node(val);

                    newNode.next = nodeAfterWhichToInsert;
                    newNode.prev = nodeAfterWhichToInsert.prev;
                    nodeAfterWhichToInsert.prev.next = newNode
                    nodeAfterWhichToInsert.prev = newNode;

                    nodeAfterWhichToInsert = newNode;

                }

            }
        }
    }



    List.prototype.printForward = function () {
        for (let current = this.head.next; current != this.tail; current = current.next) {
            console.log(current.value)
        }
    }

    List.prototype.printBack = function () {
        for (let current = this.tail.prev; current != this.head; current = current.prev) {
            console.log(current.value)
        }
    }

    List.prototype.remove = function () {

        let valuesToRemove = [];


        for (let i = 0; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                for (let j = 0; j < arguments[i].length; j++) {
                    valuesToRemove.push(arguments[i][j])
                }
            }
            else {
                valuesToRemove.push(arguments[i])
            }
        }

        for (let current = this.head.next; current != null; current = current.next) {

            if (valuesToRemove.indexOf(current.value) > -1) {

                current.next.prev = current.prev;
                current.prev.next = current.next

            }

        }
    }

    List.prototype.removeAll = function () {

        this.head.next = this.tail;
        this.tail.prev = this.head;

    }

    List.prototype.removeOccurance = function () {

        let removingItem = arguments[0];
        let removingItemOccurances = [];
        let j = 0;
        for (let i = 1; i < arguments.length; i++) {

            if (Array.isArray(arguments[i])) {
                for (let j = 0; j < arguments[i].length; j++) {

                    removingItemOccurances.push(arguments[i][j])
                }
            }
            else {
                removingItemOccurances.push(arguments[i])
            }
        }

        for (let current = this.head.next; current != null; current = current.next) {

            if (current.value == removingItem) {

                j++;

                if (removingItemOccurances.indexOf(j) > -1) {

                    current.next.prev = current.prev;
                    current.prev.next = current.next
                }

            }

        }

    }

    List.prototype.removeAllOccurance = function () {

        let removingItems = [];

        for (let i = 0; i < arguments.length; i++) {

            if (Array.isArray(arguments[i])) {
                for (let j = 0; j < arguments[i].length; j++) {

                    removingItems.push(arguments[i][j])
                }
            }
            else {
                removingItems.push(arguments[i])
            }
        }

        for (let current = this.head.next; current != null; current = current.next) {

            if (removingItems.indexOf(current.value) > -1) {

                current.next.prev = current.prev;
                current.prev.next = current.next

            }

        }

    }
}

let shoppingList = new List()

shoppingList.addToBack(["sampoo", "soap", "hat"], 2, 3, 8, 3, 9, 3, 10, 3, 3, 5, 5)
//shoppingList.addToFront(["sampoo", "soap", "hat"])

shoppingList.printForward();
//shoppingList.remove(3, 2, "hat", [8, "hat"]);
//shoppingList.removeOccurance(3, [2, 4], 5);
shoppingList.removeAllOccurance(3, [2, 5]);
//shoppingList.removeAll();
//shoppingList.printForward();
//shoppingList.insertAfter(3, [1, 5, 6, 8], 9)
//shoppingList.insertBefore(3, [1, 5, 6, 8], 9)
//shoppingList.printBack();
shoppingList.printForward();

//console.log(shoppingList.remove("soap"));

//shoppingList.printForward();

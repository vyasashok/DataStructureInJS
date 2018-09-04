var arr = new Array(10);


function NewEntry(id, name) {
    this.id = id;
    this.name = name;

}


function hash(value) {
    let emptyArrElementCount = 0;
    let hashedId = (value.id % 10);

    for (val of arr) {
        if (val == undefined) {
            emptyArrElementCount++;
        }
    }

    if (emptyArrElementCount == 3) {
        for (let k = 0; k < 10; k++) {
            arr.push(" ");
        }
    }

    if (arr[hashedId] == undefined) {

        arr[hashedId] = value;
    }
    else {
        arr.splice(hashedId, 0, value);
    }
}

function printHashTable() {

    for (val of arr) {
        if (val != undefined && val != " ") {
            console.log(`${val.id} : ${val.name} \n`);
        }
        else {
            console.log(`Empty \n`);
        }

    }
}

let firstEntry = new NewEntry(101, "ashok1");
let secondEntry = new NewEntry(202, "ashok2");
let thirdEntry = new NewEntry(103, "ashok3");
let forthEntry = new NewEntry(204, "ashok4");
let fifthEntry = new NewEntry(105, "ashok5");
let sixthEntry = new NewEntry(206, "ashok6");
let seventhEntry = new NewEntry(107, "ashok7");
let eighthEntry = new NewEntry(107, "ashok8");
hash(firstEntry);
hash(secondEntry);
hash(thirdEntry);
hash(forthEntry);
hash(fifthEntry);
hash(sixthEntry);
hash(seventhEntry);
hash(eighthEntry);
console.log(arr.length);
printHashTable();
//printHashTable();
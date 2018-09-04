function Employee(id, name) {
    this.id = id,
        this.name = name
}


var brendan = new Employee(1, "Brendan");
var ashok = new Employee(2, "ashok");
console.log(brendan);
console.log(ashok);

function display(msg) {
    console.log(msg)
}


display("Hello");
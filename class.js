class Employee {
    constructor(id, name) {
        this.id = id,
            this.name = name
    }

    print() {
        console.log(this.id, this.name)
    }
}


class Manager extends Employee {
    constructor(id, name, desig) {
        super(id, name);

        this.desig = desig
    }

    print() {
        super.print(this.id, this.name);
        console.log(this.desig)
    }
}

var brendan = new Manager(1, "brendan", "manager");

brendan.print();



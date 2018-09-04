function Employee(id, name, dob, sal, da, hra) {
    this.id = id,
        this.name = name,
        this.dob = dob,
        this.sal = sal,
        this.da = da,
        this.hra = hra,

        Object.defineProperties(this, { dob: { enumerable: false }, sal: { writable: false }, da: { writable: false }, hra: { writable: false } })

}


Employee.prototype.computeSalary = function () {
    console.log(`${this.name} : ${this.sal + this.da + this.hra}`)
}

Employee.prototype.toString = function () {

    if (this.name == "brendan") {
        console.log("sorry confidential info!!!")
    }
    else {
        console.log(`id name dob
                 ${ this.id} ${this.name} ${this.dob} `)
    }

}

var brendan = new Employee(1, "brendan", "25/10/1920", 2555555, 56565, 45545);

brendan.computeSalary();
brendan.toString()

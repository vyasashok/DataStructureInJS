function Employee(id, name) {
    this.id = id,
        this.name = name
}

Employee.prototype.print = function () {
    console.log(this.name, this.id)
}
function Manager(id, name, desig) {
    Employee.call(this, id, name);
    this.desig = desig
}

Manager.prototype.print = function () {
    Employee.prototype.print.call(this)
    console.log(this.desig)
}

var man = new Manager(1, "prarik", "developer")
man.print()
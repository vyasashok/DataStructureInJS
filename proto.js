var bigb = {
    name: "Amitabh",
    surname: "Bachchan",
    print: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

var smallb = Object.create(bigb);

smallb.name = "Abhishek",

    smallb.print = function () {
        console.log(`${this.name} ${this.surname}`);
    }
smallb.print();



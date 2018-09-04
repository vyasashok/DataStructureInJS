// var person = {
//     id: 1,
//     name: "asnok",
//     birthDate: "29/06/1993"

// }


// console.log(person)

// // Object.defineProperty(person, "id", { writable: false })
// // Object.defineProperty(person, "birtDate", { enumrable: false })


// Object.defineProperties(person, { id: { writable: false }, birthDate: { enumerable: false } })

// person.id = 2;

// console.log(person)


var customer = {
    id: 1,
    name: "asnok",
    add: "asdsdsdasdsa",
    fav_items: { asds: 2 }

}


console.log(customer)

// Object.defineProperty(person, "id", { writable: false })
// Object.defineProperty(person, "birtDate", { enumrable: false })


Object.defineProperties(customer, { id: { writable: false }, fav_items: { writable: false, enumerable: false } })

customer.id = 2;

console.log(customer)

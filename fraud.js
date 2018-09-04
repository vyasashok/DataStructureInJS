function add() {
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }

    return s;
}

let sum = add(1, 1, 2, 3, 4, 5, 8, );

console.log(sum);
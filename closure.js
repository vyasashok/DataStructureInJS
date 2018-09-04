function outer() {
    var tiger = "zinda hai"
    var lion = "closure";
    function inner() {
        console.log("tiger", tiger);
        tiger += 1
    }

    return inner;
}


var inFn = outer();

inFn();
inFn();
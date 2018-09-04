var accNo;
var holderName;
var balance;

function init(acc, hldrNm, blnc) {
    accNo = acc;
    holderName = hldrNm,
        balance = blnc
}


function deposit(dep) {
    balance += dep;
}

function withDraw(wit) {
    balance -= wit;
}

function print() {
    console.log(accNo, holderName, balance);
}

module.exports = {
    init,
    deposit,
    withDraw,
    print
}
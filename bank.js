var { init, deposit, withDraw, print } = require('./account');


init(1, "ashok", 1000);

deposit(2000);
withDraw(500);

print();
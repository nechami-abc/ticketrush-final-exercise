const { calcTotal } = require('../js/pricing');

// calcTotal(qty, isMember, isStudent)
test('student discount: 2 tickets', function () { assertEq(calcTotal(2, false, true), 619); });
test('no discount for regular price', function () { assertEq(calcTotal(2, false, false), 724); });
test('member and student gets only the larger discount (20%)', function () { assertEq(calcTotal(2, true, true), 584); });
test('student quota stays 8 like a regular customer', function () { assertEq(calcTotal(8, false, true), 2476); });

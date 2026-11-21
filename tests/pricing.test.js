const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('regular customers may buy up to 8 (explicit false)', function () { assertEq(maxTickets(false), 8); });
test('club members may buy up to 6', function () { assertEq(maxTickets(true), 6); });
test('club member pays 280 per ticket plus the full fee (2 = 584)', function () { assertEq(calcTotal(2, true), 584); });
test('explicit non-member pays the regular price (2 = 724)', function () { assertEq(calcTotal(2, false), 724); });
test('zero tickets is invalid', function () { assertEq(calcTotal(0, false), null); });
test('9 tickets is over the regular limit', function () { assertEq(calcTotal(9, false), null); });
test('7 tickets is over the member limit', function () { assertEq(calcTotal(7, true), null); });
test('exactly 6 for a member is allowed', function () { assertEq(calcTotal(6, true), 1752); });
test('exactly 8 for a regular customer is allowed', function () { assertEq(calcTotal(8), 2896); });
test('a fractional quantity is invalid', function () { assertEq(calcTotal(1.5), null); });

const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('regular customers may buy up to 8 (explicit false)', function () { assertEq(maxTickets(false), 8); });
test('club members may buy up to 4', function () { assertEq(maxTickets(true), 4); });
test('club member pays 280 per ticket plus the full fee (2 = 584)', function () { assertEq(calcTotal(2, true), 584); });
test('explicit non-member pays the regular price (2 = 724)', function () { assertEq(calcTotal(2, false), 724); });

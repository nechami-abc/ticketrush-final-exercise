const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('club members may buy up to 6', function () { assertEq(maxTickets(true), 6); });
test('explicit non-member may buy up to 8', function () { assertEq(maxTickets(false), 8); });
test('two member tickets cost 584', function () { assertEq(calcTotal(2, true), 584); });
test('explicit non-member pays full price', function () { assertEq(calcTotal(2, false), 724); });
test('member order above the quota is rejected', function () { assertEq(calcTotal(7, true), null); });
test('member order at the quota is allowed', function () { assertEq(calcTotal(6, true), 1752); });
test('zero tickets is rejected', function () { assertEq(calcTotal(0, false), null); });
test('regular order above the quota is rejected', function () { assertEq(calcTotal(9, false), null); });
test('regular order at the quota is allowed', function () { assertEq(calcTotal(8), 2896); });

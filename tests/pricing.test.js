const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('club members may buy up to 4', function () { assertEq(maxTickets(true), 4); });
test('explicit non-member may buy up to 8', function () { assertEq(maxTickets(false), 8); });
test('two member tickets cost 584', function () { assertEq(calcTotal(2, true), 584); });
test('explicit non-member pays full price', function () { assertEq(calcTotal(2, false), 724); });

const { joinWaitlist } = require('../js/waitlist');

const same = function (a, b) { assertEq(JSON.stringify(a), JSON.stringify(b)); };

test('adds an email to the waitlist', function () { same(joinWaitlist([], 'a@b.com'), ['a@b.com']); });
test('returns a new array and leaves the input untouched', function () {
  const list = ['a@b.com'];
  const out = joinWaitlist(list, 'c@d.com');
  assertEq(out === list, false);
  same(list, ['a@b.com']);
  same(out, ['a@b.com', 'c@d.com']);
});
test('trims and lowercases the email', function () { same(joinWaitlist([], '  Dana@Mail.COM '), ['dana@mail.com']); });
test('ignores an email without @', function () { same(joinWaitlist(['a@b.com'], 'not-an-email'), ['a@b.com']); });
test('ignores an email without a dot after @', function () { same(joinWaitlist([], 'a.b@com'), []); });
test('does not add a duplicate', function () { same(joinWaitlist(['a@b.com'], ' A@B.com'), ['a@b.com']); });

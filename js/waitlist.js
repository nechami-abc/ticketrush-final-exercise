// רשימת המתנה: לקוחות משאירות מייל כשהכרטיסים אזלו

// מייל תקין: יש בו @, ואחרי ה-@ יש נקודה
function isValidEmail(email) {
  const at = email.indexOf('@');
  return at !== -1 && email.indexOf('.', at + 1) !== -1;
}

// מחזירה מערך חדש; המערך שהתקבל לא משתנה
function joinWaitlist(list, email) {
  const next = list.slice();
  if (typeof email !== 'string') return next;
  const normalized = email.trim().toLowerCase();
  if (!isValidEmail(normalized) || next.indexOf(normalized) !== -1) return next;
  next.push(normalized);
  return next;
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}

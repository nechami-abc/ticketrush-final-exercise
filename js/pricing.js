// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MEMBER_MAX_TICKETS = 6; // מכסה לחברת מועדון במכירה המוקדמת
const MEMBER_DISCOUNT = 0.2;  // 20% הנחה על הכרטיס בלבד, לא על העמלה
const STUDENT_DISCOUNT = 0.15; // מבצע סטודנטיות: 15% על מחיר הכרטיס

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

// כמות לא חוקית (פחות מ-1, מעל המכסה או לא מספר שלם) מחזירה null
// ההנחות לא מצטברות: מי שגם חברה וגם סטודנטית מקבלת רק את הגדולה
function calcTotal(qty, isMember, isStudent) {
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) return null;
  const discount = Math.max(isMember ? MEMBER_DISCOUNT : 0, isStudent ? STUDENT_DISCOUNT : 0);
  const ticket = TICKET_PRICE * (1 - discount);
  return qty * (ticket + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MEMBER_MAX_TICKETS, MEMBER_DISCOUNT, STUDENT_DISCOUNT, maxTickets, calcTotal };
}

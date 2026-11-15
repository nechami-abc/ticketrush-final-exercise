// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MEMBER_MAX_TICKETS = 6; // מכסה לחברת מועדון במכירה המוקדמת
const MEMBER_DISCOUNT_PERCENT = 20; // הנחת חברת מועדון, על מחיר הכרטיס בלבד
const STUDENT_DISCOUNT_PERCENT = 15; // מבצע סטודנטיות, על מחיר הכרטיס בלבד

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

// ההנחות לא מצטברות: מי שזכאית לשתיהן מקבלת רק את הגדולה
function discountPercent(isMember, isStudent) {
  return Math.max(isMember ? MEMBER_DISCOUNT_PERCENT : 0, isStudent ? STUDENT_DISCOUNT_PERCENT : 0);
}

function ticketPrice(isMember, isStudent) {
  return TICKET_PRICE * (100 - discountPercent(isMember, isStudent)) / 100;
}

function calcTotal(qty, isMember, isStudent) {
  // כמות לא חוקית: לא מספר שלם, פחות מ-1 או מעל המכסה של אותה לקוחה
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) return null;
  // עמלת השירות לא מקבלת הנחה
  return qty * (ticketPrice(isMember, isStudent) + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = {
    TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MEMBER_MAX_TICKETS,
    MEMBER_DISCOUNT_PERCENT, STUDENT_DISCOUNT_PERCENT,
    maxTickets, discountPercent, ticketPrice, calcTotal
  };
}

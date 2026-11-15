// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MEMBER_MAX_TICKETS = 4; // מכסה לחברת מועדון במכירה המוקדמת
const MEMBER_DISCOUNT_PERCENT = 20; // הנחת חברת מועדון, על מחיר הכרטיס בלבד

function maxTickets(isMember) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

function ticketPrice(isMember) {
  return isMember ? TICKET_PRICE * (100 - MEMBER_DISCOUNT_PERCENT) / 100 : TICKET_PRICE;
}

function calcTotal(qty, isMember) {
  // עמלת השירות לא מקבלת הנחה
  return qty * (ticketPrice(isMember) + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = {
    TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, MEMBER_MAX_TICKETS, MEMBER_DISCOUNT_PERCENT,
    maxTickets, ticketPrice, calcTotal
  };
}

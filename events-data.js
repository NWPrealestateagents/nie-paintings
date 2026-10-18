// EVENTS: where you'll be set up.
//
// To add an event, copy one block (from "{" to "},") into the list below,
// fill it in, and save. Past dates move to "Past events" by themselves.
//
// Fields:
//   date     required   year-month-day, like "2026-11-21"
//   endDate  optional   for multi-day events, like "2026-11-22"
//   title    required   the name of the event
//   place    optional   the venue or market name
//   time     optional   like "10am to 4pm"
//   address  optional   adds a "Get directions" link
//   note     optional   anything visitors should know
//   link     optional   the event's own web page
//
// Example block:
//
//   {
//     date: "2026-11-21",
//     endDate: "2026-11-22",
//     title: "Holiday Market",
//     place: "Name of the venue",
//     time: "10am to 4pm",
//     address: "123 Main St, Fairfax, VA",
//     note: "Find us near the entrance.",
//     link: "https://example.com"
//   },

window.EVENTS = [
  {
    date: "2026-10-24",
    title: "Kids Market, Manassas",
    place: "Prince William Street Parking Lot",
    time: "8am to 1pm",
    address: "9024 Prince William St, Manassas, VA 20110",
    note: "Come see the paintings in person. Card, Venmo and Zelle accepted."
  },
  {
    date: "2026-11-14",
    title: "Kids Market, Fair Oaks Mall",
    place: "Fair Oaks Mall",
    time: "11am to 4pm",
    address: "11750 Fair Oaks Mall, Fairfax, VA 22033",
    note: "Come see the paintings in person. Card, Venmo and Zelle accepted."
  },
];

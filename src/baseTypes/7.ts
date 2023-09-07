/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// enum Weekdays {
//   Monday = 'working day',
//   Tuesday = 'working day',
//   Wednesday = 'working day',
//   Thursday = 'working day',
//   Friday = 'working day',
//   Saturday = 'day off',
//   Sunday = 'day off'
// }

// function isWeekend(weekday: Weekdays): boolean {
//   return weekday === 'day off'
// }
// isWeekend(Weekdays.Friday)


enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday
}
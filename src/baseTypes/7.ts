/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  Monday = 'working day',
  Tuesday = 'working day',
  Wednesday = 'working day',
  Thursday = 'working day',
  Friday = 'working day',
  Saturday = 'day off',
  Sunday = 'day off'
}

function isWeekend(weekday: Weekdays): boolean {
  if (weekday === 'day off') {
    return true
  }
  return false
}
isWeekend(Weekdays.Friday)

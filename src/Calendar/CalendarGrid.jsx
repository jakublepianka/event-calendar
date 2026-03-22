import { CalendarWeek } from "./CalendarWeek";

export function CalendarGrid({ date, events }) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const weekdayNames = [
    "MON", "TUE", "WED",
    "THU", "FRI", "SAT", "SUN"
  ];
  const weeks = buildCalendar(year, month);

  function buildCalendar(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const startWeekdayIndex = (firstDayOfMonth.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays = [
      ...Array(startWeekdayIndex).fill(null),
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    const calendarWeeks = [];

    for (let i = 0; i < calendarDays.length; i += 7) {
      calendarWeeks.push(calendarDays.slice(i, i + 7));
    }

    const lastCalendarWeek = calendarWeeks[calendarWeeks.length - 1];
    while (lastCalendarWeek.length < 7) {
      lastCalendarWeek.push(null);
    }

    return calendarWeeks;
  }

  return (
    <>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', rowGap: '16px'}}>
      { weekdayNames.map((dayName, dayIndex) => <div key={dayIndex} style={{border: '1px solid black', textAlign: 'center'}}>{dayName}</div>)}
      {Array.from({ length: weeks.length }).map((_, weekIndex) => {
        return <CalendarWeek key={weekIndex} year={year} month={month} week={weeks[weekIndex]} events={events}></CalendarWeek>;
      })}
      </div>
    </>
  );
}

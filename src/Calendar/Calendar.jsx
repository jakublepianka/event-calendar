import { CalendarWeek } from "./CalendarWeek";

export function Calendar({ date, events }) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const weekdays = [
    "MON", "TUE", "WED",
    "THU", "FRI", "SAT", "SUN"
  ];
  const calendar = buildCalendar(year, month);

  function buildCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const startDay = (firstDay.getDay() + 6) % 7;
    const monthLength = new Date(year, month + 1, 0).getDate();

    const days = [
      ...Array(startDay).fill(null),
      ...Array.from({ length: monthLength }, (_, i) => i + 1),
    ];

    const weeks = [];

    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    const lastWeek = weeks[weeks.length - 1];
    while (lastWeek.length < 7) {
      lastWeek.push(null);
    }

    return weeks;
  }

  return (
    <>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', rowGap: '16px'}}>
      { weekdays.map((dayName, i) => <div key={i} style={{border: '1px solid black', textAlign: 'center'}}>{dayName}</div>)}
      {Array.from({ length: calendar.length }).map((day, i) => {
        return <CalendarWeek key={i} year={year} month={month} week={calendar[i]}></CalendarWeek>;
      })}
      </div>
    </>
  );
}

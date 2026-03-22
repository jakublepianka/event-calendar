import { CalendarDay } from "./CalendarDay";

export function CalendarWeek({ week, events }) {
  return (
    <>
      {week.map((day, dayIndex) => {
        const paddedDay = (day + 100).toString().slice(1);
        const dayEvents = events.filter((event) => {
          return event.dateVenue.slice(-2) === paddedDay;
        });
        return (
          <CalendarDay
            key={dayIndex}
            dayNum={day}
            events={dayEvents}
          ></CalendarDay>
        );
      })}
    </>
  );
}

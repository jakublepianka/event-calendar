import { CalendarDay } from "./CalendarDay";

export function CalendarWeek({ week, events }) {
  return (
    <>
      {week.map((day, dayIndex) => {
        const paddedDay = (day + 100).toString().slice(1);
        const dayEvents = events.filter(event => {
          return event.dateVenue.slice(-2) === paddedDay;
        })
        return (
          <div
            key={dayIndex}
            style={{ border: "1px solid black", textAlign: "center" }}
          >
            <CalendarDay dayNum={day} events={dayEvents}></CalendarDay>
          </div>
        );
      })}
    </>
  );
}

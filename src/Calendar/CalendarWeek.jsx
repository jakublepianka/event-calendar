import { CalendarDay } from "./CalendarDay";

export function CalendarWeek({ week, events }) {
  return (
    <>
      {week.map((day, i) => {
        return (
          <div
            key={i}
            style={{ border: "1px solid black", textAlign: "center" }}
          >
            <CalendarDay dayNum={day}></CalendarDay>
          </div>
        );
      })}
    </>
  );
}

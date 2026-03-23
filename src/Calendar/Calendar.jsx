import { useState } from "react";
import { CalendarGrid } from "./CalendarGrid";
import { Link } from "react-router";
import { useOutletContext } from "react-router";
import { useSearchParams } from "react-router";
import styles from "./Calendar.module.css";

export function Calendar() {
  const { events: allEvents } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const dateParam = searchParams.get("date");
  const [selectedDate, setSelectedDate] = useState(
    dateParam ? new Date(dateParam + "-01") : new Date(),
  );
  const selectedDateString = selectedDate.toISOString().slice(0, 10);
  const monthlyEvents = allEvents.filter((event) => {
    const eventMonthString = event.dateVenue.slice(0, -3);
    const selectedMonthString = selectedDateString.slice(0, -3);
    return eventMonthString === selectedMonthString;
  });
  function onDateChange(event) {
    if (!event) return;
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
    setSearchParams({ date: newDate.toISOString().slice(0, 7) });
  }
  return (
    <>
      <div className={styles.calendar}>
        <header className={styles.calendarHeader}>
          <nav className={styles.calendarNav}>
            <Link to="add-event" className={styles.addEventLink}>
              <div className={styles.linkFiller}>Create event</div>
            </Link>
          </nav>

          <div className={styles.calendarControls}>
            <label htmlFor="date">Select month</label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={onDateChange}
              value={selectedDateString}
            />
          </div>
        </header>
        <main className={styles.calendarContent}>
          <CalendarGrid date={selectedDate} events={monthlyEvents} />
        </main>
      </div>
    </>
  );
}

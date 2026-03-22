import { useState } from "react";
import { CalendarGrid } from "./CalendarGrid";
import { Link } from "react-router";
import { useOutletContext } from "react-router";

export function Calendar() {
  const { events: allEvents} = useOutletContext();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedDateString = selectedDate.toISOString().slice(0, 10);
  const monthlyEvents = allEvents.filter(event => { 
    const eventMonthString = event.dateVenue.slice(0, -3);
    const selectedMonthString = selectedDateString.slice(0, -3);
    return eventMonthString === selectedMonthString; 
  })
  function onDateChange(event) {
    if (!event) return;
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };
  return (
    <>
      <label htmlFor="date">Choose desired month </label>
      <input type="date" name="monthYear" id="date" onChange={onDateChange} value={selectedDateString}/>
      <Link to="add-event">Add new event</Link>
      <CalendarGrid date={selectedDate} events={monthlyEvents} />
    </>
  );
}

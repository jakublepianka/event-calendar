import { useState } from "react";
import { CalendarGrid } from "./CalendarGrid";
import { data } from "../../data.json"

export function Calendar() {
  const allEvents = data; 
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedDateString = selectedDate.toISOString().slice(0, 10);
  const monthlyEvents = allEvents.filter(event => { 
    const eventMonthString = event.dateVenue.slice(0, -3);
    const selectedMonthString = selectedDateString.slice(0, -3);
    return eventMonthString === selectedMonthString; 
  })
  function onDateChange(event) {
    if (!event) return;
    setSelectedDate(new Date(event.target.value))
  };

  return (
    <>
      <label htmlFor="date">Choose desired month </label>
      <input type="date" name="monthYear" id="date" onChange={onDateChange} value={selectedDateString}/>
      
      <CalendarGrid date={selectedDate} events={monthlyEvents} />
    </>
  );
}

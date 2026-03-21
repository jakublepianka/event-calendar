import { useState } from "react";
import { Calendar } from "./Calendar/Calendar";

function App() {
  const [date, setDate] = useState(new Date());
  const dateString = date.toISOString().slice(0, 10);
  
  function handleDateChange(e) {
    if (!e) return;
    setDate(new Date(e.target.value))
  };

  return (
    <>
      <label htmlFor="date">Choose desired month </label>
      <input type="date" name="monthYear" id="date" onChange={handleDateChange} value={dateString}/>
      
      <Calendar date={date} />
    </>
  );
}

export default App;

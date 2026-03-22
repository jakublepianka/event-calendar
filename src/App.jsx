import { useState } from "react";
import { Outlet } from "react-router";
import { data } from "../data.json"

function App() {
  const [events, setEvents] = useState(data); 

  return (
    <>
     <Outlet context={{events, setEvents}}/>
    </>
  );
}

export default App;

import { Calendar } from "./Calendar/Calendar.jsx";
import { EventDetails } from "./Details/EventDetails.jsx";
import App from "./App";
import { EventForm } from "./Form/EventForm.jsx";


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "",
        element: <Calendar />,
      },
      {
        path: "details/:event",
        element: <EventDetails />,
      },
      {
        path: "add-event",
        element: <EventForm />
      }
    ],
  },
];

export default routes;

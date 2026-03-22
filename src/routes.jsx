import { Calendar } from "./Calendar/Calendar.jsx";
import { EventDetails } from "./Details/EventDetails.jsx";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Calendar />,
      },
      {
        path: "details/:event",
        element: <EventDetails />,
      },
    ],
  },
];

export default routes;

import { Calendar } from "./Calendar/Calendar.jsx";
import App from "./App";


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Calendar /> },
    ],
  },
];

export default routes;

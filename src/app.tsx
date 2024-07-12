import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CreateTripPage } from "./pages/create-trip";
import { TripDetailPage } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage/>,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailPage/>,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}

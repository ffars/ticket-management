import { createBrowserRouter, Navigate } from "react-router-dom";
import SprintDetails from "./pages/SprintDetails/SprintDetails";
import Sprints from "./pages/Sprints/Sprints";
import Tickets from "./pages/Tickets/Tickets";
import { PATHS } from "./paths";

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Navigate to={PATHS.TICKETS} replace />
  },
  {
    path: PATHS.TICKETS,
    element: <Tickets />,
  },
  {
    path: PATHS.SPRINTS,
    element: <Sprints />,
  },
  {
    path: PATHS.SPRINT_DETAILS,
    element: <SprintDetails />
  }
])


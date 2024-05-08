import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Ticket from "./pages/Ticket";
import Event from "./pages/Event";

import NotFound from "./pages/NotFound";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rute-rute untuk halaman Home, Event, dan Ticket */}
        <Route index path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

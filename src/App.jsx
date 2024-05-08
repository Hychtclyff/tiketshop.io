import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Ticket from "./pages/Ticket";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Pengalihan rute untuk root URL */}
        <Route path="/" element={<Navigate to="/tiketshop.io" />} />
        <Route path="/event" element={<Navigate to="/tiketshop.io/event" />} />
        <Route
          path="/ticket"
          element={<Navigate to="/tiketshop.io/ticket" />}
        />

        {/* Rute-rute untuk halaman Home, Event, dan Ticket */}
        <Route path="/tiketshop.io" element={<Home />} />
        <Route path="/tiketshop.io/event" element={<Event />} />
        <Route path="/tiketshop.io/ticket" element={<Ticket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Ticket from "./pages/Ticket";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Pengalihan rute untuk root URL */}
        <Route path="/tiketshop.io" element={<Navigate to="/home" />} />
        {/* Rute-rute untuk halaman Home, Event, dan Ticket */}
        <Route path="/home" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

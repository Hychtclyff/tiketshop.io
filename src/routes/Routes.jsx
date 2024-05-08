import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Event from "../pages/Event";
import Ticket from "../pages/Ticket";
import NotFound from "../pages/NotFound";


export default function AppRotes() {
  return (
    <Router>
      <Routes>
        {/* Rute-rute untuk halaman Home, Event, dan Ticket */}
        <Route index path="/tiketshop.io" element={<Home />} />
        <Route path="/tiketshop.io/event" element={<Event />} />
        <Route path="/tiketshop.io/ticket" element={<Ticket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

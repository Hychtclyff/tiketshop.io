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

export default function App() {
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

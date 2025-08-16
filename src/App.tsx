import { Route, Router } from "@solidjs/router";
import Index from "./pages/Index.tsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Route path="/" component={Index} />
    </Router>
  );
};

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./utils/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => (
          <Route
            key={idx + 1}
            exact
            path={route.path}
            element={route.element}
          />
        ))}
        <Route exact path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

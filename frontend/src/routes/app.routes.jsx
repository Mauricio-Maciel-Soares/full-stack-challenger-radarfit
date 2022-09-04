import { Route, Routes } from "react-router-dom";
import { UserInterface } from "../screens/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserInterface />} />
    </Routes>
  );
}

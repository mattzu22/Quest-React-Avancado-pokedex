import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export function DefautlLayout() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}


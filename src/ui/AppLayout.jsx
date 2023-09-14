import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="container m-auto max-w-6xl px-4">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

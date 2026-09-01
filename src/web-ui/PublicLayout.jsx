import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      {/* Fixed Header */}
      <Header />

      {/* Dynamic Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Fixed Footer */}
      <Footer />

    </div>
  );
}
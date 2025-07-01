// src/components/User/LayoutUser.jsx

import { Outlet } from "react-router-dom";
import Header from "./HeaderUser";
import Footer from "../Footer";

export default function LayoutUser() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex w-full">
      
      <div id="main-content" className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

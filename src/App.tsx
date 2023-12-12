import { useState } from "react";
import "./App.css";
import Paginate from "./components/paginate";
import Navbar from "./components/navbar";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home/page";
import Virtual from "./pages/Virtual/page";
import Arsip from "./pages/Arsip/page";
import About from "./pages/Aboutus/page";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/virtual" element={<Virtual />} />
      <Route path="/arsip" element={<Arsip />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="*" element={<Dummy title={"Not Found"} />} />
    </Routes>
  );
}

function Dummy({ title }: { title: string }) {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {title}
    </div>
  );
}

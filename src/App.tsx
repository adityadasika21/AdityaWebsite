import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./views/home/index";

const Blog = lazy(() => import("./views/blog/index"));
const Project = lazy(() => import("./views/projects/index"));
const Error = lazy(() => import("./views/error"));

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
}

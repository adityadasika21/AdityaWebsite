import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "1080px",
          padding: "32px",
          width: "100%",
          justifyContent: "space-between",
          display: "flex",
          zIndex: 100,
          margin: "0 auto",
          overflow: "auto",
          fontSize: "20px",
        }}
      >
        {["/blog", "/projects"].map((path) => (
          <Link
            key={path}
            to={path}
            onClick={() => setActiveLink(path)}
            style={{ position: "relative", textDecoration: "none", color: "inherit" }}
          >
            <AnimatePresence mode="wait">
              {activeLink === path ? (
                <motion.span
                  key={path}
                  initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                  animate={{
                    x: 0,
                    y: "50vh", // Moves to center
                    scale: 2, // Enlarges the text
                    opacity: 1,
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
                >
                  {path === "/blog" ? "Learnings" : "Projects"}
                </motion.span>
              ) : (
                <motion.span
                  key={path + "-static"}
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {path === "/blog" ? "Learnings" : "Projects"}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </>
  );
}

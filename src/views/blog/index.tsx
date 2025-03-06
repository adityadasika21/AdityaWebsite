import { motion } from "framer-motion";

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Geist Mono, monospace",
        backgroundColor: "transparent",
        textAlign: "center",
      }}
    >
      <motion.h1
        layoutId="page-title"
        style={{ fontSize: "3.5rem", margin: "0.5rem 0", color : "white" }}
      >
        Blog
      </motion.h1>
      <p
        style={{
          fontSize: "1.75rem",
          margin: "1rem 0",
          maxWidth: "700px",
          lineHeight: "1.5",
          color : "white"
        }}
      >
        Sit tight while I figure out a very creative and good way to showcase my
        thoughts, learnings, and things. Gonna start soon.
      </p>
    </motion.div>
  );
}

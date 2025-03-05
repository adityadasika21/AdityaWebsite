import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactNode, useState } from "react";

interface HeaderProps {
    children : ReactNode
}
export default function Header({children} : HeaderProps) {
    const [active, setActive] = useState<string | null>(null);

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
                    color: "white",
                    mixBlendMode: "difference",
                }}
            >
                {["/blog", "/projects"].map((path) => (
                <motion.div
                    key={path}
                    initial={{ opacity: 1 }}
                    animate={
                    active === path
                        ? { y: "50vh", scale: 3, color: "#fff" }
                        : { scale: 1, y: 0 }
                    }
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    onClick={() => setActive(path)}
                >
                    <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
                    <motion.span layoutId="page-title">
                        {path.replace("/", "").toUpperCase()}
                    </motion.span>
                    </Link>
                </motion.div>
                ))}
            </div>
            <div>{children}</div>
        </>
    );
}

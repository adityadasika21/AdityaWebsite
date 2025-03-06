import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

export default function Projects() {
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const linkText = document.querySelector(`[data-link="${location.pathname}"]`);
        if (linkText) {
            setIsAnimating(true);

            const tl = gsap.timeline({
                defaults: { duration: 0.8, ease: "power2.out" },
                onComplete: () => setIsAnimating(false),
            });

            tl.to(linkText, {
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(2)",
                color: "#fff",
            })
            .to("body", { backgroundColor: "#343434", duration: 1 }, 0)
            .to("[data-barba='container']", { opacity: 1, duration: 0.8 }, "-=0.5");
        }
    }, [location]);

    return (
        <div
            data-barba="container"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                padding: "2rem",
                fontFamily: "Geist Mono, monospace",
                backgroundColor: isAnimating ? "#343434" : "#FBFFF1",
                textAlign: "center",
                opacity: 0, // Initially hidden for transition
            }}
        >
            <h1 style={{ fontSize: "3.5rem", margin: "0.5rem 0", color: 'white' }}>Projects</h1>
            <p
                style={{
                    fontSize: "1.75rem",
                    margin: "1rem 0",
                    maxWidth: "700px",
                    lineHeight: "1.5",
                }}
            >
                Sit tight while I figure out how to creatively upload and link my projects in ways that let you explore, interact with, and truly understand my work. I'm cooking up an interactive showcase where every project tells its own story. Stay tuned!
            </p>
            {/* A fun animated element to keep the page lively */}
            <div
                style={{
                    marginTop: "2rem",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    animation: "spin 2s linear infinite",
                }}
            ></div>
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

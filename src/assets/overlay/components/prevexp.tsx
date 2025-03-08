import { useMediaQuery } from "usehooks-ts";

export default function PreviousExperience() {
	const isSmallScreen = useMediaQuery("(max-width: 768px)");

    const resumeItems = [
        "Built a consignment distribution and invoicing system with POS support to handle sales transactions and automate invoice generation.",
        "Added product and store management, allowing CRUD operations based on location to plan delivery routes efficiently.",
        "Set up Firebase Authentication to enable branch-level inventory tracking and farm-specific data entry with role-based access.",
        "Developed a procurement system that tracks vendors, compares prices, and assists in ordering supplies.",
        "Created an accounting section for managing expenses, logging leaves, and tracking payroll.",
        "Added user management and permissions, allowing different roles to access specific parts of the web app.",
        "Built two server-side functions deployed on Firebase Cloud Functions, triggered via HTTP REST API calls to generate invoices and process user payslips, automating payroll management.",
        "Built a company website using React, Vite, Firebase, and Razorpay to display products and handle online payments.",
        "Used React Three Fiber to add interactive 3D elements to the storefront.",
        "Connected the website to the internal system for inventory tracking, order management, and delivery scheduling."
    ];

    return (
        <div style={{ margin: "0 auto",  }}>
            {/* Heading */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h2
                    style={{
                        color: "#000",
                        fontSize: isSmallScreen ? "36px" : "48px",
                        textTransform: "uppercase",
                        fontFamily: "Anta",
                        marginBottom: "20px",
                    }}
                >
                    Career
                </h2>

                {/* Company Details */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.05)",
                        padding: "12px 20px",
                        borderRadius: "8px",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "Geist Mono, monospace",
                            fontSize: isSmallScreen ? "14px" : "18px",
                            fontWeight: 600,
                            color: "#000",
                        }}
                    >
                        Blueleaves Farms
                    </span>
                    <span
                        style={{
                            fontSize: isSmallScreen ? "14px" : "18px",
                            fontWeight: 600,
                            color: "#000",
                        }}
                    >
                        Sept 2022 – Feb 2025
                    </span>
                </div>
            </div>

            {/* Resume Items */}
            <div
                style={{
                    backgroundColor: "rgba(251,255,241,0.5)",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    padding: "30px",
                }}
            >
                <ul style={{ listStyleType: "disc", paddingLeft: "8px" }}>
                    {resumeItems.map((item, index) => (
                        <li key={index} style={{ marginBottom: "14px", fontSize: isSmallScreen ? "14px" : "18px", lineHeight: "1.6" }}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

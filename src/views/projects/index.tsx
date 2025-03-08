import { FaFire, FaLayerGroup, FaReact } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";

export default function Projects() {
    const isSmallScreen = useMediaQuery("(max-width: 768px)");

    const projects = {
		BlueCradle: {
			description: "A web-application to write the consignments, products, stores, and more.",
			techStack: {
				front: { name: "React, Vite", icon: <FaReact /> },
				backend: { name: "Firebase, Redux", icon: <FaFire /> },
				ui: { name: "Material UI", icon: <FaLayerGroup /> },
			},
			type: "Company Project",
		},
		Website: {
			description: "A website for showcasing farm products & handling payments.",
			techStack: {
				front: { name: "React, Vite", icon: <FaReact /> },
				backend: { name: "Firebase, Redux, Three Fiber", icon: <FaFire /> },
				ui: { name: "Material UI", icon: <FaLayerGroup /> },
			},
			type: "Company Project",
		},
	};

    return (
        <>
            {/* Heading Section */}
            <div
                className="heading-div"
                style={{
                    textAlign: "center",
                    marginTop: isSmallScreen ? "0px" : "160px",
                }}
            >
                <h2
                    style={{
                        color: "#000",
                        fontSize: isSmallScreen ? "32px" : "44px",
                        textTransform: "uppercase",
                        fontFamily: "Anta",
                    }}
                >
                    Projects
                </h2>
            </div>

            <div
			style={{
				display: "grid",
				gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
				gap: "20px",
				margin: "20px 0",
			}}
		>
			{Object.entries(projects).map(([name, details]) => (
				<div
					key={name}
					style={{
						display: "flex",
						flexDirection: "column",
						border: "2px solid black",
						borderRadius: "20px",
						padding: "16px",
						backgroundColor: "rgba(251,255,241,0.5)",
						minHeight: "30vh",
						boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
					}}
				>
					{/* Project Name & Description */}
					<div style={{ flex: 1, borderRadius: "10px", padding: "16px" }}>
						<h1 style={{ fontSize: "28px", fontWeight: "bold" }}>{name}</h1>
						<p style={{ fontSize: "16px", marginTop: "10px" }}>{details.description}</p>
					</div>

					{/* Tech Stack with Icons */}
					<div style={{ flex: 1, borderRadius: "10px", padding: "16px" }}>
						<h2 style={{ fontSize: "22px", marginBottom: "10px" }}>Tech Stack</h2>
						{Object.entries(details.techStack).map(([key, value]) => (
							<p key={key} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px" }}>
								{value.icon} <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value.name}
							</p>
						))}
					</div>

					{/* Footer Section for Project Type */}
					<div
						style={{
							marginTop: "10px",
							padding: "10px",
							textAlign: "center",
							backgroundColor: "#000",
							color: "#fff",
							borderRadius: "10px",
							fontSize: "16px",
							fontWeight: "bold",
						}}
					>
						{details.type}
					</div>
				</div>
			))}
		</div>
        </>
    );
}

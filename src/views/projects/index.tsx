export default function Projects() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "2rem",
          fontFamily: "Geist Mono, monospace",
          backgroundColor: "#FBFFF1",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", margin: "0.5rem 0" }}>Projects</h1>
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
  
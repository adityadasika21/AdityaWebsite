export default function Blog() {
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
        <h1 style={{ fontSize: "3.5rem", margin: "0.5rem 0" }}>Blog</h1>
        <p
          style={{
            fontSize: "1.75rem",
            margin: "1rem 0",
            maxWidth: "700px",
            lineHeight: "1.5",
          }}
        >
          Sit tight while I figure out a very creative and good way to showcase my
          thoughts, learnings, and things. Gonna start soon.
        </p>
        {/* A fun animated element to add some personality */}
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
  
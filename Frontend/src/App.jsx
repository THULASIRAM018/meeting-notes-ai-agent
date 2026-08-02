import { useState } from "react";
import api from "./api";
import ResultCard from "./components/ResultCard";

function App() {
  const [transcript, setTranscript] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!transcript.trim()) {
      alert("Please enter meeting notes");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/analyze", {
        transcript,
      });

      setResult(response.data);
    } catch (error) {
      alert("Backend Error");
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#ff4d6d,#ff9e00,#ffe600,#4cc9f0,#4361ee)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          background: "rgba(255,255,255,0.96)",
          borderRadius: "25px",
          padding: "45px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
        }}
      >
        {/* Title */}

        <h1
          style={{
            textAlign: "center",
            color: "#4361ee",
            fontSize: "52px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          🧠 Meeting Notes AI Agent
        </h1>

        {/* Subtitle */}

        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: "22px",
            marginTop: "25px",
            marginBottom: "45px",
            lineHeight: "1.8",
          }}
        >
          AI Powered Meeting Summarizer & Action Item Extractor
        </p>

        {/* Text Area */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "35px",
          }}
        >
          <textarea
            rows={14}
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="📝 Paste your meeting transcript here..."
            style={{
              width: "90%",
              maxWidth: "950px",
              padding: "22px",
              borderRadius: "20px",
              border: "3px solid #4cc9f0",
              fontSize: "17px",
              fontFamily: "Segoe UI, sans-serif",
              resize: "vertical",
              outline: "none",
              boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
              transition: "0.3s",
            }}
          />
        </div>

        {/* Button */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={analyze}
            style={{
              background:
                "linear-gradient(90deg,#ff006e,#ff4d6d,#ff758f)",
              color: "white",
              border: "none",
              padding: "18px 55px",
              borderRadius: "50px",
              fontSize: "22px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 12px 25px rgba(255,0,110,0.45)",
              transition: "0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.06)";
              e.target.style.boxShadow =
                "0 15px 35px rgba(255,0,110,0.6)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow =
                "0 12px 25px rgba(255,0,110,0.45)";
            }}
          >
            {loading ? "⏳ Analyzing..." : "🚀 Analyze Meeting"}
          </button>
        </div>

        {/* Result */}

        {result && (
          <div
            style={{
              marginTop: "45px",
            }}
          >
            <ResultCard data={result} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
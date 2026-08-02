function Summary({ summary }) {
  return (
    <div
      style={{
        marginTop: 30,
        background: "#4cc9f0",
        padding: 20,
        borderRadius: 15,
        color: "white",
      }}
    >
      <h2>📄 Meeting Summary</h2>
      <p style={{ fontSize: 17 }}>{summary}</p>
    </div>
  );
}

export default Summary;
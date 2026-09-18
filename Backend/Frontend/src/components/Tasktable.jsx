function TaskTable({ tasks }) {
  return (
    <div style={{ marginTop: 30 }}>
      <h2 style={{ color: "#ff006e" }}>✅ Action Items</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          overflow: "hidden",
          borderRadius: 12,
        }}
      >
        <thead>
          <tr style={{ background: "#4361ee", color: "white" }}>
            <th style={{ padding: 15 }}>Task</th>
            <th>Owner</th>
            <th>Deadline</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr
              key={index}
              style={{
                textAlign: "center",
                background: index % 2 === 0 ? "#fff3cd" : "#fde2e4",
              }}
            >
              <td style={{ padding: 12 }}>{task.task}</td>
              <td>{task.owner}</td>
              <td>{task.deadline}</td>
              <td>
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: 20,
                    color: "white",
                    background:
                      task.priority === "High"
                        ? "#ff4d6d"
                        : task.priority === "Medium"
                        ? "#ffaa00"
                        : "#06d6a0",
                  }}
                >
                  {task.priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
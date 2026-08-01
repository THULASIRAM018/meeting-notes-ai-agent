function TaskTable({ tasks }) {

    return (

        <div
            style={{
                marginTop:20
            }}
        >

            <h2>Action Items</h2>

            <table
                border="1"
                cellPadding="10"
                style={{
                    width:"100%",
                    borderCollapse:"collapse"
                }}
            >

                <thead>

                    <tr>

                        <th>Task</th>

                        <th>Owner</th>

                        <th>Deadline</th>

                        <th>Priority</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        tasks.map((task,index)=>(

                            <tr key={index}>

                                <td>{task.task}</td>

                                <td>{task.owner}</td>

                                <td>{task.deadline}</td>

                                <td>{task.priority}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    )

}

export default TaskTable;
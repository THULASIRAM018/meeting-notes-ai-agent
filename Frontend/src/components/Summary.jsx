function Summary({ summary }) {

    return (

        <div
            style={{
                padding:20,
                background:"#ffffff",
                borderRadius:10,
                marginTop:20
            }}
        >

            <h2>Meeting Summary</h2>

            <p>{summary}</p>

        </div>

    )

}

export default Summary;
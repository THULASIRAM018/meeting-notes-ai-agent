import { useState } from "react";
import api from "./api";
import ResultCard from "./components/ResultCard";

function App() {

    const [transcript,setTranscript]=useState("");

    const [result,setResult]=useState(null);

    const [loading,setLoading]=useState(false);

    async function analyze(){

        if(transcript===""){

            alert("Enter meeting transcript");

            return;

        }

        setLoading(true);

        try{

            const response=await api.post("/analyze",{

                transcript:transcript

            });

            setResult(response.data);

        }

        catch(error){

            alert("Backend Error");

        }

        setLoading(false);

    }

    return(

        <div
            style={{
                maxWidth:900,
                margin:"40px auto",
                padding:20,
                fontFamily:"Arial"
            }}
        >

            <h1>Meeting Notes AI Agent</h1>

            <textarea

                rows="12"

                style={{
                    width:"100%",
                    padding:15,
                    fontSize:16
                }}

                placeholder="Paste Meeting Notes..."

                value={transcript}

                onChange={(e)=>setTranscript(e.target.value)}

            />

            <br/><br/>

            <button

                onClick={analyze}

                style={{
                    padding:"12px 30px",
                    fontSize:18,
                    cursor:"pointer"
                }}

            >

                {

                    loading ?

                    "Analyzing..."

                    :

                    "Analyze"

                }

            </button>

            <ResultCard data={result}/>

        </div>

    )

}

export default App;
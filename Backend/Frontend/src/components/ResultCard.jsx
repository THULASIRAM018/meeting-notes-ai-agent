import Summary from "./Summary";
import TaskTable from "./TaskTable";

function ResultCard({ data }) {

    if(!data){

        return null;

    }

    return(

        <>

            <Summary summary={data.summary}/>

            <TaskTable tasks={data.action_items}/>

        </>

    )

}

export default ResultCard;
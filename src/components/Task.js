import React from "react";

function Task(props) {
return( 
    props.Bum.map((e,i)=>{
    return (
        <div className="col md-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h3>{e.title}</h3>
                    <span className="badge badge-pill badge-danger ml-2">{e.priority}</span>
                </div>    
                <div className="card-body">
                    <p>{e.description}</p>
                    <p><mark>{e.responsable}</mark></p>
                </div>
            </div>
        </div>
         )
    }))
}

export default Task;
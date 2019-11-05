import React, {useState} from "react";

const TodoForm = ()=>{

    const{types, setTypes}= useState({
        type:"",
        description:"",
        responsable:"",
        priority:"low"
    });

    return(
        <div className="card">
            <form className="card-body">
                <div className="form-group">
                    <input type="text" name="title" class="form-control" placeholder="Title"/>
                </div>
                <div className="form-group">
                    <input type="text" name="description" class="form-control" placeholder="Description"/>
                </div>
                <div className="form-group">
                    <input type="text" name="responsable" class="form-control" placeholder="Responsable"/>
                </div>
                <div className="form-group">
                    <select name="priority" className="form-control">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
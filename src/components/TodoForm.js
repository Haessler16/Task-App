import React, { useState } from 'react';

const useInputValue = (initialValue)=>{
 const [value, setValue] = useState(initialValue)

 const onChange = e=> setValue(e.target.value)

 return {value, onChange}
}


const TodoForm = ( {onAddTodo} ) => {
	const title = useInputValue("")
	const description = useInputValue("")
	const responsable = useInputValue("")
	const priority = useInputValue("Low")

	const onSubmit=(e)=>{
		e.preventDefault()
		onAddTodo({
			title: title.value, 
			description: description.value, 
			responsable: responsable.value, 
			priority: priority.value
		})
	}
	// console.log({title, description, responsable, priority})
	return (
		<div className='card'>
			<form className='card-body' onSubmit={onSubmit}>
				<div className='form-group'>
					<input className='form-control' placeholder='Title' {...title}/>
				</div>
				<div className='form-group'>
					<input className='form-control' placeholder='Description' {...description}/>
				</div>
				<div className='form-group'>
					<input className='form-control' placeholder='Responsable' {...responsable}/>
				</div>
				<div className='form-group'>
					<select className='form-control' {...priority}>
						<option>High</option>
						<option>Medium</option>
						<option>Low</option>
					</select>
				</div>
				<div className='form-group'>
					<button type='submit' className='btn btn-primary'>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default TodoForm;

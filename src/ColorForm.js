import React, { useState } from "react";
import './ColorForm.css';

const ColorForm = ({createColor}) => {

    const INITIAL_STATE = {
        color: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const input = (e) => {
        e.preventDefault();
        createColor({...formData});
        setFormData(INITIAL_STATE);
    }

    return(
        <div>
            <form onSubmit={input}>
                <input
                onChange={handleChange}
                type='text'
                name='color'
                value={formData.color}
                id='color'
                placeholder='Color'/>
                <button id='newTodoBtn'>Add Color</button>
            </form>
        </div>
    )
}

export default ColorForm;
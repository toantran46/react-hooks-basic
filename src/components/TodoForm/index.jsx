import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit} = props;
    const [value, setValue] = useState('');

    function handleSubmit(e){
        setValue(e.target.value);
    }
    
    function handleFormSubmit(e){
        e.preventDefault();
        if(!onSubmit)  return;

        const formValues = {
            title: value,
        };
        onSubmit(formValues);

        setValue('');
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input 
            type="text" 
            value={value}
            onChange ={handleSubmit}
            >
            
            </input>
        </form>
    );
}

export default TodoForm;
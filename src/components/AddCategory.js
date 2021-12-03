import React , { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategorias })  => {
    const [inputValue, setInputValue] = useState('');
    const hadleInputChange = ( e )=>{
        setInputValue(e.target.value)
    }
    const hadleSubmit = ( e )=>{
        e.preventDefault();
        if(inputValue.trim().length > 2 ){
            setCategorias(cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={hadleSubmit}>
            <h2>Add Categoria</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={hadleInputChange}
            />
        </form>
    )
}

AddCategory.protoTypes={
    setCategorias: PropTypes.func.isRequired
}

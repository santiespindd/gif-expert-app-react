import React from 'react'
import { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('An anime')

    const handleInputChange = ( e ) =>{
        
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submit hecho');
    }
  return (
    
    <form onSubmit={ handleSubmit }>
      <input 
            type="text"
            value={ inputValue }
            onChange = {  handleInputChange }    
            
        />
    </form>
       
    
  )
}

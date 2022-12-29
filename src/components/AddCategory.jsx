import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('One Punch');
    
    const onInputChange = ( { target } ) => {
        setinputValue(target.value);
    }

    const onSubmitValue = (event) => {
        // .preventDefault(): Sirve que al momento de dar Enter en el formulario no se refresque la página y así no se pierda lo buscado
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        
        // Esta parte hace reiniciar el estado después de dar Enter
        setinputValue('');
    }

    return (
        // <form onSubmit={ (evento) => onSubmitValue(evento) }>
        <form onSubmit={ onSubmitValue }>
            <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            // onChange: Sirve para actualizar el input y va junto con la función onInputChange
            onChange={ onInputChange } />
        </form>
    )
}

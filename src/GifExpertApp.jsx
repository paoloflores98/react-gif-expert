// Se importa el hook useState
import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
    // No se pueden dar condicionales a los hooks, ya que va en contra de sus principios según React
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories(cat => [valor, ...cat]); // Es lo mismo que la línea anterior
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory
                onNewCategory = { value => onAddCategory(value) }
            />

            {/* Para React, en un listado se te pide un key por cada item y que tampoco se recomienda usar el índice como key. El key en GifGrid aunque no esté en el componente, para React ya lo detecta explícitamente */}
            { categories.map(category => ( 
                <GifGrid 
                    key={ category }
                    category={ category } 
                /> 
            ))}
        </>
    )
}

import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        //agregar  al arreglo evitando muctaciones
        //categories.push('Valorant'); no utilizar push lo mas que puedas
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]); //forma correcta
        //setCategories(cat => [...cat,'Valorant']);//otra forma correcta
    }

    return (
        <>
            <h1>GifExpert</h1>
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }

        </>
    )
}

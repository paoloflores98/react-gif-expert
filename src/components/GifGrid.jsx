import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    // Estos dos valores vienen de la desestructuración en el return de la función useFetchGifs.js
    const { images, isLoading } = useFetchGifs(category);
       
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map(( image ) => (
                        <GifItem 
                            key={ image.id }

                            // Esta es un técnica muy útil cuando hay muchas propiedades
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

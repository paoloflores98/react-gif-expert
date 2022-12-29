import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    // Este es otro hook que se debe de importar, no retorna promesas, solo funciones. Esto ayuda mucho para que no se rendericen todos los resultados que ya habíamos buscado y solo se renderice el que queremos buscar. En el segundo arg si se deja con llaves vacías el hook se va disparar una sola vez cuando se crea y se construye el componente
    useEffect(() => {
        getImages();
    }, [ ])

    return {
        images: images,
        isLoading: isLoading
    }
}

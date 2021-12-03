import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const  { loading } = useFetchGifs( category );

    
    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {loading ? 'Cargando...' : 'Data cargada'}
                {/* <li key={ category }> { category }</li> */}            
                {/* <o>
                    {
                        images.map(({id, title}) =>(
                            <li key={ id } >{ title }</li>
                        ))

                    }
                </o> */}
                {
                        // images.map((img) =>(
                        //     <GifGridItem 
                        //         key = { img.id }
                        //         { ...img }
                        //     />
                        // ))

                    }
            </div>        
        </>
        
    )
}

import React , { useState }from 'react'
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categorias =['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['One Punch'])
    // const handleAdd = ()=>{
    //     // setCategorias([...categorias, 'HunterXHunter'] );
    //     // Hunter primero
    //     // setCategorias(['HunterXHunter', ...categorias] );]
    //     // Otra forma
    //     setCategorias(cats => [...cats, 'HunterxHunter']);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />            
            <AddCategory setCategorias={ setCategorias }/>
            <ol>
                {
                    categorias.map( category => 
                        <GifGrid 
                            key = { category }
                            category={ category }
                        />
                    )
                }
            </ol>
            <hr/>
        </div>
    )
}

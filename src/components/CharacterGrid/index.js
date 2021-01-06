import React from 'react';
import CharacterItemGrid from '../CharacterItemGrid';
import Spinner from '../Spinner';

const CharacterGrid = ({items, isLoading})=>{
    
    return(
        isLoading ? (<Spinner/>):(<section className="cards">
            {items.map((item)=>(
                <CharacterItemGrid key={item.char_id} item={item}></CharacterItemGrid>
            ))}
        </section>)
    );
}

export default CharacterGrid;
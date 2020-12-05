import React, {useState} from 'react';


const Search = ()=>{

    const [text, setText] = useState('');

    return (<section className='search'>
        <form>
            <input 
            type="text" 
            className="form-control" 
            placeholder="Search characters"
            value={text}
            autoFocus
            onChange={(e)=>setText(e.target.value)}
            ></input>
        </form>
    </section>);
}

export default Search;
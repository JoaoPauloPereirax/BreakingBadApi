import React, {useState,useEffect} from 'react'
import './styles.css'

import axios from 'axios'

import CharacterGrid from '../../components/CharacterGrid';
import Search from '../../components/Search';

function Home() {

  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [query,setQuery] = useState('');

  useEffect(()=>{
    const fetchItems = async ()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data);
      //console.log(result.data);
      setIsLoading(false);
    }
    
    fetchItems();

  },[query]);

 return (
   <div className="container">
     <Search getQuery={(q)=> setQuery(q)}/>
     <CharacterGrid isLoading={isLoading} items={items}/>
   </div>
 );
}

export default Home;

import React, {useState,useEffect} from 'react'
import './styles.css'


import CharacterGrid from '../../components/CharacterGrid';
import Search from '../../components/Search';
import Header from '../../components/Header'
import Api from './../../services/Api'

function Characters() {

  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [query,setQuery] = useState('');

  useEffect(()=>{
    const fetchItems = async ()=>{
      const result = await Api.get(`?name=${query}`)
      setItems(result.data);
      console.log(result.data);
      setIsLoading(false);
    }
    
    fetchItems();

  },[query]);

 return (
   <div className="container">
     <Header/>
     <Search getQuery={(q)=> setQuery(q)}/>
     <CharacterGrid isLoading={isLoading} items={items}/>
   </div>
 );
}

export default Characters

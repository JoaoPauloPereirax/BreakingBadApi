import axios from 'axios';
import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

function App() {

  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchItems = async ()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      setItems(result.data);
      console.log(result.data);
      setIsLoading(false);
    }
    
    fetchItems();

  },[]);

 return (
   <div className="container">
     <Header/>
     <Search/>
     <CharacterGrid isLoading={isLoading} items={items}/>
     
   </div>
 );
}

export default App;

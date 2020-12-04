import axios from 'axios';
import React, {useState,useEffect} from 'react';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header';
//import CharacterGrid from './components/characters/CharacterGrid';

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
   </div>
 );
}

export default App;

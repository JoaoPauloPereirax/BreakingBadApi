import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import Api from '../../services/Api'
import CharacterItem from '../../components/CharacterItem'

function Character (){

  const params = useParams()
  const userId = params.id

  const [item,setItem] = useState({})

  useEffect(()=>{
    const fetchItem = async ()=>{
      const result = await Api.get(`/${userId}`)
      const character = result.data[0]
      setItem(character)
      //console.log(result.data)
      
    }

    fetchItem()

  },[userId])
    

  return (
  <section className="card">
    {
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
    }
  </section>
  )

}


export default Character
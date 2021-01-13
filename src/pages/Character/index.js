import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../services/Api";
import CharacterItem from "../../components/CharacterItem";

function Character() {
  const params = useParams();
  const userId = params.id;

  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const result = await Api.get(`/${userId}`);
      const characterApi = result.data[0];
      setCharacter(characterApi);
      console.log(result.data);
    };

    fetchItem();
  }, [userId]);

  return (
    <section className="card">
      <CharacterItem
        birthday={character.birthday}
        img={character.img}
        name={character.name}
        portrayed={character.portrayed}
        status={character.status}
        nickname={character.nickname}
      />
    </section>
  );
}

export default Character;

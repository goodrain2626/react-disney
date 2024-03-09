import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  background-color: ${(props) => props.theme.bgColor};
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  algin-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const CharacterList = styled.ul`
  list-style: none;
`;
const CharacterItem = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  max-width: 420px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.darkTextColor};
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  text-align: center;
`;

const Img = styled.img`
  margin-bottom: 10px;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

interface CharInterface {
  id: number;
  name: string;
  imageUrl: string;
}

export default function Character() {
  const [characters, setCharacters] = useState<CharInterface[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://disney_api.nomadcoders.workers.dev/characters"
        );
        const json = await response.json();
        setCharacters(json.slice(0, 100));
        console.log(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Disney Characters</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CharacterList>
          {characters?.map((char) => (
            <CharacterItem key={char.id}>
              <Link to={`/characters/${char.id}`} state={char.id}>
                <Img src={char.imageUrl} />
                {char.name}
              </Link>
            </CharacterItem>
          ))}
        </CharacterList>
      )}
    </Container>
  );
}

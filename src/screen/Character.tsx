import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCharacterList } from "../api";
const Container = styled.div`
  background-color: #474787;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
`;
const Title = styled.h2`
  font-size: 48px;
  color: #ffffff;
`;
const CharacterListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const CharacterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1e272e;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  a {
    text-decoration: none;
    color: white;
    // padding: 10px 15px;
    transition: color 0.1s ease-in;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      color: black;
    }
  }
  &:hover {
    background-color: white;
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

interface CharsInterface {
  id: number;
  name: string;
  imageUrl: string;
}

export default function Character() {
  const { isLoading, data } = useQuery<CharsInterface[]>(
    "allCharacters",
    fetchCharacterList
  );

  return (
    <Container>
      <Header>
        <Title>Disney Characters</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CharacterListBox>
          {data?.map((char) => (
            <CharacterItem key={char.id}>
              <Link to={`/characters/${char.id}`} state={{ id: char.id }}>
                <Img src={char.imageUrl} />
                {char.name}
              </Link>
            </CharacterItem>
          ))}
        </CharacterListBox>
      )}
    </Container>
  );
}

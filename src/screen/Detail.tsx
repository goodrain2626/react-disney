import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
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

const Loader = styled.span`
  text-align: center;
`;

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  return (
    <Container>
      <Header>
        <Title>{id}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

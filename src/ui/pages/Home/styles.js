import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  height: 100px;
`;

export const HeaderTitle = styled.h1`
  color: white;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`;

export const ArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

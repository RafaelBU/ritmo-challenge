import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 20px;
  background-color: #c2f0f0;
  border-radius: 20px;
  height: 400px;
  padding: 20px;
  width: 100%;
  overflow: auto;

  @media (min-width: 480px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

export const Title = styled.h3`
  color: black;
`;

export const Divider = styled.div`
  background-color: black;
  width: 100%;
  height: 1px;
`;

export const KeysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Summary = styled.p``;

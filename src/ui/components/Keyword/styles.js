import styled from "styled-components";

export const KeyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  background-color: #2575f8;
  border-radius: 20px;
  padding: 10px;
  width: 50px;
  height: 20px;
`;

export const KeyValue = styled.span`
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
`;

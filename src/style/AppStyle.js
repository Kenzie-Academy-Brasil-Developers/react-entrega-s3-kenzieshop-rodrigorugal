import styled from "styled-components";

export const FullScreen = styled.main`
  width: 100vw;
  height: 100vh;
  padding-top: 56px;
  background-color: #57ac08;
  background-image: linear-gradient(0deg, #57ac08 0%, #ffffff 100%);

  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
`;

export const BodyStyled = styled.div`
  height: 90vh;
  width: 100vw;

  overflow: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

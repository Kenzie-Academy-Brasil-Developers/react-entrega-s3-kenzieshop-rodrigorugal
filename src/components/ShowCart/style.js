import styled from "styled-components";

export const ShowFruitsCart = styled.div`
  height: 90%;
  width: 40%;
  margin: 10px 0;
  background-color: #ffffff;
  border-radius: 30px;

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListFruitsCart = styled.ul`
  max-height: 85%;
  width: 98%;

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FruitCart = styled.li`
  width: 90%;
  min-height: 20%;
  border-bottom: 1px solid black;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div.priceCart {
    width: 30%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;

export const BoxImage = styled.div`
  height: 12vh;
  width: 30%;
  background-image: url(${(prop) => prop.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const BoxAlignCartValue = styled.div`
  width: 100%;
  height: 10vh;
  margin-bottom: 5px;
  border-bottom: 0.5px solid #e3e3e3;

  background-color: #7dbd3d;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

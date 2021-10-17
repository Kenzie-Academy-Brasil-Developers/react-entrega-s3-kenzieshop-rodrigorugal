import styled from "styled-components";

export const ImgStyled = styled.img`
  width: 90%;
  height: 30%;
`;

export const ListFruits = styled.ul`
  height: 99%;
  width: 96%;

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Fruit = styled.li`
  background-color: #ffffff;
  background-image: url(${(prop) => prop.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  min-height: 330px;
  min-width: 260px;
  margin: 10px;
  padding: 10px 0;
  border-radius: 20px;
  border: 1.2px solid #ace573;
  transition: 1s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 8px 2px #56b803;
    transform: scale(110%);
  }

  p {
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  button {
    background-color: lightgreen;
    padding: 2px 9px;
    border-radius: 50%;
    border: none;
    font-size: 22px;
    text-align: center;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 8px 2px #56b803;
      transform: scale(110%);
    }
  }
`;

export const ShowFruits = styled.div`
  height: 90%;
  width: 51%;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 0 5px;
  margin-top: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

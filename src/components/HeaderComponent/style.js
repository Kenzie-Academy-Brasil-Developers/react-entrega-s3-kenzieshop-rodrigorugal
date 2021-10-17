import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #7dbd3d;
  width: 100%;
  height: ${(props) => props.height};

  position: fixed;
  top: 0;

  h1 {
    color: #f6f6f6;
  }

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
// verde claro #ace573
// verde forte #56b803

export const ShowQuantityCart = styled.div`
  height: 20px;
  width: 20px;
  text-align: center;
  background-color: red;
  border-radius: 20px;
  color: aliceblue;

  font-size: 16px;
  font-weight: 700;
`;

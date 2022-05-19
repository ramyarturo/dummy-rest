import styled from "styled-components"


const Button = styled.button`
  background-color: ${props => props.theme.colors.black};
  color: #fff;
  padding: 12px 25px;
  margin: 10px 15px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    opacity: 0.9;
  }
`



export default Button
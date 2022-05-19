import styled from "styled-components";

export const ResourceItems = styled.ul`
  display: flex;
  margin-top: 35px;
  max-width: 300px;
  flex-direction: column;
  gap: 20px;
`
export const ResourceItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: start;
  gap: 20px;
  & a {
    color: #2f8fe9;
    cursor: pointer;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 3px;
      bottom: -5px;
      left: 0;
      background-color: green;
      position: absolute;
      transform: scaleX(0);
      transform-origin: left;
      transition: 0.2s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`
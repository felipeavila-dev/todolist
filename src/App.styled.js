import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #0b1c1b;
  user-select: none;
`;

export const Header = styled.div`
`;

export const Title = styled.h1`
  color: #f2f2f2;
`;

export const TaskArea = styled.div`
  width: 70%;
  margin: 40px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #163835;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    color: #bababa;
    font-size: 17x;
    margin: 0 10px;
  }
`

export const TodoArea = styled.div`
  width: 50%;

  

  .task-item {
    background-color: rgba(20, 20, 20, 0.7);
    width: 100%;
    word-break: break-word;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: #d6d6d6;
  
    &.selected {
      border: 1px solid lightgreen;
    }

    &.task-done {
      text-decoration: line-through;
    }

    &:hover {
      border-radius: 5px;
      background-color:black;
    }
  }
`;

export const ControlArea = styled.div`
  button {
    margin: 40px 10px;
  }
`;
import styled from "styled-components";

export const ContainerForm = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    font-weight: 400;
    font-size: 1rem;

    background: #e7e9ee;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    background: var(--green);
    color: #FFF;
    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem; 
`;

interface RadioButtonProps {
  isActive: boolean;
  bgColor: 'green' | 'red';
}

const colors = {
  green: 'rgb(213, 245, 220)',
  red: 'rgb(245, 223, 224)',
}

export const RadioButton = styled.button<RadioButtonProps>`
  height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${({isActive, bgColor}) => isActive 
    ? colors[bgColor] 
    : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
      border-color: #aaa;
    }

    img {
      height: 20px;
      width: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
`;
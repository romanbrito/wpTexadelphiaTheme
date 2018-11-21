import styled, { css } from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex: 1 0 200px;
  
  @media screen and (min-width: 1150px) {
  width: unset;
  }
  `

export const MenuButton = styled.button`
  background-color: white;
  color: #c80000;
  border: 1px solid #c80000;
  border-radius: .3em;
  cursor: pointer;
  flex: 1 0 50%;
  
    ${props => props.directions && css`

    background: #c80000;
    color: white;
    flex: 1 0 100%;
  `};
  
  `
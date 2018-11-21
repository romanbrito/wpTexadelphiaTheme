import styled, { css } from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
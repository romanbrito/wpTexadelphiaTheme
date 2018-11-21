import styled from 'styled-components'

export const SearchUl = styled.ul`
  padding: 0;
  
  @media screen and (min-width: 640px) {
    padding: 1em;
    }
  `

export const Location = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  
  @media screen and (min-width: 1150px) {
    flex-wrap: nowrap;
    }
`

export const SearchContainer = styled.div`
  flex 2 0 320px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
`

export const InfoContainer = styled.div`
  line-height: 0;
  flex: 1 0 200px;
  `

export const SearchInput = styled.input`
  padding: .6em .8em;
  color: #999;
  background: #f7f7f7;
  border: 1px solid #e1e1e1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: .9em;
  text-decoration: none;
  line-height: normal;
  max-height: 3em;
  flex: 7 0 250px;
`

export const InputContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  `

export const SVG = styled.svg`
  height: 1.5em;
  `

export const SearchIcon = styled.span`
  flex: 1 0 1em;
  background: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  `
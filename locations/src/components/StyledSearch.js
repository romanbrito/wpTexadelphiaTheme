import styled from 'styled-components'

export const Location = styled.li`
  list-style: none;
`

export const SearchContainer = styled.div`
  flex 1 0 320px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
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
  width: 100%;
`
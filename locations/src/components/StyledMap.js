import styled from 'styled-components'

export const LocationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const MapContainer = styled.div`
  height: 60vh;
  flex: 7 0 320px;
  @media screen and (min-width: 641px) {
    height: 100vh;
    }
`

export const MapElement = styled.div`
  height: 100%;
  `
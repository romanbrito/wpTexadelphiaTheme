import styled from 'styled-components'

export const LocationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const MapContainer = styled.div`
  height: 50vh;
  flex: 5 0 320px;
  @media screen and (min-width: 640px) {
    height: 100vh;
    }
`

export const MapElement = styled.div`
  height: 100%;
  `
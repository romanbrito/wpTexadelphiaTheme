import React from 'react'
import {destination} from '../utilities/utilities'
import {MenuContainer, MenuButton} from './StyledMenus'

const Menus = ({list}) =>
  <MenuContainer>
    <MenuButton>Menu</MenuButton>
    <MenuButton>Catering Menu</MenuButton>
    <MenuButton directions
                onClick={e => window.open(destination(list.address, list.city, list.state, list.zip))}>
      Directions
    </MenuButton>
  </MenuContainer>

export default Menus
import React from 'react'
import {destination} from '../utilities/utilities'
import {MenuContainer, MenuButton} from './StyledMenus'

const Menus = props =>
  <MenuContainer>
    <MenuButton>Menu</MenuButton>
    <MenuButton>Catering Menu</MenuButton>
    <MenuButton directions>Directions</MenuButton>
  </MenuContainer>

export default Menus
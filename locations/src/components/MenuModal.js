import React from 'react'
import {Modal} from './StyledMenuModal'

const MenuModal = ({list, menuType}) =>
  <Modal>
    {list.name} {menuType}
  </Modal>

export default MenuModal
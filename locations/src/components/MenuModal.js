import React from 'react'
import {ModalContainer, Modal} from './StyledMenuModal'

const MenuModal = ({list, menuType, displayMenu}) =>
  <ModalContainer>
    <Modal>
      {list.name} {menuType}
      <button
        onClick={displayMenu}
      >close</button>
    </Modal>
  </ModalContainer>

export default MenuModal
import React from 'react'
import {ModalContainer, Modal, ModalHeader, ModalBody} from './StyledMenuModal'

const MenuModal = ({list, menuType, displayMenu}) =>
  <ModalContainer>
    <Modal>
      <ModalHeader>
        Modal Header {list.name} {menuType}
        <button
          onClick={displayMenu}
        >close
        </button>
      </ModalHeader>
      <ModalBody>
        {window.innerWidth > 900 ?
          menuType === 'house' ?
            <object
              data={'https://www.texadelphia.com/wp-content/themes/texsite/pdf/House_' + list.label + '.pdf'}
              type="application/pdf" width="100%" height="100%">
              Your browser does not support objects
            </object>
            :
            <object
              data={'https://www.texadelphia.com/wp-content/themes/texsite/pdf/Catering_' + list.label + '.pdf'}
              type="application/pdf" width="100%" height="100%">
              Your browser does not support objects
            </object>
          :
          <div>small</div>
        }
      </ModalBody>
    </Modal>
  </ModalContainer>

export default MenuModal
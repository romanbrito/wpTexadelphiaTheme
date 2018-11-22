import React from 'react'
import {ModalContainer, Modal, ModalHeader, ModalBody, CloseButton, ModalH1, ModalH2} from './StyledMenuModal'

const MenuModal = ({list, menuType, displayMenu}) =>
  <ModalContainer>
    <Modal>
      <ModalHeader>
        <ModalH2>{menuType} Menu</ModalH2>
        <ModalH1>{list.name}</ModalH1>
        <CloseButton
          onClick={displayMenu}
        >close
        </CloseButton>
      </ModalHeader>
      <ModalBody>
        {window.innerWidth > 900 ?
          menuType === 'House' ?
            <object
              data={'https://www.texadelphia.com/wp-content/themes/texsite/pdf/House_' + list.label + '.pdf'}
              type="application/pdf" width="100%" height="100%">

              {/*Your browser does not support objects*/}
              {list.houseMenuUrl.map(url =>
              <img key={url} src={'https://www.texadelphia.com/wp-content/themes/texsite/images/' + url + '.jpg'} alt="menu"
                   width="100%"/>)}

            </object>
            :
            <object
              data={'https://www.texadelphia.com/wp-content/themes/texsite/pdf/Catering_' + list.label + '.pdf'}
              type="application/pdf" width="100%" height="100%">

              {/*Your browser does not support objects*/}
              {list.cateringMenuUrl.map(url =>
                <img key={url} src={'https://www.texadelphia.com/wp-content/themes/texsite/images/' + url + '.jpg'} alt="menu"
                     width="100%"/>)}
            </object>
          :
          menuType === 'House' ?
            list.houseMenuUrl.map(url =>
              <img key={url} src={'https://www.texadelphia.com/wp-content/themes/texsite/images/' + url + '.jpg'} alt="menu"
                   width="100%"/>)
            :
            list.cateringMenuUrl.map(url =>
              <img key={url} src={'https://www.texadelphia.com/wp-content/themes/texsite/images/' + url + '.jpg'} alt="menu"
                   width="100%"/>)
        }
      </ModalBody>
    </Modal>
  </ModalContainer>

export default MenuModal
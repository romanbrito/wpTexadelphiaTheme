import styled, {css} from 'styled-components'

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .8);
  overflow: hidden;
  `

export const Modal = styled.div`
  width: 80%;
  height: 80%;
  box-sizing: border-box;
  margin: 5% auto;
  padding: 5% 0;
  background: white;
  `

export const ModalHeader = styled.div`
  width: 100%;
  `
export const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  `

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
  height: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  background: white;
  `

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  `
export const ModalBody = styled.div`
  width: 100%;
  height: 80%;
  `

export const CloseButton = styled.button`
  align-self: flex-end;
`

export const ModalH1 = styled.h1`
  margin: 0;
  `
export const ModalH2 = styled.h2`
  margin-top: 0;
  `

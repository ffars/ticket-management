import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const ModalContent = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  background: white;
  width: 350px;
`

export const ModalHeader = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 10px 0;
`

export const CloseBtn = styled.button`
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  font-weight: bold;
  background: transparent;
  cursor: pointer;
`

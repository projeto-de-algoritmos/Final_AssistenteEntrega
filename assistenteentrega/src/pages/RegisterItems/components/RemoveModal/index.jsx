import React, { useState } from 'react';
import ReactModal from 'react-modal';
import {
  Container, 
  Header, 
  Content, 
  Button,
  FormContent,
  Label,
  InputText
} from './styles';
import { FiX } from 'react-icons/fi'
import { AddButton } from '../../../../components/baseComponents';
import { remover } from '../../../../store/reducers/estoque';
import { useDispatch } from 'react-redux';
// import { Container } from './styles';

function RemoveItemModal(props) {
  const [id, setId] = useState(-1)

  const { isOpen, onRequestClose } = props
  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch(remover(id))
  }

  const clearFields = () => {
    setId('')
  }

  const handleConfirm = () => {
    removeItem()
    clearFields()
    onRequestClose()
  }

  return (
    <ReactModal
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: 450,
          height: 300,
          borderRadius: 8,
        }
      }}
      contentLabel="Adicionar item"
      isOpen={isOpen} 
      onRequestClose={() => {
        clearFields() 
        onRequestClose()
      }}>
      <Container>
        <Header>
          <Button onClick={onRequestClose}>
            <FiX />
          </Button>
        </Header>
        <Content>
          <FormContent>
            {/* Dropdown */}
            {/* <InputText value={nome} onChange={(event) => setNome(event.target.value)} label="Nome" type="text"/> */}
          </FormContent>
          <AddButton onClick={handleConfirm}>Confirmar</AddButton>
        </Content>
      </Container>
    </ReactModal>
  )
}

export default RemoveItemModal;
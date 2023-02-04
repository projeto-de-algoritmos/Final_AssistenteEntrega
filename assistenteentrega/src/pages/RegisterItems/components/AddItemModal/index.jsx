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
import CurrencyInput from '../../../../components/CurrencyInput'
import { AddButton } from '../../../../components/baseComponents';
// import { Container } from './styles';

function AddItemModal(props) {
  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  const [peso, setPeso] = useState(0)
  const [quantidade, setQuantidade] = useState(0)

  const { isOpen, onRequestClose, onClick } = props

  const clearFields = () => {
    setNome('')
    setValor('')
    setPeso(0)
    setQuantidade(0)
  }

  const handleConfirm = () => {
    onClick({
      nome,
      valor,
      peso,
      quantidade
    })
    clearFields()
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
          height: 500,
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
            <InputText value={nome} onChange={(event) => setNome(event.target.value)} label="Nome" type="text"/>
            <Label>Valor</Label>
            <CurrencyInput value={valor} onChange={(event) => setValor(event.target.value)} placeholder="R$0.00" type="text" />
            <InputText value={peso} onChange={(event) => setPeso(event.target.value)} label="Peso" type="number"/>
            <InputText value={quantidade} onChange={(event) => setQuantidade(event.target.value)} label="Quantidade" type="number"/>
          </FormContent>
          <AddButton onClick={handleConfirm}>Confirmar</AddButton>
        </Content>
      </Container>
    </ReactModal>
  )
}

export default AddItemModal;
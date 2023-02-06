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
import { useSelector } from 'react-redux';
import JSON_MAP from '../../../../mock/map.json'
// import { Container } from './styles';

function AddItemModal(props) {
  const estoque = useSelector(state => state.estoque)
  
  const [items, setItems] = useState([])
  const [local, setLocal] = useState('')

  const { isOpen, onRequestClose, onClick } = props

  const selectStyle = {
    padding: "10px", 
    backgroundColor: "#edf2ff", 
    border: "none"
  }

  const clearFields = () => {
    setItems([])
    setLocal('')
  }

  const handleConfirm = () => {
    onClick({
      items,
      local,
    })
    clearFields()
  }

  var cidades = []
  for (var cidade of JSON_MAP.nodes) {
    if(cidade.id != "BSB"){
      cidades.push(cidade)
    }
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
            <h2>Destino:</h2>
            {/*Colocar dropdown local */}
            <select style={selectStyle}>
              {cidades.map((item) => (
                <option value={item}>{item.label}</option>
              ))}
            </select>
            <br></br>
            <h2>Itens:</h2>
            {/*Colocar dropdown estoque */}
            <select style={selectStyle}>
              {estoque?.items.map((item) => (
                <option value={item}>{item.nome}</option>
              ))}
            </select>
            
          </FormContent>
          <AddButton onClick={handleConfirm}>Confirmar</AddButton>
        </Content>
      </Container>
    </ReactModal>
  )
}

export default AddItemModal;
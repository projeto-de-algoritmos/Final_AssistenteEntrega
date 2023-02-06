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
import QuantityPicker from '../../../../components/quantitySelector/QuantityPicker';
// import { Container } from './styles';

function AddItemModal(props) {
  const estoque = useSelector(state => state.estoque)
  var listaItems = []
  for(var i of estoque.items){
    var obj = JSON.parse(JSON.stringify(i))
    obj["quantidade"] = 0
    listaItems.push(obj)
  }
  
  const [items, setItems] = useState(listaItems)
  const [local, setLocal] = useState('Rio de Janeiro')

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
    var carga = 0 
    for (var item of listaItems){
      carga = carga + (item.peso * item.quantidade)
    }
    onClick({
      listaItems,
      local,
      carga
    })
    clearFields()
  }

  var cidades = []
  for (var cidade of JSON_MAP.nodes) {
    if(cidade.id != "BSB"){
      cidades.push(cidade)
    }
  }

  const handleChange = (event, id) =>{
    console.log(event, id)
    for (var i in listaItems){
      if (listaItems[i].id === id){
        listaItems[i].quantidade = event
        break
      }
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
            <select style={selectStyle} onChange={(event) => setLocal(event.target.value)}>
              {cidades.map((item) => (
                <option value={item.sigla}>{item.label}</option>
              ))}
            </select>
            <br></br>
            <h3>Adicionar Itens:</h3>
            {estoque?.items.map((item) => (
              <div>
                <Label>{item.nome + ' | Peso (Kg): ' + item.peso + ' | Valor (R$): ' + item.valor} </Label> 
                <br></br>
                <QuantityPicker min = {0} max = {500} onChange={v => handleChange(v, item.id)}/>
                <br></br>
                <br></br>
              </div>
            ))}
          <div>
            <AddButton onClick={handleConfirm}>Confirmar</AddButton>
          </div>
          </FormContent>
        </Content>
      </Container>

    </ReactModal>
  )
}

export default AddItemModal;
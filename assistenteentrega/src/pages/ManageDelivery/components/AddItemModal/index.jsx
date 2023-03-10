import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import {
  Container, 
  Header, 
  Content, 
  Button,
  FormContent,
  Label,
} from './styles';
import { FiX } from 'react-icons/fi'
import { AddButton } from '../../../../components/baseComponents';
import { useSelector } from 'react-redux';
import JSON_MAP from '../../../../mock/map.json'
import QuantityPicker from '../../../../components/quantitySelector/QuantityPicker';
// import { Container } from './styles';

function AddItemModal(props) {
  const estoque = useSelector(state => state.estoque)
  const [items, setItems] = useState([])
  const [local, setLocal] = useState('RJ')
  const [cidades, setCidades] = useState([])

  const { isOpen, onRequestClose, onClick } = props

  const selectStyle = {
    padding: "10px", 
    backgroundColor: "#edf2ff", 
    border: "none"
  }

  useEffect(() => {
    var listaItems = []
    for(var i of estoque.items){
      var obj = JSON.parse(JSON.stringify(i))
      obj["quantidade"] = 0
      listaItems.push(obj)
    }
    setItems(listaItems)

    var cidades = []
    for (var cidade of JSON_MAP.nodes) {
      if(cidade.id !== "BSB"){
        cidades.push(cidade)
      }
    }

    setCidades(cidades)
  }, [])

  const clearFields = () => {
    setItems([])
    setLocal('RJ')
  }

  const handleConfirm = () => {
    var carga = 0 
    var valor = 0 
    for (var item of items){
      carga = carga + (item.peso * item.quantidade)
      valor = valor + (item.valor * item.quantidade)
    }

    onClick({
      items,
      endereco: local,
      peso: carga,
      valor
    })


    clearFields()
  }
  
  const handleChange = (event, id) =>{
    console.log(event, id)
    for (var i in items){
      if (items[i].id === id){
        items[i].quantidade = event
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
                <option value={item.id}>{item.label}</option>
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
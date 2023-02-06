import React, { useState } from 'react';
import ReactModal from 'react-modal';
import {
  Container, 
  Header, 
  Content, 
  Button,
} from './styles';
import { FiX } from 'react-icons/fi'
//import { AddButton } from '../../../../components/baseComponents';
import knapsack from '../../../../utils/knapsack';
import Spreadsheet from './Spreadsheet'
import SpreadSheetItems from './SpreadsheetItems';
// import { Container } from './styles';

function CreateRouteModal(props) {
  const { isOpen: isOpenRoute, onRequestClose, onClick, entregas } = props

  const max = 10
  const resp = knapsack(entregas, max)

  function getItems() {
    var items = []
    for (var entr of resp){
      //items.push(entr)
      for (var item of entr.items){
        var obj = JSON.parse(JSON.stringify(item));
        obj["entrID"] = entr.id;
        items.push(obj);
      }
    }

    return items;
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
          width: 900,
          height: 500,
          borderRadius: 8,
        }
      }}
      contentLabel="Gerar Rota"
      isOpen={isOpenRoute} 
      onRequestClose={() => {
        onRequestClose()
      }}>
      <Container>
        <Header>
          <Button onClick={onRequestClose}>
            <FiX />
          </Button>
        </Header>
        <Content>
          <h1>Algoritmo knapsack</h1>
          <br></br>
          <span>Utilizando o algoritmo de knapsack com peso máximo {max}, a escolha ideal de entregas é:</span>
          <br></br>
          <div>
            {Spreadsheet(resp)}
          </div>
          <br></br>
          <span>Carregando os itens: </span>
          <br></br>
          <div>
            {SpreadSheetItems(getItems())}
          </div>
          {/* {<AddButton onClick= {() => console.log(getItems())}>Criar</AddButton>} */}
        </Content>
      </Container>
    </ReactModal>
  )
}

export default CreateRouteModal;
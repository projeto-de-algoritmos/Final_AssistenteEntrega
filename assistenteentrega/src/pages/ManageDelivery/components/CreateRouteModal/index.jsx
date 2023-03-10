import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import {
  Container, 
  Header, 
  Content, 
  Button,
} from './styles';
import { FiX } from 'react-icons/fi'
import { AddButton } from '../../../../components/baseComponents';
import knapsack from '../../../../utils/knapsack';
import Spreadsheet from './Spreadsheet'
import SpreadSheetItems from './SpreadsheetItems';
import RouteSteps from './RouteSteps';
import { useDispatch, useSelector } from 'react-redux';
import { finalizarEntrega } from '../../../../store/reducers/delivery';
// import { Container } from './styles';

function CreateRouteModal(props) {
  const [knapsackItems, setKnapsackItems] = useState([]);
  const deliverys = useSelector(state => state.delivery.entregas)
  const dispatch = useDispatch()
  const { isOpen: isOpenRoute, onRequestClose, onClick, entregas } = props

  const max = 400
  const resp = knapsack(entregas, max)

  useEffect(() => {
    setKnapsackItems(knapsack(entregas, max))
  }, [])

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
          <div>
            <h2>Algoritmo knapsack</h2>
            <br></br>
            <span>Utilizando o algoritmo de knapsack com peso m??ximo {max}, a escolha ideal de entregas ??:</span>
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
          </div>
          <br></br>
          <div>
            <h2>Algoritmo de Dijkstra</h2>
            <br></br>
            <span>Para a realiza????o das entregas selecionadas, a rota a ser seguida deve ser:</span>
            <br></br>
            <div>
              <RouteSteps items={knapsackItems}/>
            </div>
            <br></br>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 80
            }}>
              <AddButton onClick={() => {
                for(var item of knapsackItems){
                  dispatch(finalizarEntrega(item.id))
                }
                onRequestClose()
              }}>
                Finalizar entrega
              </AddButton>
            </div>
          </div>
        </Content>
      </Container>
    </ReactModal>
  )
}

export default CreateRouteModal;
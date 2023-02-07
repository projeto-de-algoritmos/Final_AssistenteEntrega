import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { AddButton, ButtonContainer, Container,Content } from './styles';
import AddItemModal from './components/AddItemModal';
import Spreadsheet from './components/Spreadsheet';
import { useSelector, useDispatch } from 'react-redux';
import CreateRouteModal from './components/CreateRouteModal';
import { adicionarEntrega } from '../../store/reducers/delivery';

function ManageDelivery() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenRoute, setIsOpenRoute] = useState(false)
  const delivery = useSelector(state => state.delivery.entregas)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(delivery)
  }, [])

  const addEntrega = (itens) => {
    //itens.items = itens.items.filter(item => item.quantidade !== 0)
    console.log(itens)

    dispatch(adicionarEntrega(itens))
    
    setIsOpen(false)
  }

  return (
    <Container>
      <Header />
      <Content>
        {delivery?.length > 0 && <Spreadsheet/>}
        <ButtonContainer>
          <AddButton onClick={() => setIsOpen(true)}>
            Registrar entrega
          </AddButton>
          {/* {deliverys.length > 0 && <RemoveButton onClick={() => setIsOpenRemove(true)}>
            Finalizar entrega
          </RemoveButton>} */}
          <AddButton onClick={() => setIsOpenRoute(true)}>
            Criar Rota
          </AddButton>
        </ButtonContainer>
        <AddItemModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} onClick={addEntrega}/>
        <CreateRouteModal isOpen={isOpenRoute} onRequestClose={() => setIsOpenRoute(false)} onClick={() => {}} entregas={delivery}/>
        {/* 
        <RemoveItemModal isOpen={isOpenRemove} onRequestClose={() => setIsOpenRemove(false)} /> */}
      </Content>
    </Container>
  )
}

export default ManageDelivery;
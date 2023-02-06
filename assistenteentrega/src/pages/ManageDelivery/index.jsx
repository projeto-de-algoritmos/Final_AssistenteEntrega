import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { AddButton, ButtonContainer, Container,Content } from './styles';
import AddItemModal from './components/AddItemModal';
import Spreadsheet from './components/Spreadsheet';
import { useSelector } from 'react-redux';
import CreateRouteModal from './components/CreateRouteModal';

function ManageDelivery() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenRoute, setIsOpenRoute] = useState(false)
  const delivery = useSelector(state => state.delivery.entregas)

  useEffect(() => {
    console.log(delivery)
  }, [])

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
        <AddItemModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} onClick={() => {}}/>
        <CreateRouteModal isOpen={isOpenRoute} onRequestClose={() => setIsOpenRoute(false)} onClick={() => {}} entregas={delivery}/>
        {/* 
        <RemoveItemModal isOpen={isOpenRemove} onRequestClose={() => setIsOpenRemove(false)} /> */}
      </Content>
    </Container>
  )
}

export default ManageDelivery;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { adicionar, remover } from '../../store/reducers/estoque';
import AddItemModal from './components/AddItemModal';
import RemoveItemModal from './components/RemoveModal';
import Spreadsheet from './components/Spreadsheet';

import { AddButton, ButtonContainer, Container,Content, RemoveButton } from './styles';

function RegisterItems() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenRemove, setIsOpenRemove] = useState(false)
  const items = useSelector(state => state.estoque.items)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(items)
  }, [items])

  const addItem = (item) => {
    console.log(item)

    let hasElement = false
    
    if (items.length > 0 ){
      items.forEach((elem) => {
        if (item.nome === elem.nome){
          hasElement = true
          return
        }
      })
    }

    if (!hasElement && item.nome.trim() !== '' && item.valor !== '' && item.quantidade !== '' && item.peso !== ''){
      item["id"] = items.length + 1
      dispatch(adicionar(item))
    }
    setIsOpen(false)
  }

  return (
    <Container>
      <Header />
      <Content>
        {items?.length > 0 && <Spreadsheet/>}
        <ButtonContainer>
          <AddButton onClick={() => setIsOpen(true)}>
            Adicionar item
          </AddButton>
          {items.length > 0 && <RemoveButton onClick={() => setIsOpenRemove(true)}>
            Remover item
          </RemoveButton>}
        </ButtonContainer>
        <AddItemModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} onClick={addItem}/>
        <RemoveItemModal isOpen={isOpenRemove} onRequestClose={() => setIsOpenRemove(false)} />
      </Content>
    </Container>
  );
}

export default RegisterItems;
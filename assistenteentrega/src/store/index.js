import { configureStore } from '@reduxjs/toolkit'
import EstoqueReducer from './reducers/estoque'
import GrafoReducer from './reducers/graphs'
import CarrinhoReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    estoque: EstoqueReducer,
    grafos: GrafoReducer,
    carrinho: CarrinhoReducer
  },
})
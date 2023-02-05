import { configureStore } from '@reduxjs/toolkit'
import EstoqueReducer from './reducers/estoque'
import GrafoReducer from './reducers/graphs'
import DeliveryReducer from './reducers/delivery'

export const store = configureStore({
  reducer: {
    estoque: EstoqueReducer,
    grafos: GrafoReducer,
    delivery: DeliveryReducer
  },
})
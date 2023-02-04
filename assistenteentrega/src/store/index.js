import { configureStore } from '@reduxjs/toolkit'
import EstoqueReducer from './reducers/estoque'

export const store = configureStore({
  reducer: {
    estoque: EstoqueReducer
  },
})
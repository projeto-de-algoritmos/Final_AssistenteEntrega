import { createSlice } from '@reduxjs/toolkit'
import JSON_ESTOQUE from '../../mock/estoque.json'

const initialState = {
  items: []
}

export const estoqueReducer = createSlice({
  name: 'estoque',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      state.items.push(action.payload)
    },
    remover: (state, action) => {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      state.items = newItems
    },
    populateEstoque: (state, action) => {
      const estoque = JSON_ESTOQUE
      state.items = estoque.items
    }
  },
})

// Action creators are generated for each case reducer function
export const { adicionar, remover, populateEstoque } = estoqueReducer.actions

export default estoqueReducer.reducer
import { createSlice } from '@reduxjs/toolkit'

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
      const newItems = state.items.filter((item) => item.nome !== action.payload)
      state.items = newItems
    },
  },
})

// Action creators are generated for each case reducer function
export const { adicionar, remover } = estoqueReducer.actions

export default estoqueReducer.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cartReducer = createSlice({
  name: 'estoque',
  initialState,
  reducers: {
    adicionarItemCarrinho: (state, action) => {
      let index = state.items.find(action.payload)
      if (index < 0) {
        state.items[index].quantidade++
      } else {
        state.items.push(action.payload)
      }
    },
    atualizarItemCarrinho: (state, action) => {
      let idx = -1;
      state.items.map((item, index) => {
        if (item.nome === action.payload.nome){
          idx = index
          return;
        }
      })

      if (idx < 0) {
        state.items[idx] = action.payload
      }
    },
    removerItemCarrinho: (state, action) => {
      const newItems = state.items.filter((item) => item.nome !== action.payload)
      state.items = newItems
    },
  },
})

// Action creators are generated for each case reducer function
export const { adicionarItemCarrinho, atualizarItemCarrinho, removerItemCarrinho } = cartReducer.actions

export default cartReducer.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entregas: [],
}

export const deliveryReducer = createSlice({
  name: 'estoque',
  initialState,
  reducers: {
    adicionarEntrega: (state, action) => {
      let hasElement = false

      state.entregas.forEach((item) => {
        if (item.id === action.payload.id){
          hasElement = true
          return
        }
      })

      if(!hasElement)
        state.entregas.push(action.payload)
        
    },
    finalizarEntrega: (state, action) => {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      state.items = newItems
    },
  },
})

// Action creators are generated for each case reducer function
export const { adicionarItemCarrinho, atualizarItemCarrinho, removerItemCarrinho } = deliveryReducer.actions

export default deliveryReducer.reducer
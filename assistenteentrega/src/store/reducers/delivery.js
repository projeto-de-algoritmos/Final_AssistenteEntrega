import { createSlice } from '@reduxjs/toolkit'
import JSON_DELIVERY from '../../mock/entregas.json'

const initialState = {
  entregas: [],
}

export const deliveryReducer = createSlice({
  name: 'entrega',
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
    populateEntrega: (state, action) => {
      const { entregas } = JSON_DELIVERY
      state.entregas = entregas
    }
  },
})

// Action creators are generated for each case reducer function
export const { adicionarEntrega, finalizarEntrega, populateEntrega } = deliveryReducer.actions

export default deliveryReducer.reducer
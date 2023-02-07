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
      action.payload.id = state.entregas.length + 1   
      
      state.entregas.push(action.payload)
      console.log(state.entregas)  
    },
    finalizarEntrega: (state, action) => {
      const newItems = state.entregas.filter((item) => item.id !== action.payload)
      state.entregas = newItems
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
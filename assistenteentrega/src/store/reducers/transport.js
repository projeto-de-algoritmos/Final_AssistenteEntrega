import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entregas: [],
  limite: 500,
}

export const transportReducer = createSlice({
  name: 'transporte',
  initialState,
  reducers: {
    adicionarEntregasAFazer: (state, action) => {
      let hasElement = false

      state.entregas.forEach((item) => {
        if (item.id !== action.payload.id)
          hasElement = true
          return 
      })

      if (!hasElement)
        state.entregas.push(action.payload)

    },
    finalizarEntrega: (state, action) => {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      state.items = newItems
    },
  },
})

// Action creators are generated for each case reducer function
export const { adicionarEntregasAFazer, finalizarEntrega } = transportReducer.actions

export default transportReducer.reducer
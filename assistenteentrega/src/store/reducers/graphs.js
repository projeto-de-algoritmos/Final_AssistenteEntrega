import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nodes: [],
  edges: []
}

export const grafoReducer = createSlice({
  name: 'grafo',
  initialState,
  reducers: {
    start: (state, action) => {
      state.nodes.push(action.payload.nodes)
      state.edges.push(action.payload.edges)
    },
  },
})

// Action creators are generated for each case reducer function
export const { start } = grafoReducer.actions

export default grafoReducer.reducer
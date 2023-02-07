import { createSlice } from '@reduxjs/toolkit'
import JSON_MAP from '../../mock/map.json'

const initialState = {
  nodes: [],
  edges: []
}

export const grafoReducer = createSlice({
  name: 'grafo',
  initialState,
  reducers: {
    populateMap: (state, action) => {
      const map = JSON_MAP
      state.nodes = map.nodes
      state.edges = map.edges
    },
  },
})

// Action creators are generated for each case reducer function
export const { populateMap } = grafoReducer.actions

export default grafoReducer.reducer
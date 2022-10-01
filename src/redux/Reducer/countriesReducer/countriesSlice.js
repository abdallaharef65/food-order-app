/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit'

const initialState = { showModal: false }

const infoSlice = createSlice({
  name: 'visible',
  initialState: initialState,

  reducers: {
    showDetailsModal: (state) => {
      state.showModal = !state.showModal
    },
  },
})

export const { showDetailsModal } = infoSlice.actions

export default infoSlice.reducer

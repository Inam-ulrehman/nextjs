import { configureStore } from '@reduxjs/toolkit'
import servicesSlice from './features/services/servicesSlice'
import websitecontentSlice from './features/websitecontent/websitecontentSlice'

const store = configureStore({
  reducer: {
    services: servicesSlice,
    websitecontent: websitecontentSlice,
  },
})

export default store

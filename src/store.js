import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './features/contacts/contactsSlice'
import servicesSlice from './features/services/servicesSlice'
import websitecontentSlice from './features/websitecontent/websitecontentSlice'

const store = configureStore({
  reducer: {
    services: servicesSlice,
    contacts: contactsSlice,
    websitecontent: websitecontentSlice,
  },
})

export default store

import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './features/contacts/contactsSlice'
import servicesSlice from './features/services/servicesSlice'
import usersSlice from './features/users/usersSlice'
import websitecontentSlice from './features/websitecontent/websitecontentSlice'

const store = configureStore({
  reducer: {
    users: usersSlice,
    services: servicesSlice,
    contacts: contactsSlice,
    websitecontent: websitecontentSlice,
  },
})

export default store

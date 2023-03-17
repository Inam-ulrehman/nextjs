import { customFetch } from '@/utils/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  // register
  name: '',
  email: '',
  phone: '',
  note: '',
  category: '',
  date: new Date().toLocaleDateString('en-ca'),
  availableTimes: '',
  slot: {},
  // search
  searchName: '',
  searchEmail: '',
  searchPhone: '',
  searchDate: '',
  // pagination
  list: [],
  page: 1,
  limit: 10,
  count: '',
  sort: '-createdAt',
  searchConfirmed: false,
  // delete Id
  deleteId: '',
  // update Id
  updateId: '',
  refreshData: false,
  refreshSlotData: false,
  // deleteMany
  deleteMany: [],
  isLoading: false,
}
export const contactsThunk = createAsyncThunk(
  'contacts/contactsThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/contacts')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
//======== Get All Contacts========
export const allContactsThunk = createAsyncThunk(
  'contacts/allContactsThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/contacts')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
    getStateValues: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(contactsThunk.pending, (state, { payload }) => {
        console.log('promise pending')
        state.isLoading = true
      })
      .addCase(contactsThunk.fulfilled, (state, { payload }) => {
        console.log('promise fulfilled')
        console.log(payload)
        state.isLoading = false
      })
      .addCase(contactsThunk.rejected, (state, { payload }) => {
        console.log('promise rejected')
        console.log(payload)
        state.isLoading = false
      })
      // Get All Contacts
      .addCase(allContactsThunk.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(allContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(allContactsThunk.rejected, (state, { payload }) => {
        console.log(payload)
        state.isLoading = false
      })
  },
})
export const { createFunction, getStateValues } = contactsSlice.actions
export default contactsSlice.reducer

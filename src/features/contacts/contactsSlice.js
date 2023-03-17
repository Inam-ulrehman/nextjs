import { customFetch } from '@/utils/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  // search
  searchName: '',
  searchEmail: '',
  searchMobile: '',
  // pagination
  list: [],
  page: 1,
  limit: 10,
  nbHits: '',
  sort: '-createdAt',
  searchConfirmed: false,
  // delete Id
  deleteId: '',
  // update Id
  updateId: '',
  refreshData: false,
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

  async (state, thunkAPI) => {
    try {
      const response = await customFetch.get(
        `/contacts?name=${state?.searchName}&email=${state?.searchEmail}&mobile=${state?.searchMobile}&sort=${state?.sort}&limit=${state?.limit}&page=${state?.page}`
      )

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
    clearState: (state, { payload }) => {
      // search
      state.searchName = ''
      state.searchEmail = ''
      state.searchMobile = ''
      // pagination
      state.page = 1
      state.limit = 10
      state.sort = '-createdAt'
    },
    //======pagination=======
    next: (state, { payload }) => {
      state.page = state.page + 1
    },
    prev: (state, { payload }) => {
      state.page = state.page - 1
    },
    index: (state, { payload }) => {
      const index = Number(payload)
      state.page = index
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
        console.log(payload)
        state.list = payload.list
        state.nbHits = payload.nbHits
        state.isLoading = false
      })
      .addCase(allContactsThunk.rejected, (state, { payload }) => {
        console.log(payload)
        state.isLoading = false
      })
  },
})
export const { createFunction, getStateValues, clearState, next, prev, index } =
  contactsSlice.actions
export default contactsSlice.reducer

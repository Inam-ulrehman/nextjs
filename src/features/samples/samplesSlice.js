import { customFetch } from '@/utils/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  // register
  name: '',
  email: '',
  mobile: '',
  note: '',
  category: '',
  date: new Date().toLocaleDateString('en-ca'),
  // search
  searchName: '',
  searchEmail: '',
  searchMobile: '',
  searchDate: '',
  // pagination
  list: [],
  page: 1,
  limit: 10,
  count: '',
  sort: '-createdAt',
  // delete Id
  deleteId: '',
  // update Id
  updateId: '',
  refreshSlotData: false,
  // deleteMany
  deleteMany: [],
  isLoading: false,
}
export const samplesThunk = createAsyncThunk(
  'samples/samplesThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/products/static')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const samplesSlice = createSlice({
  name: 'samples',
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
      // register
      state.name = ''
      state.email = ''
      state.email = ''
      state.mobile = ''
      state.note = ''
      state.category = ''
      state.date = new Date().toLocaleDateString('en-ca')
      state.availableTimes = ''
      state.slot = {}
      // search
      state.searchName = ''
      state.searchEmail = ''
      state.searchMobile = ''
      state.searchDate = ''
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
      .addCase(samplesThunk.pending, (state, { payload }) => {
        console.log('promise pending')
        state.isLoading = true
      })
      .addCase(samplesThunk.fulfilled, (state, { payload }) => {
        console.log('promise fulfilled')
        console.log(payload)
        state.isLoading = false
      })
      .addCase(samplesThunk.rejected, (state, { payload }) => {
        console.log('promise rejected')
        console.log(payload)
        state.isLoading = false
      })
  },
})
export const { createFunction, getStateValues } = samplesSlice.actions
export default samplesSlice.reducer

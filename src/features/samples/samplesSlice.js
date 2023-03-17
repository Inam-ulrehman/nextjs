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

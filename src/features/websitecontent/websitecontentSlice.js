import { customFetch } from '@/utils/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  headerHeight: '',
  name: '',
  email: '',
  password: '',
  isLoading: false,
}

export const websitecontentThunk = createAsyncThunk(
  'websitecontent/websitecontentThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/products/static')

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const websitecontentSlice = createSlice({
  name: 'websitecontent',
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
      .addCase(websitecontentThunk.pending, (state, { payload }) => {
        console.log('promise pending')
        state.isLoading = true
      })
      .addCase(websitecontentThunk.fulfilled, (state, { payload }) => {
        console.log('promise fulfilled')
        state.isLoading = true
      })
      .addCase(websitecontentThunk.rejected, (state, { payload }) => {
        console.log('promise rejected')
        state.isLoading = true
      })
  },
})

export const { createFunction, getStateValues } = websitecontentSlice.actions

export default websitecontentSlice.reducer

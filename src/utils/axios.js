import axios from 'axios'

// === UserData Root Url ===//

export const customFetch = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
})

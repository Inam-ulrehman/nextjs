import axios from 'axios'

// === UserData Root Url ===//

export const customFetch = axios.create({
  baseURL: 'https://www.inamwebsolutions.com/api/v1/',
})
export const customFetchLocal = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
})

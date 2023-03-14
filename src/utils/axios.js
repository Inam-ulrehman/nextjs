import axios from 'axios'

// === UserData Root Url ===//

export const customFetch = axios.create({
  baseURL: 'https://www.inamwebsolutions.com/api/v1/',
})

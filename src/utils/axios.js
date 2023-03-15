import axios from 'axios'

// === UserData Root Url ===//

export const customFetch = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WEBSITE}/api/v1`,
})

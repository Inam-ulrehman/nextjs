import axios from 'axios'

// === UserData Root Url ===//

export const customFetch = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WEBSITE}/api/v1`,
})

//

export const fetchPortfolios = async () => {
  const boltSign = await axios('https://boltsign.herokuapp.com/')
  const jobProjectRehman = await axios(
    'https://jobprojectrehman.herokuapp.com/'
  )
  const aryanaSpa = await axios('https://aryanaspa.herokuapp.com/')
}

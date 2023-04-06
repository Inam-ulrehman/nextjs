import { customFetch } from '@/utils/axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import useSWRConfig from 'swr'

const useBlogs = ({ page, limit }) => {
  const { data, error, isLoading } = useSWRConfig(
    `/blogs?page=${page}&limit=${limit}`,
    customFetch
  )

  return {
    data,
    isLoading,
    error,
  }
}

export { useBlogs }

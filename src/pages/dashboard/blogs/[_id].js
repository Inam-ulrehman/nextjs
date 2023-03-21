import DashboardLayout from '@/components/dashboard/dashboard-layout'
import React from 'react'

const SingleBlog = () => {
  return <div>SingleBlog</div>
}

SingleBlog.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
export default SingleBlog
